<template>
    <LuckyWheel
      ref="myLucky"
      width="300px"
      height="300px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :defaultConfig="defaultConfig"
      @start="startCallback"
      @end="endCallback"
    />
</template>

<script>
export default {
  
  data () {
    return {
      blocks: [{ padding: '13px', background: '#617df2' }],
      prizes: [
       
      ],
      
      buttons: [{
        radius: '35%',
        background: '#8a9bf3',
        pointer: true,
        fonts: [{ text: '开始', top: '-10px' }]
      }],
      defaultConfig: {
        accelerationTime: 200,
        decelerationTime: 200
      },
      
    }
  },
   

  
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback () {
      if(this.prizes.length < 1){
        return
      }
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()

      const idxx =  Math.floor( ( Math.random() * this.prizes.length ) ) 
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(idxx)
      }, 250 * idxx)
    },
    // 抽奖结束会触发end回调
    endCallback (prize) {
      console.log(prize)
    },
  }
}
</script>

<style scoped>
</style>