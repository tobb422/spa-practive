<template>
  <section>
    <Header />
    <div class="wrapper clearfix">
      <Main />
      <SideMenu />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Main, SideMenu, Footer }
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  color: #333;
  font-size: 1.2rem;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

a:link, a:visited, a:hover, a:active {
  color: #d03c56;
  text-decoration: none;
}

.wrapper {
  width: 970px;
  margin: 30px auto 40px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
