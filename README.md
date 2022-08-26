# 配置项
  - head
  
    ```js
    module.exports = {
      head: {
        titleTemplate: '%s - Nuxt.js',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Meta description' }
        ]
      }
    }
    ```
    1. 全局配置 nuxt.config.js 配置

    2. 局部配置 在页面中 head 属性中添加 

       局部 > 全局

- css

  安装 cnpm install --save-dev node-sass sass-loader 注意版本问题，启动回报错
  然后在 nuxt.config.js 中css 属性中配置
  Type: Array
  Items: string 也可以是个对象
  > cnpm install --save-dev sass sass-loader@10 fibers
  fibers 按照官方文档的意思是能够提升编译速度

  1. pages 之间样式独立（隔离）

  2. pages 与 组件之间样式覆盖（scope）

- loading

  1. 在 nuxt.config.js 开启全局的 loading，配置项参考 https://www.nuxtjs.cn/api/configuration-loading

  2. 可以在局部页面中关闭
    export default {
      loading: false
    }

  3. 在你的组件中你可以使用this.$nuxt.$loading.start()来启动加载条。使用this.$nuxt.$loading.finish()来使加载条结束。

  4. 自定义 loading 组件
     需要在 components 下建 loading.vue, 在 nuxt.config.js 中配置
     loading: "~/components/loading.vue", 参考地址 https://www.nuxtjs.cn/api/configuration-loading

- transition





    