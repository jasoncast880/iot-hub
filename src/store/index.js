//index.js VueX STORE
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      allowAccess:false,
    }
  },
  state: {
  },
  getters: {
  },
  mutations: {
    verifyCode(state, status) {
      state.allowAccess = status;
    }
  },
  actions: {
    verifyCode({commit}, status) {
      commit("verifyCode",status);
    },
  },
  getters: {
  },
  modules: {
  }
});

export default store;
