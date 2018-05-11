<template>
  <div class="main">
    <div class="content">
      <div class="head">
        <div class="head-text">
          <h3>浩韵控股集团业务</h3>
          <h1>汽车金融业务系统，专业化管家服务</h1>
          <h4>Auto Finance Business System,Specialization Butler Server</h4>
        </div>
      </div>
      <div class="contact">
        <div class="top text-center">
          <h3>+<br>业务系统介绍</h3>
          <h4>Business system introduction</h4>
        </div>
        <div class="bottom flex">
          <div class="left">
            <img src="../images/icon-computer.png" alt="">
          </div>
          <div class="right">
            <h5>浩韵控股集团</h5>
            <p>为汽车厂商、第三方金融及租赁公司，提供专业的汽车金融解决方案；<br>
              针对各种具体的汽车消费贷款业务，支持金融产品自定义配置，灵活多变，<br>
              提给多样的金融方案；并通过贷前、贷中、贷后的风险控制，保证<br>
              资产安全，降低风险；提供可随业务流程、业务规模、业务监管的变化而<br>
              不断扩展变化的业务管理系统</p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="top text-center">
          <h3>+<br>业务系统特色</h3>
          <h4>Business system features </h4>
        </div>
        <div class="down flex">
          <div class="item flex" v-for="(item,index) in features" :key="index">
            <div class="left text-center"><img :src="item.src" alt=""></div>
            <div class="right">
              <h5>{{item.label}}</h5>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "car-finance",
    data() {
      return {
        features: [{
          label: "大数据征信",
          src: require('../images/icon-sql.png'),
          text: "通过互联网征信查询，得出用户手机是否实名、手机在网时长、是否黑名单、多平台借贷等信息，过滤不良用户。"
        }, {
          label: "自定义流程",
          src: require('../images/icon-progress.png'),
          text: "可以根据自己公司的特色，配置属于自己的审核流程。根据不同的车辆价格，配置不同的审核等级。"
        }, {
          label: "自动化审批",
          src: require("../images/icon-head.png"),
          text: "审批权自动化，省去繁琐人工操作，降低安全风险，节约成本，也大大提高了工作效率。"
        }, {
          label: "一键自动生成合同",
          src: require("../images/icon-list.png"),
          text: "减少系统操作录入工作量或二次录入工作量，节约人力。"
        }, {
          label: "可视化管理图表",
          src: require("../images/icon-table.png"),
          text: "各级管理人员根据订单流转不同节点，实时关注公司整体运营状况，可实时掌控风险及问题所在。"
        }, {
          label: "智能贷后",
          src: require("../images/icon-pocket.png"),
          text: "针对高风险用户的跟踪、对逾期用户的主动催缴、安排拖车及诉讼。"
        }, {
          label: "SAAS平台",
          src: require("../images/icon-yun.png"),
          text: "作为平台级系统可便捷的与其他系统对接，支持多个公司车贷系统的并行运行。"
        }, {
          label: "多端互联",
          src: require("../images/icon-share.png"),
          text: "PC和APP无缝结合。"
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      padding-bottom: 50px;
      .head {
        background: url("../images/bg-carFinancel.jpg") no-repeat 100%;
        .head-text{
          h1{
            margin: 20px 0 10px;
          }
        }
      }
      .body {
        .down {
          justify-content: space-between;
          flex-wrap: wrap;
          .item {
            width: 50%;
            margin-top: 50px;
            .left {
              background: #239fe8;
              width: 100px;
              height: 100px;
              img {
                margin-top: 20px;
              }
            }
            .right {
              flex: 1;
              padding: 0 30px;
              h5 {
                color: #404040;
                font-size: 20px;
                line-height: 28px;
              }
              p {
                margin-top: 15px;
                color: #757575;
                font-size: 14px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
</style>
