import Vue from "vue"
import Router from "vue-router"
import Home from "@/pages/home/Home"
import List from "@/pages/list/List"
import City from "@/pages/city/City"
import Detail from "@/pages/detail/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, {
      path: "/list",
      name: "List",
      component: List
    }, {
      path: "/city",
      name: "City",
      component: City
    }, {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 路由就是根据网址的不同，返回不同的内容给用户。