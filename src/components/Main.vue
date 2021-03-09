<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <!-- アップロードした画像を表示 -->
      <div id="app">
        <h2>画像</h2>
        <input type="file" v-on:change="onFileChange" />
        <DrawTool :canvas-text="canvasText" :uploadedImage="uploadedImage" :fontVar="fontVar"/>
      </div>

      <v-col cols="12">
      </v-col>
    </v-row>

    <v-row class="ml-2">
      <v-col class="mb-4">
        <div class="font-weight-medium title mb-3">
          ✏️テキスト
        </div>
        <v-text-field
          placeholder="テキストを入力"
          solo
          class="mx-auto"
          id="canvas_text"
          v-model="canvasText"
        ></v-text-field>
        
          <v-row>
            <v-menu transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ma-2 font-weight-black" v-bind="attrs" v-on="on">
                  テンプレート
                </v-btn>
              </template>
              
              <v-list>
                <v-list-item @click="changeMessage('DM返しません')">
                  DM返しません
                </v-list-item>
                <v-list-item @click="changeMessage('フォロバします')">
                  フォロバします
                </v-list-item>
                <v-list-item @click="changeMessage('ツイキャス')">
                  ツイキャス
                </v-list-item>
                <v-list-item @click="changeMessage('ネタツイ垢')">
                  ネタツイ垢
                </v-list-item>
                <v-list-item @click="changeMessage('リプ歓迎')">
                  リプ歓迎
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>

          <v-row>
            <v-menu transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ma-2 font-weight-black" v-bind="attrs" v-on="on">
                  フォント
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="changeFont('あおぞら明朝')" >
                  あおぞら明朝
                </v-list-item>
                <v-list-item @click="changeFont('ヒラギノ丸ゴ ProN')">
                  ヒラギノ丸ゴ ProN
                </v-list-item>
                <v-list-item @click="changeFont('あくあフォント')">
                  あくあフォント
                </v-list-item>
                <v-list-item @click="changeFont('クレー')">
                  クレー
                </v-list-item>
                <v-list-item @click="changeFont('けいふぉんと仮名')">
                  けいふぉんと仮名
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row> 
      </v-col>
    </v-row>

    <v-row class="ml-2">
      <v-col>
        <div class="font-weight-medium title mb-3">
          🎨スタイル
        </div>    
      </v-col>
    </v-row>
    <v-row no-gutters class="justify-center">
        <v-layout wrap>

        
        <v-col cols="3" sm="2" class="pa-0 mx-5">
                <v-img
        alt="Vuetify Logo"
        class="shrink pa-0"
        contain
        src="../assets/img/DM返しません_0226114010.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="3" sm="2" class="pa-0 mr-5">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/img/フォロバします_0226114031.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="3" sm="2" class="pa-0 mr-5">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/img/ツイキャスicon_0226114049.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        </v-layout>
      </v-row>

      <v-row class="ml-2">
      <v-col>
        <div class="font-weight-medium title mb-3">
          🛠設定
        </div>
        <div>
          文字の色
          </div>    
          <chrome-picker v-model="colors" />
      </v-col>
      </v-row>

        <div class="text-center">
      <v-btn
        class="ma-2 mt-5 font-weight-black"
        color="primary"
        dark
      >
        保存
        <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </v-btn> 
    </div>
  </v-container>
</template>

<script>
// キャンバス用コンポーネントの読み込み
import DrawTool from './DrawTool.vue'
import { Chrome } from 'vue-color'


export default {
  components: {
    DrawTool,
    'chrome-picker': Chrome,
  },
  name: "Main",

  data: () => ({
    uploadedImage: '',
    canvasText:"",
    fontVar: '',
    colors: {
      "hex": "#194d33",
    },
  }),
  methods: {
    onFileChange(e) {
      
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    changeMessage: function(newText) {
      this.canvasText = newText
    },
    changeFont: function(newFontName) {
      this.fontVar = newFontName
    }
  },
  computed: {
  colors: {
    get () {
      return this.colors
    },
    set (value) {
      this.colors = value
    }
  }
},
}
</script>
