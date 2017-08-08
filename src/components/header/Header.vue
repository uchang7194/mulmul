<template>
  <header class="header grid">
    <h1 class="heading col col-d-3 col-t-2 col-m-1">
      <div class="box">logo</div>
    </h1>
    <div class="search-box col col-d-5 col-t-4 col-m-3">
      <div class="box">search</div>
    </div>
    <div class="sign-in col col-d-2 col-t-1 col-m-2">
      <div class="box">
        <button type="button" class="login-btn" @click="loginActived">로그인</button>
      </div>
    </div>
    <div class="sign-up col col-d-2 col-t-1 col-m-2">
      <div class="box">
        <button type="button" class="membership-btn" @click="membershipActived">회원가입</button>
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
.header {
  box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.6);
}
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