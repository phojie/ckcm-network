<template>
  <div class="px-4 py-3">
               <v-layout row wrap>
               <span style="font-size:16px" class="font-weight-bold"><span  style="font-size:18px" class="blue--text">Vice President Office</span> </span>
               <v-spacer></v-spacer>
               <v-dialog
                  persistent
                  v-model="dialog1"
                  width="600"
                  >
                  <v-btn    slot="activator" class="textDefault" small>Announce</v-btn>
                  <v-card>
                  <v-card-title
                     class="headline grey lighten-2"
                     primary-title
                  >
                     Announcement
                  </v-card-title>

                  <!-- <v-card-text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text> -->

                   <v-flex style="margin-top:-3px" >
                     <!-- jiew -->
                     <!-- @blur="whatisFunctionMethodFalse" -->
                     <v-textarea 
                        background-color="transparent"
                        hide-details color="blue"
                        class="whatIs  subheading" row-height="20"
                        ref="newP"
                        append-icon="mdi-image-outline"
                        style="" placeholder="Announce something"
                        flat solo
                        v-model="announceMesesage"
                        auto-grow
                     ></v-textarea>
                    
                  </v-flex>
                  
                  <v-divider></v-divider>

                  <v-card-actions>
                     <!-- : ${checkbox.toString()} -->
                     <!-- : ${switch1.toString()} -->
                     <v-checkbox
                        :label="`Newsfeed `"
                        v-model="checkbox"
                     ></v-checkbox>
                     <v-switch
                        :label="`SMS`"
                        v-model="switch1"
                     ></v-switch>
                     <v-spacer></v-spacer>
                     <v-btn
                        color="primary"
                        flat
                        @click="dialog1 = false"
                     >
                        Cancel
                     </v-btn>
                     <v-btn
                        color="primary"
                        flat
                        :loading="sendLoading"
                        @click="sendAnnouncement"
                     >
                        Send
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
                     Meeting
                  </v-card-title>

                  <v-card-text>
                     <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn
                        color="primary"
                        flat
                        @click="sendAnnouncement"
                     >
                        Save
                     </v-btn>
                  </v-card-actions>
                  </v-card>
               </v-dialog>
             
               </v-layout>
               <v-divider class="grey lighten-2 mt-3"></v-divider>


         <!-- :multi-line="mode === 'multi-line'" -->
      <v-snackbar
         v-model="snackbar"
         :bottom="y === 'bottom'"
         :left="x === 'left'"
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
         Successfully Announce</span>
      </v-snackbar>
            </div>
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();
import { db, app, order } from '../../firebase.js';

export default {  
   
   data: () => ({
      e13: 1,
      dialog: false,
      dialog1: false,
      checkbox: true,
      switch1: true,
      sendLoading:false,
      announceMesesage: '',
      postedData: { 
         message:'', 
         image:''
      },textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar: false,
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      sendAnnouncement() {
         let vm = this
         vm.sendLoading=true
         vm.postedData.message = vm.announceMesesage
         if(vm.checkbox) {
         axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
            .then((response) =>{
            // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            var now= response.data.time_zone.current_time
            let vm = this
            db.ref('Newsfeed/' ).push().set({
               userId: vm.userData['ckcm-network_token_id'],
               displayName: vm.userData.displayName,
               data: vm.postedData,
               photoUrl: vm.userData.photoUrl,
               timestamp:  now,
               someoneComment: false,
               commentText: "",
               likes: 0,
               comments: 0,
               whoLikes: {php:'php'},
               whoComments: {python:'python'},
               order: vm.orderValue + 1 
            }, function(error) {
            if (error) {
               console.log(error)
               // The write failed...r
            } else {
               db.ref('N_order/').set ({
                  newsfeedOrder: vm.orderValue-1
                  
               })
               vm.dialog1 = false
               vm.sendLoading=false
               vm.postedData.message =  ''
               vm.announceMesesage = ''
               vm.snackbar = true
               // Data saved successfully!
            }
            });
         })
         }
         if(vm.switch1){
            var test = [{
               apikey: 'PK5J+HcAL3c-VQGS8ixOd8AEvoIjjzRnKivZCviJ1Y',
               numbers:'09463582440',sender: 'jie', message: vm.announceMesesage
            }]
            axios.post(`https://api.txtlocal.com/send/?apikey=wckbqSSCC0k-ImFk31JYM0YIAZlFG0ObL22iEf1jeW&numbers=639463582440&sender=CkcmNetwork&message=${vm.announceMesesage}`)
               .then((response) =>{
                  console.log(response)
               })
               .catch((error) => {
                  console.log(error)
               })
               
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
               .then((response) =>{
               // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
               var now= response.data.time_zone.current_time
               db.ref(`Announcement/${vm.userData['ckcm-network_token_id']}` ).push().set({
                  userId: vm.userData['ckcm-network_token_id'],
                  announcement: vm.announceMesesage,
                  timestamp:  now,
               })
               vm.dialog1 = false
               vm.sendLoading=false
               vm.postedData.message =  ''
               vm.announceMesesage = ''
               vm.snackbar = true
            })
         }
      }
   },
   mounted () {
      document.title = "(2)   Welcome";
      this.$store.commit("leftnavDrawerOn");
   },
   userData() {
      return this.$store.getters.accountLoginData.user
   },
   created() {
      
      let vm = this;

      order.on("value",  function(snapshot) {
         vm.orderValue = snapshot.val();
      }, function (errorObject) {
         console.log("Naa ko sa created 1 :The read failed: " + errorObject.code);
      });

   }
}
</script>
