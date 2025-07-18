import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TAuthWrapper from './TAuthWrapper.vue'

// Mock the store
const mockAuthStore = {
  user: null,
  isAuthenticated: false,
  session: null,
  initialize: vi.fn(),
  refreshSession: vi.fn(),
  setupAuthListener: vi.fn(),
  initializeFromStorage: vi.fn().mockResolvedValue(undefined),
  signInWithPasswordlessEmail: vi.fn(),
  verifyEmailOtp: vi.fn(),
  resendEmailOtp: vi.fn(),
  signInWithApple: vi.fn()
}

const mockAppStore = {
  initializeApp: vi.fn()
}

// Mock the stores
vi.mock('@tiko/core', () => ({
  useAuthStore: () => mockAuthStore,
  useAppStore: () => mockAppStore
}))

// Mock useTikoConfig
vi.mock('../../composables/useTikoConfig', () => ({
  useTikoConfig: () => ({
    config: { value: { theme: { primary: 'blue' } } }
  })
}))

// Mock child components
vi.mock('../TSplashScreen/TSplashScreen.vue', () => ({
  default: {
    name: 'TSplashScreen',
    template: '<div class="splash-screen"><slot /></div>',
    props: ['appName', 'appIcon', 'theme', 'duration', 'showLoading', 'loadingText', 'version', 'enableTransitions', 'backgroundColor'],
    emits: ['complete']
  }
}))

vi.mock('../TAppLayout/TAppLayout.vue', () => ({
  default: {
    name: 'TAppLayout',
    template: '<div class="app-layout"><slot /></div>',
    props: ['title', 'subtitle', 'showHeader']
  }
}))

vi.mock('../TLoginForm/TLoginForm.vue', () => ({
  default: {
    name: 'TLoginForm',
    template: '<div class="login-form"></div>',
    props: ['isLoading', 'error', 'appId'],
    emits: ['success', 'error']
  }
}))

describe('TAuthWrapper.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
    mockAuthStore.user = null
    mockAuthStore.isAuthenticated = false
  })
  
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders correctly with default props', () => {
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    expect(wrapper.html()).toBeTruthy()
    expect(wrapper.find('.auth-wrapper').exists()).toBe(true)
  })

  it('shows splash screen when initializing', () => {
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    expect(wrapper.findComponent({ name: 'TSplashScreen' }).exists()).toBe(true)
  })

  it('shows login form when not authenticated', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    // Wait for initialization
    await wrapper.vm.$nextTick()
    
    // Wait for initializeFromStorage to resolve
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent({ name: 'TLoginForm' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'TAppLayout' }).exists()).toBe(true)
  })

  it('shows main content when authenticated', async () => {
    mockAuthStore.isAuthenticated = true
    mockAuthStore.user = { id: 'user-123', email: 'test@example.com' }
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      },
      slots: {
        default: '<div class="main-content">Main app content</div>'
      }
    })
    
    // Wait for initialization
    await wrapper.vm.$nextTick()
    
    // Wait for initializeFromStorage to resolve
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain('Main app content')
    expect(wrapper.findComponent({ name: 'TLoginForm' }).exists()).toBe(false)
  })

  it('displays background image when provided', () => {
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app',
        backgroundImage: '/test-image.jpg'
      }
    })
    
    const backgroundImage = wrapper.find('.auth-wrapper__image')
    expect(backgroundImage.exists()).toBe(true)
    expect(backgroundImage.attributes('src')).toBe('/test-image.jpg')
  })


  it('passes correct props to TSplashScreen', () => {
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    const splashScreen = wrapper.findComponent({ name: 'TSplashScreen' })
    expect(splashScreen.props('appName')).toBe('Todo') // Uses defaultTikoSplashConfigs
    expect(splashScreen.props('showLoading')).toBe(true)
    expect(splashScreen.props('duration')).toBe(0)
    expect(splashScreen.props('enableTransitions')).toBe(true)
  })

  it('passes correct props to TLoginForm', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    // Wait for initialization and splash screen
    await wrapper.vm.$nextTick()
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    const loginForm = wrapper.findComponent({ name: 'TLoginForm' })
    expect(loginForm.exists()).toBe(true)
    expect(loginForm.props('appId')).toBe('test-app')
  })

  it('initializes auth store on mount', async () => {
    mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    await vi.runAllTimersAsync()
    
    expect(mockAuthStore.setupAuthListener).toHaveBeenCalled()
    expect(mockAuthStore.initializeFromStorage).toHaveBeenCalled()
  })

  it('handles splash completion correctly', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    expect(wrapper.findComponent({ name: 'TSplashScreen' }).exists()).toBe(true)
    
    // Wait for auth initialization and splash screen timing
    await wrapper.vm.$nextTick()
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    // Should transition to login form
    expect(wrapper.findComponent({ name: 'TLoginForm' }).exists()).toBe(true)
  })

  it('shows title when provided', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Custom App Title',
        appName: 'test-app'
      }
    })
    
    // Wait for initialization and splash screen
    await wrapper.vm.$nextTick()
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    const titleElement = wrapper.find('.auth-wrapper__title')
    expect(titleElement.exists()).toBe(true)
    expect(titleElement.text()).toBe('Custom App Title')
  })

  it('handles login success correctly', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    mockAuthStore.signInWithPasswordlessEmail.mockResolvedValue({ user: { id: '123' } })
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    // Wait for initialization and splash screen
    await wrapper.vm.$nextTick()
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    const loginForm = wrapper.findComponent({ name: 'TLoginForm' })
    expect(loginForm.exists()).toBe(true)
    
    // Trigger email submission
    await loginForm.vm.$emit('emailSubmit', 'test@example.com')
    await wrapper.vm.$nextTick()
    
    expect(mockAuthStore.signInWithPasswordlessEmail).toHaveBeenCalled()
  })

  it('handles login error correctly', async () => {
    mockAuthStore.isAuthenticated = false
    mockAuthStore.user = null
    mockAuthStore.signInWithPasswordlessEmail.mockRejectedValue(new Error('Login failed'))
    
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    // Wait for initialization and splash screen
    await wrapper.vm.$nextTick()
    await vi.runAllTimersAsync()
    await wrapper.vm.$nextTick()
    
    const loginForm = wrapper.findComponent({ name: 'TLoginForm' })
    expect(loginForm.exists()).toBe(true)
    
    // Trigger email submit which will cause an error
    await loginForm.vm.$emit('emailSubmit', 'test@example.com')
    await wrapper.vm.$nextTick()
    
    expect(mockAuthStore.signInWithPasswordlessEmail).toHaveBeenCalled()
  })

  it('applies correct CSS classes', () => {
    const wrapper = mount(TAuthWrapper, {
      props: {
        title: 'Test App',
        appName: 'test-app'
      }
    })
    
    expect(wrapper.find('.auth-wrapper').exists()).toBe(true)
    expect(wrapper.find('.auth-wrapper__background').exists()).toBe(true)
  })

})