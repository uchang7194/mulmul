const state = {
  // my data
  // 비동기 통신으로 데이터를 받아오는 부분과
  // 수정하는 부분에서 사용되는 데이터
  // 닉네임, 주소정보, 교환방식, 연락처
  my: {
    // 나의 정보
    info: {
      my_picture: '',
      password: '',
      location: '',
      msg: ''
    },
    // input 태그의 포커스 이벤트 처리
    focuses: {
      my_pictrue: false,
      password: false,
      location: false,
      msg: false
    }
  },
  // my_products
  // 서버에서 받아온 물품들을 캐시해둠.
  my_products: [],
  // my_posted_pd
  // 게시할 물품의 정보를 캐시
  my_posted_pd: {}
}

const getters = {
  getMyInfo (state) {
    return state.my.info
  },
  getMyProducts (state) {
    return state.my_products
  },
  getMyPostedPd (state) {
    return state.my_posted_pd
  }
}

function toggleLoginInputFocus (obj, key) {
  // console.log('obj:', obj)
  // console.log('key:', key)
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key) {
        obj[prop] = true
      } else {
        obj[prop] = false
      }
    }
  }
}

const mutations = {
  SET_MY_INFO (state, payload) {
    // payload를 객체로 받아서 한번에 세팅
    state.my.info = payload
  },
  // 게시할 물품정보를 받아오는 함수.
  SET_POSTED_PD (state, payload) {
    // payload = integer
    let clonePd = state.my_products.slice(payload, 1)
    state.my_posted_pd = clonePd
  },
  CHANGE_MYPAGE_FOCUS (state, payload) {
    // console.log('membershipFocus: ', payload)
    // if (payload.target.getAttribute('class') === 'membership') {
    //   state.isMembershipActive = false
    // }
    // toggleLoginInputFocus()
    if (payload.getAttribute('id') === 'edit-password') {
      toggleLoginInputFocus(state.my.focuses, 'password')
    }
    console.log(payload)
  }
}

const actions = {
  setMyInfo ({commit}, payload) {
    commit('SET_MY_INFO', payload)
  },
  setPostedPd ({commit}, payload) {
    commit('SET_POSTED_PD', payload)
  },
  changeMyPageFocus ({commit}, payload) {
    commit('CHANGE_MYPAGE_FOCUS', payload)
  }
}

export const myPage = {
  state,
  getters,
  mutations,
  actions
}
