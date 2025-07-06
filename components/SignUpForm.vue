<script setup lang="ts">
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const isLoading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match'
      return
    }

    isLoading.value = true
    error.value = ''
    // TODO: Implement your signup logic here
    console.log('Signup attempt with:', { 
      email: email.value, 
      password: password.value,
      name: name.value 
    })
  } catch (e) {
    error.value = 'Failed to create account'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="box" style="width: 400px;">
    <h1 class="title has-text-centered">Sign Up</h1>
    <p class="has-text-centered mb-4">Create your account</p>
    
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control has-icons-left">
          <input 
            v-model="name"
            class="input" 
            type="text" 
            placeholder="Enter your full name"
            required
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <InputEmail
        v-model="email"
        label="Email"
        placeholder="Enter your email"
        required
      />

      <InputPassword
        v-model="password"
        label="Password"
        placeholder="Create a password"
        required
      />

      <InputPassword
        v-model="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        required
      />

      <div v-if="error" class="notification is-danger is-light">
        {{ error }}
      </div>

      <div class="field mt-5">
        <div class="control">
          <button 
            class="button is-primary is-fullwidth" 
            :class="{ 'is-loading': isLoading }"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div class="has-text-centered mt-4">
        <p>Already have an account? 
          <NuxtLink to="/pages/sign-in" class="has-text-primary">Login here</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template> 