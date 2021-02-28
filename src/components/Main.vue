<template>
  <v-container>
    <v-row class="text-center" justify="center">

      <!-- canvas -->
      <div class="example">
        <MyCanvas :radius="radius"/>
        <p><input type="range" min="0" max="100" m-model.number="radius"></p>
      </div>

      <div class="img">
        <MyCanvas :img="img"/>
        <!-- <p><input type="range" min="0" max="100" m-model.number="radius"></p> -->
      </div>

      <!-- アップロードした画像を表示 -->
      <div id="app">
        <h2>画像</h2>
        <img v-show="uploadedImage" :scr="uploadedImage" />
        <input type="file" v-on:change="onFileChange">
      </div>


      <v-col cols="12">
        <v-img
          alt="Vuetify Logo"
          class="shrink mx-auto rounded-circle"
          contain
          src="../assets/img/img.jpg"
          transition="scale-transition"
          width="200"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="ml-2">
      <v-col class="mb-4">
        <div class="font-weight-medium title mb-3">
          ✏️テキスト
        </div>
        <v-text-field
          label="テキストを入力"
          placeholder="Placeholder"
          solo
          class="mx-auto"
        ></v-text-field>
        <template>
          <v-row>
            <v-menu transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ma-2 font-weight-black" v-bind="attrs" v-on="on">
                  テンプレート
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  DM返しません
                </v-list-item>
                <v-list-item>
                  フォロバします
                </v-list-item>
                <v-list-item>
                  ツイキャス
                </v-list-item>
                <v-list-item>
                  ネタツイ垢
                </v-list-item>
                <v-list-item>
                  リプ歓迎
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </template>
        <template>
          <v-row>
            <v-menu transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ma-2 font-weight-black" v-bind="attrs" v-on="on">
                  フォント
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  あおぞら明朝
                </v-list-item>
                <v-list-item>
                  851チカラヅヨク
                </v-list-item>
                <v-list-item>
                  JKゴシック
                </v-list-item>
                <v-list-item>
                  自由帳フォント
                </v-list-item>
                <v-list-item>
                  花鳥風月
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </template>
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
import MyCanvas from './MyCanvas.vue'
export default {
  components: {
    MyCanvas
  },
  name: "Main",
  el: '#app',
  data: () => ({
    radius: 50,
    uploadedImage: '',
  }),
  methods: {
    onfileChange(e) {
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
    }
  }
};
</script>
