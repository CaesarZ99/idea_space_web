// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import api from "./api";
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */


userInfo()
function userInfo(){
  axios.get(api.getBasicUserInfo + '?userId=1650037476670177280').then(res=>{
    if ( res.data && res.data.code === 1) {
      Vue.prototype.userInfo = res.data.data
    }
    return new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }).finally(function (){
    return new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  })
}
