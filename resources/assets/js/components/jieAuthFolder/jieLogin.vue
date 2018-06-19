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
										v-model="form.password" label="Enter your desire password"
										clearable counter="12" :disabled="jieLoading"
									>
									</v-text-field>

									<v-btn 
										block sm 
										:loading="jieLoading" type="submit"
									>
										Submit

                           </v-btn>
                           
                           <!-- <v-btn color="info" small to="/signup">Signup</v-btn>
                           <v-btn color="error" small @click="logout">Logout</v-btn> -->

                        </v-form>

                        <!-- <ul color="red">
                           <li >{{Login}}</li>
                        </ul> -->
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
    logout () {
      firebase.auth().signOut()
        .then(function() {
          console.log('succ. log');
        })
        .catch(function(error) {
          console.log('already logout')
        });
    },
    testerFunction () {
      alert('tested')
    },
    AuthCodeID () {
      this.jieLoading = true
      let vm = this
      alert('i am trying to login you')
      this.$store.dispatch('login');
      login(this.$data.form) 
        .then((res) => {
               vm.jieLoading = false
          console.log(res);
          this.$store.commit("loginSuccess", res);
          this.$router.push({
            path: '/'
          });
        })
        .catch((error) => {
               vm.jieLoading = false 
          alert(error);
        });
         // firebase.auth().signInWithEmailAndPassword(this.email, this.password)
         //    .then(function() {
         //       vm.jieLoading = false
         //       console.log('success')
         //    })
         //    .catch(function(error) {
         //       // Handle Errors here.
         //       vm.jieLoading = false
         //       var errorCode = error.code;
         //       var errorMessage = error.message;
         //       console.log(errorMessage)
         //       // ...   
         // });
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
      Login(){
         return this.authUser
      }
  },
  validations: {
    codeid: {
      required
    }
  },
  mounted() {
    
   },
   created() {
      firebase.auth().onAuthStateChanged(user =>  { this.authUser = user })
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
