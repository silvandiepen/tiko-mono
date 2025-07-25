<template>
  <div :class="bemm()">
    <!-- Profile Header -->
    <div :class="bemm('header')">
      <!-- Avatar Section with Hover Upload -->
      <div :class="bemm('avatar-section')">
        <div :class="bemm('avatar-wrapper')">
          <div :class="bemm('avatar')">
            <img
              v-if="avatarPreview || avatarUrl"
              :src="avatarPreview || avatarUrl"
              :alt="displayName"
              :class="bemm('avatar-image')"
              @error="handleAvatarError"
            />
            <div
              v-else
              :class="bemm('avatar-fallback')"
              :style="{ backgroundColor: avatarColor }"
            >
              {{ initials }}
            </div>
          </div>

          <!-- Upload overlay - only visible on hover -->
          <label :class="bemm('avatar-upload')">
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              :class="bemm('avatar-input')"
              @change="handleFileSelect"
              :disabled="isProcessing"
            />
            <div :class="bemm('avatar-overlay')">
              <TIcon name="camera" :class="bemm('avatar-icon')" />
            </div>
          </label>
        </div>

        <div v-if="uploadError" :class="bemm('error')">
          {{ uploadError }}
        </div>
      </div>

      <!-- User Basic Info -->
      <div :class="bemm('info')">
        <h2 :class="bemm('name')">{{ displayName }}</h2>
        <p :class="bemm('email')">{{ user.email }}</p>
      </div>
    </div>

    <!-- Profile Details -->
    <div :class="bemm('details')">
      <!-- Member Since -->
      <div :class="bemm('detail-item')">
        <span :class="bemm('detail-label')">{{ t(keys.profile.memberSince) }}</span>
        <span :class="bemm('detail-value')">{{ memberSinceDate }}</span>
      </div>

      <!-- Language -->
      <div :class="bemm('detail-item')">
        <span :class="bemm('detail-label')">{{ t(keys.profile.language) }}</span>
        <span :class="bemm('detail-value')">{{ currentLanguageDisplay }}</span>
      </div>

      <!-- Parent Mode Status -->
      <div v-if="parentMode.isEnabled.value" :class="bemm('detail-item')">
        <span :class="bemm('detail-label')">{{ t(keys.profile.parentMode) }}</span>
        <span :class="bemm('detail-value')">
          <TIcon
            :name="parentMode.isUnlocked.value ? 'shield' : 'lock'"
            :class="bemm('detail-icon', parentMode.isUnlocked.value ? 'active' : 'inactive')"
          />
          {{ parentMode.isUnlocked.value ? t(keys.common.enabled) : t(keys.common.disabled) }}
        </span>
      </div>
    </div>

    <!-- Account Actions -->
    <div :class="bemm('actions')">
      <h3 :class="bemm('actions-title')">{{ t(keys.profile.accountActions) }}</h3>
      <div :class="bemm('actions-list')">
        <TButton
          type="outline"
          icon="lock"
          @click="handleChangePassword"
          :class="bemm('action-button')"
        >
          {{ t(keys.profile.changePassword) }}
        </TButton>

        <TButton
          v-if="!parentMode.isEnabled.value"
          type="outline"
          icon="shield"
          @click="handleSetupParentMode"
          :class="bemm('action-button')"
        >
          {{ t(keys.profile.setupParentMode) }}
        </TButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useBemm } from 'bemm'
import { useI18n } from '../../composables/useI18n'
import { useParentMode } from '../../composables/useParentMode'
import { fileService, useAuthStore } from '@tiko/core'
import TIcon from '../TIcon/TIcon.vue'
import TButton from '../TButton/TButton.vue'
import type { TProfileProps } from './TProfile.model'
import type { PopupService } from '../TPopup/TPopup.service'
import type { ToastService } from '../TToast/TToast.service'

const props = defineProps<TProfileProps>()

const bemm = useBemm('profile')
const { t, keys, locale, availableLocales } = useI18n()
const parentMode = useParentMode('profile')
const authStore = useAuthStore()

// Inject services
const popupService = inject<PopupService>('popupService')
const toastService = inject<ToastService>('toastService')

