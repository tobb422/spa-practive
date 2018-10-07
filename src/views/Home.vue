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
            <li class="scroll-item">
              <a href="#">
                <time class="date" datetime="2015-08-12">2015.08.12 WED</time>
                <span class="category">TOPIC</span>
                <span class="title">CSSでここまでできる！？ホントに使えるCSSセレクタ10選！</span>
              </a>
            </li>
          </ul>
        </section>
        <section class="articles">
          <!--<h2 class="hidden">ARTICLES</h2>-->
          <div class="clearfix">
            <a href="#" class="article-box">
              <h3 class="title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
              <p class="desc">
                新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！
              </p>
              <time class="date" datetime="2015-06-17">2015.06.17 WED</time>
              <img class="img" src="../assets/coding.jpg" alt="コーディング画面">
            </a>
            <a href="#" class="article-box">
              <h3 class="title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
              <p class="desc">
                新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！
              </p>
              <time class="date" datetime="2015-06-17">2015.06.17 WED</time>
              <img class="img" src="../assets/coding.jpg" alt="コーディング画面">
            </a>
          </div>
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

.heading {
  padding: 10px 12px;
  background: url("../assets/bg-news.png");
  letter-spacing: 1px;
  font-size: 1.6rem;
  color: rgb(255, 0, 0);
}

.scroll-list {
  max-height: 220px;
  overflow-y: auto;
  margin-bottom: 30px;
  list-style-type: none;

  .scroll-item a {
    display: block;
    padding: 10px 15px;
    color: #333;
    font-size: 0;
    transision: background-color 0.1s;
  }

  .scroll-item a:hover {
    background-color: #fafaf8;
  }

  .scroll-item:nth-of-type(even) a{
    background: url("../assets/bg-news.png");
  }

  .date {
    display: inline-block;
    width: 19%;
    font-size: 1.0rem;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .category {
    display: inline-block;
    width: 8%;
    font-size: 1.0rem;
    border-radius: 5px;
    background-color: #d03c56;
    color: #fff;
    letter-spacing: 1px;
    line-height: 16px;
     text-align: center;
  }

  .category.news {
    background-color: #2c3c53;
  }

  .title {
    display: inline-block;
    width: 73%;
    padding-left: 15px;
    font-size: 1.2rem;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.article-box {
  position: relative;
  display: block;
  width: 315px;
  height: 360px;
  margin-bottom: 30px;
  padding: 210px 15px 0;
  box-shadow: 6px 6px 8px -4px rgba(0, 0, 0, 0.15);
  transition: opacity 0.15s;
  box-sizing: border-box;

  .img {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    margin-top: 30px;
    color: #555;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .desc {
    margin-top: 5px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .date {
    position: absolute;
    right: 0;
    bottom: 15px;
    display: block;
    width: 160px;
    padding: 4px;
    background-color: #b5d264;
    color: #2d3d54;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.1rem;
  }
}

.article-box:hover {
  opacity: 0.8;
}

.article-box:nth-of-type(odd) {
  float: left;
}

.article-box:nth-of-type(even) {
  float: right;
}

.sidemenu {
  float: right;
  width: 275px;
}
</style>
