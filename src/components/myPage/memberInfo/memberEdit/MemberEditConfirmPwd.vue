<template>
  <div class="input-box password-confirm-box">
    <label for="edit-confirm-password">비밀번호 확인</label>
    <input type="password" id="edit-confirm-password" @focus="changeFocus($event)" v-model="setConfirmPwd">
    <span class="validation-msg" v-show="pwdConfirmFocused.confirm_password && isValue">{{getValidation}}</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      pwd_confirm: {
        value: '',
        msg: {
          noPasswordValue: '비밀번호를 먼저 써주세요.',
          incorrect: '비밀번호가 올바르지 않습니다.',
          noCompare: '비밀번호가 일치하지 않습니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setInfoConfirmPwd': 'setMyInfoConfirmPassword'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    }
  },
  computed: {
    ...mapGetters({
      'info': 'getMyInfo',
      'pwdConfirmFocused': 'getFocuses'
    }),
    setConfirmPwd: {
      get () {
        return this.info.confirm_password
      },
      set (v) {
        this.pwd_confirm.value = v
        this.setInfoConfirmPwd(v)
      }
    },
    getValidation () {
      let pwd = this.info.password
      if (!pwd.value) {
        return this.pwd_confirm.msg.noPasswordValue
      }
      if (!pwd.validate) {
        return this.pwd_confirm.msg.incorrect
      }
      if (pwd.value === this.pwd_confirm.value) {
        this.pwd_confirm.value = ''
      }
      if (pwd.value !== this.pwd_confirm.value) {
        return this.pwd_confirm.msg.noCompare
      }
    },
    isValue () {
      return !!this.pwd_confirm.value
    }
  }
}
</script>

<style lang="scss">
</style>