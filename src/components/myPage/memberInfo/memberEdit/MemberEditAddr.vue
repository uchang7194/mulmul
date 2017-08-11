<template>
  <div class="input-box location-box">
    <label for="edit-location">지역</label>
    <input type="text" id="edit-location" @focus="changeFocus($event)">
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