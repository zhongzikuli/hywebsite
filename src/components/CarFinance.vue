<template>
  <div class="main" id="main">
    <template v-if="page">
      <div class="content content1">
        <h5>浩韵控股集团业务</h5>
        <h1>汽车金融，专业化管家服务</h1>
        <div class="btn" @click="showDialog">立即试用<img src="../images/icon-arrowright.png"></div>
        <DialogModal :dialog="dialog" @close="closeDialog"></DialogModal>
      </div>
    </template>
    <template v-else>
      <div class="content content2">
        <div class="item-content">
          <div v-for="(item,index) in carFinance" :key="index" class="item" :class="item.color">
            <img :src="item.src" alt="" v-if="item.src"><br>
            <span>{{item.label}}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import DialogModal from '@/components/DialogModal'

  export default {
    name: "car-finance",
    data() {
      return {
        page: true,
        carFinance: [{
          label: "大数据征信",
          src: require('../images/icon-sql.png'),
          color: "blue"
        }, {
          label: "自定义流程",
          src: require('../images/icon-progress.png'),
          color: "red"
        }, {
          label: "自动化审批",
          src: require("../images/icon-head.png"),
          color: "blue"
        }, {
          label: "一键自动生成合同",
          src: require("../images/icon-list.png"),
          color: "red"
        }, {
          label: "公司平台八大特色",
          color: "red"
        }, {
          label: "可视化管理图表",
          src: require("../images/icon-table.png"),
          color: "red"
        }, {
          label: "智能贷后",
          src: require("../images/icon-pocket.png"),
          color: "blue"
        }, {
          label: "SAAS平台",
          src: require("../images/icon-yun.png"),
          color: "red"
        }, {
          label: "多端互联",
          src: require("../images/icon-share.png"),
          color: "blue"
        }],
        dialog: {
          isShow: false,
          head: "注册浩韵会员",
          solt: [{
            name: "name",
            text: "姓名：",
            val: "",
            type: "text"
          }, {
            name: "tel",
            text: "手机号码：",
            val: "",
            type: "number"
          }, {
            name: "companyName",
            text: "公司名称：",
            val: "",
            type: "text"
          }]
        }
      }
    },
    components: {DialogModal},
    mounted() {
      window.addEventListener('scroll', this.scroll);
    },
    methods: {
      showDialog() {
        this.dialog.isShow = true;
      },
      closeDialog(flag) {
        this.dialog.isShow = flag;
      },
      scroll(e) {
        this.a = document.body.scrollHeight || document.documentElement.scrollHeight;
        this.b = document.body.scrollTop || document.documentElement.scrollTop;
        this.c = document.documentElement.clientHeight;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        if (this.b + this.c + 10 >= this.a) {
          setTimeout(() => {
            this.page = false
          }, 800)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content1 {
      background: url("../images/bg-carFinancel.jpg") no-repeat;
    }
    .content2 {
      background: url("../images/bg-carFinancel1.jpg") no-repeat;
    }
    .content {
      width: 100%;
      position: absolute;
      top: 100px;
      background-size: 100% 100%;
      text-align: center;
      color: #fff;
      height: calc(~"100% - 90px");
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale');
      .item-content {
        padding-top: 100px;
        width: 800px;
        height: 450px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          width: 30%;
          border: 3px solid;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 600;
          padding-top: 27px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .blue {
          color: #239fe8;
          border-color: #239fe8;
        }
        .red {
          color: #fff;
          background: red;
          border-color: red;
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
      .btn {
        position: absolute;
        bottom: 100px;
        cursor: pointer;
        left: 50%;
        margin-left: -60px;
        width: 120px;
        line-height: 40px;
        border-radius: 5px;
        border: 1px solid #fff;
        z-index: 11;
      }
    }
  }
</style>
