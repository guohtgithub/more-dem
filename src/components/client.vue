<!-- client page -->
<template>
  <div class="client">
    <h2>多端服务，覆盖用户全部使用场景</h2>
    <ul>
      <li>
        <span class="iconfont icon-ziyuan16"></span>
        <p>PC安装版</p>
      </li>
      <li>
        <span class="iconfont icon-ios"></span>
        <p>IOS</p>
      </li>
      <li>
        <span class="iconfont icon-ai-app"></span>
        <p>安卓</p>
      </li>
      <li>
        <span class="iconfont icon-ziyuan17"></span>
        <p>PC网页版</p>
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
  .client{
    background: #061031;
    min-width: 1440px;
    margin: 0 auto;
    h2{
      padding:60px 0;
      margin:0;
      font-size:48px;
      font-weight:500;
      color:rgba(1,220,217,1);
      text-shadow: 1px 1px 5px #4d68c1;
    }
    ul{
      position: relative;
      z-index: 1;
      display: flex;
      width: 70%;
      margin: 0 auto;
      li{
        flex:1;
        list-style-type: none;
        color: #fff;
        padding-bottom: 100px;
        span{
          padding: 15px;
          font-size: 100px;
        }
        p{
          font-size:30px;
          color: rgba(255,255,255,.6);
        }
      }
    }
  }
  @media screen and(max-width:480px){
    .client{
      overflow-x: hidden;
      ul{
        width: 100% !important;
        margin: 0;
        padding:0;
        li{
          span{
            font-size: 15vw !important;
          }
        }
      }
    }
  }
</style>