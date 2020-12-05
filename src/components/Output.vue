<template>
<div id="output">
  <div class="reload" id="reloader">
  </div>
  <div>
  <header class="header">
     <div class="container">
       <div class="header_body">
         <p class="header_logo">ZOLOTOE RUNO</p>
         <div class="header_burger" id="my"
         @click="clicker(this, this)">
           <span></span>
         </div>
         <nav class="header_menu" id="hello">
           <ul class="header_list">
             <li class="header_link" id="header_sto"><span id="sto">100.000 тг</span></li>
             <li class="header_link" id="header_button"> <input type="button" value="Вывести" id="button" @click="changeWidth()"> </li>
             <li class="header_link" id="name">Момын Орынбаев</li>
             <li class="header_link" id="profile"><img src="../img/avatar.png" alt="mini-profile"></li>
           </ul>
         </nav>
       </div>
     </div>
  </header>
  <div class="content">
     <div class="container">
         <img src="../img/girl_photo.png" alt="img" class="girl_img"  @click="$router.push({name: 'roulette'})">
       <div class="hide_input_parent">
        <div class="hide_input" id="hide_input_id" :style="{ display: computedWidth }">
          <span @click="close()"><img src="../img/exitmodel.png" alt="exit" class="exit"></span>
          <span id="output_word">Вывести на карту №KZ1600643</span><br>
          <small><span id="hide_day">Вывод денег осуществляется в течение 1-2 дня</span></small>
          <input type="text" placeholder="Номер карты" class="input_card"/>
          <input type="text" placeholder="Сумма" class="input_sum"/>
          <input type="submit" value="Вывести" class="button_output">
       </div>
       </div>
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
      display: 'none'
    }
  },
  created: function () {
    window.document.title = 'Output'
  },
  computed: {
    computedWidth () {
      return this.display
    }
  },
  methods: {
    ...mapMutations(['click']),
    clicker (x, v) {
      this.click(x, v)
    },
    changeWidth (event) {
      const a = document.getElementById('reloader')
      this.display = ''
      if (a.className === 'reload') {
        document.getElementById('hide_input_id').style.display = ''
        a.className += ' shadow'
      } else {
        a.className = 'reload'
        document.getElementById('hide_input_id').style.display = 'none'
      }
    },
    close () {
      const a = document.getElementById('reloader')
      document.getElementById('hide_input_id').style.display = 'none'
      a.className = 'reload'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/icon?fam...");
body{
  margin: 0;
  padding: 0;
}
.shadow{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index:999;
}
#output{
    background:#1E2729;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.header{
  position:fixed;
  left:0;
  width: 100%;
  top:0;
  z-index: 50;
}
input{ -webkit-appearance: none;}
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
.girl_img{
  cursor:pointer;
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
    margin-top:10px;
  }
  li:nth-child(2n){
    margin-top:4px;
  }
  li:nth-child(3n){
     margin-top:13px;
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
@media (max-width: 1060px){
  #hide_input_id{
     margin-left:200px;
  }
}
@media (max-width: 885px){
  #hide_input_id{
     margin-left:100px;
  }
}
@media (max-width: 800px){
  #hide_input_id{
     margin-left:80px;
  }
}
@media (max-width: 780px){
  #hide_input_id{
     margin-left:40px;
  }
}
@media (max-width: 480px){
  .header_logo{
    font-size: 15px !important;
  }
  .header_burger{
    width:24px !important;
    height:20px !important;
  }
  #hide_input_id{
     width: 386px;
     height: 320px;
     margin-left:5px;
     margin-top:-322px;
  }
  #output_word{
    font-size:21px !important;
    margin-left: 12px !important;
    margin-top: 2px !important;
  }
  #hide_day{
    font-size: 13px !important;
    margin-left:12px !important;
    margin-top:2px !important;
  }
  .input_card{
    width: 333px !important;
    height: 43px !important;
    margin-top:36px !important;
    margin-left:10px !important;
  }
  .input_sum{
    width: 333px !important;
    height: 43px !important;
    margin-top:16px !important;
    margin-left:10px !important;
  }
  .exit{
    width:15px !important;
    height:15px !important;
    margin-top:11px !important;
  }
  .button_output{
    width: 239px !important;
    height: 47px !important;
    font-size: 20px !important;
    margin-top:29px !important;
    margin-left:75px !important;
  }
  input[placeholder]{
    font-weight: 300 !important;
    font-size: 17px !important;
    line-height: 20px !important;
  }
  .girl_img{
     right:0px !important;
  }
}

