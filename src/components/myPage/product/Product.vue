<template>
  <div class="col col-d-12 col-t-8 col-m-4">
    <div class="box">
      <div class="products">
        <div class="box_1">1</div>
        <div class="box_2">2</div>
        <div class="box_3">3</div>
        <div class="box_4">4</div>
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
.products {
  
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  > div {
    float: left;
  }
} 
</style>