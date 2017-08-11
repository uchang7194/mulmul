import Vue from 'vue'
import VueRouter from 'vue-router'
import MyPage from '../components/myPage/MyPage.vue'
import MemberEdit from '../components/myPage/MemberInfo/MemberEdit.vue'
import Product from '../components/product/Product.vue'
// import Hello from '@/components/Hello'
// import Foo from '@/components/Foo'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Product, name: 'home' },
    { path: '/my-page', component: MyPage, name: 'mypage' },
    { path: '/my-page/edit', component: MemberEdit, name: 'memberEdit' },
    { path: '*', component: Product }
  ]
})
