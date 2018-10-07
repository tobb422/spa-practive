<template>
  <div class="sidemenu">
  </div>
</template>

<script>
  export default { name: "SideMenu" };
</script>

<style scoped lang="scss">
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.sidemenu {
  float: right;
  width: 275px;
}
</style>
