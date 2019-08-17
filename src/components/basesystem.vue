<!-- base system -->
<template>
  <div class="system">
    <h2>全球卓越型加密数字资产交易服务</h2>
    <ul>
      <li>
        <img src="../assets/img/lsuex.png" alt="">
        <p><a href="http://lsuex.io" target="_blank">Lsuex</a></p>
      </li>
      <li>
        <img src="../assets/img/qtstar.png" alt="">
        <p>
          <a href="http://qtstar.io" target="_blank">Qtstar</a>
        </p>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
  .system{
    background: rgba(6, 16, 49, 1);;
    background-image: url('../assets/img/about-bg.png');
    background-repeat: no-repeat;
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
          padding-bottom: 100px;
          img{
            width:80%;
          }
          a{
            color: #fff;
            font-size: 30px;
            text-decoration: none;
            padding: 10px 40px;
            border: 1px solid rgba(1,220,217,1);
            border-radius: 30px;
          }
        }
      }
  }
  @media screen and(max-width:480px){
    .system{
      ul{
        width: 100%;
        margin: 0;
        padding:0;
        li{
          width: 50%;
          img{
            width: 100%;
          }
          a{
            padding: 2vw 5vw !important;
            font-size: 5vw !important;
          }
        }
      }
    }
  }
</style>