<!-- App.vue -->
<template>
  <div id="root" class="login-content">
      <transition name="van-slide-right">
        <div class="main" >
           <router-view></router-view>
        </div>
      </transition>
  </div>
</template>


<script>
    export default {
        name: 'app',
        components:{},
        data(){
          return{}
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
        methods:{}
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
<style scoped src="./index.css"></style>

