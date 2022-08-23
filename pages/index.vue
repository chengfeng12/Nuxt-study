<template>
  <div>
    <h1>home</h1>
    <button @click="goLayout">layout 跳转</button>

    <CustomText />
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goLayout() {
        this.$router.push("/layout")
      }
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  background: blue;
}
</style>
