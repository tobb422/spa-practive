<template>
  <div class="sidemenu">
    <h2 class="heading">RANKING</h2>
    <ol class="ranking">
      <li class="ranking-item">
        <a href="#">
          <div class="order-box">
            <img class="image" src="../assets/coding.jpg" alt="コーディング画面">
            <span class="order"></span>
          </div>
          <p class="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
        </a>
      </li>
    </ol>
    <h2 class="heading">DOCUMENTS</h2>
    <ul class="documents">
      <li>
        <h3 class="title">HTML5</h3>
        <ul>
          <li><a href="#">追加された要素</a></li>
          <li><a href="#">削除された要素</a></li>
          <li><a href="#">意味が変わった要素</a></li>
          <li><a href="#">HTML5のコンテンツモデル</a></li>
        </ul>
      </li>
      <li>
        <h3 class="title">CSS3</h3>
        <ul>
          <li><a href="#">追加されたプロパティ</a></li>
          <li><a href="#">追加されたセレクタ</a></li>
          <li><a href="#">追加された単位</a></li>
        </ul>
      </li>
      <li>
        <h3 class="title">JavaScript</h3>
        <ul>
          <li><a href="#">JavaScriptの言語仕様</a></li>
          <li><a href="#">ECMAScriptとは？</a></li>
          <li><a href="#">jQueryとは？</a></li>
        </ul>
      </li>
      <li>
        <h3 class="title">Sass, Less, Stylus</h3>
        <p>準備中</p>
      </li>
    </ul>
    <!--<h2 class="hidedn">SEARCH</h2>-->
    <form class="search-box">
      <input class="search-input" type="text" name="search" placeholder="SEARCH">
      <input class="search-button" type="submit" value="検索">
      <p class="text">サイト内の文章を検索できます。</p>
    </form>
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

.heading {
  padding: 10px 12px;
  background: url("../assets/bg-news.png");
  letter-spacing: 1px;
  font-size: 1.6rem;
  color: rgb(255, 0, 0);
}

.ranking {
  margin-bottom: 30px;
  list-style-type: none;
  width: 100%;
  padding-left: 0;

  .ranking-item {
    margin-top: 15px;
  }

  .ranking-item a {
    display: block;
    font-size: 0;
    transition: opacity 0.15s;
  }

  .ranking-item a:hover {
    opacity: 0.8;
  }

  .order-box {
    display: inline-block;
    position: relative;
    width: 55px;
    height: 55px;
    padding-top: 9px;
    padding-right: 19px;

    .image {
      width: 100%;
      height: 100%;
    }

    .order {
      position: absolute;
      top: 0;
      right: 10px;
      width: 18px;
      height: 18px;
      border: 1px solid #ccc;
      color: #aaa;
      vertical-align: 20px;
      text-align: center;
      font-weight: bold;
      line-height: 16px;
      border-radius: 9px;
    }

    .order::before {
      content: '1';
      display: inline-block;
      font-size: 1.0rem;
    }
  }

  .text {
    display: inline-block;
    width: 160px;
    color: #000;
    vertical-align: top;
    line-height: 1.5;
    font-size: 1.0rem;
    box-sizing: border-box;
  }

  .ranking-item:nth-of-type(1) .order {
    border: none;
    color: #fff;
    font-weight: normal;
    line-height: 18px;
    background-color: #dab413;
  }
}

.documents {
  margin: 10px 10px 30px;
}

.documents, .documents ul {
  list-style-type: none;
}

.documents > li .title {
  margin: 15px 0;
  padding-left: 8px;
  border-left: 5px solid #d03c56;
  font-size: 1.4rem;
  line-height: 1.2;
}

.documents > li + li {
  margin-top: 25px;
}

.documents > li ul {
  margin: 15px;
}

.documents > li ul > li {
  margin-bottom: 15px;
  padding-left: 10px;
}

.documents a:hover {
  text-decoration: underline;
}

.search-box {
  padding: 15px;
  background-color: #ccc;
  font-size: 0;

  .search-input {
    width: 205px;
    height: 26px;
    padding: 0 10px;
    border: none;
  }

  .search-button {
    width: 40px;
    height: 26px;
    border: none;
    background-color: #d03c56;
    color: #fff;
    cursor: pointer;
  }

  .text {
    margin-top: 12px;
  }
}

.search-box > * {
  font-size: 1.2rem;
}

</style>
