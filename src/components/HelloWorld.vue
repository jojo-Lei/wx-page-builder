<template>
<div>
    <div class="hello">
      <span>请输入姓名 </span>
        <input v-model="message " placeholder="edit me">
        <span> {{message}}</span>
       
          <p>登录的信息</p>
            <span>账号：{{name}}
          </span>
      
        
    </div>
    
  </div>
</template>

<script>



export default {
  name: 'HelloWorld',
  // props: {
  //   name: '',

  // },
  data() {
    return {
    message:"1"
    }
  },
  computed:{
    name:function(){
      return this.$store.getters.getName;
    },
    password:function(){
      return this.$store.getters.getPassword;
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
