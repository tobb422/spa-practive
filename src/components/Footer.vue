<template>
  <footer class="footer">
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style lang="scss">
@import "../styles/border";

.footer {
  height: 100px;
  width: 100%;

  @include border;  
}
</style>
