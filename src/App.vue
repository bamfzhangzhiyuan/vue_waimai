<template>
 <div id="app">
   <router-view/>

   <FooterGuide/>
 </div>

</template>


<script>
import FooterGuide from "./components/FooterGuide/FooterGuider.vue"
import router from "./router"
  export default {
  mounted(){
    console.log(router)
  },
  components:{
    FooterGuide
  }

}

</script>


<style scoped>


</style>
