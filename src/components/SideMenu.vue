<template>
  <div class="sidemenu">
    <h2 class="heading">RANKING</h2>
    <ol class="ranking">
      <li class="ranking-item">
        <a href="#">
          <img class="image" src="../assets/coding.jpg" alt="コーディング画面">
          <span class="order"></span>
          <p class="text">HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
        </a>
      </li>
    </ol>
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

  .image {
    width: 55px;
    height: 55px;
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

  .order {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin: 0 10px;
    border: 1px solid #ccc;
    color: #aaa;
    vertical-align: 20px;
    text-align: center;
    font-weight: bold;
    line-height: 16px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .ranking-item:nth-of-type(1) .order {
    border: none;
    color: #fff;
    font-weight: normal;
    line-height: 18px;
    background-color: #dab413;
  }

  .order::before {
    content: '1';
    display: inline-block;
    font-size: 1.0rem;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
</style>
