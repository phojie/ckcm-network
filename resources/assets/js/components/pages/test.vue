<template>
<v-app style="overflow:auto" class="scrollbar-primary" >
   <!-- jieLandingBg -->
   <!-- mycolor3 -->
   <!--  -->
   <!-- jieLandingBg2 -->
   <v-layout v-scroll="onScroll" column align-center justify-center>
   </v-layout>
   <v-card  class="" style="background-color:#794bc4;min-height: 700px; border-radius: 0" >
   <v-toolbar :dense="fixed" :fixed="fixed"   flat dark style="background-color:#794bc4;" color="">
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title  class="mr-5">
         <v-avatar class="" tile size="35">
            <img src="jieIcons/apple-touch-icon.png">
         </v-avatar>
         <span style="font-size:13px" class="jieSvgBg1 textfm6">Christ the king Network</span> 
         <div style="margin-top:-13px;margin-left:60px;font-size:8px;position:absolute" class="textfm6">Developed for Ckcmians</div>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-flex class="ml-3 hidden-sm-and-down" md7 lg6 >
         <v-tabs show-arrows color="transparent" v-model="landingTabs" next-icon :hide-slider="sliderToogle"   slider-color="deep-purple lighten-3" >
            <v-tab href="#login"  @click="() => (sliderToogle =! true, loginToogle =! false)" class="textNone textfm13 txt13"  :ripple="false" >
               Use cases
            </v-tab>
            <v-tab  href="#cases" @click="() => (sliderToogle =! true, loginToogle =! false)"  class="textNone textfm13  txt13"  :ripple="false" >
               Join us today
            </v-tab>
            <v-tab  href="#about" @click="() => (sliderToogle =! true, loginToogle =! false)" class="textNone textfm13 txt13" :ripple="false" >
               About
            </v-tab>
            <v-tab  href="#features" @click="() => (sliderToogle =! true, loginToogle =! false)" class="textNone textfm13 txt13" :ripple="false" >
               Features
            </v-tab>
            <v-tab  @click="() => (sliderToogle =! true, loginToogle =! false)" class="mr-5 textNone textfm13  txt13" :ripple="false" >
               More
               <v-icon>arrow_drop_down</v-icon>
            </v-tab>
         </v-tabs>
      </v-flex>
      <!-- <v-btn color="red darken-4" small round  class="textDefault  textfm1 text-xs-center"> -->
      <v-btn icon="" class="enrollBtn" small>
         <img  height="20" width="20" src="https://img.icons8.com/ios/50/ffffff/search-filled.png">
      </v-btn>
      <v-btn style="font-size:13px !important"  color="white" flat small  round  class="enrollBtn textNone textfm13 text-xs-center">
         Apply
      </v-btn>
      <v-btn color="red darken-4" small  round  class="enrollBtn hidden-sm-and-down textNone textfm13 text-xs-center">
         <!-- @click="loginTab"  -->
         Enroll now
      </v-btn>
      <!-- <v-btn color="red darken-4" small round  class="hidden-md-and-up textDefault  textfm1 text-xs-center">
         Enroll now
      </v-btn> -->
   </v-toolbar>
      <!-- <v-layout class=" mt-4" row wrap justify-center align-center align-content-center >
         <v-flex class="" xs12 lg7 md8 sm12>
               <img src="/imgs/ckcm-network-homepage-illustration.png" alt="">
         </v-flex>
         <v-flex  class="px-2 mt-2" xs12 lg4 md10 sm12>
            <v-card v-show="passwordReset" class=" jieSvgBg1" >
               <v-card-text class="" >
                  <div class="headline">Password Reset</div>
                  unya ra
                  <v-btn @click="passwordReset = false">Return</v-btn>
               </v-card-text>
            </v-card>
            <v-card v-show="!passwordReset" class="jieSvgBg1" >
               <v-card-title class="headline" >
                  Sign in to continue
               </v-card-title>
               <v-container style="margin-top:-10px">
                  <v-form @submit.prevent="AuthCodeID">
                     <v-text-field
                        type="text" prepend-icon="person" clearable
                        v-model="username" label="Enter your username"
                        :disabled="jieLoading" class="textfm1"
                        @change="$v.username.$touch()" 
                        :error-messages="usernameErrors" 
                        autofocus
                     > 
                     </v-text-field>
                     <v-text-field
                        :type="jieVisibility ? 'text' : 'password'" :prepend-icon="jieVisibility ? 'visibility' : 'visibility_off'" 
                        :prepend-icon-cb="() => ( jieVisibility = !jieVisibility)"
                        v-model="password" label="Enter your password"
                        clearable :disabled="jieLoading" class="textfm1"
                        @input="$v.password.$touch()"  @blur="$v.password.$touch()"
                        :error-messages="passwordErrors" ref="password"
                        
                     >
                     </v-text-field>
                     <v-layout row >
                        <v-checkbox 
                           :disabled="jieLoading"
                           v-model="checkbox" :ripple="false"
                           label="Stay signed in"
                           color="grey" class=" textfm1 alwaysSignCHECK"
                        ></v-checkbox>
                        <v-spacer></v-spacer>
                        <a v-show="!jieLoading" class="blue--text mt-2 mr-4 textfm1" @click="passwordReset = true" > Forgot password?</a>
                  </v-layout>
                  <v-btn 
                     block class="textfm1 mb-3 "
                     :loading="jieLoading" type="submit"
                     :ripple="false" color="primary" 
                     style="margin-top:-10px"
                  >
                     Submit
                  </v-btn>
                        <v-progress-linear  class="deep-purple lighten-5" height="1" :indeterminate="jieLoading"></v-progress-linear>
                     <v-layout row wrap>
                        <v-btn :disabled="jieLoading" block @click="loginWithGoogle" style="font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;"  class=" white grey--text  textDefault" > <v-avatar size="14px" class="mr-2" >  <img src="/imgs/google.svg" alt=""></v-avatar>Sign in with Google</v-btn>
                           <v-divider vertical class="mx-1"></v-divider>
                        <v-btn :disabled="jieLoading" block @click="loginWithFacebook" style="background-color:#3b5998;font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;" class=" white--text textDefault" > <v-avatar tile size="14px" class="mr-2" >  <img src="/imgs/facebook.svg" alt=""></v-avatar>Sign in with Facebook</v-btn>
                     </v-layout>
                  </v-form>
               </v-container>
            </v-card>
         </v-flex>
      </v-layout> -->
      <div class=" mt-5">
            <!-- <v-container fluid light> -->
               
               <v-tabs-items v-model="landingTabs">
                  <v-tab-item id="login">
                        <!-- jieLandingBg2 -->
                        <v-jumbotron  class="jieLandingBg2" height="auto"  dark>
                           <v-container class="" fill-height>
                              <v-layout  row wrap align-center>
                              <v-flex lg8 md7 sm12>
                                 <div style="margin-top:-20px;margin-left:530px;position:absolute;width:130px;height:130px;border-radius:50%" class="white"></div>
                                 <!-- <div style="margin-top:-50px;margin-left:350px;position:absolute;width:50px;height:50px;border-radius:50%" class="white"></div> -->
                                 <h1 style="font-size:25px;" class="mb-4 deep-purple--text text--lighten-4 textfm7">Developers</h1>
                                 <h1 style="margin-top:-100px;margin-left:240px;position:absolute;font-size:170px;color:#4f02993b;" class=" textfm9" >Ckcm</h1>
                                 <h1 style="font-size:55px;" class="textfm9" >
                                    <textra :data='words' :timer="2" infinite filter="top-bottom" />
                                    <span style="margin-top:-20px;">what's happening.</span>
                                 </h1>
                                 <span style="font-size:20px;" class="textfm7">Publish and analyze posts, be updated, and create unique friend experiences.</span>
                                 <!-- <v-divider class="my-3"></v-divider> -->
                                 <!-- <v-btn
                                    class="mx-0"
                                    color="deep-purple "
                                 >
                                    Enroll
                                 </v-btn> -->
                              </v-flex>
                              <v-flex lg4 md5 sm12> 
                                 <v-card flat class="transparent pa-4">
                                    <v-card  light class=" pa-3 jieSvgBg1" >
                                       <v-card-title class="headline" >
                                          Sign in to continue
                                       </v-card-title>
                                       <!-- <div style="margin-top:260px;margin-left:50px;position:absolute;width:15px;height:15px;border-radius:50%" class="deep-purple lighten-3"></div> -->
                                       <div style="margin-top:-10px;margin-left:250px;position:absolute;width:10px;height:10px;border-radius:50%" class="deep-purple lighten-3"></div>
                                       <div style="margin-top:-50px;margin-left:250px;position:absolute;width:30px;height:30px;border-radius:50%" class="deep-purple lighten-3"></div>
                                       <v-form @submit.prevent="AuthCodeID">
                                          <v-text-field
                                             color="deep-purple"
                                             type="text" prepend-icon="person" clearable
                                             v-model="username" label="Enter your username"
                                             :disabled="jieLoading" class="textfm1 authPlace"
                                             @change="$v.username.$touch()" 
                                             :error-messages="usernameErrors" 
                                             autofocus
                                          > 
                                          </v-text-field>
                                          <v-text-field
                                             color="deep-purple"
                                             :type="jieVisibility ? 'text' : 'password'" :prepend-icon="jieVisibility ? 'visibility' : 'visibility_off'" 
                                             :prepend-icon-cb="() => ( jieVisibility = !jieVisibility)"
                                             v-model="password" label="Enter your password"
                                             clearable :disabled="jieLoading" class="textfm1 authPlace"
                                             @input="$v.password.$touch()"  @blur="$v.password.$touch()"
                                             :error-messages="passwordErrors" ref="password"
                                             
                                          >
                                          </v-text-field>
                                          <v-layout row >
                                             <v-checkbox 
                                                :disabled="jieLoading"
                                                v-model="checkbox" :ripple="false"
                                                label="Stay signed in"
                                                color="grey" class=" textfm1 alwaysSignCHECK"
                                             ></v-checkbox>
                                             <v-spacer></v-spacer>
                                          </v-layout>
                                          <!-- <v-btn 
                                             outline
                                             block class="textfm1 mb-3 white--text "
                                             :loading="jieLoading" type="submit"
                                             :ripple="false" color="deep-purple lighten-2" 
                                             style="margin-top:-10px"
                                          >
                                             Submit
                                          </v-btn> -->
                                          <v-btn 
                                             block class="textNone mb-3 white--text "
                                             :loading="jieLoading" type="submit" 
                                             :ripple="false" color="deep-purple lighten-2" 
                                             style="margin-top:-10px;"
                                          >
                                             Submit
                                          </v-btn>
                                          <v-progress-linear color="deep-purple " height="2" :indeterminate="jieLoading"></v-progress-linear>
                                             <a v-show="!jieLoading" class="blue--text mt-2 textfm1" @click="passwordReset = true" > Forgot password?</a>
                                             <a v-show="!jieLoading" class="deep-purple--text mt-2 textfm1" @click="guest = true" > Sign in as a guest </a>
                                             <v-layout v-if="guest" row wrap>
                                                <v-btn :disabled="jieLoading" block @click="loginWithGoogle" style="font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;"  class=" white grey--text  textDefault" > <v-avatar size="14px" class="mr-2" >  <img src="/imgs/google.svg" alt=""></v-avatar>Sign in with Google</v-btn>
                                                   <v-divider vertical class="mx-1 transparent"></v-divider>
                                                <v-btn :disabled="jieLoading" block @click="loginWithFacebook" style="background-color:#3b5998;font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;" class=" white--text textDefault" > <v-avatar tile size="14px" class="mr-2" >  <img src="/imgs/facebook.svg" alt=""></v-avatar>Sign in with Facebook</v-btn>
                                             </v-layout>
                                       </v-form>
                                    </v-card>
                                 </v-card>
                              </v-flex>
                              </v-layout>
                           </v-container>
                        </v-jumbotron>
                        <v-layout justify-center class="my-0">
                           <v-avatar v-scroll-to="'#infoDeveloper'" style="cursor:pointer" tile size="40">
                              <img class="arrowDownjie" src="https://img.icons8.com/material-rounded/50/c7b4fa/expand-arrow.png">
                           </v-avatar>
                        </v-layout>
                        <v-card id="infoDeveloper" class="mt-2" dark style="background-color:#4f0299;" height="70">
                           <v-container  class="textfm10" fill-height>
                              <v-layout justify-center align-center>
                              <span style="font-size:12px">Stay informed about updates to the Ckcmnetwork developer platform Learn more </span>
                              </v-layout>
                           </v-container>
                        </v-card>
                        <v-card   class="white" dark height="1070">
                           <v-container  class="textfm10" fill-height>
                              <v-layout justify-center>
                              </v-layout>
                           </v-container>
                        </v-card>
                  </v-tab-item>
                  <v-tab-item id="signup">
                     <v-card class="jieLandingBg2 white" height="500">
                        <v-container>

                        </v-container>
                     </v-card>
                  </v-tab-item>
                  <v-tab-item id="cases">
                        <v-card-text > page 3</v-card-text>
                  </v-tab-item>
                  <v-tab-item id="about">
                        <v-card-text > page 4</v-card-text>
                  </v-tab-item>
                  <v-tab-item id="features">
                        <v-card-text > page 5</v-card-text>
                  </v-tab-item>

               </v-tabs-items>
            <!-- </v-container> -->
       
      </div>
      
      <!-- snackbar alert area-->
      <v-snackbar
         v-model="snackbar"
         :bottom="y === 'bottom'"
         :left="x === 'left'"
         :multi-line="mode === 'multi-line'"
         :right="x === 'right'"
         :timeout="timeout"
         :top="y === 'top'"
         :vertical="mode === 'vertical'"
      >
         <span class="caption textfm1">
         <v-avatar
            tile size="15"
            class="mr-2" 
            style="margin-top:-7px"
         >
               <!-- v-if="message.avatar" -->
         <img
            :src="alertAva"
            alt="Avatar"
         >
         </v-avatar>
         {{textalert}}</span>
         <v-btn
         color="primary" class="textfm1 body-2"
         flat 
         @click="snackbar = false"
         >
         Close
         </v-btn>
      </v-snackbar>
      <!-- snackbar alert area-->

      <!-- logout snackbar alert area -->
      <v-snackbar
         :value="successLogout"
         :bottom="y === 'bottom'"
         :left="x === 'left'"
         :multi-line="mode === 'multi-line'"
         :right="x === 'right'"
         :timeout="timeout"
         :top="y === 'top'"
         :vertical="mode === 'vertical'"
      >
         <span class="caption textfm1">
         <v-avatar
            tile size="15"
            class="mr-2" 
            style="margin-top:-7px"
         >
            <v-icon class="primary--text">thumb_up</v-icon>
         </v-avatar>
         Successfully logout, You can always visit here anytime :)</span>
         <!-- <v-btn
         color="primary" class="textfm1 body-2"
         flat 
         @click="snackbar = false"
         >
         Close
         </v-btn> -->
      </v-snackbar>
   </v-card>
