<template>
   <v-container grid-list-sm>
      <v-layout row wrap>
         <v-flex v-if="listprograms.length == 0" xs12>
            <v-card class="pa-5 mx-5">
               <h3 class="text-xs-center">No Programs available yet</h3>
            </v-card>
         </v-flex>
         <v-flex v-else md4 sm12 v-for="program in listprograms" :key="program.keyIndex" class="pa-3 my-2">
            <v-card class="pa-4" style="border-radius:6px !important;">
               <v-layout justify-center row wrap>
                  <v-flex xs12>
                     <v-layout col wrap>
                        <span :style="`color:${program.color}`"  class="  font-weight-black" >{{program.name}}</span>
                        <v-spacer></v-spacer>
                        <v-icon
                           small
                           class="grey--text  mr-2"
                           @click="editItem(program)"
                        >
                           edit
                        </v-icon>
                        <v-icon
                           small
                           class="grey--text "
                           @click="deleteItem(program)"
                        >
                           delete
                        </v-icon>
                     </v-layout>
                  </v-flex> 
                  <v-layout row wrap >
                     <v-flex xs12>
                        <p class="mt-3 grey--text">{{program.description}}</p> 
                     </v-flex>
                     <v-flex xs12>
                        <p class="mt-3 body-2">{{program.description2}}</p>
                     </v-flex>
                     <v-flex xs12>
                        <v-btn  :color="`${program.color}`" outline flat block @click="viewDialog(program)" class="mt-4 textNone font-weight-bold">  View Information </v-btn>
                     </v-flex>
                  </v-layout>
               </v-layout>
            </v-card>

         </v-flex>
      </v-layout>

      <v-dialog
         v-model="editItemDialog"
         width="600"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-4"
            :style="`color: ${program.color}`"
            primary-title
         >
            Edit Program
         </v-card-title>
         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               <v-flex xs12>
                  <label for="" class="body-1 grey--text text--darken-1"> Please Choose a Color ID:</label>
                  <swatches v-model="program.color" popover-to="top"></swatches>
               </v-flex>
               
               <v-flex xs12 >
                  <v-text-field v-model="program.name" label="Program Name*"
                  @input="$v.program.name.$touch()" @blur="$v.program.name.$touch()" 
                  :error-messages="programnameErrors" required></v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea v-model="program.description" auto-grow label="Description*" required
                  @input="$v.program.description.$touch()" @blur="$v.program.description.$touch()" 
                  :error-messages="programdescriptionErrors" >
                  ></v-textarea>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea v-model="program.description2" auto-grow label="Other Description" required
                  ></v-textarea>
               </v-flex>
         
               
               
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
               @click="saveProgram"
            >
               Save
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>

       <v-dialog
         v-model="deleteItemDialog"
         width="600"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="title red lighten-2 white--text"
            primary-title
         >
            Are you sure you want to delete this program ?
         </v-card-title>
         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               <v-flex xs12 >
                  <v-text-field disabled="" v-model="program.name" label="Program Name*"
                  @input="$v.program.name.$touch()" @blur="$v.program.name.$touch()" 
                  :error-messages="programnameErrors" required></v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea disabled v-model="program.description" auto-grow label="Description*" required
                  @input="$v.program.description.$touch()" @blur="$v.program.description.$touch()" 
                  :error-messages="programdescriptionErrors" >
                  ></v-textarea>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea disabled v-model="program.description2" auto-grow label="Other Description" required
                  ></v-textarea>
               </v-flex>
         
               
               
               </v-layout>
            </v-container>
            <small class='red--text'>This program will be permanently deleted</small>
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
               @click="deleteProgram"
            >
               Delete
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>



      <v-dialog v-model="dataDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
         <v-card>
         <v-toolbar dense dark :color="`${program.color}`">
            <v-btn icon dark @click="dataDialog = false">
               <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title class="body-1 font-weight-bold"> {{program.name}} INFORMATION </v-toolbar-title>
            <v-spacer></v-spacer>
           
            <!-- <v-toolbar-items>
               <v-btn dark flat @click="educationDialog = false">Save</v-btn>
            </v-toolbar-items> -->
         </v-toolbar>
         <v-container grid-list-xs>
            <v-layout row wrap>
               
            </v-layout>
         </v-container>

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
   import Swatches from 'vue-swatches'
   import { db, app, order } from '../../../firebase.js';
   import { validationMixin } from 'vuelidate'
   import { required, email} from 'vuelidate/lib/validators'

   export default {
   mixins: [validationMixin],
   validations: { 
      program: {
         name: {required},
         description: {required},
      }
   },
   components: {Swatches},
   data: () => ({

      editItemDialog: false,
      deleteItemDialog: false,
      dataDialog: false,

      program: {
         name: '',
         description: '',
         description2: '',
         color: '',
         keyIndex: '',

      },
      snackbarDetails: '',
      textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar2: false,
   }),
   methods: {
      viewDialog(data) {
         this.dataDialog = true
         this.program = {
            name: data.name,
            description: data.description,
            description2: data.description2,
            color: data.color,
            keyIndex: data.keyIndex
         }
      },
      editItem(data) {
         this.editItemDialog = true
         this.program = {
            name: data.name,
            description: data.description,
            description2: data.description2,
            color: data.color,
            keyIndex: data.keyIndex
         }
      },
      deleteItem(data) {
         this.deleteItemDialog = true
         this.program = {
            name: data.name,
            description: data.description,
            description2: data.description2,
            color: data.color,
            keyIndex: data.keyIndex
         }
      },
      saveProgram() {
         let vm = this
         if(vm.$v.program.$invalid) {
            vm.$v.program.$touch()
         } else {
            var newPostKey = vm.program.keyIndex
            let post = db.ref().child('CKCMDATA/programs/'+newPostKey)
            post.update({
               keyIndex: newPostKey,
               name: _.capitalize(vm.program.name),
               description: _.upperFirst(vm.program.description),
               description2: _.upperFirst(vm.program.description2),
               color: vm.program.color,
               searchBar:''
            }, function (error) {
               if(!error) {
                  vm.$v.program.$reset()
                  vm.program = {
                     name: '',
                     description: '',
                     color: '',
                  },
                  vm.snackbarDetails = 'Successfully added updated Program'
                  vm.snackbar2 = true
                  vm.editItemDialog = false
               }
            })
         }
      },
      deleteProgram() {
         let vm = this
         if(vm.$v.program.$invalid) {
            vm.$v.program.$touch()
         } else {
            // var newPostKey = db.ref().child('CKCMDATA/subject').push().key;
            let post = db.ref().child('CKCMDATA/programs/'+vm.program.keyIndex)
            post.remove()
            vm.$v.program.$reset()
            vm.program = {
               name: '',
               description: '',
               description2: '',
            },
            vm.snackbarDetails = 'Successfully deleted a Program'
            vm.snackbar2 = true
            vm.deleteItemDialog = false
         }
      }

   },
   computed: {
      listofFaculties() {
         let data = this.$store.getters.myfaculties
         let filtData = _.filter(data,'keyIndex')
         return filtData
      },
      listprograms() {
         let data = this.$store.getters.myprograms
         let filtData = _.filter(data,'name')
         return filtData
      },
      programnameErrors () {
         const errors = []
         if (!this.$v.program.name.$dirty) return errors
         !this.$v.program.name.required && errors.push('Program name is required')
         return errors
      },
      programdescriptionErrors () {
         const errors = []
         if (!this.$v.program.description.$dirty) return errors
         !this.$v.program.description.required && errors.push('Program Description is required')
         return errors
      },
   }
}
</script>

<style>

</style>
