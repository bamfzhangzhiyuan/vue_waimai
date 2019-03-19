import state from "./state"

import actions from "./actions"

import mutations from "./mutations"

import getters from "./getters"

import vue from "vue"

import vuex from "vuex"

vue.use(vuex)
export default new vuex.Store({
  state,
  actions,
  mutations,
  getters
})
