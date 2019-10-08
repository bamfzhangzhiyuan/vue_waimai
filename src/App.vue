<template>
 <div id="app">
   <router-view/>

   <FooterGuide v-show="$route.meta.isShow"/>
 </div>

</template>


<script>
import FooterGuide from "./components/FooterGuide/FooterGuider.vue"
import router from "./router"
import {mapState} from "vuex"
  export default {
  mounted(){



  },
  components:{
    FooterGuide
  },
  computed:{
    ...mapState(["address","categortList","shopList"])
  }
}

</script>


<style scoped>


</style>
