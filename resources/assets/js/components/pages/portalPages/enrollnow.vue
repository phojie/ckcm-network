<template>
   <v-app>
      
      <section v-if="fillUp"  class=" gradient py-5" style="position:relative" >
         <v-container  class="dontstop" fluid grid-list-lg>
         <v-layout row wrap justify-center >
            <v-flex xs8 >
               <v-layout row wrap>
                  <v-spacer></v-spacer>
                  <v-chip :color="fillupDetails.color" label="" class="white--text font-weight-black" style="border-radius:10px !important;">College of {{fillupDetails.course}}</v-chip>
                 <!-- <v-chip color="grey darken-2"  label="" class="white--text font-weight-black" style="border-radius:10px !important;">CompSci</v-chip>
                  <v-chip color="grey darken-2"  label="" class="white--text font-weight-black" style="border-radius:10px !important;">Business</v-chip>
                  <v-chip color="grey darken-2"  label="" class="white--text font-weight-black" style="border-radius:10px !important;">Criminology</v-chip> -->
                  <v-btn color="grey darken-2" @click="fillUp = false" class="textNone cursorOn caption white--text font-weight-black" style="border-radius:10px !important;">Return</v-btn>
               </v-layout>
            </v-flex>
            <v-flex  sm12 md10  class=" my-4">
               <v-stepper  v-model="e6" vertical>
                  <v-stepper-step :complete="e6 > 1" step="1">
                     Certificate of Registration (COR)
                     <small>College Department</small>
                  </v-stepper-step>

                  <v-stepper-content step="1">
                  <v-card class="pt-4 grey lighten-4 " flat style="border-radius:6px !important;">
                     <h3 class="font-weight-bold headline text-xs-center black--text"> Certificate of Registration </h3>
                     <h4 class="mt-2 font-weight-bold subheading text-xs-center grey--text "> College Department</h4>

                
                 
                  <v-container grid-list-xs style="margin-top:-100px">
                     <v-layout row wrap >
                        <v-flex reverse xs12>
                           <v-radio-group v-model="radios">
                              <v-radio value="new">
                                 <template v-slot:label>
                                    <div> New <strong class="success--text">Student</strong></div>
                                 </template>
                              </v-radio>
                              <v-radio value="old">
                                 <template v-slot:label>
                                    <div>Old <strong class="primary--text"> Student</strong></div>
                                 </template>
                              </v-radio>
                              <v-radio value="transferee">
                                 <template v-slot:label>
                                    <div>Transferee <strong class="green--text"> Student</strong></div>
                                 </template>
                              </v-radio>
                           </v-radio-group>  
                        </v-flex>
                         <!-- <v-flex xs12>
                           <v-alert
                              :value="CorERROR"
                              type="error"
                              color="red lighten-2"
                           >
                              All fields are required for the registration
                           </v-alert>
                        </v-flex> -->
                        
                        <v-flex xs12 sm6 md2>
                           <v-text-field
                              label="Surname"
                              v-model="fillupDetails.surname"
                              @input="$v.fillupDetails.surname.$touch()" @blur="$v.fillupDetails.surname.$touch()" 
                              :error-messages="surnameErrors"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md2>
                           <v-text-field
                              label="Firstname"
                              @input="$v.fillupDetails.firstname.$touch()" @blur="$v.fillupDetails.firstname.$touch()" 
                              :error-messages="firstnameErrors"
                              v-model="fillupDetails.firstname"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md2>
                           <v-text-field
                              label="Middlename"
                              @input="$v.fillupDetails.middlename.$touch()" @blur="$v.fillupDetails.middlename.$touch()" 
                              :error-messages="middlenameErrors"
                              v-model="fillupDetails.middlename"
                           ></v-text-field>
                        </v-flex>
                        <!-- <v-flex xs12 sm6 md2>
                           <v-select
                              :items="items"
                              label="Major"
                               @input="$v.fillupDetails.majorIn.$touch()" @blur="$v.fillupDetails.majorIn.$touch()" 
                              :error-messages="majorErrors"
                              v-model="fillupDetails.majorIn"
                           ></v-select>
                        </v-flex> -->
                        <v-flex xs12 sm6 md6 d-flex>
                           <v-select
                              :items="['First Year', 'Second Year', 'Third Year', 'Fourth Year']"
                              label="Year"
                              @input="$v.fillupDetails.year.$touch()" @blur="$v.fillupDetails.year.$touch()" 
                              :error-messages="yearErrors"
                              v-model="fillupDetails.year"
                           ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6 md3>
                           <v-text-field
                              mask="#############"
                              label="Contact Number"
                              @input="$v.fillupDetails.cn.$touch()" @blur="$v.fillupDetails.cn.$touch()" 
                              :error-messages="cnErrors"
                              v-model="fillupDetails.cn"
                           ></v-text-field>
                        </v-flex>
                        
                        <v-flex xs12 sm6 md2>
                           <v-select
                              :items="['Male', 'Female']"
                              label="Sex"
                              @input="$v.fillupDetails.sex.$touch()" @blur="$v.fillupDetails.sex.$touch()" 
                              :error-messages="sexErrors"
                              v-model="fillupDetails.sex"
                           ></v-select>
                        </v-flex>

                         <v-flex xs12 sm6 md3>
                           <v-select
                              :items="['First Semester', 'Second Semester', 'Summer']"
                              v-model="fillupDetails.term"
                              @input="$v.fillupDetails.term.$touch()" @blur="$v.fillupDetails.term.$touch()" 
                              :error-messages="termErrors"
                              label="Term"
                           ></v-select>
                        </v-flex>


                        <v-flex xs12 sm6 md3>
                           <v-text-field
                              name="name"
                              label="Email address"
                              v-model="fillupDetails.email"
                              @input="$v.fillupDetails.email.$touch()" @blur="$v.fillupDetails.email.$touch()" 
                              :error-messages="emailErrors"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                           <v-text-field
                              label="Place of Birth"
                              @input="$v.fillupDetails.pob.$touch()" @blur="$v.fillupDetails.pob.$touch()" 
                              :error-messages="pobErrors"
                              v-model="fillupDetails.pob"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4 >
                           <v-menu
                           ref="menu"
                           v-model="menu"
                           :close-on-content-click="false"
                           :nudge-right="40"
                           :return-value.sync="date"
                           lazy
                           transition="scale-transition"
                           offset-y
                           full-width
                           min-width="290px"
                           >
                           <v-text-field
                              slot="activator"
                              v-model="fillupDetails.dob"
                              label="Date of Birth"
                              @input="$v.fillupDetails.dob.$touch()" @blur="$v.fillupDetails.dob.$touch()" 
                              :error-messages="dobErrors"
                              prepend-icon="event"
                              readonly
                           ></v-text-field>
                           <v-date-picker v-model="fillupDetails.dob" no-title scrollable>
                              <v-spacer></v-spacer>
                              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                              <v-btn flat color="primary" @click="$refs.menu.save(fillupDetails.dob)">OK</v-btn>
                           </v-date-picker>
                           </v-menu>
                        </v-flex>
                        <v-flex xs12 sm7 >
                           <v-text-field
                                 label="Home Address"
                                 v-model="fillupDetails.hoa"
                                 @input="$v.fillupDetails.hoa.$touch()" @blur="$v.fillupDetails.hoa.$touch()" 
                                 :error-messages="hoaErrors"
                              ></v-text-field>
                           </v-flex>
                        <v-flex xs12 md8 >
                           <v-text-field
                              label="Present Address"
                              v-model="fillupDetails.poa"
                               @input="$v.fillupDetails.poa.$touch()" @blur="$v.fillupDetails.poa.$touch()" 
                              :error-messages="poaErrors"
                           ></v-text-field>
                        </v-flex>
                         <v-flex xs12 sm6 >
                           <v-text-field
                              label="Father's Name"
                              @input="$v.fillupDetails.father.$touch()" @blur="$v.fillupDetails.father.$touch()" 
                              :error-messages="fatherErrors"
                              v-model="fillupDetails.father"
                           ></v-text-field>
                        </v-flex>
                         <v-flex xs12 sm6 >
                           <v-text-field
                              label="Mother's Name"
                              @input="$v.fillupDetails.mother.$touch()" @blur="$v.fillupDetails.mother.$touch()" 
                              :error-messages="motherErrors"
                              v-model="fillupDetails.mother"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 >
                           <v-text-field
                              label="School Last attended"
                              @input="$v.fillupDetails.lastschoolDetails.SLA.$touch()" @blur="$v.fillupDetails.lastschoolDetails.SLA.$touch()" 
                              :error-messages="slaErrors"
                              v-model="fillupDetails.lastschoolDetails.SLA"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4 >
                           <v-text-field
                              v-model="fillupDetails.lastschoolDetails.address"
                              @input="$v.fillupDetails.lastschoolDetails.address.$touch()" @blur="$v.fillupDetails.lastschoolDetails.address.$touch()" 
                              :error-messages="addressErrors"
                              label="Address"
                           ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md2>
                           <v-text-field
                              v-model="fillupDetails.lastschoolDetails.sy"
                              label="School Year"
                              @input="$v.fillupDetails.lastschoolDetails.sy.$touch()" @blur="$v.fillupDetails.lastschoolDetails.sy.$touch()" 
                              :error-messages="syErrors"
                              mask="####-####"
                           ></v-text-field>
                        </v-flex>
                        
                       
                     </v-layout>
                  </v-container>
                  </v-card>
                     <v-btn color="primary" :loading=" CorLoading" @click='submitCor'>Continue</v-btn>
                  </v-stepper-content>

                  <v-stepper-step :complete="e6 > 2" step="2">Configure your subjects </v-stepper-step>

                  <v-stepper-content step="2">
                     <v-tabs
                        v-model="active"
                        :color="fillupDetails.color"
                        dark
                        slider-color="primary"
                     >
                        <!-- <v-tab
                        :key="1"
                        ripple
                        >
                           <div class="textNone font-weight-bold"> Subject Offer </div>
                        </v-tab>
                        <v-tab-item
                        :key="1"
                        >
                        <v-card flat>
                           <v-card color="grey" class="mb-5">
                              <v-data-table
                                 :items="courseSub"
                                 v-model="selected"
                                 class="elevation-1"
                                 hide-actions
                                 :pagination.sync="pagination"
                                 select-all
                                 item-key="keyIndex"
                                 :headers="headers"
                                 >

                                 <template v-slot:headers="props">
                                    <tr>
                                    <th>
                                       <v-checkbox
                                          :input-value="props.all"
                                          :indeterminate="props.indeterminate"
                                          primary
                                          hide-details
                                          @click.stop="toggleAll"
                                       ></v-checkbox>
                                    </th>
                                    <th
                                       v-for="header in props.headers"
                                       :key="header.text"
                                       :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                       @click="changeSort(header.value)"
                                    >
                                       <v-icon small>arrow_upward</v-icon>
                                       {{ header.text }}
                                    </th>
                                    </tr>
                                 </template>
                                 
                                 <template  v-slot:items="props">
                                    <tr  v-if="props.item.semester == fillupdetails.term && props.item.program == fillupDetails.course && props.item.yearlvl == fillupDetails.year" :active="props.selected" @click="props.selected = !props.selected">
                                       <td>
                                          <v-checkbox
                                             :input-value="props.selected"
                                             primray
                                             hide-details
                                          ></v-checkbox>
                                       </td>
                                       <td>{{ props.item.code }}</td>
                                       <td>{{ props.item.description }}</td>
                                       <td>{{ props.item.units }}</td>
                                       <td>{{ props.item.time1 +' - '+ props.item.time2 }}</td>
                                       <td>{{ props.item.room }}</td>
                                       <td>{{ props.item.instructor }}</td>
                                       <td v-if="props.item.preReq == ''"> None </td>
                                       <td else>{{ props.item.preReq }}</td>

                                    </tr>
                                 </template>

                               
 
                              </v-data-table>

                           </v-card>
                        </v-card>
                        </v-tab-item> -->

                        <v-tab
                           :key="2"
                           ripple
                           >
                              <div class="textNone font-weight-bold"> Choose Subject </div>
                           </v-tab>
                           <v-tab-item
                           :key="2"
                        >
                        <v-card flat>
                           <v-card color="transparent" class="mb-5">
                              <v-card-title>
                                 <v-spacer></v-spacer>
                                 <v-text-field
                                 v-model="search"
                                 append-icon="search"
                                 label="Search"
                                 single-line
                                 hide-details
                                 ></v-text-field>
                              </v-card-title>
                              <v-data-table
                                 :items="courseSub"
                                 v-model="selected"
                                 class="elevation-1"
                                 :pagination.sync="pagination"
                                 select-all
                                 item-key="keyIndex"
                                 :search="search"
                                 :headers="headers"
                                 >

                                 <template v-slot:headers="props">
                                    <tr>
                                    <th>
                                       <v-checkbox
                                          :input-value="props.all"
                                          :indeterminate="props.indeterminate"
                                          primary
                                          hide-details
                                          @click.stop="toggleAll"
                                       ></v-checkbox>
                                    </th>
                                    <th
                                       v-for="header in props.headers"
                                       :key="header.text"
                                       :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                       @click="changeSort(header.value)"
                                    >
                                       <v-icon small>arrow_upward</v-icon>
                                       {{ header.text }}
                                    </th>
                                    </tr>
                                 </template>
                                 
                                 <template  v-slot:items="props">
                                    <tr v-if="totalUnit > 30" :active="props.selected">
                                       <td>
                                          
                                          <v-checkbox
                                             :input-value="props.selected"
                                             primray
                                             hide-details
                                          ></v-checkbox>
                                       </td>
                                       <td>{{ props.item.code }}</td>
                                       <td>{{ props.item.description }}</td>
                                       <td>{{ props.item.units }}</td>
                                       <td>{{ props.item.time1 +' - '+ props.item.time2 }}</td>
                                       <td>{{ props.item.sched1 +' / '+ props.item.sched2 }}</td>
                                       <td>{{ props.item.room }}</td>
                                       <td>{{ props.item.instructor }}</td>
                                       <td v-if="props.item.preReq == ''"> None </td>
                                       <td else>{{ props.item.preReq }}</td>

                                    </tr>
                                    <tr v-else :active="props.selected" @click="props.selected = !props.selected">
                                    <!-- <tr v-if="props.item.semester == fillupdetails.term && props.item.program == fillupDetails.course && props.item.yearlvl == fillupDetails.year"> -->
                                       <td>
                                          
                                          <v-checkbox
                                             :input-value="props.selected"
                                             primray
                                             hide-details
                                          ></v-checkbox>
                                       </td>
                                       <td>{{ props.item.code }}</td>
                                       <td>{{ props.item.description }}</td>
                                       <td>{{ props.item.units }}</td>
                                       <td>{{ props.item.time1 +' - '+ props.item.time2 }}</td>
                                       <td>{{ props.item.sched1 +' / '+ props.item.sched2 }}</td>
                                       <td>{{ props.item.room }}</td>
                                       <td>{{ props.item.instructor }}</td>
                                       <td v-if="props.item.preReq == ''"> None </td>
                                       <td else>{{ props.item.preReq }}</td>

                                    </tr>
                                 </template>
                                 <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                                    Your search for "{{ search }}" found no results.
                                 </v-alert>
                              </v-data-table>

                           </v-card>
                        </v-card>
                        </v-tab-item>

                        <v-tab
                           disabled=""
                           >
                              <div class="title white--text textNone font-weight-bold">Total Units {{totalUnit}} </div>
                           </v-tab>

                     </v-tabs>

                     


                     <v-btn color="primary" @click="doneConfig">Continue</v-btn>
                     <v-btn flat @click="e6 = 1">Return</v-btn>
                  </v-stepper-content>

                  <v-stepper-step step="3">View account instructions</v-stepper-step>
                  <v-stepper-content step="3">
                     <v-card color="" class=" mb-5" >
                        <v-container grid-list-xs>
                        <v-card-title class="primary--text title font-weight-black" primary-title>
                           Thank you {{fillupDetails.firstname}} for choosing us!, your Certificate of Registration has been processed please use this account for more info
                        </v-card-title>
                        <v-layout row wrap>
                        <v-flex xs12 class="subheading font-weight-bold">Account name: {{fillupDetails.email}} </v-flex>
                        <v-flex xs12 class="subheading font-weight-bold">Account password: {{fillupDetails.firstname+'@ckcm'}} </v-flex>
                        <!-- <v-flex xs12>
                           <v-btn large color="teal" class="font-weight-black subheading white--text">LOGIN NOW</v-btn>
                        </v-flex> -->
                        </v-layout>
                        </v-container>
                     </v-card>
                     <!-- <v-btn flat @click="e6 = 2">Return</v-btn> -->
                  </v-stepper-content>
               </v-stepper>
            
            </v-flex>
         </v-layout>
         </v-container>
      </section>
      <section v-else  class="gradient py-5" style="position:relative" >
         <v-container  class="dontstop mt-1" fluid grid-list-lg>
         <h3 class="font-weight-bold display-1 text-xs-center white--text"> "The best way to predict the future is to create it.” </h3>
         <h4 class="mt-2 font-weight-bold subheading text-xs-center grey--text "> -Abraham Lincoln </h4>
         <v-layout row wrap class="mt-3">
               <v-flex v-for="program in listprograms" :key="program.name" md3 sm12  class="pa-3 my-4">
                 <v-card class="py-3 px-4" style="border-radius:6px !important;">
                     <v-chip :color="program.color" label="" class="white--text font-weight-black" style="border-radius:10px !important;">{{program.name}}</v-chip>
                     <!-- <h2 class="mt-3 display-1">$0 /sem</h2>  -->
                     <div class="mt-3 grey--text">{{program.description}}</div> 
                     <p class="mt-3 body-2">{{program.description2}}</p>
                     <v-btn block :color="program.color" @click="educ(program)" class="mt-4 textNone white--text font-weight-bold"> Fill up now </v-btn>
                 </v-card>
               </v-flex>

               <!-- <v-flex md3 sm12  class="pa-3 my-4">
                 <v-card class="py-3 px-4" style="border-radius:6px !important;">
                     <v-chip color="green" label="" class="white--text font-weight-black" style="border-radius:10px !important;">Computer Science</v-chip>
                     <h2 class="mt-3 display-1">$0 /sem</h2> 
                     <div class="mt-3 grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel ducimus sit.</div> 
                     <p class="mt-3 body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui distinctio, libero aliquid eius doloribus asperiores quam corrupti obcaecati ex rerum architecto quis eum odio voluptate, cupiditate dignissimos voluptatum quas aut?</p>
                     <v-btn block color="green" @click="cs" class="mt-4 textNone white--text font-weight-bold"> Fill up now </v-btn>
                 </v-card>
               </v-flex>

               <v-flex md3 sm12  class="pa-3 my-4">
                 <v-card class="py-3 px-4" style="border-radius:6px !important;">
                     <v-chip color="indigo" label="" class="white--text font-weight-black" style="border-radius:10px !important;">Criminology</v-chip>
                     <h2 class="mt-3 display-1">$0 /sem</h2> 
                     <div class="mt-3 grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel ducimus sit.</div> 
                     <p class="mt-3 body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui distinctio, libero aliquid eius doloribus asperiores quam corrupti obcaecati ex rerum architecto quis eum odio voluptate, cupiditate dignissimos voluptatum quas aut?</p>
                     <v-btn block color="indigo" @click="crim" class="mt-4 textNone white--text font-weight-bold"> Fill up now </v-btn>
                 </v-card>
               </v-flex>

               <v-flex md3 sm12  class="pa-3 my-4">
                 <v-card class="py-3 px-4" style="border-radius:6px !important;">
                     <v-chip color="amber" label="" class="white--text font-weight-black" style="border-radius:10px !important;">Business Administration</v-chip>
                     <h2 class="mt-3 display-1">$0 /sem</h2> 
                     <div class="mt-3 grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel ducimus sit.</div> 
                     <p class="mt-3 body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui distinctio, libero aliquid eius doloribus asperiores quam corrupti obcaecati ex rerum architecto quis eum odio voluptate, cupiditate dignissimos voluptatum quas aut?</p>
                     <v-btn block color="amber" @click="ba" class="mt-4 textNone white--text font-weight-bold"> Fill up now </v-btn>
                 </v-card>
               </v-flex> -->
         </v-layout>
         </v-container>
      </section>

      <section>
         <div class="wave " aria-hidden="true">
            <!-- <svg viewBox="0 0 1440 120"><use xlink:href="#wave"></use></svg> -->
            <svg viewBox="0 0 1440 120" id="wave" width="100%" height="100%">
               <path fill="#f4f7f8" d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
            </svg>
         </div>
      </section>
   </v-app>
