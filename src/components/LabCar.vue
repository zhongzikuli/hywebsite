<template>
  <div class="main">
    <template v-if="page">
      <div class="content content1">
        <div class="lab-car" style=" text-align: right;">
          <h2>掌上行车APP全新上线</h2>
          <h3>Handcart driving APP new online </h3>
          <p><span>更便捷</span><span>更快捷</span><span>更好用</span><span>更全面</span></p>
          <div class="scode flex">
            <div class="left">
              <img src="../images/icon-app.png" alt="">
            </div>
            <div class="right flex">
              <div class="ios">
                <img src="../images/icon-ios.png" alt="">
                <span> iphone下载</span>
              </div>
              <div class="andriod">
                <img src="../images/icon-android.png" alt="">
                <span> android下载</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="content content2">
        <div class="lab-car flex">
          <div class="item flex" v-for="(item,index) in carItem" :key="index">
            <div class="left">
              <img :src="item.src" alt="">
            </div>
            <div class="right">
              <h3>{{item.title}}<span>{{item.label}}</span></h3>
              <p :title="item.text">{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "lab-car",
    data() {
      return {
        page: true,
        carItem: [{
          title: "保险",
          label: "INSURANCE",
          src: require('../images/icon-insurance.png'),
          text: "新增保险功能，买车一站式服务，各种保险保障您的车辆权益。"
        }, {
          title: "初审单录入",
          label: "FIREST TRIAL ORDER",
          src: require('../images/icon-creditList.png'),
          text: "客户相关信息录入及提车资料、抵押资料上传。"
        }, {
          title: "征信",
          label: "CREDIT REPORTING",
          src: require('../images/icon-credit.png'),
          text: "互联网征信查询、身份证信息验证快速查询、多平台借贷查询。"
        }, {
          title: "上传面签",
          label: "POST FACE",
          src: require('../images/icon-file.png'),
          text: "浩韵车贷管理系统最新添加面签上传功能，方便业务员上传面签资料，简化流程。"
        }, {
          title: "大数据核验",
          label: "BIG DATA CHECK",
          src: require('../images/icon-data.png'),
          text: "通过互联网征信查询，得出用户手机是否实名、手机在网时长、是否黑名单、多平台借贷等信息，过滤不良用户。"
        }, {
          title: "审核",
          label: "AUDIT",
          src: require('../images/icon-user.png'),
          text: "对客户相关信息、提车资料、抵押资料的多次审核，保障安全性。"
        }]
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
        if (this.b + this.c + 50 >= this.a) {
          this.page = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content1 {
      background: url("../images/bg-labCar.png") no-repeat;
      .lab-car {
        h2 {
          font-size: 34px;
          margin-top: 40px;
          font-weight: 400;
        }
        h3 {
          font-weight: 400;
          margin: 10px 0 15px;
        }
        p {
          font-size: 24px;
          span {
            padding: 0 15px;
            border-left: 2px solid #fff;
            line-height: 30px;
            &:last-of-type {
              padding-right: 0;
            }
            &:first-of-type {
              border-left: none;
            }
          }
        }
        .scode {
          margin-top: 80px;
          width: 350px;
          height: 158px;
          float: right;
          justify-content: space-between;
          .left {
            img {
              width: 150px;
              height: 150px;
              border: 4px solid #239fe8;
            }
          }
          .right {
            flex-direction: column;
            justify-content: space-between;
            div {
              border: 2px solid #239fe8;
              border-radius: 10px;
              padding: 5px 10px;
              color: #239fe8;
              img {
                width: 30px;
                height: 32px;
                vertical-align: middle;
              }
              span {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
    .content2 {
      background: url("../images/bg-labCar1.png") no-repeat;
      .lab-car {
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          width: 50%;
          justify-content: space-between;
          .left {
            width: 180px;
            height: 180px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .right {
            text-align: left;
            padding-top: 50px;
            flex: 1;
            h3 {
              font-weight: 400;
              font-size: 22px;
              span {
                margin-left: 10px;
                font-size: 14px;
                color: #757575;
              }
            }
            p {
              font-size: 14px;
              margin-top: 10px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
    .content {
      background-size: 100% 100%;
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale');
      width: 100%;
      height: calc(~"100% - 90px");
      position: absolute;
      top: 100px;
      text-align: center;
      color: #fff;
      .lab-car {
        width: 75%;
        height: 100%;
        margin: 0 auto;
        padding: 50px 0 0;
      }
    }
  }
</style>
