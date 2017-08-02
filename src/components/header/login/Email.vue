<template>
  <div class="email-box">
    <label for="email">E-mail <span class="email_chk_msg" v-if="viewValidation">{{email_chk_msg.incorrect}}</span></label>
    <input type="text" id="email" v-model="email">
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      email: '',
      email_chk_msg: {
        incorrect: '올바른 형식의 이메일이 아닙니다.'
      }
    }
  },
  computed: {
    ...mapGetters({
      'isEmailFocus': 'getLoginInputFocus'
    }),
    emailValidation () {
      let reg = /([\w-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if (this.email.trim().length > 0) {
        return reg.test(this.email)
      }
    },
    viewValidation () {
      return this.isEmailFocus.email && (this.email.trim().length > 0) && !this.emailValidation
    }
  }
}
</script>
<style lang="scss">
.email-box {
  .email_chk_msg {
    font-size: 10px;
  }
}
</style>