<template>
  <div class="main">
    <div class="top">
      <div class="top-text">
        <div class="title-ch">{{titleCh}}</div>
        <div class="title-en">{{titleEn}}</div>
        <div class="slogan">{{slogan}}<br>{{sloganTitle}}</div>
        <div class="btn" @click="showDialog">立即试用<img src="../images/icon-arrowright.png"></div>
      </div>
      <div class="top-about">
        <div class="about-title">关于浩韵</div>
        <div class="about-text">{{aboutText1}}</div>
        <div class="about-text">{{aboutText2}}</div>
        <div class="about-text">{{aboutText3}}</div>
        <div class="about-text">{{aboutText4}}</div>
      </div>
    </div>
    <div class="content">
      <div class="process">
        <div class="head">
          <h3>+<br>发展历程</h3>
          <h5>Develoment path</h5>
        </div>
        <div class="mid">
          <div class="left">
            <img src="../images/icon-progress-left.png" alt="">
          </div>
          <div class="right">
            <h5>2018-未来</h5>
            <p>努力成为全国最优秀的汽车金融服务企业之一</p>
            <p>+</p>
          </div>
        </div>
        <div class="down flex">
          <div class="item flex" v-for="(item,index) in progress" :key="index">
            <div class="left">/<br>{{item.year}}</div>
            <div class="right">
              <h5>{{item.title}}</h5>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="head">
          <h3>+<br>联系我们</h3>
          <h5>Contact us</h5>
        </div>
        <div class="bottom flex">
          <div class="left">
            <img src="../images/icon-map.png" alt="">
          </div>
          <div class="right">
            <h5>浩韵控股集团</h5>
            <p>联系地址：杭州市西湖区紫荆花路48号南都研发大楼A座9楼<br>
              电话：0571-89906088/89906068<br>
              服务时间：9:00-17:30<br>
              邮箱：haoyun@haoyungroup.cn<br>
              邮编：310000</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
    <div class="copy"><span>备案号：浙ICP备15031191号</span>
      <span>浙公网安备：335214586005924524号</span></div>
    <DialogModal :dialog="dialog" @close="closeDialog"></DialogModal>
  </div>
</template>

<script>
  import Foot from '@/components/Foot'
  import DialogModal from '@/components/DialogModal'

  export default {
    name: "home",
    data() {
      return {
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
        },
        titleCh: "浩韵汽车金融业务系统全新上线",
        titleEn: "The Auto Financial Systerm Of Hao Yun launched",
        slogan: "打造行业一流企业，我们永远追求卓越",
        sloganTitle: "浩韵，领航未来",
        aboutText1: " 浩韵控股集团成立于2008年10月，集团总部位于美丽的杭州西子湖畔，是一家以消费金融及互联网金融为一体的现代化金融企业集团。" +
        "下属企业早在2003年开始经营信用卡分期业务，集团公司成立后，业务范围扩展到人财险保险代理（全国资质）、融资租赁、IT信息技术开发等多个" +
        "领域，拥有十几年的行业积累，现总注册资本4亿元。",
        aboutText2: " 2015年，集团引进上市公司作为公司新股东——新湖中宝（600208），作为浙江省最大的A股上市公司之一，助力于公司长远健康发展。",
        aboutText3: " 公司与工商银行、农业银行、建设银行以及多家股份制银行、城商行、农商行建立了持久深入的合作关系，并与人保、平安、太保、安邦、众安、" +
        "阳光、大地、利宝、永诚、紫金、中华联合等数十家保险公司签订了战略合作协议。目前公司业务遍布浙江、江苏、安徽、江西、福建、湖南、湖北、" +
        "广东、广西、贵州、四川、云南、河南、山西、内蒙等多个省份，业务范围覆盖全国。",
        aboutText4: "    浩韵集团始终以“发展金融，服务民生”为己任，聚焦定位于“您身边的消费金融便利店”，秉承“诚实守信、务实高效、合作创新、共建共享”的精神理念，" +
        "全力打造“浩韵金融”服务品牌，努力成为业内最具成长性企业！",
        progress: [{
          year: 2017,
          title: "扩张",
          text: "全国开设服务机构80家；业务覆盖全国50个重点城市"
        }, {
          year: 2016,
          title: "升级",
          text: "引进战略合作伙伴-新湖中宝；成立网络行销平台项目；网络平台（掌上行车）APP上线；获得中国保险协会批准的“网销资质"
        }, {
          year: 2012,
          title: "突破",
          text: "获得由中国保监会批准的全国经营保险代理许可证（牌照）"
        }, {
          year: 2007,
          title: "起航",
          text: "汽车金融业务启动"
        }]
      }
    },
    components: {Foot, DialogModal},
    methods: {
      showDialog() {
        this.dialog.isShow = true;
      },
      closeDialog(flag) {
        this.dialog.isShow = flag;
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .top {
      height: 600px;
      background: url("../images/bg-home.jpg") 100% 100%;
      color: #fff;
      .top-text {
        text-align: center;
        padding: 100px 0 50px;
        .title-ch {
          font-size: 66px;
        }
        .title-en {
          font-size: 30px;
        }
        .slogan {
          margin: 50px 0;
          line-height: 40px;
          font-size: 26px;
        }
        .btn {
          cursor: pointer;
          font-size: 26px;
          border: 1px solid #fff;
          padding: 5px 10px;
          width: 150px;
          line-height: 34px;
          margin: 0 auto;
          img {
            margin-left: 5px;
          }
        }
      }
      .top-about {
        color: #000;
        width: 1056px;
        max-width: 75%;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        box-shadow: 0 0 4px 4px #e3e3e3;
        .about-title {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        .about-text {
          text-indent: 2em;
        }
      }
    }
    .content {
      width: 1096px;
      margin: 220px auto 50px;
      .contact {
        margin-top: 100px;
      }
      .head {
        text-align: center;
        h3 {
          color: #404040;
          font-size: 40px;
        }
        h5 {
          font-size: 18px;
          color: #757575;
        }
      }
      .mid {
        margin-top: 50px;
        .left {
          width: 400px;
          height: 250px;
          z-index: 100;
          float: left;
          margin-top: 25px;
          background: red;
          img {
            margin-left: 100px;
            width: 200px;
            height: 150px;
            margin-top: 50px;
          }
        }
        .right {
          width: 540px;
          height: 140px;
          background: #000;
          margin-left: 320px;
          color: #fff;
          padding: 80px 120px;
          line-height: 40px;
          h5 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
            &:last-of-type {
              line-height: 140px;
            }
          }
        }
      }
      .down {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          width: 50%;
          margin-top: 80px;
          .left {
            width: 80px;
            height: 80px;
            background: #ccc;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
          }
          .right {
            flex: 1;
            margin-left: 30px;
            h5 {
              color: #222;
              font-size: 16px;
              line-height: 28px;
            }
            p {
              color: #757575;
              font-size: 14px;
            }
          }
        }
      }
      .bottom {
        margin-top: 50px;
        .left {
          img {
            width: 530px;
            height: 280px;
          }
        }
        .right {
          flex: 1;
          padding-left: 50px;
          h5 {
            color: #222;
            font-size: 16px;
            line-height: 28px;
          }
          p {
            margin-top: 15px;
            color: #757575;
            font-size: 14px;
            line-height: 22px;
            &:last-of-type {
              line-height: 140px;
              font-size: 28px;
              margin-top: 0;
            }
          }
        }
      }
    }
  }
</style>
