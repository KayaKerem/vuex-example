import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    username: 'kerem',
    message:'Merhaba'

};
const getters = {
    welcomeMessage(state) {
        return `${state.message} from ${state.username}`
    }
};
const mutations = {};
const actions = {};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
    
});
