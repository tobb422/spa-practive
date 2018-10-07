<template>
  <section>
    <Header />
    <div class="wrapper clearfix">
      <main class="main">
        <section class="hot-topic">
          <h2 class="hidden">HOT TOPIX</h2>
          <a href="#" class="hot-topix">
            <img class="image" src="../assets/coding.jpg" alt="コーディング画面">
            <div class="content">
            </div>
          </a>
        </section>
        <section class="news">
          <h2>NEWS</h2>
        </section>
        <section class="articles">
          <h2 class="hidden">ARTICLES</h2>
        </section>
      </main>
      <div class="sidemenu">
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Footer }
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

.main {
  display: block;
  float: left;
  width: 660px;
}

.hot-topic {
  display: block;
  height: 300px;
  margin-bottom: 30px;
  box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.15);
  transition: opacity 0.15s;
}

.hot-topic:hover {
  opacity: 0.85;
}

.sidemenu {
  float: right;
  width: 275px;
}
</style>
