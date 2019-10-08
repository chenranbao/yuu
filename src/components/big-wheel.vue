<template>
  <div  class="big-wheel">
    <canvas class="xitong" ref="canvas" style="border: 1px solid red;"></canvas>
    <canvas id="canvas" style="position: absolute;top:150px;height: 30px;height: 30px;border-radius: 50%;background-color: teal;"></canvas>
  </div>

</template>

<script>
   export default {
    name: "item",
    data() {
      return {
        canvas: '',
        ctx: '',
        css:'',
        prize_list: [
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
        config: {
          num: 8, // 奖品数量
          width: 300,  // canvas宽
          height: 300, // canvas高
          maxw: 80, // 中奖图片的最大宽
          maxh: 50 // 中奖图片的最大高
        }
      }
    },
    methods: {
      getload() {
        this.canvas = this.$refs.canvas
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = this.config.width
        this.canvas.height = this.config.height
        this.loadingImg()
//      this.getText(this.ctx)
      },
      loadingImg() {
        let that = this
        let x = this.config.width / 2
        let y = this.config.height / 2
        this.getText(x, y, this.ctx, this.prize_list.length)
        Object.keys(this.prize_list).forEach(index => {
         
          let img = new Image()
          img.onload = function() {
           that.drawImg(x, y, y, that.config.num, that.ctx, index, img)
        }
        img.src = this.prize_list[index].icon
          
        })
      },
      drawImg(x, y, r, num, ctx, index, img) {
        ctx.save()
        ctx.beginPath()
        ctx.translate(x, y)
        ctx.moveTo(0, 0)
        let angle = 360/num
        let startAngle = Math.PI*(2/10)*index; //起始弧度
        let endAngle = Math.PI*(2/10)*(index+1); //终止弧度
        // 计算每个扇形旋转的角度
        ctx.rotate(index * (2 * Math.PI - 2 * Math.PI / num))
        // 绘制扇形
        ctx.arc(0, 0, r, 3 * Math.PI / 2 - Math.PI / num, 3 * Math.PI / 2 + Math.PI / num, false)
        // 交叉色渲染
        index % 2 === 0 ? ctx.fillStyle = '#339cf7' : ctx.fillStyle = '#4da9ff'
        ctx.fill()
        // 绘制边框
        ctx.lineWidth = 0.5
        ctx.strokeStyle = '#4da9ff'
        
    
        // 绘制奖品图片
        // 目标尺寸
        let _tw = img.width
        let _th = img.height
        if (img.width > this.config.maxw || img.height > this.config.maxh) {
          if (img.width / img.height > this.config.maxw / this.config.maxh) {
            // 更宽，按照宽度限定尺寸
            _tw = this.config.maxw
            _th = Math.round(this.config.maxw * (img.height / img.width))
          } else {
            _th = this.config.maxh
            _tw = Math.round(this.config.maxh * (img.width / img.height))
          }
        }
        ctx.drawImage(img, -_tw / 2, -y + 5, _tw, _th)
//       ctx.restore()
        // 绘制文字
       
       
        ctx.fillStyle = 'red'
        ctx.font = '12px bold'
        ctx.textAlign = 'center'
//      ctx.rotate(index * (2 * Math.PI - 2 * Math.PI / num));
        ctx.fillText(this.prize_list[index].name, 0, 80)
        console.log(this.prize_list[index].name)
       
        ctx.restore()
//      this.getText(x, y, this.ctx, this.prize_list.length)
    //  this.css(this.container, 360 / num / 2)
    //  this.css(this.pick, -360 / num / 2)
    
    
        },
      getText(x, y, ctx,len) {
        // 绘制文字
        ctx.font = "Bold 20px Arial";     //设置字体
        ctx.textAlign = 'start';          //文本水平对齐方式
        ctx.textBaseline = 'middle';
        ctx.fillStyle = "#000";       //文本垂直方向，基线位置
        var step = 2*Math.PI/len;
        for(var i=0; i<len;i++)
          {
            console.log(i)
            ctx.save();
            ctx.beginPath();
            ctx.translate(x,y);  //平移到圆心
            ctx.rotate(i*step+step/2); //从时钟15点处开始旋转弧度i*step+step/2
            ctx.fillText(this.prize_list[i].name,0,50, 150);
            ctx.restore();
          }
      }
    },
    created() {
      this.$nextTick(function(){
        this.getload()
      })
    }
  }
</script>
<style>
  .xitong{
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
  }
</style>