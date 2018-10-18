<template lang="pug">
section.line-base
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

    aside.sns
      ul
        li: a(href="#" class="fa fa-twitter") Twitter
        li: a(href="#") Facebook
        li: a(href="#") Google+

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
          img(src="../assets/coding.jpg")
          span はじめてのフラワーアレンジメント
        li: a(href="#")
          img(src="../assets/coding.jpg")
          span 古い端末が出てきたので充電してみたら・・・

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
section
  display: grid
  grid-template-columns: 1fr 700px 50px 300px 1fr
  grid-template-rows: auto auto 40px auto 30px auto

  @media(max-width: 1089px) {
    grid-template-columns: 20px 7fr 30px 3fr 20px
  }

  @media(max-width: 767px) {
    grid-template-columns: 20px 1fr 20px
    grid-row-start: auto auto 40px auto 30px auto 30px auto
  }

.site
  margin: 5px 0
  grid-column-start: 2
  grid-row-start: 1

  a
    color: #83a4a8
    font-size: 3rem
    text-decoration: none

.menu
  background-color: #7cbac1
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start: 2
  display: grid
  grid-template-columns: inherit
  grid-template-rows: auto

  ul
    margin: 0
    padding: 0
    list-style: none
    display: flex
    grid-column-start: 2
    grid-row-start: -2

  li a
    display: block
    padding: 15px
    color: #000000
    font-size: 1.4rem
    text-decoration: none

    @media(max-width: 767px) {
      padding: 15px 8px
      font-size: 10px
    }

  li a:hover
    background-color: #eeeeee

.kiji
  grid-column-start: 2
  grid-row-start: 4

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
  grid-column-start: 4
  grid-row-start: 4

  @media(max-width: 767px) {
    grid-column-start: 2
    grid-row-start: 6
  }

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

.sns
  @extend .aside-base

.special
  @extend .aside-base

.osusume
  @extend .aside-base

  li a
    position: relative
    padding: 0
    margin-bottom: 5px

  img
    vertical-align: bottom

  span
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    padding: 0 10px
    background-color: rgba(0, 0, 0, 0.4)
    color: #ffffff

.ninki
  @extend .aside-base

  li a
    display: flex
    align-items: center

  img
    margin-right: 15px

.copyright
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start:-2
  border-top: solid 1px #dddddd
  padding: 20px 0
  display: grid
  grid-template-columns: inherit
  grid-template-rows: auto

  p
    margin: 0
    color: #666666
    font-size: 1.4rem
    grid-column-start: 2
    grid-column-end: -2

    @media(max-width: 767px) {
      grid-row-start: -1
    }
</style>
