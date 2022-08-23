# 生命周期
  - 服务端生命周期 在页面加载之前执行

    - nuxtServerInit 类似 main.js

      nuxt中第一个运行的生命周期
      
    - middleware 类似于路由守卫

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

    - asyncData 参数是 content
      每次加载之前调用，它可以在服务端和路由更新前被调用
      需要返回一个对象
      > 注意：由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
    - fetch 参数是 content 
      与 asyncData 类似，不同的是需要返回一个 promise ，等promise 走完之后才开始渲染组件
      没有 this 因为在组件初始化之前执行

- 服务端和客户端共有的生命周期
    在加载阶段，服务器和客户端都会执行
    - beforeCreate
    - created

- 客户端的生命周期 vue 的生命周期
    - brdoreMount


    