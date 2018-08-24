import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import actions from './action';
// import {
//   objInit
// } from '../assets/js/objInit';
//
// const productInit = objInit.productInit();

Vue.use(Vuex);

const state = {
  showMaskFlag: false,
  token: '',
  userName:'',
  isLoading: false,
  // codeServer:'http://10.165.105.199:8080'
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
