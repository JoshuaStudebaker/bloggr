import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "@bcwdev/auth0-vue";

// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
// @ts-ignore
import BlogWindow from "../pages/BlogWindow.vue";
// @ts-ignore
// import UserBlogWindow from "../pages/UserBlogWindow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },

  {
    path: "/blogs/:blogId",
    name: "blog-window",
    component: BlogWindow,
  },

  // {
  //   path: "profile/:userBlogId",
  //   name: "user-blog-window",
  //   component: UserBlogWindow,
  //   beforeEnter: authGuard,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
