<template>
  <div class="head-nav">
    <div class="nav-tab flex">
      <div class="left"><img src="../images/icon-logo.png" alt="logo"></div>
      <div class="right">
        <ul class="flex maxnav">
          <router-link v-for="(nav,index) in navTabs" :key="index" :to="'/'+nav.path"
                       :class="{business:dropdown,recruit:recruitId}"
                       @mouseenter.native="hover(index)" @mouseout.native="leave()"
                       tag="li">
            {{nav.text}}
          </router-link>
        </ul>
        <ul class="minnav text-center" v-if="dropdownActive">
          <router-link v-for="(childNav, childIndex) in child" :key="childIndex" :to="'/'+childNav.path"
                       @mouseenter.native="hover(childIndex+6)" @mouseout.native="leave()" tag="li">
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
        dropdownActive: false,
        navTabs: [{
          text: "首页",
          page: 0,
          path: "home"
        }, {
          text: "集团业务",
          page: 1,
          path: "business"
        }, {
          text: "企业文化",
          page: 2,
          path: "culture"
        }, {
          text: "营销网络",
          page: 3,
          path: "marketing"
        }, {
          text: "人力资源",
          page: 4,
          path: "humanresource"
        }, {
          text: "联系我们",
          page: 5,
          path: "contact",
        }],
        child: [{
          text: "汽车金融",
          page: 6,
          path: "carfinance"
        }, {
          text: "掌上行车",
          page: 7,
          path: "labcar"
        }, {
          text: "视频面签",
          page: 8,
          path: "videoface"
        }, {
          text: "宝诚保险",
          page: 9,
          path: "insurance"
        }]
      }
    },
    methods: {
      hover(index) {
        if (index == 1 || index >= 6) {
          this.dropdownActive = true;
        }
      },
      leave() {
        this.dropdownActive = false
      }
    },
    computed: {
      dropdown() {
        let path = ["/business", "/carfinance", "/labcar", "/videoface", "/insurance"];
        return path.some(item => item == this.$route.path);
      },
      recruitId() {
        let path = ["/recruit"];
        return path.some(item => item == this.$route.path.slice(0, 8));
      }
    }
  }
</script>

<style scoped lang="less">
  .head-nav {
    background: #fff;
    .nav-tab {
      width: 70%;
      min-width: 1096px;
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
          &.maxnav {
            .business:nth-child(2),
            .recruit:nth-child(5),
            .router-link-active {
              background: #239fe8;
              color: #fff;
            }
          }
          &.minnav {
            width: 96px;
            background: #239fe8;
            color: #fff;
            margin-left: 72px;
            li {
              margin-right: 0;
              padding: 0;
              color: #fff;
              font-size: 18px;
              &.router-link-active {
                background: #fff;
                color: #239fe8;
              }
            }
          }
        }
      }
    }
  }
</style>
