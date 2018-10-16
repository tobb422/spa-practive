<template>
  <section class="grid">
    <div class="site">
      <a href="#">CAFE SPACE</a>
    </div>

    <nav class="menu">
      <ul>
        <li><a href="#">ホーム</a></li>
        <li><a href="#">お知らせ</a></li>
        <li><a href="#">街角探訪</a></li>
        <li><a href="#">お問い合わせ</a></li>
      </ul>
    </nav>

    <article class="kiji">
      <h1>
        <span>TRAVEL DIALY</span>
        旅先で出会ったカフェテリア
      </h1>

      <div class="kijiinfo">
        <time datetime="2022-12-12">12 DECEMBER 2022</time>
        / SanFrancisco, CA
      </div>

      <p><img src="../assets/coding.jpg" alt=""></p>
      <p>おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...</p>
      <p>というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...</p>
    </article>

    <aside class="kanren">
      <ul>
        <li>
          <a href="#">
            <img src="../assets/logo.png" alt=""/>
            カフェで朝ごはん
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/logo.png" alt=""/>
            あたたかい飲み物で仕事の効率アップ
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/logo.png" alt=""/>
            街角探訪
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/logo.png" alt=""/>
            野菜と炭水化物
          </a>
        </li>
      </ul>
    </aside>

    <div class="copyright">
      <p>Copyright &copy; CAFE SPACE</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Step"
};
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  margin: 0;
}

.grid {
  margin: 0;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

  display: grid;
  grid-template-areas: "head head head" "side1 main side2" "foot foot foot";
  grid-template-columns: 1fr 5fr 200px;

  @media (min-width: 600px) and (max-width: 999px) {
    grid-template-areas: "head head" "side1 main" "side2 side2 " "foot foot";
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 599px) {
    grid-template-areas: "head" "side1" "main" "side2 " "foot";
    grid-template-columns: 1fr;
  }

  .site {
    grid-area: head;
    background-color: #444444;
    padding: 10px;
    text-align: center;

    a {
      color: #ffffff;
      font-size: 2rem;
      text-decoration: none;
    }
  }

  .menu {
    grid-area: side1;
    padding: 40px 0;
    background-color: #f0f0e9;

    @media (max-width: 599px) {
      padding: 0;
      border-top: solid 1px #ffffff;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      @media (max-width: 599px) {
        display: flex;
      }
    }

    li {
      @media (max-width: 599px) {
        flex: 1;
      }
    }

    li:not(:first-child) {
      @media (max-width: 599px) {
        border-left: solid 1px #ffffff;
      }
    }

    li a {
      display: block;
      margin-bottom: 15px;
      padding: 5px;
      background-color: #770000;
      color: #ffffff;
      font-size: 1.4rem;
      text-decoration: none;

      @media (max-width: 599px) {
        padding: 10px 0;
        margin-bottom: 0;
        font-size: 1.2rem;
        text-align: center;
      }
    }

    li a:hover {
      background-color: #662222;
    }
  }

  .kiji {
    grid-area: main;
    padding: 40px;

    @media (max-width: 599px) {
      padding: 40px 20px;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 3.6rem;
    }

    h1 span {
      display: block;
      margin-bottom: 20px;
      color: #930000;
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      margin-top: 0;
      margin-bottom: 20px;
      lihe-height: 2;
      text-align: justify;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .kijiinfo {
    margin-bottom: 0;
    color: #666666;
  }

  .kanren {
    grid-area: side2;
    padding: 40px 20px;
    background-color: #f0f0e9;

    @media (min-width: 600px) and (max-width: 999px) {
      background-color: #cdcdbb;
    }

    @media (max-width: 599px) {
      background-color: #cdcdbb;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      @media (min-width: 600px) and (max-width: 999px) {
        display: flex;
      }

      @media (max-width: 599px) {
        display: flex;
        flex-wrap: wrap;
      }
    }

    li {
      @media (min-width: 600px) and (max-width: 999px) {
        flex: 1;
      }

      @media (max-width: 599px) {
        flex: 1 0 50%;
      }
    }

    li a {
      display: block;
      padding: 5px;
      color: #000;
      font-size: 1.4rem;
      text-decoration: none;
    }

    li a:hover {
      background-color: #eeeeee;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .copyright {
    grid-area: foot;
    background-color: #444444;
    margin-top: 0;
    padding: 10px;
    text-align: center;

    p {
      margin: 0;
      color: #666666;
      font-size: 1.4rem;
    }
  }
}
</style>
