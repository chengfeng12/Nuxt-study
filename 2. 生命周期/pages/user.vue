<template>
  <div>
    这是用户的页面
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  validate({ params, query }) {
    console.log("validate");
    return /^\d+$/.test(params.id)
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
  data() {
    return {
      title: "用户页面"
    }
  },
  asyncData({ req, query  }) {
    console.log("---------------------");
    let list = [];
    list.length = 10;
    list.fill(`用户-${(Math.random() * 10).toFixed(0)}`);
    return {
      list
    }
  }
}
</script>