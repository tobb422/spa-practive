<template lang="pug">
section
  .site: a(href="#"): img(src="../assets/logo.png" height="33")

  button(type="button" @click="onClick")
    span.fa.fa-bars: img(src="../assets/logo.png" height="15")

  nav.menu
    ul
      li: a(href="#") トップ
      li: a(href="#") 沿革
      li: a(href="#") 事業紹介
      li: a(href="#") 採用情報
      li: a(href="#") お問い合わせ


  img(src="../assets/bg-news.png" alt="" class="headimg")
  p.catch
    | TimeSwitchはデータの蓄積と
    br
    | 分析・解析のサービスを提供します。

  .pickup
    .gaiyou: a(href="#"): span.database
      h2 データの分析・解析
      p
        | 目的に応じてさまざまな角度から
        br
        | データを分析・解析します。
    .gaiyou: a(href="#"): span.chart
      h2 わかりやすく視覚化
      p
        | 解析結果はわかりやすく視覚化し、
        br
        | 活用できるようにします。
    .gaiyou: a(href="#"): span.envelope
      h2 24時間サポート
      px
        | 24時間サポートでトラブルにも
        br
        | 素早く対応します。

  .news
    h2 お知らせ
    ul
      li: a(href="#") データセンターのメンテナンスを行います。
      li: a(href="#") Android版アプリ バージョン1.2をリリースしました。
      li: a(href="#") セミナー開催に伴うキャンペーンのお知らせ。
      li: a(href="#") グラフ表示の切替方法がわかりやすくなりました。

  .copyright
    p Copyright &copy; TimeSwitch
</template>

<script>
  export default {
    name: "FreeLayout",
    methods: {
      onClick: function() {
        const mymenu = document.querySelector(".menu");
        const toggle = () => {
          if (mymenu.style.maxHeight) {
            return null;
          } else {
            return mymenu.scrollHeight + "px";
          }
        };
        mymenu.style.maxHeight = toggle();
      }
    }
  };
</script>

<style scoped lang="stylus">
list
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

section
  display: grid
  grid-template-columns:
    minmax(20px, 1fr) minmax(auto, 1140px) minmax(20px, 1fr)
  grid-template-areas:
    auto auto auto auto auto auto auto

.site
  grid-column-start: 2
  grid-row-start: 1
  margin: 15px 0

  a
    color: #000
    font-size: 3rem
    text-decoration: none
    font-size: small

  img
    vertical-align: bottom

button
  display: none
  grid-column-start: 2
  grid-row-start: 1
  justify-self: end
  align-self: center

  padding: 6px
  border: none
  background-color: transparent
  color: #888888
  cursor: pointer

  @media(max-width: 767px) {
    display: block
  }

button:focus
  outline: none

.menu
  @extend list
  grid-column-start: 2
  grid-row-start: 1
  justify-self: end
  align-self: center

  @media(max-width: 767px) {
    grid-row-start: 2
    justify-self: stretch
    max-height: 0
    overflow: hidden
    transition: max-height 0.4s ease-out
  }

  ul
    display: flex

    @media(max-width: 767px) {
      flex-direction: column
    }

  li a
    padding: 15px


.headimg
  width: 100%
  height: auto
  max-height: 400px
  vertical-align: bottom
  margin-bottom: 20px
  grid-column-start: 2
  grid-row-start: 3

  @media(max-width: 1179px) {
    grid-column-start: 1
    grid-column-end: 4
  }

.catch
  grid-column-start: 2
  grid-row-start: 3
  margin: 0 0 40px 20px
  padding: 15px
  background-color: rgba(255, 255, 255, 0.7)
  font-size: 2.4rem
  justify-self: start
  align-self: end

  @media(max-width: 599px) {
    grid-row-start: 4
    margin-left: 0
    margin-bottom: 20px
    padding: 0
    font-size: 5vw
  }

.pickup
  grid-column-start: 2
  grid-row-start: 5
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: auto
  margin-bottom: 20px

.gaiyou
  a
    display: block
    color: #ffffff
    text-align: center
    text-decoration: none

  span
    display: block
    padding: 36px 0

  .database
    background-color: #bfbd13

  .chart
    background-color: #c58839

  .envelope
    background-color: #859f46

  h2
    margin: 0
    padding: 5px 0
    background-color: #222222
    font-size: 2rem
    font-weight: normal

  p
    margin: 0
    padding: 15px 0
    background-color: #524e3c
    font-size: 1.2rem


.news
  margin-bottom: 20px
  padding: 20px
  border: solid 6px #dddddd
  grid-column-start: 2
  grid-row-start: 6

  @extend list

  h2
    margin-bottom: 5px
    font-size: 1.8rem
    color: #666666

  li a
    border-bottom: dotted 2px #dddddd

.copyright
  grid-column-start: 2
  grid-row-start: 7

  p
    margin: 0
    color: #666666
    font-size: 1.4rem

</style>
