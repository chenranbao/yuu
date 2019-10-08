<template>
  <div class='mine-dial'>
    <div class='prizeHeader'>
      幸运大转盘
    </div>
    <div class='prizeBox'>
      <div class='prizeBack'
           :style="{width: wihi,height: wihi,'margin-left': `${-wihi/2}px`, 'margin-top': `${-wihi/2}px`}">
        <div id='turntable'>
          <canvas ref='canvas' class='canvas' :width='wihi' :height='wihi'>抱歉！浏览器不支持。</canvas>
          <canvas ref='canvasText' class='canvas canvasText' :width='wihi' :height='wihi'>抱歉！浏览器不支持。</canvas>
          <div id='btn' @click='takePrize()' ref="centerCircle">
            <div class="canvasSJX">
              <canvas ref='canvasSJX' class='' width='20' height='30'>抱歉！浏览器不支持。</canvas>
            </div>
            开始<br/>
            抽奖
          </div>
        </div>
      </div>
    </div>
    <div class='prizeFooter'>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'dial',
    data() {
      return {
        wihi: 300,
        jps: [
          {
            label: 'iphoneX',
            id: '1',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534395218091&di=c01a36046f8adcf6a361e3f8343df613&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbaike%2Fwh%3D354%2C354%2Fsign%3D02a0cd02a2773912c4738d62cd2daa2b%2Fa686c9177f3e67093d9ece4030c79f3df9dc55f7.jpg'
          },
          {
            label: '特拉斯',
            id: '2',
            src: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/fd039245d688d43fd5eed604761ed21b0ff43b84.jpg'
          },
          {
            label: '谢谢参与',
            id: '3',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534396065489&di=f5e7026d3b2051e1189c73a805588908&imgtype=0&src=http%3A%2F%2Fimage.tupian114.com%2F20140326%2F22302699.jpg'
          },
          {label: '海景别墅', id: '4', src: 'http://47.98.126.142:8888/resource/root/Dongdaemun.jpg'},
          {label: '一千万', id: '5', src: 'https://f12.baidu.com/it/u=757988495,1239106258&fm=72'},
          {label: '倒贴一千万', id: '6', src: 'https://f12.baidu.com/it/u=757988495,1239106258&fm=72'}
        ],
        lastRotate: 6,
        initRot: 0,
        nowTotate: 0,
        initMoveRota: 0,
        isRotate: false
      }
    },
    mounted() {
      this.$nextTick(this.canvasInit())
    },
    methods: {
      takePrize() {
        if (this.isRotate) {
          return
        } else {
          this.isRotate = true
        }
        const gl = Math.ceil(Math.random() * 10) % 2 === 1 ? '6' : '3' // 后端获取到的抽中的奖品id
        const jpList = this.jps
        let indexs = 0
        for (let i = 0; i < jpList.length; i++) {
          if (jpList[i].id === gl) {
            indexs = i + 1
            break
          }
        }
        console.log('抽中奖品id号：' + gl, '此ID号在当前奖品列表中的下标：' + indexs)
        const neRots = (jpList.length - indexs) * (360 / jpList.length) + this.initMoveRota
        this.initMoveRota = 360 - (jpList.length - indexs) * (360 / jpList.length)
        const initRots = this.nowTotate + this.lastRotate * 360 + neRots
        const degs = 'rotate(' + initRots + 'deg)'
        this.nowTotate = initRots
        const canvas = this.$refs.canvas
        canvas.style.transform = degs
        const canvasText = this.$refs.canvasText
        canvasText.style.transform = degs
        setTimeout(() => {
          this.isRotate = false
          alert(`${jpList[(indexs - 1)].label !== '谢谢参与' ? '恭喜抽得：' + jpList[(indexs - 1)].label : '谢谢参与'}`)
        }, 6000)
      },
      canvasInit() {
        const jp = this.jps
        const num = jp.length // 奖品数量
        if (num % 2 !== 0) {
          alert('请配置偶数个奖项')
        }
        let nedDeg = 360 / (num * 2)
        let canvNed = 0
        if (num % 4 !== 0) {
          canvNed = nedDeg
          nedDeg = nedDeg * 2
          this.initRot = canvNed
        }
        this.initMoveRota = 270 - canvNed
        const canvas = this.$refs.canvas
        if (!canvas.getContext) {
          alert('抱歉！浏览器不支持。')
          return
        }
        // 获取绘图上下文
        const ctx = canvas.getContext('2d')
        for (let i = 0; i < num; i++) {
          // 保存当前状态
          ctx.save()
          // 开始一条新路径
          ctx.beginPath()
          // 位移到圆心，下面需要围绕圆心旋转
          ctx.translate(canvas.width / 2, canvas.width / 2)
          // 从(0, 0)坐标开始定义一条新的子路径
          ctx.moveTo(0, 0)
          // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
          ctx.rotate((360 / num * i + 360 / num / 2 + canvNed) * Math.PI / 180)
          // 绘制圆弧
          ctx.arc(0, 0, this.wihi / 2, 0, 2 * Math.PI / num, false)
          if (i % 2 === 0) {
            ctx.fillStyle = '#FFF76D'
          } else {
            ctx.fillStyle = '#fff'
          }
          // 填充扇形
          ctx.fill()
          // 绘制边框
          ctx.lineWidth = 0.5
          ctx.strokeStyle = '#f48d24'
          ctx.stroke()
          ctx.restore()
        }
        this.hzImg(num, nedDeg, 0, this.$refs.canvasText.getContext('2d'))
        this.hzCenterBor()
      },
      hzCenterBor() {
        const bg = this.$refs.canvasSJX
        const ctssjx = bg.getContext('2d')
        ctssjx.beginPath()
        ctssjx.moveTo(0, 0)
        ctssjx.lineTo(10, 30)
        ctssjx.lineTo(20, 0)
        ctssjx.fillStyle = '#DE2C21'
        ctssjx.closePath()
        ctssjx.fill()
      },
      hzImg(num, nedDeg, i, ctxText) {
        const jp = this.jps
        const canvasText = this.$refs.canvasText
//        const canvasText = this.$refs.canvasText
//        const ctxText = canvasText.getContext('2d')
        const canvHeight = canvasText.height
        const canvWidth = canvasText.width
//        for (let i = 0; i < num; i++) {
//          // 保存当前状态
//          ctxText.save()
//          // 开始一条新路径
//          ctxText.beginPath()
//          // 位移到圆心，下面需要围绕圆心旋转
//          ctxText.translate(canvWidth / 2, canvHeight / 2)
//          // 从(0, 0)坐标开始定义一条新的子路径
//          ctxText.moveTo(0, 0)
//          // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
//          const degrees = 360 / num * i + 360 / num / 2 + nedDeg
//          ctxText.rotate(degrees * Math.PI / 180)
//          // 绘制圆弧
//          ctxText.arc(0, 0, 140, 0, 2 * Math.PI / num, false)
//          // 设置字体
//          ctxText.fillStyle = '#DE2C21'
//          ctxText.font = '16px sans-serif'
//          ctxText.textAlign = 'center'
//          ctxText.textBaseline = 'middle'
//          ctxText.fillText(jp[i].label + jp[i].id, 100, 0)
//          // 加图片
//          // 求偏移量
//          let xb = 60
//          let sjxdeg = degrees % 90
//          let xmar
//          let ymar
//          if (sjxdeg === 0) {
//            if (degrees === 90) {
//              xmar = 0
//              ymar = xb
//            } else if (degrees === 180) {
//              xmar = xb
//              ymar = 0
//            } else if (degrees === 270) {
//              xmar = 0
//              ymar = -xb
//            } else if (degrees === 360) {
//              xmar = -xb
//              ymar = 0
//            }
//          } else {
//            const hd = degrees * Math.PI / 180
//            ymar = xb * Math.sin(hd)
//            xmar = xb * Math.cos(hd)
//          }
//          const pzImgWidth = 30
//          const pzImgHeight = 30
//          if (jp[i].src) {
//            let img = new Image()
//            img.onload = () => {
//              ctxText.drawImage(img, canvWidth / 2 - pzImgWidth / 2 - xmar, canvHeight / 2 - pzImgHeight / 2 - ymar, pzImgWidth, pzImgHeight)
//            }
//            img.src = require('../../../static/logo/logoMin.png')
//          }
//          ctxText.restore()
//        }

//        // 保存当前状态
        ctxText.save()
        // 开始一条新路径
        ctxText.beginPath()
        // 位移到圆心，下面需要围绕圆心旋转
        ctxText.translate(canvWidth / 2, canvHeight / 2)
        // 从(0, 0)坐标开始定义一条新的子路径
        ctxText.moveTo(0, 0)
        // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
        const degrees = 360 / num * i + 360 / num / 2 + nedDeg
        ctxText.rotate(degrees * Math.PI / 180)
        // 绘制圆弧
        ctxText.arc(0, 0, canvWidth / 2, 0, 2 * Math.PI / num, false)
        // 设置字体距离等
        const imgPositY = canvWidth / 2
        // 设置字体(垂直向中心)
        ctxText.fillStyle = '#DE2C21'
        ctxText.font = 'italic small-caps normal 13px'
        ctxText.textAlign = 'right'
        ctxText.textBaseline = 'middle'
        ctxText.fillText(jp[i].label, imgPositY - 40, 0, imgPositY - 90)
        // 加图片
        if (jp[i].src) {
          const pzImgWidth = 32
          const pzImgHeight = 32
          let img = new Image()
          img.src = jp[i].src
          let xpyl = imgPositY - (pzImgWidth + 3)
          let ypyl = -(pzImgWidth / 2)
          img.onload = () => {
            ctxText.drawImage(img, xpyl, ypyl, pzImgWidth, pzImgHeight)
            // 恢复前一个状态
            ctxText.restore()
            if (i < num - 1) {
              this.hzImg(num, nedDeg, i + 1, ctxText)
            }
          }
          img.onerror = () => {
            ctxText.restore()
            if (i < num - 1) {
              this.hzImg(num, nedDeg, i + 1, ctxText)
            }
          }
        } else {
          // 恢复前一个状态
          ctxText.restore()
          if (i < num - 1) {
            this.hzImg(num, nedDeg, i + 1, ctxText)
          }
        }
      }
    },
    components: {}
  }
