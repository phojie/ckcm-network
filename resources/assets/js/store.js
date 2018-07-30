import { getLocalUser } from "./ckcmHelpers/auth";
import { getLocalfdetails } from "./ckcmHelpers/auth";
import { db } from "./firebase";
import { auth } from "./firebase";

import Axios from "axios";
const user = getLocalUser();
const fdetails = getLocalfdetails();
export default {
   state: {
      accountLoginData: user,
      fdetails: fdetails,
      isIn: !!user,
      isFB: !!fdetails,
      loading: false,
      auth_error: null,
      alertLogoutDone: false,
      windowSize: [],
      leftnavDrawer: true,
      friendList: [] //Object
   },
   getters: {
      isLoading(state) {
         return state.loading;
      },
      isIn(state) {
         return state.isIn;
      },
      isFB(state) {
         return state.isFB;
      },
      accountLoginData(state) {
         return state.accountLoginData;
      },
      authError(state) {
         return state.auth_error;
      },
      fdetails(state) {
         return state.fdetails;
      },
      alertLogoutDone(state) {
         return state.alertLogoutDone;
      },
      leftnavDrawer(state) {
         return state.leftnavDrawer
      },
      friendList(state) {
         return state.friendList
      }   
      
   },
   mutations: {
      firebaseSuccess(state, fdetailsload) {
         state.fdetails = Object.assign({},{fdetailsload} );
         localStorage.setItem("fdetails", JSON.stringify(state.fdetails));
      },
      loginSuccess(state, payload) {
         state.alertLogoutDone = false
         state.auth_error = null;
         state.isIn = true;
         state.loading = false;
         state.accountLoginData = Object.assign({}, payload, {token: payload.access_token});
         localStorage.setItem("user", JSON.stringify(state.accountLoginData));
         // localStorage.user = JSON.stringify(state.accountLoginData);
         // console.log(state.accountLoginData)
         const id = state.accountLoginData.user["ckcm-network_token_id"]
         db.ref('users/' + id).set({
            status: "online",
          }, function(error) {
            if (error) {
               console.log(error)
              // The write failed...r
            } else {
              // Data saved successfully!
            }
          });
      },
      logout(state) {
         const id = state.accountLoginData.user["ckcm-network_token_id"]
         db.ref('users/' + id).set({
            status: "offline",
          }, function(error) {
            if (error) {
               console.log(error)
              // The write failed...r
            } else {
              // Data saved successfully!
            }
          });
         
         localStorage.removeItem("user");
         localStorage.removeItem("fdetails");
         state.isIn = false;
         state.fdetails = null ;
         state.accountLoginData = null;
         state.alertLogoutDone = true
         auth.signOut().then(function() {
         // Sign-out successful.
         }).catch(function(error) {
         // An error happened.
         });
      },
      jieLoaderOn(state) {
         state.loading = true;
      },
      jieLoaderOff(state) {
         state.loading = false;
      },
      alertLogoutDone(state) {
         state.alertLogoutDone = false;
      },
      leftnavDrawerOff(state) {
         state.leftnavDrawer = false;
      },
      leftnavDrawerOn(state) {
         state.leftnavDrawer = true;
      },
      friendList(state, friendList) {
         state.friendList = friendList
      }
   },
   actions: {
      alertLogoutDone(context) {
         context.commit("alertLogoutDone");
      },
      jieLoaderOn(context) {
         context.commit("jieLoaderOn");
      },
      jieLoaderOff(context) {
         context.commit("jieLoaderOff");
      },
      loginFirebase(context) {
         const user = auth.currentUser;
         context.commit("firebaseSuccess", user)
      },
      friendList(context) {
         axios.get('/api/jwt/Ckcm-network-api/eqwe/friendList')
            .then((response) =>{
               context.commit("friendList",response.data.friendList)
            })
            .catch((error) =>{
               // rej(error);
            })
      }
   }
}
