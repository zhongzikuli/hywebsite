<template>
  <div class="main">
    <template v-if="page">
      <div class="content content1">
        <h5>浩韵控股集团业务</h5>
        <h1>视频面签，远程协助签单</h1>
      </div>
    </template>
    <template v-else>
      <div class="content content2">
        <div class="video">
          <h3>视频面签</h3>
          <p>客户证件、资产、流水、家访照、合同等相关资料，银行对客户的实时视频面签</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "video-face",
    data() {
      return {
        page: true
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scroll);
    },
    methods: {
      scroll() {
        this.a = document.body.scrollHeight || document.documentElement.scrollHeight;
        this.b = document.body.scrollTop || document.documentElement.scrollTop;
        this.c = document.documentElement.clientHeight;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        if (this.b + this.c + 10 >= this.a) {
          this.page = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content1 {
      background: url("../images/bg-videoFace.jpg") no-repeat;
    }
    .content2 {
      background: url("../images/bg-videoFace1.jpg") no-repeat;
    }
    .content {
      background-size: 100% 100%;
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale');
      width: 100%;
      height: calc(~"100% - 90px");
      position: absolute;
      top: 100px;
      min-width: 1096px;
      min-height: 600px;
      text-align: center;
      color: #fff;
      .video {
        width: 450px;
        margin-top: 180px;
        text-align: left;
        margin-left: 130px;
        h3 {
          font-size: 30px;
        }
        p{
          font-size: 16px;
          line-height: 30px;
          margin-top: 20px;
        }
      }
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
    }
  }


</style>
