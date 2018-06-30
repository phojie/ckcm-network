import { getLocalUser } from "./ckcmHelpers/auth";
import { getLocalfdetails } from "./ckcmHelpers/auth";
const user = getLocalUser();
const fdetails = getLocalfdetails();

export default {
   state: {
      accountLoginData: user,
      fdetails: fdetails,
      isIn: !!user,
      loading: false,
      auth_error: null,
      
   },
   getters: {
      isLoading(state) {
         return state.loading;
      },
      isIn(state) {
         return state.isIn;
      },
      accountLoginData(state) {
         return state.accountLoginData;
      },
      authError(state) {
         return state.auth_error;
      },
      accountLoginData(state) {
         return state.accountLoginData;
      },
      fdetails(state) {
         return state.fdetails;
      }
   },
   mutations: {
      firebaseSuccess(state, fdetailsload) {
         state.fdetails = Object.assign({},{fdetailsload} );
         localStorage.setItem("fdetails", JSON.stringify(state.fdetails));
      },
      loginSuccess(state, payload) {
         state.auth_error = null;
         state.isIn = true;
         state.loading = false;
         state.accountLoginData = Object.assign({}, payload.user, {
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
      }
   },
   actions: {
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
      }
   }
}
