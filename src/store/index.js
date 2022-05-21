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
const mutations = {
    setUsername(state,name){
        state.username =name;
    }
};
const actions = {
    updateUsername({commit},name){
        commit('setUsername',name);
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
    
});
