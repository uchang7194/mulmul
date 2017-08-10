<template>  
  <main class="contents">
    <div class="grid">
      <div class="mypage-user-info">
        <div class="user-profile-box col col-d-3 col-t-1 col-m-4">
          <p class="user-profile">프로필 사진</p>
        </div>
        <div class="user-info-box col col-d-8 col-t-3 col-m-4">
          <p class="user-id f-left">misosng06</p>
          <button type="button" class="common btn-profile-modify f-left">프로필 편집</button>
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
      <div class="user-item-list">
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="add-goods-box t-center">
              <i class="fa fa-plus fa-5x" aria-hidden="true"></i>
              <p>add item!</p>
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_02.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_03.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_04.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_05.jpeg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_06.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_07.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_08.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_01.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_02.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_03.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_04.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_05.jpeg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_06.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_07.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="../../assets/goods/goods_08.jpg" alt="image">
            </div>
          </div>
        </div>
      </div>
      </div>
  </main>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {}
  }
}
</script>
<style lang ="scss">
@import '../../scss/modules/base';
@import '../../scss/modules/mixin';
  .mypage-user-info{
    height: $leading * 10;
    margin-bottom: $leading * 2;
    .user-profile{
      width: $leading * 9;
      line-height: $leading-scale * 9;
      display: block;
      border: 1px solid #ddd;
      border-radius: 50%;
      background: pink;
      margin: 0 auto;
      margin-top: $leading /2;
    }
    .user-info-box{
      padding-top: $leading;
      .user-id{
        font-size: 2.6rem;
        height: $leading * 2;
        margin-right: 20px;
        box-sizing: border-box;
      }
      .count-box{
        clear: both;
        padding-top: $leading;
        >span{
          margin-right: 10px;
        }
        span{
          display: inline-block;
          min-width: 45px;
        }
      }
      .user-msg{
        padding-top: $leading;
      }
    }    
  }
  .add-goods-box{
    color: #999;
    padding-top: $leading * 3;
    i{
      height: $leading * 3;
    }
    p{
      height: $leading;
    }
  }
</style>