@media (max-width: 409px){
  #hide_input_id{
     width: 366px;
     height: 330px;
     margin-left:5px;
     margin-top:-322px;
  }
  #output_word{
    font-size:18px !important;
    margin-left: 12px !important;
    margin-top: 2px !important;
  }
  #hide_day{
    font-size: 13px !important;
    margin-left:12px !important;
    margin-top:2px !important;
  }
  .input_card{
    width: 313px !important;
    height: 43px !important;
    margin-top:36px !important;
    margin-left:10px !important;
  }
  .input_sum{
    width: 313px !important;
    height: 43px !important;
    margin-top:16px !important;
    margin-left:10px !important;
  }
  .exit{
    width:15px !important;
    height:15px !important;
    margin-top:11px !important;
  }
  .button_output{
    width: 239px !important;
    height: 47px !important;
    font-size: 20px !important;
    margin-top:29px !important;
    margin-left:65px !important;
  }
  input[placeholder]{
    font-weight: 300 !important;
    font-size: 17px !important;
    line-height: 20px !important;
  }
}
@media (max-width: 375px){
  #hide_input_id{
     width: 302.4px;
     height: 270px;
     margin-left:30px;
  }
  #output_word{
    font-size:15.1px !important;
    margin-left: 12px !important;
    margin-top: 2px !important;
  }
  #hide_day{
    font-size: 9.9px !important;
    margin-left:12px !important;
    margin-top:2px !important;
  }
  .input_card{
    width: 253.7px !important;
    height: 29.7px !important;
    margin-top:30px !important;
    margin-left:10px !important;
  }
  .input_sum{
    width: 253.7px !important;
    height: 29.7px !important;
    margin-top:16px !important;
    margin-left:10px !important;
  }
  .exit{
    width:16px !important;
    height:16px !important;
    margin-top:11px !important;
  }
  .button_output{
    width: 188.1px !important;
    height: 37.8px !important;
    font-size: 18px !important;
    margin-top:29px !important;
    margin-left:60px !important;
  }
  input[placeholder]{
    font-weight: 300 !important;
    font-size: 15.3px !important;
    line-height: 18px !important;
  }
  #header_button{
    left:140px !important;
  }
  .girl_img{
     right:20px !important;
  }
}
@media (max-width: 330px){
    #hide_input_id{
     width: 302.4px;
     height: 270px;
     margin-left:0px;
  }
  #output_word{
    font-size:15.1px !important;
    margin-left: 12px !important;
    margin-top: 2px !important;
  }
  #hide_day{
    font-size: 9.9px !important;
    margin-left:12px !important;
    margin-top:2px !important;
  }
  .input_card{
    width: 253.7px !important;
    height: 29.7px !important;
    margin-top:30px !important;
    margin-left:10px !important;
  }
  .input_sum{
    width: 253.7px !important;
    height: 29.7px !important;
    margin-top:16px !important;
    margin-left:10px !important;
  }
  .exit{
    width:16px !important;
    height:16px !important;
    margin-top:11px !important;
  }
  .button_output{
    width: 188.1px !important;
    height: 37.8px !important;
    font-size: 18px !important;
    margin-top:29px !important;
    margin-left:60px !important;
  }
  input[placeholder]{
    font-weight: 300 !important;
    font-size: 15.3px !important;
    line-height: 18px !important;
  }
  #header_button{
    left:95px !important;
  }
   .girl_img{
     right:45px !important;
  }
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
  .girl_img{
    width:278px;
    height:325px;
    position: relative;
    right:45px;
    bottom:93px;
  }
  #profile{
    bottom:170px;
  }
  #name{
    left:25px;
    top:-112px;
  }
  #header_button{
     bottom:-7px;
     left:170px;
  }
  #header_sto{
    top:60px;
  }
  .header_line{
    display:block;
  }
}
#sto{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
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
  cursor:pointer;
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
.girl_img{
  margin-left:67px;
  margin-top:135px;
  position: relative;
  z-index:2;
}
.hide_input{
  width: 662px;
  height: 434px;
  background: #FFFFFF;
  border-radius: 12px;
  margin-left:376px;
  margin-top:-242px;
  position: absolute;
  z-index: 999;
}
#output_word{
  font-family: Roboto;
  font-style: normal;
  font-weight: bolder;
  font-size: 33px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin-left:33px;
  display: inline-block;
  margin-top:22px;
}
#hide_day{
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #A2A2A2;
  margin-left:33px;
  margin-top:6px;
}
.input_card{
  width: 576px;
  height: 73px;
  background: #EDEDED;
  border-radius: 5px;
  border-style:none;
  margin-top:22px;
  margin-left:33px;
  color:black;
  font-style: normal;
}
.input_sum{
  width: 576px;
  height: 73px;
  background: #EDEDED;
  border-radius: 5px;
  border-style:none;
  margin-left:33px;
  margin-top:30px;
  color:black;
  font-style: normal;
}
.button_output{
  background: #456088;
  border-radius: 8px;
  width: 390px;
  height: 64px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  border-style:none;
  margin-left:131px;
  margin-top:50px;
}
  input[placeholder] {
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  padding-left:23px;
  }
.hide_input_parent{
  display:flex;
}
.exit{
  width:40px;
  height:40px;
  float:right;
  margin: 18px 10px 0px 0px;
  cursor:pointer;
}
@media (max-height: 800px){
.girl_img{
    width:290px;
    height:324px;
}
.hide_input{
  width: 583px;
  height: 361px;
  margin-top:-262px;
  margin-left:376px;
   }
   .input_card, .input_sum{
     width: 436px;
     height: 55px;
   }
   .button_output{
      width: 333px;
      height: 55px;
      font-size: 28px;
      margin-left:111px;
      margin-top:30px;
   }
   #output_word{
     font-size: 26px;
   }
   input[placeholder]{
     font-size: 27px;
   }
    .exit{
      width:30px;
      height:30px;
      float:right;
      margin: 10px 10px 0px 0px;
      cursor:pointer;
    }
}
</style>
