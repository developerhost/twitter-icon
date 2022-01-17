<template>
  <v-app>
    <v-container class="grey lighten-5 pa-0 mx-auto mt-5 justify-center">
      <div class="border mx-5">
      <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/img/twitter-social-media-icon-design-template-vector-png_127015-removebg-preview.png"
        transition="scale-transition"
        width="60"
      />

      <div class="subtitle-1 font-weight-bold">
        自己紹介カードメーカー
      </div>
    </div>
      <v-row no-gutters class="justify-center">
        <v-layout wrap>

        
        <v-col cols="2" sm="2" class="pa-0 mr-2">
                <v-img
        alt="Vuetify Logo"
        class="shrink pa-0"
        contain
        src="./assets/img/origin_0226025355.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="2" sm="2" class="pa-0 mr-2">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/img/DM_0226030226.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="2" sm="2" class="pa-0 mr-2">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/img/ツイキャス_0226025842.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="2" sm="2" class="pa-0 mr-2">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/img/ネタツイ_0226030909.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        <v-col cols="2" sm="2" class="pa-0 mr-2">
                <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./assets/img/フォロバ_0226030600.png"
        transition="scale-transition"
        width="100"
      />
        </v-col>
        </v-layout>
        
        <div class="subtitle-1 font-weight-bold mt-5">
        ＼簡単にフォロワーが増えます／
      </div>
      </v-row>
      </div>
    </v-container>

<v-row class="my-50">
    <v-main>
      <Main />
    </v-main>

</v-row
>  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.border{
    padding: 0.5em 1em;
    margin: 2em 0;
    border: double 5px #4ec4d3;
}
</style>