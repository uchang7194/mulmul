<template>  
  <div id="app" class="wrapper">
    <div class="header-wrapper">
      <!-- <header-comp></header-comp> -->
      <header class="header grid">
        <h1 class="heading col col-d-2 col-t-2 col-m-1">
          <div class="box">
            <img src="./assets/mulmul_logo_w.png" alt="물물 로고">
          </div>
        </h1>
        <div class="search col col-d-7 col-t-4 col-m-3">
          <div class="box t-center">
            <div class="goods-search-box">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input style="search" class="input-search-goods" alt="상품검색창" placeholder="상품 또는 아이디를 검색하세요.">
            </div>
          </div>
        </div>
        <div class="sign-in col col-d-3 col-t-2 col-m-4">
          <div class="box t-right">
            <button tpye="button" class="btn-sign-in">로그인</button>
            <button type="button" class="btn-sign-up blue">회원가입</button>
          </div>
        </div>
      </header>
    </div>
    <main class="contents">
      <div class="grid">
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_01.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_02.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_03.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_04.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_05.jpeg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_06.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_07.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_08.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_01.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_02.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_03.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_04.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_05.jpeg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_06.jpg" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_07.png" alt="image">
            </div>
          </div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">
            <div class="goods-thumbnail-box">
              <img src="./assets/goods/goods_08.jpg" alt="image">
            </div>
          </div>
        </div>
      </div>        
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import HeaderComp from './components/header/Header.vue'

export default {
  name: 'app',
  components: {
    HeaderComp
  },
  data () {
    return {}
  }
}
</script>

<style lang ="scss">
/* @import './scss/stylesheet.scss'; */
.contents {
  position: relative;
  z-index: 0;
}
</style>
