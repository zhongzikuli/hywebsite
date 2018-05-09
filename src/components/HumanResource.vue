<template>
  <div class="main">
    <div class="content">
      <ul>
        <router-link v-for="(item,index) in recruit" :key="index" :to="{name:'Recruit',params:{id:item.id}}" tag="li"
                     class="flex">
          <div class="left">
            <span>[{{item.type}}]</span><span>{{item.job}}</span>
          </div>
          <div class="right">{{item.time}}</div>
        </router-link>
      </ul>
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
      async loadData() {
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
      ul {
        li {
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          .left {
            span {
              &:last-of-type {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
