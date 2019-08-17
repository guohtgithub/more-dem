<template>
  <div id="app">
    <div id='ss_menu' v-show="!wapFalse">
      <div @click="goAnchor('#service')" class='list'>
        <div><i class="iconfont icon-ziyuan10"></i></div>
        <p>顾问团队</p>
      </div>
      <div @click="goAnchor('#advice')" class='list'>
        <div><i class="iconfont icon-ziyuan14"></i></div>
        <p>咨询服务</p>
      </div>
      <div @click="goAnchor('#business')" class='list'>
        <div><i class="iconfont icon-ziyuan13"></i></div>
        <p>业务介绍</p>
      </div>
      <div @click="goAnchor('#client')" class='list'>
        <div><i class="iconfont icon-ziyuan11"></i></div>
        <p>用户端</p>
      </div >
      <div @click="goAnchor('#base')" class='list'>
        <div><i class="iconfont icon-ziyuan9"></i></div>
        <p>基础系统</p>
      </div>
      <div  @click="goAnchor('#about')" class='list'>
        <div><i class="iconfont icon-ziyuan12"></i></div>
        <p>关于摩尔</p>
      </div>
      <div @click="goAnchor('#footer')" class='list'>
        <div><i class="iconfont icon-ziyuan15"></i></div>
        <p>业务咨询</p>
      </div>
      <div class='menu' @click="showBanner" :class="flag?'colorgray':'colorbule'">
        <div class='share'>
          <div class='iconfont' :class="flag?'icon-ziyuan8':'icon-ziyuan6'"></div>
        </div>
      </div>
    </div>
    <div class="loading" v-show="flag"></div>
    <banner-nav v-show="!wapFalse"></banner-nav>
    <business-nav id='business' v-show="!wapFalse"></business-nav>
    <client-nav id='client' v-show="!wapFalse"></client-nav>
    <base-system id='base' v-show="!wapFalse"></base-system>
    <advice-nav id='advice' v-show="!wapFalse"></advice-nav>
    <about-nav id='about' v-show="!wapFalse"></about-nav>
    <service-nav id='service' v-show="!wapFalse"></service-nav>
    <footer-nav id='footer' v-show="!wapFalse"></footer-nav>
    <footer v-show="!wapFalse">深圳摩尔科技有限公司</footer>
    <wap-nav id='wap' v-show="wapFalse"></wap-nav>
  </div>
</template>

