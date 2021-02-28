import Vue from "vue";
import Vuex from "vuex";
import mData from "../../public/MOCK_DATA.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialog: false,
    user: [],
    userData: [...mData.reverse()],
  },
  getters: {
    getDialog(state) {
      return state.dialog;
    },
    getUser(state) {
      return state.user;
    },
    getUserList(state) {
      return state.userData;
    },
  },
  mutations: {
    setDialog(state, value) {
      state.dialog = value;
    },
    setUser(state, value) {
      state.user.unshift({
        ...value,
        id: state.userData.length + 1,
      });
      state.userData.unshift(state.user);
    },
  },
  actions: {},
});
