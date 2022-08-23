<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'layout!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'layout page',
            name: 'layout page',
            content: 'My custom layout page'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  background: red;
}
</style>
