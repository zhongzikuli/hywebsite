<template>
  <div class="main">
    <div class="content">
      <div class="head">
        <div class="head-text">
          <h3>浩韵控股集团业务</h3>
          <h1>掌上行车APP全新上线</h1>
          <h4>Handcart Driving APP New Online </h4>
          <p><span>更便捷</span><span>更快捷</span><span>更好用</span><span>更全面</span></p>
        </div>
        <div class="head-scope flex">
          <div class="left">
            <img src="../images/icon-app.png" alt="">
          </div>
          <div class="right flex">
            <div class="ios">
              <img src="../images/icon-ios.png" alt=""> iphone下载
            </div>
            <div class="andriod">
              <img src="../images/icon-android.png" alt="">android下载
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="top text-center">
          <h3>+<br>掌上行车介绍</h3>
          <h4>Handcart driving introduction</h4>
        </div>
        <div class="bottom flex">
          <div class="left">
            <img src="../images/icon-labcart.png" alt="">
          </div>
          <div class="right">
            <h5>掌上行车移动业务端</h5>
            <p>掌上行车是由浩韵控股集团开发的一款以车贷为主的辅助工具APP。<br>
              可以在APP内部查兰保险产品、观看行业相关视频、浏览热门咨询、查看<br>
              APP最新政策公告通知； 汽车金融主要功能;手机快速提交征信；处理订单<br>
              的所有信息；实时查看您的战报；查询征信大数据；获取二手车质保信息；<br>
              使用车贷计算器等</p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="top text-center">
          <h3>+<br>掌上行车特色</h3>
          <h4>Handcart driving features</h4>
        </div>
        <div class="down flex">
          <div class="item flex" v-for="(item,index) in labcart" :key="index">
            <img :src="item.src" alt="">
            <h5>{{item.title}}</h5>
            <p class="text-center">{{item.text}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "lab-car",
    data() {
      return {
        labcart: [{
          title: "保险",
          src: require('../images/icon-insurance.png'),
          text: "新增保险功能，买车一站式服务，各种保险保障您的车辆权益。"
        }, {
          title: "初审单录入",
          src: require('../images/icon-creditList.png'),
          text: "客户相关信息录入及提车资料、抵押资料上传。"
        }, {
          title: "征信",
          src: require('../images/icon-credit.png'),
          text: "互联网征信查询、身份证信息验证快速查询、多平台借贷查询。"
        }, {
          title: "上传面签",
          src: require('../images/icon-file.png'),
          text: "浩韵车贷管理系统最新添加面签上传功能，方便业务员上传面签资料，简化流程。"
        }, {
          title: "大数据核验",
          src: require('../images/icon-data.png'),
          text: "通过互联网征信查询，得出用户手机是否实名、手机在网时长、是否黑名单、多平台借贷等信息，过滤不良用户。"
        }, {
          title: "审核",
          src: require('../images/icon-user.png'),
          text: "对客户相关信息、提车资料、抵押资料的多次审核，保障安全性。"
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      background: #fff;
      padding-bottom: 50px;
      .head {
        background: url("../images/bg-labCar.jpg") no-repeat 100%;
        .head-text {
          h1 {
            margin: 20px 0 10px;
          }
          p {
            margin-top: 15px;
            span {
              border-right: 2px solid #fff;
              padding: 0 10px;
              &:first-of-type {
                padding-left: 0;
              }
              &:last-of-type {
                border: 0;
              }
            }
          }
        }
        .head-scope {
          margin: 100px auto;
          width: 70%;
          min-width: 1096px;
          .left {
            width: 200px;
            height: 200px;
            img {
              width: 100%;
              height: 100%;
              border: 2px solid #fff;
            }
          }
          .right {
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
            div {
              border: 2px solid #fff;
              border-radius: 10px;
              padding: 5px 10px;
              color: #fff;
              img {
                vertical-align: middle;
                height: 38px;
                width: 35px;
                margin-right: 5px;
              }
            }
          }
        }
      }
      .body {
        margin: 70px auto 0;
        .down {
          justify-content: space-between;
          flex-wrap: wrap;
          .item {
            width: 30%;
            flex-direction: column;
            align-items: center;
            img {
              width: 200px;
              height: 200px;
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
