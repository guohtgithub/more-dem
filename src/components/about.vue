<!-- about page -->
<template>
  <div class="about">
    <div class="content">
      <div class="lf">
        <h2>关于摩尔</h2>
        <img src="../assets/img/about.png" alt="">
      </div>
      <div class="rt">
        <p>摩尔科技是全球一站式区块链技术服务提供商，团队于2014年成立，专注于区块链应用行业，开始以数字货币交易所为入口开始慢慢渗透到各个方面，特别是对于区块链底层的应用、区块链钱包、智能合约开发等均有深入的研究和设计。目前，摩尔科技已经与知名区块链创投机构“极豆资本”达成深度战略合作关系，借助其在区块链行业的影响力形成一定的。</p>
        <p>其团队技术合伙人拥有多年区块链技术经验，在区块链领域已经开发出多款爆款级应用，在交易所开发等领域更是极具代表性，是区块链沙盒监管委员会技术专家、深链商学院联合创始人。</p>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  .about{
    background: rgba(6, 16, 49, 1);
    background-image: url('../assets/img/about-bg.png');
    background-position: left top;
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 1440px;
    margin: 0 auto;
    .content{
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 100px 0;
      .lf{
        flex: 2;
        h2{
          font-size:48px;
          font-weight:500;
          color:rgba(1,220,217,1);
          margin-bottom: 50px;
          text-shadow: 1px 1px 5px #4d68c1;
        }
      }
      .rt{
        flex: 3;
        p{
          font-size:24px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          text-align: left;
          line-height: 1.6;
          margin-right: 50px;
          text-indent: 2rem;
        }
      }
    }
  }
  @media screen and(max-width:480px){
    .about{
      .content{
        width:100%;
        margin: 0;
        padding:0;
        display: inline-block;;
        .lf{
          h2{
            padding:60px 0 20px;
            margin:0;
          }
          img{
            display: none;
          }
        }
        .rt{
          padding-bottom: 5vh;
          p{
            margin:2vw;
            font-size: 4vw;
            line-height: 200%;
          }
        }
      }
    }
  }
</style>