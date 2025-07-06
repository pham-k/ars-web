<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})

const router = useRouter()
const { login } = useAuth()
const isAuthenticating = ref(false)

const handleSignIn = async (credentials: { email: string; password: string }) => {
  try {
    // await login(credentials)
    isAuthenticating.value = true
    await new Promise(resolve => setTimeout(resolve, 2000));
    isAuthenticating.value = false

    await router.push('/home')
  } catch (error: any) {
    console.error('Login failed:', error.message)
    // The error will be handled by the LoginForm component
    throw error
  }
}
</script>

<template>
  <SignInForm @signIn="handleSignIn" :loading="isAuthenticating" />
</template> 