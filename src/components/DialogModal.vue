<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="dialog.isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="dialog.isShow">
        <form>
          <div class="dialog-head flex">
            <span>注册浩韵会员</span>
            <span class="dialog-close" @click="closeMyself">x</span>
          </div>
          <div class="dialog-body">
            <div class="dialog-item flex">
              <label name="name" for="name">姓名：</label>
              <input type="text" id="name" v-model.trim="name" ref="name" placeholder="请输入姓名">
            </div>
            <div class="dialog-item flex">
              <label name="tel" for="tel">手机号码：</label>
              <input type="text" id="tel" v-model.number="tel" ref="tel" placeholder="请输入正确的手机号码">
            </div>
            <div class="dialog-item flex">
              <label name="companyName" for="companyName">公司名称：</label>
              <input type="text" id="companyName" v-model.trim="companyName" ref="companyName" placeholder="请输入公司名称">
            </div>
          </div>
          <div class="dialog-foot flex">
            <button class="btn-confirm" @click="submit" :disabled="flag">确定提交</button>
            <button class="btn-cancel" @click="closeMyself">取消</button>
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
      async submit() {
        this.flag = true;
        setTimeout(() => {
          this.flag = false
        }, 2000);
        if (this.name == "") {
          this.$toasted.error('姓名不能为空', {
            position: "top-center"
          }).goAway(2000);
          return
        } else if (this.tel == null || this.tel == "" || this.tel == undefined) {
          this.$toasted.error('手机号码不能为空', {
            position: "top-center"
          }).goAway(2000);
          return
        } else if (this.companyName == "") {
          this.$toasted.error('公司名称不能为空', {
            position: "top-center"
          }).goAway(2000);
          return
        } else {
          let params = new URLSearchParams();
          params.append("name", this.name);
          params.append("tel", this.tel);
          params.append("companyName", this.companyName);
          let url = "http://192.168.0.213:8088/interface-web/sale/insert";
          //let url = "http://183.134.110.234:18080/interface-web/sale/insert";
          await this.$axios.post(url, params).then(res => {
            if (res.status == 200 && res.data.error == 1) {
              this.dialog.isShow = false;
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
      top: 300px;
      left: 50%;
      margin-left: -200px;
      z-index: 10;
      border: 2px solid #239fe8;
      border-radius: 5px;
      .dialog-head {
        background: #239fe8;
        padding: 5px 12px;
        justify-content: space-between;
        color: #fff;
        line-height: 30px;
        .dialog-close {
          cursor: pointer;
        }
      }
      .dialog-body {
        padding: 20px;
        .dialog-item {
          justify-content: space-between;
          margin-bottom: 8px;
          label {
            width: 100px;
            line-height: 30px;
            color: #404040;
            text-align: right;
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
        }
      }
      .dialog-foot {
        width: 35%;
        margin: 0 auto 15px;
        justify-content: space-between;
        button {
          outline: none;
          border: 1px solid #ccc;
          border-radius: 5px;
          line-height: 30px;
          cursor: pointer;
          padding: 0 8px;
          &.btn-confirm {
            background: #239fe8;
            color: #fff;
          }
        }
      }
    }
  }
</style>
