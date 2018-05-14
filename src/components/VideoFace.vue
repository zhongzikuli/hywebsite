<template>
  <div class="main">
    <div class="content">
      <div class="head">
        <div class="head-text text-center">
          <h3>浩韵控股集团业务</h3>
          <h1>视频面签，远程协助签单</h1>
          <h4>Video Face Signature,Remote Assistance Aignature</h4>
        </div>
      </div>
      <div class="contact">
        <div class="top text-center">
          <h3>+<br>视频面签业务介绍</h3>
          <h4>Video face signature introduction</h4>
        </div>
        <div class="bottom flex">
          <div class="left">
            <img src="../images/icon-videoface.png" alt="">
          </div>
          <div class="right">
            <h5>视频面签业务</h5>
            <p>客户证件、资产、流水、家访照、合同等相关资料，银行对客户的实时视频面签。</p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="top text-center">
          <h3>+<br>视频面签业务特色</h3>
          <h4>Video face signature features </h4>
        </div>
        <div class="down flex">
          <div class="item flex" v-for="(item,index) in videoface" :key="index">
            <img :src="item.src" alt="">
            <h5>{{item.label}}</h5>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "video-face",
    data() {
      return {
        videoface: [{
          label: "远程操作",
          src: require('../images/icon-deal.png'),
          text: "通过现场实时视频远程审核客户资料"
        }, {
          label: "云端备份",
          src: require('../images/icon-back.png'),
          text: "自动备份视频资料，为评估提供依据"
        }, {
          label: "实时评估",
          src: require('../images/icon- assess.png'),
          text: "通过现场实时视频精准评估客户贷款风险"
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      padding-bottom: 50px;
      background: #fff;
      .head {
        background: url("../images/bg-videoFace.jpg") no-repeat 100%;
        .head-text{
          h1 {
            margin: 20px 0 10px;
          }
        }
      }
      .contact {
        .bottom {
          .left {
            img {
              width: 427px;
              height: 300px;
            }
          }
        }
      }
      .body {
        .down {
          justify-content: space-between;
          margin-top: 50px;
          .item {
            flex-direction: column;
            padding: 50px 20px;
            box-shadow: 0 0 4px 4px #e3e3e3;
            align-items: center;
            img {
              width: 100px;
              height: 100px;
            }
            h5 {
              color: #404040;
              font-size: 22px;
              line-height: 28px;
              margin: 15px 0;
            }
            p {
              color: #757575;
              font-size: 14px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
</style>
