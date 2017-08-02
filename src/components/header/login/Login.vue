<template>
    <div class="login" v-if="isClosed" @click="changeFocus($event)" @focus="changeFocus($event)">
        <form action="" name="" class="login-form">
            <fieldset>
                <legend class="a11y-hidden">로그인 폼</legend>
                <email></email>
                <password></password>
            </fieldset>
        </form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
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
    ...mapMutations({
      'btnClicked': 'changeBtnClicked',
      'isFocus': 'changeLoginFocus'
    }),
    changeFocus (e) {
      this.isFocus({el: e.target})
    }
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
    margin-bottom: 12px;
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
    border: 0;
    border-bottom: 1px solid lightgreen;  
    height: 20px;
    width: 100%;
  }
}
.login-form {

  top: 50%;
  left: 50%;
  box-sizing: border-box;
  padding: 20px;
  transform: translate(-50%, -50%);    
  width: 300px;
  height: 300px;
  background-color: #fff;
}
</style>