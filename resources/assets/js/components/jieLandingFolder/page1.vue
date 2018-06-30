<template>
   <v-app>
      <!-- <v-card  class="white--text jieLandingBg" color="" flat height="700px" tile> -->
      <v-toolbar class="jieLandingBg" extension-height="7020" tabs flat :clipped-left="$vuetify.breakpoint.lgAndUp" extended  >
         <v-toolbar-title class="hidden-sm-and-down primaryColortext--text subheading mx-5 ">
            <v-avatar color="" title="true" size="50" style="margin-top:70px" class=" text--primary">
               <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg> -->
            </v-avatar>
         </v-toolbar-title>
            <v-flex xs12 md7 lg6 sm9>
               <v-tabs  show-arrows="" v-model="landingTabs" :hide-slider="sliderToogle"  grow slider-color="primary" left>
                  <v-tab href="#signup"  @click="() => (sliderToogle =! true)" class="textDefault textfm1 txt13"  :ripple="false" >
                     Join us today.
                  </v-tab>
                  <v-tab href="#cases" @click="() => (sliderToogle =! true)"  class="textDefault textfm1  txt13"  :ripple="false" >
                     Use cases
                  </v-tab>
                  <v-tab href="#about" @click="() => (sliderToogle =! true)" class="textDefault textfm1 txt13" :ripple="false" >
                     About
                  </v-tab>
                  <v-tab href="#features" @click="() => (sliderToogle =! true)" class="textDefault textfm1 txt13" :ripple="false" >
                     Features
                  </v-tab>
                  <v-tab disabled @click="() => (sliderToogle =! true)" class="mr-5 textDefault textfm1 txt13" :ripple="false" >
                     More
                     <v-icon>arrow_drop_down</v-icon>
                  </v-tab>
               </v-tabs>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
            <v-btn @click="loginTab"  color="primary" small round outline class="textDefault  textfm1 text-xs-center">
               Login
            </v-btn>
      <!-- <v-app light > -->
         <v-content slot="extension">
            <v-container >
               <v-tabs-items v-model="landingTabs">
               
                  <v-tab-item id="signup">
                        <v-card-text > page 2</v-card-text>
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
                  <!-- Landing and Login Area -->
                  <v-tab-item id="login">
                     <v-layout row wrap>
                        <v-flex xs12 lg9 sm8>
                           <!-- <v-card>
                              <v-card-text style="height:400px">
                                 jier
                              </v-card-text>
                           </v-card> -->
                        </v-flex>
                        <v-flex class="mt-5" xs12 lg3 sm4>
                           <!-- <v-btn class="right" small  color="" slot="activator" icon  target="_blank">
                              <v-icon small >phone</v-icon>
                           </v-btn> -->
                           <v-form @submit.prevent="AuthCodeID">
                              <!-- <v-text-field
                                 type="text" prepend-icon="email" clearable
                                 v-model="email" label="Enter your username"
                                 :disabled="jieLoading" class="textfm1"
                                 @change="$v.email.$touch()" @blur="$v.email.$touch()"
                                 :autofocus="errorFocusE" :error-messages="emailErrors" 
                              > -->
                              <v-text-field
                                 type="text" prepend-icon="person" clearable
                                 v-model="username" label="Enter your username"
                                 :disabled="jieLoading" class="textfm1"
                                 @change="$v.username.$touch()" @blur="$v.username.$touch()"
                                 :error-messages="usernameErrors" 
                              >
                              </v-text-field>
                              <v-text-field
                                 :type="jieVisibility ? 'text' : 'password'" :prepend-icon="jieVisibility ? 'visibility' : 'visibility_off'" 
                                 :prepend-icon-cb="() => ( jieVisibility = !jieVisibility)"
                                 v-model="password" label="Enter your password"
                                 clearable counter="12" :disabled="jieLoading" class="textfm1"
                                 @input="$v.password.$touch()" @blur="$v.password.$touch()"
                                 :error-messages="passwordErrors"
                                 :autofocus="errorFocusP" 
                              >
                              </v-text-field>
                              <v-btn 
                                 block sm class="textfm1 my-4 "
                                 :loading="jieLoading" type="submit"
                                 :ripple="false" color="primary"
                              >
                                 Submit
                              </v-btn>
                           </v-form>
                              <hr class="">
                        </v-flex>
                     </v-layout>
                  </v-tab-item>
               <!-- exit! Landing and Login Area -->
               </v-tabs-items>
           </v-container>
         </v-content>
      </v-toolbar>

      <!-- </v-app> -->
      <!-- </v-card> -->
      <!-- <v-footer dense color="primary" app>
         <v-spacer></v-spacer>
         <span class="mr-5 white--text">&copy; 2018</span>
      </v-footer> -->
   </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators';
import { login } from '../../ckcmHelpers/auth';
import jieAuth from './jieAuth.vue';
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
      sliderToogle: false,
      errorFocusE: false,
      errorFocusP: false,
      AuthView: false,
      landingTabs: 'login',
      login: true,
		jieLoading: false,
		jieDark: false,
		jieVisibility: false,
      codeid: null,
      username: '',
      email: '',
      password: '',
      authUser: null,
		form: {
			email: '',
			password: ''
      }
   }),
   components: {
      jieAuth
   },
   methods: {
      alert() {
         alert('alert');
      },
      loginTab() {
         this.landingTabs = 'login'
         this.sliderToogle = true
      },
      jieAuth() {
         this.AuthView = true
         $router.push({ path: '/'});
      },
      AuthCodeID () {
         this.form.email = this.username
         this.form.password = this.password
         this.$v.$touch()
         if (!this.$v.email.$dirty) {
         } else {
            // this.AuthUser()
         }
      },
      AuthUser () {
         this.$Progress.start()
         this.jieLoading = true
         let vm = this
         this.$store.dispatch('login');
         login(this.$data.form) 
            .then((res) => {
               vm.$store.commit("loginSuccess", res);
               firebase.auth().signInWithEmailAndPassword(vm.form.email, vm.form.password)
                  .then((response) =>{
                     vm.$store.dispatch("loginFirebase")
                     vm.jieLoading = false
                     vm.$Progress.finish()
                     vm.$router.push({ path: '/'});
                  })
                  .catch((error) =>{
                     this.$Progress.fail()
                     console.log(error)
                  })
            })
            .catch((error) => {
               this.$Progress.fail()
               vm.jieLoading = false 
               vm.form.password = ''
               // console.log(error)
               
            });
      }
   },
   computed: {
      codeidErrors() {
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
         if(!this.$v.password.$dirty) return errors
         !this.$v.password.required && errors.push('Password is required')
         // !this.$store.state.accountLoginData && errors.push('Your email or password is incorrect')

         return errors
      },
   },
   
}
</script>

<style scoped>
#jiefrontdiv {
   position: absolute;
   width: 100%;
   height: 449px;
   left: 0px;
   top: 0px;
   background: #f7f9fa;
   background-color: #330033;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='560' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
.svgbg {
   background-color: #330033;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='560' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
.txt13 {
   font-size:13px !important;
}
.textDefault {
   text-transform: none !important;
}
.textfm1 {
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
   /* font-family: 'Patrick Hand', cursive; */
   /* font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
}
.jieLandingBg {
   background-image: url("https://www.sketchapp.com/images/home-2/prototype/proto-background-nuanced.svg");
      /* background-image: url(../images/home-2/prototype/proto-background-nuanced.svg); */
    background-position: center;
    background-size: cover;
  }
</style>


