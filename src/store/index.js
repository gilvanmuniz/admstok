import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
    increments(state){
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
