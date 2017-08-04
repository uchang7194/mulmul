<template>
  <div class="membership-name-box">
    <label for="membership-name"></label>
    <input type="text" id="membership-name" v-model="inputName" placeholder="이름을 입력하세요." @focus="changeFocus($event)">
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
    inputName: {
      get () {
        return this.$store.getMembershipName
      },
      set (v) {
        this.$store.dispatch('setMembershipName', v)
      }
    }
  }
}
</script>
<style lang="scss">
</style>