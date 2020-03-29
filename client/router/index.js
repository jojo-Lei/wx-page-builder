import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**  各个模块 */
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/pages/home/index'),
			redirect: {name: 'pageList'},
			children: [{
				path: 'page-list',
				name: 'pageList',
				component: ()=> import('@/pages/home/page-list')
			},{
				path: 'my-template',
				name: 'myTemplate',
				component: () => import('@/pages/home/my-template')
			},{
				path: 'page-data',
				name: 'pageData',
				component: () => import('@/pages/home/page-data')
			}]
		},{
			path: '/editor',
			name: 'Editor',
			component: () => import ('@/pages/editor/index')
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/pages/Login'),
			meta: {
				hideHeader: true,
				trust: true,
				noNeedLogin: true
			}
		}]
})
