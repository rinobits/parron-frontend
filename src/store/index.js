import Vue       from 'vue';
import Vuex      from 'vuex';
Vue.use(Vuex)
export const store =  new Vuex.Store({
  state: {
    auth:      false,
    adminAuth: false,
    token:     ''
  },
  mutations: {
    cambiar:      (state) => state.auth      = !state.auth, // esta función será llamada desde actions
    cambiarAdmin: (state) => state.adminAuth = !state.adminAuth,
  },
  actions: {

    },
  modules: {
  }
})
