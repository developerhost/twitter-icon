import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDEPgMywolFozga6apxYKy17zIufQVsNfY",
    authDomain: "twitter-icon-3233d.firebaseapp.com",
    projectId: "twitter-icon-3233d",
    storageBucket: "twitter-icon-3233d.appspot.com",
    messagingSenderId: "838145234247",
    appId: "1:838145234247:web:e131536de1af8a5934a862",
    measurementId: "G-T4K61W440G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
