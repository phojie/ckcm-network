import { getLocalUser } from "./ckcmHelpers/auth";
import { getLocalfdetails } from "./ckcmHelpers/auth";
import { db } from "./firebase";
import { auth } from "./firebase";
const user = getLocalUser();
const fdetails = getLocalfdetails();
export default {
   state: {
      fdetails: fdetails,
      AccountFdetails: [],
      isIn: !!user,
      isFB: !!fdetails,
      loading: false,
      auth_error: null,
      alertLogoutDone: false,
      windowSize: [],
      leftnavDrawer: true,
      rightnavDrawer: true,
      friendList: [], //Object,
      scrollLimitNews: 2,
      homeReload: false,
      resultInfoState : [],
      accountLoginData: user,
      mysubjects: [],
      myprograms: [],
      myfaculties: [],
      allUsers: [],
      myrooms: [],
      mystudents: [],
      acceptStudents: [],
      convoList: [],
   },
   getters: {
      scrollLimitNews(state) {
         return state.scrollLimitNews;
      },
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
      AccountFdetails(state) {
         return state.AccountFdetails;
      },
      alertLogoutDone(state) {
         return state.alertLogoutDone;
      },
      leftnavDrawer(state) {
         return state.leftnavDrawer
      },
      rightnavDrawer(state) {
         return state.rightnavDrawer
      },
      friendList(state) {
         return state.friendList
      },
      homeReload(state) {
         return state.homeReload
      },
      mysubjects(state) {
         return state.mysubjects
      },
      myprograms(state) {
         return state.myprograms
      },
      myfaculties(state){
         return state.myfaculties
      },
      allUsers(state) {
         return state.allUsers
      },
      myrooms(state) {
         return state.myrooms
      },
      mystudents(state) {
         return state.mystudents
      },
      acceptStudents(state) {
         return state.acceptStudents
      },
      convoList(state) {
         return state.convoList
      }
   },
   mutations: {
      homeReload(state) {
         state.homeReload = true
      },
      homeReloadFalse(state) {
         state.homeReload = false
      },
      scrollLimitNewsAdd(state) {
         state.scrollLimitNews = 5;
      },
      firebaseSuccess(state, fdetailsload) {
         state.fdetails = Object.assign({},{fdetailsload} );
         localStorage.setItem("fdetails", JSON.stringify(state.fdetails));
      },
      loginSuccess(state, payload) {
         state.alertLogoutDone = false
         state.auth_error = null;
         state.isIn = true;
         state.loading = false
         state.accountLoginData = Object.assign({}, {user: payload}, {token: payload['ckcm-network_token_id']} );
         localStorage.setItem("user", JSON.stringify(state.accountLoginData));
         // localStorage.user = JSON.stringify(state.accountLoginData);
         // console.log(state.accountLoginData)
         const id = state.accountLoginData.user["ckcm-network_token_id"]
         let getFn = state.accountLoginData.user.displayName
         let firstname = getFn.split(" ");
         // type :   1 : not enrolled 
         //          2 : enrolled
         //          3 : andmin
         
         db.ref('users/' + id).update({
            status: "online"
            // displayName: state.accountLoginData.user.displayName ,
            // photoUrl: state.accountLoginData.user.photoUrl,
            // timestamp: "",
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
         db.ref('users/' + id).update({
            status: "offline"
            // displayName: state.accountLoginData.user.displayName ,
            // photoUrl: state.accountLoginData.user.photoUrl,
            // timestamp: "",
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
         localStorage.removeItem("ListOfChats");
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
      rightnavDrawerOff(state) {
         state.rightnavDrawer = false;
      },
      rightnavDrawerOn(state) {
         state.rightnavDrawer = true;
      },
      friendList(state, friendList) {
         state.friendList = friendList
      },
      getAccountFdetails(state) {
         state.loading = true
         const id = state.accountLoginData.user["ckcm-network_token_id"]
         var myAccount = db.ref(`users/${id}`);
         myAccount.on("value", function(data) {
            state.AccountFdetails = data.val()
            state.loading = false
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },

      getSubjects(state) {
         var get = db.ref('CKCMDATA/subject');
         get.on("value", function(data) {
            state.mysubjects = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getPrograms(state) {
         var get = db.ref('CKCMDATA/programs');
         get.on("value", function(data) {
            state.myprograms = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getFaculties(state) {
         var get = db.ref('CKCMDATA/faculty');
         get.on("value", function(data) {
            state.myfaculties = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getUsers(state) {
         var get = db.ref('users');
         get.on("value", function(data) {
            state.allUsers = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getRooms(state) {
         var get = db.ref('CKCMDATA/room');
         get.on("value", function(data) {
            state.myrooms = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getStudents(state) {
         var get = db.ref('CKCMDATA/students');
         get.on("value", function(data) {
            state.mystudents = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getAcceptstudents(state) {
         var get = db.ref('CKCMDATA/acceptStudents');
         get.on("value", function(data) {
            state.acceptStudents = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      },
      getConvoList(state) {
         var get = db.ref('ConversationList');
         get.on("value", function(data) {
            state.convoList = data.val()
         }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
         });
      }
      
   },
   actions: {
      refreshPage(context) {
         context.commit("getAccountFdetails")
      },
      scrollLimitNewsAdd(context) {
         context.commit("scrollLimitNewsAdd");
      },
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
