<template>
  <canvas width="200" height="200" class="canvas"></canvas>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  watch: {
    radius() {
      this.draw(this.radius)
    }
  },
  methods: {
    // draw(radius) {
    //   this.ctx.beginPath()
    //   this.ctx.clearRect(0, 0, 200, 200)
    //   this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
    //   this.ctx.fill()
    // },
    draw() {
      const chara = new Image();
      chara.src = "../assets/img/img.jpg";  // 画像のURLを指定
      chara.onload = () => {
      this.ctx.drawImage(chara, 0, 0, 300, 300);  //ctx.drawImage(image, dx, dy, dWidth, dHeight)
    }
    }
  },
  mounted(){
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    // console.log(this.$el)
    this.ctx = this.$el.getContext('2d')
    this.draw(this.radius)
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>>