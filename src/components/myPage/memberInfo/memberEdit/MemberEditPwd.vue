<template>
  <div class="input-box password-box">
    <label for="edit-password">비밀번호</label>
    <input type="password" id="edit-password" v-model="setPwd" @focus="changeFocus($event)">
    <span class="validation-msg" v-show="pwdFocused.password && isValue && !password.validate">{{password.msg.incorrect}}</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      password: {
        value: '',
        isValue: false,
        validate: false,
        msg: {
          incorrect: '비밀번호가 올바르지 않습니다.'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setVuexPwd': 'setMyInfoPassword'
    }),
    changeFocus (event) {
      console.log(event)
      let target = event.target
      this.isFocused(target)
    },
    pwdValidate (pwd) {
      let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
      let result = reg.test(pwd)
      if (pwd.trim() !== '') {
        this.password.validate = result
      } else {
        this.password.validate = result
      }

      return result
    }
  },
  computed: {
    ...mapGetters({
      'info': 'getMyInfo',
      'pwdFocused': 'getFocuses'
    }),
    setPwd: {
      get () {
        return this.info.password.value
      },
      set (v) {
        this.password.value = v
        this.setVuexPwd({value: v, validate: this.pwdValidate(v)})
      }
    },
    isValue () {
      return !!this.password.value
    }
  },
  mounted: function () {
    let vuexPwd = this.info.password.value
    this.$el.querySelector('#edit-password').value = vuexPwd
  }
}
</script>

<style lang="scss">
</style>