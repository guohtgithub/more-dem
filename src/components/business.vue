<!-- business page -->
<template>
  <div class="business">
    <!-- <div class="clear-height"></div> -->
    <div class="busi-info" id="business">
      <h2>业务介绍</h2>
      <div class="content">
        <a class="card">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi1.png" alt="">
            </div>
            <p>数字货币交易所</p>
          </div>
          <div class="back">
            <div>
              <p>数字货币交易所</p>
              <p>包括现货交易系统、法币交易系统、杠杆交易系统、合约交易系统以及相关营销类工具等等，具备多语言、高并发、多种交易形式等特点，并且拥有系统安全保障、高性能撮合引擎、配套中心化钱包以及自动化管理后台等。</p>
            </div>
          </div>
        </a>
        <a class="card" href="javascript:;">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi2.png" alt="">
            </div>
            <p>跨链及跨协议钱包</p>
          </div>
          <div class="back">
            <div>
              <p>跨链及跨协议钱包</p>
              <p>该系统已突破技术瓶颈，是全球首家全场景跨链及跨钱包协议支付的钱包，目前涵盖的功能包括：支持所有钱包及数字货币的交易存储、去中心化无场景限制交易、完备DAPP应用开发API、定制化支付协议等。</p>
            </div>
          </div>
        </a>
        <a class="card" href="javascript:;">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi3.png" alt="">
            </div>
            <p>DAPP游戏及应用</p>
          </div>
          <div class="back">
            <div>
              <p>DAPP游戏及应用</p>
              <p>DAPP游戏大厅可兼容目前市场大部分DAPP场景及营运模式，可视化及全定制话参数模型，三天即可实现项目落地</p>
            </div>
          </div>
        </a>
        <a class="card" href="javascript:;">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi4.png" alt="">
            </div>
            <p>区块链物联系统</p>
          </div>
          <div class="back">
            <div>
              <p>区块链物联系统</p>
              <p>物联网连接的设备更加复杂和碎片化：可能是一个屏幕，也可能是充电桩或传感器。在终端设备如此非标的情况下，想做到对应用开发者更友好成为一个非常大的难题。摩尔科技通过定制的技术运作方式，使之区块链物联系统更加标准化。</p>
            </div>
          </div>
        </a>
        <a class="card" href="javascript:;">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi5.png" alt="">
            </div>
            <p>企业级量化定制</p>
          </div>
          <div class="back">
            <div>
              <p>企业级量化定制</p>
              <p>作为国内量化交易的先驱，对大数据分析，拥有着领先的经验和技术实力。通过不断挖掘PB级数据仓库，评估各种特定市场中证券价格方向的统计概率。我们的技术团队，有AI专家、谷歌工程师和国际企业级公司管理经验的领导人。</p>
            </div>
          </div>
        </a>
        <a class="card" href="javascript:;">
          <div class="front">
            <div class='img-box'>
              <img src="../assets/img/busi6.png" alt="">
            </div>
            <p>区块链溯源板块</p>
          </div>
          <div class="back">
            <div>
              <p>区块链溯源板块</p>
              <p>溯源技术大致有三种：RFID无线射频技术、二维码、条码加上产品批次信息，溯源系统可以实现所有批次产品从原料到成品、从成品到原料100%的双向追溯功能。这个系统最大的特色功能就是数据的安全性，每个人工输入的环节均被软件实时备份。</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    } 
  }
</script>

<style scoped>
  .business{
    min-width: 1440px;
    margin: 0 auto;
  }
  .business .busi-info{
    background-image: url('../assets/img/two.png');
    background-size: cover;
    background-color: rgba(6, 16, 49, 1);
  }
  .business .busi-info h2{
    padding: 80px 0 60px;
    margin:0;
    font-size:48px;
    font-weight:500;
    color:rgba(1,220,217,1);
    text-shadow: 1px 1px 5px #4d68c1;
  }
  .front .img-box{
    height: 300px;
    line-height: 300px;
    text-align: center;
  }
  .front .img-box img{
    vertical-align: middle;
  }
  .front p {
    margin: 0;
    font-size:30px;
    color: #6D86D9;
  }
  .content {
    display: flex;
    margin: 0 60px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
  }
  .card {
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2rem);
    min-width: calc(33% - 2rem);
    height: 400px;
    min-height: 400px;
    perspective: 1000px;
    margin: 1rem;
    position: relative;
  }
  @media screen and (max-width: 500px) {
    .content{
      width: 100%;
      padding-bottom: 2vh;
    }
    .card {
      width: calc(50% - 1rem);
      margin: 0.5rem 0.3rem 0.5rem;
      height: 200px;
      min-height: 200px;
    }
    .card p{
        font-size: 4vw;
    }
    .card .front,.card .back{
      height: 100%;
      width: 100%;
    }
    .card .front .img-box{
      height: 80%;
      line-height: 160px;
    }
    .card .img-box img{
      width: 90%;
      margin: 0 auto;
    }
    .card .back p:nth-child(1){
      margin: 1vh 1vw;
    }
    .card .back p:nth-child(2){
      width: 98%;
      margin: 0 1%;
      padding: 0;
      font-size: 2vh;
    }
  }

  .front,
  .back {
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
  }

  .front {
    background-size: cover;
    /* padding: 2rem; */
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: Poppins, sans-serif;
  }
  .back p:nth-child(1){
    font-size:30px;
    font-weight:500;
    color:rgba(57,76,140,1);
    padding: 0;
    margin: 20px 0;
  }
  .back p:nth-child(2){
    text-align: left;
    text-indent: 2rem;
    font-size:24px;
    font-weight:400;
    color:rgba(119,136,160,1);
    padding: 0 30px;
    margin: 0;
  }
  .front:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
    opacity: .25;
    z-index: -1;
  }
  .card:hover .front {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover .front {
    transform: rotateY(-180deg);
  }

  .back {
    background: #fff;
    transform: rotateY(-180deg);
    /* margin-top: 100px; */
    font-size: 20px;
  }
  .card:hover .back {
    transform: rotateY(0deg);
  }
  .card:nth-child(even) .back {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover .back {
    transform: rotateY(0deg);
  }
</style>