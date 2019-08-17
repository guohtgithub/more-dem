<template>
  <div class="hello">
    <div class="title">摩尔科技</div>
    <div class="sub-title">全球一站式区块链技术服务提供商</div>
    <div class="mth"></div>
    <ul class="info">
      <li>
        <div class='clicle'><i class='iconfont icon-ziyuan4'></i></div>
        <p>安全</p>  
      </li>
      <li>
        <div class='clicle'><i class='iconfont icon-ziyuan5'></i></div>
        <p>可用</p>
      </li>
      <li>
        <div class='clicle'><i class='iconfont icon-ziyuan1'></i></div>
        <p>可靠</p>
      </li>
      <li>
        <div class='clicle'><i class='iconfont icon-ziyuan7'></i></div>
        <p>可拓展</p>
      </li>
    </ul> 
  </div>    
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped >
  .hello{
    background-image: url('../assets/img/header.png');
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
    height: 100vh;
    text-align: center; 
    min-width: 1440px;
    margin: 0 auto;
    .title{
      color:#01DCD9;
      font-size: 109px;
      padding-top: 300px;
    }
    .sub-title{
      font-size:29px;
      font-weight:400;
      color:rgba(255,255,255,1);
      opacity:0.7;
      padding-top: 29px;
    }
    .mth{
      height: 200px;
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
        .clicle{
          width: 74px;
          height: 74px;
          line-height: 74px;
          text-align: center;
          margin: 0 auto;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          i{
            font-size: 30px;
          }
        }
        p{
          margin: 10px;
          font-size:16px;
        }
      }
    }
  }
  
  @media screen and(max-width:480px){
    .hello{
      background-image: url('../assets/img/header.png');
      background-position: left center;
      background-size: contain;
      background-repeat: no-repeat;
      height: 85vh;
      .title{
        padding-top: 160px !important;
      }
      .mth{
        height: 100px;
      }
      ul{
        width: 100% !important;
        padding: 0;
        margin: 0;
        li{
          .clicle{
            width: 40px;
            height: 40px;
            line-height: 40px;
            i{
              font-size: 2vw;
            }
          }
          p{
            font-size:2vw !important;
          }
        }
      }
    }
  }
</style>
