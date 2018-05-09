<template>
  <div id="app">
    <NavTab/>
    <router-view/>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      NavTab
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    overflow: scroll;
    #app {
      min-width: 1056px;
      .flex {
        display: flex;
      }
      .main {
        width: 100%;
        .copy {
          background: #404040;
          text-align: center;
          padding: 20px 0;
          color: #fff;
          font-size: 16px;
          span {
            &:last-of-type {
              margin-left: 20px;
            }
          }
        }
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3, h5, p {
      margin: 0;
    }
  }


</style>
