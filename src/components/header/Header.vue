<template>
  <header class="header">
    <div class="header-inner">
      <button type="button" class="login-btn" @click="btnClicked">로그인</button>
      <login></login>
    </div>
  </header>
</template>
<script>
import {mapMutations} from 'vuex'
import Login from './login/Login.vue'

export default {
  components: {
    Login
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      'btnClicked': 'changeBtnClicked'
    })
  }
}
</script>
<style lang="scss">
.header {
  box-shadow: 0 2px 2px 0 rgba(20, 20, 20, 0.6);
  .header-inner {
    max-width: 1280px;
    height: 90px;
    position: relative;
    margin: 0 auto;
    background-color: #ff0;
  }
  .login-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>