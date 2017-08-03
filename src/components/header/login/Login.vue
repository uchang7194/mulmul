<template>
    <div class="login" v-if="isClosed">
        <form action="" name="" class="login-form">
            <fieldset>
                <legend class="a11y-hidden">로그인 폼</legend>
                <p class="title">MulMul</p>
                <email></email>
                <password></password>
                <button class="facebook-login-btn" type="button">Facebook</button>
                <button class="login-submit-btn" type="button">로그인</button>
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
    return {}
  },
  methods: {
    ...mapActions({
      'btnClicked': 'isChangedLoginModalState'
    })
  },
  computed: {
    ...mapGetters({
      'isClosed': 'getBtnClicked'
    })
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
}
</style>