<template>
  <div class="membership-passwordConfirm-box">
    <label for="membership-passwordConfirm">
      <span v-if="confirmFocused && !confirm.isEmptyValue">{{confirm.msgs.noPasswordValue}}</span>
      <span v-else-if="confirmFocused && !confirm.isValidate">{{confirm.msgs.incorrectPasswordValue}}</span>
      <span v-else-if="confirmFocused && !confirm.isConfirmed">{{confirm.msgs.noCompare}}</span>
    </label>
    <input type="password" id="membership-passwordConfirm" placeholder="다시 한번 이메일을 입력하세요." v-model="inputPassword" @focus="changeFocus($event)">
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      inputValue: '',
      confirm: {
        isEmptyValue: false,
        isValidate: false,
        isConfirmed: false,
        msgs: {
          noPasswordValue: '비밀번호를 먼저 써주세요.',
          incorrectPasswordValue: '형식에 맞지 않은 비밀번호입니다.',
          noCompare: '비밀번호가 일치하지 않습니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'isChangedMembershipFocus',
      'setPasswordConfirmValue': 'setMembershipPasswordConfirmValue',
      'setPasswordConfirmIsOk': 'setMembershipPasswordConfirmIsOk'
    }),
    changeFocus (e) {
      let target = e.target
      this.confirm.isEmptyValue = (this.passwordValue.trim() !== '')
      this.confirm.isValidate = this.passwordValidation
      this.isFocused({target})
    }
  },
  computed: {
    ...mapGetters({
      'passwordValue': 'getMembershipPassword',
      'passwordValidation': 'getMembershipPasswordValidation',
      'passwordConfirmValue': 'getMembershipPasswordConfirmValue',
      'passwordConfirmFocused': 'getMembetshipFocuses'
    }),
    confirmFocused () {
      return this.passwordConfirmFocused.password_confirm
    },
    inputPassword: {
      get () {
        return this.passwordConfirmValue
      },
      set (v) {
        console.log('this.passwordValue', this.passwordValue)
        let isConfirmed = this.confirm.isConfirmed = (this.passwordValue === v)
        this.setPasswordConfirmIsOk(isConfirmed)
        this.setPasswordConfirmValue(v)
      }
    }
  }
}
</script>
<style lang="scss">
</style>