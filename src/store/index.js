import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    username: 'kerem',
    message:'Merhaba'

};
const getters = {};
const mutations = {};
const actions = {};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
    
});
