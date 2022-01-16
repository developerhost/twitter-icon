<template>
  <div>
    <div id="canvas-area">
      <canvas
        id="myCanvas"
        width="192px"
        height="294px"
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
import imgSrc from "@/assets/img/comp.jpg";

export default {
  name: "DrawTool",
  props: [
    "uploadedImage",
    "canvasText",
    "canvasText2",
    "canvasText3",
    "canvasText4",
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
      max_width: 192,
      max_height: 294,
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
        ctx.font = "bold 8px San Francisco"; //ここを変数に
      } else {
        ctx.font = `bold 8px ${this.fontVar}`;
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
      var x = canvas.width / 4;
      var y = canvas.height / 4;

      ctx.fillText(text, x, y+10);
      console.log(text);
    },

    drawText2: function (canvas, text) {
      const ctx = canvas.getContext("2d");
      //文字のスタイルを指定
      if (this.fontVar == "") {
        ctx.font = "bold 8px San Francisco"; //ここを変数に
      } else {
        ctx.font = `bold 8px ${this.fontVar}`;
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
      var y = 120;

      ctx.fillText(text, x, y+10);
      console.log(text);
    },

    drawText3: function (canvas, text) {
      const ctx = canvas.getContext("2d");
      //文字のスタイルを指定
      if (this.fontVar == "") {
        ctx.font = "bold 8px San Francisco"; //ここを変数に
      } else {
        ctx.font = `bold 8px ${this.fontVar}`;
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
      var y = 140;

      ctx.fillText(text, x, y+10);
      console.log(text);
    },

    drawText4: function (canvas, text) {
      const ctx = canvas.getContext("2d");
      //文字のスタイルを指定
      if (this.fontVar == "") {
        ctx.font = "bold 8px San Francisco"; //ここを変数に
      } else {
        ctx.font = `bold 8px ${this.fontVar}`;
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
      var y = 155;

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


    //ここが問題
    asyncLoadImage: async function () {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        if (!this.uploadedImage) {
          img.src = imgSrc;
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
        this.drawText2(this.canvas, this.canvasText2);
        this.drawText3(this.canvas, this.canvasText3);
        this.drawText4(this.canvas, this.canvasText4);
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
    canvasText2: function () {
      this.reDraw();
    },
    canvasText3: function () {
      this.reDraw();
    },
    canvasText4: function () {
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
  border: solid;
}
</style>