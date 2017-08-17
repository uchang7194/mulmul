<template>
  <div class="input-box location-box">
    <span class="addr-title">주소</span>
    <div class="addr-box">
      <label class="a11y-hidden" for="postcode">우편번호</label>
      <input type="text" id="postcode" placeholder="우편번호">
      <button type="button" class="search-addr-btn" @click="execDaumPostcode" value="우편번호 찾기">우편번호 찾기</button><br>
      <label class="a11y-hidden" for="address">주소</label>
      <input type="text" id="address" placeholder="주소">
      <label class="a11y-hidden" for="detail-address">상세주소</label>
      <input type="text" id="detail-address" placeholder="상세주소" @input="setDetailAddr" :value="locDetailAddr">
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      address: {
        postcode: '',
        addr: '',
        detail_addr: ''
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setVuexLoc': 'setMyInfoLocation',
      'setVuexLocDetailAddr': 'setMyInfoLocationDetailAddr'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    },
    setDetailAddr (e) {
      let value = e.target.value
      this.setVuexLocDetailAddr(value)
      this.address.detail_addr = value
    },
    execDaumPostcode () {
      let vm = this

      new this.$daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var fullAddr = '' // 최종 주소 변수
          var extraAddr = '' // 조합형 주소 변수

          // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            fullAddr = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            fullAddr = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다.
            if (data.bname !== '') {
              extraAddr += data.bname
            }
            // 건물명이 있을 경우 추가한다.
            if (data.buildingName !== '') {
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName)
            }
            // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
            fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '')
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          let zonecode = data.zonecode

          vm.setVuexLoc({postcode: zonecode, addr: fullAddr, detail_addr: ''})
          vm.address.postcode = zonecode
          vm.address.addr = fullAddr
          vm.$el.querySelector('#postcode').value = data.zonecode // 5자리 새우편번호 사용
          vm.$el.querySelector('#address').value = fullAddr

          // 커서를 상세주소 필드로 이동한다.
          vm.$el.querySelector('#detail-address').focus()
        }
      }).open()
    }
  },
  computed: {
    locDetailAddr () {
      return this.address.detail_addr
    }
  }
}
</script>

<style lang="scss">
.addr-title {
  display: block;
}
.addr-box {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  > * {
    float: left;
    margin-bottom: 7px;
  }
  #postcode {
    width: 50%;
  }
  .search-addr-btn {
    width: 40%;
    font-size: 1.2rem;
    height: 25px;
    margin-left: 5%;
    line-height: 1
  }
}
</style>