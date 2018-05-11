<template>
  <div id="app">
    <NavTab/>
    <router-view/>
    <CopyRight/>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
  import CopyRight from '@/components/CopyRight'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      NavTab, CopyRight
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    body {
      overflow: scroll;
      height: 100%;
      #app {
        min-width: 1056px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background: #f5f5f5;
        .flex {
          display: flex;
        }
        .text-center{
          text-align: center;
        }
        ul {
          list-style: none;
        }
        h1, h2, h3, h4, h5, p {
          font-weight: 400;
        }
        .main {
          width: 100%;
          min-height: 100%;
          flex: 1;
          .content {
            width: 100%;
            background: #fff;
            .head {
              height: 600px;
              .head-text {
                margin: 0 auto;
                width: 70%;
                min-width: 1096px;
                color: #fff;
                padding: 60px 0 0;
              }
              .carfinance {
                h3 {
                  font-size: 22px;
                }
                h1 {
                  font-size: 36px;
                  letter-spacing: 3px;
                  margin: 20px 0 12px;
                }
                h4 {
                  font-size: 18px;
                }
              }
            }
            .body{
              width: 70%;
              min-width: 1096px;
              margin: 200px auto 0;
            }
            .body .top,
            .contact .top {
              h3 {
                color: #404040;
                font-size: 40px;

              }
              h4 {
                font-size: 18px;
                color: #757575;

              }
            }
            .contact {
              width: 70%;
              min-width: 1056px;
              margin: 80px auto 0;
              padding: 20px;
              .bottom {
                margin-top: 50px;

                .right {
                  flex: 1;
                  padding-left: 50px;
                  h5 {
                    color: #404040;
                    font-size: 22px;
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
              .loading {
                position: fixed;
                width: 80px;
                height: 80px;
                left: 50%;
                margin-left: -40px;
                top: 50%;
                margin-top: -40px;
                img {
                  width: 120%;
                  height: 120%;
                }
              }
            }
          }
          .copy-right {
            height: 50px;
          }
        }
      }
    }
  }
</style>
