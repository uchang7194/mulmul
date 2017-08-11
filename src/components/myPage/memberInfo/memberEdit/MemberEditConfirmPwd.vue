<template>
  <div class="input-box password-confirm-box">
    <label for="edit-confirm-password">비밀번호 확인</label>
    <input type="text" id="edit-confirm-password" @focus="changeFocus">
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus'
    }),
    changeFocus (event) {
      console.log(event)
      let target = event.target
      this.isFocused(target)
    }
  }
}
</script>

<style lang="scss">
</style>