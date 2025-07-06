<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  signIn: [credentials: { email: string; password: string }]
}>()

const email = ref('')
const password = ref('')

const handleSubmit = async() => {
  try {
    emit('signIn', {
      email: email.value,
      password: password.value
    })
  } catch (e: any) {
    console.log(e);
  }
};
</script>

<template>
  <div class="card">
    <form @submit.prevent="handleSubmit">
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

      <div class="field mt-5">
        <div class="control">
          <button
              class="is-primary is-fullwidth"
              :class="{ 'is-loading': loading }"
              type="submit"
          >
            Sign in
          </button>
        </div>
      </div>

      <div>
        <p>Don't have an account?
          <button class="">Sign up</button>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: clamp(280px, calc(90vw - 1rem), 400px);
}
</style>