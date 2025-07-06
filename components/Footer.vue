<template>
  <div class="footer">
    <div>Ars Project</div>
    <div class="icons">
      <Icon name="mdi:github" size="1.5rem"></Icon>
      <Icon name="mdi:web" size="1.5rem"></Icon>
      <Icon name="mdi:linkedin" size="1.5rem"></Icon>
    </div>
    <div>By pham-k</div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/stylesheet/core/color';

.footer {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: color.$dark;
  color: color.$light;
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>