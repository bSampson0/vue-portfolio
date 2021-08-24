import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth } from "../plugins/firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, val) {
      state.user = val;
    },
  },
  actions: {
    async login({ commit }, form) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(
          form.email,
          form.pw
        );
        commit("SET_USER", user);
        router.push("/add-project");
      } catch (err) {
        let error = err.message;
        commit("SET_ERRORS", error);
        console.log(err.message);
      }
    },
    async logout({ commit }) {
      await auth.signOut();
      commit("SET_USER", null);
      router.push("/login");
    },
  },
  modules: {},
});
