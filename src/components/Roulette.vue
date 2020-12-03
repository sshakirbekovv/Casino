<template>
<div id="output">
  <div id="wrapperswitch">
    <div class="wrapperswitch_item">
        <img src="../img/rotate.png" alt="switchphone">
        <span class="wrapperswitch_screen">Поверните экран</span>
    </div>
  </div>
  <header class="header">
     <div class="container">
       <div class="header_body">
         <p class="header_logo">ZOLOTOE RUNO</p>
          <div class="balance2">
            <span class="balance2_item1">Баланс</span>
            <span class="balance2_item2">100.000 тг</span>
          </div>
         <div class="header_burger" id="my"
         @click="clicker(this, this)">
           <span></span>
         </div>
         <nav class="header_menu" id="hello">
           <ul class="header_list">
             <li class="header_link" id="summ"><img src="../img/min-profile.png" alt=""><span id="sto">124</span></li>
             <li class="header_link" id="name">Момын Орынбаев</li>
             <li class="header_link" id="profile"><img src="../img/avatar.png" alt="mini-profile"></li>
           </ul>
         </nav>
       </div>
     </div>
  </header>
  <div class="content">
     <div class="container">
       <div class="conatiner_item">
         <div class="img_div" @click="switchphone ()">
          <div class="footer_img_div">
            <span class="ruletka">Рулетка</span>
            <img src="../img/min-profile.png" alt="mini" class="mini_profile">
            <span id="sto" class="sto2">124</span>
          </div>
        </div>
       </div>
       <div class="balance">
         <span class="balance_item1">Баланс</span>
         <p class="balance_item2">100.000 тг</p>
       </div>
     </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      width: null,
      height: null
    }
  },
  created: function () {
    window.document.title = 'Roulette'
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    ...mapMutations(['click']),
    clicker (x, v) {
      this.click(x, v)
    },
    switchphone () {
      if (this.width <= 800) {
        document.getElementById('wrapperswitch').style.display = 'block'
        setTimeout(() => {
          this.$router.push({ name: 'menu' })
        }, 5000)
      } else {
        this.$router.push({ name: 'menu' })
      }
    },
    handleResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/icon?fam...");
#output{
    background:#1E2729;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}
.header{
  position:fixed;
  left:0;
  width: 100%;
  top:0;
  z-index: 50;
}
#wrapperswitch{
   background:#1E2729;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display:none;
    .wrapperswitch_item{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin-top: 120px;
     .wrapperswitch_screen{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding-top: 20px;
     }
    }
}
.header:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index:2;
}
.header_body{
   position: relative;
   display:flex;
   justify-content: space-between;
   height: 85px;
   align-items: center;
}
.container{
  max-width:1440px;
  margin: 0px auto;
  padding: 0px 10px;
}
.header_link{
  color:white;
}
.header_list{
  display:flex;
  position: relative;
  z-index: 2;
  li{
     list-style: none;
     margin-right:38px;
  }
  li:first-child{
    margin-top:17px;
  }
  li:nth-child(2n){
    margin-top:14px;
  }
  li:last-child{
     margin-top:1px;
  }
}
.header_logo{
  font-family: Rosarivo;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 39px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  max-width: 100%;
  position: relative;
  z-index: 3;
  left: 70px;
}
.header_burger{
  display:none;
}
@media (max-width:1025px){
  .header_body{
    height:50px;
  }
  .header_logo{
    font-size:20px;
    left:0;
  }
  .header_burger{
    display:block;
    position: relative;
    width:30px;
    height:20px;
    position: relative;
    z-index: 3;
  }
  .header_burger{
     span{
       position: absolute;
       left:0;
       width:100%;
       height:2px;
       top:9px;
       background: white;
       transition: all 0.3s ease 0s;
     }
  }
  .header_burger:before,.header_burger:after{
    content:'';
    position: absolute;
    background:white;
    width:100%;
    height:2px;
    left:0;
    transition: all 0.3s ease 0s;
  }
  .header_burger:before{
    top:0;
  }
  .header_burger:after{
    bottom:0;
  }
  .header_menu{
    position: fixed;
    top:-100%;
    left:0;
    width:100%;
    height:180px;
    background: black;
    padding: 40px 10px 0px 10px;
  }
  .header_menu.active{
    top: 0;
     transition: all 0.3s ease 0s;
  }
  .header_list{
    display:block;
  }
  .header_list{
    li{
      margin: 0px 0px 20px 0px;
      position:relative;
      right:40px;
    }
    li:first-child{
      margin-top:40px;
    }
  }
  .img_div{
    position: relative;
    right:55px;
    bottom:53px;
    max-width: 371px;
    max-height: 253px;
    /*width: 401px;
    height: 213px;*/
  }
  .footer_img_div{
    max-width: 371px;
  }
  .mini_profile{
   position: relative;
   right:20px;
  }
  .sto2{
   float: right;
   position: relative;
   bottom:22px;
   right:13px;
  }
  .ruletka{
    position: relative;
  }
  #profile{
    position: relative;
    bottom: 30px;
  }
  #name{
    position: relative;
    left: 30px;
    top:27px;
  }
  #summ{
    margin-left:15px;
  }
}
@media (max-width: 480px){
  .balance2{
    display:flex !important;
    z-index:9999;
    flex-direction: column;
  }
  .balance{
    display:none;
  }
  .img_div{
     right:50px;
     max-width: 371px;
     max-height: 253px;
  }
  .footer_img_div{
    max-width: 371px;
    max-height: 37px;
    top: 191px !important;
  }
  .header_burger{
    width:24px !important;
    height:20px !important;
  }
  .header_logo{
    font-size: 15px !important;
  }
  .ruletka {
    font-size: 19px !important;
    line-height: 22px !important;
    margin-left: 15px;
  }
  .mini_profile{
    height: 17px;
    width: 14px;
  }
  #sto{
    font-size: 18px !important;
    line-height: 21px !important;
  }
}
@media (max-width: 400px){
  .img_div{
    right:53px;
    max-width: 341px;
    max-height: 237px;
  }
  .footer_img_div{
    max-width: 341px;
    max-height: 37px;
    top: 184px !important;
  }
  .mini_profile{
   position: relative;
   right:45px;
  }
}
@media (max-width: 355px){
  .balance2{
    display:flex !important;
    z-index:9999;
    flex-direction: column;
    width: 114.3px !important;
    height: 31.5px !important;
  }
  .balance2_item1{
    font-size: 10.8px !important;
    line-height: 11px !important;
    padding: 4px 0px 0px 34px !important;
  }
  .balance2_item2{
    font-size: 11.7px !important;
    line-height: 13px !important;
    padding: 0px 0px 0px 27px i !important;
  }
  .balance{
    display:none;
  }
  .img_div{
    right:56px;
    max-width: 306.9px;
    max-height: 237px;
  }
  .footer_img_div{
    max-width: 306.9px;
    max-height: 37px;
    top: 172px !important;
  }
  .mini_profile{
   position: relative;
   right:0px;
   margin-top: 0px !important;
   bottom: 23px;
   left: 15px;
  }
  .ruletka {
    font-size: 17px !important;
    line-height: 32px !important;
    margin-left: 15px;
  }
  #sto{
    font-size: 18px !important;
    line-height: 21px !important;
  }
}
@media (max-width: 339px){
  .balance2{
    display:flex !important;
    z-index:9999;
    flex-direction: column;
    width: 114.3px !important;
    height: 31.5px !important;
  }
  .balance2_item1{
    font-size: 10.8px !important;
    line-height: 11px !important;
    padding: 4px 0px 0px 34px !important;
  }
  .balance2_item2{
    font-size: 11.7px !important;
    line-height: 13px !important;
    padding: 0px 0px 0px 27px i !important;
  }
  .balance{
    display:none;
  }
  .img_div{
    right:68px;
    max-width: 306.9px;
    max-height: 237px;
  }
  .footer_img_div{
    max-width: 306.9px;
    max-height: 37px;
    top: 172px !important;
  }
  .mini_profile{
   position: relative;
   right:0px;
   margin-top: 0px !important;
   bottom: 22px;
   left: 15px;
   height: 15px;
    width: 12px;
  }
  .ruletka {
    font-size: 17px !important;
    line-height: 32px !important;
    margin-left: 15px;
    position:relative;
    top: 2px;
  }
  #sto{
    font-size: 16px !important;
    line-height: 21px !important;
    bottom: 23px;
  }
}
#sto{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-left: 11px;
}
#button{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: #456088;
  border-radius: 6px;
  width: 167px;
  height: 38px;
  border-style:none;
}
#name{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
}
.header_burger.active:before{
   transform: rotate(45deg);
   top:9px;
}
.header_burger.active:after{
   transform: rotate(-45deg);
   bottom:9px;
}
.header_burger.active span{
   transform: scale(0);
}
.img_div{
  width: 401px;
  height: 237px;
  border-radius: 5px;
  margin-left:66px;
  margin-top:121px;
  background: url(../img/layout.png) no-repeat center;
  cursor:pointer !important;
  background-size: contain;
}
.balance{
  width: 243px;
  height: 67px;
  background: #0C0C0C;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top:448px;
  margin-left:30px;
}
.balance_item1{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-left:75px;
  position: relative;
  top:8px;
}
.balance_item2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #FFD600;
  position: relative;
  bottom: 20px;
  left:52px;
}
.balance2{
  width: 127px;
  height: 35px;
  background: #0C0C0C;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  display:none;
}
.balance2_item1{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 4px 0px 0px 37px;
}
.balance2_item2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #FFD600;
  padding: 0px 0px 0px 27px;
}
.footer_img_div{
  background: rgba(146, 146, 146, 0.87);
  border-radius: 0px 0px 5px 5px;
  width: 401px;
  height: 37px;
  position:relative;
  top: 200px;
}
.ruletka{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-left: 15px;
}
.mini_profile{
  margin-left:222px;
  margin-top:10px;
}
@media (max-height: 1600px) and (min-height: 1330px) {
  .balance{
    margin-top:888px;
  }
}
@media (max-height: 1329px) and (min-height: 1250px) {
  .balance{
    margin-top:788px;
  }
}
@media (max-height: 1249px) and (min-height: 1130px) {
  .balance{
    margin-top:688px;
  }
}
@media (max-height: 1129px) and (min-height: 1101px) {
  .balance{
    margin-top:588px;
  }
}
@media (max-height: 1100px) and (min-height: 1025px) {
  .balance{
    margin-top:588px;
  }
}
@media (max-height: 1024px) and (min-height: 984px) {
  .balance{
    margin-top:548px;
  }
}
@media (max-height: 899px) and (min-height: 844px) {
  .balance{
    margin-top:388px;
  }
}
 @media (max-height: 843px) and (min-height: 803px) {
  .balance{
    margin-top:358px;
  }
}
@media (max-height: 802px) and (min-height: 762px) {
  .balance{
    margin-top:318px;
  }
}
@media (max-height: 761px) and (min-height: 721px) {
  .balance{
    margin-top:278px;
  }
}
@media (max-height: 720px) and (min-height: 661px) {
  .balance{
    margin-top:238px;
  }
}
@media (max-height: 660px){
  .balance{
    margin-top:208px;
  }
}
@media (max-height: 642px){
  .balance{
    margin-top:178px;
  }
}
@media (max-height: 619px){
  .balance{
    margin-top:150px;
  }
}
@media (max-height: 594px){
  .balance{
    margin-top:130px;
  }
}
@media (max-height: 568px){
  .balance2{
    display:flex !important;
    z-index:9999;
    flex-direction: column;
  }
  .balance{
    display:none;
  }
}
</style>
