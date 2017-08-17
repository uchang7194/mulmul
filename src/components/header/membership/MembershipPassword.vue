<template>
  <div class="membership-pwd-box">
    <label for="membership-pwd">
      <span v-if="viewValidationMsg">{{validation.msg.incorrect}}</span>
    </label>
    <input type="password" id="membership-pwd" v-model="setVuexPwdValue" placeholder="비밀번호를 입력하세요.ㅌ" @focus="changeFocus($event)">
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      inputValue: '',
      validation: {
        state: false,
        msg: {
          incorrect: '올바른 비밀번호 형식이 아닙니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'isChangedMembershipFocus',
      'setPwdValue': 'setMembershipPassword',
      'setPasswordValidation': 'setMembershipPasswordValidation'
    }),
    changeFocus (e) {
      let target = e.target
      this.isFocused({target})
    },
    pwdValidation (pwd) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
      let result = reg.test(pwd)
      if (pwd.trim() !== '') {
        this.validation.state = result
      } else {
        this.validation.state = result
      }
      this.setPasswordValidation(result)
    }
  },
  computed: {
    ...mapGetters({
      'focuses': 'getMembetshipFocuses',
      'emailPwd': 'getMembershipPassword'
    }),
    setVuexPwdValue: {
      get () {
        return this.emailPwd
      },
      set (v) {
        this.inputValue = v
        this.pwdValidation(v)
        this.setPwdValue(v)
      }
    },
    viewValidationMsg () {
      return this.focuses.password && this.inputValue.trim() !== '' && !this.validation.state
    }
  }
}
</script>
<style lang="scss">
</style>