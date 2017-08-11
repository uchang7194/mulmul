<template>
  <div class="mypage-user-info">
    <div class="user-profile-box col col-d-3 col-t-1 col-m-4">
      <p class="user-profile">프로필 사진</p>
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
      <p class="user-msg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non veniam vero corporis itaque aperiam. Dignissimos ipsum modi in doloribus?
      </p>          
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
</style>