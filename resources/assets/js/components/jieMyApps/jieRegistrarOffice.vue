<template>
   <v-app>
      <v-container grid-list-md fluid>
         <v-layout row wrap class="mx-4 mb-2">
            <span style="font-size:16px" class="font-weight-bold"><span  style="font-size:18px" :class="`${userFData.themeColor}--text`" >Academic Affairs Office</span> </span>
            <v-spacer></v-spacer> 
            <v-dialog
               v-model="dialog99"
               width="600"
               persistent=""
               >
               <v-btn slot="activator" outline :class="`${userFData.themeColor}--text`"   class="textDefault" small>Add Faculty</v-btn>
               <v-card>
               <v-card-title
                  class="headline grey lighten-2"
                  primary-title
               >
                  Faculty Profile
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
                           :items="listprograms"
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
                     @click="dialog99 = false"
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
               v-model="dialog98"
               width="500"
               persistent=""
               >
               <v-btn  slot="activator" class="textDefault" outline :class="`${userFData.themeColor}--text`"  small>Add Room</v-btn>
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
                     @click="dialog98 = false"
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
            <!-- <v-dialog
               v-model="dialog97"
               width="500"
               persistent=""
               >
               <v-btn   slot="activator" outline :class="`${userFData.themeColor}--text`"  class="textDefault" small>Add subject</v-btn>
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
                     @click="dialog97 = false"
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
            </v-dialog> -->
            <v-dialog
               v-model="dialog96"
               width="600"
               persistent=""
               >
               <v-btn    slot="activator" outline :class="`${userFData.themeColor}--text`"  class="textDefault" small> Add program</v-btn>
               <v-card>
               <v-card-title
                  class="headline grey lighten-2"
                  primary-title
               >
                  New Program
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
                     @click="dialog96 = false"
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
               persistent
               v-model="dialog1"
               width="600"
               >
               <v-btn    slot="activator" outline :class="`${userFData.themeColor}--text`"  class="textDefault" small>Announce</v-btn>
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
               <v-card-text>
                  <v-flex style="margin-top:-3px" >
                  <!-- jiew -->
                  <!-- @blur="whatisFunctionMethodFalse" -->
                  <input style="display:none" ref="newsFile" @input="addFile" accept="image/*" type="file" multiple>
                     <v-textarea 
                        background-color="transparent"
                        hide-details color="blue"
                        class="whatIs  subheading" row-height="20"
                        ref="newP"
                        append-icon="mdi-image-outline"
                        style="" placeholder="Announce something"
                        flat solo
                        @click:append="photoBtn"
                        v-model="announceMesesage"
                        auto-grow
                     ></v-textarea>
                  </v-flex>

                  <v-flex v-if="newsImgsUrl.length > 1 && newsImgsUrl.length < 4 " class="" xs12>
                     <v-card depressed flat class="ml-5 mx-2 ">
                        <span v-for="(thisUrl, index) in newsImgsUrl" :key="index" class="mr-1" >
                           <img
                              style="width:35%;border-radius:5px !important;border:1px solid #E0E0E0"  
                              :src="thisUrl.imgUrl"
                           >
                        </span>
                     <v-progress-linear v-if="imgsPercentage != 100" color="blue" height="3" :value="imgsPercentage"></v-progress-linear>
                     </v-card>
                  </v-flex>
                  <v-flex  v-else-if="newsImgsUrl.length == 1" class="" xs12>
                     <v-card depressed flat class="ml-5 mx-2 ">
                        <span style="min-width:100% !important" v-for="(thisUrl, index) in newsImgsUrl" :key="index" class="mr-1" >
                           <!-- <v-progress-linear></v-progress-linear> -->
                           <img
                              style="width:100%;border-radius:5px !important;border:1px solid #E0E0E0"  
                              :src="thisUrl.imgUrl"
                           >
                        </span>
                     <v-progress-linear color="blue" height="3" v-if="imgsPercentage != 100" :value="imgsPercentage"></v-progress-linear>
                     </v-card>
                  </v-flex>
               </v-card-text>

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

            
         </v-layout>
         <v-layout row wrap justify-center="">
            <div style="background-image: linear-gradient(-90deg,rgba(14,30,37,0) 0,#0e1e25 5%,#0e1e25 90%,rgba(14,30,37,0) 100%);content: '';
                  display: block;
                  height: 2px;
                  opacity: .08;
                  position: absolute;width: 95%;"
            ></div>
         </v-layout>

         <v-layout row wrap class="mt-4" >
            <v-flex xs12 md3>
               <v-card class="pa-4" width="100%" height="auto" >
                  <div class="ml-2 caption font-weight-black grey--text" ><span :class="`${userFData.themeColor}--text`">My</span>Office</div>
                  <v-btn to="/registrarOffice" exact style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/view-shedule.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Dashboard </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/schedule"  style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/overtime.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Schedule </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/subjects"  style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/book.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault ">  Subjects </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/programs" style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/important-property.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault ">  Programs </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/rooms" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/room-finder.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault ">  Rooms </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/faculties" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/knowledge-sharing.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Faculties </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/students" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/identification-documents.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Students </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-btn to="/registrarOffice/request" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="grey--after" size="20px">
                        <img src="https://img.icons8.com/ios/50/000000/identification-documents.png">
                     </v-avatar>
                     <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Request </div> 
                     <v-spacer></v-spacer>
                     <div class="textfm1 caption" ></div>
                  </v-btn>
                  <v-divider class=" grey lighten-4"></v-divider>
               </v-card>

               <v-card flat  class="px-4 white lighten-4" >
                  <p  style="font-size:11px">
                  <span class="mr-2  blue-grey--text text--lighten-1"  > &copy; {{ new Date().getFullYear() }} Ckcm Network</span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3 " to=""> About </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Help Center </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Terms </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Privacy policy </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Cookies </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Status </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Apps </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Info </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Cloud </router-link> </span>
                  <span class="mr-2"> <router-link  class="font-weight-thin aJie blue-grey--text text--lighten-3" to=""> Developers </router-link> </span>
                  </p>
               <v-divider class=" grey lighten-4"></v-divider>
            </v-card>
            </v-flex>
            <v-flex xs12 md9>
               <v-card flat class="portalSvg grey lighten-4" style='height:auto !important'  width="100%">
                  <router-view></router-view>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
       
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
   </v-app>
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();
   import Swatches from 'vue-swatches'

   import { db, app, order } from '../../firebase.js';
   import { validationMixin } from 'vuelidate'
   import { required, email} from 'vuelidate/lib/validators'

   export default {
   mixins: [validationMixin],
   validations: { 
      faculty: {
         title:  {required},
         fn:  {required},
         mn:  {required},
         ln:  {required},
         email:  {required, email},
         confirm:  {required, email},
         designation:  {required},
      },
      program: {
         name: {required},
         description: {required},
      },
      subject: {
         code: {required},
         description: {required},
         units: {required}
      },
      room: {
         name: {required},
      },
   },
   components: { Swatches },
   data: () => ({
      
      imgsPercentage: 0,
      newsImgsUrl: [],
      postedData: { 
         message:'', 
         image:''
      },

      emailList: [],
      snackbarDetails: '',
      faculty: {
         title: '',
         fn: '',
         mn: '',
         ln: '',
         email: '',
         confirm: '',
         designation: '',
      },
      program: {
         name: '',
         description: '',
         description2: '',
         color: '',
      },
      room: {
         name: '',
         description: '',
      },
      subject: {
         code: '',
         description: '',
         units: '',
      },
      e13: 1,
      dialog: false,
      dialog1: false,

      dialog99: false,
      dialog98: false,
      dialog97: false,
      dialog96: false,

      checkbox: true,
      switch1: true,
      sendLoading:false,
      announceMesesage: '',
      postedData: { 
         message:'', 
         image:''
      },textalert: null,y: 'bottom', x: 'right', mode: '', timeout: 6000, snackbar: false, snackbar2: false,
   }),
   computed: {
      listprograms() {
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

      roomnameErrors () {
         const errors = []
         if (!this.$v.room.name.$dirty) return errors
         !this.$v.room.name.required && errors.push('Room name is required')
         return errors
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
         let vm = this
         // var filterEmail = _.filter(this.emailList,['email', this.faculty.email])
         var filterEmail = _.filter(vm.emailList,['email', _.capitalize(vm.faculty.email)])
         const errors = []
         if (!this.$v.faculty.email.$dirty) return errors
         !this.$v.faculty.email.email && errors.push('Must be valid e-mail')
         !this.$v.faculty.email.required && errors.push('Email is required')
         filterEmail.length > 0 && errors.push('Email already used')

         return errors
      },
      facultyconfirmErrors () {
         const errors = []
         if (!this.$v.faculty.confirm.$dirty && this.faculty.email == this.faculty.confirm) return errors
         !this.$v.faculty.email.email && errors.push('Must be valid e-mail')
         !this.$v.faculty.confirm.required && errors.push('Confirm your email')
         _.toLower(this.faculty.email) != _.toLower(this.faculty.confirm) && errors.push('Email does not match')

            return errors

      },
      facultydesignationErrors () {
         const errors = []
         if (!this.$v.faculty.designation.$dirty) return errors
         !this.$v.faculty.designation.required && errors.push('Designation is required')
         return errors
      },
    
   
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      userFData() {
         return this.$store.getters.AccountFdetails
      },
   },
   methods: {
      addFile(event) {
         let vm = this;
         var idCode =  Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         var file = event.target.files;
         var imgKeys = Object.keys(file);
         if(file.length > 0) {
            console.log("only1")
               imgKeys.forEach( function(key) {
                  var storageRef = firebase.storage().ref('dummyUploads/'+ idCode+file[key].name);
                  var task = storageRef.put(file[key]);
                  task.on('state_changed', 
                     function progress(snapshot) {
                        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // vm.newsImgsUrl[key].percent = percentage;
                        console.log(percentage)
                        vm.imgsPercentage = percentage
                        if(percentage == 100) {
                           var starsRef = firebase.storage().ref(snapshot.metadata.fullPath);
                           starsRef.getDownloadURL().then(function(url) {
                              // vm.newsImgsUrl[key].imgUrl = url;
                              vm.$nextTick(() => vm.$refs.newP.focus());
                              vm.postedData.message += ' '
                              vm.newsImgsUrl[key] = Object.assign({}, vm.newsImgsUrl[key], {
                                 imgUrl : url
                              })
                              vm.postedData.message = ''

                           })
                        }
                     },
                     function error(error) {
                        console.log(error);
                     },
                     function complete() {
                        // alert('complete')
                     }
                  );
               });
         }
      },
      photoBtn() {
         this.$refs.newsFile.click();
      },
      saveFaculty() {
         
         let vm = this
         var filterEmail = _.filter(vm.emailList,['email', _.capitalize(vm.faculty.email)])

         if(vm.$v.faculty.$invalid || vm.faculty.email != vm.faculty.confirm || filterEmail.length > 0) {
            vm.$v.faculty.$touch()
         } else {
       
            var newPostKey = db.ref().child('CKCMDATA/faculty').push().key;
            let post = db.ref().child('CKCMDATA/faculty/'+newPostKey)
            let newAccount = db.ref().child('CKCMDATA/accountUser/'+newPostKey)
            let users = db.ref().child('users/'+newPostKey)
            users.set({
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

            newAccount.set({
               'ckcm-network_token_id': newPostKey,
               displayName: _.capitalize(vm.faculty.fn) + ' ' + _.capitalize(vm.faculty.ln),
               email: _.capitalize(vm.faculty.email),
               password: vm.faculty.email,
               firsttime: 0,
               photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            })

            post.set({
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
                  vm.snackbarDetails = 'Successfully added a new Faculty'
                  vm.snackbar2 = true
               }
            })
         }
      },
      saveRoom() {
         let vm = this
         if(vm.$v.room.$invalid) {
            vm.$v.room.$touch()
         } else {
            var newPostKey = db.ref().child('CKCMDATA/room').push().key;
            let post = db.ref().child('CKCMDATA/room/'+newPostKey)
            post.set({
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
                  vm.snackbarDetails = 'Successfully added a new Room'
                  vm.snackbar2 = true
               }
            })
         }
      },
      saveSubject() {
         var vm = this
         if(vm.$v.subject.$invalid) {
            vm.$v.subject.$touch()
         } else {
            var newPostKey = db.ref().child('CKCMDATA/subject').push().key;
            let post = db.ref().child('CKCMDATA/subject/'+newPostKey)
            post.set({
               keyIndex: newPostKey,
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
                  vm.snackbarDetails = 'Successfully added a new Subject'
                  vm.snackbar2 = true
               }
            })
         }
      },
      saveProgram() {
         let vm = this
         if(vm.$v.program.$invalid) {
            vm.$v.program.$touch()
         } else {
            var newPostKey = db.ref().child('CKCMDATA/programs').push().key;
            let post = db.ref().child('CKCMDATA/programs/'+newPostKey)
            post.set({
               keyIndex: newPostKey,
               name: _.capitalize(vm.program.name),
               description: _.upperFirst(vm.program.description),
               description2: _.upperFirst(vm.program.description2),
               color: vm.program.color
            }, function (error) {
               if(!error) {
                  vm.$v.program.$reset()
                  vm.program = {
                     name: '',
                     description: '',
                     color: '',
                  },
                  vm.snackbarDetails = 'Successfully added a new Program'
                  vm.snackbar2 = true
               }
            })
         }
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
               apikey: 'PK5J+HcAL3c-VQGS8ixOd8AEvoIjjzRnKivZCviJ1Y',
               numbers:'09463582440',sender: 'jie', message: vm.announceMesesage
            }]
            var sendingNumber = '+639061262389'
            axios.post(`https://api.txtlocal.com/send/?apikey=wckbqSSCC0k-ImFk31JYM0YIAZlFG0ObL22iEf1jeW&numbers=${sendingNumber}&sender=CkcmNetwork&message=${vm.announceMesesage}`)
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
      this.$store.commit("leftnavDrawerOff");
      this.$store.commit("rightnavDrawerOff");
   },

   created() {
      
      let vm = this;
      
      order.on("value",  function(snapshot) {
         vm.orderValue = snapshot.val();
      }, function (errorObject) {
         console.log("Naa ko sa created 1 :The read failed: " + errorObject.code);
      });


      let get = db.ref('CKCMDATA/accountUser')
      get.on('value', function(snapshot) {
         vm.emailList = snapshot.val()
      })
   }
}
</script>
