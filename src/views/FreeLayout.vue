<template lang="pug">
section
  .site: a(href="#"): img(src="../assets/logo.png" height="33")

  img(src="../assets/bg-news.png" alt="" class="headimg")

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
    name: "FreeLayout"
  };
</script>

<style scoped lang="stylus">
.site a
  color: #000
  font-size: 3rem
  text-decoration: none

.headimg
  width: 100%
  height: auto
  max-height: 400px
  vertical-align: bottom

.news
  padding: 20px
  border: solid 6px #dddddd

  h2
    margin-bottom: 5px
    font-size: 1.8rem
    color: #666666

  ul
    margin: 0
    padding: 0
    list-style: none

  li a
    display: block
    padding: 5px
    border-bottom: dotted 2px #dddddd
    color: #000000
    font-size: 1.4rem
    text-decoration: none

  li a:hover
    background-color: #eeeeee

.copyright
  p
    margin: 0
    color: #666666
    font-size: 1.4rem

</style>
