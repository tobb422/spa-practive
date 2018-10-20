<template lang="pug">
section
  p {{ count }}
  button(@click="increment") プラス
  button(@click="decrement") マイナス

  router-link(to="/") TEST
</template>

<script>
export default {
  name: "VuexTest",
  computed: {
    count() {
      return this.$store.state.app.count;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('app/increment');
    },
    decrement() {
      this.$store.dispatch('app/decrement')
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
