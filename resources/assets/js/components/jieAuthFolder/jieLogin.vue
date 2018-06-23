<template>
   <v-app :dark="jieDark">
      <v-content>
         <v-container fluid fill-height >
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-24">
                     <v-toolbar height="45px" flat dark color="blue lighten-2">
                        <v-toolbar-title class="jieQueriesTitleFonts">
                           Login
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                              <v-btn @click="() => (jieDark =!jieDark)" slot="activator" icon  target="_blank">
                                 <v-icon medium>person</v-icon>
                              </v-btn>
                              <span>Dark / Light</span>
                        </v-tooltip>
                     </v-toolbar>

                     <v-card-text>
                        <v-form @submit.prevent="AuthCodeID">
                           <!-- <v-text-field
                              v-model="codeid" prepend-icon="code"
                              :append-icon="jieVisibility ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (jieVisibility = !jieVisibility)" 
                              label="Enter your Code" @input="$v.codeid.$touch()"
                    @blur="$v.codeid.$touch()" :error-messages="codeidErrors"
                              mask="######" counter="6" color="blue lighten-4" :type="jieVisibility ? 'text' : 'password'"
                           >
                           </v-text-field> -->

									<v-text-field
										type="text" prepend-icon="email" clearable
										v-model="form.email" label="Enter your email"
										:disabled="jieLoading"
									>
									</v-text-field>
									<v-text-field
										:type="jieVisibility ? 'text' : 'password'" :prepend-icon="jieVisibility ? 'visibility' : 'visibility_off'" 
										:prepend-icon-cb="() => ( jieVisibility = !jieVisibility)"
										v-model="form.password" label="Enter your password"
										clearable counter="12" :disabled="jieLoading"
									>
									</v-text-field>

									<v-btn 
										block sm 
										:loading="jieLoading" type="submit"
									>
										Submit
                           </v-btn>
                        </v-form>
                     </v-card-text>

                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { login } from '../../ckcmHelpers/auth';

export default {
   data: () => ({
      login: true,
		jieLoading: false,
		jieDark: false,
		jieVisibility: false,
      codeid: null,
      authUser: null,
		form: {
			email: '',
			password: ''
		}
   }),
   methods: {	
   testerFunction () {
      alert('tested')
   },
   getFdetails() {
      const user = firebase.auth().currentUser;
      this.$store.commit("firebaseSuccess", user)
   },
   AuthCodeID () {
   this.$Progress.start()
   this.jieLoading = true
   let vm = this
   this.$store.dispatch('login');
   login(this.$data.form) 
      .then((res) => {
         vm.$store.commit("loginSuccess", res);
         firebase.auth().signInWithEmailAndPassword(vm.form.email, vm.form.password)
            .then((response) =>{
               vm.getFdetails()
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
   },
    
   },
   computed: {
      codeidErrors() {
         const errors = []
         if (!this.$v.codeid.$dirty)
            return errors
         !this.$v.codeid.required && errors.push('It is Required! -__-')
            return errors
         },
   },
   validations: {
      codeid: {
         required
      }
   },
   mounted() {
      
   },
   created() {

   }
}
</script>

<style scoped>
/* xs */
@media only screen and (max-width: 600px) {
  .testflex {
    background-color: red
  }
}
/* sm */
@media only screen and (max-width: 960px) and (min-width: 600px) {
  .testflex {
    background-color:rebeccapurple
  }
}
/* md */
@media only screen and (max-width: 1264px) and (min-width: 960px){
  .testflex {
    background-color: green
  }
  .jieQueriesTitleFonts {
    font-size: 15px !important;
    /* color: red */
  }

  /* from vuetify .edited */

  .input-group--text-field input, .input-group--text-field textarea {
    font-size:210px !important;
    color: red !important;
  }

}
/* lg  desktopsize */
@media only screen and (max-width: 1904px) and (min-width: 1264px) {
  .testflex {
    background-color:blue
  }
   .jieQueriesTitleFonts {
      font-size: 14px !important;
      /* color: red */
   }

   /* from vuetify .edited */

   .input-group--text-field input, .input-group--text-field textarea {
      font-size:10px !important;
      color: red
   }

}
/* xl */
@media only screen and (min-width: 1904px) {
  .testflex{
    background-color: yellow
  }
}

</style>
