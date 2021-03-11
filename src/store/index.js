import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      products: true,
      orders: true
    }
  },
  mutations: {
    loadingState(state, payload) {
      // eslint-disable-next-line no-prototype-builtins
      state.loading.products = payload.hasOwnProperty('products') ? payload.products : true;
      // eslint-disable-next-line no-prototype-builtins
      state.loading.orders = payload.hasOwnProperty('orders') ? payload.orders : true;
    },
  },
  modules: {
    auth
  }
})
