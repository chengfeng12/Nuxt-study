<template>
  <div>
    这是用户的页面
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  validate({ params, query }) {
    console.log("validate", params, query);
    return /^\d+$/.test(params.id)
  },
}
</script>