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
import './firebase';
import VueFire from 'vuefire';
// import moment from 'moment-timezone';

// import firebase from 'firebase';
// window.firebase = firebase;

window._ = require('lodash');
window.moment = require('moment');
window.moment = require('moment-timezone');


Vue.use(require('vue-moment'));
// window.firebase = require('./firebase')

// notusing

import VueHotkey from 'v-hotkey';
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
   name: 'Timeago', // Component name, `Timeago` by default
   locale: 'en', // Default locale
   // We use `date-fns` under the hood
   // So you can use all locales from it
   // locales: {
   //   'zh-CN': require('date-fns/locale/zh_cn'),
   //   'ja': require('date-fns/locale/ja'),
   // }
 })

// notusing

Vue.use(VueFire);
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

      mycolor1: '#167F39',
      mycolor2: '#0065ff', //blue
      
      //fake white
      white2: '#FFFFF1',

      // jiethemeColor
      mycolor3: '#170e3f' //dark purple
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
