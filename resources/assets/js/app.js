/**
 * depen.
 */
require('./bootstrap');
// import 'animate.css/animate.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import jieApp from './components/jieApp.vue';
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify';
import StoreJieData from './store'
import Vuex from 'vuex';
import {initialize} from './ckcmHelpers/general';
import VueProgressBar from 'vue-progressbar'
import '@mdi/font/css/materialdesignicons.css';

// notusing
import VueHotkey from 'v-hotkey'

/**
 * Functions
 */
Vue.use(Vuetify, { 
   theme: {  
      primary: '#fd9800',
      secondary: '#feb155',
      accent: '#F4E2D1',
      error: '#FF5252',
      info: '#A44F1A',
      success: '#512DA8',
      warning: '#820333',

      // text color
      primaryColortext: '#757575',
      secondaryColortext: '#414141',

      mycolor1: '#151126',
      mycolor2: '#0065ff', //blue
      
      // background color
      mycolor3: '#233D4D' //dark purple
   }
 })
//  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4' f99121

Vue.use(VueHotkey)
Vue.use(Vuetify);
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(VueProgressBar, {
   color: '#512DA8',
   failedColor: '#820333',
   thickness: '3px',
   transition: {
      speed: '1.5s',
      opacity: '0.6s',
      termination: 300
   },
   autoRevert: true,
   location: 'top',
   inverse: false,
   autoFinish: false
})
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAcYoRTQ4nmID5XjHbPXz543yG5ozz1bFM",
    authDomain: "authjie.ckcm-network.com",
    databaseURL: "https://christ-the-king-network.firebaseio.com",
    projectId: "christ-the-king-network",
    storageBucket: "christ-the-king-network.appspot.com",
    messagingSenderId: "631685789688"
};
firebase.initializeApp(config);


const router = new VueRouter({
    routes,
    mode: 'history'
});

const store = new Vuex.Store(StoreJieData);

initialize(store, router ); //iyang ge usa para mka sulod ang store ug ang router

/**
 * App.
 */

const jie = new Vue({
    el: '#jie',
    router,
    store,
    components:{
        jieApp,
    }
});
