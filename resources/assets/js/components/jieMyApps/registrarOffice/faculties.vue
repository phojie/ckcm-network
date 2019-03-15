<template>
   <v-container grid-list-sm>
      <v-layout row wrap>
         <v-flex v-if="listprograms.length == 0" xs12>
            <v-card class="pa-5 mx-5">
               <h3 class="text-xs-center">No Faculties available yet</h3>
            </v-card>
         </v-flex>
         <v-flex v-else  sm12 v-for="program in listprograms" :key="program.keyIndex" class="pa-3 my-2">
            <v-card class="pa-4" style="border-radius:6px !important;">
               <v-layout justify-center row wrap>
                  <v-flex xs12>
                     <v-layout row wrap>
                        <v-chip :style="`color:${program.info.color}`" label color="grey lighten-3" class=" text-capitalize body-2 font-weight-bold" >College of {{program.info.name}} 
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-flex xs3>
                           <v-text-field
                              style="margin-top:-10px;"
                              v-model="program.info.searchBar"
                              append-icon="search"
                              Placeholder="Search"
                              single-line
                              class="body-2 "
                              hide-details
                           ></v-text-field>
                        </v-flex>
                      
                     </v-layout>
                  </v-flex> 
                  
                  <v-flex xs12>
                     
                     <v-data-table
                        class="mt-3"
                        :headers="headers"
                        :items="program.faculty"
                        :search="program.info.searchBar"
                        >
                        <template slot="items" slot-scope="props">
                        <td><v-avatar
                           size="35"
                           :color="`${program.info.color}`"
                        >
                           <img class="pa-1" :src="props.item.photoUrl" alt="prof">
                        </v-avatar></td>
                        <td>{{props.item.title + ' ' + props.item.fn + ' ' + props.item.ln}}</td>
                        <td >{{ props.item.email }}</td>
                        <td class="">
                           <v-icon
                              small
                              class="mr-2"
                              @click="viewItem(props.item)"
                           >
                              mdi-eye
                           </v-icon>
                           <v-icon
                              small
                              class="mr-2"
                              @click="editItem(props.item)"
                           >
                              mdi-pencil
                           </v-icon>
                           <v-icon
                              small
                              @click="deleteItem(props.item)"
                           >
                              mdi-delete
                           </v-icon>
                        </td>
                        </template>
                        <v-alert slot="no-results" :value="true" color="error darken-2" icon="warning">
                        Your search for "{{ program.info.searchBar }}" found no results.
                        </v-alert>
                     </v-data-table>

                  </v-flex>

                  <!-- <v-btn  :color="`${program.color}`" outline flat block @click="viewDialog(program)" class="mt-4 textNone font-weight-bold">  View Information </v-btn> -->
               </v-layout>
            </v-card>

         </v-flex>

         <v-flex sm12  class="pa-3 my-2">
            <v-card class="pa-4" style="border-radius:6px !important;">
               <v-layout justify-center row wrap>
                  <v-flex xs12>
                     <v-layout row wrap>
                        <v-chip color="grey lighten-3" label class="tile brown--text  text-capitalize body-2 font-weight-bold" > SR. MA. </v-chip>
                        <v-spacer></v-spacer>
                        <v-flex xs3 >
                           <v-text-field
                              style="margin-top:-10px;"
                              v-model="search2"
                              append-icon="search"
                              Placeholder="Search"
                              single-line
                              class="body-2 "
                              hide-details
                           ></v-text-field>
                        </v-flex>
                     </v-layout>
                  </v-flex> 
                  
                  <v-flex xs12>
                     <v-data-table
                        class="mt-3"
                        :headers="headers"
                        :items="sisterFaculty"
                        :search="search2"
                        >
                        <template slot="items" slot-scope="props">
                        <td><v-avatar
                           size="35"
                           color="brown lighten-2"
                        >
                           <img class="pa-1" :src="props.item.photoUrl" alt="prof">
                        </v-avatar></td>
                        <td>{{props.item.title + ' ' + props.item.fn + ' ' + props.item.ln}}</td>
                        <td >{{ props.item.email }}</td>
                        <td class="">
                           <v-icon
                              small
                              class="mr-2"
                              @click="viewItem(props.item)"
                           >
                              mdi-eye
                           </v-icon>
                           <v-icon
                              small
                              class="mr-2"
                              @click="editItem(props.item)"
                           >
                              mdi-pencil
                           </v-icon>
                           <v-icon
                              small
                              @click="deleteItem(props.item)"
                           >
                              mdi-delete
                           </v-icon>
                        </td>
                        </template>
                        <v-alert slot="no-results" :value="true" color="error darken-2" icon="warning">
                        Your search for "{{ search2 }}" found no results.
                        </v-alert>
                     </v-data-table>

                  </v-flex>

                  <!-- <v-btn  :color="`${program.color}`" outline flat block @click="viewDialog(program)" class="mt-4 textNone font-weight-bold">  View Information </v-btn> -->
               </v-layout>
            </v-card>

         </v-flex>

         <v-flex sm12  class="pa-3 my-2">
            <v-card class="pa-4" style="border-radius:6px !important;">
               <v-layout justify-center row wrap>
                  <v-flex xs12>
                     <v-layout row wrap>
                          
                        <v-chip  :class="`${userFData.themeColor}--text`"  color="grey lighten-3" label class="tile text-capitalize body-2 font-weight-bold" > Others </v-chip>
                        <v-spacer></v-spacer>
                        <v-flex xs4>
                           <v-text-field
                              v-model="search"
                              append-icon="search"
                              Placeholder="Search"
                              single-line
                              class="subheading "
                              hide-details
                           ></v-text-field>
                        </v-flex>
                     </v-layout>
                  </v-flex> 
                  
                  <v-flex xs12>
                     <v-data-table
                        class="mt-3"
                        :headers="headers"
                        :items="otherFaculty"
                        :search="search"
                        >
                        <template slot="items" slot-scope="props">
                        <td><v-avatar
                           size="35"
                           :color="`${userFData.themeColor} lighten-2`" 
                        >
                           <img class="pa-1" :src="props.item.photoUrl" alt="prof">
                        </v-avatar></td>
                        <td>{{props.item.title + ' ' + props.item.fn + ' ' + props.item.ln}}</td>
                        <td >{{ props.item.email }}</td>
                        <td class="">
                           <v-icon
                              small
                              class="mr-2"
                              @click="viewItem(props.item)"
                           >
                              mdi-eye
                           </v-icon>
                           <v-icon
                              small
                              class="mr-2"
                              @click="editItem(props.item)"
                           >
                              mdi-pencil
                           </v-icon>
                           <v-icon
                              small
                              @click="deleteItem(props.item)"
                           >
                              mdi-delete
                           </v-icon>
                        </td>
                        </template>
                        <v-alert slot="no-results" :value="true" color="error darken-2" icon="warning">
                        Your search for "{{ search }}" found no results.
                        </v-alert>
                     </v-data-table>

                  </v-flex>

                  <!-- <v-btn  :color="`${program.color}`" outline flat block @click="viewDialog(program)" class="mt-4 textNone font-weight-bold">  View Information </v-btn> -->
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
            class="headline grey lighten-2"
            primary-title
         >
            Edit Faculty Profile
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               <v-flex xs12 sm6 md1>
                  <v-text-field label="Title*" 
                  v-model="faculty.title"
                  @input="$v.faculty.title.$touch()" @blur="$v.faculty.title.$touch()" 
                  :error-messages="facultytitleErrors" required
                  >
                  </v-text-field>
               </v-flex>
               <v-flex xs12 sm6 md4>
                  <v-text-field label="First name*" 
                  v-model="faculty.fn"
                  @input="$v.faculty.fn.$touch()" @blur="$v.faculty.fn.$touch()" 
                  :error-messages="facultyfnErrors" required>
                  </v-text-field>
               </v-flex>
                  <v-flex xs12 sm6 md3>
                  <v-text-field label="Middle name*" 
                  v-model="faculty.mn"
                  @input="$v.faculty.mn.$touch()" @blur="$v.faculty.mn.$touch()" 
                  :error-messages="facultymnErrors" required></v-text-field>
               </v-flex>
               <v-flex xs12 sm6 md4>
                  <v-text-field label="Last name*" 
                  v-model="faculty.ln"
                  @input="$v.faculty.ln.$touch()" @blur="$v.faculty.ln.$touch()" 
                  :error-messages="facultylnErrors" required
                  >
                  </v-text-field>
               </v-flex>
               <v-flex xs6>
                  <v-text-field label="Email*" 
                  v-model="faculty.email"
                  @input="$v.faculty.email.$touch()" @blur="$v.faculty.email.$touch()" 
                  :error-messages="facultyemailErrors" required>
                  </v-text-field>
               </v-flex>
               <v-flex xs6>
                  <v-text-field label="Confirm email*" 
                  v-model="faculty.confirm"
                  @input="$v.faculty.confirm.$touch()" @blur="$v.faculty.confirm.$touch()" 
                  :error-messages="facultyconfirmErrors" required></v-text-field>
               </v-flex>
               <!-- <v-flex xs12>
                  <v-text-field label="Password*" type="password" required></v-text-field>
               </v-flex> -->
               <v-flex xs12 >
                  <v-autocomplete
                     :items="listprogramsInput"
                     label="Designation*"
                     v-model="faculty.designation"
                     @input="$v.faculty.designation.$touch()" @blur="$v.faculty.designation.$touch()" 
                     :error-messages="facultydesignationErrors" required
                  ></v-autocomplete>
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
               @click="saveFaculty"
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
            Are you sure you want to delete {{faculty.title + ' ' + faculty.ln}} ?
         </v-card-title>
         
          <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               <v-flex xs12 sm6 md1>
                  <v-text-field disabled="" label="Title*" 
                  v-model="faculty.title"
                  @input="$v.faculty.title.$touch()" @blur="$v.faculty.title.$touch()" 
                  :error-messages="facultytitleErrors" required
                  >
                  </v-text-field>
               </v-flex>
               <v-flex xs12 sm6 md4>
                  <v-text-field disabled label="First name*" 
                  v-model="faculty.fn"
                  @input="$v.faculty.fn.$touch()" @blur="$v.faculty.fn.$touch()" 
                  :error-messages="facultyfnErrors" required>
                  </v-text-field>
               </v-flex>
                  <v-flex xs12 sm6 md3>
                  <v-text-field disabled label="Middle name*" 
                  v-model="faculty.mn"
                  @input="$v.faculty.mn.$touch()" @blur="$v.faculty.mn.$touch()" 
                  :error-messages="facultymnErrors" required></v-text-field>
               </v-flex>
               <v-flex xs12 sm6 md4>
                  <v-text-field disabled label="Last name*" 
                  v-model="faculty.ln"
                  @input="$v.faculty.ln.$touch()" @blur="$v.faculty.ln.$touch()" 
                  :error-messages="facultylnErrors" required
                  >
                  </v-text-field>
               </v-flex>
               <v-flex xs6>
                  <v-text-field disabled label="Email*" 
                  v-model="faculty.email"
                  @input="$v.faculty.email.$touch()" @blur="$v.faculty.email.$touch()" 
                  :error-messages="facultyemailErrors" required>
                  </v-text-field>
               </v-flex>
               <v-flex xs6>
                  <v-text-field disabled label="Confirm email*" 
                  v-model="faculty.confirm"
                  @input="$v.faculty.confirm.$touch()" @blur="$v.faculty.confirm.$touch()" 
                  :error-messages="facultyconfirmErrors" required></v-text-field>
               </v-flex>
               <!-- <v-flex xs12>
                  <v-text-field label="Password*" type="password" required></v-text-field>
               </v-flex> -->
               <v-flex xs12 >
                  <v-autocomplete
                     disabled
                     :items="listprogramsInput"
                     label="Designation*"
                     v-model="faculty.designation"
                     @input="$v.faculty.designation.$touch()" @blur="$v.faculty.designation.$touch()" 
                     :error-messages="facultydesignationErrors" required
                  ></v-autocomplete>
               </v-flex>
               </v-layout>
            </v-container>
            <small class='red--text'>This faculty will be permanently deleted</small>
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
               @click="deleteFaculty"
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
      },
      faculty: {
         title:  {required},
         fn:  {required},
         mn:  {required},
         ln:  {required},
         email:  {required, email},
         confirm:  {required, email},
         designation:  {required},
      },
   },
   components: {Swatches},
   data: () => ({
      emailList: [],

      editItemDialog: false,
      deleteItemDialog: false,
      dataDialog: false,

      search: '',
      search2: '',
      headers: [
         {
            text: 'Profile',
            align: 'left',
            sortable: false,
            value: 'code'
         },
         { text: 'Full name', sortable: false, value: 'fn' },
         { text: 'Email', sortable: false, value: 'email' },
         { text: 'Actions', sortable: false, value: 'ln' }
      ],

      program: {
         name: '',
         description: '',
         description2: '',
         color: '',
      },
      faculty: {
         title: '',
         fn: '',
         mn: '',
         ln: '',
         email: '',
         confirm: '',
         designation: '',
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
         this.faculty = {
            title:data.title,
            fn:data.fn,
            mn: data.mn,
            ln: data.ln,
            email: data.email,
            confirm: data.email,
            designation: data.designation,
            keyIndex: data.keyIndex
         }
      },
      deleteFaculty(){
         let vm = this
         var newPostKey = vm.faculty.keyIndex
         let post = db.ref().child('CKCMDATA/faculty/'+newPostKey)
         let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKey)
         let users = db.ref().child('users/'+newPostKey)
         users.remove()
         newAccount.remove()
         post.remove()
         vm.$v.faculty.$reset()
         vm.faculty = {
            title: '',
            fn: '',
            mn: '',
            ln: '',
            email: '',
            confirm: '',
            designation: '',
         },
         vm.snackbarDetails = 'Successfully deleted Faculty'
         vm.snackbar2 = true
         vm.deleteItemDialog = false
      },
      deleteItem(data) {
         this.deleteItemDialog = true
         this.faculty = {
            title:data.title,
            fn:data.fn,
            mn: data.mn,
            ln: data.ln,
            email: data.email,
            confirm: data.email,
            designation: data.designation,
            keyIndex: data.keyIndex
         }

      },
      saveFaculty() {
         
         let vm = this
         var filterEmail = _.filter(vm.emailList,['email', _.capitalize(vm.faculty.email)])
         console.log(filterEmail)
         if(filterEmail.length > 0) {
            if(vm.$v.faculty.$invalid || vm.faculty.email != vm.faculty.confirm || filterEmail[0].email != vm.faculty.email) {
               vm.$v.faculty.$touch()
            } else {
         
               var newPostKey = vm.faculty.keyIndex
               let post = db.ref().child('CKCMDATA/faculty/'+newPostKey)
               let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKey)
               let users = db.ref().child('users/'+newPostKey)
               users.update({
                  keyIndex: newPostKey,
                  title: _.capitalize(vm.faculty.title),
                  firstname:  _.capitalize(vm.faculty.fn),
                  niddlename:  _.capitalize(vm.faculty.mn),
                  displayName: _.capitalize(vm.faculty.fn) + ' ' + _.capitalize(vm.faculty.ln),
                  lastname:  _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  status:'offline',
                  type: 1,
                  themeColor: 'teal',
                  coverUrl: "",
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
               })

               newAccount.update({
                  'ckcm-network_token_id': newPostKey,
                  displayName: _.capitalize(vm.faculty.fn) + ' ' + _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  password: vm.faculty.email,
                  firsttime: 0,
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
               })

               post.update({
                  keyIndex: newPostKey,
                  title: _.capitalize(vm.faculty.title),
                  fn:  _.capitalize(vm.faculty.fn),
                  mn:  _.capitalize(vm.faculty.mn),
                  ln:  _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  designation:  _.capitalize(vm.faculty.designation),
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"

               }, function (error) {
                  if(!error) {
                     vm.$v.faculty.$reset()
                     vm.faculty = {
                        title: '',
                        fn: '',
                        mn: '',
                        ln: '',
                        email: '',
                        confirm: '',
                        designation: '',
                     },
                     vm.snackbarDetails = 'Successfully updated '
                     vm.snackbar2 = true
                     vm.editItemDialog = false
                  }
               })
            }
         } else {
            if(vm.$v.faculty.$invalid || vm.faculty.email != vm.faculty.confirm ) {
               vm.$v.faculty.$touch()
            } else {
         
               var newPostKey = vm.faculty.keyIndex
               let post = db.ref().child('CKCMDATA/faculty/'+newPostKey)
               let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKey)
               let users = db.ref().child('users/'+newPostKey)
               users.update({
                  keyIndex: newPostKey,
                  title: _.capitalize(vm.faculty.title),
                  firstname:  _.capitalize(vm.faculty.fn),
                  niddlename:  _.capitalize(vm.faculty.mn),
                  displayName: _.capitalize(vm.faculty.fn) + ' ' + _.capitalize(vm.faculty.ln),
                  lastname:  _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  status:'offline',
                  type: 1,
                  themeColor: 'teal',
                  coverUrl: "",
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
               })

               newAccount.update({
                  'ckcm-network_token_id': newPostKey,
                  displayName: _.capitalize(vm.faculty.fn) + ' ' + _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  password: vm.faculty.email,
                  firsttime: 0,
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
               })

               post.update({
                  keyIndex: newPostKey,
                  title: _.capitalize(vm.faculty.title),
                  fn:  _.capitalize(vm.faculty.fn),
                  mn:  _.capitalize(vm.faculty.mn),
                  ln:  _.capitalize(vm.faculty.ln),
                  email: _.capitalize(vm.faculty.email),
                  designation:  _.capitalize(vm.faculty.designation),
                  photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"

               }, function (error) {
                  if(!error) {
                     vm.$v.faculty.$reset()
                     vm.faculty = {
                        title: '',
                        fn: '',
                        mn: '',
                        ln: '',
                        email: '',
                        confirm: '',
                        designation: '',
                     },
                     vm.snackbarDetails = 'Successfully updated '
                     vm.snackbar2 = true
                     vm.editItemDialog = false
                  }
               })
            }
         }
      },

   },
   computed: {
      sisterFaculty() {
         let data = this.$store.getters.myfaculties

         let filtData = _.filter(data,['designation','Sr. ma.'])
         console.log(filtData)
         return filtData
      },
      otherFaculty() {
         let data = this.$store.getters.myfaculties

         let filtData = _.filter(data,['designation','Other'])
         console.log(filtData)
         return filtData
      },
      listprogramsInput() {
         let data = this.$store.getters.myprograms
         let items = []
         let filtData = _.filter(data,'name')

         _.forEach(data, function(value,key) {
            items.push(value.name)
         })

         let checkSr = _.filter(items,'SR. MA.')
         if(checkSr.length == 0){
            items.push('SR. MA.')
            items.push('Other')
         } else {

         }
         return items
      },
      facultytitleErrors () {
         const errors = []
         if (!this.$v.faculty.title.$dirty) return errors
         !this.$v.faculty.title.required && errors.push('Title is required')
         return errors
      },
      facultyfnErrors () {
         const errors = []
         if (!this.$v.faculty.fn.$dirty) return errors
         !this.$v.faculty.fn.required && errors.push('Firstname is required')
         return errors
      },
      facultymnErrors () {
         const errors = []
         if (!this.$v.faculty.mn.$dirty) return errors
         !this.$v.faculty.mn.required && errors.push('Middlename is required')
         return errors
      },
      facultylnErrors () {
         const errors = []
         if (!this.$v.faculty.ln.$dirty) return errors
         !this.$v.faculty.ln.required && errors.push('Lastname is required')
         return errors
      },
      facultyemailErrors () {
         var filterEmail = _.filter(this.emailList,['email', _.capitalize(this.faculty.email)])
         const errors = []
         if(filterEmail.length > 0) {
            if(filterEmail[0].email != this.faculty.email) {
               errors.push('Email already used')
            } else {

            }
         }
         // if(filterEmail[0].email != this.faculty.email &&  filterEmail.length > 0 )  {
         //    errors.push('Email already used')
         // }
         else if (!this.$v.faculty.email.$dirty) return errors
         !this.$v.faculty.email.email && errors.push('Must be valid e-mail')
         !this.$v.faculty.email.required && errors.push('Email is required')
         
         return errors
      },
      facultyconfirmErrors () {
         const errors = []
         if (!this.$v.faculty.confirm.$dirty && this.faculty.email == this.faculty.confirm) return errors
         !this.$v.faculty.email.email && errors.push('Must be valid e-mail')
         // !this.$v.faculty.confirm.required && errors.push('Confirm your email')
         _.toLower(this.faculty.email) != _.toLower(this.faculty.confirm) && errors.push('Email does not match')

            return errors

      },
      facultydesignationErrors () {
         const errors = []
         if (!this.$v.faculty.designation.$dirty) return errors
         !this.$v.faculty.designation.required && errors.push('Designation is required')
         return errors
      },

      userFData() {
         return this.$store.getters.AccountFdetails
      },

      listFaculty() {
         let data = this.$store.getters.myfaculties

         let filtData = _.filter(data,'keyIndex')
         return filtData
      },
      listprograms() {
         let vm = this
         let items = []
         let data = this.$store.getters.myprograms
         let dataFaculty = this.$store.getters.myfaculties
         let facultyFilt = _.filter(dataFaculty,'designation')

         let allUsers = this.$store.getters.allUsers
         let usersFilt = _.filter(allUsers,'keyIndex')

         _.forEach(data, function(program, key) {
            var fd = _.filter(facultyFilt, ['designation',program.name])
            items.push({
               info: program,
               faculty: fd
            })
         })

         console.log(items)
         // let filtData = _.filter(data,'name')
         return items
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
   },
   created() {
      let vm = this
      let get = db.ref('CKCMDATA/accountUser')
      get.on('value', function(snapshot) {
         vm.emailList = snapshot.val()
      })
   }
}
</script>

<style>

</style>
