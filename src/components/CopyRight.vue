<template>
  <div class="copy-right text-center">
    <span>备案号：浙ICP备15031191号</span>
    <span>浙公网安备：335214586005924524号</span>
  </div>
</template>

<script>
  export default {
    name: "copy-right"
  }
</script>

<style scoped lang="less">
  .copy-right {
    background: #404040;

    color: #fff;
    font-size: 16px;
    line-height: 50px;
    span {
      &:last-of-type {
        margin-left: 20px;
      }
    }
  }
</style>
