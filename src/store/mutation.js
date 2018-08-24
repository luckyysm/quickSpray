// import { EpolicyInit } from '@/assets/js/epolicyInit';

//显示弹框
const SHOW_MASK_LAYER = 'SHOW_MASK_LAYER';
const HIDE_MASK_LAYER = 'HIDE_MASK_LAYER';
//初始化信息
const AUTH_INIT = 'AUTH_INIT';
//退出登录
const AUTH_SIGN_OUT = "AUTH_SIGN_OUT";




export default {

  [SHOW_MASK_LAYER](state, payload) {
    state.showMaskFlag = true;
  },
  [HIDE_MASK_LAYER](state, payload) {
    state.showMaskFlag = false;
  },
  [AUTH_INIT](state, payload) {
    state.userName = payload.userName;
    state.token = payload.token;
  },
  [AUTH_SIGN_OUT](state, payload) {
    state.userName = "";
    state.token = "";
    state.shoppingInfo = [];

  }
};
