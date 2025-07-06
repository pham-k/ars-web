<script setup>
import TopMenu from "~/components/TopMenu.vue";
import LeftDrawer from "~/components/LeftDrawer.vue";
import RightDrawer from "~/components/RightDrawer.vue";
</script>

<template>
  <header>
    <TopMenu @tapBurger="handleTapBurger" @tapAccount="handleTapAccount"></TopMenu>
  </header>

  <aside>
    <LeftDrawer :open="leftDrawerOpened"></LeftDrawer>
  </aside>

  <aside>
    <RightDrawer :open="rightDrawerOpened"></RightDrawer>
  </aside>

  <main>
    Main content
    <slot />
  </main>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
const leftDrawerOpened = ref(false)
const rightDrawerOpened = ref(false)

function handleTapBurger() {
  leftDrawerOpened.value = !leftDrawerOpened.value
  if (rightDrawerOpened.value) {
    rightDrawerOpened.value = false
  }
}

function handleTapAccount() {
  rightDrawerOpened.value = !rightDrawerOpened.value
  if (leftDrawerOpened.value) {
    leftDrawerOpened.value = false
  }
}
</script>

<style scoped>
main {
  margin: 68px 0 40px 0;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>