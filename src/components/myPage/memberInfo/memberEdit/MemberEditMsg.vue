<template>
  <div class="input-box msg-box">
    <label for="edit-msg">소개</label>
    <input type="text" id="edit-msg" @focus="changeFocus($event)">
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