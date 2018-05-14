<template>
  <div class="main">
    <div class="content">
      <div class="box">
        <div class="head-text">
          <div class="top flex">
            <div class="left">
              <img src="../images/icon-culture.png" alt="">
            </div>
            <div class="right">
              <p> 能力很重要，可有一样东西比能力更重要，那就是人品。人品，是真正的最高学历，
                是人能力施展的基础，是当今社会稀缺而珍贵的品质标签。人品和能力，如果左手
                和右手：单有能力，没有人品，人将残缺不全。人品决定态度，态度决定行为，行
                为决定着最后的结果。人品意义深远，没有人会愿意信任、重用一个人品欠佳的员工。
                好人品已成为现代人职业晋升的敬业标杆与成功人生的坚实基础。</p>
            </div>
          </div>
          <div class="mid">
            <div v-for="(item,index) in textArr" :key="index" class="item">
              <h5>{{item.h5}}</h5>
              <p>{{item.p}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Foot from '@/components/Foot'

  export default {
    name: "culture",
    data() {
      return {
        textArr: [{
          h5: "第一 忠诚",
          p: "站在公司的立场上思考问题，忠心维护公司的利益，在诱惑面前经得住考验。"
        }, {
          h5: "第二 敬业",
          p: "工作的目的不仅仅在与报酬，提供超出报酬的服务，乐意为工作做出个人牺牲。"
        }, {
          h5: "第三 自动自发",
          p: "不要事事等人交待，从“要我做”，到“我要做”，主动做一些“分外”事，先做后说。高要求：要求一步，做到三步。"
        }, {
          h5: "第四 负责",
          p: "责任的核心在与责任心，把每一件小事都做好，一诺千金，绝对没有借口，" +
          "让问题的皮球止于你，不因一点疏忽而铸成大错。"
        }, {
          h5: "第五 注重效率",
          p: "心无旁骛，专心致志，量化每日工作，拖延是最狠毒的事业杀手；注重主次，防止完美主义成为效率的大敌。"
        }, {
          h5: "第六 结果导向",
          p: "开始就要想怎样把事情做成，办法总比问题多，创造条件去完成任务，每一次就把事情做对，把任务完成得超出预期。"
        }, {
          h5: "第七 善于沟通",
          p: "当面开口，当初解决，沟通和八卦是两回事，不说和说得过多都是一种错，带着方案去提问题，培养起接受批评的情商。"
        }, {
          h5: "第八 合作",
          p: "团队提前，自我退后，滴水融入大海，个人融入团队，服从总体安排，" +
          "遵守纪律才能保证战斗力；不当团队的“短板”，多为别人考虑，让能力在团队中被放大。"

        }, {
          h5: "第九 积极进取",
          p: "永远跟上企业的步伐，以空杯心态去学习、去汲取，挤时间充电，发展自己的“比较优势”，挑战自我。"
        }, {
          h5: "第十 低调",
          p: "才高不自傲，克服“大材小用”的心里，不摆架子耍资格；给人一分尊敬，努力做到名实相符，成绩只是起点，荣誉可作动力。"
        }, {
          h5: "第十一 节约",
          p: "别把公司的钱不当钱，要诚信不耍小聪明，不浪费每一张纸，不浪费每一分钟工作" +
          "时间；花公司每一分钱，都要收到最大效益；省下的都是利润。"
        }, {
          h5: "第十二 感恩",
          p: "想想是谁成就了今天的你？公司给了你工作，工作给你学习和成长的机会，同" +
          "事给予你配合，客户帮助你创造业绩，对手让你看到距离，批评者让你趋向完美。"
        }]
      }
    },
    components: {Foot}
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      .box {
        width: 70%;
        min-width: 1096px;
        margin: 50px auto;
        background: #fff;
        .top {
          padding: 20px;
          .left {
            img {
              width: 530px;
              height: 280px;
            }
          }
          .right {
            flex: 1;
            padding-left: 50px;
            p {
              text-indent: 2em;
              font-size: 14px;
              line-height: 40px;
            }
          }
          @media screen {
            @media (max-width: 1260px) {
              .left {
                img {
                  width: 480px;
                  height: 265px;
                }
              }
              .right {
                padding-left: 30px;
                P {
                  line-height: 45px;
                }
              }
            }
          }
        }
        .mid {
          padding: 20px;
          .item {
            margin-top: 15px;
            h5 {
              font-size: 16px;
            }
            p {
              line-height: 25px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
