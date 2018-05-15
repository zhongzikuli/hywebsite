<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="dialog.isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="dialog.isShow">
        <form @submit.prevent="submit">
          <div class="dialog-head flex">
            <span>注册浩韵会员</span>
            <span class="dialog-close" @click="closeMyself">&times;</span>
          </div>
          <div class="dialog-body">
            <div class="dialog-item flex">
              <label name="name" for="name">会员姓名：</label>
              <input type="text" id="name" v-model.trim="name" placeholder="请输入姓名">
            </div>
            <div class="dialog-item flex">
              <label name="tel" for="tel">手机号码：</label>
              <input type="text" id="tel" v-model.number="tel" maxlength="11" placeholder="请输入手机号码">
            </div>
            <div class="dialog-item flex">
              <label name="companyName" for="companyName">公司名称：</label>
              <input type="text" id="companyName" v-model.trim="companyName" placeholder="请输入公司名称">
            </div>
          </div>
          <div class="dialog-foot">
            <button class="btn-confirm" :disabled="flag">确定提交</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: "dialog-modal",
    data() {
      return {
        flag: false,
        name: "",
        tel: null,
        companyName: ""
      }
    },
    props: {
      dialog: {
        type: Object,
        required: true
      }
    },
    methods: {
      submit() {
        this.flag = true;
        setTimeout(() => {
          this.flag = false
        }, 2000);
        if (this.name == "") {
          this.$toasted.error('姓名不能为空', {
            position: "top-center"
          }).goAway(2000);
        } else if (this.tel == null || this.tel == "" || this.tel == undefined) {
          this.$toasted.error('手机号码不能为空', {
            position: "top-center"
          }).goAway(2000);
        } else if (this.companyName == "") {
          this.$toasted.error('公司名称不能为空', {
            position: "top-center"
          }).goAway(2000);
        } else {
          let params = new URLSearchParams();
          params.append("name", this.name);
          params.append("tel", this.tel);
          params.append("companyName", this.companyName);
          //let url = "http://192.168.0.213:8088/interface-web/sale/insert";
          let url = "http://183.134.110.234:18080/interface-web/sale/insert";
          this.$axios.post(url, params).then(res => {
            if (res.status == 200 && res.data.error == 1) {
              this.dialog.isShow = false;
              this.name = "";
              this.tel = "";
              this.companyName = "";
              this.$toasted.success('信息提交成功！请等待客服的联系', {
                position: "top-center"
              }).goAway(2000);
            } else {
              this.$toasted.error(res.data.message, {
                position: "top-center",
                className: "error"
              }).goAway(2000);
            }
          }).catch(msg => {

          })
        }
      },
      closeMyself() {
        this.dialog.isShow = false;
        this.name = "";
        this.tel = "";
        this.companyName = "";
        this.$emit('close', false)
      }
    }
  }
</script>

<style scoped lang="less">
  .drop-enter-active {
    transition: all .5s ease;
  }

  .drop-leave-active {
    transition: all .3s ease;
  }

  .drop-enter {
    transform: translateY(-500px);
  }

  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    .dialog-cover {
      background: #000;
      opacity: .3;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .dialog-content {
      width: 400px;
      position: fixed;
      background: #fff;
      top: 220px;
      left: 50%;
      margin-left: -200px;
      z-index: 10;
      border-radius: 5px;
      padding: 8px 0 15px;
      .dialog-head {
        padding: 0 30px 8px;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        color: #404040;
        font-weight: 600;
        line-height: 30px;
        .dialog-close {
          cursor: pointer;
          font-size: 28px;
          font-weight: 500;
          line-height: 26px;
        }
      }
      .dialog-body {
        padding: 20px 30px;
        .dialog-item {
          justify-content: space-between;
          margin-bottom: 10px;
          label {
            width: 80px;
            line-height: 30px;
            color: #404040;
          }
          input {
            border-radius: 5px;
            outline: none;
            border: 1px solid #ccc;
            height: 30px;
            line-height: 30px;
            flex: 1;
            padding-left: 8px;
          }
          input::-webkit-input-placeholder {
            color: #ccc;
          }
          input::-moz-placeholder {
            color: #ccc;
          }
          input:-moz-placeholder {
            color: #ccc;
          }
          input:-ms-input-placeholder {
            color: #ccc;
          }
        }
      }
      .dialog-foot {
        padding: 0 30px;
        button {
          width: 100%;
          outline: none;
          border: 1px solid #ccc;
          border-radius: 5px;
          line-height: 30px;
          cursor: pointer;
          background: #239fe8;
          color: #fff;
        }
      }
    }
  }
</style>
