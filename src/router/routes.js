import Msite from "../pages/Msite/Msite.vue"

import Order from "../pages/Order/Order.vue"

import Search from "../pages/Search/Search.vue"

import Profile from "../pages/Profile/Profile.vue"

import Login from "../pages/Login/login.vue"

export default [
  {
    path:"/msite",
    component:Msite,
    meta: {
      isShow: true
    }
  },
  {
    path:"/order",
    component:Profile,
    meta: {
      isShow: true
    }
  },
  {
    path:"/profile",
    component:Order,
    meta: {
      isShow: true
    }
  },
  {
    path:"/search",
    component:Search,
    meta: {
      isShow: true
    }
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/",
    redirect:"/msite"
  },
  {
    path:"*",
    redirect:"/msite"
  }

]
