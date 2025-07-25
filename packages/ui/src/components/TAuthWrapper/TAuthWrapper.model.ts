export interface TAuthWrapperProps {
  /**
   * Background image URL for the login screen
   */
  backgroundImage?: string
  
  /**
   * Title displayed on the login screen
   * @default 'Welcome to Tiko'
   */
  title?: string
  
  /**
   * Name of the app (used for splash screen and authentication context)
   * @default 'todo'
   */
  appName?: string
}

export interface TAuthWrapperSlots {
  /**
   * Content displayed when user is authenticated
   */
  default: {}
}

export interface TAuthWrapperState {
  /**
   * Whether the app is in initialization phase
   */
  isInitializing: boolean
  
  /**
   * Whether authentication is in progress
   */
  authLoading: boolean
  
  /**
   * Current authentication error message
   */
  authError: string | null
}

export interface TAuthWrapperMethods {
  /**
   * Handle Apple Sign-In flow
   */
  handleAppleSignIn: () => Promise<void>
  
  /**
   * Handle email-based authentication
   */
  handleEmailSubmit: (email: string, fullName?: string) => Promise<void>
  
  /**
   * Handle verification code submission
   */
  handleVerificationSubmit: (email: string, code: string) => Promise<void>
  
  /**
   * Resend verification code
   */
  handleResendCode: (email: string) => Promise<void>
  
  /**
   * Clear authentication error
   */
  clearAuthError: () => void
  
  /**
   * Handle splash screen completion
   */
  handleSplashComplete: () => void
}