<template>
  <div class="input-box password-box">
    <label for="edit-password">비밀번호</label>
    <input type="text" id="edit-password" @focus="changeFocus($event)">
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