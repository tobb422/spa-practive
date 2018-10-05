<template>
  <section>
    <Header />
    <div class="wrapper clearfix">
      <main class="main">
      </main>
      <div class="sidemenu">
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Footer }
};
</script>

<style lang="scss">
@import "../styles/border";

.wrapper {
  width: 970px;
  margin: 30px auto 40px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.main {
  display: block;
  float: left;
  height: 500px;
  width: 660px;

  @include border;
}

.sidemenu {
  float: right;
  height: 500px;
  width: 275px;

  @include border;
}
</style>
