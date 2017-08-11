import Vue from 'vue'
import VueRouter from 'vue-router'
import MyPage from '../components/myPage/MyPage.vue'
import Product from '../components/product/Product.vue'
// import Hello from '@/components/Hello'
// import Foo from '@/components/Foo'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Product },
    { path: '/my-page', component: MyPage },
    { path: '*', component: Product }
  ]
})
