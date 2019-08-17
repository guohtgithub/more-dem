<!-- footer page -->
<template>
  <div class="footer">
    <h2>业务咨询</h2>
    <p class='title-info'>了解各项区块链系统开发业务与相关运行的全部信息</p>
    <div class="info">
      <div class="lt">
        <ul>
          <li>
            <p>
              <div class="iconfont icon-ziyuan2"></div>
              Sandy
            </p>
          </li>
          <li>
            <p>
              <div class="iconfont icon-ziyuan3"></div>
              sandy1551@163.com
            </p>
          </li>
        </ul>
      </div>
      <div class="rt">
        <img src="../assets/img/ewm.png" alt="">
        <p>扫一扫，添加微信</p>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  .footer{
    background:#050f32;
    background-image:url('../assets/img/footer.png');
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    min-width: 1440px;
    margin: 0 auto;
    h2{
      padding:60px 0 10px;
      margin:0;
      font-size:48px;
      font-weight:500;
      color:rgba(1,220,217,1);
      text-shadow: 1px 1px 5px #4d68c1;
    }
    .title-info{
      font-size: 24px;
      font-weight: 500;
      color:rgba(255,255,255,1);
      opacity:0.6;
      margin-bottom: 70px;
    }
    .info{
      width: 60%;
      margin: 0 auto;
      display: flex;
      .lt{
        flex: 1;
        ul{
          width: 70%;
          margin: 0 auto;
          list-style: none;
          text-align: left;
          li{
            color: #fff;
            line-height: 200%;
            div{
              padding-right: 20px;
              font-size: 30px;
              float: left;
              width: 50px;
              height: 40px;
              line-height: 40px;
              text-align: center;
            }
          }
        }
      }
      .rt{
        flex: 1;
        p{
          color: #fff;
          margin-top: 5px;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
  @media screen and(max-width:480px){
    .footer{
      overflow-x: hidden;
      .title-info{
        font-size: 4vw;
        margin-bottom: 30px;
      }
      .info{
        width:100%;
        .lt{
          width: 50%;
          ul{
            width: 96%;
            padding: 0;
            margin: 0 auto;
            li{
              font-size: 4vw;
              span{
                font-size: 4vw;
              }
            }
          }
        }
        .rt{
          width: 50%;
          font-size: 4vw;
          img{
            width: 50%;
          }
        }
      }
    }
  }
</style>