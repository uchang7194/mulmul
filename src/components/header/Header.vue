<template>
  <header class="header">
    <div class="header-inner">
      <ul class="utills">
        <li>
          <button type="button" class="login-btn" @click="loginActived">로그인</button>
        </li>
        <li>
          <button type="button" class="membership-btn" @click="membershipActived">회원가입</button>
        </li>
      </ul>
      <login></login>
      <membership></membership>
    </div>
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
<style lang="scss" scoped>
.header {
  box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.6);

  .header-inner {
    max-width: 1280px;
    height: 90px;
    position: relative;
    margin: 0 auto;
    background-color: #ff0;
    z-index: 9999;
  }
}
.utills {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &:after {
    content: '';
    clear: both;
  }
  li {
    float: left;
    margin-left: 20px;
  }
} 
</style>