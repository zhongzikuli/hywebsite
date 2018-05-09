<template>
  <div class="main">
    <div class="content">
      <h3>{{detail.job}}</h3>
      <div class="duty">
        <h5>岗位职责：</h5>
        <p v-for="(item,index) in detail.duty" :key="index">{{item}}</p>
      </div>
      <div class="duty">
        <h5>任职要求：</h5>
        <p v-for="(item,index) in detail.ask" :key="index">{{item}}</p>
      </div>
      <p class="contact">联系电话 0571-85389152 简历请发送至招聘邮箱danny_1236@163.com 标题注明意向岗位</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recruit",
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this.loadDetail();
    },
    methods: {
      async loadDetail() {
        let list = require("../mock/index");
        let id = this.$route.params.id;
        this.detail = list.find(it => it.id === id)
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      width: 1056px;
      margin: 15px auto 20px;
      h3 {
        text-align: center;
        border-bottom: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
      }
      .duty {
        h5 {
          height: 40px;
          line-height: 40px;
        }
        p {
          font-size: 14px;
          line-height: 25px;
        }
      }
      .contact {
        margin-top: 50px;
      }
    }
  }
</style>
