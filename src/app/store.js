import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const message = {
  state: {
    messages: []
  },
  mutations: {
    add(state, message) {
      state.messages.push(message);
    },
    clear(state) {
      state.messages = [];
    }
  }
};

const store = new Vuex.Store(message);

export default store;
