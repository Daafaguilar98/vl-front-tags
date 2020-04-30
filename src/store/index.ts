import Vue from "vue";
import Vuex from "vuex";
import Api from './api';

Vue.use(Vuex);

interface Tag {
  _id: string;
  title: string;
  color: string;
  __v: number;
}

export interface State {
  tags: Tag[];
  availableColors: string[];
}

const state: State = {
  tags: [],
  availableColors: [
    "#721cb5",
    "#4eb9bc",
    "#afc0dd",
    "#f0b345",
    "#4455d4",
    "#4895eb"
  ]
}

export default new Vuex.Store({
  state,
  mutations: {
    SET_TAGS(state, value) {
      state.tags = value;
    },
    SOCKET_ADD_TAG(state, value) {
      state.tags = [value, ...state.tags];
    },
    SOCKET_MODIFY_TAG(state, value) {
      state.tags = state.tags.map(tag => {
        if(value._id === tag._id) return value;
        return tag;
      })
    },
    SOCKET_REMOVE_TAG(state, value) {
      const index = state.tags.findIndex(tag => tag._id == value);
      state.tags.splice(index, 1);
    }
  },
  actions: {
    async GET_TAGS({ commit }) {
      const { data }: any = await Api.getTags();
      commit("SET_TAGS", data.data);
    },
    async CREATE_TAG(context, data) {
      Api.createTag(data);
    },
    async UPDATE_TAG(context, { id, title }) {
      Api.updateTag({ id, title });
    },
    async DELETE_TAG(context, id) {
      Api.deleteTag(id);
    }
  }
});
