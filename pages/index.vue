<template>
  <div>
    首页
    <button @click="goUser">我的页面</button>

    <p>cousnt: {{ $store.state.count }}</p>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: '这是一个标题'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  // middleware: "auth",
  // middleware() {
  //   console.log("middleware");
  // },
  methods: {
    goUser() {
      this.$router.push({
        path: "/user/123"
      })
    },
    add() {
      this.$store.commit("increment");
    }
  }
}
</script>
