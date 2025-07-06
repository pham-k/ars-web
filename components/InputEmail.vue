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
        type="email"
        autocomplete="username"
        :placeholder="placeholder || 'Enter your email'"
        :required="required"
      >
<!--      <Icon name="mdi:error-outline" class="prefix-icon"/>-->
<!--      <Icon name="mdi:check" class="prefix-icon"/>-->
      <Icon name="fe:disabled" class="prefix-icon"/>
      <p class="help">This field is disabled</p>
    </div>
  </div>
</template> 