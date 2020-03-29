## 前言
你是否被微信活动页和H5繁重的需求压断了腰，想要有一款拖拽就可以生成微信活动页的工具？
该项目就是基于此痛点开发，能够拖拽生成H5页面，并预览效果的工具。

Github: [传送门](https://github.com/jojo-Lei/wx-page-builder/)<br/>
演示地址：[传送门](https://jojo-lei.github.io/wx-page-builder/)

**界面预览：**

![登录界面](https://user-images.githubusercontent.com/32825330/77857272-0cae4b80-722f-11ea-998b-63fed3bc072a.png)
![项目管理](https://user-images.githubusercontent.com/32825330/77857201-b8a36700-722e-11ea-9517-8dc1615467c2.png)
![拖拽编辑](https://user-images.githubusercontent.com/32825330/77857265-0324e380-722f-11ea-9633-ae416eeb41af.png)

## Feature
* 拖拽编辑组件
* 生成H5页面
* 界面预览
* 发布H5页面功能(开发中)
* 支持微信小程序(开发中)
* 支持Element-UI(开发中)
* 编辑PC中后台页面(开发中)


## 技术栈
**前端：**<br/>
`vue`: 模块化开发少不了angular，react，vue三选一，这里选择了vue。<br/>
`vuex`: 状态管理<br/>
`sass`: css预编译器。<br/>
`element-ui`：不造轮子，有现成的优秀的vue组件库当然要用起来。没有的自己再封装一些就可以了。<br/>
`loadsh`：工具类<br/>

**服务端：**<br/>
`koa`：后端语言采用nodejs，koa文档和学习资料也比较多，express原班人马打造，这个正合适。<br/>
`mongodb`：一个基于分布式文件存储的数据库，比较灵活。<br/>
## 阅读前准备
1、了解vue技术栈开发<br/>
2、了解koa<br/>
3、了解mongodb<br/>
## 工程搭建

## 工程目录结构

```
|-- client					--------前端项目界面代码
    |--assets					--------前端界面对应静态资源
    |--components				--------组件
    |--config					--------配置文件
    |--eventBus					--------eventBus
    |--filter					--------过滤器
    |--mixins					--------混入
    |--pages					--------页面
    |--router					--------路由配置
    |--store					--------vuex状态管理
    |--service					--------axios封装
    |--App.vue					--------App
    |--main.js					--------入口文件
    |--permission.js			--------权限控制
|-- server					--------服务器端项目代码
    |--confog					--------数据库链接相关
    |--middleware				--------中间件
    |--models					--------Schema和Model
    |--routes					--------路由
    |--views					--------ejs页面模板
    |--public					--------静态资源
    |--utils					--------工具方法
    |--app.js					--------服务端入口
|-- common					--------前后端公用代码模块（如加解密）
|-- engine-template			--------页面模板引擎，使用webpack打包成js提供页面引用
|-- docs					--------预留编写项目文档目录
|-- config.json				--------配置文件
```
## 前端编辑器实现
编辑器的实现思路是：编辑器生成页面JSON数据，服务端负责存取JSON数据，渲染时从服务端取数据JSON交给前端模板处理。

![](https://user-gold-cdn.xitu.io/2019/11/11/16e582f5b9c69601?w=747&h=435&f=jpeg&s=31027)


### 感谢
[quark-h5](https://github.com/huangwei9527/quark-h5)

### License
Apache License 2.0
