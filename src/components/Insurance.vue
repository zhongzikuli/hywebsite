<template>
  <div class="main">
    <div class="content">
      <div class="head">
        <div class="head-text text-center">
          <h3>浩韵控股集团业务</h3>
          <h1>宝诚保险，多重保障更无忧</h1>
          <h4>Bao Cheng Insurance,Multiple Security and Be Light-Hearted</h4>
          <a class="btn" href="http://www.bcisc.cn" target="_blank"><img src="../images/icon-net.png"><span>宝诚官网</span></a>
        </div>
      </div>
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
      background: #fff;
      .head {
        background: url("../images/bg-insurance.jpg") no-repeat 100%;
        .head-text {
          h1 {
            font-size: 50px;
            font-weight: 400;
            margin-top: 50px;
          }
          .btn {
            display: block;
            text-decoration: none;
            font-size: 20px;
            padding: 2px 0 5px;
            color: #fff;
            width: 150px;
            margin: 200px auto 0;
            border-radius: 5px;
            border: 1px solid #239fe8;
            outline: none;
            background: #239fe8;
            img {
              vertical-align: middle;
              margin-right: 8px;
            }
            span {
              line-height: 38px;
            }
          }
        }
      }
    }
  }
</style>
