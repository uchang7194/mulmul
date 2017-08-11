<template>
  <form action="submit" id="search" v-cloak>
    <label for="search-box" class="a11y-hidden"> 콘텐츠 검색 </label>
    <div class="goods-search-box">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input id="search-box" type="search" @input="inputChangeSearch" :value="searchString" class="input-search-goods" alt="상품검색창" placeholder="Search">
      <div class="search-list-box">
        <ul class="search-list">
          <li
            v-for="good in filteredGoods"
            v-if="filteredGoods.length > 0 && searchString.length > 0">
            <a :href="good.url">{{ good.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    created () {
      this.goodsKeys = Object.keys(this.goods[0])
    },
    data () {
      return {
        searchString: '',
        goodsKeys: [],
        goods: [
          {name: '네일', url: '#', number: '1'},
          {name: '카메라', url: '#', number: '2'},
          {name: '스타벅스', url: '#', number: '3'},
          {name: '시계', url: '#', number: '4'},
          {name: '안경', url: '#', number: '5'},
          {name: '아이폰', url: '#', number: '6'},
          {name: '맥북', url: '#', number: '7'},
          {name: '립스틱', url: '#', number: '8'},
          {name: '샴푸', url: '#', number: '9'},
          {name: '이어폰', url: '#', number: '10'},
          {name: '맥북', url: '#', number: '11'}
        ]
      }
    },
    computed: {
      // 사용자가 입력한 정보와 일치하는 내용을 포함한 집합을 반환하는 computed props
      filteredGoods () {
        let goods = this.goods
        let searchString = this.searchString.trim().toLowerCase()

        // 사용자가 정보를 입력한 경우
        if (searchString) {
          return goods.filter(content => {
            let values = Object.values(content)
            return values.some(value => {
              return value.includes(searchString)
            })
          })
        }
        return goods
      }
    },
    methods: {
      inputChangeSearch (event) {
        this.searchString = event.target.value
      }
    }
  }
</script>

<style lang="scss">
@import '../../../scss/modules/_base';

  [v-cloak] {
    display: none;
  }
  .search {
    display: flex;
    z-index: 9999;
  }

  .search-list{
    background: green;
    line-height: $leading-scale * 2;
    color: #fff;
  }
</style>