<template>
  <div>
    首页
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
  }
}
</script>
