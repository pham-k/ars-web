<template>
<!--  <div class="card flex justify-center">-->
  <Drawer v-model:visible="visible" header="Drawer">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </Drawer>
  <Button icon="pi pi-arrow-right" @click="visible = true" />
<!--  </div>-->
</template>

<script setup>
  import Drawer from 'primevue/drawer';
  import { ref } from "vue";
  const visible = ref(false);
</script>

<style>
.p-drawer-left .p-drawer {
  height: calc(100vh - 72px);
  margin: 64px 0 8px 12px;
  border: 1px solid var(--ars-menubar-border-color);
  border-radius: var(--ars-menubar-border-radius);
}

div:has(> .p-drawer) {
  align-items: start;
}
</style>