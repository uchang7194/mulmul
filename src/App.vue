<template>  
  <div id="app" class="wrapper">
    <div class="header-wrapper">
      <header class="header grid">
        <h1 class="heading col col-d-3 col-t-2 col-m-1">
          <div class="box">logo</div>
        </h1>
        <div class="search-box col col-d-5 col-t-4 col-m-3">
          <div class="box">search</div>
        </div>
        <div class="sign-in col col-d-2 col-t-1 col-m-2">
          <div class="box">sign-in</div>
        </div>
        <div class="sing-up col col-d-2 col-t-1 col-m-2">
          <div class="box">sing-up</div>
        </div>
      </header>
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

</style>
