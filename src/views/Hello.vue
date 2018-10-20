<template lang="pug">
section
  h1 Hello Vue !!
  .app
    .flex
      p count:{{ count }}
      button(@click="countUp" type="button") カウントアップ
    .flex
      h2 If
      .div(v-if="showFlg") 表示されないけどDOMにいる
      .div(v-else) 表示される

    .flex
      h2 Array
      ul(v-for="(item, index) in array")
        li {{ item }} - {{ index }}

    .flex
      h2 Object
      ul(v-for="(val, key, index) in object")
        li {{ val }} - {{ key }} - {{ index }}

    .flex
      h2 Number
      ul(v-for="(num, index) in number")
        li {{ num }} - {{ index }}

    .flex
      h2 Input
      input(v-model="text" type="text")
      p {{ text }}

    .flex
      h2 Checkbox
      input(type="checkbox" v-model="checked")
      label(for="checkbox") {{ checked }}

    .flex
      h2 Radio
      .input
        input(type="radio" value="FM" v-model="modulation")
        label(for="fm") FM
      .input
        input(type="radio" value="AM" v-model="modulation")
        label(for="am") AM

    .flex
      h2 SelectBox
      select(v-model="kantai")
        option(disabled value="") 艦隊を組むための艦娘を選んでください。
        option 金剛
        option 比叡
        option 榛名
        option 霧島
        span 艦隊； {{ kantai }}

</template>

<script>
export default {
  name: "Hello",
  data: function() {
    return {
      count: 0,
      showFlg: false,
      array: [ "kongo", "hiei", "haruna", "kirishima" ],
      object: {
        "hoge": "hogehoge",
        "fuga": "fugafuga"
      },
      number: 10,
      text: "",
      checked: false,
      modulation: "",
      kantai: ""
    }
  },
  created: function() {
    console.log("created");
  },
  methods: {
    countUp: function() {
      this.count++;
    }
  }
};
</script>

<style scoped lang="stylus">
ul
  margin: 0
  padding: 0
  list-style: none

.app
  display: flex
  align-items: top

.flex
  margin: 10px

.input
  margin-top: 10px

</style>
