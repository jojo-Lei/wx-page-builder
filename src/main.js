import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/index.js'

import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes:[{ 
    path: '/helloWorld', 
    component: HelloWorld 
    },{ 
    path: '/login', 
    component: Login 
    },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
