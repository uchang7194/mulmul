<template>
  <div class="mypage-user-info">
    <div class="user-profile-box col col-d-3 col-t-1 col-m-4">
      <div class="user-profile">
        <span v-if="!my_pic.isPicture">프로필 사진을 추가해주세요.</span>
      </div>
    </div>
    <div class="user-info-box col col-d-8 col-t-3 col-m-4">
      <p class="user-id f-left">misosng06</p>
      <router-link :to="{name: 'memberEdit'}" tag="button" type="button" class="common btn-profile-modify f-left">
        프로필 편집
      </router-link>
      <p class="count-box">
        <span class="items">
          <span class="count-title">게시물</span>
          <span class="count-num t-bold">111</span>
        </span>
        <span class="follower">
          <span class="count-title">팔로워</span>
          <span class="count-num t-bold">222</span>
        </span>
        <span class="follow">
          <span class="count-title">팔로우</span>
          <span class="count-num t-bold">333</span>
        </span>
      </p>
      <p class="user-msg">{{user_msg === '' ? '자신을 소개해주세요.' : user_msg}}</p>          
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      my_pic: {
        src: '',
        name: '',
        isPicture: false
      },
      user_msg: ''
    }
  },
  methods: {
    ...mapActions({
      'initMyPageData': 'initMyPageData'
    })
  },
  computed: {
    ...mapGetters({
      'info': 'getMyInfo'
    })
  },
  mounted: function () {
    let info = this.info
    let picture = info.my_picture
    let msg = info.msg
    let picObj = this.my_pic

    picture.file ? picObj.isPicture = true : picObj.isPicture = false
    if (picObj.isPicture) {
      let pictureBox = this.$el.querySelector('.user-profile')
      pictureBox.style.background = 'url(' + picture.data + ')'
      pictureBox.style.backgroundRepeat = 'no-repeat'
      pictureBox.style.backgroundSize = 'cover'
      pictureBox.style.backgroundPosition = 'center'
    }
    if (msg.trim() !== '') {
      this.user_msg = msg
    }
  },
  beforeDestroy: function () {
    let picObj = this.my_pic

    // this.initMyPageData()

    if (!picObj.isPicture) {
      return
    }

    let el = this.$el
    let pictureBox = el.querySelector('.user-profile')
    pictureBox.style.background = 'none'
  }
}
</script>

<style lang="scss">
.member-info {
  .box {
    line-height: 1;
    > div {
      line-height: 1;
    }
    margin-bottom: 0
  }
}
.user-profile-box {
  .user-profile-msg,
  .user-profile {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #ddd;
    overflow: hidden;
    span {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>