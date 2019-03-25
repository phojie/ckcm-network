<template>
   <v-container grid-list-sm>
      <v-layout row wrap>
         <v-flex v-if="listprograms.length == 0" xs12>
            <v-card class="pa-5 mx-5">
               <h3 class="text-xs-center">No Programs available yet</h3>
            </v-card>
         </v-flex>
         <v-flex v-else md4 sm12 v-for="program in listprograms" :key="program.keyIndex" class="pa-3 my-2">
            <v-card class="jieSvgBg1  pa-4" style="border-radius:6px !important;">
               <v-layout justify-center row wrap>
                  <v-flex xs12>
                     <v-layout row wrap>
                        <span  :style="`color:${program.color}`" class=" font-weight-black" > {{program.name}}</span>
                        <v-spacer></v-spacer>
                        <v-icon
                           :style="`color:${program.color}`"
                        >
                           mdi-clock-outline
                        </v-icon>
                     </v-layout>
                  </v-flex> 
                  <v-flex xs12>
                     <v-divider class="mt-2"></v-divider>
                  </v-flex>
                  <!-- <div class="mt-3 grey--text">{{program.description}}</div> 
                  <p class="mt-3 body-2">{{program.description2}}</p> -->
                  <v-flex xs12>
                     <v-btn block    flat  @click="viewDialog(program, 'First Year')" class="grey--text mt-1 textNone font-weight-bold"> First Year Schedule </v-btn>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn block :color="`${program.color}`"   flat   @click="viewDialog(program, 'Second Year')"  class="grey--text mt-1 textNone font-weight-bold">  Second Year Schedule </v-btn>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn block :color="`${program.color}`"   flat  @click="viewDialog(program, 'Third Year')" class="grey--text mt-1 textNone font-weight-bold">  Third Year Schedule </v-btn>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn block :color="`${program.color}`"   flat  @click="viewDialog(program, 'Fourth Year')" class="grey--text mt-1 textNone font-weight-bold">  Fourth Year Schedule </v-btn>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn block :color="`${program.color}`"   flat  @click="viewDialog(program, 'Fifth Year')" class="grey--text mt-1 textNone font-weight-bold">  Fifth Year Schedule </v-btn>
                  </v-flex>
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
         <!-- jieSvgBg1 -->
         <v-card class="">
         <v-toolbar class="portalSvg"  dark :color="`${program.color}`">
            <v-btn icon dark @click="dataDialog = false">
               <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title class="body-1 font-weight-bold"> {{program.name}} Schedule <span class="caption">( {{program.yr}} )</span> </v-toolbar-title>
            <v-spacer></v-spacer>
           
            <!-- <v-toolbar-items>
               <v-btn dark flat @click="educationDialog = false">Save</v-btn>
            </v-toolbar-items> -->
         </v-toolbar>
         <v-container   grid-list-xs>
            <v-layout align-center class="mt-5">
               <v-item-group
                  v-model="window"
                  class="shrink mr-4"
                  mandatory
                  tag="v-flex"
               >
                  <v-item
                     v-for="n in length"
                     :key="n"
                     >
                  <div slot-scope="{ active, toggle }">
                     <v-btn
                        :input-value="active"
                        icon
                        :style="`color:${program.color}`"
                        @click="toggle"
                     >
                        <v-icon color=""> mdi-record</v-icon>
                     </v-btn>
                  </div>
                  </v-item>
               </v-item-group>

               <v-flex>
                  <v-window
                  v-model="window"
                  class="elevation-1"
                  vertical
                  >
                  <v-window-item >
                     <v-card flat>
                        <v-card-text>
                        <v-layout align-center mb-3>
                           <!-- <v-avatar color="transparent" class="mr-3">
                              <img src="https://img.icons8.com/ios/30/000000/to-do-filled.png">
                           </v-avatar> -->
                           <strong class="title">First Semester</strong>
                           <v-spacer></v-spacer>
                           <v-btn @click="addSubject('First Semester')" large icon>
                              <v-avatar
                                 size="40"
                                 :color="`${program.color}`"
                              >
                                 <img src="https://img.icons8.com/ios/50/EEEEEE/plus-filled.png">
                              </v-avatar>
                           </v-btn>
                        </v-layout>

                           <v-data-table
                              :items="courseSub"
                              class="elevation-1"
                              hide-actions
                               :headers="headers"
                            >
                            
                              <template  v-slot:items="props">
                                 <tr v-if="props.item.value.semester == 'First Semester' && props.item.program.name == program.name && props.item.value.yearlvl == program.yr">
                                    <td>{{ props.item.value.code }}</td>
                                    <td>{{ props.item.value.description }}</td>
                                    <td>{{ props.item.value.units }}</td>
                                    <td>{{props.item.value.sched1 + ' / '+props.item.value.sched2 + ' / '+ props.item.value.sched3}}</td>
                                    <td>{{ changeTime(props.item.value.time1) +' - '+ changeTime(props.item.value.time2) }}</td>
                                    <td>{{ props.item.value.room }}</td>
                                    <td>{{ props.item.value.instructor }}</td>
                                    <td >
                                       <v-icon
                                          small
                                          class="mr-2"
                                          @click="editSubject1(props.item)"
                                       >
                                          edit
                                       </v-icon>
                                       <v-icon
                                          small
                                          @click="deleteSubject1(props.item)"
                                       >
                                          delete
                                       </v-icon>
                                    </td>
                                 </tr>
                              </template>
                           </v-data-table>
                        </v-card-text>
                     </v-card>
                  </v-window-item>

                  <v-window-item >
                     <v-card flat>
                        <v-card-text>
                        <v-layout align-center mb-3>
                           <!-- <v-avatar color="transparent" class="mr-3">
                              <img src="https://img.icons8.com/ios/30/000000/to-do-filled.png">
                           </v-avatar> -->
                           <strong class="title">Second Semester</strong>
                           <v-spacer></v-spacer>
                           <v-btn @click="addSubject('Second Semester')" large icon>
                              <v-avatar
                                 size="40"
                                 :color="`${program.color}`"
                              >
                                 <img src="https://img.icons8.com/ios/50/EEEEEE/plus-filled.png">
                              </v-avatar>
                           </v-btn>
                        </v-layout>

                           <v-data-table
                              :items="courseSub"
                              class="elevation-1"
                              hide-actions
                               :headers="headers"
                            >
                            
                              <template  v-slot:items="props">
                                 <tr v-if="props.item.value.semester == 'Second Semester' && props.item.program.name == program.name && props.item.value.yearlvl == program.yr">
                                    <td>{{ props.item.value.code }}</td>
                                    <td>{{ props.item.value.description }}</td>
                                    <td>{{ props.item.value.units }}</td>
                                    <td>{{props.item.value.sched1 + ' / '+props.item.value.sched2 + ' / '+ props.item.value.sched3}}</td>
                                    <td>{{ changeTime(props.item.value.time1) +' - '+ changeTime(props.item.value.time2) }}</td>
                                    <td>{{ props.item.value.room }}</td>
                                    <td>{{ props.item.value.instructor }}</td>
                                    <td >
                                       <v-icon
                                          small
                                          class="mr-2"
                                          @click="editSubject1(props.item)"
                                       >
                                          edit
                                       </v-icon>
                                       <v-icon
                                          small
                                          @click="deleteSubject1(props.item)"
                                       >
                                          delete
                                       </v-icon>
                                    </td>
                                 </tr>
                              </template>
                           </v-data-table>
                        </v-card-text>
                     </v-card>
                  </v-window-item>

                  <v-window-item >
                     <v-card flat>
                        <v-card-text>
                        <v-layout align-center mb-3>
                           <!-- <v-avatar color="transparent" class="mr-3">
                              <img src="https://img.icons8.com/ios/30/000000/to-do-filled.png">
                           </v-avatar> -->
                           <strong class="title">Summer</strong>
                           <v-spacer></v-spacer>
                           <v-btn @click="addSubject('Summer')" large icon>
                              <v-avatar
                                 size="40"
                                 :color="`${program.color}`"
                              >
                                 <img src="https://img.icons8.com/ios/50/EEEEEE/plus-filled.png">
                              </v-avatar>
                           </v-btn>
                        </v-layout>

                           <v-data-table
                              :items="courseSub"
                              class="elevation-1"
                              hide-actions
                               :headers="headers"
                            >
                              <template  v-slot:items="props">
                                 <tr v-if="props.item.value.semester == 'Summer' && props.item.program.name == program.name && props.item.value.yearlvl == program.yr">
                                    <td>{{ props.item.value.code }}</td>
                                    <td>{{ props.item.value.description }}</td>
                                    <td>{{ props.item.value.units }}</td>
                                    <td>{{props.item.value.sched1 + ' / '+props.item.value.sched2 + ' / '+ props.item.value.sched3}}</td>
                                    <td>{{ changeTime(props.item.value.time1) +' - '+ changeTime(props.item.value.time2) }}</td>
                                    <td>{{ props.item.value.room }}</td>
                                    <td>{{ props.item.value.instructor }}</td>
                                    <td >
                                       <v-icon
                                          small
                                          class="mr-2"
                                          @click="editSubject1(props.item)"
                                       >
                                          edit
                                       </v-icon>
                                       <v-icon
                                          small
                                          @click="deleteSubject1(props.item)"
                                       >
                                          delete
                                       </v-icon>
                                    </td>
                                 </tr>
                              </template>
                           </v-data-table>
                        </v-card-text>
                     </v-card>
                  </v-window-item>
                  </v-window>
               </v-flex>
            </v-layout>
         </v-container>

         </v-card>
      </v-dialog>

      <v-dialog
         v-model="addSubjectDialog"
         width="600"
         persistent=""
         >
         <v-card>
         <v-card-title
            class="headline grey lighten-2"
            primary-title
         >
            New Subject
         </v-card-title>

         <v-card-text>
            <v-container grid-list-md>
               <v-layout wrap>
               
               
               <v-flex xs6 >
                  <v-text-field v-model="subject.code" label="Subject Code*"
                  @input="$v.subject.code.$touch()" @blur="$v.subject.code.$touch()" 
                  :error-messages="subjectcodeErrors" required>
                  </v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.description" label="Course Description*" required
                  @input="$v.subject.description.$touch()" @blur="$v.subject.description.$touch()" 
                  :error-messages="subjectdescriptionErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.units" label="Units*" required
                     mask="###"
                     @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                     :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.preReq" label="Pre Requisites" required >
                  ></v-text-field>
               </v-flex>

                 <v-flex xs6>
                   <vue-ctk-date-time-picker 
                     @input="timeStartError"
                     overlay class="jieCtk" :error="errorTime1.start" :label="errorTime1.label"  color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" v-model="subject.time1" ></vue-ctk-date-time-picker>
               </v-flex>
               <v-flex xs6>
                   <vue-ctk-date-time-picker 
                     @input="timeEndError"  
                     overlay class="jieCtk" :error="errorTime2.end" :label="errorTime2.label" color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" v-model="subject.time2" ></vue-ctk-date-time-picker>
               </v-flex>

                <!-- <v-flex xs6>
                   <vue-ctk-date-time-picker overlay class="jieCtk"  color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="Start" v-model="subject.time1" ></vue-ctk-date-time-picker>
               </v-flex>
               <v-flex xs6>
                   <vue-ctk-date-time-picker overlay class="jieCtk" color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="End" v-model="subject.time2" ></vue-ctk-date-time-picker>
               </v-flex> -->

               <v-flex xs4>
                  <v-select
                     :items="listofRm"
                     label="Room"
                     v-model="subject.room"
                  ></v-select>
               </v-flex>
               <v-flex xs8>
                  <v-select
                     :items="listOfIns"
                     label="Instructor"
                     v-model="subject.instructor"
                  ></v-select>
               </v-flex>
             
               <v-flex xs4>
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 1"
                     v-model="subject.sched1"
                  ></v-select>
               </v-flex>

               <v-flex xs4 >
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 2"
                     v-model="subject.sched2"
                  ></v-select>
               </v-flex>

                <v-flex xs4 >
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 3"
                     v-model="subject.sched3"
                  ></v-select>
               </v-flex>

             

               <v-flex xs12>
                  <v-alert v-if="instructorError.length > 0 || roomError.length  > 0" type="error" :value="true">
                     <!-- {{roomError}} {{roomError}} -->
                     <span v-if="instructorError.length > 0 && roomError.length == 0">Schedule is already conflict due to {{subject.instructor}}</span>
                     <span v-else-if="roomError.length > 0 && instructorError.length == 0">Schedule is already conflict due to room availability</span>
                     <span v-else-if="instructorError.length > 0 && roomError.length > 0">Schedule is already conflict due to {{subject.instructor}} and room availability</span>
                  </v-alert>
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
               @click="addSubjectDialog = false"
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
         v-model="editSubjectDialog"
         width="600"
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
               
               
               <v-flex xs6 >
                  <v-text-field v-model="subject.code" label="Subject Code*"
                  @input="$v.subject.code.$touch()" @blur="$v.subject.code.$touch()" 
                  :error-messages="subjectcodeErrors" required>
                  </v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.description" label="Course Description*" required
                  @input="$v.subject.description.$touch()" @blur="$v.subject.description.$touch()" 
                  :error-messages="subjectdescriptionErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.units" label="Units*" required
                     mask="###"
                     @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                     :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field v-model="subject.preReq" label="Pre Requisites" required >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6>
                   <vue-ctk-date-time-picker overlay class="jieCtk"  color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="Start" v-model="subject.time1" ></vue-ctk-date-time-picker>
               </v-flex>
               <v-flex xs6>
                   <vue-ctk-date-time-picker overlay class="jieCtk" color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="End" v-model="subject.time2" ></vue-ctk-date-time-picker>
               </v-flex>
                <v-flex xs4>
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 1"
                     v-model="subject.sched1"
                  ></v-select>
               </v-flex>

               <v-flex xs4 >
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 2"
                     v-model="subject.sched2"
                  ></v-select>
               </v-flex>

                <v-flex xs4 >
                  <v-select
                     :items="['None','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 3"
                     v-model="subject.sched3"
                  ></v-select>
               </v-flex>

               <v-flex xs4>
                  <v-select
                     :items="listofRm"
                     label="Room"
                     v-model="subject.room"
                  ></v-select>
               </v-flex>
               <v-flex xs8>
                  <v-select
                     :items="listOfIns"
                     label="Instructor"
                     v-model="subject.instructor"
                  ></v-select>
               </v-flex>
               
               <v-flex v-if="instructorError.length > 0 || roomError.length > 0" xs12>
                  <!-- {{idKEYINDEX}} {{subject.keyIndex}} -->
                   <!-- && instructorError.length > 0 || roomError.length > 0  -->
                  <v-alert v-if="idKEYINDEX != subject.keyIndex " type="error" :value="true">
                     {{roomError}} {{instructorError}}
                     <span v-if="instructorError.length > 0 && roomError.length == 0">Schedule is already conflict due to {{subject.instructor}}</span>
                     <span v-else-if="roomError.length > 0 && instructorError.length == 0">Schedule is already conflict due to room availability</span>
                     <span v-else-if="instructorError.length > 0 && roomError.length > 0">Schedule is already conflict due to {{subject.instructor}} and room availability</span>
                  </v-alert>
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
               @click="updateSubject"
            >
               Update
            </v-btn>
         </v-card-actions>
         </v-card>
      </v-dialog>

      <v-dialog
         v-model="deleteSubjectDialog"
         width="600"
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
               
               
               <v-flex xs6 >
                  <v-text-field readonly v-model="subject.code" label="Subject Code*"
                  @input="$v.subject.code.$touch()" @blur="$v.subject.code.$touch()" 
                  :error-messages="subjectcodeErrors" required>
                  </v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field  readonly v-model="subject.description" label="Course Description*" required
                  @input="$v.subject.description.$touch()" @blur="$v.subject.description.$touch()" 
                  :error-messages="subjectdescriptionErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field readonly  v-model="subject.units" label="Units*" required
                     mask="###"
                     @input="$v.subject.units.$touch()" @blur="$v.subject.units.$touch()" 
                     :error-messages="subjectunitsnErrors" >
                  ></v-text-field>
               </v-flex>

               <v-flex xs6 >
                  <v-text-field  readonly v-model="subject.preReq" label="Pre Requisites" required >
                  ></v-text-field>
               </v-flex>

                 <v-flex xs6>
                   <vue-ctk-date-time-picker disabled overlay class="jieCtk"  color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="Start" v-model="subject.time1" ></vue-ctk-date-time-picker>
               </v-flex>
               <v-flex xs6>
                   <vue-ctk-date-time-picker disabled overlay class="jieCtk" color="grey"  id="TimePicker" only-time inputSize="sm" format="hh:mm a" formatted="hh:mm a" minuteInterval="30" label="End" v-model="subject.time2" ></vue-ctk-date-time-picker>
               </v-flex>
               <v-flex xs4>
                  <v-select
                     readonly=""
                     :items="['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 1"
                     v-model="subject.sched1"
                  ></v-select>
               </v-flex>

               <v-flex xs4 >
                  <v-select
                     readonly=""
                     :items="['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 2"
                     v-model="subject.sched2"
                  ></v-select>
               </v-flex>

                <v-flex xs4 >
                  <v-select
                     readonly=""
                     :items="['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ,'Sunday']"
                     label="Schedule 3"
                     v-model="subject.sched3"
                  ></v-select>
               </v-flex>

               <v-flex xs4>
                  <v-select
                   readonly 
                     :items="listofRm"
                     label="Room"
                     v-model="subject.room"
                  ></v-select>
               </v-flex>
               <v-flex xs8>
                  <v-select
                   readonly 
                     :items="listOfIns"
                     label="Instructor"
                     v-model="subject.instructor"
                  ></v-select>
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
   import Swatches from 'vue-swatches'
   import { db, app, order } from '../../../firebase.js';
   import { validationMixin } from 'vuelidate'
   import { required, email} from 'vuelidate/lib/validators'
   import moment from 'moment'

   export default {
   mixins: [validationMixin],
   validations: { 
      program: {
         name: {required},
         description: {required},
      },
      subject: {
         code: {required},
         description: {required},
         units: {required}
      },
   },
   components: {Swatches},
   data: () => ({
      idKEYINDEX: '',
      errorTime1: {
         start: false,
         label: 'Start',
      },
      errorTime2: {
         end: false,
         label: 'End',
      },
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      subject: {
         program:'',
         yearlvl:'',
         semester:'',
         units: '',
         code: '',
         description: '',
         preReq: '',
         sched1: '',
         sched2: '',
         sched3: '',
         time1: null,
         time2: null,
         instructor:'',
         room:'',
         keyIndex: '',
      },
      deleteSubjectDialog: false,
      addSubjectDialog: false, 
      editSubjectDialog: false,
      headers: [
         {
         text: 'Subject Code',
         align: 'left',
         sortable: false,
         value: 'code'
         },
         { text: 'Subject Description', value: 'description' },
         { text: 'Units', value: 'units' },
         { text: 'Day', value: 'sched1' },
         { text: 'Time', value: 'time1' },
         { text: 'Room', value: 'room' },
         { text: 'Instructor', value: 'instructor' },
         { text: 'Action', value: 'time2' },
      ],
      length: 3,
      window: 0,

      editItemDialog: false,
      deleteItemDialog: false,
      dataDialog: false,

      program: {
         name: '',
         description: '',
         description2: '',
         color: '',
         keyIndex: '',
         yr: '',
         courseSUB: [],
      },
      snackbarDetails: '',
      textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar2: false,
   }),
   methods: {
      changeTime(data) {
         return data
      },
      deleteSubject() {
         let vm = this
         let post = db.ref().child('CKCMDATA/subject/'+this.subject.keyIndex)
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
      },
      deleteSubject1(data) {
         this.deleteSubjectDialog = true
         this.subject = {
            units: data.value.units,
            code: data.value.code,
            description:data.value.description,
            preReq: data.value.preReq,
            sched1:data.value.sched1,
            sched2: data.value.sched2,
            time1:data.value.time1,
            time2: data.value.time2,
            program:data.program.keyIndex,
            yearlvl:data.value.yearlvl,
            semester:data.value.semester,
            instructor:data.value.instructor,
            room:data.value.room,
            keyIndex: data.value.keyIndex,
         }
      },
      updateSubject() {
         var vm = this
         console.log(vm.subject.sched1)
         if(vm.$v.subject.$invalid || vm.idKEYINDEX != '' && vm.idKEYINDEX != vm.subject.keyIndex) {
            vm.$v.subject.$touch()
         } else {
            var newPostKey = vm.subject.keyIndex
            let post = db.ref().child('CKCMDATA/subject/'+newPostKey)
            post.update({
               keyIndex: newPostKey,
               code: _.upperCase(vm.subject.code),
               description:  _.capitalize(vm.subject.description),
               units: vm.subject.units,
               
               program: vm.subject.program,
               yearlvl: vm.subject.yearlvl,
               semester: vm.subject.semester,
               sched1: vm.subject.sched1,
               sched2: vm.subject.sched2,
               sched3: vm.subject.sched3,
               time1: vm.subject.time1,
               time2: vm.subject.time2,
               instructor: vm.subject.instructor,
               room: vm.subject.room,


            }, function (error) {
               if(!error) {
                  vm.$v.subject.$reset()
                  vm.subject = {
                     code: '',
                     description: '',
                     units: '',
                  },
                  vm.snackbarDetails = 'Successfully updated a new Subject'
                  vm.snackbar2 = true
                  vm.editSubjectDialog = false
               }
            })
         }
      },
      editSubject1(data) {
         let vm = this
         this.subject = {
            units: data.value.units,
            code: data.value.code,
            description:data.value.description,
            preReq: data.value.preReq,
            sched1:data.value.sched1,
            sched2: data.value.sched2,
            sched3: data.value.sched3,
            time1:data.value.time1,
            time2: data.value.time2,
            program:data.program.keyIndex,
            yearlvl:data.value.yearlvl,
            semester:data.value.semester,
            instructor:data.value.instructor,
            room:data.value.room,
            keyIndex: data.value.keyIndex,
         }
         console.log(vm.subject)
         this.editSubjectDialog = true
      },
      addSubject(data) {
         let vm = this
         // this.subject.semester = data,
         // this.subject.program = vm.program.name,
         // this.subject.yearlvl = vm.program.yr,

         this.subject = {
            semester: data,
            program: vm.program.name,
            yearlvl: vm.program.yr,
            units: '',
            code: '',
            description: '',
            preReq: '',
            sched1: 'None',
            sched2: 'None',
            sched3: 'None',
            time1: '',
            time2: '',
            instructor: '',
            room: '',
            keyIndex: '',
         }
         console.log(vm.subject)
         this.addSubjectDialog = true
      },
      saveSubject() {
         var vm = this
         console.log(vm.subject.sched1)
         if(vm.$v.subject.$invalid || vm.idKEYINDEX != '') {
            vm.$v.subject.$touch()
         } else {
            var newPostKey = db.ref().child('CKCMDATA/subject').push().key;
            let post = db.ref().child('CKCMDATA/subject/'+newPostKey)
            post.set({
               keyIndex: newPostKey,
               code: _.upperCase(vm.subject.code),
               description:  _.capitalize(vm.subject.description),
               units: vm.subject.units,
               preReq: vm.subject.preReq,
               
               program: vm.program.keyIndex,
               yearlvl: vm.subject.yearlvl,
               semester: vm.subject.semester,
               sched1: vm.subject.sched1,
               sched2: vm.subject.sched2,
               sched3: vm.subject.sched3,
               time1: vm.subject.time1,
               time2: vm.subject.time2,
               instructor: vm.subject.instructor,
               room: vm.subject.room,


            }, function (error) {
               if(!error) {
                  vm.$v.subject.$reset()
                  vm.subject = {
                     code: '',
                     description: '',
                     units: '',
                  },
                  vm.snackbarDetails = 'Successfully added a new Subject'
                  vm.snackbar2 = true
               }
            })
         }
      },
      viewDialog(data, year) {
         let vm = this
         var filtSub = _.filter(vm.mysubjects, {'yearlvl': year, 'program': data.keyIndex})
         let data2 = this.$store.getters.myprograms
         let subList = []
         _.forEach(filtSub, function(value, key) {
            let program = _.find(data2,['keyIndex',value.program])
            subList.push({
               value,
               program,
            })
         })
         this.dataDialog = true
         this.program = {
            name: data.name,
            description: data.description,
            description2: data.description2,
            color: data.color,
            keyIndex: data.keyIndex,
            yr: year,
            courseSUB: subList
         }
         console.log(this.program)

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
      roomError() {
         // conflict in day 
         var err = []
         let vm = this
         let mySubjects = this.$store.getters.mysubjects
         console.log('subjects', mySubjects)
         _.forEach(mySubjects, function(value, key) {
            console.log('subjects', value)
            // console.log(value.room, vm.subjects.room)
            if(value.room == vm.subject.room && value.sched1 == vm.subject.sched1 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2) {
               err.push(key)
               vm.idKEYINDEX = key
            } else if (value.room == vm.subject.room && value.sched2 == vm.subject.sched2 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2){
               err.push(key)
               vm.idKEYINDEX = key
            } else if (value.room == vm.subject.room && value.sched3 == vm.subject.sched3 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2){
               vm.idKEYINDEX = key
               err.push(key)
            } else {

            }
         })
         console.log('TEST',err)
         return err
      },
      instructorError() {
         // conflict in day 
         var err = []
         let vm = this
         let mySubjects = this.$store.getters.mysubjects
         console.log('subjects', mySubjects)
         _.forEach(mySubjects, function(value, key) {
            console.log('subjects', value)
            // console.log(value.room, vm.subjects.room)
            if(value.instructor == vm.subject.instructor && value.sched1 == vm.subject.sched1 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2) {
               vm.idKEYINDEX = key
               err.push(key)
            } else if (value.instructor == vm.subject.instructor && value.sched2 == vm.subject.sched2 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2){
               vm.idKEYINDEX = key
               err.push(key)
            } else if (value.instructor == vm.subject.instructor && value.sched3 == vm.subject.sched3 && value.time1 == vm.subject.time1 &&  value.time2 == vm.subject.time2){
               vm.idKEYINDEX = key
               err.push(key)
            } else {
               
            }
         })
         console.log('TEST',err)
         return err
      },
      timeStartError(){
         let vm = this
         var testError = 0
         let mySubjects = this.$store.getters.mysubjects
         var filterDay = _.filter(mySubjects, ['sched1', this.subject.sched1])
         console.log(filterDay)
         _.forEach(filterDay, function(value, key) {
            var timeCutoff = moment(vm.subject.time1, 'h:mm a');
            var from = moment(value.time1, 'h:mm a');
            var to = moment(value.time2, 'h:mm a');
            if(timeCutoff.isBetween(from,to)) {
               testError = 1
            } else {
               // error += 0
            }
         })

         console.log(testError)
         if(testError > 0) {
            console.log('between')
         } else {
            console.log('not between')
         }
         
      },
      timeEndError() {
         var timeCutoff = moment(this.subject.time1, 'h:mm a');
         var testTime = moment(this.subject.time2, 'h:mm a');
         if(testTime.isBefore(timeCutoff)) {
             this.errorTime2.end = true
            this.errorTime2.label = "Time schedule is not valid"
            console.log(testTime.format("MM/DD/YYYY hh:mmA") + " before " + timeCutoff.format("MM/DD/YYYY hh:mmA"));
         }
         else {
            this.errorTime2.end = false
            this.errorTime2.label = "End"
            console.log(testTime.format("MM/DD/YYYY hh:mmA") + " after " + timeCutoff.format("MM/DD/YYYY hh:mmA"));
         }
      },
      courseSub() {
         let data = this.$store.getters.mysubjects
         let data2 = this.$store.getters.myprograms
         let filtData = _.filter(data,'keyIndex')
         let subList = []
         _.forEach(filtData, function(value, key) {
            let program = _.find(data2,['keyIndex',value.program])
            subList.push({
               value,
               program,
            })
         })
         
         return subList
      },
      mysubjects() {
         let data = this.$store.getters.mysubjects
         let filtData = _.filter(data,'keyIndex')
         return filtData
      },
      listofRm() {
         let item2 = []
         let data = this.$store.getters.myrooms
         let filtData = _.filter(data,'keyIndex')
         
         _.forEach(filtData, function(value, key) {
            item2.push(value.name)
         })
         console.log(filtData)
         return item2
      },
      listOfIns() {
         let item = []
         let data = this.$store.getters.myfaculties
         let filtData = _.filter(data,'keyIndex')
         
         _.forEach(filtData, function(value, key) {
            item.push(value.title+ ' '+ value.fn + ' '+value.ln)
         })
         console.log(filtData)
         return item
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
