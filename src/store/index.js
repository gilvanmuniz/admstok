import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0,
    products:[]
  },
  mutations: {
    increments(state){
      state.count++
    },
    addProducts(state, payload){
      state.products.push(payload)
    }
  },
  actions: {
     addProdutos({ commit } ,payload){
          commit('addProducts', payload)
     }
  },
  modules: {
  }
})
