import {reqAddress,reqCategorys,reqShops} from "../api"

export default {

  async getAddress ({commit,state}) {
    const result = await reqAddress(state.longitude,state.latitude)

    if(result.code === 0) {
      const add = result.data
      commit("reqAddress",add)
    }else{
      alert("err")
    }

  },
  async getCategorys ({commit,state}) {
    const result = await reqCategorys()

    if(result.code === 0) {
      const res = result.data
      commit("reqCategorys",res)
    }else{
      alert("err")
    }

  },
  async getShops ({commit,state}) {
    const result = await reqShops({longitude:state.longitude,latitude:state.latitude})

    if(result.code === 0) {
      const res = result.data
      commit("reqShops",res)
    }else{
      alert("err")
    }

  },

}
