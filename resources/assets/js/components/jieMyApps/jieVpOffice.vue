<template>
  <div class="px-4 py-3">
               <v-layout row wrap>
               <span style="font-size:16px" class="font-weight-bold"><span  style="font-size:18px" class="blue--text">Vice President Office</span> </span>
               <v-spacer></v-spacer>
               
               <v-dialog v-model="dialog0" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <template v-slot:activator="{ on }">
                  <v-btn color="primary" slot="activator" class="textDefault" small v-on="on"> Events</v-btn>

                  </template>
                  <v-card>
                  <v-toolbar dark outline class="teal">
                     <v-btn icon dark @click="dialog0 = false">
                        <v-icon>close</v-icon>
                     </v-btn>
                     <v-toolbar-title>Setting Events</v-toolbar-title>
                     <v-spacer></v-spacer>
                     <v-toolbar-items>
                        <v-btn dark flat @click="dialogAddevents = true">Add event</v-btn>
                     </v-toolbar-items>
                   
                  </v-toolbar>

                    
                     <v-container grid-list-xs>
                        <v-layout row wrap> 
                           <v-flex xs12>
                              <v-toolbar  color="teal lighten-3">
                                 <v-card-title class="white--text title" primary-title>
                                    Calendar of Events
                                 </v-card-title>
                              </v-toolbar>
                              <v-sheet height="500">
                              <v-calendar
                                 ref="calendar"
                                 :type="type"
                                 :end="end"
                                 :now="today"
                                 :value="today"
                                 v-model="start"
                                 color="teal"
                              >
                                 <template v-slot:day="{ date }">
                                    <template v-for="event in eventsMap[date]">
                                    <v-menu
                                       :key="event.title"
                                       v-model="event.open"
                                       full-width
                                       offset-x
                                    >
                                       <template v-slot:activator="{ on }">
                                          <div
                                          v-if="!event.time"
                                          v-ripple
                                          class="my-event"
                                          v-on="on"
                                          v-html="event.title"
                                          ></div>
                                       </template>
                                       <v-card
                                          color="grey lighten-4"
                                          min-width="350px"
                                          flat
                                       >
                                          <v-toolbar
                                          color="primary"
                                          dark
                                          >
                                          <v-btn icon>
                                             <v-icon>edit</v-icon>
                                          </v-btn>
                                          <v-toolbar-title v-html="event.title"></v-toolbar-title>
                                          <v-spacer></v-spacer>
                                          <v-btn icon>
                                             <v-icon>favorite</v-icon>
                                          </v-btn>
                                          <v-btn icon>
                                             <v-icon>more_vert</v-icon>
                                          </v-btn>
                                          </v-toolbar>
                                          <v-card-title primary-title>
                                          <span v-html="event.details"></span>
                                          </v-card-title>
                                          <v-card-actions>
                                          <v-btn
                                             flat
                                             color="secondary"
                                          >
                                             Cancel
                                          </v-btn>
                                          </v-card-actions>
                                       </v-card>
                                    </v-menu>
                                    </template>
                                 </template>
                              </v-calendar>
                              </v-sheet>
                              </v-flex>

                              <v-flex
                                 sm4
                                 xs12
                                 class="text-sm-left text-xs-center"
                              >
                                 <v-btn @click="$refs.calendar.prev()">
                                 <v-icon
                                    dark
                                    left
                                 >
                                    keyboard_arrow_left
                                 </v-icon>
                                 Prev
                                 </v-btn>
                              </v-flex>
                              <v-flex
                                 sm4
                                 xs12
                                 class="text-xs-center"
                              >
                                 <v-select
                                 v-model="type"
                                 :items="typeOptions"
                                 label="Type"
                                 ></v-select>
                              </v-flex>
                              <v-flex
                                 sm4
                                 xs12
                                 class="text-sm-right text-xs-center"
                              >
                                 <v-btn @click="$refs.calendar.next()">
                                 Next
                                 <v-icon
                                    right
                                    dark
                                 >
                                    keyboard_arrow_right
                                 </v-icon>
                                 </v-btn>
                              </v-flex>
                        </v-layout>
                     </v-container>


                  </v-card>
               </v-dialog>


               <v-dialog
                  persistent
                  v-model="dialog1"
                  width="800"
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
                    
                     <v-combobox
                        v-model="listofSEND"
                        :items="itemsend"
                        :search-input.sync="search"
                        hide-selected
                        label="Specify the Receivers"
                        multiple
                        persistent-hint
                        small-chips
                     >
                        <template v-slot:no-data>
                           <v-list-tile>
                           <v-list-tile-content>
                              <v-list-tile-title>
                                 No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                              </v-list-tile-title>
                           </v-list-tile-content>
                           </v-list-tile>
                        </template>
                     </v-combobox>


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
                  <v-btn    slot="activator" class="textDefault" small>Send SMS</v-btn>
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



   <v-dialog
      v-model="dialogAddevents"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add Event
        </v-card-title>

        <v-card-text>
           <v-container grid-list-xs>
              <v-layout row wrap>
               <v-flex xs12 >
                 <v-text-field
                     color="teal"
                     v-model="addevent.title"
                     label="Title"
                  ></v-text-field>
               </v-flex>
               <v-flex xs12  >
                  <v-textarea
                     name="input-7-1"
                     label="Information"
                     v-model="addevent.information"
                  ></v-textarea>
               </v-flex>
               <v-flex xs12  >
                    <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        full-width
                        max-width="290"
                     >
                        <template v-slot:activator="{ on }">
                           <v-text-field
                           :value="computedDateFormattedMomentjs"
                           clearable
                           label="Date"
                           v-on="on"
                           ></v-text-field>
                        </template>
                        <v-date-picker
                           v-model="addevent.date"
                           @change="menu1 = false"
                        ></v-date-picker>
                     </v-menu>
               </v-flex>
              </v-layout>
           </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="saveEvents"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
            <v-icon class="error--text">thumb_down</v-icon>
         </v-avatar>
         Insufficient Balance</span>
      </v-snackbar>
            </div>
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();
import { db, app, order } from '../../firebase.js';
import moment from 'moment'
export default {  
   
   data: () => ({
      listofSEND: [],
      search: null,

      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      addevent: {
         title: '',
         date: '',
         information: ''
      },
      type: 'month',
      start: '2019-03-29',
      end: '2019-01-06',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' }
      ],
      today: '2019-01-08',

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
      dialogAddevents: false,
      dialog0: false,
      dialog: false,
      dialog1: false,
      checkbox: true,
      switch1: true,
      switch2: false,
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
      itemsend () {
         var list = ['All instructors', 'All students']
         let data = this.$store.getters.myprograms
         let filtData = _.filter(data,'name')
         _.forEach(data, function(value,key) {
            list.push(value.name)
         })
         return list 
      },
      events() {
         var events = _.filter(this.$store.getters.events, 'date')
         return events
      },
      computedDateFormattedMomentjs () {
        return this.addevent.date ? moment(this.addevent.date).format('dddd, MMMM Do YYYY') : ''
      },
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      },
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      open (event) {
        alert(event.title)
      },
      saveEvents() {
         let vm = this
         var newPostKey = db.ref().child('CKCMDATA/events').push().key;
         let post = db.ref().child('CKCMDATA/events/'+newPostKey)
         post.set({
            keyIndex: newPostKey,
            title: _.capitalize(vm.addevent.title),
            details: _.capitalize(vm.addevent.information),
            date: vm.addevent.date,
            open: false
         })
         vm.addevent = {
            title: '',
            details: '',
            date: '',
         }
         vm.dialogAddevents = false
      },

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
            
            var sendingNumber = '+639068319700'
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
               vm.dialog1 = true
               vm.sendLoading=false
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

<style lang="stylus" scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>