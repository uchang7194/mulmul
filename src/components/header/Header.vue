<template>
  <header class="header grid">
    <h1 class="heading col col-d-2 col-t-2 col-m-1">
      <div class="box">
        <img src="../../assets/mulmul_logo_w.png" alt="물물 로고">
      </div>
    </h1>
    <div class="search col col-d-7 col-t-4 col-m-3">
      <div class="box t-center">
        <div class="goods-search-box">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="search" class="input-search-goods" alt="상품검색창" placeholder="상품 또는 아이디를 검색하세요.">
        </div>
      </div>
    </div>
    <div class="sign-in col col-d-3 col-t-2 col-m-4">
      <div class="box t-right">
        <button type="button" class="btn-sign-in" @click="loginActived">로그인</button>
        <button type="button" class="btn-sign-up blue" @click="membershipActived">회원가입</button>
        <!--임시-->
        <ul class="login-utill-list">
          <router-link tag="li" to="/"><a href>Home</a></router-link>
          <router-link tag="li" to="/my-page"><a href>myPage</a></router-link>
        </ul>
      </div>
    </div>
    <login></login>
    <membership></membership>
  </header>  
</template>
<script>
import {mapActions} from 'vuex'
import Login from './login/Login.vue'
import Membership from './membership/membership.vue'

export default {
  components: {
    Login,
    Membership
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      'loginActived': 'isChangedLoginActive',
      'membershipActived': 'isChangedMembershipActive'
    })
  }
}
</script>
<style lang="scss">
// .header {
//   box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.6);
// }
.sign-in,
.sign-up {
  text-align: center;
}
.login-btn,
.membership-btn {
  padding: 0;
  border: none;
  background: none;
  vertical-align: middle;
  cursor: pointer;
}
</style>