<template>
  <!-- <TAuthWrapper :backgroundImage="backgroundImage" :title="'Yes/No'"> -->
    <TAppLayout
    :title="t(keys.yesno.yesOrNo)"
    :show-header="true"
    @profile="handleProfile"
    @settings="handleSettings"
    @logout="handleLogout"
  >
    <template #app-controls>
      <!-- App-specific controls on the left -->
      <TButton
        icon="edit"
        type="outline"
        color="secondary"
        @click="showQuestionInput()"
        :aria-label="t(keys.yesno.editQuestion)"
      />

      <!-- App settings button (only visible in parent mode) -->
      <TButton
        v-if="parentMode.isUnlocked.value"
        icon="settings"
        type="outline"
        color="secondary"
        @click="handleAppSettings"
        :aria-label="t(keys.yesno.yesnoSettings)"
      />
    </template>

    <div :class="bemm('', ['', showFeedback ? feedbackType : ''])">
      <!-- Main question display -->
      <main :class="bemm('main')">
        <div
          :class="bemm('question')"
          @click="speakQuestion"
          data-cy="question-display"
          :disabled="isPlaying"
        >
          <div :class="bemm('question-text')"
          @click.stop="speakQuestion">
            {{ currentQuestion }}
          </div>

          <div :class="bemm('question-controls')">
            <TButton
              :icon="'edit'"
              type="outline"
              @click.stop="showQuestionInput"
              :aria-label="t(keys.yesno.editQuestion)"
            />
            <TButton
              :icon="isPlaying ? Icons.VOLUME_MUTE : Icons.VOLUME_III"
              type="outline"
              @click.stop="speakQuestion"
              :aria-label="t(keys.common.speak)"
            />
          </div>
        </div>

        <!-- Answer buttons -->
        <div :class="bemm('answers', ['', localSettings.buttonSize])">
          <YesNoButton
          :class="bemm('answer',['','yes'])"
            :mode="0"
            :size="localSettings.buttonSize"
            @click="() => handleAnswer('yes')"
          ></YesNoButton>
          <YesNoButton
          :class="bemm('answer',['','no'])"
            :mode="1"
            :size="localSettings.buttonSize"
            @click="() => handleAnswer('no')"
          ></YesNoButton>
        </div>
      </main>

      <!-- Feedback overlay -->
      <div
        v-if="showFeedback"
        :class="bemm('feedback', ['', feedbackType as string])"
      >
        <TIcon :name="feedbackIcon" size="4rem" />
        <span :class="bemm('feedback', 'text')">{{ feedbackText }}</span>
      </div>
    </div>
  </TAppLayout>
  <!-- </TAuthWrapper> -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive, watch, toRefs, inject } from 'vue';
import { useBemm } from 'bemm';
import { TButton, TIcon, TAppLayout, useI18n, useParentMode, type Icons } from '@tiko/ui';
import { useYesNoStore } from '../stores/yesno';
import YesNoSettingsForm from '../components/YesNoSettingsForm.vue';
import QuestionInputForm from '../components/QuestionInputForm.vue';
import YesNoButton from '../components/YesNoButton.vue';

const bemm = useBemm('yes-no');
const yesNoStore = useYesNoStore();
const { t, keys } = useI18n();
const parentMode = useParentMode('yes-no');

// Inject the popup service from TFramework
const popupService = inject<any>('popupService');

// Local state
const showFeedback = ref(false);
const feedbackType = ref<'yes' | 'no'>('yes');

// Local settings copy for immediate UI updates
const localSettings = reactive({
  buttonSize: 'large' as 'small' | 'medium' | 'large',
  autoSpeak: true,
  hapticFeedback: true,
});

// Computed
const { currentQuestion, isPlaying, settings } = toRefs(yesNoStore);

const feedbackIcon = computed(() =>
  feedbackType.value === 'yes' ? 'check-m' : 'multiply-m',
);
const feedbackText = computed(() =>
  feedbackType.value === 'yes' ? t(keys.yesno.yes) : t(keys.yesno.no),
);

// Watch settings and update local copy
watch(
  settings,
  (newSettings) => {
    Object.assign(localSettings, newSettings);
  },
  { immediate: true },
);

// Methods
const speakQuestion = () => {
  yesNoStore.speakQuestion();
};

