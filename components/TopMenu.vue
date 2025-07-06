<template>
  <nav class="top-menu" role="navigation" aria-label="main navigation">
    <button class="button is-icon" @click="handleClickBurger">
      <Icon name="mdi:hamburger-menu" size="1.5rem" style="color: var(--color-dark)"/>
    </button>
    <button class="button is-icon" @click="handleClickAccount">
      <Icon name="mdi:account-circle-outline" size="1.5rem" style="color: var(--color-dark)"/>
    </button>
  </nav>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    tapBurger: [],
    tapAccount: []
  }>();

  function handleClickBurger() {
    emit('tapBurger');
  }

  function handleClickAccount() {
    emit('tapAccount');
  }
</script>

<style scoped lang="scss">

</style>