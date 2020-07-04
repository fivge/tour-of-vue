import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const counter = {
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  }
};

const store = new Vuex.Store({ ...counter });

export default store;
