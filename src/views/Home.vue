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
