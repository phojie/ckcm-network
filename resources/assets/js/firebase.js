
// import { app } from 'firebase';
import store from './store.js';

const config = {
   apiKey: "AIzaSyAcYoRTQ4nmID5XjHbPXz543yG5ozz1bFM",
   authDomain: "authjie.ckcm-network.com",
   databaseURL: "https://christ-the-king-network.firebaseio.com",
   projectId: "christ-the-king-network",
   storageBucket: "christ-the-king-network.appspot.com",
   messagingSenderId: "631685789688"
};
export const app = firebase.initializeApp(config);
export const auth = app.auth();
// firebase.initializeApp(config);
// export const ckcmApp = app.auth;
// export const auth = app.auth();
// export const authGoogle = firebase.auth.GoogleAuthProvider();
export const db = app.database();
export const usersRef = db.ref('users');
export const  newsfeedRef = db.ref('Newsfeed').orderByChild('order');
export const  order = db.ref('N_order/newsfeedOrder');

// export const storage = app.storage().ref('newsFeedImages');

// export const timestamp = app.ServerValue.TIMESTAMP();

// to identify if data has change or added
// newsfeedRef.on('value', snap => console.log(snap.val()));

