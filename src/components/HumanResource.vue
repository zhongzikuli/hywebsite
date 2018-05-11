<template>
  <div class="main">
    <div class="content">
      <div class="top">
        <ul>
          <router-link v-for="(item,index) in recruit" :key="index" :to="{name:'Recruit',params:{id:item.id}}" tag="li"
                       class="flex">
            <div class="left">
              <h3><span>[{{item.type}}]</span>{{item.job}}</h3>
              <p>{{item.time}}</p>
            </div>
            <div class="mid">
              <h3>{{item.salary}}</h3>
              <p>{{item.year}}</p>
            </div>
            <div class="right">
              <div class="btn">查看详情</div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "human-resource",
    data() {
      return {
        recruit: []
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.recruit = require("../../mock/index").reverse();
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      width: 1056px;
      margin: 15px auto 20px;
      max-width: 75%;
      justify-content: space-between;
      background: #fff;
      .top {
        padding: 20px;
        ul {
          li {
            justify-content: space-between;
            background: #fff;
            padding: 20px 0;
            border-bottom: 20px solid #f5f5f5;
            cursor: pointer;
            h3 {
              font-weight: 400;
              color: #404040;
              span {
                margin-right: 10px;
                font-size: 14px;
              }
            }
            p {
              margin-top: 10px;
              color: #757575;
            }
            .left {
              flex: 1;
            }
            .mid {
              width: 240px;
            }
            .btn {
              background: #239fe8;
              color: #fff;
              padding: 5px;
              margin-top: 10px;
            }
            &:last-of-type {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
</style>
