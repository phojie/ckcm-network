import { getLocalUser } from "./ckcmHelpers/auth";
import { getLocalfdetails } from "./ckcmHelpers/auth";
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
         state.accountLoginData = Object.assign({}, payload, {
               token: payload.access_token
         });
         localStorage.setItem("user", JSON.stringify(state.accountLoginData));
         // localStorage.user = JSON.stringify(state.accountLoginData);
      },
      logout(state) {
         localStorage.removeItem("user");
         localStorage.removeItem("fdetails");
         state.isIn = false;
         state.fdetails = null ;
         state.accountLoginData = null;
         state.alertLogoutDone = true
         firebase.auth().signOut().then(function() {
         // Sign-out successful.
         }).catch(function(error) {
         // An error happened.
         });
      },
      login(state) {
         state.loading = true;
         state.auth_error = null;
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
      login(context) {
         context.commit("login"); //calling the mutation login
      },
      loginFirebase(context) {
         const user = firebase.auth().currentUser;
         context.commit("firebaseSuccess", user)
      },
   }
}