</v-app>
</template>

<script>

import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';
import { login, signUp } from '../../ckcmHelpers/auth';
export default {
   mixins: [validationMixin],
   validations: {
      codeid: {
         required
      },
      email: {
         email, required
      },
      username: {
         required
      },
      password: {
         required
      }
   },
   data: () => ({
      loginToogle: false, staySignIn: false,sliderToogle: false,errorFocusE: false,
      errorFocusP: false,AuthView: false,landingTabs: 'login',login: true,
		jieDark: false,jieVisibility: false,codeid: null,username: '', email: '',
      password: '',authUser: null,accountError: false, checkbox: false, 
      textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar: false,
      alertAva: null, passwordReset:false,
		form: {
			email: '',
			password: ''
      },
      offsetTop: 0,
      fixed: false,
      words: ["Understand","Imagine","Tap into"],
      guest: false,
   }),
   methods: {
      scrollDown  () {
         window.pageYOffset = 700;
      },
      onScroll (e) {
         this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
         // this.offsetTop = e.target.scrollTop
         if(this.offsetTop > 580) {
            this.fixed=true;
         } else {
            this.fixed=false;
         }
         // console.log(this.offsetTop)
      },
      loginWithFacebook () {
         this.$v.$reset()
         this.$store.dispatch("jieLoaderOn")
         let vm = this
         vm.$store.resultInfoState = []
         const provider = new firebase.auth.FacebookAuthProvider();
         firebase.auth().signInWithPopup(provider)
         .then(function(result) {
            vm.$Progress.start()
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            vm.$store.state.resultInfoState = result
            const user = result.user;
            signUp(user)
               .then((res) => {
                  vm.form.password='jiejie';
                  vm.form.email=res;
                  login(vm.$data.form)  
                     .then((res) => {
                        vm.$store.commit("loginSuccess", res);
                        vm.$store.dispatch("loginFirebase");
                        vm.$store.dispatch("jieLoaderOff");
                        vm.$Progress.finish();
                        vm.$router.push({ path : '/'});
                     })
                     .catch((rej) => {
                        // alert(err)
                        vm.$Progress.fail();
                        vm.textalert="Your facebook account has not yet set an email";
                        vm.snackbar = true;
                     })
               })
               .catch((rej) => {
                  vm.$Progress.fail();
                  vm.textalert="Something is wrong with your connection";
                  vm.snackbar = true;
               })
         // ...
         }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            vm.alertAva = "/imgs/facebook.svg"
            if(errorMessage == "The popup has been closed by the user before finalizing the operation.") {
               vm.textalert="Facebook login canceled"
            } else if (errorMessage == "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
               vm.textalert = "Something is wrong with your connection :'( "
            } else  {
               vm.textalert = errorMessage // 'Facebook email already used ' + 
            }
            vm.$Progress.fail()
            vm.$store.dispatch("jieLoaderOff")
            // ...
         });
      },
      loginWithGoogle () {
         this.$v.$reset()
         this.$store.dispatch("jieLoaderOn")
         let vm = this
         vm.$store.state.resultInfoState = []
         const provider =  new firebase.auth.GoogleAuthProvider();
         // firebase.auth().signInWithPopup(provider);
         firebase.auth().signInWithPopup(provider).then(function(result) {
            vm.$Progress.start()
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            vm.$store.state.resultInfoState = result

            // vm.$store.dispatch("registerUser")
            signUp(user)
               .then((res) => {
                  vm.form.password='jiejie';
                  vm.form.email=res;
                  login(vm.$data.form)  
                     .then((res) => {
                     vm.$store.commit("loginSuccess", res );
                     vm.$store.dispatch("loginFirebase")
                     vm.$Progress.finish()
                     vm.$store.dispatch("jieLoaderOff")
                     vm.$router.push({ path : '/'})
                     })

               })
               .catch((err) => {
                  vm.$Progress.fail()
                  vm.$store.dispatch("jieLoaderOff")
                  vm.textalert="Something is wrong with your connection"
               })
            // ...
         }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            vm.alertAva = "/imgs/google.svg" 
            if(errorMessage == "The popup has been closed by the user before finalizing the operation.") {
               vm.textalert="Google login canceled"
            } else {
               vm.textalert = errorMessage
            }
            vm.snackbar = true
            vm.$Progress.fail()
            vm.$store.dispatch("jieLoaderOff")
            console.log(errorMessage)
            // ...
         });
      },
      loginTab() {
         this.landingTabs = 'login'
         this.sliderToogle = true
         this.loginToogle = false
      },
      AuthCodeID () {
         this.form.email = this.username
         this.form.password = this.password
         this.$v.$touch()
         if(this.usernameErrors=="" && this.passwordErrors == "" && this.accountError == "") {
            this.AuthUser();
         } else {
            // alert("Sdf")
            return 
         }
      },
      AuthUser() {
         this.$Progress.start()
         this.$store.dispatch("jieLoaderOn");
         let vm = this;
         login(this.$data.form) 
            .then((res) => {
               vm.$Progress.finish();
               vm.$store.commit("loginSuccess", res);
               vm.$router.push({ path: '/'});
               auth.signInWithEmailAndPassword(vm.form.email, vm.form.password)
                  .then((response) =>{
                     vm.$store.dispatch("jieLoaderOff")
                     vm.$store.dispatch("loginFirebase")
                  })
                  .catch((error) =>{
                     vm.$Progress.fail()
                     // console.log(error)
                     vm.$store.dispatch("jieLoaderOff")
                     vm.accountError=true
                     vm.$nextTick(() => this.$refs.password.focus());
                  })
            })
            .catch((error) => {
               this.$Progress.fail()
               vm.accountError=true
               this.password=""
               vm.$store.dispatch("jieLoaderOff")
               this.$nextTick(() => this.$refs.password.focus());
               // this.$refs.password.focus()

            });
      }
   },
   computed: {
      successLogout() {
         return this.$store.getters.alertLogoutDone
      },
      jieLoading () {
         return this.$store.getters.isLoading
      },
      logindata () {
         return this.$store.getters.fdetails
      },
      codeidErrors () {
         const errors = []
         if (!this.$v.codeid.$dirty)
            return errors
         !this.$v.codeid.required && errors.push('It is Required! -__-')
            return errors
         },
      emailErrors () {
         const errors = []
         if (!this.$v.email.$dirty) return errors
         !this.$v.email.email && errors.push('Must be valid e-mail')
         !this.$v.email.required && errors.push('E-mail is required')
         return errors
      },
      usernameErrors () {
         const errors = []
         if (!this.$v.username.$dirty) return errors
         !this.$v.username.required && errors.push('Username is required')
         return errors
      },
      passwordErrors () {
         const errors = []
         if(!this.$v.password.$dirty )  return errors
         this.accountError && errors.push("Username or password is incorrect")
         !this.$v.password.required && errors.push('Password is required')
            this.accountError=false

         return errors
         
      },
   
   },
   mounted() {
      console.clear()
   },
   created() {
   }
   
}
</script>

<style scope>


</style>


