<template>
    <div>
         <div class="main-content">
              <router-view></router-view>
            </div>
            <van-tabbar v-model="activeTab" @change="handelTabChange">
                <van-tabbar-item name="main" icon="home-o">主页</van-tabbar-item>
                <van-tabbar-item name="person" icon="smile-o">个人</van-tabbar-item>
            </van-tabbar>
    </div>
</template>
<script>
    export default {
        name: 'index',

        components: {},

        props: {},

        data() {
            return{
                activeTab: 'main'
            }
        },

        computed: {},

        watch: {},

        created() {
            
           
            console.log('created')
            this.$nextTick((e)=> {
                this.handelTabChange()
            })
        },

        mounted() {
            
        },

        destroyed() {},

        methods: {
            handelTabChange(){
                this.$router.push({name: this.activeTab})
            },
        },
    }
</script>
<style scoped>

</style>