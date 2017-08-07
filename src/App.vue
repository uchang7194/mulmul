<template>  
  <div id="app" class="wrapper">
    <div class="header-wrapper">
      <header-comp></header-comp>
    </div>
    <main class="contents">
      <div class="grid">
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
        </div>
        <div class="col col-d-3 col-t-4 col-m-4">
          <div class="box">item</div>
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
