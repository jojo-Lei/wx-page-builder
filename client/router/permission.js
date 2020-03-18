/**
 *  路由权限相关管理
 * */
import NProgress from 'nprogress' // 进度条
import router from '@/router'
import 'nprogress/nprogress.css' // 进度条样式
import store from '@client/store'
import { ColorPicker } from 'element-ui';


// router.beforeEach((to, form, next) => {
//     let userData = store.state.user;
//     if(!userData.token){
//         Cookie.set()
//         next({
//             path: '/login'
//         });
//         return false;
//     }
//     next()
// })