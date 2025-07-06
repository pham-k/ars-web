export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials extends LoginCredentials {
  name: string
  confirmPassword: string
}

export interface User {
  id: string
  email: string
  name: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface ApiError {
  message: string
  statusCode: number
  errors?: Record<string, string[]>
}

export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
} 