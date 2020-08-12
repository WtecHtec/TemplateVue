<!-- App.vue -->
<template>
  <div id="root" class="login-content">
      <div class="login-field" v-show="!loginStatus">
        <svg-icon icon-class="logo" class="logo-icon"></svg-icon>
        <van-field v-model="loginparam.user" label="用户" placeholder="请输入用户名" />
        <van-field v-model="loginparam.password" type="password" label="密码"   placeholder="请输入密码"/>
        <div class="login-btn">
            <van-button color="#7232dd" size="small" @click="handelLogin">登陆</van-button>
            <van-button color="#7232dd" plain size="small">注册</van-button>
        </div>
      </div>
  </div>
</template>


<script>
    export default {
        name: 'app',
        components:{},
        data(){
          return{
            activeTab:'main',
            loginStatus: false,
            loginparam: {
              user: '',
              password:''
            }
          }
        },
        computed:{},
        watch:{},
        filters:{},
        beforeCreate () {},
        created(){},
        beforeMount () {},
        mounted(){},
        beforeUpdate(){},
        updated(){},
        methods:{
          handelLogin(){
            this.loginStatus = true
            this.$router.push({name:'index'})
            let url = 'login'
            let param = {
              'useremail': this.loginparam.user,
              'pwd': this.loginparam.user,
            }
            this.http.post(url,param).then((res)=> {
              console.log(res)
            }).catch((err)=> {
              console.log(err)
            })
          },
          handelTabChange(){
             this.$router.push({name: this.activeTab})
          },
        }
    }

</script>
<style scoped >
    .login-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .login-field{
      border: 1px #409EFF solid;
      border-radius: 4px;
    }
    .login-btn {
      margin: 10px 0px;
      display: flex;
      justify-content: space-around;
    }
    .logo-icon {
      width: 4em !important;
      height: 3em !important;
    }
    .main{
      width: 100%;
      height: 100%;
    }
    .main-content {
      height: calc(100% - 3.125rem);
      width: 100%;
    }
</style>
<style scoped src="../index.css"></style>

