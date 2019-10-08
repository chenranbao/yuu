<template>
  <div class="all">
    <div class="big-wheel">
      <div class="disc-list" ref="turntable" :style="{transform:rotateAngle,transition:tranInof}">
      <ul class="gift-container">
        <li v-for="(item, index) in prizeList" :key="index" :style="{'transform': `rotate(${index * 360 / prizeList.length}deg)` }">
          <span>{{item.name}}</span><br />
          <img width="100" :src="item.icon || icon" alt="">
        </li>
      </ul>
    </div>
    <div class="bntLottery" @click="bntLottery">
          <img style=" position: absolute;left: -20px;top: -50%;" height="100" src="../assets/img/draw_btn.png" />
          <!--<span style="position: absolute;transform: translateX(-100%);left: 0;right: 0;margin: auto;  ">
            <img height="150" src="../assets/img/draw_btn.png" />
          </span>-->
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rotateNumber: '',
        rotateAngle: '',
        tranInof: '',
        prizeList: [
          {
            icon: require("../assets/img/bean_500.png"), // 奖品图片
            count: 10, // 奖品数量
            name: "易趣豆", // 奖品名称
            isPrize: 1 // 该奖项是否为奖品
          },
          {
            icon: require("../assets/img/bean_five.png"),
            count: 5,
            name: "豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/bean_one.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/point_five.png"),
            count: 5,
            name: "积分",
            isPrize: 1
          },
          {
            icon: require("../assets/img/point_ten.png"),
            count: 10,
            name: "积分",
            isPrize: 1
          },
          {
            icon: require("../assets/img/bean_500.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: require("../assets/img/give_up.png"),
            count: 0,
            name: "未中奖",
            isPrize: 0
          },
          {
            icon: require("../assets/img/bean_500.png"),
            count: 10,
            name: "易趣豆",
            isPrize: 1
          }
        ], //奖品列表
        
      }
    },
    methods: {
        bntLottery() {
          this.$refs.turntable.removeAttribute('style')
            this.rotateNumber = 360 * 5
            this.rotateAngle = 'rotate(' + this.rotateNumber + 'deg)'
            this.tranInof = 'transform 3s ease-out'
            let rotateSpeed = 3
            this.$refs.turntable.style.transform = `rotate(${rotateNumber}deg)`
            this.$refs.turntable.style.transition = `transform ${rotateSpeed}s ease-out`
          
          
//        setInterval(function(){ 
//          this.rotateNumber = 0
//          this.rotateAngle = 'rotate(' + this.rotateNumber + 'deg)'
//          this.tranInof = 'transform 3s ease-out'
//        },3000)
        }
      }
  }
</script>

<style>
  .big-wheel{
    position: relative;
    top: 0;
    width: 300px;
    height: 300px;
    border: 1px solid red;
    border-radius: 50%;
    overflow: hidden;
  }
  .disc-list{
    position: relative;
    height: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .gift-container{
    /*position: absolute;
    top: 0;
    left: 0;*/
   padding: 0;
    height: 100%;
    height: 100%;
    border-radius: 50%;
    list-style: none;
    background-color: royalblue;
  }
  .gift-container li{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-bottom: 1px solid red;
    border-radius:50% ;
  }
  .bntLottery{
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #167495;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
</style>