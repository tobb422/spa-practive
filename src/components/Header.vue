<template>
  <header class="header">
    <h1 class="logo">
      <a href="/">SAMPLE SITE</a>
    </h1>
    <nav class="global-nav">
      <ul>
        <li class="nav-item active"><a href="#">HOME</a></li>
        <li class="nav-item"><a href="#">ABOUT</a></li>
        <li class="nav-item"><a href="#">NEWS</a></li>
        <li class="nav-item"><a href="#">TOPICS</a></li>
        <li class="nav-item"><a href="#">DOCS</a></li>
        <li class="nav-item"><a href="#">BLOGS</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default { name: "Header" };
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding-bottom: 10px;
  background: url('../assets/bg-header.png');
  box-shadow: 0 0 10px 1px #e3e3e3;
}

.logo {
  width: 225px;
  height: 56px;
  margin: 0 auto;
  background: url('../assets/logo.png') no-repeat;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.global-nav {
  margin-top: 15px;
  text-align: center;

  .nav-item {
    display: inline-block;
    margin: 0 10px;
  }

  .nav-item a {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    color: #666;
    font-size: 1.3rem;
    letter-spacing: 1px;
    transition: 0.15s;
  }
  
  .nav-item.active a, .nav-item a:hover {
    background-color: #d03c56;
    color: #fff;
  }
}

</style>
