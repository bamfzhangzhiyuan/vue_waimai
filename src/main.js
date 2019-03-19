import vue from "vue"
import Stars from "./components/stars"
import App from "./App.vue"

import router from "./router"
import Header from "./components/Header/Header.vue"
import store from "./store"
vue.component("Header",Header)
vue.component("Stars",Stars)
new vue({
  el:"#app",
  components:{App},
  template:"<App/>",
  router,
  store
})
