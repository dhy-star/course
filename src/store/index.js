import Vue from 'vue'
import Vuex from 'Vuex'
import getter from './getter'
import isfalse from './modules/isfalse'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    isfalse
  },
  getters: getter
})

export default store
