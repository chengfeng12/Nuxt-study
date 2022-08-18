# 路由
  - 跳转方式 

    a 标签的形式
    >  `<a href="/user">a 详情页面</a>`

    问题：页面会刷新

    link 标签的形式
    > `<nuxt-link to="/user/123">link 详情页面</nuxt-link>`

    vue 路由的跳转方式 push replace 等
  - 路由的两种
    1. nuxt 自带的路由，pages 目录下自动生成路由

    2. @nuxtjs/router 通过安装插件 跟 vue-router 一致， 需在 nuxt.config.js 中配置

    ```js
    cnpm install -S @nuxtjs/router
    modules: [
      "@nuxtjs/router"
    ]
    ```
    

