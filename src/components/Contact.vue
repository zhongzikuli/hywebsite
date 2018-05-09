<template>
  <div class="main">
    <div class="content flex">
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact"
  }
</script>

<style scoped lang="less">
  .main {
    .content {
      width: 1056px;
      margin: 15px auto 20px;
      justify-content: space-between;
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
        }
      }
    }
  }
</style>
