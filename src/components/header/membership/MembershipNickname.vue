<template>
  <div class="membership-nickname-box">
    <label for="membership-nickname"></label>
    <input type="text" id="membership-nickname" v-model="inputNickname" placeholder="닉네임을 입력하세요." @focus="changeFocus($event)">
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'isChangedMembershipFocus'
    }),
    changeFocus (e) {
      let target = e.target
      this.isFocused({target})
    }
  },
  computed: {
    inputNickname: {
      get () {
        return this.$store.getMembershipNickname
      },
      set (v) {
        this.$store.dispatch('setMembershipNickName', v)
      }
    }
  }
}
</script>
<style lang="scss">
</style>