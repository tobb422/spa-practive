<template>
  <div id="page">
    <header id="page-head">
      <h1 id="site-title">komorikomasha</h1>
      <p id="catch-copy">
        １人じゃできないことも、力を合わせればできる。
        やってみたいことをカタチにする、３人の楽しいものづくり。
      </p>
    </header>

    <div id="page-body">
      <div id="page-body-main">
        <article class="article-detail">
          <header class="article-detail-head">
            <h1 class="page-title">Cafe Debut</h1>
            <figure>
              <img src="../assets/sample_01.jpg" alt="">
              <figcaption>今日のランチのローストビーフサンドを撮影</figcaption>
            </figure>
            <p>
              baser CMS カフェサイト用テーマ<br/>
              baser CMS テーマコンテスト2012 飲食店系テーマ賞受賞（受賞結果はこちら）
            </p>
          </header>

          <section class="article-detail-body">
            <h2 class="heading-typeA">いますぐ、はじめられるカフェサイトテーマ！</h2>
            <p>
              baserCMSは、「コーポレートサイトにちょうどいい」をキャッチコピーにしたcake PHPベースの国産CMS。Cafe Debutは、baseCMSのテーマコンテスト2012に応募するために、チームこもりこましゃで作成しました。<br/>
              baserCMSのインストールと、Cafe Debutテーマの初期設定を行ったら、あとはあなたのスマートフォンのInstagramで写真を撮っていくだけ。<br/>
              Instagramのおしゃれ写真で、すぐに素敵なカフェサイトが出来上がっちゃうフォトログ風baserCMSテーマです。
            </p>

            <table>
              <caption>制作担当</caption>
              <tr>
                <th>コモモ</th>
                <td>企画・デザイン・baserCMSテーマのベース組込み担当</td>
              </tr>
              <tr>
                <th>モリコ</th>
                <td>HTML/CSSコーディング担当</td>
              </tr>
              <tr>
                <th>ひろましゃ</th>
                <td>プラグイン制作、テーマ実装の難しいところとか担当</td>
              </tr>
            </table>

            <section>
              <h3 class="heading-typeB">プラグインでInstagramと連携</h3>
              <p>プラグインでInstagramと連携して、トップページにInstagramで撮影した写真がすぐに反映されます。</p>
              <figure>
                <img src="../assets/sample_01.jpg" alt="">
                <figcaption>今日のランチのローストビーフサンドを撮影</figcaption>
              </figure>
            </section>

            <section>
              <h3 class="heading-typeB">レスポンシブデザインでスマートフォン、タブレット表示も快適</h3>
              <p>さまざまなデバイスの表示対応に、レスポンシブデザインを採用しました。Instagramでお店のメニューを撮影してすぐにスマートフォンで確認できるのも嬉しい♪</p>
              <figure>
                <img src="../assets/sample_01.jpg" alt="">
                <figcaption>今日のランチのローストビーフサンドを撮影</figcaption>
              </figure>
            </section>

            <section>
              <h3 class="heading-typeB">Webフォントだから、飾り文字やアイコンもキレイ</h3>
              <p>サイトのタイトルやナビゲーション、主要な見出しはGoogle Web Font、アイコンはウェブフォント（Fontello）を採用しています。拡大縮小されるスマートフォンやタブレットでも解像度を気にすることなくキレイな文字とアイコン表示を実現できました。</p>
              <figure>
                <img src="../assets/sample_01.jpg" alt="">
                <figcaption>今日のランチのローストビーフサンドを撮影</figcaption>
              </figure>
            </section>
          </section>

          <footer class="article-detail-foot">
            <section>
              <h2 class="heading-typeC">関連リンク</h2>
              <ul>
                <li>Cafe Debutのダウンロードページ</li>
                <li>Cafe Debutのデモページ</li>
                <li>baser CMS公式サイト</li>
                <li>Instagram公式サイト</li>
              </ul>
            </section>

            <aside class="credit-unit">
              <p>撮影協力</p>
              <h2 class="heading-typeC">kitchen nest</h2>
              <p>北海道札幌市中央区南３条西８丁目 大洋ビル２階</p>

              <ul>
                <li>http://www.nest-kitchen.jp</li>
                <li>Facebookページ</li>
              </ul>

              <p>Cafe Debutテーマのイメージ撮影にご協力いただきました。 とっても素敵なお店です。</p>
            </aside>
          </footer>
        </article>
      </div>

      <div id="page-body-sub">
        <section class="news-list">
          <h2>おしらせ</h2>
          <ul>
            <li>
              <time datetime="2013-10-01">2013.10.01</time>
              コモモとモリコで、書籍「HTML/CSSの教科書」を執筆中です。お楽しみに。
            </li>
            <li>
              <time datetime="2013-10-01">2013.10.01</time>
              コモモ・モリコ・ひろましゃ３人のサイト「komorikomash」をオープンしました。
            </li>
          </ul>
        </section>
      </div>
    </div>

    <footer id="page-foot">
      <p id="copy-right"><small>Copyright&copy 2013 @komorikomasha All Rights Reserved.</small></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Sample"
};
</script>

