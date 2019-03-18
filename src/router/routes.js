import Msite from "../pages/Msite/Msite.vue"

import Order from "../pages/Order/Order.vue"

import Search from "../pages/Search/Search.vue"

import Profile from "../pages/Profile/Profile.vue"

export default [
  {
    path:"/msite",
    component:Msite
  },
  {
    path:"/order",
    component:Order
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/search",
    component:Search
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