</template>

<script>
   import { validationMixin } from 'vuelidate'
   import { db, app, order } from '../../../firebase.js';
   import { required, email} from 'vuelidate/lib/validators'
            // majorIn:  {required} ,
   export default {
      mixins: [validationMixin],
      validations: { 
         fillupDetails: {
            course: {required} ,
            surname: {required} ,
            firstname:  {required} ,
            middlename:  {required} ,
            id:  {required} ,
            year:  {required} ,
            cn:  {required} ,
            email:  {required, email} ,
            pob: {required} ,
            dob:  {required} ,
            hoa:  {required} ,
            poa:  {required} ,
            father:  {required} ,
            mother:  {required} ,
            term:  {required} ,
            sex:  {required} ,
            lastschoolDetails: {
               SLA:  {required} ,
               address:  {required} ,
               sy: {required} ,
            }
         }
      },
      data: () => ({
         randomCode: '',
         search: '',
         active: null,
         selected: [],
         headers: [
            {
            text: 'Subject Code',
            align: 'left',
            sortable: false,
            value: 'code'
            },
            { text: 'Subject Description', value: 'description' },
            { text: 'Units', value: 'units' },
            { text: 'Time', value: 'time1' },
            { text: 'Day', value: 'sched1' },
            { text: 'Room', value: 'room' },
            { text: 'Instructor', value: 'instructor' },
         ],

         radios: 'new',
         date: new Date().toISOString().substr(0, 10),
         menu: false,
         CorLoading: false,

         e6: 1,
         items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
         fillUp: false,
         fillupDetails: {
            color: '',
            course: '' ,
            majorIn: '',
            sy: '2018-2019',

            surname: '',
            firstname: '',
            middlename: '',
            id: '143543',
            year: '',
            cn: '',
            email: '',
            pob: '',
            dob: '',
            hoa: '',
            poa: '',
            father: '',
            mother: '',
            lastschoolDetails: {
               SLA: '',
               address: '',
               sy: '',
            },
            sex: '',
            term: '',
         }
      }),
      computed: {
         totalUnit() {
            let units = 0 
            _.forEach(this.selected, function(value, key) {
              units += value.units * 1
            })
            return units
         },
         courseSub() {
            let data = this.$store.getters.mysubjects
            let filtData = _.filter(data,'keyIndex')
            return filtData
         },
         listprograms() {
            let data = this.$store.getters.myprograms
            let filtData = _.filter(data,'name')
            return filtData
         },
         sexErrors () {
            const errors = []
            if (!this.$v.fillupDetails.sex.$dirty) return errors
            !this.$v.fillupDetails.sex.required && errors.push('Sex is required')
            return errors
         },
         termErrors () {
            const errors = []
            if (!this.$v.fillupDetails.term.$dirty) return errors
            !this.$v.fillupDetails.term.required && errors.push('Term is required')
            return errors
         },
         emailErrors () {
            const errors = []
            // var findEmail = _.find(this.listofUsers, ['email', _.capitalize(this.doctorsDetailsProfile.email)])
            // if(findEmail != null && this.doctorsDetailsProfile.email != this.doctorsDetailsProfile.dummyEmail) { errors.push('Email already used') }
            if (!this.$v.fillupDetails.email.$dirty) return errors
            !this.$v.fillupDetails.email.email && errors.push('Must be valid e-mail')
            !this.$v.fillupDetails.email.required && errors.push('E-mail is required')
            return errors
         },
         surnameErrors () {
            const errors = []
            if (!this.$v.fillupDetails.surname.$dirty) return errors
            !this.$v.fillupDetails.surname.required && errors.push('Surname is required')
            return errors
         },
         firstnameErrors () {
            const errors = []
            if (!this.$v.fillupDetails.firstname.$dirty) return errors
            !this.$v.fillupDetails.firstname.required && errors.push('Firstname is required')
            return errors
         },
         middlenameErrors () {
            const errors = []
            if (!this.$v.fillupDetails.middlename.$dirty) return errors
            !this.$v.fillupDetails.middlename.required && errors.push('Middlename is required')
            return errors
         },
         majorErrors () {
            const errors = []
            if (!this.$v.fillupDetails.majorIn.$dirty) return errors
            !this.$v.fillupDetails.majorIn.required && errors.push('Major is required')
            return errors
         },
         yearErrors () {
            const errors = []
            if (!this.$v.fillupDetails.year.$dirty) return errors
            !this.$v.fillupDetails.year.required && errors.push('Year level is required')
            return errors
         },
         cnErrors () {
            const errors = []
            if (!this.$v.fillupDetails.cn.$dirty) return errors
            !this.$v.fillupDetails.cn.required && errors.push('Contact Number is required')
            return errors
         },
         pobErrors () {
            const errors = []
            if (!this.$v.fillupDetails.pob.$dirty) return errors
            !this.$v.fillupDetails.pob.required && errors.push('Place of Birth is required')
            return errors
         },
         dobErrors () {
            const errors = []
            if (!this.$v.fillupDetails.dob.$dirty) return errors
            !this.$v.fillupDetails.dob.required && errors.push('Date of Birth is required')
            return errors
         },
         hoaErrors () {
            const errors = []
            if (!this.$v.fillupDetails.hoa.$dirty) return errors
            !this.$v.fillupDetails.hoa.required && errors.push('Home address is required')
            return errors
         },
         poaErrors () {
            const errors = []
            if (!this.$v.fillupDetails.poa.$dirty) return errors
            !this.$v.fillupDetails.poa.required && errors.push('Present address is required')
            return errors
         },
         fatherErrors () {
            const errors = []
            if (!this.$v.fillupDetails.father.$dirty) return errors
            !this.$v.fillupDetails.father.required && errors.push("Father's name is required")
            return errors
         },
         motherErrors () {
            const errors = []
            if (!this.$v.fillupDetails.mother.$dirty) return errors
            !this.$v.fillupDetails.mother.required && errors.push("Mother's name is required")
            return errors
         },
         slaErrors () {
            const errors = []
            if (!this.$v.fillupDetails.lastschoolDetails.SLA.$dirty) return errors
            !this.$v.fillupDetails.lastschoolDetails.SLA.required && errors.push("School last attended is required")
            return errors
         },
         addressErrors () {
            const errors = []
            if (!this.$v.fillupDetails.lastschoolDetails.address.$dirty) return errors
            !this.$v.fillupDetails.lastschoolDetails.address.required && errors.push("School last attended address is required")
            return errors
         },
         syErrors () {
            const errors = []
            if (!this.$v.fillupDetails.lastschoolDetails.sy.$dirty) return errors
            !this.$v.fillupDetails.lastschoolDetails.sy.required && errors.push("Year School last attended is required")
            return errors
         }
      },
      methods: {
         doneConfig() {
            let vm = this
            this.e6 = 3

            var newPostKeyst = db.ref().child('CKCMDATA/users').push().key;
            let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKeyst)
            let stu = db.ref().child('CKCMDATA/students/'+newPostKeyst)
            let users = db.ref().child('users/'+newPostKeyst)
            users.set({
               keyIndex: newPostKeyst,
               firstname:  _.capitalize(vm.fillupDetails.firstname),
               niddlename:  _.capitalize(vm.fillupDetails.middlename),
               displayName: _.capitalize(vm.fillupDetails.firstname) + ' ' + _.capitalize(vm.fillupDetails.lastname),
               lastname:  _.capitalize(vm.fillupDetails.lastname),
               email: _.capitalize(vm.fillupDetails.email),
               status:'offline',
               type: 0,
               themeColor: 'teal',
               coverUrl: "",
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            })

            newAccount.set({
               'ckcm-network_token_id': newPostKeyst,
               displayName: _.capitalize(vm.fillupDetails.firstname) + ' ' + _.capitalize(vm.fillupDetails.lastname),
               email: _.capitalize(vm.fillupDetails.email),
               password: vm.fillupDetails.firstname+'@ckcm',
               firsttime: 0,
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            })

            stu.set({
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
               keyIndex: newPostKeyst,
               not: vm.radios,
               totalUnits: vm.totalUnit,
               color:   vm.fillupDetails.color,
               course: vm.fillupDetails.course,
               majorIn:  vm.fillupDetails.majorIn,
               sy: vm.fillupDetails.sy,
               surname:  vm.fillupDetails.surname,
               firstname:  vm.fillupDetails.firstname,
               middlename:  vm.fillupDetails.middlename,
               id: vm.fillupDetails.id,
               year: vm.fillupDetails.year,
               cn:  vm.fillupDetails.cn,
               email:  vm.fillupDetails.email,
               pob:  vm.fillupDetails.pob,
               dob: vm.fillupDetails.dob,
               hoa:  vm.fillupDetails.hoa,
               poa:  vm.fillupDetails.poa,
               father:  vm.fillupDetails.father,
               mother:  vm.fillupDetails.mother,
               lastschoolDetails: {
                  SLA: vm.fillupDetails.lastschoolDetails.SLA,
                  address:  vm.fillupDetails.lastschoolDetails.address,
                  sy:  vm.fillupDetails.lastschoolDetails.sy,
               },
               sex:  vm.fillupDetails.sex,
               term:  vm.fillupDetails.term,
               subjects: vm.selected,
               status: 'Pending',
            }, function (error) {
             
            })

         },
         toggleAll () {
            if (this.selected.length) this.selected = []
            else this.selected = this.courseSub.slice()
            },
         changeSort (column) {
            if(this.totalUnit > 0) {
               
            } else {
               if (this.pagination.sortBy === column) {
                  this.pagination.descending = !this.pagination.descending
               } else {
                  this.pagination.sortBy = column
                  this.pagination.descending = false
               }
            }
          
         },
         educ(data) {
            this.fillupDetails.course = data.name
            this.fillupDetails.color = data.color
            this.fillUp = true
         },
         

         submitCor() {
            console.log(this.fillupDetails)
            let vm = this
            vm.CorLoading = true
            setTimeout( function() {
               vm.CorLoading = false
               if(vm.$v.fillupDetails.$invalid) {
                  vm.$v.$touch()
               } else {
                
                  vm.e6 = 2
               }
            }, 2000);
         }
      }
   }
</script>

<style>

</style>
