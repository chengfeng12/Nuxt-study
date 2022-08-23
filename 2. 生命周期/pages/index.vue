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
  asyncData({ store, params }) {
    console.log("asyncData");
  },
  // 需要返回一个 promise ，等promise 走完之后才开始渲染组件
  // 没有 this 因为在组件初始化之前执行
  fetch({ store, params }) {
    console.log("fetch");
    let title = "修改之后的标题";
  },
  beforeCreate() {
    console.log("beforeCreate", this.title);
  },
  created() {
    console.log("created");
    console.log("beforeCreate", this.title);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate(value) {
    console.log("beforeUpdate");
  },
  updated(value) {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
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
