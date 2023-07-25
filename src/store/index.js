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
  actions: {
    verifyCode({commit}, status) {
      commit("verifyCode",status);
    },
  },
  mutations: {
    verifyCode(state, status) {
      state.allowAccess = status;
    }
  },
  getters: {
  },
  modules: {
  }
});

export default store;
