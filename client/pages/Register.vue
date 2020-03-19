<template>
<!-- import { setTimeout } from 'timers'; -->
	<div>
			<el-form :model="formData" status-icon :rules="formRules" ref="formData" label-width="100px" class="demo-formRules">
				<el-form-item label="用户名" prop="username">
					<el-input  v-model="formData.username" ></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
						<el-input type="passwordword" v-model="formData.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkpassword">
						<el-input type="passwordword" v-model="formData.checkpassword" autocomplete="off"></el-input>
					</el-form-item>
				<!-- <el-form-item label="年龄" prop="age">
				    <el-input v-model.number="formData.age"></el-input>
				</el-form-item> -->
                <el-form-item label="邮箱" prop="email">
					<el-input  v-model="formData.email" ></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="doRegister()">确定</el-button>
					<!-- <el-button @click="doRegister()">注册</el-button> -->
				</el-form-item>
	</el-form>
	</div>
</template>
<script>
export default {
    data() {
		var checkAccount = (rule, value, callback) =>{
			if(!value) {
				return callback(new Error('用户名不能为空'))
			}
			callback();
        }
        var checkEmail = (rule, value, callback) =>{
            if(!value){
                return callback(new Error('邮箱不能为空'))
            } else if(value.indexof(".com") == -1){
                return callback(new Error('邮箱输入错误'))
            }else{
                callback();
            }
        }
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatepassword = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
                if (this.formData.checkpassword !== '') {
                    this.$refs.formData.validateField('checkpassword');
                }
                callback();
                        // console.log('ofkksdhf')
            }
        };
        var validatepassword2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.formData.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            type: 'login',
            formData: {
                username:'',
                password: '',
                email: '',
                checkpassword: '',
                age: ''
            },
            formRules: {
                username:[
                    { required: true, validator: checkAccount, trigger: 'blur'}
                ],
                password: [
                    { required:true, validator: validatepassword, trigger: 'blur' }
                ],
                checkpassword: [
                    { required:true, validator: validatepassword2, trigger: 'blur' }
                ]
            },
            formRulesRegister:{
                username:[
                    { required: true, validator: checkAccount, trigger: 'blur'}
                ],
                password:[
                    { required:true, validator: validatepassword, trigger: 'blur' }
                ],
                chackpassword:[
                    { required:true, validator: validatepassword2, trigger: 'blur' }
                ],
                email:[
                    { required:true, validator: checkEmail, trigger: 'blur'}
                ]	
            }
        };	
    },
    methods: {
        doLogin(formData){
			this.$refs.formData.validate((valid) => {
				if(valid){
					return 
				}
                var xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            xhr.response(xhr.responseText)
                        }
                    }
                } 
                xhr.open('POST', '/auth/login', true)
                xhr.setRequestHeader("Authorization", "")
                xhr.send(formData)
		    })
		},
		doRegister(){
            this.$refs.formData.validate((valid) => {
                if(!valid){
                    return 
                }
                var xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            xhr.response(xhr.responseText)
                        }
                    }
                } 
                xhr.open('POST', '/auth/register', true)
                xhr.setRequestHeader("Authorization", "")
                xhr.send(
                    JSON.stringify( {
                    username: this.formData.username,
                    password: this.formData.password,
                    } )
                )
            })
		},
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
  }
</script>
