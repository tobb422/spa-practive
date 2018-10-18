<template lang="pug">
section
  div.site
    a(href="#") TimeSwitch

  nav.menu
    ul
      li: a(href="#") ホーム
      li: a(href="#") お知らせ
      li: a(href="#") サイトについて
      li: a(href="#") お問い合わせ

  article.kiji
    h1 #[span FRESH VEGETABLES]もぎたてトマトを美味しく食べたい！

    .kijiinfo
      time(datetime="2022-12-12") 12 DECEMBER 2022
      | / San Francisco, CA

    p
      img(src="../assets/coding.jpg", alt="")

    p
      | もぎたてのトマトが食べたくなって、ちょっと郊外にあるトマト農家さんの直売所まで行ってきました。
      | ここのトマトは新鮮で、美味しくて、お安いという、とってもお買い得なトマトなんです。

    h2 新鮮なトマトの見分け方
    p
      | もぢたての新鮮なトマトは、ヘタが緑色でみずみずしく、シャキッとしています。
      | 赤い実は皮がピンと張り、つるっと丸いものがいいのだとか。糖度の高いトマトは水に沈むそうですが、
      | 何でも甘ければいいというものではないので、好みの味のトマトを作る農家さんを見つけたいところです。

    h2 もぎたてトマトの美味しい食べ方
    p
      | 何と言っても、もぎたてトマトは水洗いしてそのまま食べるのが一番です。
      | 暑い日に美味しいトマトにかぶりつくと、それだけで幸せになります。
      | 水分補給もできるので、一石二鳥です。

    p
      | もちろん、何かをつけたり、かけたりして食べるのも美味しいです。
      | 定番としては、塩、砂糖、マヨネーズ、オリーブオイルなどがおすすめです。

  aside.side
    .special
      h2 特集記事
      ul
        li: a(href="#") わかりやすい地図の読み方とナビのテクニックを習得してみた
        li: a(href="#") 苗から始めるトマト作り
        li: a(href="#") 料理とスマホの便利な関係
        li: a(href="#") バッテリーを長持ちさせる技

    .osusume
      h2 おすすめ記事
      ul
        li: a(href="#")
          img(src="../assets/logo.png")
          | はじめてのフラワーアレンジメント
        li: a(href="#")
          img(src="../assets/logo.png")
          | 古い端末が出てきたので充電してみたら・・・

    .ninki
      h2 人気の記事
      ul
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 花好きにおすすめの鑑賞スポット
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 通話アプリの便利な使い方
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 森林浴 & 温泉を満喫するならココ！
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 世界各地の買い物袋
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 部屋を彩るカラフルな家具
        li: a(href="#")
          img(src="../assets/logo.png" width="60")
          | 海の中で出会ったものたち

  .copyright
    p Copyright &copy; TimeSwitch
</template>

<script>
export default {
  name: "LineBase"
};
</script>

<style scoped lang="stylus">
.site
  margin: 5px 0

  a
    color: #83a4a8
    font-size: 3rem
    text-decoration: none

.menu
  background-color: #7cbac1

  ul
    margin: 0
    padding: 0
    list-style: none
    display: flex

  li a
    display: block
    padding: 15px
    color: #000000
    font-size: 1.4rem
    text-decoration: none

  li a:hover
    background-color: #eeeeee

.kiji
  h1
    margin-top: 0
    margin-bottom: 20px
    font-size: 3.6rem

  h1 span
    display: block
    margin-bottom: 20px
    color: #75dbe7
    font-size: 2rem
    font-weight: bold

  h2
    margin-top: 40px
    border-bottom: dotted 1px #7cbac1
    font-weight: normal

  p
    margin-top: 0
    margin-bottom: 20px
    line-height: 2
    text-align: justify

  img
    max-width: 100%
    height: auto

.kijiinfo
  margin-bottom: 20px
  color: #666666

.side
  div
    margin-bottom: 30px

  h2
    margin-top: 0
    margin-bottom: 10px
    border-bottom: dotted 2px #dddddd
    color: #666666
    font-size: 1.8rem

  img
    max-width: 100%
    height: auto

.aside-base
  ul
    margin: 0
    padding: 0
    list-style: none

  li a
    display: block
    padding: 5px
    color: #000000
    font-size: 1.4rem
    text-decoration: none

  li a:hover
    background-color: #eeeeee

.special
  @extend .aside-base

.osusume
  @extend .aside-base

.ninki
  @extend .aside-base

.copyright
  border-top: solid 1px #dddddd
  padding: 20px 0

  p
    margin: 0
    color: #666666
    font-size: 1.4rem
</style>
