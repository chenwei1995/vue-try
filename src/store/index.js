import Vue from 'vue'
import Vuex from 'vuex'

import SelectStore from './SelectStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SelectStore
  }
})
