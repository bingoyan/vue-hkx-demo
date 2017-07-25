/**
 * store.js核心文件，这里就是vuex基本的写法了
 * 先引用vue和vuex 然后use(Vuex),把定义好的modules
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: '',
    user_info: {
      age: 19,
      sex: '女'
    }
  },
  actions,
  // 这里等同于mutations: mutations
  mutations
})
