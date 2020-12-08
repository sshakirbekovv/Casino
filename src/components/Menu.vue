<template>
  <div id="menu">
    <div class="container1">
      <div class="header_wrapper">
         <img src="../img/exit.png" alt="krestik" class="krestik" @click="$router.push({name: 'roulette'})">
         <span class="word_ruletka">Рулетка</span>
         <img src="../img/translation.png" alt="trans" class="trans">
         <span class="word_begin">Идет трансляция</span>
      </div>
      <div class="all_footer">
        <div class="number_points" id="id_number_points">
            <div class="left_number"><span id="left_number_item">9</span></div>
            <div class="middle_number"><span id="middle_number_item">22</span></div>
            <div class="right_number"><span id="right_number_item">18</span></div>
        </div>
        <div class="footer_right" id="footer_right_id">
          <ul class="footer_right_list">
            <li class="back_color"><span class="back_color_pos">18</span></li>
            <li class="footer_right_numbers">11</li>
            <li class="footer_right_numbers">34</li>
            <li class="footer_right_numbers">24</li>
            <li class="footer_right_numbers">22</li>
            <li class="footer_right_numbers">20</li>
            <li class="footer_right_numbers">21</li>
            <li class="footer_right_numbers">33</li>
            <li class="footer_right_numbers">5</li>
            <li class="footer_right_numbers">2</li>
            <li class="footer_right_numbers">9</li>
            <li class="footer_right_numbers">10</li>
          </ul>
          <div class="right_table">
      <svg version="1.1" id="table" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 451 121" style="enable-background:new 0 0 451 121;" xml:space="preserve">
      <g id="item_40_">
      <path id="path_40_" class="st0" d="M429.5,60.5c0,6.4-1.7,12.3-4.7,17.5v0c-1.5,2.7-3.4,5.1-5.6,7.3c-2.1,2.1-4.5,4-7.2,5.5
      c-4.7,2.7-10.1,4.4-15.9,4.7c-0.6,0-1.1,0.1-1.7,0.1h-32c-19.3,0-35-15.7-35-35c0-9.7,3.9-18.4,10.3-24.8
      c6.3-6.3,15.1-10.3,24.8-10.3h32c0.6,0,1.1,0,1.7,0c5.8,0.3,11.2,1.9,15.9,4.7c5.3,3.1,9.7,7.5,12.8,12.8v0
      C427.8,48.2,429.5,54.1,429.5,60.5z"/>
      <text transform="matrix(1 0 0 1 366.9652 65.5325)" class="word_right_table">Zero</text>
      </g>
      <g id="item_39_">
      <path id="path_39_" class="st0" d="M362.5,95.5h-137v-70h137c-9.7,0-18.4,3.9-24.8,10.3c-6.3,6.3-10.3,15.1-10.3,24.8
      C327.5,79.8,343.2,95.5,362.5,95.5z"/>
      <text transform="matrix(1 0 0 1 260.6239 67.0276)" class="word_right_table">Voisins</text>
      </g>
      <g id="item_38_">
     <polygon id="path_38_" class="st0" points="225.5,25.5 225.5,95.5 150.5,95.5 100.5,25.5   "/>
      <text transform="matrix(1 0 0 1 140.7427 67.0276)" class="word_right_table">Orpheling</text>
      </g>
      <g id="item_37_">
      <path id="path_37_" class="st0" d="M150.5,95.5h-94c-0.6,0-1.1,0-1.7-0.1c-5.8-0.3-11.2-1.9-15.9-4.7c-5.3-3.1-9.7-7.5-12.8-12.8v0
      c-3-5.1-4.7-11.1-4.7-17.5c0-6.4,1.7-12.3,4.7-17.5v0c1.5-2.7,3.4-5.1,5.6-7.3c2.1-2.1,4.5-4,7.2-5.5c4.7-2.7,10.1-4.4,15.9-4.7
      c0.6,0,1.1,0,1.7,0h44L150.5,95.5z"/>
      <text transform="matrix(1 0 0 1 63.2071 67.0276)" class="word_right_table"> Tier</text>
      </g>
      <g id="item_36_">
      <rect id="path_36_" x="75.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 83.248 17.0259)" class="st1 st2 st4">33</text>
      </g>
      <g id="item_35_">
      <path id="path_35_" class="st0" d="M75.5,0.5v25h-19c-0.6,0-1.1,0-1.7,0L53.6,0.9c2.3-0.3,4.5-0.4,6.9-0.4H75.5z"/>
      <text transform="matrix(1 0 0 1 59.813 17.0511)" class="st5 st2 st4">16</text>
      </g>
      <g id="item_34_">
      <path id="path_34_" class="st0" d="M54.8,25.5c-5.8,0.3-11.2,1.9-15.9,4.7L28.4,12l-0.9-1.6C35.1,5.3,44,2,53.6,0.9L54.8,25.5z"/>
      <text transform="matrix(1 0 0 1 38.7641 18.5861)" class="st1 st2 st4">24</text>
      </g>
      <g id="item_33_">
      <path id="path_33_" class="st0" d="M39,30.2c-2.6,1.5-5,3.4-7.2,5.5c-2.2,2.2-4,4.6-5.6,7.3L8,32.5l-0.4-0.3
      c2.8-5.3,6.4-10,10.5-14.2c2.9-2.9,6-5.4,9.4-7.6l0.9,1.6L39,30.2z"/>
      <text transform="matrix(1 0 0 1 20.864 30.7511)" class="st5 st2 st4">5</text>
      </g>
      <g id="item_32_">
      <path id="path_32_" class="st0" d="M26.2,43c-3,5.1-4.7,11.1-4.7,17.5h-21c0-10.2,2.5-19.8,7-28.2L8,32.5L26.2,43z"/>
      <text transform="matrix(1 0 0 1 5.9689 52.4212)" class="st1 st2 st4">10</text>
      </g>
      <g id="item_31_">
      <path id="path_31_" class="st0" d="M26.2,78L8,88.4l-0.4,0.3c-4.5-8.4-7-18-7-28.2h21C21.5,66.9,23.2,72.8,26.2,78z"/>
      <text transform="matrix(1 0 0 1 6.9689 76.631)" class="st5 st2 st4">23</text>
      </g>
      <g id="item_30_">
      <path id="path_30_" class="st0" d="M39,90.8l-10.6,18.2l-0.9,1.6c-8.3-5.5-15.2-13-19.9-21.9L8,88.4L26.2,78
      C29.3,83.3,33.7,87.7,39,90.8z"/>
      <text transform="matrix(1 0 0 1 20.864 98.3011)" class="st1 st2 st4">8</text>
      </g>
      <g id="item_29_">
      <path id="path_29_" class="st0" d="M54.8,95.4l-1.2,24.7c-9.6-1.1-18.5-4.5-26.2-9.5l0.9-1.6L39,90.8
      C43.7,93.5,49.1,95.2,54.8,95.4z"/>
      <text transform="matrix(1 0 0 1 37.764 109.4661)" class="st5 st2 st4">30</text>
      </g>
      <g id="item_28_">
      <path id="path_28_" class="st0" d="M75.5,95.5v25h-15c-2.3,0-4.6-0.1-6.9-0.4l1.2-24.7c0.6,0,1.1,0.1,1.7,0.1H75.5z"/>
      <text transform="matrix(1 0 0 1 59.813 112.0007)" class="st1 st2 st4">11</text>
      </g>
      <g id="item_27_">
      <rect id="path_27_" x="75.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 83.248 112.0261)" class="st5 st2 st4">36</text>
      </g>
      <g id="item_26_">
      <rect id="path_26_" x="100.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 108.248 112.0261)" class="st1 st2 st4">13</text>
      </g>
      <g id="item_25_">
      <rect id="path_25_" x="125.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 133.248 112.0264)" class="st5 st2 st4">27</text>
      </g>
      <g id="item_24_">
      <rect id="path_24_" x="150.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 160.6239 112.0261)" class="st1 st2 st4">6</text>
      </g>
      <g id="item_23_">
      <rect id="path_23_" x="175.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 183.248 112.0264)" class="st5 st2 st4">34</text>
      </g>
      <g id="item_22_">
      <rect id="path_22_" x="200.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 208.248 112.0264)" class="st1 st2 st4">17</text>
      </g>
      <g id="item_21_">
      <rect id="path_21_" x="225.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 233.248 112.0264)" class="st5 st2 st4">25</text>
      </g>
      <g id="item_20_">
      <rect id="path_20_" x="250.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 260.6239 112.0261)" class="st1 st2 st4">2</text>
      </g>
      <g id="item_19_">
      <rect id="path_19_" x="275.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 283.248 112.0264)" class="st5 st2 st4">21</text>
      </g>
      <g id="item_18_">
      <rect id="path_18_" x="300.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 310.6239 112.0264)" class="st1 st2 st4">4</text>
      </g>
      <g id="item_17_">
      <rect id="path_17_" x="325.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 333.248 112.0264)" class="st5 st2 st4">19</text>
      </g>
      <g id="item_16_">
      <rect id="path_16_" x="350.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 357.248 112.0264)" class="st1 st2 st4">15</text>
      </g>
      <g id="item_15_">
      <path id="path_15_" class="st0" d="M397.4,120.1c-2.3,0.3-4.5,0.4-6.9,0.4h-15v-25h19c0.6,0,1.1,0,1.7-0.1L397.4,120.1z"/>
      <text transform="matrix(1 0 0 1 380.6834 112.0007)" class="st5 st2 st4">32</text>
      </g>
      <g id="item_14_">
      <path id="path_14_" class="st0" d="M443.5,88.7c-2.8,5.3-6.4,10-10.5,14.2c-2.9,2.9-6,5.4-9.4,7.6c-7.7,5.1-16.6,8.4-26.2,9.5
      l-1.2-24.7c5.8-0.3,11.2-1.9,15.9-4.7c2.6-1.5,5-3.4,7.2-5.5c2.2-2.2,4-4.6,5.6-7.3L443,88.4L443.5,88.7z"/>
      <text transform="matrix(1 0 0 1 416.4443 104.0659)" class="st6 st2 st4">0</text>
      </g>
      <g id="item">
      <path id="path_13_" class="st0" d="M450.5,60.5c0,10.2-2.5,19.8-7,28.2l-0.4-0.3L424.8,78c3-5.1,4.7-11.1,4.7-17.5
      c0-6.4-1.7-12.3-4.7-17.5L443,32.5l0.4-0.3C448,40.7,450.5,50.3,450.5,60.5z"/>
      <text transform="matrix(1 0 0 1 433.9034 64.5257)" class="st1 st2 st4">26</text>
      </g>
      <g id="item_1_">
      <path id="path_12_" class="st0" d="M443.5,32.3l-0.4,0.3L424.8,43c-3.1-5.3-7.5-9.7-12.8-12.8c-4.7-2.7-10.1-4.4-15.9-4.7l1.2-24.7
      c9.6,1.1,18.5,4.5,26.2,9.5C431.9,15.9,438.8,23.4,443.5,32.3z"/>
      <text transform="matrix(1 0 0 1 416.4435 24.9856)" class="st5 st2 st4">3</text>
      </g>
      <g id="item_13_">
      <path id="path_11_" class="st0" d="M397.4,0.9l-1.2,24.7c-0.6,0-1.1,0-1.7,0h-19v-25h15C392.8,0.5,395.1,0.6,397.4,0.9z"/>
      <text transform="matrix(1 0 0 1 380.6834 17.0511)" class="st1 st2 st4">35</text>
      </g>
      <g id="item_12_">
      <rect id="path_10_" x="350.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 358.248 17.0259)" class="st5 st2 st4">12</text>
      </g>
      <g id="item_11_">
      <rect id="path_9_" x="325.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 333.248 17.0259)" class="st1 st2 st4">28</text>
      </g>
      <g id="item_10_">
      <rect id="path_8_" x="300.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 310.6239 17.0259)" class="st5 st2 st4">7</text>
      </g>
      <g id="item_9_">
      <rect id="path_7_" x="275.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 283.248 17.0261)" class="st1 st2 st4">29</text>
      </g>
      <g id="item_8_">
      <rect id="path_6_" x="250.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 258.248 17.0259)" class="st5 st2 st4">18</text>
      </g>
      <g id="item_7_">
      <rect id="path_5_" x="225.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 233.248 17.0261)" class="st1 st2 st4">22</text>
      </g>
      <g id="item_6_">
      <rect id="path_4_" x="200.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 210.6239 17.0261)" class="st5 st2 st4">9</text>
      </g>
      <g id="item_5_">
      <rect id="path_3_" x="175.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 183.248 17.0261)" class="st1 st2 st4">31</text>
      </g>
      <g id="item_4_">
      <rect id="path_2_" x="150.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 158.248 17.0261)" class="st5 st2 st4">14</text>
      </g>
      <g id="item_3_">
      <rect id="path_1_" x="125.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 133.248 17.0259)" class="st1 st2 st4">20</text>
      </g>
      <g id="item_2_">
      <rect id="path" x="100.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 110.624 17.0259)" class="st5 st2 st4">1</text>
      </g>
      </svg>
          </div>
        </div>
       <div class="footer_left" id="footer_left_id">
         <span class="footer_left_item1">Ставка<span class="stavka">10000</span></span>
         <hr class="linear1">
         <br>
         <span class="footer_left_item2">Выйгрыш<span class="win">50000</span></span>
         <hr class="linear1">
         <!-- <span class="footer_left_item1">ZOLOTOE RUNO</span><br> -->
          <!--<span class="footer_left_item2">Рулетка</span> -->
        <ul class="hr1" id="hr1">
          <li><div class="cancel new"></div>
          <li><div class="points add" id="first"><span id="twos">50</span></div></li>
          <li><div class="points add" id="second"><span id="threes">100</span></div></li>
          <li><div class="points add" id="third"><span id="threes">500</span></div></li>
          <li><div id="double" class="new"></div></li>
          <li><div class="points add" id="fourth"><span id="fours">2000</span></div></li>
          <li><div class="points add" id="fifth"><span id="fours">5000</span></div></li>
          <li><div class="points add" id="last"><span id="fives">10000</span></div></li>
        </ul>
          <div class="footer_hide_cl" id="footer_hide" @click="changepos ()">
             <div class="footer_hide_inner_cl" id="footer_hide_inner">
             </div>
          </div>
         <div class="footer_left_item">
           <span class="balance_item1">Баланс</span><br>
          <span class="balance_item2">100.000 тг</span>
         </div>
      </div>
    <div class="middle_footer" id="middle_footer_id">
    <div id="green" @click="changecolor ()">
      <span class="text" id="textt">Делайте ваши ставки</span>
      </div>
       <div class="footer_right_2" id="footer_right_2_id" v-if="isShow2">
          <ul class="footer_right_list">
            <li class="back_color"><span class="back_color_pos">18</span></li>
            <li class="footer_right_numbers">11</li>
            <li class="footer_right_numbers">34</li>
            <li class="footer_right_numbers">24</li>
            <li class="footer_right_numbers">22</li>
            <li class="footer_right_numbers">20</li>
            <li class="footer_right_numbers">21</li>
            <li class="footer_right_numbers">33</li>
            <li class="footer_right_numbers">5</li>
            <li class="footer_right_numbers">2</li>
            <li class="footer_right_numbers">9</li>
            <li class="footer_right_numbers">10</li>
          </ul>
          <div class="right_table_2">
      <svg version="1.1" id="table" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 451 121" style="enable-background:new 0 0 451 121;" xml:space="preserve">
      <g id="item_40_">
      <path id="path_40_" class="st0" d="M429.5,60.5c0,6.4-1.7,12.3-4.7,17.5v0c-1.5,2.7-3.4,5.1-5.6,7.3c-2.1,2.1-4.5,4-7.2,5.5
      c-4.7,2.7-10.1,4.4-15.9,4.7c-0.6,0-1.1,0.1-1.7,0.1h-32c-19.3,0-35-15.7-35-35c0-9.7,3.9-18.4,10.3-24.8
      c6.3-6.3,15.1-10.3,24.8-10.3h32c0.6,0,1.1,0,1.7,0c5.8,0.3,11.2,1.9,15.9,4.7c5.3,3.1,9.7,7.5,12.8,12.8v0
      C427.8,48.2,429.5,54.1,429.5,60.5z"/>
      <text transform="matrix(1 0 0 1 366.9652 65.5325)" class="word_right_table">Zero</text>
      </g>
      <g id="item_39_">
      <path id="path_39_" class="st0" d="M362.5,95.5h-137v-70h137c-9.7,0-18.4,3.9-24.8,10.3c-6.3,6.3-10.3,15.1-10.3,24.8
      C327.5,79.8,343.2,95.5,362.5,95.5z"/>
      <text transform="matrix(1 0 0 1 260.6239 67.0276)" class="word_right_table">Voisins</text>
      </g>
      <g id="item_38_">
     <polygon id="path_38_" class="st0" points="225.5,25.5 225.5,95.5 150.5,95.5 100.5,25.5   "/>
      <text transform="matrix(1 0 0 1 140.7427 67.0276)" class="word_right_table">Orpheling</text>
      </g>
      <g id="item_37_">
      <path id="path_37_" class="st0" d="M150.5,95.5h-94c-0.6,0-1.1,0-1.7-0.1c-5.8-0.3-11.2-1.9-15.9-4.7c-5.3-3.1-9.7-7.5-12.8-12.8v0
      c-3-5.1-4.7-11.1-4.7-17.5c0-6.4,1.7-12.3,4.7-17.5v0c1.5-2.7,3.4-5.1,5.6-7.3c2.1-2.1,4.5-4,7.2-5.5c4.7-2.7,10.1-4.4,15.9-4.7
      c0.6,0,1.1,0,1.7,0h44L150.5,95.5z"/>
      <text transform="matrix(1 0 0 1 63.2071 67.0276)" class="word_right_table"> Tier</text>
      </g>
      <g id="item_36_">
      <rect id="path_36_" x="75.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 83.248 17.0259)" class="st1 st2 st4">33</text>
      </g>
      <g id="item_35_">
      <path id="path_35_" class="st0" d="M75.5,0.5v25h-19c-0.6,0-1.1,0-1.7,0L53.6,0.9c2.3-0.3,4.5-0.4,6.9-0.4H75.5z"/>
      <text transform="matrix(1 0 0 1 59.813 17.0511)" class="st5 st2 st4">16</text>
      </g>
      <g id="item_34_">
      <path id="path_34_" class="st0" d="M54.8,25.5c-5.8,0.3-11.2,1.9-15.9,4.7L28.4,12l-0.9-1.6C35.1,5.3,44,2,53.6,0.9L54.8,25.5z"/>
      <text transform="matrix(1 0 0 1 38.7641 18.5861)" class="st1 st2 st4">24</text>
      </g>
      <g id="item_33_">
      <path id="path_33_" class="st0" d="M39,30.2c-2.6,1.5-5,3.4-7.2,5.5c-2.2,2.2-4,4.6-5.6,7.3L8,32.5l-0.4-0.3
      c2.8-5.3,6.4-10,10.5-14.2c2.9-2.9,6-5.4,9.4-7.6l0.9,1.6L39,30.2z"/>
      <text transform="matrix(1 0 0 1 20.864 30.7511)" class="st5 st2 st4">5</text>
      </g>
      <g id="item_32_">
      <path id="path_32_" class="st0" d="M26.2,43c-3,5.1-4.7,11.1-4.7,17.5h-21c0-10.2,2.5-19.8,7-28.2L8,32.5L26.2,43z"/>
      <text transform="matrix(1 0 0 1 5.9689 52.4212)" class="st1 st2 st4">10</text>
      </g>
      <g id="item_31_">
      <path id="path_31_" class="st0" d="M26.2,78L8,88.4l-0.4,0.3c-4.5-8.4-7-18-7-28.2h21C21.5,66.9,23.2,72.8,26.2,78z"/>
      <text transform="matrix(1 0 0 1 6.9689 76.631)" class="st5 st2 st4">23</text>
      </g>
      <g id="item_30_">
      <path id="path_30_" class="st0" d="M39,90.8l-10.6,18.2l-0.9,1.6c-8.3-5.5-15.2-13-19.9-21.9L8,88.4L26.2,78
      C29.3,83.3,33.7,87.7,39,90.8z"/>
      <text transform="matrix(1 0 0 1 20.864 98.3011)" class="st1 st2 st4">8</text>
      </g>
      <g id="item_29_">
      <path id="path_29_" class="st0" d="M54.8,95.4l-1.2,24.7c-9.6-1.1-18.5-4.5-26.2-9.5l0.9-1.6L39,90.8
      C43.7,93.5,49.1,95.2,54.8,95.4z"/>
      <text transform="matrix(1 0 0 1 37.764 109.4661)" class="st5 st2 st4">30</text>
      </g>
      <g id="item_28_">
      <path id="path_28_" class="st0" d="M75.5,95.5v25h-15c-2.3,0-4.6-0.1-6.9-0.4l1.2-24.7c0.6,0,1.1,0.1,1.7,0.1H75.5z"/>
      <text transform="matrix(1 0 0 1 59.813 112.0007)" class="st1 st2 st4">11</text>
      </g>
      <g id="item_27_">
      <rect id="path_27_" x="75.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 83.248 112.0261)" class="st5 st2 st4">36</text>
      </g>
      <g id="item_26_">
      <rect id="path_26_" x="100.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 108.248 112.0261)" class="st1 st2 st4">13</text>
      </g>
      <g id="item_25_">
      <rect id="path_25_" x="125.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 133.248 112.0264)" class="st5 st2 st4">27</text>
      </g>
      <g id="item_24_">
      <rect id="path_24_" x="150.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 160.6239 112.0261)" class="st1 st2 st4">6</text>
      </g>
      <g id="item_23_">
      <rect id="path_23_" x="175.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 183.248 112.0264)" class="st5 st2 st4">34</text>
      </g>
      <g id="item_22_">
      <rect id="path_22_" x="200.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 208.248 112.0264)" class="st1 st2 st4">17</text>
      </g>
      <g id="item_21_">
      <rect id="path_21_" x="225.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 233.248 112.0264)" class="st5 st2 st4">25</text>
      </g>
      <g id="item_20_">
      <rect id="path_20_" x="250.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 260.6239 112.0261)" class="st1 st2 st4">2</text>
      </g>
      <g id="item_19_">
      <rect id="path_19_" x="275.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 283.248 112.0264)" class="st5 st2 st4">21</text>
      </g>
      <g id="item_18_">
      <rect id="path_18_" x="300.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 310.6239 112.0264)" class="st1 st2 st4">4</text>
      </g>
      <g id="item_17_">
      <rect id="path_17_" x="325.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 333.248 112.0264)" class="st5 st2 st4">19</text>
      </g>
      <g id="item_16_">
      <rect id="path_16_" x="350.5" y="95.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 357.248 112.0264)" class="st1 st2 st4">15</text>
      </g>
      <g id="item_15_">
      <path id="path_15_" class="st0" d="M397.4,120.1c-2.3,0.3-4.5,0.4-6.9,0.4h-15v-25h19c0.6,0,1.1,0,1.7-0.1L397.4,120.1z"/>
      <text transform="matrix(1 0 0 1 380.6834 112.0007)" class="st5 st2 st4">32</text>
      </g>
      <g id="item_14_">
      <path id="path_14_" class="st0" d="M443.5,88.7c-2.8,5.3-6.4,10-10.5,14.2c-2.9,2.9-6,5.4-9.4,7.6c-7.7,5.1-16.6,8.4-26.2,9.5
      l-1.2-24.7c5.8-0.3,11.2-1.9,15.9-4.7c2.6-1.5,5-3.4,7.2-5.5c2.2-2.2,4-4.6,5.6-7.3L443,88.4L443.5,88.7z"/>
      <text transform="matrix(1 0 0 1 416.4443 104.0659)" class="st6 st2 st4">0</text>
      </g>
      <g id="item">
      <path id="path_13_" class="st0" d="M450.5,60.5c0,10.2-2.5,19.8-7,28.2l-0.4-0.3L424.8,78c3-5.1,4.7-11.1,4.7-17.5
      c0-6.4-1.7-12.3-4.7-17.5L443,32.5l0.4-0.3C448,40.7,450.5,50.3,450.5,60.5z"/>
      <text transform="matrix(1 0 0 1 433.9034 64.5257)" class="st1 st2 st4">26</text>
      </g>
      <g id="item_1_">
      <path id="path_12_" class="st0" d="M443.5,32.3l-0.4,0.3L424.8,43c-3.1-5.3-7.5-9.7-12.8-12.8c-4.7-2.7-10.1-4.4-15.9-4.7l1.2-24.7
      c9.6,1.1,18.5,4.5,26.2,9.5C431.9,15.9,438.8,23.4,443.5,32.3z"/>
      <text transform="matrix(1 0 0 1 416.4435 24.9856)" class="st5 st2 st4">3</text>
      </g>
      <g id="item_13_">
      <path id="path_11_" class="st0" d="M397.4,0.9l-1.2,24.7c-0.6,0-1.1,0-1.7,0h-19v-25h15C392.8,0.5,395.1,0.6,397.4,0.9z"/>
      <text transform="matrix(1 0 0 1 380.6834 17.0511)" class="st1 st2 st4">35</text>
      </g>
      <g id="item_12_">
      <rect id="path_10_" x="350.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 358.248 17.0259)" class="st5 st2 st4">12</text>
      </g>
      <g id="item_11_">
      <rect id="path_9_" x="325.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 333.248 17.0259)" class="st1 st2 st4">28</text>
      </g>
      <g id="item_10_">
      <rect id="path_8_" x="300.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 310.6239 17.0259)" class="st5 st2 st4">7</text>
      </g>
      <g id="item_9_">
      <rect id="path_7_" x="275.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 283.248 17.0261)" class="st1 st2 st4">29</text>
      </g>
      <g id="item_8_">
      <rect id="path_6_" x="250.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 258.248 17.0259)" class="st5 st2 st4">18</text>
      </g>
      <g id="item_7_">
      <rect id="path_5_" x="225.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 233.248 17.0261)" class="st1 st2 st4">22</text>
      </g>
      <g id="item_6_">
      <rect id="path_4_" x="200.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 210.6239 17.0261)" class="st5 st2 st4">9</text>
      </g>
      <g id="item_5_">
      <rect id="path_3_" x="175.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 183.248 17.0261)" class="st1 st2 st4">31</text>
      </g>
      <g id="item_4_">
      <rect id="path_2_" x="150.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 158.248 17.0261)" class="st5 st2 st4">14</text>
      </g>
      <g id="item_3_">
      <rect id="path_1_" x="125.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 133.248 17.0259)" class="st1 st2 st4">20</text>
      </g>
      <g id="item_2_">
      <rect id="path" x="100.5" y="0.5" class="st0" width="25" height="25"/>
      <text transform="matrix(1 0 0 1 110.624 17.0259)" class="st5 st2 st4">1</text>
      </g>
      </svg>
          </div>
        </div>
       <div class="table" id="all_table" v-if="!isShow1">
      <div class="green_img" id="green_img_id">
         <p class="green_img_item">0</p>
      </div>
      <table class="main_table" id="main_table_id">
    <tr>
        <td class="red">3</td>
        <td class="black">6</td>
        <td class="red">9</td>
        <td class="red">12</td>
        <td class="black">15</td>
        <td class="red">18</td>
        <td class="red">21</td>
        <td class="black">24</td>
        <td class="red">27</td>
        <td class="red">30</td>
        <td class="black">33</td>
        <td class="red">36</td>
        <td>2<sup><small>TO</small></sup>1</td>
    </tr>
    <tr>
        <td class="black">2</td>
        <td class="red">5</td>
        <td class="black">8</td>
        <td class="black">11</td>
        <td class="red">14</td>
        <td class="black">17</td>
        <td class="black">20</td>
        <td class="red">23</td>
        <td class="black">26</td>
        <td class="black">29</td>
        <td class="red">32</td>
        <td class="black">35</td>
        <td>2<sup><small>TO</small></sup>1</td>
    </tr>
    <tr>
        <td class="red">1</td>
        <td class="black">4</td>
        <td class="red">7</td>
        <td class="black">10</td>
        <td class="black">13</td>
        <td class="red">16</td>
        <td class="red">19</td>
        <td class="black numbertt_parent" @click="putnumber ()" ><span id="numbertt"></span>22</td>
        <td class="red">25</td>
        <td class="black">28</td>
        <td class="black">31</td>
        <td class="red">34</td>
        <td>2<sup><small>TO</small></sup>1</td>
    </tr>
    <tr>
        <td colspan="4">1<sup><small>ST</small></sup>12</td>
        <td colspan="4">2<sup><small>ND</small></sup>12</td>
        <td colspan="4">3<sup><small>RD</small></sup>12</td>
    </tr>
    <tr>
        <td colspan="2">1-18</td>
        <td colspan="2">EVEN</td>
        <td colspan="2"><img class="vec" src="../img/redvec.png" alt=""></td>
        <td colspan="2"><img class="vec" src="../img/blackvec.png" alt=""></td>
        <td colspan="2">ODD</td>
        <td colspan="2">19-36</td>
    </tr>
