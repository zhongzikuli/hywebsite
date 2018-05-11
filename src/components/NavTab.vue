<template>
  <div class="head-nav">
    <div class="nav-tab flex">
      <div class="left"><img src="../images/icon-logo.png" alt="logo"></div>
      <div class="right">
        <ul class="flex maxnav">
          <li v-for="(nav,index) in navTabs" :class="{business:dropdown,active: index == nowIndex}"
              @mouseenter="hover(index)" @mouseleave="leave()" @click="tabToggle(index)">
            {{nav.text}}
          </li>
        </ul>
        <ul class="minnav" v-if="dropdownActive">
          <li v-for="(childNav, childIndex) in child" @click="tabToggle(childIndex+6)"
              @mouseenter="hover(childIndex+6)" @mouseleave="leave()">
            {{childNav.text}}
          </li>
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
        nowIndex: 0,
        it: 0,
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
    mounted() {

    },
    methods: {
      tabToggle(index) {
        this.nowIndex = index;
        if (index < 6) {
          this.it = this.navTabs.find(item => item.page == index);
        } else {
          this.it = this.child.find(item => item.page == index);
        }
        window.location.href = '#/' + this.it.path;
      },
      hover(index) {
        if (index == 1 || index >= 6) {
          this.dropdownActive = true
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
            .active {
              background: #239fe8;
              color: #fff;
            }
          }
          &.minnav {
            width: 112px;
            margin-left: 64px;
            li {
              margin-right: 0;
              padding: 0;
              
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
