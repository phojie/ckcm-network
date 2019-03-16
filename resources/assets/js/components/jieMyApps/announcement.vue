<template>
  <div class="px-4 py-3">
               <v-layout row wrap>
               <span style="font-size:16px" class="font-weight-bold"><span  style="font-size:18px" class="blue--text"> List of all Announcement</span> </span>
               <v-spacer></v-spacer>
               <v-dialog
                  persistent
                  v-model="dialog1"
                  width="800"
                  >
                  <!-- <v-btn    slot="activator" class="textDefault" small>Announce</v-btn> -->
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
                     <v-switch
                        :label="`All Campus`"
                        v-model="switch2"
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
                  width="800"
                  >
                  <!-- <v-btn    slot="activator" class="textDefault" small>Send SMS</v-btn> -->
                  <v-card>
                  <v-card-title
                     class="headline grey lighten-2"
                     primary-title
                  >
                     Enter number
                  </v-card-title>

                  <v-card-text>
                     <v-flex style="margin-top:-3px" >
                     <!-- jiew -->
                     <!-- @blur="whatisFunctionMethodFalse" -->
                       <v-combobox
                           v-model="model"
                           :filter="filter"
                           :hide-no-data="!search"
                           :items="items"
                           :search-input.sync="search"
                           hide-selected
                           label="Search for an option"
                           multiple
                           small-chips
                           solo
                        >
                           <template v-slot:no-data>
                              <v-list-tile>
                              <span class="subheading">Number: </span>
                              <v-chip
                                 :color="`${colors[nonce - 1]} lighten-3`"
                                 label
                                 small
                              >
                                 {{ search }}
                              </v-chip>
                              </v-list-tile>
                           </template>
                           <template v-slot:selection="{ item, parent, selected }">
                              <v-chip
                              v-if="item === Object(item)"
                              :color="`${item.color} lighten-3`"
                              :selected="selected"
                              label
                              small
                              >
                              <span class="pr-2">
                                 {{ item.text }}
                              </span>
                              <v-icon
                                 small
                                 @click="parent.selectItem(item)"
                              >close</v-icon>
                              </v-chip>
                           </template>
                           <template v-slot:item="{ index, item }">
                              <v-list-tile-content>
                              <v-text-field
                                 v-if="editing === item"
                                 v-model="editing.text"
                                 autofocus
                                 flat
                                 background-color="transparent"
                                 hide-details
                                 solo
                                 @keyup.enter="edit(index, item)"
                              ></v-text-field>
                              <v-chip
                                 v-else
                                 :color="`${item.color} lighten-3`"
                                 dark
                                 label
                                 small
                              >
                                 {{ item.text }}
                              </v-chip>
                              </v-list-tile-content>
                              <v-spacer></v-spacer>
                              <v-list-tile-action @click.stop>
                              <v-btn
                                 icon
                                 @click.stop.prevent="edit(index, item)"
                              >
                                 <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                              </v-btn>
                              </v-list-tile-action>
                           </template>
                        </v-combobox>
                     <v-textarea 
                        background-color="transparent"
                        hide-details color="blue"
                        class="whatIs  subheading" row-height="20"
                        ref="newP"
                        style="" placeholder="Say something"
                        flat solo
                        v-model="announceMesesage"
                        auto-grow
                     ></v-textarea>
                    
                  </v-flex>
                     <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn
                        color="primary"
                        flat
                        @click="sendSms"
                     >
                        Send
                     </v-btn>
                  </v-card-actions>
                  </v-card>
               </v-dialog>
             
               </v-layout>
               <v-divider class="grey lighten-2 mt-3"></v-divider>

               <v-card>
                  <v-layout row wrap>
                     
                  </v-layout>
               </v-card>

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
       activator: null,
      attach: null,
      colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
      editing: null,
      index: -1,
      items: [
      //   { header: 'Select an option or create one' },
      //   {
      //     text: 'Foo',
      //     color: 'blue'
      //   },
      //   {
      //     text: 'Bar',
      //     color: 'red'
      //   }
      ],
      nonce: 1,
      menu: false,
      model: [
      //   {
      //     text: 'Foo',
      //     color: 'blue'
      //   }
      ],
      x: 0,
      search: null,
      y: 0,


      e13: 1,
      dialog: false,
      dialog1: false,
      checkbox: true,
      switch1: true,
      switch2: true,
      sendLoading:false,
      announceMesesage: '',
      postedData: { 
         message:'', 
         image:''
      },textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar: false,
   }),
    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1]
            }

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      }
    },
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      edit (index, item) {
        if (!this.editing) {
          this.editing = item
          this.index = index
        } else {
          this.editing = null
          this.index = -1
        }
      },
      filter (item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
      sendSms() {
         let vm = this
         this.sendLoading = true
            _.forEach(this.model, function(value,key){
                 var sendingNumber = value.text
                 console.log(value)
                  axios.post(`https://api.txtlocal.com/send/?apikey=VSciXXo/7iU-qhcXlIMRE5n9Qh5RmDCILpobIh7qkY&numbers=${sendingNumber}&sender=CkcmEVP&message=${vm.announceMesesage}`)
                     // .then((response) =>{
                     //    console.log(response)
                     // })
                     // .catch((error) => {
                     //    console.log(error)
                     // })
                     
                  axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
                     .then((response) =>{
                     // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
                     var now= response.data.time_zone.current_time
                     db.ref(`Announcement/${vm.userData['ckcm-network_token_id']}` ).push().set({
                        userId: vm.userData['ckcm-network_token_id'],
                        announcement: vm.announceMesesage,
                        timestamp:  now,
                     })
                 
                  })
               })
         vm.dialog2 = false
         vm.sendLoading=false
         vm.postedData.message =  ''
         vm.announceMesesage = ''
         vm.snackbar = true
         vm.model=[]
          
      },
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
               apikey: 'VSciXXo/7iU-qhcXlIMRE5n9Qh5RmDCILpobIh7qkY',
               numbers:'09463582440',sender: 'jie', message: vm.announceMesesage
            }]
            var sendingNumber = '+639664155944'
            axios.post(`https://api.txtlocal.com/send/?apikey=VSciXXo/7iU-qhcXlIMRE5n9Qh5RmDCILpobIh7qkY&numbers=${sendingNumber}&sender=CkcmNetwork&message=${vm.announceMesesage}`)
               .then((response) =>{
                  console.log(response)
               })
               // .catch((error) => {
               //    console.log(error)
               // })
               
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
