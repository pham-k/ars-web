import type {AuthResponse, LoginCredentials, SignupCredentials, User} from '~/types/auth'

export const useAuth = () => {
  const user = useState<User | null>('auth.user', () => null)
  const token = useState<string | null>('auth.token', () => null)

  // Login function
  const signIn = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      return await $fetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: credentials,
      })
    } catch (error: any) {
      throw error
    }
  }

  // Signup function
  const signUp = async (credentials: SignupCredentials): Promise<AuthResponse> => {
    try {
      return await $fetch<AuthResponse>('/api/auth/signup', {
        method: 'POST',
        body: {
          email: credentials.email,
          password: credentials.password,
          name: credentials.name
        },
      })
    } catch (error: any) {
      throw error
    }
  }

  // Check if user is authenticated
  const isAuthenticated = computed(() => !!user.value && !!token.value)

  // Initialize auth state from cookie
  const initAuth = () => {
    const tokenCookie = useCookie('auth-token')
    if (tokenCookie.value) {
      token.value = tokenCookie.value
      // You might want to validate the token here
      // or fetch user data from the server
    }
  }

  return {
    user: readonly(user),
    token: readonly(token),
    isAuthenticated,
    login: signIn,
    signup: signUp,
    initAuth
  }
}