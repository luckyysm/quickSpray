<template>
  <div class="no-results">
    <i class="icon icon-no-results"></i>
    <p class="tips">{{tip || '没有相关内容' }}</p>
  </div>
</template>

<style scoped lang="scss">
.no-results {
  padding: 60px 0;
  text-align: center;
  .icon-no-results{
    display: inline-block;
    width: 200px;
    height: 158px;
    background: url(../assets/images/icon/icon_no_data.png) no-repeat;
    background-size: cover;
  }
  .tips {
    font-size: 14px;
    color: #949494;
    margin-top: 40px;
  }
}
</style>

<script>
export default {
  props: ["tip"]
};
</script>
