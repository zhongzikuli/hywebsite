<template>
  <div class="head">
    <div class="nav-tab flex">
      <div class="left">
        <img src="../images/icon-logo.png" alt="logo">
      </div>
      <div class="right">
        <ul class="flex maxNav">
          <router-link :to="'/'+nav.path" v-for="(nav,index) in navTabs" :key="index" tag="li"
                       :class="{business:minNav}">
            {{nav.text}}
          </router-link>
        </ul>
        <ul class="flex minNav" v-if="minNav">
          <router-link v-for="(childNav, childIndex) in child" :key="childIndex" :to="'/'+childNav.path" tag="li">
            {{childNav.text}}
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NavTab",
    data() {
      return {
        navTabs: [{
          text: "首页",
          path: "home"
        }, {
          text: "集团业务",
          path: "business"
        }, {
          text: "企业文化",
          path: "culture"
        }, {
          text: "营销网络",
          path: "marketing"
        }, {
          text: "人力资源",
          path: "humanresource",
        }, {
          text: "联系我们",
          path: "contact",
        }],
        child: [{
          text: "汽车金融",
          path: "carfinance"
        }, {
          text: "掌上行车",
          path: "labcar"
        }, {
          text: "视频面签",
          path: "videoface"
        }, {
          text: "宝诚保险",
          path: "insurance"
        }]
      }
    },
    computed: {
      minNav() {
        let path = ["/business", "/carfinance", "/labcar", "/videoface", "/insurance"];
        return path.some(item => item == this.$route.path);
      },
      hr() {
        let position = this.$route.path.indexOf("/recruit/");
        console.log(position);
      }
    }
  }
</script>

<style scoped lang="less">
  .head{
    background: #fff;
  }
  .nav-tab {
    width: 75%;
    height: 44px;
    margin: 0 auto;
    padding: 28px 0;
    justify-content: space-between;
    .left {
      width: 155px;
      img {
        vertical-align: middle;
        height: 100%;
      }
    }
    .right {
      z-index: 9;
      ul {
        li {
          color: #3c3c3c;
          font-size: 20px;
          margin-right: 16px;
          line-height: 44px;
          padding: 0 8px;
          cursor: pointer;
          &:last-of-type {
            margin-right: 0;
          }
        }
        &.maxNav {
          .business:nth-child(2),
          .hr,
          .router-link-active {
            background: #239fe8;
            color: #fff;
          }
        }
        &.minNav {
          margin: 40px 0 0 190px;
          li {
            font-size: 18px;
            line-height: 30px;
            color: #fff;
          }
          .router-link-active {
            border: 2px solid #fff;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>
