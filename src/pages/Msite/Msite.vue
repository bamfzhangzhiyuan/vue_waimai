<template>
    <section class="msite">
      <!--首页头部-->
      <Header class="msite_header" :title="address.name || '正在定位'" >
            <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>

        <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
            </span>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categoryArr.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in categoryArr">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in item">
                <div class="food_container">
                  <img :src="base+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" v-else>
      </nav>
      <!--首页附近商家-->
      <ShopList :base="base"></ShopList>
    </section>
</template>



<script>
  import ShopList from "../../components/ShopList/Shoplist.vue"
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import {mapState} from "vuex"
  export default{
    components:{
      ShopList
    },
    data(){
      return{
        base:"https://fuss10.elemecdn.com"
      }
    },
    computed:{
      ...mapState(["address","categortList"]),
      categoryArr (){
        const outArr = []
        let innerArr = []

        this.categortList.map((item,index)=>{
          if(innerArr.length === 0){
            outArr.push(innerArr)
          }
          innerArr.push(item)
          if(innerArr.length === 8){
            innerArr = []
          }

        })

        return outArr
      }
    },

    mounted(){
      this.$store.dispatch("getAddress")
      this.$store.dispatch("getCategorys")
    },
    watch:{
      categoryArr(){
        this.$nextTick(() => {
          // 创建swiper对象的时机? 必须在列表页面显示之后
          new Swiper('.swiper-container', {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true, // 循环模式
          })
        })
      }
    }

  }
</script>


<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
