<template>
  <div>
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
  props: [
    "uploadedImage",
    "canvasText",
    "fontVar",
    "colors",
    "fillColor",
    "globalAlpha",
  ],
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
      console.log("image-width",image.width);
      console.log("image--height",image.height);
    },

    drawText: function (canvas, text) {
      const ctx = canvas.getContext("2d");
      //文字のスタイルを指定
      if (this.fontVar == "") {
        ctx.font = "bold 32px San Francisco"; //ここを変数に
      } else {
        ctx.font = `bold 32px ${this.fontVar}`;
      }

      if (this.colors == "") {
        ctx.fillStyle = "#404040";
      } else {
        ctx.fillStyle = this.colors;
      }
      //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
      ctx.textBaseline = "center";
      ctx.textAlign = "center";
      //座標を指定して文字を描く（座標は画像の中心に）
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      ctx.fillText(text, x, y+10);
      console.log(text);
    },

    drawStyle: function (canvas) {
      const ctx = canvas.getContext("2d");
      const rgb = this.hex2rgb(this.fillColor);
      console.log("rgb :", rgb);
      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.globalAlpha})`;
      ctx.fillRect(0, 100, 250, 45);
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
        console.log("image",img);
      });
    },

    hex2rgb: function (hex) {
      if (hex.slice(0, 1) == "#") hex = hex.slice(1);
      if (hex.length == 3)
        hex =
          hex.slice(0, 1) +
          hex.slice(0, 1) +
          hex.slice(1, 2) +
          hex.slice(1, 2) +
          hex.slice(2, 3) +
          hex.slice(2, 3);

      return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
        return parseInt(str, 16);
      });
    },

    reDraw: function () {
      this.context.clearRect(0, 0, 250, 250);
      this.drawImage(this.canvas).then(() => {
        this.drawStyle(this.canvas);
        this.drawText(this.canvas, this.canvasText);
        const imageUri = this.canvas.toDataURL();
        this.$emit("image-created", imageUri);
      });
    },
  },

  watch: {
    uploadedImage: function () {
      this.reDraw();
    },
    canvasText: function () {
      this.reDraw();
    },

    fontVar: function () {
      this.reDraw();
    },
    colors: function () {
      this.reDraw();
    },
    globalAlpha: function () {
      this.reDraw();
    },
    fillColor: function () {
      this.reDraw();
    },
  },
};
</script>

<style scoped>
.canvas {
  border-radius: 50%;
}
</style>