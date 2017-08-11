<template>
  <div class="membership" v-if="isActive" @click="changeFocus($event)">
    <form action="" class="membership-form">
      <fieldset>
        <legend class="a11y-hidden">회원가입 폼</legend>
          <p class="title">회원가입</p>
          <membership-email></membership-email>
          <membership-email-confirm></membership-email-confirm>
          <membership-password></membership-password>
          <membership-name></membership-name>
          <membership-nickname></membership-nickname>
          <button class="membership-submit-btn" type="button" @click="requestMemberData" @focus="changeFocus($event)">
            <span v-if="!loading">등록하기</span>
            <i v-else-if="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import MembershipEmail from './MembershipEmail.vue'
import MembershipEmailConfirm from './MembershipEmailConfirm.vue'
import MembershipPassword from './MembershipPassword.vue'
import MembershipName from './MembershipName.vue'
import MembershipNickname from './MembershipNickname.vue'

export default {
  components: {
    MembershipEmail,
    MembershipEmailConfirm,
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
      'close': 'isChangedMembershipFocus'
    }),
    changeFocus (e) {
      let target = e.target
      this.close({target})
    },
    requestMemberData () {
      this.loading = true

      // this.$http.post('http://mulmul.xyz/api/member/register/', {
      //   'pk': 13,
      //   'nickname': this.getNickname,
      //   'name': this.getName,
      //   'email': this.getEmail,
      //   'profile_image': null,
      //   'user_type': 'D',
      //   'post_code': null,
      //   'road_address': null,
      //   'detail_address': null,
      //   'date_joined': '2017-08-11T03:27:20.124831Z',
      //   'last_login': null
      // }).then((response) => {
      //   console.log(response)
      //   if (response === 200) {
      //     this.loading = false
      //   }
      // }).catch((error) => {
      //   console.log(error)
      //   this.loading = false
      // })

      this.$http({
        method: 'post',
        url: 'http://mulmul.xyz/api/member/register/',
        // 'Access-Control-Request-Headers': '*',
        // params: {
        //   pk: 1
        // }
        data: {
          'pk': 13,
          'nickname': this.getNickname,
          'name': this.getName,
          'email': this.getEmail,
          'profile_image': null,
          'user_type': 'D',
          'post_code': null,
          'road_address': null,
          'detail_address': null,
          'date_joined': '2017-08-11T03:27:20.124831Z',
          'last_login': null
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        if (response === 200) {
          console.log(response)
          this.loading = false
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
      'getName': 'getMembershipName',
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