</table>
    <ul class="hr" id="hr">
        <li><div class="cancel"></div></li>
        <li><div class="points" id="first"><span id="twos">50</span></div></li>
        <li><div class="points" id="second"><span id="threes">100</span></div></li>
        <li><div class="points" id="third"><span id="threes">500</span></div></li>
        <li><div class="points" id="fourth"><span id="fours">2000</span></div></li>
        <li><div class="points" id="fifth"><span id="fours">5000</span></div></li>
        <li><div class="points" id="last"><span id="fives">10000</span></div></li>
        <li><div id="double"></div></li>
    </ul>
    </div>
     </div>
    </div>
     </div>
    </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      width: null,
      isShow1: false,
      isShow2: false
    }
  },
  created: function () {
    window.document.title = 'Menu'
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    changecolor () {
      const points = document.getElementById('id_number_points')
      const colour = document.getElementById('green')
      colour.style.background = 'red'
      const heigh = document.getElementById('all_table')
      const text = document.getElementById('textt')
      text.innerHTML = 'Ставки приостановлены'
      const hide = document.getElementById('hr')
      heigh.style.height = '287px'
      hide.style.display = 'none'
      if (text.innerHTML === 'Ставки приостановлены') {
        points.style.display = 'none'
      }
      if (this.width <= 1250) {
        /* heigh.style.height = '0px' */
        heigh.style.display = 'none'
        colour.style.height = '66px'
        text.style.fontSize = '20px'
        text.style.marginTop = '24px'
        /* heigh.style.transition = 'all 2s' */
      }
    },
    putnumber () {
      const text = document.getElementById('textt')
      const colour = document.getElementById('green')
      const points = document.getElementById('id_number_points')
      const heigh = document.getElementById('all_table')
      colour.style.background = '#363636'
      text.innerHTML = '22 черный'
      points.style.display = 'block'
      colour.style.marginTop = '-15px'
      /*  number.style.background = 'black url("../img/ball.svg") no-repeat center' */
      if (this.width <= 1250) {
        colour.style.height = '66px'
        heigh.style.display = 'none'
        text.style.fontSize = '20px'
        text.style.marginTop = '24px'
        points.style.top = '3rem'
        points.style.right = '3rem'
      }
    },
    handleResize () {
      this.width = window.innerWidth
    },
    changepos () {
      this.isShow1 = !this.isShow1
      this.isShow2 = !this.isShow2
      if (document.getElementById('footer_hide').className === 'footer_hide_cl') {
        document.getElementById('footer_hide').className += ' otherside1'
        // document.getElementById('footer_hide_inner').className += ' otherside2'
      } else {
        document.getElementById('footer_hide').className = 'footer_hide_cl'
        // document.getElementById('footer_hide_inner').className = 'footer_hide_inner_cl'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#menu{
    background: url(../img/new_roulette.jpg) no-repeat center;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container1{
  max-width:1440px;
  margin: 0 auto;
}
.table{
  background: rgba(16, 16, 16, 0.62);
  border: 1px solid #969696;
  box-sizing: border-box;
  width: 744px;
  height: 347px;
  margin-left:346px;
  transition: all 0.5s ease 0s;
}
.krestik{
  margin-left:31px;
  margin-top:30px;
  cursor:pointer;
}
.word_ruletka{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left:35px;
  position: relative;
  bottom:12px;
}
.add{
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
.new{
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
.stavka{
 padding-left: 13rem;
}
.win{
  padding-left: 11.8rem;
}
.otherside1{
  background:#EEEEEE;
}
.otherside2{
  mix-blend-mode: normal;
  border: 2px dashed #000000;
  box-sizing: border-box;
  width: 48px;
  height: 20px;
  border-radius:35%;
  margin-top: 20px;
  margin-left:6px;
}
.footer_left{
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid #969696;
  box-sizing: border-box;
  width: 347px;
  height: 174px;
  // position:relative;
  // top:388px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.middle_footer{
  position: absolute;
  bottom: 0;
}
.footer_hide_cl{
  display:none;
  width: 62px;
  height: 62px;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius:50%;
  .footer_hide_inner_cl{
    mix-blend-mode: normal;
    border: 2px dashed #C4C4C4;
    box-sizing: border-box;
    width: 48px;
    height: 20px;
    border-radius:35%;
    margin-top: 20px;
    margin-left:6px;
  }
}
.footer_right_2{
  width: 596px;
  height: 237px;
  background: #101010;
  .right_table_2{
    width: 534px;
    height: 135px;
    margin-left: 33px;
    position:relative;
    bottom:9px;
  }
}
.word_begin{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
  margin-left:15px;
  position: relative;
  bottom:20px;
}
.footer_left_item{
  background: #0C0C0C;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  width: 216px;
  height: 48px;
  margin-top:16px;
  margin-left:67px;
}
.balance_item1{
    /*width: 59px;
    height: 16px;*/
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top:6px;
    display: inline-block;
    margin-left:79px;
}
.balance_item2{
  /*width: 115px;
  height: 21px;*/
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFD600;
  margin-left:54px;
}
.footer_left_item1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-top:10px;
  display: inline-block;
  margin-left:10px;
}
.footer_left_item2{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left:10px;
}
#green{
  width: 744px;
  height: 42px;
  background: #568C3E;
  margin-left:346px;
  cursor:pointer;
  text-align:center;
}
.text{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top:11px;
  display: inline-block;
}
.main_table {
  width: 591px;
  height: 242px;
  border: 1px solid #969696;
  border-style:none;
  border-spacing: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-left: 85px;
  position: relative;
  top: 10px;
  table-layout: fixed;
  td {
    width: 2%;
    border: 1px solid #969696;
    sup{
      font-size: 10px;
    }
  }
  .red{
      background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), #BD0000;
    }
    .black{
      background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%), #000000;
    }
}
.green_img{
  background: url(../img/green.png) no-repeat center;
  float: left;
  margin-top: 10px;
  width: 61px;
  height: 140px;
  margin-left: 30px;
  margin-right: 0px;
}
.green_img_item{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top:56px;
  margin-left:15px;
}
/*.table_paret{
  display:flex;
}*/
.trans{
  margin-left:899px;
  position: relative;
  bottom:9px;
}
.footer_right{
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid #969696;
  box-sizing: border-box;
  width: 353px;
  height: 195px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.cancel{
  background: url(../img/cancel.svg);
  width: 44px;
  height: 44px;
}
#first{
  background: url(../img/first.svg);
  width: 44px;
  height: 44px;
}
#second{
  background: url(../img/second.svg);
  width: 44px;
  height: 44px;
}
#third{
  background: url(../img/third.svg);
  width: 44px;
  height: 44px;
}
#fourth{
  background: url(../img/fourth.svg);
  width: 44px;
  height: 44px;
}
#fifth{
  background: url(../img/fifth.svg);
  width: 44px;
  height: 44px;
}
#last{
  background: url(../img/last.svg);
  width: 44px;
  height: 44px;
}
ul{
  li{
    list-style: none;
  }
}
ul.hr{
   margin: 0;
   padding: 0px 2px 2px 80px;
   .cancel{
     background-size: contain !important;
     background-repeat: no-repeat !important;
     height: 57px;
   }
    #double{
     background-size: contain !important;
     background-repeat: no-repeat !important;
     width: 57px;
     height: 57px;
   }
}
ul.hr{
    li{
    display: inline-block;
    margin-right: 31px;
    }
    li:last-child{
      margin-right: 0px;
      position: relative;
      top:29px;
    }
     li:nth-child(1){
      position: relative;
      top:30px;
    }
 }

 ul.hr1{
   display:none;
   margin: 0;
   padding: 0px 2px 2px 80px;
}
ul.hr1{
    li{
    display: inline-block;
    margin-right: 31px;
    }
    li:last-child{
      margin-right: 0px;
      position: relative;
      top:29px;
    }
     li:nth-child(1){
      position: relative;
      top:30px;
    }
 }
