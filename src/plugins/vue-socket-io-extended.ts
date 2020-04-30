import Vue from "vue";
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import { Store, StoreOptions } from "vuex";
import { State } from "../store/index";

export const connect = (store: Store<State>) => {

    const socket = io(process.env.VUE_APP_SOCKET_SERVER || 'http://localhost:3000');
    Vue.use(VueSocketIOExt, socket, { store });
}