const handleAnswer = async (answer: 'yes' | 'no') => {
  feedbackType.value = answer;
  showFeedback.value = true;

  // Haptic feedback if enabled
  if (localSettings.hapticFeedback && 'vibrate' in navigator) {
    navigator.vibrate(50);
  }

  await yesNoStore.handleAnswer(answer);

  // Speak answer if autoSpeak is enabled
  if (localSettings.autoSpeak) {
    yesNoStore.speakText(answer === 'yes' ? t(keys.yesno.yes) : t(keys.yesno.no));
  }

  // Hide feedback after 1.5 seconds
  setTimeout(() => {
    showFeedback.value = false;
  }, 1500);
};

const showQuestionInput = () => {
  console.log('[YesNoView] showQuestionInput called');
  console.log('[YesNoView] popupService:', popupService);
  console.log('[YesNoView] QuestionInputForm:', QuestionInputForm);

  try {
    popupService.open({
      component: QuestionInputForm,
      title: t(keys.yesno.editQuestion),
      config: {
        background: true,
        position: 'center',
        canClose: true
      },
      props: {
        onApply: async (question: string) => {
          console.log('[YesNoView] onApply called with:', question);
          await yesNoStore.setQuestion(question);
          popupService.close();
        },
      },
    });
    console.log('[YesNoView] Popup opened successfully');
  } catch (error) {
    console.error('[YesNoView] Error opening popup:', error);
  }
};

const handleAppSettings = () => {
  popupService.open({
    component: YesNoSettingsForm,
    title: t(keys.yesno.yesnoSettings),
    props: {
      settings: settings.value,
      onApply: async (newSettings: any) => {
        Object.assign(localSettings, newSettings);
        await yesNoStore.updateSettings(newSettings);
        popupService.close();
      },
    },
  });
};

const updateSettings = async () => {
  await yesNoStore.updateSettings(localSettings);
};

const handleProfile = () => {
  console.log('Profile clicked');
  // TODO: Navigate to profile page or open profile modal
};

const handleSettings = () => {
  handleAppSettings();
};

const handleLogout = () => {
  console.log('User logged out');
  // The auth store handles the logout, this is just for any cleanup
};


// Initialize
onMounted(async () => {
  console.log('[YesNoView] Component mounted, loading state...');
  try {
    await yesNoStore.loadState();
    console.log('[YesNoView] State loaded successfully');
  } catch (error) {
    console.error('[YesNoView] Failed to load state:', error);
  }
});
</script>

<style lang="scss" scoped>
.yes-no {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(
      --layout-background-color,
      color-mix(in srgb, var(--color-primary), transparent 75%)
    );
    transition: background-color 0.3s ease;
    opacity: 1;
  }

  &--yes {
    --layout-background-color: var(--color-green);
  }
  &--no {
    --layout-background-color: var(--color-red);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: relative;
    z-index: 10;
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 3rem;
  }

  &__answers {
    display: flex;
    gap: var(--space-s);
    width: 100%;
    justify-content: center;
    font-size: 20vmin;

    // &--small {
    //   font-size: 10vmin;
    // }

    // &--medium {
    //   font-size: 15vmin;
    // }

    // &--large {
    //   font-size: 20vmin;
    // }
  }

  &:has(:hover){
    .yes-no__answer{
      transform: scale(0.75);
      &:hover{
        transform: scale(1.1);
      }
    }
  }

  &__question {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--space);
    cursor: pointer;
    padding: var(--space);
    border-radius: var(--border-radius);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &-text {
      font-size: 2em;
      text-align: center;
    }

    &-controls {
      display: flex;
      gap: var(--space-s);
      opacity: 0.8;

      .yes-no__question:hover & {
        opacity: 1;
      }
    }
  }

  // Feedback overlay
  &__feedback {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    pointer-events: none;
    animation: feedbackPulse 1.5s ease-in-out;

    &__text {
      font-size: 2rem;
      font-weight: 700;
    }

    &--yes {
      color: var(--color-green);
    }

    &--no {
      color: var(--color-green);
    }
  }
}

@keyframes feedbackPulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  20% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
  }
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  .yes-no-question__button {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }

  .yes-no-feedback {
    animation: none;
  }
}
</style>
