<template>
    <div>
        <div>
            <span>请输入账号:</span>
            <input v-model = "name" type = 'text' placeholder = "账号">
            
            <span>请输入密码:</span>
            <input v-model = "password" type = 'text' placeholder = "密码">
              <!-- 使用 router-link 组件来导航. -->
                <!-- 通过传入 `to` 属性指定链接. -->
                <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/helloworld"> 
                <button @click = "backName">登录</button>
            </router-link> 

            <p @click= 'jumpRouter'>
                <button @click = "  backName">登录</button>
            </p>
            
        </div>
      
    </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
        name: '',
        password: '',
    }
  },
  methods:{
        backName:function(){
            this.$store.dispatch("setName", this.name);

            this.$router.push("/");
        },
     
        backPassword:function(){
          this.$store.dispatch("setPassage", this.password);

          this.$router.push("/");
        },
        jumpRouter:function(){
            this.$router.push({path: "/helloworld"})
        }
    },
    
}
</script>
