<template>
  <div id="app">
    <header-comp></header-comp>
    <!--  
    <img src="./assets/logo.png">
    <router-view></router-view>
    <footer>hee footer</footer>
    -->
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

<style>
html {
  font-size: 10px;
}
body {
  font-size: 1.2rem;
}
#app {
  
}
</style>
