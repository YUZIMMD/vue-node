<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <!-- partone -->
        <div class="bg-one">
            <div class="Slogan wow slideInDown" data-wow-duration="2s">
              You Dream, We Build It
            </div>
            <div class="moreBtn">
              MORE
            </div>
        </div>
        <!-- parttwo -->
        <div class="partTwo">
          <p class="wow slideInDown">关于园林</p>
          <p class="wow slideInLeft">公司与时俱进，开拓创新，仅九年积累了丰富的施工及养护经验和一流的园林绿化设计、施工技术。公司拥有专业的园林工程师、园艺师、建筑师队伍，为客户提供全面的专业化工程设计、技术咨询及施工服务。此外，施工骨干技术工人均经过专业培训，并有多年的施工养护经验，保证工程施工质量及后期养护规范化、专业化。
             <span>我公司愿以优秀的品质、精湛的技艺、良好的信誉为您提供最真诚的服务。</span></p>
        </div>
        <!-- partThree -->
        <div class="partThree">
              <img src="../assets/home2.jpg" class="wow slideInLeft" data-wow-duration="1.2s">
        </div>
        <!-- partfour -->
        <div class="partFour">
            <p class="wow slideInDown">建设景观梦想</p>
             <div class="moreBtn wow slideInLeft" data-wow-duration="1s">
              Contact Us
            </div>
        </div>
        <!-- partFive -->
        <div class="partFive wow slideInLeft" data-wow-duration="1.2s" data-wow-iteration="1" data-wow-delay="0s">
          <el-row>
            <el-col :span="8">
              <div>
                <img src="../assets/homeF1.png"/>
                 <p>我们有工具</p>
                 <p>我们有能力为每个客户创造独特的景观设计。</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="../assets/homeF2.png"/>
                <p>15年的经验</p>
                <p>我们保证你会满意你的风景的每一个细节。</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="../assets/homeF3.png"/>
                <p>独特的设计</p>
                <p>如果你想要美丽，独特和舒适的设计，这是你的位置。</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="m-t-md">
            <el-col :span="8">
              <div>
                <img src="../assets/homeF4.png"/>
                <p>个人网上商店</p>
                <p>在我们的网上商店，你可以找到你所需要的一切你的花园。</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="../assets/homeF5.png"/>
                <p>个人的方法</p>
                <p>与客户的合作是创造功能性和独特设计的关键。</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <img src="../assets/homeF6.png"/>
                <p>绿色保证</p>
                <p>我们保证您的工厂将会处于完美状态多年。</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- partsix -->
        <div class="partSix">
          <el-row>
            <el-col :span="6">
              <div class="homeS1 wow fadeInUp item">
               <img src="../assets/homeS1.jpg">
               <div class="partSixHide">
                    <div class="title">
                        功能室外空间
                    </div>
               </div>
              </div>
            </el-col>
            <el-col :span="18">
              <div>
               <el-row class="lineOne">
                  <el-col :span="8">
                    <div class="homeS2 wow fadeInUp item">
                        <img src="../assets/homeS2.jpg">
                        <div class="partSixHide">
                          <div class="title">
                            令人惊叹的景观设计理念
                          </div>
                        </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="homeS3 wow fadeInUp item">
                        <img src="../assets/homeS3.jpg">
                        <div class="partSixHide">
                          <div class="title">
                            生态友好的厨房花园
                          </div>
                        </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="homeS4 wow fadeInUp item">
                        <img src="../assets/homeS4.jpg">
                        <div class="partSixHide">
                          <div class="title">
                            美化楼梯家居设计
                          </div>
                        </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="lineTwo">
                  <el-col :span="12">
                    <div class="homeS5 wow fadeInUp item">
                        <img src="../assets/homeS5.jpg">
                        <div class="partSixHide">
                          <div class="title">
                            地中海风景峡谷
                          </div>
                        </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="homeS6 wow fadeInUp item">
                        <img src="../assets/homeS6.jpg">
                        <div class="partSixHide">
                            <div class="title">
                              简单的天井设计理论
                            </div>
                        </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- partSeven -->
        <div class="partSeseven">
          <div class="hot wow fadeInDown" data-wow-duration="1.3s" data-wow-delay="0s" data-wow-iteration="1">
            <p class="hotserver">热门服务</p>
            <p>—</p>
            <p>Popular Services</p>
          </div>
          <el-row :gutter="20" class="m-t-xl wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" data-wow-iteration="1">
            <el-col :span="8">
              <div class="item">
                 <div class="b-bg-v">
                   <div class="radius">
                  
                   </div>
                   <p class="green">庭院景观</p>
                   <p class="English">Courtyard Landscape</p>
                   <p class="m-t-xs">我们的方法是设计创造世世代代的风景,没有模板。<br/> 没有饼干刀。</p>
                 </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="item">
                 <div class="b-bg-v">
                   <div class="radius">
                     
                   </div>
                   <p class="green">城市景观设计</p>
                   <p class="English">Urban Landscape Design</p>
                   <p>我们的方法是设计创造世世代代的风景,没有模板。<br/> 没有饼干刀。</p>
                 </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="item">
                 <div class="b-bg-v">
                  <div class="radius">
                     
                  </div>
                   <p class="green">景观设计</p>
                   <p class="English">Landscape Design</p>
                   <p>我们与专注于景观过程各个领域的专业人<br/>士合作</p>
                 </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- partEIGHT -->
        <div class="partEgiht">
          <div class="line1 wow fadeInDown" data-wow-duration="1.1s" data-wow-delay="0s" data-wow-iteration="1">
            <P>博客</P>
            <P>—</P>
            <P>The Blog</P>
          </div>
          <el-row :gutter="20" class="wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay="0s" data-wow-iteration="1">
            <el-col :span="8">
              <div class="item">
                  <div class="box">
                     <div class="top">
                       每日新款
                     </div>
                     <div>发表于27五月2016 0评论</div>
                     <div>简单的方法来保持你的花园健康</div>
                     <a>Read More</a>
                  </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="item">
                  <div class="box">
                     <div class="top">
                       每日新款
                     </div>
                     <div>发表于27五月2016 0评论</div>
                     <div>简单的方法来保持你的花园健康</div>
                     <a>Read More</a>
                  </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="item">
                  <div class="box">
                     <div class="top">
                       每日新款
                     </div>
                     <div>发表于27五月2016 0评论</div>
                     <div>简单的方法来保持你的花园健康</div>
                     <a>Read More</a>
                  </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- partnine -->
        <div class="partNine">
          <div class="line1 wow fadeInDown" data-wow-duration="1.1s" data-wow-delay="0s" data-wow-iteration="1">
            <P>我们的商店</P>
            <P>—</P>
            <P>Our Shop</P>
          </div>
          <el-row :gutter="20" class="wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay="0s" data-wow-iteration="1">
            <el-col :span="6">
              <div class="item">
                 <img src="../assets/home9-1.jpg"/>
                 <div class="title">Cerise喷壶</div>
                 <div class="m-t-sm"><span class="now">￥280.00</span><s class="OriginalPrice">￥580.00</s></div>
                 <a>查看更多</a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                 <img src="../assets/home9-2.jpg"/>
                 <div class="title">Cerise喷壶</div>
                 <div class="m-t-sm"><span class="now">￥280.00</span><s class="OriginalPrice">￥580.00</s></div>
                 <a>查看更多</a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                 <img src="../assets/home9-3.jpg"/>
                 <div class="title">Cerise喷壶</div>
                 <div class="m-t-sm"><span class="now">￥280.00</span><s class="OriginalPrice">￥580.00</s></div>
                 <a>查看更多</a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                 <img src="../assets/home9-4.jpg"/>
                 <div class="title">Cerise喷壶</div>
                 <div class="m-t-sm"><span class="now">￥280.00</span><s class="OriginalPrice">￥580.00</s></div>
                 <a>查看更多</a>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    test:function(){
      let obj = {
        [Symbol('my_key')]: 1,
        enum: 2,
        nonEnum: 3
      };

    let a = Reflect.ownKeys(obj);
    console.log(a);
      //  ["enum", "nonEnum", Symbol(my_key)]
    }
  },
  mounted: function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
    this.test()
};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-one{
  background: url('../assets/home1.jpg');
  height: 600px;
  background-size: 100% 100%;
  text-align: center;
}
.Slogan{
    font-size: 96px;
    font-family: "Times New Roman", Times, serif;
    color: rgb(255, 255, 255);
    position: relative;
    top: 200px;
    visibility: visible;
    animation-duration: 1.2s; 
    animation-delay: 0s; 
    animation-iteration-count: 1; 
    animation-name: bounceInDown;
}
.moreBtn{
    color: rgb(255, 255, 255);
    background-color: rgb(105, 202, 114);
    border-radius: 50px;
    font-size: 16px;
    padding: 10px;
    width: 100px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    top: 250px;
}
.partTwo p:nth-child(1){
    color: rgb(51, 51, 51);
    font-size: 26px;
    margin-top: 60px;
    margin-bottom: 40px;
    visibility: visible;
    animation-duration: 1.4s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInDown;
}
.partTwo p:nth-child(2){
    color: rgb(51, 51, 51);
    width: 80%;
    text-align: center;
    margin: 0 auto;
    color: rgba(31,37,38,.75);
    font-size: 14px;
    line-height: 24px;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInLeft;
}
.partTwo p:nth-child(2) span{
  display: inline-block;
  margin-top: 10px;
}
.partThree{
  text-align: center;
  padding: 40px 0;
  visibility: visible;
  animation-duration: 1.4s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-name: fadeInLeft;
}
.partFour{
  background: url('../assets/home3.jpg');
  height: 450px;
  background-position: 50% 50%;
  background-size: cover;
  text-align: center;
}
.partFour p{
    color: rgb(255, 255, 255);
    font-size: 60px;
    font-family: KaiTi;
    position: relative;
    top: 150px;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInDown;
}
.partFour .moreBtn{
    color: rgb(255, 255, 255);
    background-color: rgb(43, 195, 122);
    border-radius: 55px;
    position: relative;
    top: 150px;
    padding: 15px 20px;
    visibility: visible;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInLeft;
}
.partFive{
  padding: 50px 30px 20px 30px;
    visibility: visible;
    animation-duration: 1.2s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInLeft;
}
.partFive img{
  width: 10%;
  height: 40px;
}
.partFive .el-col-8 p:nth-child(2){
  font-size: 18px;
  line-height: 1.50em;
  text-align: center;
  color: rgba(31,37,38,.75);
}
.partFive .el-col-8 p:nth-child(3){
    font-size: 14px;
    line-height: 1.50em;
    text-align: center;
    color: rgba(31,37,38,.75);
    position: relative;
    top: -10px;
}
.partSix{
  padding: 10px 10px;
}
.partSix img{
      transition: all 0.3s ease-out;
}
.partSix .homeS1{
  height: 450px;
  overflow: hidden;
  visibility: visible;
  animation-delay: 0s;
  animation-name: fadeInUp;
}
.partSix .homeS1 img{
    margin-left: -45.155%;
    margin-top: 0%;
    width: 190.31%;
    height: 100%;
}
.partSix .homeS2, .partSix .homeS3,.partSix .homeS4{
  height: 225px;
  overflow: hidden;
  margin-left: 2px;
} 
.partSix .homeS2{
    visibility: visible;
    animation-delay: 0s;
    animation-name: fadeInUp;
}
.partSix .homeS3{
    visibility: visible;
    animation-delay: 0.1s;
    animation-name: fadeInUp;
}
.partSix .homeS4{
    visibility: visible;
    animation-delay: 0.2s;
    animation-name: fadeInUp;
}
.partSix .homeS5{
    visibility: visible;
    animation-delay: 0s;
    animation-name: fadeInUp;
}
.partSix .homeS6{
    visibility: visible;
    animation-delay: 0.1s;
    animation-name: fadeInUp;
}
.partSix .homeS1 img{
    margin-left: -45.155%;
    margin-top: 0%;
    width: 190.31%;
    height: 100%;
}
.partSix .homeS2 img{
    margin-left: 0%;
    margin-top: -5.77163%;
    width: 100%;
    height: 116.74%;
}
.partSix .homeS3 img{
     margin-left: -2.75379%;
    margin-top: 0%;
    width: 105.508%;
    height: 100%;
}
.partSix .homeS4 img{
    margin-left: -13.6804%;
    margin-top: 0%;
    width: 127.361%;
    height: 100%;
}
.partSix .homeS5, .partSix .homeS6{
  margin-top: 2px;
  height: 223px;
  overflow: hidden;
  margin-left: 2px;
} 
.partSix .homeS5 img{
    margin-left: 7.36314e-15%;
    margin-top: -1.60159%;
    width: 100%;
    height: 107.005%;
}
.partSix .homeS6 img{
    margin-left: 7.36314e-15%;
    margin-top: -15.5302%;
    width: 100%;
    height: 167.928%;
}
.partSix .el-col div:hover > img{
      transform: scale(1.2);
      cursor: initial!important;
}
.partSixHide{
      z-index: 3;
      transition: all 0.3s ease-out;
      visibility: hidden;
      opacity: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: rgba(0,0,0,.5);
      color: rgba(255,255,255,.9);
}
.partSixHide .title{
  font-size: 18px;
  position: relative;
  top: 80px;
}
.partSix .item:hover > .partSixHide{
    visibility: visible;
    opacity: 1;
}
.partSix .item:hover > .title{
    visibility: visible;
    opacity: 1;
    transform: translate3d(0,60%,0);
}
.partSeseven{
  height: 400px;
  padding: 20px 40px 270px 40px;
  font-size: 14px;
  line-height: 1.50em;
  text-align: center;
}
.partSeseven .hot{
    visibility: visible;
    animation-duration: 1.3s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInDown;
}
.partSeseven .hot>p{
  padding: 4px;
  margin: 0px;
}
.partSeseven .hotserver{
      font-size: 24px;
}
.partSeseven .item{
  padding: 0 8px;
}
.partSeseven .b-bg-v{
 border: 1px solid rgb(216,216,216);
  /* height: 20px; */
  padding: 10px 0 30px 0;
  position: relative;
  top:0;
  transition: all 0.3s;
}
.partSeseven .item:hover .b-bg-v{
  top: -20px;
} 
.partSeseven .radius{
  width: 280px;
  margin: 0 auto;
  height: 280px;
  margin-top: 30px;
  border-radius: 140px;
}
.partSeseven .el-col-8:nth-child(1) .radius{
  background: url('../assets/home7-1.jpg') no-repeat;
  background-size: 100% 100%;
}
.partSeseven .el-col-8:nth-child(2) .radius{
  background: url('../assets/home7-2.jpg') no-repeat;
  background-size: 100% 100%;
}
.partSeseven .el-col-8:nth-child(3) .radius{
  background: url('../assets/home7-3.jpg') no-repeat;
  background-size: 100% 100%;
}
.partSeseven .green{
  color: rgb(43, 195, 122);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.50em;
  text-align: center;
  margin-top: 10px;
}
.partSeseven .English{
    font-size: 16px;
    color: rgb(102, 102, 102);
}
.partEgiht{
  height: 700px;
  background: url('../assets/home8-4.jpg') no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  padding: 40px 60px; 
}
.line1>p{
  padding: 4px;
  margin: 0;
  font-size: 14px;
}
.line1>p:nth-child(1){
  font-size: 24px;
  font-weight: 700px;
}
.partEgiht .item{
  height: 500px;
  border: 1px solid #ffffff;
}
.partEgiht .el-col-8:nth-child(1) .item{
  background: url('../assets/home8-1.jpg') no-repeat;
  /* background-size: 100% 100%; */
}
.partEgiht .el-col-8:nth-child(2) .item{
  background: url('../assets/home8-2.jpg') no-repeat;
  background-size: 100% 100%;
}
.partEgiht .el-col-8:nth-child(3) .item{
  background: url('../assets/home8-3.jpg') no-repeat;
  /* background-size: 100% 100%; */
}
.partEgiht .item .box{
  height: 220px;
  width: 80%;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
  top: 320px;
  color: rgba(31,37,38,.75);
  font-size: 14px;
  transition: all 0.3s;
}
.partEgiht .item .box div:nth-child(1){
  width: 30%;
  margin: 0 auto;
  background-color: #CCCCCC;
  color: #ffffff;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.partEgiht .item .box div:nth-child(2){
  font-size: 18px;
  color: #000;
  margin-top: 18px;
}
.partEgiht .item .box div:nth-child(3){
  margin-top: 20px;
}
.partEgiht .item .box a{
  display: inline-block;
  width: 150px;
  height: 40px;
  background-color: #2bc37a;
  line-height: 40px;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 50px;
}
.partEgiht .item .box:hover{
  top: 300px;
}
.partEgiht .item .box:hover div:nth-child(1){
  background-color: #2bc37a;
}
.partNine{
  padding: 40px;
}
.partNine .item{
  border: 1px solid #cccccc;
  height: 320px;
  margin-top: 50px;
  position: relative;
  top:0;
  transition: all 0.3s;
}
.partNine img{
  width: 180px;
  height: 180px;
}
.partNine .title{
  font-size: 18px;
}
.partNine .now{
    font-size: 16px;
    color: rgb(43, 195, 122);
    font-family: SimHei;
    font-weight: bold;
}
.partNine .OriginalPrice{
    font-size: 16px;
    font-family: SimHei;
    margin-left: 30px;
}
.partNine a{
    display: inline-block;
    background-color: #2bc37a;
    padding: 6px 15px;
    color: #ffffff;
    font-size: 14px;
    border-radius:20px; 
    margin-top: 20px;
}
.partNine .item:hover{
  top: -20px;
}
</style>
