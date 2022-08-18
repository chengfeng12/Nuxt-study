<template>
  <div>
    首页
    <button @click="goUser">我的页面</button>
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
  methods: {
    goUser() {
      this.$router.push({
        path: "/user/my"
      })
    }
  }
}
</script>
