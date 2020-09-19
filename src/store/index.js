import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    userBlogs: [],
    activeUserBlog: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },

    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog;
    },

    setActiveUserBlog(state, activeUserBlog) {
      state.activeUserBlog = activeUserBlog;
    },

    setUserBlogs(state, userBlogs) {
      state.userBlogs = userBlogs;
    },

    deleteUserBlog(state, id) {
      state.blogs = state.blogs.filter((b) => b.id != id);
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getAllBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        commit("setAllBlogs", res.data);
      } catch (error) {
        console.error("Unable to get blogs");
      }
    },

    async getUserBlogs({ commit }) {
      try {
        let res = await api.get("profile/blogs");
        console.log("user-blogs", res);
        commit("setUserBlogs", res.data);
      } catch (error) {
        console.error("Unable to get user blogs");
      }
    },

    async createBlog({ commit, state }, newBlog) {
      console.log("new-blog", newBlog);
      let res = await api.post("blogs", newBlog);
      console.log("new-blog-res", res);
      commit("setAllBlogs", [...state.blogs, res.data]);
    },

    async getActiveBlog({ commit }, blogId) {
      let res = await api.get("blogs/" + blogId);
      let activeBlog = res.data;
      commit("setActiveBlog", activeBlog);
    },

    async deleteUserBlog({ commit }, id) {
      try {
        console.log("delete store", id);
        await api.delete("blogs/" + id);
        commit("deleteUserBlog", id);
      } catch (error) {
        console.error("Failed to delete user blog");
      }
    },
  },
});
