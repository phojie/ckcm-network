<template>
<v-app style="overflow:auto" class="scrollbar-primary" >
   <!-- <v-layout v-scroll="onScroll" column align-center justify-center>
   </v-layout> -->
   
   <v-card class="" style="border-top: 3px solid #00aea0;background-color:#ffffff;border-radius:0" >
      <!-- class="portalSvg" -->
   <v-toolbar class="portalSvg" :fixed="fixed"   flat dark  color="white">
      <span class="hidden-md-and-down px-5"></span>
      <v-avatar
        size="40"
      >
         <img src="jieIcons/apple-touch-icon.png">
      </v-avatar>
      <v-toolbar-title class=" titleFont font-weight-bold teal--text text--darken-2" style="font-size:15px;margin-top:-10px;margin-left:5px;">Christ the King College de Maranding</v-toolbar-title>
      <div class="titleFont  teal--text" style="font-size:12px;margin-top:22px;margin-left:-275px;">A Social network built for Ckcmians</div>
      
      <v-spacer></v-spacer>
      <v-toolbar-items style="height:30px" class=" hidden-sm-and-down">
         <v-btn to="/" class="caption font-weight-bold textNone teal--text text--darken-2" flat >
            Home
         </v-btn>
         <v-btn to="/about" class="caption font-weight-bold  textNone teal--text text--darken-2"  flat >
            About
         </v-btn>
         <v-btn to="/events"  class="caption font-weight-bold  textNone teal--text text--darken-2" flat >
            Events
         </v-btn>
         <v-btn to="/courses"   class="caption font-weight-bold  textNone teal--text text--darken-2" flat >
            Courses
         </v-btn>
         <v-btn to="/schedule"   class="caption font-weight-bold  textNone teal--text text--darken-2 " flat >
            Schedule
         </v-btn>
         <v-btn @click="dialog = true"  class="ml-3 caption font-weight-bold  textNone teal"  >
          My CKCM
         </v-btn>

        <!-- <v-btn href="#" fab white small flat>
           <v-avatar
             size="25"
           >
           <img src="https://img.icons8.com/color/48/000000/facebook.png">
           </v-avatar>
        </v-btn> -->
    
      </v-toolbar-items>
         <!-- @click="loginTab"  -->
      <!-- <v-btn color="red darken-4" small  round  class="enrollBtn hidden-sm-and-down textNone textfm13 text-xs-center">
         Enroll now
      </v-btn> -->
   </v-toolbar>
    
      <router-view></router-view>

      <section style="background-color:#f4f7f8;position:relative" class="mt-4 pb-5" >
         <v-container grid-list-lg >
            <h5 style="font-size:35px" class="  text-xs-center "> Meet Our Developers </h5>
            <div class="subheading text-xs-center mt-2"> Just a word is enough to describe. </div>

           
            <v-layout row wrap justify-center style="margin-top:100px">
               <v-flex  md2 xs12 class="ma-4 mt-5">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="130"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-1/p160x160/49259712_1951029871613033_4417205024476626944_n.jpg?_nc_cat=105&_nc_ht=scontent.fcgy1-1.fna&oh=bad71781df4177d394c70a61fced0ad0&oe=5CEBD4D3" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3">Phojie Rengel</div>
                     <div class="caption txt-xs-center"> Lead Programmer </div>
                  </v-layout>
               </v-flex>

               <v-flex  md2 xs12 class="ma-4 mt-5">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="120"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/49764869_2001370643490756_4066816219464859648_n.jpg?_nc_cat=108&_nc_ht=scontent.fcgy1-1.fna&oh=8a4c1686a4304667ca8c51065c3038dc&oe=5CE284FA" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3"> Jiecel Canino</div>
                     <div class="caption txt-xs-center"> Analyst </div>
                  </v-layout>
               </v-flex>

               <v-flex  md2 xs12 class="ma-4">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="140"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-1/p160x160/44898629_2386948294655261_6037831334993330176_n.jpg?_nc_cat=104&_nc_ht=scontent.fcgy1-1.fna&oh=34cccc9ba3a88fe82caef80a3722169f&oe=5CE15879" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3">Dominador Ocampos</div>
                     <div class="caption txt-xs-center"> Co Programmer </div>
                  </v-layout>
               </v-flex>

               <v-flex  md2 xs12 class="ma-4 mt-5">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="150"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-1/p160x160/43047653_2168930393323304_1007395166371184640_n.jpg?_nc_cat=104&_nc_ht=scontent.fcgy1-1.fna&oh=585d44345f8e7c5449eb6fc2954e52e2&oe=5CF7AD19" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3">Kisha Cajes</div>
                     <div class="caption txt-xs-center"> Analyst </div>
                  </v-layout>
               </v-flex> 

               <v-flex  md2 xs12 class="ma-4 ">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="150"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/10653758_525944790869019_4223330387068867121_n.jpg?_nc_cat=102&_nc_ht=scontent.fcgy1-1.fna&oh=636e3faa7a722f43537ef883dda6303e&oe=5CF148E1" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3">Jezzboy Camingawan</div>
                     <div class="caption txt-xs-center"> Analyst </div>
                  </v-layout>
               </v-flex>

               <v-flex  md2 xs12 class="ma-4 ">
                  <v-layout column wrap align-center justify-center >
                     <v-avatar
                        class="elevation-5"
                        size="120"
                        color="white"
                     >
                        <img class="pa-1" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-1/p160x160/45887824_2239741409604183_6576039777118715904_n.jpg?_nc_cat=108&_nc_ht=scontent.fcgy1-1.fna&oh=3c4ed48f0fe21b8dda4baf3d76778472&oe=5CEE330A" alt="alt">
                     </v-avatar>
                     <div class="subheading font-weight-bold txt-xs-center mt-3">Zai Jusayan</div>
                     <div class="caption txt-xs-center"> Analyst </div>
                  </v-layout>
               </v-flex>

               
            </v-layout>
            <!-- <div class="abt-cstmr-stripe abt-cstmr-stripe1"></div> -->
            <!-- <div class="abt-cstmr-stripe abt-cstmr-stripe2"></div> -->
         </v-container>
      </section>
  

      <div style="background-image: linear-gradient(-90deg,rgba(14,30,37,0) 0,#0e1e25 5%,#0e1e25 90%,rgba(14,30,37,0) 100%);content: '';
            display: block;
            height: 2px;
            opacity: .08;
            position: absolute;width: 100%;"
      ></div>


      <v-footer
         dark
         height="auto"
         style="background-color:#f4f7f8"
         >
         <v-container grid-list-xs>
            <v-card
               flat
               tile
               style="background-color:#f4f7f8"
               class="white--text text-xs-center"
            >
               <v-card-text>
               <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-3 grey--text "
                  icon
               >
                  <v-icon size="24px">{{ icon }}</v-icon>
               </v-btn>
               </v-card-text>

               <v-card-text class="grey--text pt-0">
               Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
               </v-card-text>

               <v-divider></v-divider>

               <v-card-text class="teal--text">
               &copy;2019 — <strong> Computer Science</strong>
               </v-card-text>
            </v-card>
         </v-container>
      </v-footer>


      <v-dialog
         v-model="dialog"
         width="400"
      >

         <v-card flat class="transparent ">
            <v-card  light class=" px-4 py-4 jieSvgBg1" >
               <v-card-title class="headline" >
                  Sign in to continue
               </v-card-title>
               <!-- <div style="margin-top:260px;margin-left:50px;position:absolute;width:15px;height:15px;border-radius:50%" class="teal lighten-3"></div> -->
               <div style="margin-top:-10px;margin-left:250px;position:absolute;width:10px;height:10px;border-radius:50%" class="teal lighten-3"></div>
               <div style="margin-top:-50px;margin-left:250px;position:absolute;width:30px;height:30px;border-radius:50%" class="teal lighten-3"></div>
               <v-form @submit.prevent="AuthCodeID">
                  <v-text-field
                     color="teal"
                     type="text" prepend-icon="person" clearable
                     v-model="username" label="Enter your username"
                     :disabled="jieLoading" class="textfm1 authPlace"
                     @change="$v.username.$touch()" 
                     :error-messages="usernameErrors" 
                     autofocus
                  > 
                  </v-text-field>
                  <v-text-field
                     color="teal"
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
                     :ripple="false" color="teal lighten-2" 
                     style="margin-top:-10px"
                  >
                     Submit
                  </v-btn> -->
                  <v-btn 
                     block class="textNone font-weight-bold mb-3 white--text "
                     :loading="jieLoading" type="submit" 
                     :ripple="false" color="teal" 
                     style="margin-top:-10px;"
                  >
                     Submit
                  </v-btn>
                  <v-progress-linear color="teal " height="2" :indeterminate="jieLoading"></v-progress-linear>
                     <a v-show="!jieLoading" class="blue--text mt-2 textfm1" @click="passwordReset = true" > Forgot password?</a>
                     <a v-show="!jieLoading" class="teal--text mt-2 textfm1" @click="guest = true" > Sign in as a guest </a>
                     <v-layout v-if="guest" row wrap>
                        <v-btn :disabled="jieLoading" block @click="loginWithGoogle" style="font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;"  class=" white grey--text  textDefault" > <v-avatar size="14px" class="mr-2" >  <img src="/imgs/google.svg" alt=""></v-avatar>Sign in with Google</v-btn>
                           <v-divider vertical class="mx-1 transparent"></v-divider>
                        <v-btn :disabled="jieLoading" block @click="loginWithFacebook" style="background-color:#3b5998;font-size:11px !important; font-weight:bold; font-family: 'Roboto', sans-serif;" class=" white--text textDefault" > <v-avatar tile size="14px" class="mr-2" >  <img src="/imgs/facebook.svg" alt=""></v-avatar>Sign in with Facebook</v-btn>
                     </v-layout>
               </v-form>
            </v-card>
         </v-card>
         
      </v-dialog>
      
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
import { db } from '../../firebase'

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
      dialog: false, 

      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram'
      ],

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

         let getdata = db.ref('CKCMDATA/accountUser')
         getdata.on('value', function(snapshot) {
            let filterdata = _.filter(snapshot.val(), {'email': _.capitalize(vm.form.email), 'password': vm.form.password})
            console.log(filterdata.length )
            if(filterdata.length == 1) {
               vm.$Progress.finish();
               vm.$store.commit("loginSuccess", filterdata[0]);
               vm.$store.commit("firebaseSuccess", filterdata[0])
               vm.$store.dispatch("jieLoaderOff")

               vm.$router.push({ path: '/'});


               
            } else {
               vm.$Progress.fail()
               vm.accountError=true
               vm.password=""
               vm.$store.dispatch("jieLoaderOff")
               vm.$nextTick(() => this.$refs.password.focus());
               // this.$refs.password.focus()
            }
         })

        
               // auth.signInWithEmailAndPassword(vm.form.email, vm.form.password)
               //    .then((response) =>{
               //       vm.$store.dispatch("jieLoaderOff")
               //       vm.$store.dispatch("loginFirebase")
               //    })
               //    .catch((error) =>{
               //       vm.$Progress.fail()
               //       // console.log(error)
               //       vm.$store.dispatch("jieLoaderOff")
               //       vm.accountError=true
               //       vm.$nextTick(() => this.$refs.password.focus());
               //    })
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
      // console.clear()


   },
   created() {
   

   }
   
}
</script>

<style scope>


</style>


