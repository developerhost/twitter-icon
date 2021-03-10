<template>
  <div>
    <h1>画像を表示</h1>
    <div id="canvas-area">
      <canvas
        id="myCanvas"
        width="250px"
        height="250px"
        class="canvas"
      ></canvas>
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
  props: ["uploadedImage", "canvasText", "fontVar", "colors"],
  data() {
    return {
      canvas: null,
      context: null,
      isDrag: false,
      max_width: 250,
      max_height: 250,
    };
  },

  mounted() {
    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#000000";
    this.drawImage(this.canvas);
  },
  methods: {
    //キャンバスに画像を描画
    drawImage: async function (canvas) {
      const image = await this.asyncLoadImage();
      const self = this;
      if (image.width > self.max_width) {
        image.width = self.max_width;
      }
      if (image.height > self.max_height) {
        image.height = self.max_height;
      }
      const ctx = canvas.getContext("2d");

      // キャンバスに画像を描画（開始位置0,0）
      ctx.drawImage(image, 0, 0, image.width, image.height);
      console.log(image.width);
      console.log(image.height);
    },

    drawText: function (canvas, text) {
      const ctx = canvas.getContext("2d");
      //TODO: はじめに既存文字を削除

      //文字のスタイルを指定
      if (this.fontVar == "") {
        ctx.font = "32px San Francisco"; //ここを変数に
      } else {
        ctx.font = `32px ${this.fontVar}`;
      }
      // ctx.font = fontVar;

      if (colors == "") {
        ctx.fillStyle = "#404040";
      } else {
        ctx.fillStyle = colors;
      }
      //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
      ctx.textBaseline = "center";
      ctx.textAlign = "center";
      //座標を指定して文字を描く（座標は画像の中心に）
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      ctx.fillText(text, x, y);
      console.log(text);
    },

    asyncLoadImage: async function () {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        if (!this.uploadedImage) {
          img.src = "/img/img.jpg";
        } else {
          img.src = this.uploadedImage;
        }
      });
    },
  },

  watch: {
    uploadedImage: function () {
      this.drawImage(this.canvas);
    },
    canvasText: function () {
      this.context.clearRect(0, 0, 250, 250);
      this.drawImage(this.canvas).then(() => {
        this.drawText(this.canvas, this.canvasText);
      });
    },

    fontVar: function () {
      this.context.clearRect(0, 0, 250, 250);
      this.drawImage(this.canvas).then(() => {
        this.drawText(this.canvas, this.canvasText);
      });
    },
    colors: function () {
      this.context.clearRect(0, 0, 250, 250);
      this.drawImage(this.canvas).then(() => {
        this.drawText(this.canvas, this.canvasText);
      });
    },
  },
};
</script>

<style scoped>
.canvas {
  border-radius: 50%;
}
</style>