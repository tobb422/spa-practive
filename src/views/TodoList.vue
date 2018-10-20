<template lang="pug">
section
  form(@submit.prevent="sendTodo")
    input(v-model="todo")
    input(type="submit" val="追加")

  ul(v-for="item in list")
    li(@click="doneTodo(item)"): span status: {{ item.status }}
    s(v-if="item.status =='done'") {{ item.text }}
    span(v-else) {{ item.text }}
</template>

<script>
export default {
  name: "TodoList",
  data: function() {
    return {
      todo: "",
      list: []
    }
  },
  methods: {
    sendTodo() {
      this.list.push({
        text: this.todo,
        status: 'todo'
      });
      this.todo = "";
    },
    doneTodo(item) {
      if (item.status == "done") {
        item.status = "todo";
      } else {
        item.status = "done";
      }

    }
  }
};
</script>

<style scoped lang="stylus">
</style>
