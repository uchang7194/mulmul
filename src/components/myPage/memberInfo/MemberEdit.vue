<template>
  <div class="member-edit">
    <form method="post" action="" class="member-edit-form">
      <fieldset>
        <legend class="a11y-hidden">프로필 수정 폼</legend>
        <member-edit-pic></member-edit-pic>
        <member-edit-pwd></member-edit-pwd>
        <member-edit-confirm-pwd></member-edit-confirm-pwd>
        <member-edit-msg></member-edit-msg>
        <member-edit-addr></member-edit-addr>
        <button type="submit" @focus="changeFocus($event)">수정하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import MemberEditPwd from './memberEdit/MemberEditPwd.vue'
import MemberEditConfirmPwd from './memberEdit/MemberEditConfirmPwd.vue'
import MemberEditPic from './memberEdit/MemberEditPic.vue'
import MemberEditMsg from './memberEdit/MemberEditMsg.vue'
import MemberEditAddr from './memberEdit/MemberEditAddr.vue'
import {mapActions} from 'vuex'

export default {
  components: {
    MemberEditPwd,
    MemberEditConfirmPwd,
    MemberEditPic,
    MemberEditMsg,
    MemberEditAddr
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    }
  }
}
</script>

<style lang="scss">
.member-edit {
  .input-box {
    margin-bottom: 20px;
  }
  label {
    display: inline-block;
    width: 10rem;
    text-align: center;
  }
  input[type="text"] {
    border: 1px solid #eee;
  }
}
</style>