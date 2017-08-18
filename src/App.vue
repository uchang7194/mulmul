<template>  
  <div id="app" class="wrapper">
    <div class="header-wrapper">
      <header-comp></header-comp>
    </div>
    <router-view></router-view>
    <!-- <main class="contents">
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
    </main> -->
    <!-- <modal-comp></modal-comp>  -->
    <footer class="footer"></footer>
  </div>
</template>

<script>
import HeaderComp from './components/header/Header.vue'
import ModalComp from './components/Modal.vue'
import MyPage from './components/mypage/MyPage.vue'
import {mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    HeaderComp, ModalComp, MyPage
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      'hasToken': 'hasToken'
    })
  },
  mounted: function () {
    let token = !!window.localStorage.getItem('token')

    if (token) {
      this.hasToken(true)
    } else {
      this.hasToken(false)
    }
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