<script>
  import bannerNav from '@/components/banner'
  import businessNav from '@/components/business'
  import clientNav from '@/components/client'
  import baseSystem from '@/components/basesystem'
  import adviceNav from '@/components/advice'
  import aboutNav from '@/components/about'
  import serviceNav from '@/components/service'
  import footerNav from '@/components/footer'
  import wapNav from '@/components/wap'
  export default {
    name: 'App',
    data () {
      return {
        flag:false,
        wapFalse:false
      }
    },
    components:{
      bannerNav,
      businessNav,
      clientNav,
      baseSystem,
      adviceNav,
      aboutNav,
      serviceNav,
      footerNav,
      wapNav
    },
    created(){
      localStorage.setItem('rote',180);
    },
    methods:{
      showBanner(){
        this.flag = !this.flag;
        let rot = parseInt(localStorage.getItem('rote'));
        rot -= 180;
        let bannerList = document.querySelector('#ss_menu');
        let share = document.querySelector('.share');
        let list = document.querySelectorAll('.list');
        let loading = document.querySelector('.loading');
        console.log(this.flag,'===')
        if(!this.flag){
          list.forEach(item =>{
            item.style.transition =  'opacity 1s';
            item.style.opacity = 0;
            loading.style.transition =  'opacity 1s';
            loading.style.opacity = 0;
          })
        }else{
          list.forEach(item =>{
            item.style.opacity = 1;
            loading.style.opacity = 1;
          })
        }
        bannerList.style.transform = 'rotate('+rot+'deg)';
        bannerList.style.webkitTransform = 'rotate('+rot+'deg)';
        share.style.transform = 'rotate(180deg)';
        share.style.webkitTransform = 'rotate(180deg)';
        localStorage.setItem('rote',rot.toString());
      },
      goAnchor(selector){
        this.showBanner();
        let anchor = document.querySelector(selector)

        let total = anchor.offsetTop;
        let distance = document.documentElement.scrollTop || 
          document.body.scrollTop;
        let step = total / 50;
        
        if(total > distance){
          smoothDown()
        }else{
          let newTotal = distance - total;
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown(){
          if(distance < total){
            distance += step;
            document.body.scrollTop = distance; 
            document.documentElement.scrollTop = distance; 
            setTimeout(smoothDown,10)
          }else{
            document.body.scrollTop = total; 
            document.documentElement.scrollTop = total; 
          }
        }

        function smoothUp(){
          if(distance > total){
            distance -= step;
            document.body.scrollTop = distance; 
            document.documentElement.scrollTop = distance; 
            setTimeout(smoothUp,10)
          }else{
            document.body.scrollTop = total; 
            document.documentElement.scrollTop = total; 
          }
        }
      },
      isPC() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    },
    mounted(){
      let ispc = this.isPC();
      if(ispc){
        this.wapFalse = false;
        window.onresize = () =>{
          // window.location.reload();
        }
      }else{
        this.wapFalse = true;
      }
    }
  }
</script>

<style lang='scss'>
  #app {
    font-family:'Microsoft YaHei';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    overflow-x: scroll;
    .colorbule{
      background: rgba(44,152,236,1);
      border:5px solid #134e87;

    }
    .colorgray{
      background:rgba(143,143,143,1) !important;
      border:5px solid #3e4147;
    }
    .first{
      top: -70px !important;
    }
    #ss_menu {
      left: 50%;
      bottom: 60px;
      width: 64px;
      height: 64px;
      color: #fff;
      position: fixed;
      margin-left: -30px;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      right: 30px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      z-index: 9999;
      transform-origin: center;
      -webkit-transform-origin: center;
      -moz-transform-origin: center;
      -ms-transform-origin: center;
      -o-transform-origin: center;
    }
    #ss_menu > .menu {
      display: block;
      position: absolute;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
    #ss_menu > .menu .share {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
    }
    #ss_menu > .menu .share div{
      width: 54px;
      height: 54px;
      line-height: 54px;
    }
    #ss_menu > div {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
    }
    #ss_menu .list{
      opacity: 0;
    }
    #ss_menu .list > div{
      width: 54px;
      height: 54px;
      line-height: 54px;
      background:rgba(44,152,236,1);
      border-radius: 50%;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
    }
    #ss_menu .list > p{
      font-size: 12px;
      margin: 0 0;
    }
    #ss_menu > div i {
      display: block;
      font-size: 25px;
    }
    #ss_menu .list> div:hover {
      background:rgba(44,152,236,.81);
      cursor: pointer;
    }
    #ss_menu > div:nth-child(1) {
      top: 0px;
      left: -200px;
    }
    #ss_menu >  div:nth-child(2) {
      top: -80.0px;
      left: -148.56406px;
    }
    #ss_menu >  div:nth-child(3) {
      top: -138.56406px;
      left: -80.0px;
    }
    #ss_menu >  div:nth-child(4) {
      top: -160px;
      left: 5px;
    }

    #ss_menu >  div:nth-child(5) {
      top: 0px;
      right: -200px;
    }
    #ss_menu >  div:nth-child(6) {
      top: -80.0px;
      right: -148.56406px;
    }
    #ss_menu >  div:nth-child(7) {
      top: -138.56406px;
      right: -80.0px;
    }
    .loading{
      position: fixed;
      z-index: 999;
      background: rgba(0, 0, 0, .6);
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
    }
    footer{
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      background:rgba(49, 49, 49, .7);
    }
  }
  @media screen and(max-width: 480px){
    #ss_menu{
      display: none;
    }
    #app{
      max-width: 480px !important;
      margin: 0 auto;
    }
  }
</style>
