/**
 *  路由权限相关管理
 * */
import NProgress from 'nprogress' // 进度条
import router from '../router'
import 'nprogress/nprogress.css' // 进度条样式
import store from '.'
import { ColorPicker } from 'element-ui';
import * as mUtils from '../assets/js/mUtils'


router.beforeEach((to, from, next) => {
    let userData = store.state.user;
    if(!userData.token && !to.NoNeedLogin){
        // 保存用户进入的url
        mUtils.Cookie.set('beforeLoginUrl', encodeURIComponent(to.fullPath), 1/24/60, window.location.host, window.location.pathname.substring(0, window.location.pathname.length - 1));
        // 跳转到登录    
        next({
            path: '/login',
            query: to.query,
        });
        return false;
    }
    next()
})

router.afterEach(() => {
    // 结束进程
    NProgress.done(); 
})