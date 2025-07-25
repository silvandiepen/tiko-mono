<template>
  <div :class="bemm()">
    <div :class="bemm('icon')">
      <TIcon :name="icon" size="3rem" />
    </div>
    
    <div :class="bemm('content')">
      <h3 :class="bemm('title')">{{ title }}</h3>
      <p :class="bemm('message')">{{ message }}</p>
    </div>

    <div :class="bemm('actions')">
      <TButton
        :label="cancelLabel"
        type="default"
        color="secondary"
        @click="handleCancel"
        :class="bemm('cancel-button')"
      />
      <TButton
        :label="confirmLabel"
        type="fancy"
        :color="confirmColor"
        @click="handleConfirm"
        :class="bemm('confirm-button')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm'
import TButton from '../../TButton/TButton.vue'
import TIcon from '../../TIcon/TIcon.vue'

interface Props {
  title: string
  message: string
  icon?: string
  confirmLabel?: string
  cancelLabel?: string
  confirmColor?: 'primary' | 'success' | 'error' | 'warning'
  onConfirm?: () => void
  onCancel?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'help-circle',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  confirmColor: 'primary'
})

const emit = defineEmits<{
  close: []
}>()

const bemm = useBemm('confirm-dialog')

const handleConfirm = () => {
  props.onConfirm?.()
  emit('close')
}

const handleCancel = () => {
  props.onCancel?.()
  emit('close')
}
</script>

<style lang="scss" scoped>
.confirm-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  min-width: 320px;
  max-width: 500px;
  text-align: center;

  &__icon {
    color: var(--color-warning);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-primary-text);
  }

  &__message {
    margin: 0;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }

  &__cancel-button,
  &__confirm-button {
    flex: 1;
    min-width: 100px;
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .confirm-dialog {
    min-width: auto;
    width: 100%;

    &__actions {
      flex-direction: column-reverse;
    }

    &__cancel-button,
    &__confirm-button {
      width: 100%;
    }
  }
}
</style>