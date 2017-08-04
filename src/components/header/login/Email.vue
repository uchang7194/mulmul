<template>
  <div class="email-box">
    <label class="a11y-hidden" for="email">이메일</label>
    <input placeholder="이메일을 입력하세요." type="text" id="email" v-model="inputEmail">
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    inputEmail: {
      get () {
        return this.$store.getters.getLoginEmail
      },
      set (v) {
        this.$store.dispatch('setLoginEmail', v)
      }
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