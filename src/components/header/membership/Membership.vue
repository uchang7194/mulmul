<template>
  <div class="membership" v-if="isActive" @click="changeFocus($event)">
    <form action="" class="membership-form">
      <fieldset>
        <legend class="a11y-hidden">회원가입 폼</legend>
          <p class="title">회원가입</p>
          <membership-email></membership-email>
          <membership-password></membership-password>
          <membership-password-confirm></membership-password-confirm>
          <membership-name></membership-name>
          <membership-nickname></membership-nickname>
          <button class="membership-submit-btn" type="button" @click="requestMemberData">
            <span v-if="!loading" class="member-submit-span" @click="requestMemberData">등록하기</span>
            <i v-else-if="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import MembershipEmail from './MembershipEmail.vue'
import MembershipPasswordConfirm from './MembershipPasswordConfirm.vue'
import MembershipPassword from './MembershipPassword.vue'
import MembershipName from './MembershipName.vue'
import MembershipNickname from './MembershipNickname.vue'

export default {
  components: {
    MembershipEmail,
    MembershipPasswordConfirm,
    MembershipPassword,
    MembershipName,
    MembershipNickname
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions({
      'close': 'isChangedMembershipFocus',
      'setMemberFocus': 'setMemberValidationFocus'
    }),
    changeFocus (e) {
      if (e.nodeType === 1) {
        this.close(e)
        return
      } else {
        let target = e.target
        if (target.getAttribute('class') === 'membership-submit-btn' || target.getAttribute('class') === 'member-submit-span') {
          return
        }
        this.close({target})
      }
    },
    memberValidationStateChange (target, id) {
      let el = target.querySelector(id)
      el.focus()
      this.changeFocus(el)
      this.loading = false
    },
    memberValidation (data) {
      // 비었는지
      let target = this.$el
      for (let prop in data) {
        if (data.hasOwnProperty(prop)) {
          // 데이터가 없다면 && validation이 false라면
          if (prop === 'email' && data[prop].trim() === '') {
            this.memberValidationStateChange(target, '#membership-email')
            console.log('email 데이터가 비어있을 때')
            return false
          } else if (prop === 'email' && !this.emailValidation) {
            this.memberValidationStateChange(target, '#membership-email')
            console.log('email 유효성검사가 실패했을 때')
            return false
          }
          if (prop === 'password1' && data[prop].trim() === '') {
            this.memberValidationStateChange(target, '#membership-pwd')
            console.log('password1 데이터가 비어있을 때')
            return false
          } else if (prop === 'password2' && !this.pwdValidation) {
            this.memberValidationStateChange(target, '#membership-pwd')
            console.log('password1 유효성검사가 실패했을 때')
            return false
          }
          if (prop === 'password2' && data[prop].trim() === '') {
            this.memberValidationStateChange(target, '#membership-passwordConfirm')
            console.log('password2 데이터가 비어있을 때')
            return false
          } else if (prop === 'password2' && !this.pwdConfirmIsOk) {
            this.memberValidationStateChange(target, '#membership-passwordConfirm')
            console.log('password2 유효성검사가 실패했을 때')
            return false
          }
          if (prop === 'name' && data[prop].trim() === '') {
            this.memberValidationStateChange(target, '#membership-name')
            console.log('name 데이터가 비어있을 때')
            return false
          }
          if (prop === 'nickname' && data[prop].trim() === '') {
            this.memberValidationStateChange(target, '#membership-nickname')
            console.log('nickname 데이터가 비어있을 때')
            return false
          }
        }
      }
      return true
    },
    requestMemberData () {
      this.loading = true

      let data = {
        'email': this.getEmail,
        'password1': this.getPwd,
        'password2': this.getConfirmPwd,
        'name': this.getName,
        'nickname': this.getNickname
      }

      if (!this.memberValidation(data)) { return }

      this.$http({
        method: 'post',
        url: 'http://mulmul.xyz/member/',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        if (response === 200) {
          console.log('연결 성공')
          console.log(response)
          this.loading = false
          this.isActive()
        }
      }).catch((error) => {
        console.log(error)
        this.loading = false
      })
    }
  },
  computed: {
    ...mapGetters({
      'isActive': 'getMembershipActive',
      'getEmail': 'getMembershipEmail',
      'getPwd': 'getMembershipPassword',
      'getConfirmPwd': 'getMembershipPasswordConfirmValue',
      'getName': 'getMembershipName',
      'emailValidation': 'getMembershipEmailValidation',
      'pwdValidation': 'getMembershipPasswordValidation',
      'pwdConfirmIsOk': 'getMembershipPasswordConfirmIsOk',
      'getNickname': 'getMembershipNickName'
    })
  }
}
</script>
<style lang="scss">
.membership {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.6);
  z-index: 19999;
  
  & div {
    position: relative;
    margin-top: 2rem;
    label {
      position: absolute;
      top: -2rem;
      left: 0; 
    }
    span {
      font-size: 1rem;
    }
  }
  form {
    position: absolute;
    background-color: #fff;
  }
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }    
  label {
    display: block;
    text-align: left;
  }
  input {
    box-sizing: border-box;
    border: 1px solid #f5f5f5;
    width: 100%;
    padding: 7px 15px;
    font-size: 1rem;
  }
  button {
    padding: 0;
    border: 0;
    width: 100%;
    padding: 5px 0;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
}
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}
.membership-form {
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  padding: 20px;
  transform: translate(-50%, -50%);    
  width: 300px;
  background-color: #fff;
}
.membership-submit-btn {
  margin-top: 35px;
  background-color: rgb(56, 151, 204);
  .fa {
    font-size: 2rem;
  }
}
</style>