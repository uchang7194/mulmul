<template>
  <div class="member-edit" v-if="isToken" @click="changeFocus($event)">
    <form method="post" action="" class="member-edit-form">
      <fieldset>
        <legend class="a11y-hidden">프로필 수정 폼</legend>
        <member-edit-pic></member-edit-pic>
        <member-edit-pwd></member-edit-pwd>
        <member-edit-confirm-pwd></member-edit-confirm-pwd>
        <member-edit-msg></member-edit-msg>
        <member-edit-addr></member-edit-addr>
        <router-link tag="button" to="/my-page" class="edit-form-btn" @focus="changeFocus($event)"><span @click="changeUpdateBtnState">수정하기</span></router-link>
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
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    MemberEditPwd,
    MemberEditConfirmPwd,
    MemberEditPic,
    MemberEditMsg,
    MemberEditAddr
  },
  data () {
    return {
      my_info: {
        my_picture: '',
        password: {
          value: '',
          validate: false
        },
        confirm_password: '',
        location: {
          postcode: '',
          addr: '',
          detail_addr: ''
        },
        msg: ''
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setMyInfo': 'setMyInfo',
      'setUpdateBtn': 'setClickedUpdateBtn'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    },
    changeUpdateBtnState () {
      this.setUpdateBtn(true)
    }
  },
  computed: {
    ...mapGetters({
      'hasToken': 'getToken',
      'isClickedUpdateBtn': 'getClickedUpdateBtn',
      'info': 'getMyInfo'
    }),
    isToken () {
      return this.hasToken === '' ? false : true
    }
  },
  mounted: function () {
    let info = this.my_info
    let vuexInfo = this.info
    for (let prop in info) {
      if (info.hasOwnProperty(prop)) {
        if (prop === 'password') {
          info[prop].value = vuexInfo[prop].value
          info[prop].validate = vuexInfo[prop].validate
        } else if (prop === 'location') {
          info[prop].postcode = vuexInfo[prop].postcode
          info[prop].addr = vuexInfo[prop].addr
          info[prop].detail_addr = vuexInfo[prop].detail_addr
        } else {
          info[prop] = vuexInfo[prop]
        }
      }
    }
    this.setUpdateBtn(false)
  },
  beforeDestroy: function () {
    if (!this.isClickedUpdateBtn) {
      this.setMyInfo(this.my_info)
    }
  }
}
</script>

<style lang="scss">
.member-edit {
  .input-box {
    margin-bottom: 20px;
    position: relative;

    .validation-msg {
      position: absolute;
      bottom: -2rem;
      font-size: 1.2rem;
    }
  }
  label {
    display: block;
  }
  input {
    box-sizing: border-box;
    border: 1px solid #eee;
    height: 25px;
    width: 100%;
    padding: 0 0 0 7px;
  }
}
.member-edit-form {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.edit-form-btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  span {
    display: block;
  }
}
</style>