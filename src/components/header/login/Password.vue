<template>
  <div class="pwd-box">
    <label class="a11y-hidden" for="pwd">비밀번호</label>
    <input type="password" placeholder="비밀번호를 입력하세요." id="pwd" v-model="inputPassword">
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
  },
  computed: {
    inputPassword: {
      get () {
        return this.$store.getters.getLoginPassword
      },
      set (v) {
        this.$store.dispatch('setLoginPassword', v)
      }
    }
  }
}
</script>
<style lang="scss">
</style>