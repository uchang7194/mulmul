<template>
  <div class="input-box my-picture-box">
    <label for="edit-my-picture">사진 변경</label>
    <input type="file" id="edit-my-picture" @focus="changeFocus($event)">
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