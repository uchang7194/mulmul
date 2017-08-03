<template>
  <div class="email-box">
    <label for="email"><span class="email_chk_msg" v-if="viewValidation">{{email_chk_msg.incorrect}}</span></label>
    <input ref="email_input" placeholder="이메일을 입력하세요." type="text" id="email" v-model="email" @focus="changeFocus($event)">
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      email: '',
      email_chk_msg: {
        incorrect: '올바른 형식의 이메일이 아닙니다.'
      }
    }
  },
  methods: {
    ...mapActions({
      'btnClicked': 'isChangedLoginModalState',
      'isFocus': 'isChangedInputTextFocus'
    }),
    changeFocus (e) {
      this.isFocus({el: e.target})
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
  }
}
</style>