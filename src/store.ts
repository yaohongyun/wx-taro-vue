import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
  number: 1
}

const mutations = {
  ADD_NUMBER(state, payload) {
    // state.numbers.push(payload)
    state.number+=payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getNumber(state) {
    return state.number
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
