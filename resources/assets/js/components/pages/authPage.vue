<template>
<v-app >
   <v-card  class="jieLandingBg mycolor1" flat height="auto" style="min-height: 700px; border-radius: 0" >
   <v-toolbar flat dark color="transparent">
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="primaryColortext--text subheading mx-5 ">
         <span class="subheading white--text ">Christ the King Network</span>
         <!-- <v-avatar color="" title="true" size="50" style="margin-top:70px" class=" text--primary"> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg> -->
         <!-- </v-avatar> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex class="hidden-sm-and-down" md7 lg6 >
         <v-tabs show-arrows color="transparent" v-model="landingTabs" next-icon :hide-slider="sliderToogle"  grow slider-color="secondary " >
           
            <v-tab href="#login"  @click="() => (sliderToogle =! true, loginToogle =! false)" class=" textDefault textfm1 txt13"  :ripple="false" >
               Join us today
            </v-tab>
            <v-tab disabled href="#cases" @click="() => (sliderToogle =! true, loginToogle =! false)"  class="textDefault textfm1  txt13"  :ripple="false" >
               Use cases
            </v-tab>
            <v-tab disabled href="#about" @click="() => (sliderToogle =! true, loginToogle =! false)" class="textDefault textfm1 txt13" :ripple="false" >
               About
            </v-tab>
            <v-tab disabled href="#features" @click="() => (sliderToogle =! true, loginToogle =! false)" class="textDefault textfm1 txt13" :ripple="false" >
               Features
            </v-tab>
            <v-tab disabled @click="() => (sliderToogle =! true, loginToogle =! false)" class="mr-5 textDefault textfm1 txt13" :ripple="false" >
               More
               <v-icon>arrow_drop_down</v-icon>
            </v-tab>
         </v-tabs>
      </v-flex>
      
      <v-btn color="red darken-4" small round  class="hidden-sm-and-down textDefault  textfm1 text-xs-center">
         <!-- @click="loginTab"  -->
         Enroll now
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="red darken-4" small round  class="hidden-md-and-up textDefault  textfm1 text-xs-center">
         Enroll now
      </v-btn>
   </v-toolbar>
      <div class=" mt-5">
         <v-content slot="extension">
            <v-container  >
               <v-tabs-items v-model="landingTabs">
                  <!-- Landing and Login Area -->
                  <v-tab-item id="login">
                     <v-layout class="mt-4" row wrap>
                        <v-flex class="" offset-sm1  xs12 lg7 sm12>
                              <img src="/imgs/ckcm-network-homepage-illustration.png" alt="">
                        </v-flex>
                        <v-flex  class="px-2 mt-2" xs12 lg4 sm12>
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
                                 <!-- <div class="headline">Sign in to continue</div> -->
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
                                       <!-- <v-btn
                                          v-show="!jieLoading" class="textDefault blue--text mt-2 mr-4 textfm1"
                                          @click="passwordReset = true" flat  href
                                          >
                                          Forgot Password
                                       </v-btn> -->
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
                     </v-layout>
                  </v-tab-item>
               <!-- exit! Landing and Login Area -->
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
            </v-container>
         </v-content>
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

import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators';
import { login } from '../../ckcmHelpers/auth';
import { signUp } from '../../ckcmHelpers/auth'
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
      }
   }),
   methods: {
      loginWithFacebook () {
         this.$v.$reset()
         this.$store.dispatch("jieLoaderOn")
         let vm = this
         const provider = new firebase.auth.FacebookAuthProvider();
         firebase.auth().signInWithPopup(provider)
         .then(function(result) {
            vm.$Progress.start()
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // vm.$store.dispatch("registerUser")
            console.log(user);
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
         const provider = new firebase.auth.GoogleAuthProvider();
         // firebase.auth().signInWithRedirect(provider);
         firebase.auth().signInWithPopup(provider).then(function(result) {
            vm.$Progress.start()
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // vm.$store.dispatch("registerUser")
            signUp(user)
               .then((res) => {
                  vm.form.password='jiejie';
                  vm.form.email=res;
                  login(vm.$data.form)  
                     .then((res) => {
                     vm.$store.commit("loginSuccess", res);
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
         this.$store.dispatch('login');
         login(this.$data.form) 
            .then((res) => {
               vm.$Progress.finish();
               vm.$store.commit("loginSuccess", res);
               vm.$router.push({ path: '/'});
               firebase.auth().signInWithEmailAndPassword(vm.form.email, vm.form.password)
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


