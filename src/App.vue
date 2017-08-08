<template>  
  <div id="app" class="wrapper">
    <div class="header-wrapper">
      <header-comp></header-comp>
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
