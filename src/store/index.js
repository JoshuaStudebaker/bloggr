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
    activeUserBlog: {},
    activeComments: [],
    liveComment: {},
    allComments: [],
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

    deleteComment(state, id) {
      state.activeComments = state.activeComments.filter((c) => c.id != id);
    },

    setLiveComment(state, comment) {
      state.liveComment = comment;
    },

    setComments(state, comments) {
      state.activeComments = comments;
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        console.log("profile-store", res);
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

    async getCommentsByBlog({ commit }, blogId) {
      console.log("store-comments", blogId);
      let res = await api.get("blogs/" + blogId + "/comments");
      console.log("store-comments-activeComments", res.data);
      commit("setComments", res.data);
    },

    async createComment({ commit, state }, newComment) {
      console.log("new-comment", newComment);
      newComment.blog = state.activeBlog.id;
      let res = await api.post("/comments", newComment);
      console.log("new-blog-res", res);
      commit("setComments", [...state.activeComments, res.data]);
    },

    async createBlog({ commit, dispatch, state }, newBlog) {
      console.log("new-blog", newBlog);
      let res = await api.post("blogs", newBlog);
      console.log("new-blog-res", res);
      commit("setAllBlogs", [...state.blogs, res.data]);
      commit("setUserBlogs", [...state.userBlogs, res.data]);
      dispatch("getUserBlogs");
    },

    async nullifyLiveComment({ commit }) {
      try {
        commit("setLiveComment", {});
      } catch (error) {
        console.error("couldn't delete edit form");
      }
    },

    async getActiveBlog({ commit }, blogId) {
      let res = await api.get("blogs/" + blogId);
      let activeBlog = res.data;
      commit("setActiveBlog", activeBlog);
    },

    async editBlog({ dispatch, state }, blogEdit) {
      try {
        let id = state.activeUserBlog.id;
        let res = await api.put("blogs/" + id, blogEdit);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
      dispatch("getUserBlogs");
      dispatch("unloadEditForm");
    },

    async deleteUserBlog({ commit, dispatch }, id) {
      try {
        console.log("delete store", id);
        await api.delete("blogs/" + id);
        commit("deleteUserBlog", id);
      } catch (error) {
        console.error("Failed to delete user blog");
      }
      dispatch("getUserBlogs");
    },

    async deleteComment({ commit, state, dispatch }, id) {
      try {
        console.log("delete comment", id);
        await api.get("blogs/" + state.activeBlog.id + "/comments", id);
        await api.delete("comments/" + id);
        commit("deleteComment", id);
        dispatch("nullifyLiveComment");
      } catch (error) {
        console.error("Failed to delete comment");
      }
    },

    async editComment({ commit, state, dispatch }, editedData) {
      try {
        console.log("edit comment", editedData);
        let res = await api.put("comments/" + state.liveComment.id, editedData);
        console.log("edit-store-comment", res);
        dispatch("nullifyLiveComment");
      } catch (error) {
        console.error("Failed to delete comment");
      }
      dispatch("getCommentsByBlog", state.activeBlog.id);
    },

    async loadEditForm({ commit }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId);
        console.log("edit-form", res);
        let activeUserBlog = res.data;
        commit("setActiveUserBlog", activeUserBlog);
      } catch (error) {
        console.error("couldn't pull up edit form");
      }
    },

    async loadComment({ commit, state, dispatch }, id) {
      try {
        let liveCommentArray = state.activeComments.filter((c) => c.id == id);
        console.log("comment-load", liveCommentArray);
        let liveComment = liveCommentArray[0];
        commit("setLiveComment", liveComment);
        dispatch("getProfile");
      } catch (error) {
        console.error("couldn't pull up commit form");
      }
    },
    async unloadEditForm({ commit }) {
      try {
        commit("setActiveUserBlog", {});
      } catch (error) {
        console.error("couldn't delete edit form");
      }
    },
  },
});
