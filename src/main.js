import vue from "vue"

import App from "./App.vue"

import router from "./router"

new vue({
  el:"#app",
  components:{App},
  template:"<App/>",
  router
})
