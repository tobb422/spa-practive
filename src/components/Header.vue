<template>
  <header class="header">
  </header>
</template>

<script>
export default { name: "Header" };
</script>

<style scoped lang="scss">
@import "../styles/border";

.header {
  height: 100px;
  width: 100%;

  @include border;
}
</style>
