<template>
    <div class="login" v-if="isClosed" @click="closeLoginModal($event)">
        <form action="" name="" class="login-form">
            <fieldset>
                <legend class="a11y-hidden">로그인 폼</legend>
                <p class="title">MulMul</p>
                <email></email>
                <password></password>
                <button class="facebook-login-btn" type="button">Facebook</button>
                <button class="login-submit-btn" type="button">
                  <span v-if="!loading" class="login-submit-span" @click="requestToken">등록하기</span>
                  <i v-else-if="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                </button>
            </fieldset>
        </form>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import Email from './Email.vue'
import Password from './Password.vue'

export default {
  components: {
    Email,
    Password
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions({
      'setLoginDataAll': 'setLoginDataAll',
      'btnClicked': 'isChangedLoginActive',
      'close': 'isChangedLoginFocus',
      'setToken': 'setToken'
    }),
    closeLoginModal (e) {
      let target = e.target
      this.close({target})
    },
    requestToken () {
      this.loading = true
      window.setTimeout(() => {
        this.btnClicked()
        this.loading = false
        this.setLoginDataAll({
          email: '',
          password: ''
        })
        this.setToken('adasd1!@!ada3!@')
        // 서버에서 email과 pwd를 넘겼을 때 성공했다면
        // response 객체에서 token값을 찾아 localstorage에 저장.
      }, 3000)
    }
  },
  computed: {
    ...mapGetters({
      'isClosed': 'getLoginActived'
    })
  },
  mounted: function () {
    console.log('login mounted this.$el', this.$el)
  }
}
</script>
<style lang="scss">
.a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    clip: rect(0 0 0 0);
    overflow: hidden;
    margin: -1px;
}
.login {
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
.login-form {

  top: 50%;
  left: 50%;
  box-sizing: border-box;
  padding: 20px;
  transform: translate(-50%, -50%);    
  width: 300px;
  background-color: #fff;
}
.facebook-login-btn {
  margin-top: 35px;
  background-color: rgb(56, 151, 204);
}
.login-submit-btn {
  margin-top: 10px;
  background-color: rgb(56, 151, 204);
  span {
    display: block;
  }
  .fa {
    font-size: 2rem;
  }
}
</style>