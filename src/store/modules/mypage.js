const state = {
  // my data
  // 비동기 통신으로 데이터를 받아오는 부분과
  // 수정하는 부분에서 사용되는 데이터
  // 닉네임, 주소정보, 교환방식, 연락처
  my: {
    // 나의 정보
    info: {
      my_picture: {
        file: null,
        data: ''
      },
      password: {
        value: '',
        validate: false
      },
      confirm_password: '',
      location: {
        postcode: '',
        addr: '',
        detail_addr: ''
      },
      msg: ''
    },
    // input 태그의 포커스 이벤트 처리
    focuses: {
      my_pictrue: false,
      password: false,
      confirm_password: false,
      location: false,
      msg: false
    },
    clicked_update_btn: false
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
  },
  getFocuses (state) {
    return state.my.focuses
  },
  getClickedUpdateBtn (state) {
    return state.my.clicked_update_btn
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
  INIT_MYPAGE_DATA (state) {
    // profile
    let info = state.my.info
    info.my_picture.file = null
    info.my_picture.data = ''
    info.password.value = ''
    info.password.validate = false
    info.confirm_password = ''
    info.location.postcode = ''
    info.location.addr = ''
    info.location.detail_addr = ''
    // 물건 등록
    // 물건 데이터
  },
  SET_MY_INFO (state, payload) {
    // payload를 객체로 받아서 한번에 세팅
    state.my.info = payload
  },
  SET_MY_INFO_PICTURE_FILE (state, payload) {
    state.my.info.my_picture.file = payload
  },
  SET_MY_INFO_PICTURE_DATA (state, payload) {
    state.my.info.my_picture.data = payload
  },
  SET_MY_INFO_PASSWORD (state, payload) {
    state.my.info.password.value = payload.value
    state.my.info.password.validate = payload.validate
  },
  SET_MY_INFO_CONFIRM_PASSWORD (state, payload) {
    state.my.info.confirm_password = payload
  },
  SET_MY_INFO_LOCATION (state, payload) {
    state.my.info.location.addr = payload.addr
    state.my.info.location.detail_addr = payload.detail_addr
    state.my.info.location.postcode = payload.postcode
  },
  SET_MY_INFO_LOCATION_DETAIL_ADDR (state, payload) {
    state.my.info.location.detail_addr = payload
  },
  SET_MY_INFO_MSG (state, payload) {
    state.my.info.msg = payload
  },
  SET_CLICKED_UPDATE_BTN (state, payload) {
    state.my.clicked_update_btn = payload
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
      console.log('password: ', state.my.focuses)
    } else if (payload.getAttribute('id') === 'edit-confirm-password') {
      toggleLoginInputFocus(state.my.focuses, 'confirm_password')
      console.log('password_confirm: ', state.my.focuses)
    } else {
      toggleLoginInputFocus(state.my.focuses, '')
    }
  }
}

const actions = {
  initMyPageData ({commit}) {
    commit('INIT_MYPAGE_DATA')
  },
  setMyInfo ({commit}, payload) {
    commit('SET_MY_INFO', payload)
  },
  setMyInfoMyPictureFile ({commit}, payload) {
    commit('SET_MY_INFO_PICTURE_FILE', payload)
  },
  setMyInfoMyPictureData ({commit}, payload) {
    commit('SET_MY_INFO_PICTURE_DATA', payload)
  },
  setMyInfoPassword ({commit}, payload) {
    console.log(payload)
    commit('SET_MY_INFO_PASSWORD', payload)
  },
  setMyInfoConfirmPassword ({commit}, payload) {
    commit('SET_MY_INFO_CONFIRM_PASSWORD', payload)
  },
  setMyInfoMsg ({commit}, payload) {
    commit('SET_MY_INFO_MSG', payload)
  },
  setMyInfoLocation ({commit}, payload) {
    // payload === {}
    commit('SET_MY_INFO_LOCATION', payload)
  },
  setMyInfoLocationDetailAddr ({commit}, payload) {
    commit('SET_MY_INFO_LOCATION_DETAIL_ADDR', payload)
  },
  setClickedUpdateBtn ({commit}, payload) {
    commit('SET_CLICKED_UPDATE_BTN', payload)
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
