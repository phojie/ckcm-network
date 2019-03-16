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
                        <td class="text-capitalize">{{ props.item.firstname + ' ' + props.item.surname}}</td>
                        <td class="text-capitalize">{{ props.item.email }}</td>
                        <td >{{ props.item.totalUnits}}</td>

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

       

        
      </v-layout>

      <v-dialog
         v-model="editItemDialog"
         width="800"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-2"
            primary-title
         >
            Edit Student's Profile
         </v-card-title>

         <v-card-text>
            <v-container grid-list-xs>
               <v-layout row wrap >
                  <v-flex reverse xs12>
                     <v-radio-group v-model="fillupDetails.not">
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
                  <v-flex xs12  md6 d-flex>
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
                     ref="menu2"
                     v-model="menu2"
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
                        <v-btn flat color="primary" @click="$refs.menu2.save(fillupDetails.dob)">OK</v-btn>
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
         v-model="dataDialog"
         width="auto"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-2"
            primary-title
         >
            <span v-if="!viewProfile">Student's Profile</span>
            <span v-else>Student Subject </span>
            
         <v-spacer></v-spacer>
            <v-btn   :class="`${userFData.themeColor}--text`"   class="textDefault" > Message </v-btn>
            <v-btn @click="acceptStudent" :class="`${userFData.themeColor}--text`"   class="textDefault" > Accept </v-btn>
            <v-btn  class="error--text textDefault" > Decline</v-btn>
         </v-card-title>
            <v-card-text v-if="viewProfile">
               <v-card-title>
                  <span class="title">Total Units: {{fillupDetails.totalUnits}} </span>
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
                  :items="fillupDetails.subjects"
                  class="elevation-1"
                  item-key="keyIndex"
                  :search="search"
                  :headers="headers2"
                  >

                  <!-- <template v-slot:headers="props">
                  </template>
                  -->
                  <template  v-slot:items="props">
                     <!-- <tr v-if="props.item.semester == fillupDetails.term && props.item.program == fillupDetails.course && props.item.yearlvl == fillupDetails.year"> -->
                     <tr>
                        <!-- <td>
                           <v-checkbox
                              :input-value="props.selected"
                              primray
                              hide-details
                           ></v-checkbox>
                        </td> -->
                        <td>{{ props.item.code }}</td>
                        <td>{{ props.item.description }}</td>
                        <td>{{ props.item.units }}</td>
                        <td>{{ props.item.time1 +' - '+ props.item.time2 }}</td>
                        <td>{{ props.item.sched1 +' / '+ props.item.sched2 +' / '+ props.item.sched3 }}</td>
                        <td>{{ props.item.room }}</td>
                        <td>{{ props.item.instructor }}</td>
                        <td> <v-btn small outline color="error">DROP</v-btn> </td>
                     </tr>
                  </template>
                  <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                     Your search for "{{ search }}" found no results.
                  </v-alert>
               </v-data-table>
            </v-card-text>

            <v-card-text v-if="!viewProfile">
               <v-container grid-list-xs>
                  <v-layout row wrap >
                     <v-flex reverse xs12>
                        <v-radio-group readonly="" v-model="fillupDetails.not">
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
                           readonly=""
                           v-model="fillupDetails.surname"
                           @input="$v.fillupDetails.surname.$touch()" @blur="$v.fillupDetails.surname.$touch()" 
                           :error-messages="surnameErrors"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md2>
                        <v-text-field
                           readonly
                           label="Firstname"
                           @input="$v.fillupDetails.firstname.$touch()" @blur="$v.fillupDetails.firstname.$touch()" 
                           :error-messages="firstnameErrors"
                           v-model="fillupDetails.firstname"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md2>
                        <v-text-field
                           readonly
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
                     <v-flex xs12  md6 d-flex>
                        <v-select
                           readonly
                           :items="['First Year', 'Second Year', 'Third Year', 'Fourth Year']"
                           label="Year"
                           @input="$v.fillupDetails.year.$touch()" @blur="$v.fillupDetails.year.$touch()" 
                           :error-messages="yearErrors"
                           v-model="fillupDetails.year"
                        ></v-select>
                     </v-flex>

                     <v-flex xs12 sm6 md3>
                        <v-text-field
                           readonly
                           mask="#############"
                           label="Contact Number"
                           @input="$v.fillupDetails.cn.$touch()" @blur="$v.fillupDetails.cn.$touch()" 
                           :error-messages="cnErrors"
                           v-model="fillupDetails.cn"
                        ></v-text-field>
                     </v-flex>
                     
                     <v-flex xs12 sm6 md2>
                        <v-select
                           readonly
                           :items="['Male', 'Female']"
                           label="Sex"
                           @input="$v.fillupDetails.sex.$touch()" @blur="$v.fillupDetails.sex.$touch()" 
                           :error-messages="sexErrors"
                           v-model="fillupDetails.sex"
                        ></v-select>
                     </v-flex>

                        <v-flex xs12 sm6 md3>
                        <v-select
                           readonly
                           :items="['First Semester', 'Second Semester', 'Summer']"
                           v-model="fillupDetails.term"
                           @input="$v.fillupDetails.term.$touch()" @blur="$v.fillupDetails.term.$touch()" 
                           :error-messages="termErrors"
                           label="Term"
                        ></v-select>
                     </v-flex>


                     <v-flex xs12 sm6 md3>
                        <v-text-field
                           readonly
                           name="name"
                           label="Email address"
                           v-model="fillupDetails.email"
                           @input="$v.fillupDetails.email.$touch()" @blur="$v.fillupDetails.email.$touch()" 
                           :error-messages="emailErrors"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md6>
                        <v-text-field
                           readonly
                           label="Place of Birth"
                           @input="$v.fillupDetails.pob.$touch()" @blur="$v.fillupDetails.pob.$touch()" 
                           :error-messages="pobErrors"
                           v-model="fillupDetails.pob"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm4 >
                        <v-menu
                           readonly
                           ref="menu2"
                           v-model="menu2"
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
                           <v-btn flat color="primary" @click="$refs.menu2.save(fillupDetails.dob)">OK</v-btn>
                        </v-date-picker>
                        </v-menu>
                     </v-flex>
                     <v-flex xs12 sm7 >
                        <v-text-field
                           readonly 
                           label="Home Address"
                           v-model="fillupDetails.hoa"
                           @input="$v.fillupDetails.hoa.$touch()" @blur="$v.fillupDetails.hoa.$touch()" 
                           :error-messages="hoaErrors"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 md8 >
                        <v-text-field
                           readonly
                           label="Present Address"
                           v-model="fillupDetails.poa"
                              @input="$v.fillupDetails.poa.$touch()" @blur="$v.fillupDetails.poa.$touch()" 
                           :error-messages="poaErrors"
                        ></v-text-field>
                     </v-flex>
                        <v-flex xs12 sm6 >
                        <v-text-field
                           readonly
                           label="Father's Name"
                           @input="$v.fillupDetails.father.$touch()" @blur="$v.fillupDetails.father.$touch()" 
                           :error-messages="fatherErrors"
                           v-model="fillupDetails.father"
                        ></v-text-field>
                     </v-flex>
                        <v-flex xs12 sm6 >
                        <v-text-field
                           readonly
                           label="Mother's Name"
                           @input="$v.fillupDetails.mother.$touch()" @blur="$v.fillupDetails.mother.$touch()" 
                           :error-messages="motherErrors"
                           v-model="fillupDetails.mother"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md6 >
                        <v-text-field
                           readonly
                           label="School Last attended"
                           @input="$v.fillupDetails.lastschoolDetails.SLA.$touch()" @blur="$v.fillupDetails.lastschoolDetails.SLA.$touch()" 
                           :error-messages="slaErrors"
                           v-model="fillupDetails.lastschoolDetails.SLA"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md4 >
                        <v-text-field
                           readonly
                           v-model="fillupDetails.lastschoolDetails.address"
                           @input="$v.fillupDetails.lastschoolDetails.address.$touch()" @blur="$v.fillupDetails.lastschoolDetails.address.$touch()" 
                           :error-messages="addressErrors"
                           label="Address"
                        ></v-text-field>
                     </v-flex>
                     <v-flex xs12 sm6 md2>
                        <v-text-field
                           readonly
                           v-model="fillupDetails.lastschoolDetails.sy"
                           label="School Year"
                           @input="$v.fillupDetails.lastschoolDetails.sy.$touch()" @blur="$v.fillupDetails.lastschoolDetails.sy.$touch()" 
                           :error-messages="syErrors"
                           mask="####-####"
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
               :class="`${userFData.themeColor}--text`"
               flat
               @click="viewProfile = true"
            >
               View Profile
            </v-btn>
            <v-btn
               :class="`${userFData.themeColor}--text`"
               flat
               @click="viewProfile = false"
            >
               View Subject
            </v-btn>
            <v-btn
               color="primary"
               flat
               @click="dataDialog = false"
            >
               Close
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>

       <v-dialog
         v-model="deleteItemDialog"
         width="800"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="title red lighten-2 white--text"
            primary-title
         >
            Are you sure you want to delete {{fillupDetails.firstname + ' ' + fillupDetails.surname}} ?
         </v-card-title>
         
          <v-card-text>
            <v-container grid-list-xs >
               <v-layout row wrap >
                  <v-flex reverse xs12>
                     <v-radio-group v-model="fillupDetails.not">
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
                  <v-flex xs12 sm6 md5 d-flex>
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
            <small class='red--text'>This student will be permanently deleted</small>
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
            },
         }
   },
   components: {Swatches},
   data: () => ({
      emailList: [],
      viewProfile: false,
      menu: false,
      menu2: false,
      date: '',

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
         { text: 'Full name', sortable: false, value: 'firstname' },
         { text: 'Email', sortable: false, value: 'email' },
         { text: 'Units', sortable: false, value: 'totalUnits' },
         { text: 'Actions', sortable: false, value: 'surname' }
      ],

      headers2: [
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
            { text: 'Action', value: 'instructor' },
         ],

      program: {
         name: '',
         description: '',
         description2: '',
         color: '',
      },
      fillupDetails: {
         subjects: [],
         totalUnits:'',
         not: '',
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
         keyIndex: ''

      },

      

      snackbarDetails: '',
      textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar2: false,
   }),
   methods: {
      
      viewItem(data) {
          let vm = this
         this.dataDialog = true
         this.fillupDetails = {
            subjects: data.subjects,
            course:data.course ,
            majorIn:data.majorIn ,
            sy: data.sy ,
            keyIndex: data.keyIndex,
            not: data.not,
            totalUnits: data.totalUnits,
            firstname:data.firstname,
            middlename: data.middlename,
            surname: data.surname,
            id: data.id ,
            year: data.year ,
            cn: data.cn ,
            email: data.email ,
            pob: data.pob ,
            dob: data.dob ,
            hoa: data.hoa ,
            poa: data.poa ,
            father: data.father ,
            mother: data.mother ,
            lastschoolDetails: {
               SLA: data.lastschoolDetails.SLA ,
               address: data.lastschoolDetails.address ,
               sy: data.lastschoolDetails.sy ,
            },
            sex: data.sex ,
            term: data.term,
            keyIndex: data.keyIndex
         }
         console.log('test',vm.fillupDetails)
      },
      editItem(data) {
         this.editItemDialog = true
         this.fillupDetails = {
            subjects: data.subjects,
            course:data.course ,
            majorIn:data.majorIn ,
            sy: data.sy ,
            keyIndex: data.keyIndex,
            not: data.not,
            totalUnits: data.totalUnits,

            firstname:data.firstname,
            middlename: data.middlename,
            surname: data.surname,
            id: data.id ,
            year: data.year ,
            cn: data.cn ,
            email: data.email ,
            pob: data.pob ,
            dob: data.dob ,
            hoa: data.hoa ,
            poa: data.poa ,
            father: data.father ,
            mother: data.mother ,
            lastschoolDetails: {
               SLA: data.lastschoolDetails.SLA ,
               address: data.lastschoolDetails.address ,
               sy: data.lastschoolDetails.sy ,
            },
            sex: data.sex ,
            term: data.term,
         }
      },
      deleteFaculty(){
         let vm = this
         var newPostKey = vm.fillupDetails.keyIndex
         let post = db.ref().child('CKCMDATA/students/'+newPostKey)
         let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKey)
         let users = db.ref().child('users/'+newPostKey)
         users.remove()
         newAccount.remove()
         post.remove()
         vm.$v.fillupDetails.$reset()
         vm.fillupDetails = {
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
      },
         vm.snackbarDetails = 'Successfully deleted Faculty'
         vm.snackbar2 = true
         vm.deleteItemDialog = false
          
      },
      deleteItem(data) {
         this.deleteItemDialog = true
         this.fillupDetails = {
            keyIndex: data.keyIndex,
            course:data.course ,
            majorIn:data.majorIn ,
            sy: data.sy ,
            

            firstname:data.firstname,
            middlename: data.middlename,
            lastname: data.lastname,
            id: data.id ,
            year: data.year ,
            cn: data.cn ,
            email: data.email ,
            pob: data.pob ,
            dob: data.dob ,
            hoa: data.hoa ,
            poa: data.poa ,
            father: data.father ,
            mother: data.mother ,
            lastschoolDetails: {
               SLA: data.lastschoolDetails.SLA ,
               address: data.lastschoolDetails.address ,
               sy: data.lastschoolDetails.sy ,
            },
            sex: data.sex ,
            term: data.term,
            // title:data.title,
            // fn:data.fn,
            // mn: data.mn,
            // ln: data.ln,
            // email: data.email,
            // confirm: data.email,
            // designation: data.designation,
            // keyIndex: data.keyIndex
         }

      },
      saveFaculty() {
         
         let vm = this
         var filterEmail = _.filter(vm.emailList,['email', _.capitalize(vm.fillupDetails.email)])

         console.log( vm.fillupDetails)
         if(filterEmail.length > 0) {
            // || filterEmail[0].email != vm.fillupDetails.email
            if(vm.$v.fillupDetails.$invalid &&  vm.filterEmail[0].email != vm.fillupDetails.email ) {
               vm.$v.fillupDetails.$touch()
            } else {
               
            var newPostKeyst = vm.fillupDetails.keyIndex
            let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKeyst)
            let stu = db.ref().child('CKCMDATA/students/'+newPostKeyst)
            let users = db.ref().child('users/'+newPostKeyst)
            users.update({
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

            newAccount.update({
               'ckcm-network_token_id': newPostKeyst,
               displayName: _.capitalize(vm.fillupDetails.firstname) + ' ' + _.capitalize(vm.fillupDetails.lastname),
               email: _.capitalize(vm.fillupDetails.email),
               password: vm.fillupDetails.firstname+'@ckcm',
               firsttime: 0,
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            })

            stu.update({
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
               keyIndex: newPostKeyst,
               not: vm.fillupDetails.not,
               totalUnits: vm.fillupDetails.totalUnits,
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
               subjects: vm.fillupDetails.subjects,
               status: 'Pending',
            }, function (error) {
               vm.$v.fillupDetails.$reset()
               vm.fillupDetails = {
                  subjects: [],
                  not: '',
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
               vm.snackbarDetails = 'Successfully updated '
               vm.snackbar2 = true
               vm.editItemDialog = false
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
      courseSub() {
         let data = this.$store.getters.acceptStudents
         let filtData = _.filter(data,'keyIndex')
         return filtData
      },
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
      },

     

      userFData() {
         return this.$store.getters.AccountFdetails
      },
      listStudents() {
         let data = this.$store.getters.mystudents

         let filtData = _.filter(data,'keyIndex')
         return filtData
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
         let dataFaculty = this.$store.getters.mystudents
         let facultyFilt = _.filter(dataFaculty,'course')

         let allUsers = this.$store.getters.allUsers
         let usersFilt = _.filter(allUsers,'keyIndex')

         _.forEach(data, function(program, key) {
            var fd = _.filter(facultyFilt, ['course',program.name])
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
