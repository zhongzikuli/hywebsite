<template>
  <div class="foot">
    <div class="content">
      <div class="top">
        <img src="../images/icon-tel.png" alt="">
        <span>0571-89906088</span>
      </div>
      <div class="down flex">
        <div class="left flex">
          <div class="item" v-for="(item,index) in aboutItem" :key="index">
            <h5>{{item.title}}</h5>
            <ul>
              <li v-for="(it,ind) in item.itemArr" :key="ind">{{it}}</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <h5>浩韵控股集团官方微信</h5>
          <img src="../images/icon-scode.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foot",
    data() {
      return {
        aboutItem: [{
          title: "关于浩韵",
          itemArr: ["关于浩韵", "企业文化", "人力资源", "联系我们"]
        }, {
          title: "合作支持",
          itemArr: ["浩琦网络", "宝诚保险"]
        }, {
          title: "集团企业",
          itemArr: ["宝诚保险", "汽车金融", "掌上行车", "视频面签"]
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .foot {
    background: #eee;
    .content {
      width: 1096px;
      margin: 0 auto;
      .top {
        padding: 35px 0;
        text-align: center;
        border-bottom: 1px solid #ccc;
        img {
          vertical-align: text-bottom;
        }
        span {
          font-size: 40px;
          margin-left: 40px;
          line-height: 53px;
        }
      }
      .down {
        justify-content: space-between;
        padding: 30px 0 25px;
        h5 {
          font-size: 18px;
          margin-bottom: 15px;
        }
        .left {
          flex: 5;
          .item {
            flex: 1;
            justify-content: space-between;

            ul {
              li {
                line-height: 22px;
                color: #757575;
              }
            }
          }
        }
        .right {
          flex: 3;
          text-align: right;
        }
      }
    }
  }
</style>
