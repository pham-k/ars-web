<template>
  <nav :class="['left-drawer', {'is-open': open}]">
    <div class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:view-dashboard-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Dashboard</a>
        </li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:email-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Email</a>
        </li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:chat-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Chat</a></li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:post-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Writing</a></li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:book-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Book</a></li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:music-box-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Music</a></li>
        <li>
          <div style="width: 1rem; height: 1rem">
            <Icon name="mdi:image-outline" size="1rem" style="color: var(--black)"/>
          </div>
          <a>Image</a></li>
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