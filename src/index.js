// index.js
import 'babel-polyfill';
// 需 npm i vue --save
import Vue from 'vue';
import App from './App.vue'
import './icons'
// 入口文件main.js中引入
// import '@/utils/Flexible'
import $ from 'jquery' 
import router from './router'
import store from './store'
import HttpClients from '@/utils/HttpClients' 
Vue.prototype.http  = HttpClients

import { Field ,Button,Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';

Vue.use(Field);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});