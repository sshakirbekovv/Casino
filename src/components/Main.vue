<template>
    <div id="main">
    <div class="container">
        <div class="wrapper">
           <header class="header_title"><p class="logo">ZOLOTOE RUNO</p></header>
           <div class="login_pos">
           <form action="" method="">
          <div class="login">
            <p class="title">Войти в кабинет</p>
            <label for="check1" class="enter_login">Введите логин</label>
            <input type="text" class="input_login"/>
            <label for="check1" class="enter_password">Введите пароль</label>
            <input type="password" class="input_password"/>
            <input type="submit" class="enter" value="Вход" @click="$router.push({name: 'output'})"/>
          </div>
           </form>
           </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'main',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rosarivo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rosarivo&display=swap');
#main{
    background: url(../img/roulette.jpg) no-repeat center;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 14, 14, 0.7);
}
.header_title{
    margin-left:39px;
    padding-top: 27px;
    width: 100%;
}
.wrapper{
   max-width: 1440px;
   margin: 0 auto;
}
.logo{
    font-family: Rosarivo;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 39px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    width: 274px;
    height: 39px;
    display: inline;
}
.login{
    background: #FFFFFF;
    border-radius: 15px;
    width: 422px;
    height: 411px;
    margin-top: 183px;
    margin-left: 509px;
}
.title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bolder;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 22px;
    padding-top: 33px;
}
.enter_login{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 25px;
}
.input_login{
    width: 357px;
    height: 56px;
    background: #EDEDED;
    border-radius: 6px;
    border-style:none;
    margin-bottom: 22px;
    margin-top:6px;
    margin-left: 25px;
    font-size: 20px;
    padding-left:0.5rem;
}
.enter_password{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 25px;
    margin-top: 190px;
}
input{ -webkit-appearance: none;}
.input_password{
    width: 357px;
    height: 56px;
    background: #EDEDED;
    border-radius: 6px;
    border-style:none;
    margin-bottom: 30px;
    margin-top:6px;
    margin-left: 25px;
    font-size: 20px;
    padding-left:0.5rem;
}
.enter{
    width: 298px;
    height: 53px;
    background: #5F5F5F;
    border-radius: 8px;
    border-style:none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-left: 54px;
    cursor:pointer;
    display:block;
}
@media (max-height: 800px) and (min-height: 600px){
  .login{
      margin-top: 100px;
      margin-left: 470px;
  }
}
@media (max-height: 599px) and (min-height: 440px){
  .login{
      margin-top: 50px;
      margin-left: 459px;
      width: 308px;
      height: 328px;
  }
  .logo{
      font-size: 20px;
  }
  .input_login, .input_password{
   width: 260.4px;
   height: 39.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:14.5px;
  width: 198.6px;
  height: 40.1px;
  position: relative;
  bottom:12px;
}
.title{
    font-size: 17.5px;
}
}
@media (max-height: 439px) and (min-height: 360px){
   .login{
      margin-top: 0px;
  }
  .logo{
      font-size: 20px;
  }
  .login{
    width: 508px;
    height: 298px;
    position: relative;
    right:80px;
}
  .input_login, .input_password{
   width: 450px;
   height: 39.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:14.5px;
  width: 198.6px;
  height: 30.1px;
  position: relative;
  bottom:12px;
  left:100px;
}
.title{
    font-size: 17.5px;
}
}
@media (max-height: 359px) and (min-height: 250px){
   .login{
      margin-top: 0px;
  }
  .logo{
      font-size: 20px;
  }
  .login{
    width: 408px;
    height: 240px;
}
  .input_login, .input_password{
   width: 350px;
   height: 29.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:14.5px;
  width: 198.6px;
  height: 30.1px;
  position: relative;
  bottom:12px;
  left:50px;
}
.title{
    font-size: 17.5px;
    margin-bottom: 0px;
    padding-top: 0px;
}
}
@media (max-width: 1300px) and (min-width: 1050px){
  .login{
    margin-left: 409px;
}
}
@media (max-width: 1040px) and (min-width: 920px){
  .login{
    margin-left: 309px;
}
}
@media (max-width: 919px) and (min-width: 720px){
  .login{
    margin-left: 200px;
}
}
@media (max-width: 719px) and (min-width: 600px){
  .login{
    margin-left: 160px;
}
}
@media (max-width: 599px) and (min-width: 540px){
  .login{
    margin-left: 110px;
}
}
@media (max-width: 539px) and (min-width: 490px){
  .login{
    margin-left: 65px;
}
}
@media (max-width: 489px) and (min-width: 470px){
  .login{
    margin-left: 33px;
}
}
@media (max-width: 469px) and (min-width: 390px){
  .login{
    margin-left: 50px;
    width: 318px;
    height: 328px;
}
.logo{
  margin-left: 35px;
  font-size:28px;
}
  .input_login, .input_password{
   width: 260.4px;
   height: 39.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:17.5px;
  width: 208.6px;
  height: 37.1px;
}
.title{
    font-size: 17.5px;
}
}
@media (max-width: 380px) and (min-width: 330px){
  .login{
    margin-left: 30px;
    width: 318px;
    height: 328px;
}
.logo{
  margin-left: 15px;
}
  .input_login, .input_password{
   width: 260.4px;
   height: 39.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:17.5px;
  width: 208.6px;
  height: 37.1px;
}
.title{
    font-size: 17.5px;
}
}
@media (max-width: 329px) and (min-width: 300px){
  .login{
    margin-left: 5px;
    width: 308px;
    height: 328px;
    margin-right:5px;
}
.logo{
  margin-left: 0px;
  font-size:25px;
}
  .input_login, .input_password{
   width: 250.4px;
   height: 35.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:17.5px;
  width: 208.6px;
  height: 37.1px;
}
.title{
    font-size: 17.5px;
}
}
@media (max-width: 299px) and (min-width: 150px){
  .login{
    margin-left: 0px;
    width: 304.2px;
    height: 328px;
    margin-right:5px;
}
.logo{
  font-size: 23px;
  margin-right: 10px;
}
  .input_login, .input_password{
   width: 250.4px;
   height: 35.2px;
}
  .enter_login, .enter_password{
    font-size: 14px;
}
.enter{
  font-size:17.5px;
  width: 208.6px;
  height: 37.1px;
}
.title{
    font-size: 17.5px;
}
}
</style>
