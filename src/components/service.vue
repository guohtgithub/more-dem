<!-- service page -->
<template>
  <div class='service'>
    <h2>全方位咨询服务</h2>
    <ul>
      <li>
        <img src="../assets/img/p1.png" alt="">
        <p>张仪云</p>
        <div class='info'>
          <p>极豆资本创始人</p>
          <p>亚洲区块链实验室联合发起人</p>
          <p>广东创意经济研究院特聘专题研究员</p>
          <p>链虎商学院荣誉院长</p>
          <p>区块链资深创投专家</p>
          <p>矿圈知名投资人，获中共广州市委统战部颁发的“突出贡献个人奖”</p>
          <p>专注于区块链全产业投资孵化，主要参与布局分布式存储、矿机矿场及区块链应用层项目，先后投资多个区块链领域项目</p>
        </div>
      </li>
      <li>
        <img src="../assets/img/p2.png" alt="">
        <p>黄连金</p>
        <div class='info'>
          <p>就职于美国CGI公司长达18年之久，曾任CGI安全技术总监，CGI云安全主管和首席安全架构师等职务。创建了CGI联邦身份管理和网络安全能力中心。在CGI工作时，曾经为美国联邦政府、金融机构、和公用事业公司提供金融，区块链，安全等方面的专家咨询，在链圈和币圈是元老级别的人物。</p>
        </div>
      </li>
      <li>
        <img src="../assets/img/p3.png" alt="">
        <p>阙小耕</p>
        <div class='info'>
          <p>Finture Labs区块链实验室、央财国际研究院副院长、前火币Labs创始人、分布式存储投资人。</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
  .service{
    background: #061031;
    background-image: url('../assets/img/about-bg.png'), url('../assets/img/one.png');
    background-repeat: no-repeat,no-repeat;
    background-position: right,left;
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
      margin:0 auto;
      li{
        flex:1;
        list-style-type: none;
        color: #fff;
        padding-bottom: 100px;
        img{
          width: 50%;
        }
        p{
          font-size: 30px;
          margin: 31px 0 18px;
        }
        .info{
          width: 80%;
          margin: 0 auto;
          background:rgba(242,245,250,.1);
          padding: 10px;
          border-radius: 5px;
          P{
            padding: 0 10px;
            line-height: 1.8;
            margin: 0;
            font-size: 18px;
          }
        }
      }
    }
  }
  @media screen and(max-width:480px){
    .service{
      overflow-x: hidden;
      ul{
        width: 98%;
        margin: 0 auto;
        padding:0;
        li{
          .info{
            height: 40vh;
            max-height: 50vh;
            overflow: auto;
            width: 96%;
            padding: 0;
            p{
              width: 100%;
              padding:0;
              margin:0;
              font-size: 3vw;
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>