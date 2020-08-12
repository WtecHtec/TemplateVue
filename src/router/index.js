
import Vue from 'vue';
// 引入和装配路由
import VueRouter from 'vue-router';
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
//import login from '../App.vue' // 第一种方式（js，css，template同一个vue下）
// const login =(resolve)=>require(['../App.vue'],resolve); //  第二种方式（js，css，template分离）
import login from '@/views/login.vue'
import index from '@/views/index.vue'
import main from '@/views/main.vue'
import person from '@/views/person.vue'
import devinfo from '@/views/devinfo.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path:'/login',
            name: 'login',
            component: login
        },
        {
            path:'/index',
            name: 'index',
             //重定向
            redirect: '/index/main',
            component: index,
            children: [
                {
                    path:'main',
                    name:'main',
                    component: main
                },
                {
                    path:'person',
                    name: 'person',
                    component: person
                }
            ]
        },
        {
            path:'/devinfo',
            name:'devinfo',
            component: devinfo
        },
        {
            path:'person',
            name: 'person',
            component: person
        }
        
    
    ]
  })

export default router  