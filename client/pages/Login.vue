<template>
	<div class="page-login">
		<div class="login-logo">
			<i class="iconfont icon-xinxiwanglogo"></i>
		</div>
		<div class="login-page-inner">
			<p class="title">微信页面编辑工具</p>
			<el-form :model="formData" status-icon :rules="type === '注册'?formRulesRegister:formRules" ref="loginForm" label-width="80px" >
				<el-form-item prop="email" v-if="type=== '注册'" label="邮箱" >
					<el-input  v-model="formData.email" @keyup.enter.native="doLogin"></el-input>
					<span slot="prefix" class="iconfont icon-zhanghao"></span>
				</el-form-item>
				<el-form-item label="用户名" prop="username">
					<el-input  v-model="formData.username" @keyup.enter.native="doLogin"></el-input>
					<i slot="prefix" class="iconfont icon-zhanghao"></i>
				</el-form-item>
				<el-form-item label="密码" prop="password">
						<el-input :type="inputType" v-model="formData.password" autocomplete="off" 
											@keyup.enter.native="doLogin" v-if="inputType==='password'">
							<i slot="prefix" class="iconfont icon-mima"></i>
							<span slot="suffix" class="cursor-pointer" @mousedown="mousedownPassword">
              <i class="iconfont icon-yincangmima"></i>
            	</span>
						</el-input>
						<el-input v-model="formData.password" :type="inputType" @keyup.enter.native="doLogin" v-else>
							<i slot="prefix" class="iconfont icon-mima"></i>
							<span slot="suffix" class="cursor-pointer" @mousedown="mousedownText">
								<i class="iconfont icon-yincangmima"></i>
							</span>
          	</el-input>
					</el-form-item>
					<el-form-item prop="checkPassword" v-if="type === '注册'" label="确认密码">
						<el-input v-model="formData.checkPassword" @keyup.enter.native="doLogin">
							<span slot="prefix" class="iconfont icon-zhanghao"></span>
						</el-input>
					</el-form-item>
					<el-form-item>
						<div class="btn-hover" @click="doLogin">{{type === '注册'?'注册':'登录'}}</div>

						<div class="clearfix text-right paddingT10">
							<el-button type="text" @click="switchLoginType">{{type === '注册'?'立马登录':'立马注册'}}</el-button>
						</div>
					</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {
		Form,
		FormItem,
		Input
	} from 'element-ui'
	export default {
		components: {
			[Form.name]: Form,
			[FormItem.name]: FormItem,
			[Input.name]: Input,
		},
    data() {
			var checkAccount = (rule, value, callback) =>{
				if(!value) {
					return callback(new Error('用户名不能为空'))
				}
				callback();
			}
      var validatepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formData.checkpassword !== '') {
            this.$refs.formData.validateField('checkpassword');
          }
					callback();
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
				loading: false,
				type: 'login',
				inputType: 'password',
        formData: {
					email: '',
					username:'',
          password: '',
          checkpassword: '',
          // age: ''
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
			}
			};
		
    },
		created() {
			// 进入登录页面先清空个人信息
		},
    methods: {
			/**
			 * 登录
			 */
			doLogin() {
				if(this.type === '注册'){
					this.doRegister()
          return;
        }
				// 验证成功
				this.$refs.loginForm.validate((valid) => {
					if (valid) {
						this.$axios.post('/auth/login', this.formData).then(res => {
							this.$store.dispatch('updateUserToken', res.body.token)
							this.$router.push('/');
							this.getUserInfo();
						})
					} else {
						this.$message.error('请正确填下表单!')
						return false;
					}
				});
			},
			doRegister(){
				this.$refs.loginForm.validate((valid) => {
					if(valid){
						this.$axios.post('/auth/register', this.formData).then(res => {
							this.$store.dispatch('updateUserToken', res.body.token)
							this.$router.push('/');
							this.getUserInfo();
						})
					}else{
						this.$message.error('请正确填下表单!')
						return false;
					}
				})
			},
			mousedownPassword() {
				this.inputType = 'text'
			},
			mousedownText() {
				this.inputType = 'password'
			},
			mouseup() {
				this.inputType = 'password'
			},
			/**
			 * 获取用户信息
			 */
			getUserInfo() {
				this.$axios.get('/user/info').then(res => {
					this.$store.dispatch('updateUserInfo', res.body)
				})
			},
			/**
			 * 切换登录注册
			 */
			switchLoginType() {
				this.type = this.type === '登录' ? '注册' : '登录'
			}
    }
  }
</script>

<style lang="scss" scoped>
  .page-login {
    height: 100%;
    width: 100%;
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-page-inner {
    position: relative;
    z-index: 99;
    width: 420px;
    padding: 20px 40px;
    background: white;
    box-shadow: 0px 0px 2px rgba(58, 127, 158, 0.35);
    border-radius: 4px;
    .title {
      padding: 10px 0 30px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #409EFF;
    }
    /**
    鼠标悬浮渐变
    */
    .btn-hover {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      text-align: center;
      color: white;
      background: linear-gradient(to right, #8CC5FF 0%, #66B1FF 60%, #409EFF 100%);
      transition: all 3s;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-hover:hover {
      transition: all 3s;
      background: linear-gradient(to right, #8CC5FF 0%, #66B1FF 60%, #409EFF 100%);
    }
    .btn-hover:active {
      transition: all 3s;
      background: linear-gradient(to right, #8CC5FF 0%, #66B1FF 40%, #409EFF 100%);
    }
    .login-page-bottom {
      font-size: 12px;
      color: #666;
      text-align: center;
    }
    .forgot-password {
      text-align: right;
      font-size: 12px;
      margin-bottom: 20px;
      cursor: pointer;
      color: #333;
    }
  }

  .login-logo {
    z-index: 99;
    width: 300px;
    height: 30px;
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    .iconfont {
      font-size: 26px;
    }
  }
</style>
