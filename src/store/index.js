import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// state (全局变量的数据)
// getters (用来获取数据的方法)
// actions (跟后台接口打交道的方法)
// mutations (存储数据的方法)

// vueComponent(组件) -> actions 
// -> mutations -> state -> vueComponent(组件)

// vueComponent(组件) -> getters -> state

const store = new  Vuex.Store({
    state:{
        name: '',
        password: ''
    },
    getters:{
        getName(state){
            return state.name
        },
        getPassword(state){
            return state.password
        }
    },
    actions:{
       // state指的是state数据
		// commit调用mutations的方法 
		// name就是调用此方法时要传的参数
		setName({commit}, name){
            console.log(name)
			// 跟后台打交道
			// 调用mutaions里面的方法
			commit("setName", name);
        },
        setPassword({commit}, password){
			commit("setPassword", password);
        }
    },
    mutations:{
        setName(state,name){
            state.name = name 
        },
        setPassword(state,password){
            state.password = password
        }
    }
})
export default store;