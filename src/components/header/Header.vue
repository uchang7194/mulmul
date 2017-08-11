<template>
  <header class="header grid">
    <h1 class="heading col col-d-3 col-t-2 col-m-1">
      <div class="box">
        <img src="../../assets/mulmul_logo.png" alt="물물 로고">
      </div>
    </h1>
    <div class="search col col-d-6 col-t-4 col-m-3">
      <div class="box t-center">
        <search></search>
      </div>
    </div>
    <div class="sign-in-up col col-d-3 col-t-2 col-m-4">
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
import Search from './search/Search.vue'

export default {
  components: {
    Login,
    Membership,
    Search
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