<style scoped lang="scss">
html {
  font-size: 65%;
}

body {
  font-family: "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif;
}

p {
  font-size: 1.4rem;
  line-height: 1.429;
}

ul li {
  font-size: 1.4rem;
  list-style-type: square;
  line-height: 1.429;
}

table {
  font-size: 1.4rem;
  line-height: 1.429;
  border: 1px solid #cccccc;
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid #cccccc;
    padding: 5px 10px;
  }

  th {
    background-color: #eeeeee;
    text-align: left;
  }

  caption {
    text-align: left;
    font-weight: bold;
  }
}

figure {
  font-weight: bold;
  text-align: left;
  margin: 0;
}

figcaption {
  font-size: 1.2rem;
}

#site-title {
  font-size: 3.0rem;
  line-height: 1.2;
  margin-bottom: 0;
}

#catch-copy {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 5px;
}

#page-foot {
  border-top: solid 1px #cccccc;
  margin-top: 15px;
}

#page {
  width: 980px;
  margin: 0 auto;
}

#page-body {
  margin-top: 30px;
}

#page-body:after {
  content: "";
  clear: both;
  display: block;
}

#page-body-main {
  width: 720px;
  float: left;
}

#page-body-sub {
  width: 220px;
  float: right;

  h2 {
    font-size: 1.6rem;
    line-height: 1.375;
    padding: 5px;
    margin-top: 0;
    border-bottom: 1px solid #cccccc;
  }

  .news-list ul {
    padding: 0;
  }

  .news-list li {
    font-size: 12px;
    line-height: 1.5;
    margin: 10px 5px;
    list-style: none;
  }
  
  .news-list time {
    font-weight: bold;
    display: block;
  }
}

.page-title {
  font-size: 2.6rem;
  background-color: #f2f2e5;
  padding: 5px 15px;
  line-height: 1.231;
  margin-top: 0;
}

.heading-typeA {
  font-size: 1.8rem;
  color: #349fa6;
  border-bottom: solid 1px #349fa6;
  padding: 5px;
  line-height: 1.333;
}

.heading-typeB {
  font-size: 1.6rem;
  border-left: solid 5px #e3e4d9;
  padding: 10px;
  line-height: 1.375;
}

.heading-typeC {
  font-size: 1.4rem;
  line-height: 1.429;
}

.article-detail-head {
  border-bottom: solid 1px #cccccc;
  margin-bottom: 30px;
  padding-bottom: 15px;
}

.article-detail-foot {
  border-top: solid 1px #cccccc;
  margin-top: 30px;
  padding-top: 15px;
}

.article-detail-body section {
  margin: 30px 0;
}

.credit-unit {
  padding: 10px;
  border: solid 1px #cccccc;

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
}

#copy-right {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
