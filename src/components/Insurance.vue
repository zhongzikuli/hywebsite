<template>
  <div class="main">
    <div class="content">
      <h5>浩韵控股集团业务</h5>
      <h1>宝诚保险，多重保障更无忧</h1>
      <a class="btn text-center" href="http://www.bcisc.cn" target="_blank"><img src="../images/icon-net.png"><span>宝诚官网</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "insurance",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      background: url("../images/bg-insurance.jpg") no-repeat;
      background-size: 100% 100%;
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale');
      width: 100%;
      min-width: 1096px;
      min-height: 600px;
      height: calc(~"100% - 90px");
      position: absolute;
      top: 100px;

      color: #fff;
      h5 {
        margin-top: 60px;
        font-size: 28px;
        font-weight: 400;
      }
      h1 {
        font-size: 50px;
        font-weight: 400;
        margin-top: 50px;
      }
      .btn {
        text-decoration: none;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -80px;
        font-size: 20px;
        width: 160px;
        color: #fff;
        line-height: 44px;
        height: 44px;
        border-radius: 5px;
        border: 1px solid #239fe8;
        outline: none;
        background: #239fe8;
        img {
          margin-top: 4px;
          margin-right: 10px;
        }
        span {
          vertical-align: top;
        }
      }
    }
  }
</style>
