<template>
  <div class="pwd-box">
    <label for="pwd">Password <span class="pwd_chk_msg" v-if="viewValidation">{{pwd_chk_msg.incorrect}}</span></label>
    <input type="password" id="pwd" class="pwd-input" v-model="password">
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      password: '',
      pwd_chk_msg: {
        incorrect: '올바른 형식의 비밀번호가 아닙니다.'
      }
    }
  },
  computed: {
    ...mapGetters({
      'isPwdFocus': 'getLoginInputFocus'
    }),
    pwdValidation () {
      let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
      if (this.password.trim().length > 0) {
        return reg.test(this.password)
      }
    },
    viewValidation () {
      return this.isPwdFocus.pwd && this.password.trim().length > 0 && !this.pwdValidation
    }
  }
}
</script>
<style lang="scss">
.pwd_chk_msg {
  font-size: 10px;
}
.pwd-box {
}
</style>