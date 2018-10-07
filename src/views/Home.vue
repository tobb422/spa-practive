<template>
  <section>
    <Header />
    <div class="wrapper clearfix">
      <main class="main">
        <section class="hot-topic">
          <!--<h2 class="hidden">HOT TOPIX</h2>-->
          <a href="#" class="hot-topic clearfix">
            <img class="image" src="../assets/coding.jpg" alt="コーディング画面">
            <div class="content">
              <h3 class="title">実務で使えるHTML/CSS<br>モダンコーディングTIPS</h3>
              <p class="desc">
                Webフロントエンドの進化の勢いはとどまるところを知りません。
                新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用して...
              </p>
              <time class="date" datetime="2015-09-01">2015.09.01 TUE</time>
            </div>
          </a>
        </section>
        <section class="news">
          <h2 class="heading">NEWS</h2>
          <ul class="scroll-list">
            <li class="scroll-item">
              <a href="#">
                <time class="date" datetime="2015-08-23">2015.08.23 SUN</time>
                <span class="category news">NEWS</span>
                <span class="title">WORKを更新しました。</span>
              </a>
            </li>
          </ul>
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
  background-color: black;

  .image {
    float: left;
    width: 50%;
    height: 100%;
  }

  .content {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    padding: 105px 25px 0;
    backgroung-color: #2d3d54;
    line-height: 1.6;
    box-sizing: border-box;
  }
  
  .title {
    margin-bottom: 15px;
    color: #fff;
    font-weight: normal;
    font-size: 2.0rem;
  }
  
  .desc {
    color: #ddc;
  }

  .date {
    position: absolute;
    top: 60px;
    left: 0;
    width: 140px;
    padding: 4px;
    background-color: #fff;
    color: #2d3d54;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1;
  }

}

.hot-topic:hover {
  opacity: 0.85;
}

.sidemenu {
  float: right;
  width: 275px;
}
</style>
