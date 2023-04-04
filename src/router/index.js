import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/HomePage.vue";
import SpaceAvatar from "../components/tools/SpaceAvatar.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/avatar',
      name: 'SpaceAvatar',
      component: SpaceAvatar
    }
  ]
})
