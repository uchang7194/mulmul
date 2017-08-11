<template>
  <div id="myPage" class="grid">
    <member-info></member-info>
    <view-registed-product></view-registed-product>
    <product></product>
  </div>
</template>

<script>
import MemberInfo from './memberInfo/MemberInfo.vue'
import ViewRegistedProduct from './viewRegistedProduct/ViewRegistedProduct.vue'
import Product from './product/Product.vue'

export default {
  name: 'myPage',
  components: {
    MemberInfo,
    ViewRegistedProduct,
    Product
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>    