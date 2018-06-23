<template>
   <v-app :dark="jieDark">
      <v-content>
         <v-container fluid fill-height >
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-24">
                     <v-toolbar height="45px" flat dark color="blue lighten-2">
                        <v-toolbar-title class="jieQueriesTitleFonts">
                           Sign Up
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
										v-model="rform.email" label="Enter your email"
										:disabled="jieLoading"
									>
									</v-text-field>
									<v-text-field
										:type="jieVisibility ? 'text' : 'password'" :prepend-icon="jieVisibility ? 'visibility' : 'visibility_off'" 
										:prepend-icon-cb="() => ( jieVisibility = !jieVisibility)"
										v-model="rform.password" label="Enter your desire password"
										clearable counter="12" :disabled="jieLoading"
									>
									</v-text-field>

									<v-btn 
										block sm 
										:loading="jieLoading" type="submit"
									>
										Submit
									</v-btn>
                           <!-- <v-btn color="info" small to="/login">Already have Account ?</v-btn> -->
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
import { login, getLocalUser } from '../../ckcmHelpers/auth';
import { required } from 'vuelidate/lib/validators'
export default {
   data: () => ({
		jieLoading: false,
		jieDark: false,
		jieVisibility: false,
      codeid: '',
      rform: {
         email: '',
         password: '',
         secret: '',
      },
		
		// error: false
   }),
   methods: {
		testerFunction () {
			alert('testesd')
      },
      loginAuth() {
         this.$Progress.start()
         let vm = this
         this.$store.dispatch('login');
         login(this.$data.rform) 
         .then((res) => {
            vm.$store.commit("loginSuccess", res);
            firebase.auth().signInWithEmailAndPassword(vm.rform.email, vm.rform.password)
               .then((response) =>{
                  vm.$store.dispatch("loginFirebase")
                  vm.rform.email=''
                  vm.rform.password= ''
                  vm.rform.secret= ''
                  vm.jieLoading = false
                  vm.$Progress.finish()
                  vm.$router.push({
                     path: '/'
                  });
               })
               .catch((error) =>{
                  this.$Progress.fail()
                  console.log(error)
               })
         })
         .catch((error) => {
            this.$Progress.fail()
            vm.jieLoading = false 
            // console.log(error)
         });
      },
		AuthCodeID () {
			this.jieLoading = true
         let vm = this
			let ckcmcode =  Math.random().toString(36).substring(2, 15) + "I love you God" + Math.random().toString(36).substring(2, 15);
         this.rform.secret = ckcmcode
         axios.post(`api/auth/Ckcm-network-api/${ckcmcode}/register`, this.rform)  
            .then((response) => {
               firebase.auth().createUserWithEmailAndPassword(vm.rform.email, vm.rform.password)
                  .then(function() {
                     firebase.auth().onAuthStateChanged(function(user) {
                        axios.post(`api/auth/Ckcm-network-api/${ckcmcode}/updateinfo`, user)  
                           .then((response) => {
                              vm.loginAuth();
                           })
                           .catch((error) => {
                              vm.$Progress.fail()
                              vm.jieLoading = false
                              vm.rform.password= ''
                              vm.rform.secret= ''
                           })
                     })
                  })
                  .catch(function(error) {
                     // Handle Errors here.
                     axios.post(`api/auth/Ckcm-network-api/${ckcmcode}/deleteinfo`, vm.rform)  
                        .catch((error) => {
                           // console.log(error())
                        })
                     vm.$Progress.fail();
                     vm.jieLoading = false;
                     var errorCode = error.code;
                     var errorMessage = error.message;
                     vm.rform.password= ''
                     vm.rform.secret= ''
                  })
            })
            .catch((error) => {
               vm.$Progress.fail()
               vm.jieLoading = false
               console.log(error);
               vm.rform.password= ''
               vm.rform.secret= ''
            })
		},
   },
   computed: {
		codeidErrors() {
			const errors = []
			if (!this.$v.codeid.$dirty)
				return errors
			!this.$v.codeid.required && errors.push('It is Required! -__-')
				return errors
		}
	},
	validations: {
		codeid: {
				required
		}
	},
	mounted() {
		// // Confirm the link is a sign-in with email link.
		// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
		// // Additional state parameters can also be passed via URL.
		// // This can be used to continue the user's intended action before triggering
		// // the sign-in operation.
		// // Get the email if available. This should be available if the user completes
		// // the flow on the same device where they started it.
		// var email = window.localStorage.getItem('emailForSignIn');
		// if (!email) {
		// 	// User opened the link on a different device. To prevent session fixation
		// 	// attacks, ask the user to provide the associated email again. For example:
		// 	email = window.prompt('Please provide your email for confirmation');
		// }
		// // The client SDK will parse the code from the link for you.
		// firebase.auth().signInWithEmailLink(email, window.location.href)
		// 	.then(function(result) {
		// 		// Clear email from storage.
		// 		window.localStorage.removeItem('emailForSignIn');
		// 		// You can access the new user via result.user
		// 		// Additional user info profile not available via:
		// 		// result.additionalUserInfo.profile == null
		// 		// You can check if the user is new or existing:
		// 		// result.additionalUserInfo.isNewUser
		// 	})
		// 	.catch(function(error) {
		// 		// Some error occurred, you can inspect the code: error.code
		// 		// Common errors could be invalid email and invalid or expired OTPs.
		// 	});
		// }
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
