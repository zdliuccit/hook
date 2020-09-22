<template>
  <div class="body" ref="body">
    <div class="cont" ref="cont">
      {{coupon}}
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        coupon: '未触摸'
      }
    },
    methods: {},
    mounted() {
      const $body = this.$refs.body
      const $cont = this.$refs.cont
      let pageX = []
      let pageY = []
      $body.addEventListener('touchstart', (e) => {
        e.preventDefault()
        const rect = $cont.getBoundingClientRect()
        pageX[0] = rect.left
        pageX[1] = rect.left + rect.width
        pageY[0] = rect.top
        pageY[1] = rect.top + rect.height
      })
      $body.addEventListener('touchmove', (e) => {
        console.log('e', e.pageX, e.pageY)
        if (e.pageX >= pageX[0] && e.pageX <= pageX[1] && e.pageY >= pageY[0] && e.pageY <= pageY[1]) {
          this.coupon = '在当前区域'
        } else {
          this.coupon = '超出区域了'
        }
      })
      $body.addEventListener('touchend', (e) => {
        this.coupon = '未触摸'
      })
    }
  }
</script>
<style lang="stylus">
  .body {
    position: absolute
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items center;
    justify-content center
  }

  .cont {
    width 70%;
    height 400px;
    background-color beige;
    display: flex;
    align-items center;
    justify-content center
  }
</style>
