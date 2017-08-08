<template>
  <div class="membership-emailConfirm-box">
    <label for="membership-emailConfirm">
      <span v-if="confirmFocused && !confirm.isEmptyValue">{{confirm.msgs.noEmailValue}}</span>
      <span v-else-if="confirmFocused && !confirm.isValidate">{{confirm.msgs.incorrectEmailValue}}</span>
      <span v-else-if="confirmFocused && !confirm.isConfirmed">{{confirm.msgs.noCompare}}</span>
    </label>
    <input type="text" id="membership-emailConfirm" placeholder="다시 한번 이메일을 입력하세요." v-model="inputEmail" @focus="changeFocus($event)">
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
          noEmailValue: '이메일을 먼저 써주세요.',
          incorrectEmailValue: '형식에 맞지 않은 이메일입니다.',
          noCompare: '이메일이 일치하지 않습니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'isChangedMembershipFocus',
      'setEmailConfirmValue': 'setMembershipEmailConfirmValue',
      'setEmailConfirmIsOk': 'setMembershipEmailConfirmIsOk'
    }),
    changeFocus (e) {
      let target = e.target
      this.confirm.isEmptyValue = (this.emailValue.trim() !== '')
      this.confirm.isValidate = this.emailValidation
      this.isFocused({target})
    }
  },
  computed: {
    ...mapGetters({
      'emailValue': 'getMembershipEmail',
      'emailValidation': 'getMembershipEmailValidation',
      'emailConfirmValue': 'getMembershipEmailConfirmValue',
      'emailConfirmFocused': 'getMembetshipFocuses'
    }),
    confirmFocused () {
      return this.emailConfirmFocused.email_confirm
    },
    inputEmail: {
      get () {
        return this.emailConfirmValue
      },
      set (v) {
        console.log('this.emailValue', this.emailValue)
        let isConfirmed = this.confirm.isConfirmed = (this.emailValue === v)
        this.setEmailConfirmIsOk(isConfirmed)
        this.setEmailConfirmValue(v)
      }
    }
  }
}
</script>
<style lang="scss">
</style>