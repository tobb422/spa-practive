<template lang="pug">
section
  .site: a(href="#") CAFE SPACE

  button(type="button" @click="onClick")
    img(src="../assets/logo.png" height="30")

  nav.menu
    ul
      li: a(href="#") ホーム
      li: a(href="#") お知らせ
      li: a(href="#") 街角探訪
      li: a(href="#") お問い合わせ
      li: a(href="#") ホーム
      li: a(href="#") お知らせ
      li: a(href="#") 街角探訪
      li: a(href="#") お問い合わせ
      li: a(href="#") ホーム
      li: a(href="#") お知らせ
      li: a(href="#") 街角探訪
      li: a(href="#") お問い合わせ

  span.page-cover(@click="onClick")

  article.kiji
    h1 #[span TRAVEL DIALY]旅先で出会ったカフェテリア

    .kijiinfo
      time(datetime="2022-12-12") #[span 12] DECEMBER 2022
      | / SanFrancisco, CA

    p
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...
      | おいしい飲み物と食べ物はもちろん、一息つける落ち着いた空間がいつでも温かく迎え入れて...略...

    p
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...
      | というのも、店員さんが忙しくしていないときであれば、こちらがちょっと不慣れな様子でも...略...

  .copyright
    p Copyright &copy; CAFE SPACE
</template>

<script>
export default {
  name: "Broken",
  methods: {
    onClick: function() {
      document.querySelector('section').classList.toggle('open')
    }
  }
}
</script>

<style scoped lang="stylus">
section
  display: grid
  grid-template-columns: minmax(20px, 1fr) minmax(auto, 900px) minmax(20px, 1fr)
  grid-template-rows: auto 40px auto 30px auto

.site
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start: 1

  padding: 10px 0
  background-color: #eeeeee
  border-bottom: solid 1px #dddddd
  text-align: center

  a
    color: #666666
    font-size: 2.6rem
    text-decoration: none

button
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start: 1
  justify-self: start
  align-self: center

  margin-left: 14px
  padding: 6px
  border:none
  background-color: transparent
  color: #888888
  font-size: 2.8rem
  cursor: pointer

button:focus
  outline: none

.menu
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start: 1
  grid-row-end: -1
  z-index: 100
  width: 280px
  margin-left: -280px
  background-color: rgba(0, 0, 0, 0.8)
  transition: margin-left 0.2s ease-out

  ul
    margin: 0
    margin-top: 60px
    padding: 0
    list-style: none
    height: calc(100vh - 60px)
    overflow: auto

  li a
    display: block
    padding: 20px
    color: #ffffff
    font-size: 2rem
    text-decoration: none

  li a:hover
    background-color: #222222

section.open
  height: 100vh
  overflow: hidden

  .menu
    margin-left: 0

  button
    z-index: 200

  .page-cover
    grid-column-start: 1
    grid-column-end: -1
    grid-row-start: 1
    grid-row-end: -1
    z-index: 50
    background-color: rgba(0, 0, 0, 0.2)

article
  @media(min-width: 600px)
    display: grid
    grid-template-columns: auto 1fr 7fr

    > *
     grid-column-start: 3

    > h1
      grid-column-start: 1
      grid-column-end: 4

    > .kijiinfo
      grid-column-start: 1
      grid-row-end: span 2

.kiji
  grid-column-start: 2
  grid-row-start: 3

  h1
    margin-top: 0
    margin-bottom: 20px
    font-size: 3.6rem

  h1 span
    display: block
    margin-bottom: 20px
    color: #930000
    font-size: 2rem
    font-weight: bold

  p
    margin-top: 0
    margin-bottom: 20px
    line-height: 2
    text-align: justify

.kijiinfo
  margin-bottom: 20px
  color: #666666

  span
    @media(min-width: 600px) {
      display: block
      margin-bottom: 10px
      font-size: 12rem
      line-height: 1
    }

  time
    @media(min-width: 600px) {
      display: block
    }

.copyright
  grid-column-start: 1
  grid-column-end: -1
  grid-row-start: -2

  padding: 18px 0
  background-color: #333333
  text-align: center

  p
    margin: 0
    color: #ffffff
    font-size: 1.4rem
</style>
