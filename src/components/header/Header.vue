<template>
  <header class="header grid">
    <h1 class="heading col col-d-3 col-t-2 col-m-1">
      <div class="box">
        <router-link tag="a" to="/">
          <a href>
            <img src="../../assets/mulmul_logo.png" alt="물물 로고">
          </a>
        </router-link>
      </div>
    </h1>
    <div class="search col col-d-6 col-t-4 col-m-3">
      <div class="box t-center">
        <search></search>
      </div>
    </div>
    <div class="sign-in-up col col-d-3 col-t-2 col-m-4">
      <div v-if="isVuexAuthToken" class="box t-right">
        <button type="button" class="btn-sign-in" @click="loginActived">로그인</button>
        <button type="button" class="btn-sign-up blue" @click="membershipActived">회원가입</button>
        <!--임시-->
      </div>
      <div v-else class="box t-right">
        <ul class="login-utill-list">
          <router-link tag="li" to="/"><a href>즐겨찾기</a></router-link>
          <router-link tag="li" to="/"><a href>알림</a></router-link>
          <router-link tag="li" to="/my-page"><a href>마이페이지</a></router-link>
          <router-link tag="li" to="/"><a href><span @click="removeToken">logout</span></a></router-link>
        </ul>
      </div>  
    </div>
    <login></login>
    <membership></membership>
  </header>  
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
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
      'membershipActived': 'isChangedMembershipActive',
      'setToken': 'setToken'
    }),
    removeToken () {
      console.log('removeToken')
      window.localStorage.removeItem('token')
      this.setToken()
    }
  },
  computed: {
    ...mapGetters({
      'isToken': 'getToken'
    }),
    isVuexAuthToken () {
      return !this.isToken ? true : false
    }
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
.login-utill-list {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    float: left;
    margin-right: 20px;
  }
}
</style>