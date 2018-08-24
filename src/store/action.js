
export default {
  // 获取购物车商品

  showMaskLayer({commit, state}, res) {
    commit('SHOW_MASK_LAYER', {
      res
    });

  },
  hideMaskLayer({commit, state}, res) {
    commit('HIDE_MASK_LAYER', {
      res
    });
  },
  updateToken({commit, state}, res) {
    commit('UPDATE_TOKEN', {
      res
    });
  },
};
