<template>
   <v-container grid-list-lg>
      <v-layout row wrap>
         <v-card flat width="100%">
            <v-card-title>
               <h3  :class="`${userFData.themeColor}--text`"  >List of all Subjects</h3> 
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
               :items="subjectDetails"
               :search="search"
               >
               <template slot="items" slot-scope="props">
                  <tr :style="`border-left: 10px solid ${props.item.program.color}`">
                     <td :style="`color:${props.item.program.color}`">{{ props.item.value.code }}</td>
                     <td :style="`color:${props.item.program.color}`">{{ props.item.value.description }}</td>
                     <td :style="`color:${props.item.program.color}`">{{ props.item.value.units }}</td>
                     <td :style="`color:${props.item.program.color}`">{{ props.item.value.yearlvl }}</td>
                     <td :style="`color:${props.item.program.color}`">{{ props.item.sched }}</td>
                     <td :style="`color:${props.item.program.color}`">{{ props.item.value.instructor }}</td>
                  </tr>
                  </template>
               <v-alert slot="no-results" :value="true" color="error darken-2" icon="warning">
               Your search for "{{ search }}" found no results.
               </v-alert>
            </v-data-table>
         </v-card>
      </v-layout>


      <v-dialog
         v-model="editSubjectDialog"
         width="500"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-2"
            primary-title
         >
            Edit Subject
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               
               <v-flex xs12 >
                  <v-text-field v-model="subject.code" label="Subject Code*"
                  @input="$v.subject.code.$touch()" @blur="$v.subject.code.$touch()" 
                  :error-messages="subjectcodeErrors" required>
                  </v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea v-model="subject.description" auto-grow label="Course Description*" required
                  @input="$v.subject.description.$touch()" @blur="$v.subject.description.$touch()" 
                  :error-messages="subjectdescriptionErrors" >
                  ></v-textarea>
               </v-flex>

               <v-flex xs12 >
                  <v-text-field v-model="subject.units" label="Units*" required
                  mask="###"
                  @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                  :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
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
               @click="editSubjectDialog = false"
            >
               Cancel
            </v-btn>
            <v-btn
               color="primary"
               flat
               @click="saveSubject"
            >
               Save
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>

      <v-dialog
         v-model="deleteSubjectDialog"
         width="500"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="title red lighten-2 white--text"
            primary-title
         >
            Are you sure you want to delete this Subject?
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               
               <v-flex xs12 >
                  <v-text-field disabled="" v-model="subject.code" label="Subject Code*"
                  @input="$v.subject.code.$touch()" @blur="$v.subject.code.$touch()" 
                  :error-messages="subjectcodeErrors" required>
                  </v-text-field>
               </v-flex>

               <v-flex xs12 >
                  <v-textarea disabled v-model="subject.description" auto-grow label="Course Description*" required
                  @input="$v.subject.description.$touch()" @blur="$v.subject.description.$touch()" 
                  :error-messages="subjectdescriptionErrors" >
                  ></v-textarea>
               </v-flex>

               <v-flex xs12 >
                  <v-text-field disabled v-model="subject.units" label="Units*" required
                  mask="###"
                  @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                  :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex>
               
               </v-layout>
            </v-container>
            <small class='red--text'>This subject will be permanently deleted</small>
         </v-card-text>

         <v-divider></v-divider>

         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               color="primary"
               flat
               @click="deleteSubjectDialog = false"
            >
               Cancel
            </v-btn>
            <v-btn
               color="primary"
               flat
               @click="deleteSubject"
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
      subject: {
         code: {required},
         description: {required},
         units: {required}
      }
   },
   data() {
      return {
         editSubjectDialog: false,
         deleteSubjectDialog: false,

         subject: {
            code: '',
            description: '',
            units: '',
            keyIndex: '',
         },

         search: '',
         headers: [
            {
               text: 'Subject Code',
               align: 'left',
               sortable: false,
               value: 'value.code'
            },
            { text: 'Course Description', sortable: false, value: 'value.description' },
            { text: 'Units', value: 'value.units' },
            { text: 'Year', value: 'value.yearlvl' },
            { text: 'Schedule', value: 'sched' },
            { text: 'Instructor', value: 'value.instructor' },
            // { text: 'Actions', sortable: false, value: 'units' }
         ],
         snackbarDetails: '',
         textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar2: false,
      }
   },
   methods: {
      deleteItem(data) {
         this.deleteSubjectDialog = true
         this.subject = {
            code: data.code,
            description: data.description,
            units: data.units,
            keyIndex: data.keyIndex
         }
      },
      editItem(data) {
         this.editSubjectDialog = true
         this.subject = {
            code: data.code,
            description: data.description,
            units: data.units,
            keyIndex: data.keyIndex
         }
      },
      deleteSubject () {
         let vm = this
         if(vm.$v.subject.$invalid) {
            vm.$v.subject.$touch()
         } else {
            // var newPostKey = db.ref().child('CKCMDATA/subject').push().key;
            let post = db.ref().child('CKCMDATA/subject/'+vm.subject.keyIndex)
            post.remove()
            vm.$v.subject.$reset()
            vm.subject = {
               code: '',
               description: '',
               units: '',
            },
            vm.snackbarDetails = 'Successfully deleted a Subject'
            vm.snackbar2 = true
            vm.deleteSubjectDialog = false
         }
      },
      saveSubject() {
         let vm = this
         if(vm.$v.subject.$invalid) {
            vm.$v.subject.$touch()
         } else {
            // var newPostKey = db.ref().child('CKCMDATA/subject').push().key;
            let post = db.ref().child('CKCMDATA/subject/'+vm.subject.keyIndex)
            post.update({
               keyIndex: vm.subject.keyIndex,
               code: _.upperCase(vm.subject.code),
               description:  _.capitalize(vm.subject.description),
               units: vm.subject.units,
            }, function (error) {
               if(!error) {
                  vm.$v.subject.$reset()
                  vm.subject = {
                     code: '',
                     description: '',
                     units: '',
                  },
                  vm.snackbarDetails = 'Successfully updated a Subject'
                  vm.snackbar2 = true
                  vm.editSubjectDialog = false
               }
            })
         }
      },
   },
   computed: {
      subjectDetails() {
         let subjectDetails = []
         let data = this.$store.getters.mysubjects
         let data2 = this.$store.getters.myprograms
         let filtData = _.filter(data,'code')
         _.forEach(filtData, function(value, key) {
            let program = _.find(data2,['keyIndex',value.program])
            subjectDetails.push({
               value,
               program,
               sched: value.sched1+ '/' + value.sched2 + ' | ' +value.time1 + '-' + value.time2
            })
         })
         console.log(subjectDetails)
         return subjectDetails
      },
      userFData() {
         return this.$store.getters.AccountFdetails
      },

      subjectcodeErrors () {
         const errors = []
         if (!this.$v.subject.code.$dirty) return errors
         !this.$v.subject.code.required && errors.push('Subject Code is required')
         return errors
      },
      subjectdescriptionErrors () {
         const errors = []
         if (!this.$v.subject.description.$dirty) return errors
         !this.$v.subject.description.required && errors.push('Course Description is required')
         return errors
      },
      subjectunitsnErrors () {
         const errors = []
         if (!this.$v.subject.units.$dirty) return errors
         !this.$v.subject.units.required && errors.push('Units is required')
         return errors
      },
   },
   created() {
   },
}
</script>

<style>

</style>
