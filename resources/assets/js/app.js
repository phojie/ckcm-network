/**
 * depen.
 */
require('./bootstrap');
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
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

/**
 * Functions
 */
Vue.use(Vuetify);
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueProgressBar, {
  color: 'green',
  failedColor: 'red',
  thickness: '6px',
  transition: {
    speed: '0.2s',
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
    authDomain: "christ-the-king-network.firebaseapp.com",
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

initialize(store, router); //iyang ge usa para mka sulod ang store ug ang router

/**
 * App.
 */

const jie = new Vue({
    el: '#jie',
    router,
    store,
    components:{
        jieApp
    }
});
