<template>
  <nav :class="['right-drawer', {'is-open': open}]">
    <div class="menu">
      <ul class="menu-list">
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:account-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Account</a>
        </li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:settings-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Settings</a>
        </li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:logout" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Sign out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean,
}>()
</script>

<style scoped lang="scss">

</style>