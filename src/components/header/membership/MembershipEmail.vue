<template>
  <div class="membership-email-box">
    <label for="membership-email">
      <span v-if="viewValidationMsg">{{validation.msg.incorrect}}</span>
    </label>
    <input type="text" id="membership-email" placeholder="이메일을 입력하세요." v-model="setVuexEmailValue" @focus="changeFocus($event)">
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
          incorrect: '올바르지 않은 이메일 입니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'isChangedMembershipFocus',
      'setEmailValue': 'setMembershipEmail',
      'setEmailValidation': 'setMembershipEmailValidation'
    }),
    changeFocus (e) {
      let target = e.target
      this.isFocused({target})
    },
    emailValidation (email) {
      let reg = /([\w-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      let result = reg.test(email)
      // let emailValue = '' + email
      if (email.trim() !== '') {
        this.validation.state = result
      } else {
        this.validation.state = result
      }
      this.setEmailValidation(result)
    }
  },
  computed: {
    ...mapGetters({
      'focuses': 'getMembetshipFocuses',
      'emailValue': 'getMembershipEmail'
    }),
    setVuexEmailValue: {
      get () {
        return this.emailValue
      },
      set (v) {
        this.inputValue = v
        this.emailValidation(v)
        this.setEmailValue(v)
      }
    },
    viewValidationMsg () {
      return this.focuses.email && this.inputValue.trim() !== '' && !this.validation.state
    }
  }
}
</script>
<style lang="scss">
</style>