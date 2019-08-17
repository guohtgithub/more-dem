<!-- wap page -->
<template>
  <div class="wap">
      <div>
        <img src="../assets/img/wap/img1.png" alt="">      
      </div>
      <div>
        <img src="../assets/img/wap/img2.png" alt="">      
      </div>
      <div>
        <img src="../assets/img/wap/img3.png" alt="">      
      </div>
      <div class='alink'>
        <img src="../assets/img/wap/img4.png" alt="">
        <a class='left' href="javascript:;" target="_blank">Lsuex</a>
        <a class='right' href="javascript:;" target="_blank">Qtstar</a>
      </div>
      <div>
        <img src="../assets/img/wap/img5.png" alt="">      
      </div>
      <div>
        <img src="../assets/img/wap/img6.png" alt="">      
      </div>
      <div>
        <img src="../assets/img/wap/img7.png" alt="">      
      </div>
      <div>
        <img src="../assets/img/wap/img8.png" alt="">      
      </div>
  </div>
</template>

<style lang='scss' scoped>
.wap{
  max-width: 480px;
  width: 100vw;
  overflow-x: hidden;
  div{
    font-size: 0;
    img{
      width: 100%;
      line-height: 1;
    }    
  }
  .alink{
    position: relative;
    a{
      position: absolute;
      color: #fff;
      font-size: 4vw;
      text-decoration: none;
      padding: 1vw 2vh;
      border: 1px solid rgba(1,220,217,1);
      border-radius: 30px;
      bottom: 5vh;
    }
    .left{
        left: 15%;
    }
    .right{
        right: 15%;
    }   
  }
}
</style>