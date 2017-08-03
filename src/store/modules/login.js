const state = {
  is_btn_clicked: false,
  login_input_focus: {
    email: false,
    pwd: false
  }
}

const getters = {
  getBtnClicked (state) {
    return state.is_btn_clicked
  },
  getLoginInputFocus (state) {
    return state.login_input_focus
  }
}

// login_input_focus의 객체의 내용들을 클릭하거나 focus를 받는 것만
// true로 변경하고 나머지는 false로 변경하는 함수

function toggleLoginInputFocus (obj, key) {
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
  // 로그인 창 활성화 유무
  changeBtnClicked (state) {
    state.is_btn_clicked = !state.is_btn_clicked
  },
  // focus, click 이벤트가 적용되었을 때 validation 감지가 일어나는 부분.
  changeLoginFocus (state, payload) {
    let login = state.login_input_focus
    if (state.is_btn_clicked) {
      if (payload.el.getAttribute('id') === 'pwd') {
        toggleLoginInputFocus(login, 'pwd')
      } else if (payload.el.getAttribute('id') === 'email') {
        toggleLoginInputFocus(login, 'email')
      } else {
        toggleLoginInputFocus(login, '')
      }

      if (payload.el.getAttribute('class') === 'login') {
        state.is_btn_clicked = false
      }
    } else {
      toggleLoginInputFocus(login, '')
    }
  }
}

const actions = {
  isChangedLoginModalState ({commit}) {
    commit('changeBtnClicked')
  },
  isChangedInputTextFocus ({commit}, el) {
    commit('changeLoginFocus', el)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
