<template>
  <v-container>
    <v-row class="text-center my-auto" justify="center">
      <!-- 新しい手法 -->
      
      <div id="app" class="pd">
        <image-input v-model="uploadedImage">
          <DrawTool
            :canvas-text="canvasText"
            :canvas-text2="canvasText2"
            :canvas-text3="canvasText3"
            :canvas-text4="canvasText4"
            :canvas-text5="canvasText5"
            :canvas-text6="canvasText6"
            :canvas-text7="canvasText7"
            :canvas-text8="canvasText8"
            :canvas-text9="canvasText9"
            :canvas-text10="canvasText10"
            :canvas-text11="canvasText11"
            :uploadedImage="uploadedImage"
            :fontVar="fontVar"
            :colors="colors.hex"
            :fill-color="fillColor.hex"
            :global-alpha="globalAlpha"
            @image-created="createdImageUri=$event"
          />
        </image-input>
      </div>
      <!-- アップロードした画像を表示 -->

      <v-col cols="12"></v-col>
    </v-row>

    <v-row class="ml-2 ">
      <v-col class="mb-4">
        <div class="font-weight-medium title mb-3">✏️テキスト</div>
        <v-text-field
          placeholder="名前を入力"
          solo
          class="mx-auto"
          id="canvas_text"
          v-model="canvasText"
        ></v-text-field>

        <v-text-field
          placeholder="動物を入力"
          solo
          class="mx-auto"
          id="canvas_text2"
          v-model="canvasText2"
        ></v-text-field>

        <v-text-field
          placeholder="好きなタイプを入力"
          solo
          class="mx-auto"
          id="canvas_text3"
          v-model="canvasText3"
        ></v-text-field>

        <v-text-field
          placeholder="座右の銘を入力"
          solo
          class="mx-auto"
          id="canvas_text4"
          v-model="canvasText4"
        ></v-text-field>
        <v-text-field
          placeholder="アリナシを入力"
          solo
          class="mx-auto"
          id="canvas_text5"
          v-model="canvasText5"
        ></v-text-field>
        <v-text-field
          placeholder="会える会えないを入力"
          solo
          class="mx-auto"
          id="canvas_text6"
          v-model="canvasText6"
        ></v-text-field>
        <v-text-field
          placeholder="幸せな時を入力"
          solo
          class="mx-auto"
          id="canvas_text7"
          v-model="canvasText7"
        ></v-text-field>
        <v-text-field
          placeholder="特技を入力"
          solo
          class="mx-auto"
          id="canvas_text8"
          v-model="canvasText8"
        ></v-text-field>
        <v-text-field
          placeholder="何考えてるか入力"
          solo
          class="mx-auto"
          id="canvas_text9"
          v-model="canvasText9"
        ></v-text-field>
        <v-text-field
          placeholder="何点かを入力"
          solo
          class="mx-auto"
          id="canvas_text10"
          v-model="canvasText10"
        ></v-text-field>
        <v-text-field
          placeholder="一言を入力"
          solo
          class="mx-auto"
          id="canvas_text11"
          v-model="canvasText11"
        ></v-text-field>

        <v-row>
          <v-menu transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" class="ma-2 font-weight-black" v-bind="attrs" v-on="on">フォント</v-btn>
            </template>
            <v-list>
              <v-list-item @click="changeFont('あおぞら明朝')">あおぞら明朝</v-list-item>
              <v-list-item @click="changeFont('ヒラギノ丸ゴ ProN')">ヒラギノ丸ゴ ProN</v-list-item>
              <v-list-item @click="changeFont('あくあフォント')">あくあフォント</v-list-item>
              <v-list-item @click="changeFont('クレー')">クレー</v-list-item>
              <v-list-item @click="changeFont('けいふぉんと仮名')">けいふぉんと仮名</v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="ml-2">
      <v-col>
        <div class="font-weight-medium title mb-3">🛠設定</div>
        <div>文字の色</div>
        <chrome-picker v-model="colors" />
      </v-col>
    </v-row>

    <!-- モーダル -->
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-2 mt-5 font-weight-black" color="primary" v-bind="attrs" v-on="on">
              保存
              <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark class="justify-center text-center title bold">
                <div
                  class="justify-center text-center title font-weight-bold py-3 mx-auto"
                >🎁完成しました🎁</div>
              </v-toolbar>
              <v-card-text class="justify-center text-center bold">
                <div
                  class="font-weight-medium title justify-center text-center my-3 font-weight-bold"
                >✋画像を長押し、または右クリックで画像を保存してね</div>
                <img class="justify-center text-center img-radius" :src="createdImageUri" />
                <div
                  class="font-weight-medium title justify-center text-center font-weight-bold"
                >このサービスを是非とも共有してください✌️</div>
              </v-card-text>
              <div class="text-center">
                <v-btn large class="mb-2 font-weight-bold" color="primary" @click="tweet()">ツイートする</v-btn>
              </div>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// キャンバス用コンポーネントの読み込み
import DrawTool from "./DrawTool.vue";
import { Chrome } from "vue-color";
import ImageInput from "./ImageInput";

export default {
  components: {
    DrawTool,
    "chrome-picker": Chrome,
    ImageInput,
  },
  name: "Main",

  data: () => ({
    uploadedImage: "",
    inputedImage: "",
    canvasText: "",
    canvasText2: "",
    canvasText3: "",
    canvasText4: "",
    canvasText5: "",
    canvasText6: "",
    canvasText7: "",
    canvasText8: "",
    canvasText9: "",
    canvasText10: "",
    canvasText11: "",
    fontVar: "",
    colors: {
      hex: "#000000",
    },
    fillColor: {
      hex: "#000000",
    },
    globalAlpha: 0,
    createdImageUri: "",
  }),
  methods: {
    changeMessage: function (newText) {
      this.canvasText = newText;
    },
    changeMessage2: function (newText) {
      this.canvasText2 = newText;
    },
    changeMessage3: function (newText) {
      this.canvasText3 = newText;
    },
    changeMessage4: function (newText) {
      this.canvasText4 = newText;
    },
    changeMessage5: function (newText) {
      this.canvasText5 = newText;
    },
    changeMessage6: function (newText) {
      this.canvasText6 = newText;
    },
    changeMessage7: function (newText) {
      this.canvasText7 = newText;
    },
    changeMessage8: function (newText) {
      this.canvasText8 = newText;
    },
    changeMessage9: function (newText) {
      this.canvasText9 = newText;
    },
    changeMessage10: function (newText) {
      this.canvasText10 = newText;
    },
    changeMessage11: function (newText) {
      this.canvasText11 = newText;
    },
    changeFont: function (newFontName) {
      this.fontVar = newFontName;
    },
    changeStyle: function (fontColorStr, fillColorStr, globalAlpha) {
      this.colors.hex = fontColorStr;
      this.fillColor.hex = fillColorStr;
      this.globalAlpha = globalAlpha;
      console.log("change");
    },
    tweet() {
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "自己紹介メーカーでカードを作ろう！" +
        "%20%23Twitter自己紹介メーカー" +
        "&url=" +
        "https://twitter-icon-3233d.web.app";
      location.href = shareURL;
    },
  },
};
</script>

<style>
.img-radius {
  border: 1px solid #000000;
}

.pd {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>



