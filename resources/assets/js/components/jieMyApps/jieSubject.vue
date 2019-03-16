<template>
   <v-card  app height="100%" width="100%" style="position:absolute; bottom:0" flat class="newsfeedScroll transparent scrollbar-primary "> 
      <v-layout  class="mt-1 py-0">
         <v-flex  class="mr-2 ml-2 xs12"   style="padding-top:3px !important" >
            <v-stepper non-linear="true" v-model="e13" vertical>
            <div class="px-4 py-3">
               <v-layout row wrap>
               <span style="font-size:16px" class="font-weight-bold"><span  style="font-size:18px" class="blue--text">Vice President Office</span> </span>
               <v-spacer></v-spacer>
               <v-dialog
                  v-model="dialog"
                  width="500"
                  >
                  <v-btn    slot="activator" class="textDefault" small>Announce</v-btn>
                  <v-card>
                  <v-card-title
                     class="headline grey lighten-2"
                     primary-title
                  >
                     Privacy Policy
                  </v-card-title>

                  <v-card-text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn
                        color="primary"
                        flat
                        @click="dialog = false"
                     >
                        I accept
                     </v-btn>
                  </v-card-actions>
                  </v-card>
               </v-dialog>

               <v-dialog
                  v-model="dialog"
                  width="500"
                  >
                  <v-btn    slot="activator" class="textDefault" small>Set a Meeting</v-btn>
                  <v-card>
                  <v-card-title
                     class="headline grey lighten-2"
                     primary-title
                  >
                     Privacy Policy
                  </v-card-title>

                  <v-card-text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn
                        color="primary"
                        flat
                        @click="dialog = false"
                     >
                        I accept
                     </v-btn>
                  </v-card-actions>
                  </v-card>
               </v-dialog>
               </v-layout>
               
               <v-divider class="grey lighten-2 mt-3"></v-divider>
            </div>

            <v-stepper-step class="pt-1" step="1" >
               Set your Office
            </v-stepper-step>
            <v-stepper-content step="1">
               <v-card color="grey lighten-3" class="mb-5" height="500px"></v-card>
            </v-stepper-content>
            <v-stepper-step step="2" > Suggest a Feature</v-stepper-step>

            <v-stepper-content step="2">
               <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
            </v-stepper-content>

            <!-- <v-stepper-step :rules="[() => false]" step="3">
               Ad templates
               <small>Alert message</small>
            </v-stepper-step> -->

            <!-- <v-stepper-content step="3">
               <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
               <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
               <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">View setup instructions</v-stepper-step>

            <v-stepper-content step="4">
               <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
               <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
               <v-btn flat>Cancel</v-btn>
            </v-stepper-content> -->
         </v-stepper>
         </v-flex>
      </v-layout>
   </v-card>
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();

export default {  
   data: () => ({
      e13: 1,
      dialog: false
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      
   },
   methods: {
      
   },
   mounted () {
      document.title = "(2)   Welcome";
      this.$store.commit("leftnavDrawerOn");
   }
}
</script>
