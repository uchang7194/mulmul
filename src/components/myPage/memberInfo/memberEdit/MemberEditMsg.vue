<template>
  <div class="input-box msg-box">
    <label for="edit-msg">소개</label>
    <input type="text" id="edit-msg" @focus="changeFocus($event)" @input="setMsg" :value="setMsgValue">
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      msg: {
        value: ''
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setVuexMsg': 'setMyInfoMsg'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    },
    setMsg (e) {
      this.msg.value = e.target.value
      this.setVuexMsg(e.target.value)
    }
  },
  computed: {
    setMsgValue () {
      return this.msg.value
    }
  }
}
</script>

<style lang="scss">
</style>