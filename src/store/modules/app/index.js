// import * as types from './mutation-types'

const state = {
  count: 0
};

const actions = {
  increment(context) {
    context.commit('increment')
  },
  decrement(context) {
    context.commit('decrement')
  }
};

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
