
// import { app } from 'firebase';

const config = {
   apiKey: "AIzaSyAcYoRTQ4nmID5XjHbPXz543yG5ozz1bFM",
   authDomain: "authjie.ckcm-network.com",
   databaseURL: "https://christ-the-king-network.firebaseio.com",
   projectId: "christ-the-king-network",
   storageBucket: "christ-the-king-network.appspot.com",
   messagingSenderId: "631685789688"

   // apiKey: "AIzaSyAcYoRTQ4nmID5XjHbPXz543yG5ozz1bFM",
   // authDomain: "authjie.ckcm-network.com",
   // databaseURL: "https://christ-the-king-network.firebaseio.com",
   // projectId: "christ-the-king-network",
   // storageBucket: "christ-the-king-network.appspot.com",
   // messagingSenderId: "631685789688"
};
export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = app.database();
export const usersRef = db.ref('users');