#double{
  background: url(../img/X2.svg);
  width: 44px;
  height: 44px;
}
.points{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  display:flex;
}
#ones{
  margin-top:14px;
  margin-left:18px;
}
#twos{
  margin-top:14px;
  margin-left:14px;
}
#threes{
  margin-top:14px;
  margin-left:11px;
  font-size: 13px;
}
#fours{
  margin-top:14px;
  margin-left:8px;
  font-size: 12px;
}
#fives{
  margin-top:14px;
  margin-left:5px;
  font-size: 12px;
}
.right_table{
  width: 327px;
  height: 83px;
  margin-left: 10px;
}
.little_number{
  margin:3px;
}
#numbertt{
  background-image: url('../img/ball.svg');
  width: 2.5rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: block;
  position: absolute;
}
.numbertt_parent {
  position: relative;
}
.number_points>div{
    display: inline-block;
}
.number_points{
  text-align: center;
  position: relative;
  top:5rem;
  display: none;
.middle_number{
  width: 98px;
  height: 74px;
  background: url('../img/trapezoid.svg') no-repeat center;
  text-align: center;
   #middle_number_item{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 47px;
    color: #FFFFFF;
    position: relative;
    top:14px;
  }
}
.left_number{
  background: linear-gradient(89.7deg, rgba(197, 29, 29, 0.8) 4.04%, rgba(174, 0, 0, 0.104) 108.38%);
  transform: rotate(-9.59deg);
  width: 52.48px;
  height: 71.31px;
  text-align: center;
  position: relative;
  left:9px;
  top:6px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  #left_number_item{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: rgba(255, 255, 255, 0.5);
    transform: rotate(-9.59deg);
    position: relative;
    top:15.33px;
  }
}
.right_number{
  background: linear-gradient(89.7deg, rgba(197, 29, 29, 0.8) 4.04%, rgba(174, 0, 0, 0.104) 108.38%);
  transform: rotate(12.89deg);
  width: 54.8px;
  height: 74.46px;
  text-align: center;
  position: relative;
  right:9px;
  top:6px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  #right_number_item{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 47px;
    color: rgba(255, 255, 255, 0.5);
    transform: rotate(12.42deg);
    position: relative;
    top:14px;
  }
}
}

