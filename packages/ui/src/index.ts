// Components
export * from './components/TButton'
export * from './components/TIcon'
export * from './components/TCard'
export * from './components/TInput'
export * from './components/TLoginForm'
export * from './components/TAuthWrapper'
export * from './components/TTopBar'
export * from './components/TContextMenu'
export * from './components/TAppLayout'
export * from './components/TPopup'
export * from './components/TProfile'
export * from './components/TParentMode'
export * from './components/TDraggableList'
export * from './components/TSplashScreen'
export * from './components/TFramework'
export * from './components/TTikoLogo'
export * from './components/TSSOButton'
export * from './components/TSpinner'
export * from './components/TAlert'

export { default as TInputText } from './components/TForm/inputs/TInputText/TInputText.vue';
export { default as TInputNumber } from './components/TForm/inputs/TInputNumber/TInputNumber.vue';
export { default as TInputEmail } from './components/TForm/InputEmail/InputEmail.vue';
export { default as TInputRange } from './components/TForm/InputRange.vue';
export { default as TInputSelect } from './components/TForm/inputs/TInputSelect/TInputSelect.vue';
export { default as TInputCheckbox } from './components/TForm/inputs/TInputCheckbox/TInputCheckbox.vue';
export { default as TInputRadio } from './components/TForm/inputs/TInputRadio/TInputRadio.vue';
export { default as TTextArea } from './components/TForm/inputs/TInputTextArea/TInputTextArea.vue';


// TrustCafe-style components with T prefix (temporarily disabled due to import issues)
// export * from './components/TForm'
// export * from './components/TBanner'
export * from './components/TToast'
// export * from './components/TChip'
// export * from './components/TToolTip'

// Specialized Components
export { default as TCardCommunication } from './components/TCard/TCardCommunication.vue'
export type { Card } from './components/TCard/TCardCommunication.vue'

// Composables
export { useI18n } from './composables/useI18n'
export type { TranslationKey } from './i18n/types'
export { useEventBus, createEventBus } from './composables/useEventBus'
export type {
  EventMap,
  EventHandler,
  EventBusComposable,
  TikoEvents
} from './composables/useEventBus.model'
export { useId, useIds, useFormIds } from './composables/useId'
export { useParentMode } from './composables/useParentMode'
export type {
  ParentModeState,
  ParentModeSettings,
  ParentModeAppPermissions,
  ParentModeResponse,
  ParentModeToggleProps,
  ParentModePinInputProps
} from './composables/useParentMode.model'
export { useTikoConfig } from './composables/useTikoConfig'
export { useDraggable } from './composables/useDraggable'
export type { DraggableItem, UseDraggableOptions } from './composables/useDraggable'
export { useLocalStorage, storage } from './composables/useLocalStorage'

// Utilities
export * from './utils'
export * from './utils/splash-screen-config'

// Types
export * from './types'

// Re-export icon types and utilities for documentation
export type { Icons } from 'open-icon'
export { Icons as IconList } from 'open-icon'
