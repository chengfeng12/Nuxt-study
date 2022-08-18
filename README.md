# 生命周期
  - 服务端生命周期 在页面加载之前执行

    - nuxtServerInit

      nuxt中第一个运行的生命周期
      
    - middleware

      全局配置

      nuxt.config.js 中添加, 需在根目录添加 middleware 文件夹，添加对应的文件名。
      文件中导出一个函数
      ```js
      router: {
        middleware: "auth" // string or Array
      }
      ```

      局部配置
      参数是 content

      ```js
      1. middleware: "auth" // string or Array
      2. middleware() {} // 直接添加方法
      ```

    - validate 用来验证参数是否正确，返回值 boolean 
      返回 true 则正常跳转，否者跳转 404 

    - asyncData
    - fetch

    