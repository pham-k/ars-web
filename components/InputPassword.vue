<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control has-icons-left">
      <input 
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="password"
        autocomplete="current-password"
        :placeholder="placeholder || 'Enter your password'"
        :required="required"
      >
      <Icon name="mdi:password-outline" class="prefix-icon"/>
<!--      <Icon name="mdi:eye-outline" class="postfix-icon" style="color: var(&#45;&#45;color-dark)"/>-->
      <p class="help is-green">Password is strong</p>
    </div>
  </div>
</template> 