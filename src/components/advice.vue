<!-- advice page -->
<template>
  <div class="advice">
    <h2>全方位咨询服务</h2>
    <ul>
      <li class="post-format-content">
        <div class="post-thumbnail">
          <img src="../assets/img/advice1.png" alt="">
          <p>技术咨询</p>
        </div>
        <div class='content-wrap'>
          <h1 class="entry-title">
            <p class="featured-image">结合实际运营成本以及运营需要提供安全、适合的技术方案</p>
          </h1>
        </div>
      </li>
      <li class="post-format-content">
        <div class="post-thumbnail">
          <img src="../assets/img/advice2.png" alt="">
          <p>运营咨询</p>
        </div>
        <div class='content-wrap'>
          <h1 class="entry-title">
            <p class="featured-image">结合上百家公司的运营经验为其提供帮助。</p>
          </h1>
        </div>
      </li>
      <li class="post-format-content">
        <div class="post-thumbnail">
          <img src="../assets/img/advice3.png" alt="">
          <p>业务咨询</p>
        </div>
        <div class='content-wrap'>
          <h1 class="entry-title">
            <p class="featured-image">根据实际资源提供具有竞争力的业务模式建议。</p>
          </h1>
        </div>
      </li>
      <li class="post-format-content">
        <div class="post-thumbnail">
          <img src="../assets/img/advice4.png" alt="">
          <p>实施咨询</p>
        </div>
        <div class='content-wrap'>
          <h1 class="entry-title">
            <p class="featured-image">项目如何落地时整个项目最重要的一环，摩尔科技和你同舟共济。</p>
          </h1>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

</script>
<style scoped lang='scss'>
  .advice{
    background-color: #061031;
    background-image: url('../assets/img/one.png');
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 1440px;
    margin: 0 auto;
    h2{
      padding:60px 0;
      margin:0;
      font-size:48px;
      font-weight:500;
      text-shadow: 1px 1px 5px #4d68c1;
      color:rgba(1,220,217,1);
    }
    ul{
      position: relative;
      z-index: 1;
      display: flex;
      width: 70%;
      margin:0 auto;
      padding-bottom: 60px;
      .post-format-content {
        position: relative;
        flex:1;
        list-style-type: none;
        color: #fff;
        .post-thumbnail {
          width: 90%;
          margin: 0 auto;
          height: auto;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
          }
          p{
            background: #fff;
            margin: 0;
            padding: 10px 0;
            color: #333;
            font-size: 30px;
          }
        }
        .content-wrap {
          width: 90.4%;
          margin: 0 auto;
          height: auto;
          position: absolute;
          text-align: center;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          h1.entry-title {
            display: table;
            height: 100%;
            text-transform: uppercase;
            width: 100%;
            margin:0;
            .featured-image {
              display: table-cell;
              position: relative;
              font-size: 24px;
              transition: opacity .25s ease-in-out, background .25s ease-in-out;
              -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
              -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
              vertical-align: middle;
              z-index: 1;
              color: #fff;
              text-decoration: none;
              opacity: 0;
              padding: 10%;
            }
            .featured-image:hover {
              opacity: 0.9;
              color: #fff;
              background: rgba(0,0,0,0.8);
            }
          }
        }
      }
    }
  }
  @media screen and(max-width: 480px){
    .advice{
      ul{
        width: 100%;
        margin: 0;
        padding: 0;
        display: block;
        li{
          width: 50%;
          float: left;
          p{
            font-size: 5vw !important;
          }
          .featured-image{
            font-size: 4vw !important;
          }
          .content-wrap{
            display: none;
          }
        }
      }
    }
  }
  
</style>