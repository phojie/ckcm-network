<template>
   <v-container grid-list-lg>
      <v-layout row wrap>
         <v-card flat width="100%">
            <v-card-title>
               <h3  :class="`${userFData.themeColor}--text`"  >List of all Rooms</h3> 
               <v-spacer></v-spacer>
               <v-flex xs3>
                  <v-text-field
                     v-model="search"
                     append-icon="search"
                     Placeholder="Search"
                     single-line
                     class="subheading "
                     hide-details
                  ></v-text-field>
               </v-flex>
            </v-card-title>
            <v-data-table
               class="mt-3"
               :headers="headers"
               :items="roomDetails"
               :search="search"
               >
               <template slot="items" slot-scope="props">
               <td>{{ props.item.name }}</td>
               <td v-if="props.item.description == ''" class="red--text text--lighten-2">No description added*</td>
               <td v-else class="text-capitalize text--lighten-2">{{ props.item.description  }}</td>
               <td class="">
                  <v-icon
                     small
                     class="mr-2"
                     @click="editItem(props.item)"
                  >
                     edit
                  </v-icon>
                  <v-icon
                     small
                     @click="deleteItem(props.item)"
                  >
                     delete
                  </v-icon>
               </td>
               </template>
               <v-alert slot="no-results" :value="true" color="error darken-2" icon="warning">
               Your search for "{{ search }}" found no results.
               </v-alert>
            </v-data-table>
         </v-card>
      </v-layout>


      <v-dialog
         v-model="editItemDialog"
         width="500"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-2"
            primary-title
         >
            New Room
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               
               <v-flex xs12 >
                  <v-text-field v-model="room.name" label="Room name*"
                  @input="$v.room.name.$touch()" @blur="$v.room.name.$touch()" 
                  :error-messages="roomnameErrors" required></v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea v-model="room.description" auto-grow label="Room Description" required
                  ></v-textarea>
               </v-flex>

               <!-- <v-flex xs12 >
                  <v-text-field v-model="subject.units" label="Units*" required
                  mask="###"
                  @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                  :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex> -->

               
               </v-layout>
            </v-container>
            <small>*indicates required field</small>
         </v-card-text>

         <v-divider></v-divider>

         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               color="primary"
               flat
               @click="editItemDialog = false"
            >
               Cancel
            </v-btn>
            <v-btn
               color="primary"
               flat
               @click="saveRoom"
            >
               Save
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>

      <v-dialog
         v-model="deleteItemDialog"
         width="500"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="title red lighten-2 white--text"
            primary-title
         >
            Are you sure you want to delete this Room ?
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               <v-flex xs12 >
                  <v-text-field disabled="" v-model="room.name" label="Room name*"
                  @input="$v.room.name.$touch()" @blur="$v.room.name.$touch()" 
                  :error-messages="roomnameErrors" required></v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea disabled v-model="room.description" auto-grow label="Room Description" required
                  ></v-textarea>
               </v-flex>

               <!-- <v-flex xs12 >
                  <v-text-field v-model="subject.units" label="Units*" required
                  mask="###"
                  @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                  :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex> -->

               
               </v-layout>
            </v-container>
            <small class='red--text'>This Room will be permanently deleted</small>
         </v-card-text>

         <v-divider></v-divider>

         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               color="primary"
               flat
               @click="deleteItemDialog = false"
            >
               Cancel
            </v-btn>
            <v-btn
               color="primary"
               flat
               @click="deleteRoom"
            >
               Delete
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>



      <v-snackbar
         v-model="snackbar2"
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
         {{snackbarDetails}}</span>
      </v-snackbar>
   </v-container>
</template>

<script>
   import { db, app, order } from '../../../firebase.js';
   import { validationMixin } from 'vuelidate'
   import { required, email} from 'vuelidate/lib/validators'

   export default {
   mixins: [validationMixin],
   validations: { 
      room: {
         name: {required},
      },
   },
   data() {
      return {
         editItemDialog: false,
         deleteItemDialog: false,

         room: {
            name: '',
            description: '',
            keyIndex: '',
         },

         search: '',
         headers: [
            {
               text: 'Room Name',
               align: 'left',
               sortable: false,
               value: 'name'
            },
            { text: 'Description', sortable: false, value: 'description' },
            { text: 'Actions', sortable: false, value: 'units' }
         ],
         snackbarDetails: '',
         textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar2: false,
      }
   },
   methods: {
      deleteItem(data) {
         this.deleteItemDialog = true
         this.room = {
            name: data.name,
            description: data.description,
            keyIndex: data.keyIndex,
         }
      },
      editItem(data) {
         this.editItemDialog = true
         this.room = {
            name: data.name,
            description: data.description,
            keyIndex: data.keyIndex,
         }
      },
      saveRoom() {
         let vm = this
         if(vm.$v.room.$invalid) {
            vm.$v.room.$touch()
         } else {
            var newPostKey = vm.room.keyIndex
            let post = db.ref().child('CKCMDATA/room/'+newPostKey)
            post.update({
               keyIndex: newPostKey,
               name: _.capitalize(vm.room.name),
               description: vm.room.description,
            }, function (error) {
               if(!error) {
                  vm.$v.room.$reset()
                  vm.room = {
                     name: '',
                     description: '',
                  },
                  vm.snackbarDetails = 'Successfully updated a Room'
                  vm.snackbar2 = true
                  vm.editItemDialog = false
               }
            })
         }
      },
      deleteRoom() {
         let vm = this
         var newPostKey = vm.room.keyIndex
         let post = db.ref().child('CKCMDATA/room/'+newPostKey)
         post.remove()
         vm.$v.room.$reset()
         vm.room = {
            name: '',
            description: '',
         },
         vm.snackbarDetails = 'Successfully deleted a Room'
         vm.snackbar2 = true
         vm.deleteItemDialog = false
      }
      
   },
   computed: {
      roomDetails() {
         let data = this.$store.getters.myrooms
         let filtData = _.filter(data,'keyIndex')
         return filtData
      },
      roomnameErrors () {
         const errors = []
         if (!this.$v.room.name.$dirty) return errors
         !this.$v.room.name.required && errors.push('Room name is required')
         return errors
      },

      userFData() {
         return this.$store.getters.AccountFdetails
      },

   },
   created() {
   },
}
</script>

<style>

</style>