</script>

<style >

  #turntable {
    position: relative;
  }

  .canvas {
    -webkit-transform: all 6s ease;
    transition: all 6s ease;
  }

  .canvasText {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
  }

  .canvasSJX {
    position: absolute;
    top: 0px;
    left: 20px;
    margin-top: -30px;
    transform: rotate(-180deg);
  }

  #btn {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 48px;
    border-radius: 50%;
    margin-left: -34px;
    margin-top: -34px;
    background: #DE2C21;
    z-index: 40;
    font-size: 18px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    color: #ffbe00;
    padding-top: 12px;
    border: 4px solid #ffbe00;
  }

  #btn:after {
    position: absolute;
    display: block;
    content: '';
    left: 10px;
    top: -32px;
    width: 0;
    height: 0;
    overflow: hidden;
    border-width: 20px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #DE2C21;
  }

  .mine-dial{
    /*position: fixed*/
    /*left: 0*/
    height: 100%;
    width: 100%;
    background: #adadad;
    display: flex;
    flex-direction: column;
    }
    .prizeHeader{
      flex: 2
    }
    
    .prizeBox{
      flex: 5;
      border-top: 1px solid #fff
    }
      
      
      .prizeBack{
        position: absolute;
        top: 50%;
        left: 50%; /*width: 280px
        height: 280px
        margin-left: -140px
        margin-top: -140px*/
        background: #fff;
        z-index: 30;
      }
        
        .takePrize{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          margin-left: -30px;
          margin-top: -30px;
          background: #fff;
          z-index: 40;
          font-size: 30px;
          line-height: 1;
          text-align: center;
          font-weight: bold;
          color: #ffbe00;
        }
          
    .prizeFooter{
      flex: 3
    }
      
</style>