// Refs
const fileInput = ref<HTMLInputElement>()
const avatarPreview = ref<string>('')
const uploadError = ref<string>('')
const isProcessing = ref(false)

// Computed
const displayName = computed(() => {
  return props.user.user_metadata?.full_name ||
         props.user.user_metadata?.name ||
         props.user.email?.split('@')[0] ||
         'User'
})

const initials = computed(() => {
  return displayName.value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
})

const avatarUrl = computed(() => {
  return props.user.user_metadata?.avatar_url ||
         props.user.user_metadata?.picture ||
         null
})

const avatarColor = computed(() => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
  ]

  const hash = (props.user.email || 'default').split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)

  return colors[Math.abs(hash) % colors.length]
})

const memberSinceDate = computed(() => {
  if (!props.user.created_at) return ''

  const date = new Date(props.user.created_at)
  return date.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const currentLanguageDisplay = computed(() => {
  const userLanguage = props.user.user_metadata?.settings?.language || locale.value
  const localeInfo = availableLocales.value.find(l => l.code === userLanguage)
  return localeInfo ? localeInfo.name : userLanguage
})

// Methods
const handleAvatarError = () => {
  console.warn('Avatar failed to load')
}

const handleFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  // Validate file type
  if (!file.type.startsWith('image/')) {
    uploadError.value = t(keys.profile.invalidFileType)
    return
  }

  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024
  if (file.size > maxSize) {
    uploadError.value = t(keys.profile.fileTooLarge)
    return
  }

  uploadError.value = ''
  isProcessing.value = true

  try {
    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      avatarPreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)

    // Upload file
    const uploadedUrl = await fileService.uploadAvatar(file, props.user.id)

    // Update user metadata
    await authStore.updateUserMetadata({
      ...props.user.user_metadata,
      avatar_url: uploadedUrl
    })

    toastService?.show({
      message: t(keys.profile.profileUpdated),
      type: 'success'
    })
  } catch (error) {
    console.error('Failed to upload avatar:', error)
    uploadError.value = t(keys.profile.imageProcessingFailed)
    avatarPreview.value = ''

    toastService?.show({
      message: t(keys.profile.updateFailed),
      type: 'error'
    })
  } finally {
    isProcessing.value = false
  }
}

const handleChangePassword = () => {
  toastService?.show({
    message: t(keys.settings.passwordChangeNotImplemented),
    type: 'info'
  })
}

const handleSetupParentMode = () => {
  // This will be handled by TTopBar's parent mode setup
  // Close the profile popup to let parent mode setup open
  popupService?.close()
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space);

  &__header {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }

  &__avatar-section {
    position: relative;
  }

  &__avatar-wrapper {
    position: relative;
    width: 6rem;
    height: 6rem;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: var(--color-background);
    border: 3px solid var(--color-border);
  }

  &__avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__avatar-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
  }

  &__avatar-upload {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover .profile__avatar-overlay {
      opacity: 1;
    }
  }

  &__avatar-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  &__avatar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &__avatar-icon {
    font-size: 2rem;
    color: white;
  }

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: var(--space-xs);
    padding: var(--space-xs) var(--space-s);
    background: var(--color-error-bg);
    color: var(--color-error);
    font-size: 0.75rem;
    border-radius: var(--border-radius-sm);
    text-align: center;
  }

  &__info {
    flex: 1;
  }

  &__name {
    margin: 0 0 var(--space-xs) 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-foreground);
  }

  &__email {
    margin: 0;
    font-size: 1rem;
    color: var(--color-text-secondary);
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: var(--space);
  }

  &__detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-s) 0;
  }

  &__detail-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  &__detail-value {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-foreground);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  &__detail-icon {
    font-size: 1rem;

    &--active {
      color: var(--color-success);
    }

    &--inactive {
      color: var(--color-text-secondary);
    }
  }

  &__actions {
    margin-top: var(--space);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
  }

  &__actions-title {
    margin: 0 0 var(--space) 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-foreground);
  }

  &__actions-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
  }

  &__action-button {
    justify-content: flex-start;
  }
}

// Mobile responsiveness
@media (max-width: 480px) {
  .profile {
    &__header {
      flex-direction: column;
      text-align: center;
    }

    &__detail-item {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-xs);
    }
  }
}
</style>
