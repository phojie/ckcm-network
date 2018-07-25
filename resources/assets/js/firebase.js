
import { initializeApp } from 'firebase';

const app = initializeApp({
   apiKey: "AIzaSyAcYoRTQ4nmID5XjHbPXz543yG5ozz1bFM",
   authDomain: "authjie.ckcm-network.com",
   databaseURL: "https://christ-the-king-network.firebaseio.com",
   projectId: "christ-the-king-network",
   storageBucket: "christ-the-king-network.appspot.com",
   messagingSenderId: "631685789688"
});
// firebase.initializeApp(config);

export const db = app.database();
export const usersRef = db.ref('users');