.left_block{
   position: relative;
   left:136px;
   bottom:10px;
 }
.inner_right_table{
  .border{
    transform: rotate(30.04deg);
    display: block;
    float:right;
    position: relative;
    bottom:6px;
    left:2px;
    width: 1px;
    height: 1.1rem;
    background-color: white;
  }
}
ul.footer_right_list{
    margin: 0;
    padding-left:15px;
    display: flex;
    li{
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    margin-bottom:34px;
    margin-top:15px;
    margin-right:14px;
    }
    li:nth-child(5){
      color:red;
    }
    li:nth-child(8){
      color:red;
    }
}
.back_color{
  background: red;
  width: 25px;
  height: 19px;
  text-align: center;
  display:inline-block;
}
.st0{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
.st1{fill:#FFFFFF;}
.st2{font-family: Roboto;}
.st3{font-size:13px;}
.st4{font-size:11px;}
.st5{fill:#D24A44;}
.st6{fill:#5DAF61;}

.word_right_table{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  fill: #969696;
}
/*Height*/
@media(max-height:695px){
   .number_points{
     top:3rem;
   }
}
@media(max-height:659px){
   .number_points{
     top:1rem;
   }
}
@media(max-height:398px){
  .add{
    width:39.6px !important;
    height:39.6px !important;
  }
  .new{
    width:51.3px !important;
    height:51.3px !important;
  }
  .footer_hide_cl{
    width: 55.8px;
    height: 55.8px;
  .footer_hide_inner_cl{
    width: 43.2px;
    height: 18px;
    margin-top: 19px;
  }
  }
  .footer_left_item{
     width: 97.2px !important;
     height: 32.4px !important;
     margin-top:0px;
     margin-left:15px;
     .balance_item1{
       font-size: 10.8px !important;
       line-height: 12px !important;
       margin-left:27px !important;
       margin-top:4px;
     }
     .balance_item2{
       font-size: 10.8px !important;
       line-height: 0px !important;
       margin-left:22px;
       position: relative;
       bottom:6px !important;
     }
  }
  #hr1{
    padding: 30px 0px 0px 0px !important;
    #ones{
      font-size: 12.6px;
      margin-top:12.6px;
      margin-left:16.2px;
    }
    #twos{
       font-size: 12.6px;
        margin-top:12.6px;
        margin-left:12.6px;
    }
    #threes{
        font-size: 12.6px;
        margin-top:12.6px;
        margin-left:9.9px;
    }
    #fours{
      font-size: 12.6px;
      margin-top:12.6px;
      margin-left:7.2px;
    }
     #fives{
      font-size: 12.6px;
      margin-top:12.6px;
      margin-left:3.2px;
    }
  }
}
/* 5s Iphone */
@media(max-height:360px){
  .add{
    width:35.64px !important;
    height:35.64px !important;
  }
  .new{
    width:46.17px !important;
    height:46.17px !important;
  }
  .footer_hide_cl{
    width: 50.22px;
    height: 50.22px;
    margin: 8px 0px 8px 37px !important;
  .footer_hide_inner_cl{
    width: 38.88px;
    height: 16.2px;
    margin-top: 17px;
    margin-left: 5px;
  }
  }
  .footer_left_item{
     width: 87.2px !important;
     height: 31.16px !important;
     margin-top:0px;
     margin-left:20px !important;
     .balance_item1{
       font-size: 9.72px !important;
       line-height: 0px !important;
       margin-left:24px !important;
       margin-top:0px;
       position: relative;
       bottom:1px !important;
     }
     .balance_item2{
       font-size: 9.72px !important;
       line-height: 0px !important;
       margin-left:19px !important;
       position: relative;
       bottom:8px !important;
     }
  }
  #hr1{
    padding: 85px 0px 0px 0px !important;
    #ones{
      font-size: 11.34px;
      margin-top:10.34px;
      margin-left:14.5px;
    }
    #twos{
       font-size: 11.34px;
        margin-top:9.34px;
        margin-left:10.6px;
    }
    #threes{
        font-size: 11.34px;
        margin-top:10.6px;
        margin-left:8.9px;
    }
    #fours{
      font-size: 11.34px;
      margin-top:10.6px;
      margin-left:6.2px;
    }
    #fives{
      font-size: 11.34px;
      margin-top:10.6px;
      margin-left:4.2px;
    }
  }
}
/* Desktop */
@media (max-width: 4000px){
  .table, #green{
    width: 1000px;
    margin-left:216px;
  }
  ul.hr{
    padding: 0px 2px 2px 240px;
  }
  .green_img{
    margin-left:190px;
  }
}
@media (max-width: 1670px){
  .table, #green{
    width: 960px;
    margin-left:237px;
  }
  ul.hr{
    padding: 0px 2px 2px 220px;
  }
  .green_img{
    margin-left:170px;
  }
}
@media (max-width: 1670px){
  .table, #green{
    width: 960px;
    margin-left:237px;
  }
  ul.hr{
    padding: 0px 2px 2px 220px;
  }
  .green_img{
    margin-left:170px;
  }
}
@media (max-width:1425px){
  .table, #green{
   width: 719px;
  }

}
@media (max-width: 1642px){
  .table, #green{
    width: 940px;
    margin-left:245px;
  }
  ul.hr{
    padding: 0px 2px 2px 190px;
  }
  .green_img{
    margin-left:140px;
  }
}
@media (max-width: 1618px){
  .table, #green{
    width: 915px;
    margin-left:260px;
  }
  ul.hr{
    padding: 0px 2px 2px 180px;
  }
  .green_img{
    margin-left:130px;
  }
}
@media (max-width: 1600px){
  .table, #green{
    width: 898px;
    margin-left:268px;
  }
  ul.hr{
    padding: 0px 2px 2px 160px;
  }
  .green_img{
    margin-left:110px;
  }
}
@media (max-width: 1580px){
  .table, #green{
    width: 875px;
    margin-left:280px;
  }
  ul.hr{
    padding: 0px 2px 2px 160px;
  }
  .green_img{
    margin-left:110px;
  }
}
@media (max-width: 1555px){
  .table, #green{
    width: 850px;
    margin-left:290px;
  }
  ul.hr{
    padding: 0px 2px 2px 160px;
  }
  .green_img{
    margin-left:110px;
  }
}
@media (max-width: 1530px){
  .table, #green{
    width: 830px;
    margin-left:300px;
  }
  ul.hr{
    padding: 0px 2px 2px 140px;
  }
  .green_img{
    margin-left:90px;
  }
}
@media (max-width: 1515px){
  .table, #green{
    width: 805px;
    margin-left:315px;
  }
  ul.hr{
    padding: 0px 2px 2px 120px;
  }
  .green_img{
    margin-left:70px;
  }
}
@media (max-width: 1490px){
  .table, #green{
    width: 780px;
    margin-left:325px;
  }
  ul.hr{
    padding: 0px 2px 2px 110px;
  }
  .green_img{
    margin-left:60px;
  }
}
@media (max-width: 1470px){
  .table, #green{
    width: 765px;
    margin-left:335px;
  }
  ul.hr{
    padding: 0px 2px 2px 105px;
  }
  .green_img{
    margin-left:55px;
  }
}
@media (max-width: 1445px){
  .table, #green{
    width: 742px;
    margin-left:345px;
  }
  ul.hr{
    padding: 0px 2px 2px 100px;
  }
  .green_img{
    margin-left:50px;
  }
}
@media (max-width: 1435px){
  .table, #green{
    width: 735px;
    margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 90px;
  }
  .green_img{
    margin-left:40px;
  }
}
@media (max-width:1425px){
  .table, #green{
   width: 725px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 90px;
  }
  .green_img{
    margin-left:40px;
  }
}
@media (max-width:1420px){
  .table, #green{
   width: 720px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 90px;
  }
  .green_img{
    margin-left:40px;
  }
}
@media (max-width:1415px){
  .table, #green{
   width: 715px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px;
  }
  .green_img{
    margin-left:50px;
    height: 127px;
    .green_img_item{
      margin-top:46px;
    }
  }
  .main_table{
    width: 532px;
    height: 217px;
    font-size: 20px;
  }
}
@media (max-width:1405px){
  .table, #green{
   width: 708px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px;
  }
  .green_img{
    margin-left:50px;
    height: 127px;
    .green_img_item{
      margin-top:47px;
    }
  }
  .main_table{
    width: 532px;
    height: 217px;
    font-size: 20px;
  }
}
@media (max-width:1400px){
  .table, #green{
   width: 700px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px;
  }
  .green_img{
    margin-left:50px;
    height: 127px;
  .green_img_item{
      margin-top:48px;
    }
  }
  .main_table{
    width: 532px;
    height: 217px;
    font-size: 20px;
  }
}
@media (max-width:1380px){
  .table, #green{
   width: 680px;
   margin-left:348px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px;
  }
  .green_img{
    margin-left:50px;
    height: 127px;
  }
  .main_table{
    width: 532px;
    height: 217px;
    font-size: 20px;
    .vec{
      width:64px;
      height:30px;
    }
    td{
      sup{
      font-size: 8px;
     }
    }
  }
}
@media (max-width:1373px){
  .table, #green{
   width: 670px;
   margin-left:345px;
  }
  ul.hr{
    padding: 0px 2px 2px 50px;
  }
  .green_img{
    margin-left:35px;
    height: 127px;
  .green_img_item{
      margin-top:51px;
    }
  }
  .main_table{
    width: 532px;
    height: 217px;
    font-size: 20px;
    .vec{
      width:58px;
      height:27px;
    }
    td{
      sup{
      font-size: 8px;
     }
    }
  }
}
@media (max-width:1360px){
  .table, #green{
   width: 660px;
   margin-left:345px;
  }
  ul.hr{
    padding: 0px 2px 2px 50px;
  }
  .green_img{
    margin-left:45px;
    height: 116px;
  .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1355px){
  .table, #green{
   width: 660px;
   margin-left:345px;
  }
  ul.hr{
    padding: 0px 2px 2px 45px;
  }
  .green_img{
    margin-left:45px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1352px){
  .table, #green{
   width: 660px;
   margin-left:345px;
  }
  ul.hr{
    padding: 0px 2px 2px 45px;
  }
  .green_img{
    margin-left:45px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1349px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
      .stavka{
        padding-left: 11rem;
      }
    }
    .footer_left_item2{
      font-size: 15px;
      .win{
        padding-left: 9.8rem;
      }
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 721px;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 85px;
  }
  .green_img{
    margin-left:90px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1349px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 721px;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 85px;
  }
  .green_img{
    margin-left:90px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1345px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 716px;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 85px;
  }
  .green_img{
    margin-left:90px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1340px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 711px;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 80px;
  }
  .green_img{
    margin-left:85px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1332px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 706px;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 80px;
  }
  .green_img{
    margin-left:85px;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1329px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 701px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 75px !important;
  }
  .green_img{
    margin-left:80px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1325px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 706px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 80px !important;
  }
  .green_img{
    margin-left:85px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1320px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
      font-size: 15px;
    }
    .footer_left_item2{
      font-size: 15px;
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 695px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px !important;
  }
  .green_img{
    margin-left:70px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1317px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 692px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 70px !important;
  }
  .green_img{
    margin-left:70px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1312px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 687px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 65px !important;
  }
  .green_img{
    margin-left:65px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1307px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 682px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 60px !important;
  }
  .green_img{
    margin-left:60px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1302px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 677px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 55px !important;
  }
  .green_img{
    margin-left:55px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1297px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 672px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 50px !important;
  }
  .green_img{
    margin-left:50px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1292px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 667px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 45px !important;
  }
  .green_img{
    margin-left:45px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1287px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 662px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:45px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1282px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 657px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1277px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 652px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1272px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 647px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1267px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 642px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1262px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 637px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1262px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 637px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 42px !important;
  }
  .green_img{
    margin-left:48px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1259px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 632px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 40px !important;
  }
  .green_img{
    margin-left:45px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1259px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table, #green{
   width: 632px !important;
   margin-left:310px;
  }
  ul.hr{
    padding: 0px 2px 2px 40px !important;
  }
  .green_img{
    margin-left:45px !important;
    height: 116px;
    .green_img_item{
      margin-top:44px;
    }
  }
  .main_table{
    width: 479px;
    height: 195px;
    font-size: 18px;
    .vec{
      width:52px;
      height:24px;
    }
    td{
      sup{
      font-size: 6px;
     }
    }
  }
}
@media (max-width:1256px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table{
    height: 307px;
  }
  .table, #green{
   width: 632px !important;
   margin-left:310px;
   .text{
     font-size: 15.2px;
   }
  }
  ul.hr{
    padding: 0px 2px 2px 40px !important;
  }
  .green_img{
    margin-left:60px !important;
    height: 116px;
    .green_img_item{
      margin-top:43px;
      font-size: 20px;
    }
  }
  .main_table{
    width: 431.1px;
    height: 195px;
    font-size: 16.2px;
    .vec{
      width:46.8px;
      height:21.6px;
    }
    td{
      sup{
      font-size: 5.4px;
     }
    }
  }
}
@media (max-width:1252px){
  .footer_left{
    width: 312px;
    height: 157px;
    .footer_left_item1{
    }
    .footer_left_item2{
    }
    .footer_left_item{
      width: 194px;
      height: 43px;
      margin-top:14.5px;
      margin-left:60.3px;
      .balance_item1{
        font-size: 11.7px;
        line-height: 13.5px;
        margin-left:71.1px;
      }
      .balance_item2{
        font-size: 18px;
        line-height: 20.7px;
        margin-left:48.6px;
      }
    }
  }
  .footer_right{
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid #969696;
    box-sizing: border-box;
    width: 317.7px;
    height: 175.5px;
    .right_table{
      width: 294.3px;
      height: 74.7px;
      margin-left: 9px;
    }
    ul.footer_right_list{
    padding-left:13.5px;
    li{
    font-size: 10.8px;
    margin-bottom:30.6px;
    margin-top:13.5px;
    margin-right:12.6px;
    }
    .back_color{
      width: 22.5px;
      height: 17.1px;
    }
    }
  }
  .table{
    height: 307px;
  }
  .table, #green{
   width: 628px !important;
   margin-left:310px;
   .text{
     font-size: 15.2px;
   }
  }
  ul.hr{
    padding: 0px 2px 2px 40px !important;
  }
  .green_img{
    margin-left:60px !important;
    height: 116px;
    .green_img_item{
      margin-top:43px;
      font-size: 20px;
    }
  }
  .main_table{
    width: 431.1px;
    height: 195px;
    font-size: 16.2px;
    .vec{
      width:46.8px;
      height:21.6px;
    }
    td{
      sup{
      font-size: 5.4px;
     }
    }
  }
}
/* tablet, phones */
@media (max-width: 1250px){
  .linear1{
    display:none;
  }
  #footer_hide{
    display:block;
    margin: 22px 0px 23px 37px;
  }
  #hr1{
    display:block;
    padding: 0px 0px 0px 0px;
    list-style-position: inside;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    list-style-type: decimal;
    margin-left:13px;
    #double{
      width:57px;
      height:57px;
    }
    .cancel{
      width:57px;
      height:57px;
    }
    li{
    display: inline-block;
    }
    li:last-child{
      position: relative;
      top:0px;
    }
     li:nth-child(1){
      margin-top:0px !important;
      top:0px;
    }
    li:nth-child(2){
      margin-top:10px !important;
    }
    li:nth-child(-n+5){
      margin-top: 18px;
    }
    li:nth-child(5){
      margin-top:0px !important;
    }
    li:nth-child(6){
      margin-top:10px !important;
    }
    li:nth-child(n+5){
      margin-left: 0px;
      margin-top: 18px;
    }
  }
  ul.footer_right_list{
    padding-left:36px;
    /*padding-top:15px;*/
    li{
      font-size: 19px;
      margin-right:23px;
      margin-top:8px;
    }
    .back_color{
      width: 41.19px;
      height: 31.3px;
    }
  }
  .krestik{
    width:31.17px;
    height:31.17px;
    margin-left: 21px !important;
    margin-top: 19px !important;
  }
  .word_ruletka{
    font-size: 18px;
    margin-left:10px;
    bottom: 9px;
  }
  .word_begin{
    display:none;
  }
  .trans{
    width:27px;
    height: 20px;
  }
  ul.footer_right_list{
    padding-left: 170px;
  }
  .footer_right_2{
    width: 998px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 190px;
      position:relative;
      bottom:9px;
   }
  }
  .table{
    width: 998px !important;
    height:237px; /*237*/
    margin-left: 0px;
  }
  #green{
    width: 998px !important;
    margin-left:0;
    height:35.64px;
  }
  .text{
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
  }
  .main_table {
    width: 497px;
    height: 203px;
    font-size: 15px;
    margin-left: 0;
  }
  .green_img{
    width: 61px;
    height: 117px;
    margin-left:200px !important;
  }
  .green_img_item{
    font-size: 18px;
  }
  .footer_right{
    display:none;
  }
  .hr{
     display:none;
  }
  .footer_left{
    left:auto;
    right:0;
    width: 140px;
    height: 414px;
    .footer_left_item1, .footer_left_item2{
      display: none;
    }
    .footer_left_item{
     width: 108px;
     height: 36px;
     margin-top:0px;
     margin-left:15px;
     .balance_item1{
       font-size: 12px;
       line-height: 14px;
       margin-left:25px;
       margin-top:4px;
       line-height: 14px;
     }
     .balance_item2{
       font-size: 12px;
       line-height: 14px;
       margin-left:22px;
       position: relative;
       bottom:5px;
     }
     .footer_left_hide{
        display:block;
        /*margin-top: 278px;
        margin-left: 37px;*/
     }
    }
  }
  .vec{
    width:54px;
    height:23px;
    margin-top:6px;
  }
  .trans{
    margin-left: 1030px !important;
    bottom: 5px;
  }
}
@media (max-width: 1170px){
  .table, #green{
    width: 870px !important;
  }
  .trans{
    margin-left: 930px !important;
  }
  .green_img{
    margin-left:130px !important;
  }
  ul.footer_right_list{
    padding-left: 170px;
  }
  .footer_right_2{
    width: 870px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 190px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 1070px){
  .table, #green{
    width: 770px !important;
  }
  .trans{
    margin-left: 780px !important;
  }
  .green_img{
    margin-left:80px !important;
  }
  ul.footer_right_list{
    padding-left: 140px;
  }
  .footer_right_2{
    width: 770px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 150px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 980px){
  .table, #green{
    width: 670px !important;
  }
  .trans{
    margin-left: 670px !important;
  }
  .green_img{
    margin-left:50px !important;
  }
    ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 670px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 870px){
  .table, #green{
    width: 640px !important;
  }
  .trans{
    margin-left: 470px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 640px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 812px){
  .table, #green{
    width: 668px !important;
  }
  .trans{
    margin-left: 470px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 668px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 804px){
  .table, #green{
    width: 660px !important;
  }
  .trans{
    margin-left: 470px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 660px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 796px){
  .table, #green{
    width: 652px !important;
  }
  .trans{
    margin-left: 470px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 652px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 788px){
  .table, #green{
    width: 644px !important;
  }
  .trans{
    margin-left: 440px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 644px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 780px){
  .table, #green{
    width: 636px !important;
  }
  .trans{
    margin-left: 440px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 636px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 772px){
  .table, #green{
    width: 628px !important;
  }
  .trans{
    margin-left: 440px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 628px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 764px){
  .table, #green{
    width: 620px !important;
  }
  .trans{
    margin-left: 440px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 620px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 756px){
  .table, #green{
    width: 612px !important;
  }
  .trans{
    margin-left: 440px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 612px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 748px){
  .table, #green{
    width: 604px !important;
  }
  .trans{
    margin-left: 420px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 604px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 740px){
  .table, #green{
    width: 596px !important;
  }
  .trans{
    margin-left: 420px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
      ul.footer_right_list{
    padding-left: 70px;
  }
  .footer_right_2{
    width: 596px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 90px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 736px){
  .table, #green{
    width: 591px !important;
  }
  .trans{
    margin-left: 400px !important;
  }
  .green_img{
    margin-left:20px !important;
  }
  ul.footer_right_list{
    padding-left: 30px;
  }
  .footer_right_2{
    width: 591px !important;
   .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 50px;
      position:relative;
      bottom:9px;
   }
  }
}
@media (max-width: 667px){
  .table, #green{
    width: 527px !important;
  }
  .trans{
    margin-left: 320px !important;
  }
  .green_img{
    margin-left:10px !important;
    width: 61px;
    height: 109px;
  }
  .green_img_item{
    font-size: 16.2px !important;
    margin-top:39px !important;
  }
  .main_table {
    width: 437.36px;
    height: 178.64px;
    font-size: 12px;
  }
  .footer_right_2{
    width: 527px !important;
    height: 237px;
    background: #101010;
  .right_table_2{
      width: 480.6px;
      height: 135px;
      margin-left: 33px;
      position:relative;
      bottom:9px;
   }
  }
  ul.footer_right_list{
    padding-left:30px;
    /*padding-top:15px;*/
    li{
      font-size: 17.1px;
      margin-right:23px;
      margin-top:8px;
    }
    .back_color{
      width: 39.071px;
      height: 28.17px;
    }
  }
}
@media (max-width: 660px){
  .table, #green{
    width: 430px !important;
  }
  .table{
    height: 207px;
  }
  .trans{
    margin-left: 240px !important;
  }
  .green_img{
    margin-left:10px !important;
    width: 48px;
    height: 109px;
    background-size: contain;
  }
  .green_img_item{
    font-size: 14.2px !important;
    margin-top:39px !important;
  }
  .main_table {
    width: 349.88px;
    height: 142.912px;
    font-size: 12px;
  }
  .footer_right_2{
    width: 430px !important;
    height: 207px;
    background: #101010;
  .right_table_2{
      width: 380.6px;
      height: 135px;
      margin-left: 23px;
      position:relative;
      bottom:9px;
   }
  }
  ul.footer_right_list{
    padding-left:20px;
    /*padding-top:15px;*/
    li{
      font-size: 12.1px;
      margin-right:23px;
      margin-top:8px;
    }
    .back_color{
      width: 29.071px;
      height: 18.17px;
    }
  }
}
/* Header */
@media (max-width:1405px){
     .trans{
       margin-left:849px;
     }
}
@media (max-width:1370px){
     .trans{
       margin-left:809px;
     }
}
@media (max-width:1332px){
     .trans{
       margin-left:769px;
     }
}
@media (max-width:1275px){
     .trans{
       margin-left:719px;
     }
}
@media (max-width:1231px){
     .trans{
       margin-left:679px;
     }
}
@media (max-width:1205px){
     .trans{
       margin-left:629px;
     }
}
@media (max-width:1153px){
     .trans{
       margin-left:602px;
     }
}
@media (max-width:1110px){
     .trans{
       margin-left:540px;
     }
}
</style>
