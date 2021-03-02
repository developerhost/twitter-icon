<template>
  <div>
    <h1>画像を表示</h1>
    <div id="canvas-area">
      <canvas id="myCanvas" width="300px" height="300px" class="canvas"></canvas>
    </div>
  </div>
</template>

<style scoped>
#myCanvas {
  border: 1px solid #000000;
}
</style>

<script>
export default {
  name: "DrawTool",
  props: ['uploadedImage',"canvasText"],
  data() {
    return {
      canvas: null,
      context: null,
      isDrag: false,
    };
  },
  mounted() {
    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#000000";
    this.loadImage(this.canvas)
  },
  methods: {
    //キャンバスに画像を描画
    loadImage: function(canvas) {
      //画像を読み込んでimageオブジェクトを作成する
      var image = new Image();
       if(! this.uploadedImage) {
        image.src = "/img/img.jpg"
      }else{
        image.src = this.uploadedImage;
      }
      image.onload = function() {
        //画像ロードが完了してからキャンバスの準備をする
    
        //キャンバスのサイズを画像サイズに合わせる
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d")
        //キャンバスに画像を描画（開始位置0,0）
        ctx.drawImage(image, 0, 0);
      };
    },

    drawText: function(canvas, text) {
      const ctx = canvas.getContext("2d");
      //TODO: はじめに既存文字を削除
      //文字のスタイルを指定
      ctx.font = "32px serif";
      ctx.fillStyle = "#404040";
      //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
      ctx.textBaseline = "center";
      ctx.textAlign = "center";
      //座標を指定して文字を描く（座標は画像の中心に）
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.fillText(text, x, y);
    },
  },

  watch:{
    uploadedImage: function(){
      this.loadImage(this.canvas)
    },
    canvasText: function(){
      this.drawText(this.canvas, this.canvasText)
    }
  }
};
</script>

<style scoped>
.canvas {
  border-radius: 50%;
}
</style>