<template>
  <div class="col col-d-12 col-t-8 col-m-4">
    <div class="box">
      <div class="member-info grid">
        <div class="col col-d-8 col-t-8 col-m-4 col-d-offset-2 alpha omega">
          <div class="box">
            <div class="member-pic">
              사진
            </div>
            <span class="member-nickname">닉네임</span>
            <button class="setting-btn" type="button">settings</button>
            <div class="member-edit">
              프로필 편집
            </div>
            <div class="member-product-info">
              <ul class="product-info-list">
                <li class="regist-pd">등록상품 <span class="regist-pd-count">0</span></li>
                <li class="follower">팔로워 <span class="follower-count">0</span></li>
                <li class="follow">팔로우 <span class="follow-count">0</span></li>
              </ul>
            </div>
            <span class="member-name">이름</span>
          </div>
        </div>
      </div>
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