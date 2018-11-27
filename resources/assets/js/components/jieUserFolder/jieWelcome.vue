<template>
   <v-card  app height="100%" width="100%" style="position:absolute; bottom:0" flat class="newsfeedScroll transparent scrollbar-primary "> 
      <v-layout justify-center class="mt-3 py-0">
         <v-flex xs12 md7> 
            <v-stepper v-model="e6" vertical>
               <div class="px-4 py-3">
                  <span style="font-size:16px" class="font-weight-bold"> You've just arrive to <span  style="font-size:18px" class="red--text">Ckcm Network</span>, <span class="textDefault">{{userFData.first}} </span></span>
                  <v-divider class="grey lighten-2 mt-3"></v-divider>
               </div>
               <v-stepper-step  editable color="deep-purple" :complete="e6 > 1" step="1">
                  Basic profile
                  <!-- <small>Summarize if needed</small> -->
               </v-stepper-step>  
               <v-stepper-content color="deep-purple"  step="1">
                  <v-card color="" class="mb-5" height="">
                     <v-hover open-delay="500">
                        <v-card
                           slot-scope="{ hover }"
                           class="mx-auto jieSvgBg1"
                           color="deep-purple"
                           flat
                        >
                      
                        <v-img
                           :src="userFData.coverUrl"
                           height="220"
                           style="background-position: center !important;background-size: cover;!important"
                        >
                        <v-expand-transition>
                           <div
                              v-if="hover"
                              class="black transition-fade-in-fade-out v-card--reveal white--text"
                              style="height: 100%;"
                           >
                              <v-layout justify-center style="margin-top:50px;">
                                    <v-btn  class="" slot="activator" @click="btnCoverChange" flat color="transparent" icon>
                                          <v-avatar tile size="50">
                                          <img src="https://img.icons8.com/ios/50/ffffff/xlarge-icons-filled.png">
                                       </v-avatar>
                                    </v-btn>
                              </v-layout>
                              <v-layout justify-center>
                                 <span class="mt-3 textfm9"> Change your header photo </span>
                              </v-layout>

                           </div>
                        </v-expand-transition>
                        </v-img>
                        </v-card>
                     </v-hover>
                  <div  style="margin-left: 80px;position:absolute !important; margin-top:-80px !important" >
                  <v-hover open-delay="500">
                     <v-avatar slot-scope="{ hover }" size="150" class="white">
                        <img
                           class="white"
                           style="border:1px solid white;border-radius:50%; padding:6px !important"
                           :src="userFData.photoUrl+'?height=10000'"
                           :alt="firstname"
                        >
                        <v-expand-transition>
                           <div
                              v-if="hover"
                              class="d-flex black transition-fade-in-fade-out v-card--reveal white--text"
                              style="border:1px solid white;border-radius:50%;margin-bottom: 7px !important;height:91%;width:91%;"
                           >
                           <v-tooltip nudge-bottom="20" bottom>
                              <v-btn slot="activator" @click="toggleShow" flat color="transparent" icon>
                                 <v-avatar tile size="50">
                                    <!-- 4CAF50 -->
                                    <img src="https://img.icons8.com/ios/50/ffffff/xlarge-icons-filled.png">
                                    <!-- <img src="https://img.icons8.com/ios-glyphs/50/ffffff/edit-image.png"> -->
                                 </v-avatar>
                              </v-btn>
                              <span> Change profile photo </span>
                           </v-tooltip>
                           </div>
                        </v-expand-transition>
                     </v-avatar>
                   </v-hover>
                        <div class="displayName white--text font-weight-bold textDefault" >
                           {{userFData.displayName}}
                        </div>
                        <div class="firstName caption font-weight-regular white--text textlower" >
                           @{{firstname}}
                        </div>
                  </div>
                  </v-card>
                  <v-btn color="deep-purple lighten-2" class="right textNone white--text"   @click="e6 = 2">Continue</v-btn>
               </v-stepper-content>

               <v-stepper-step editable color="deep-purple"  :complete="e6 > 2" step="2">Configure your account</v-stepper-step>

               <v-stepper-content  step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px">
                     <v-avatar>
                        <img src="/jieIcons/frontLogo.png">
                     </v-avatar>
                     <v-img
                        v-if="configureEnrollbtn"
                        class="my-1"
                        :gradient="gradient"
                        dark
                        height="100%"
                        src="imgs/ckcm/1.jpg"
                     >
                        <v-container >
                           <v-layout align-center>
                              <v-flex>
                                 <p class="textfm13"><span class="textfm7 ">CKCM</span> – all you need for a successful career.</p>
                              </v-flex>
                              <v-flex text-xs-right>
                                 <!-- style="background-color: #fab364"  -->
                                 <v-btn  class="orange caption enrollBtn hidden-sm-and-down textNone textfm13 text-xs-center">
                                    Enroll now
                                 </v-btn>
                              </v-flex>
                           </v-layout>
                        </v-container>
                     </v-img>

                  </v-card>
                  <v-btn color="deep-purple lighten-2"  class="right textNone white--text"   @click="e6 = 3">Continue</v-btn>
               </v-stepper-content>

               <v-stepper-step color="deep-purple" :complete="e6 > 3" step="3">Select theme color</v-stepper-step>

               <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="deep-purple lighten-2"  class="right textNone white--text"   @click="e6 = 4">Continue</v-btn>
               </v-stepper-content>
            </v-stepper>
         </v-flex>  
      </v-layout>

      <input style="display:none" ref="coverChange" @input="uploadCoverpicture" accept="image/*" type="file" multiple>
      <my-upload field="img"
         @crop-success="cropSuccess"
         @crop-upload-success="cropUploadSuccess"
         @crop-upload-fail="cropUploadFail"
         v-model="show"
         :width="300"
         :height="300"
         langType="en"
         img-format="png">
         <!-- url="/upload" -->
      </my-upload>

      <v-snackbar
         :value="uploading"
         bottom 
         left
         :timeout="timeout"
         auto-height
      >
         <v-progress-linear
            v-if="uploadingPvalue != 100" 
            indeterminate
            :color="userFData.themeColor"
            height="5"
            class="my-0"
         ></v-progress-linear>
         <span  v-if="uploadingPvalue == 100" class="caption textfm1">
            {{uploadingMess}}
         </span>
      </v-snackbar>
   </v-card>
   
</template>

   
<script>
// var moment = require('moment-timezone');

import { db } from '../../firebase.js';
import myUpload from 'vue-image-crop-upload';
// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();

export default {  
   components: {
      'my-upload': myUpload
   },
   data: () => ({
      uploading: false,y: 'bottom', x: 'left', timeout: 10000, uploadingMess: "",
      uploadingProgess: false, uploadingPvalue: 0, messageDialog: '',
      e6: 2,
      items: ['Student', 'Instructor', 'Club Moderator', 'DSA', 'Finance', 'Dean(BSCS)', 'Dean(BSBA)', 'Dean(CRIM)', 'Dean(BSED)'],
      value: [],
      contact: '',
      password: '',
      show: false,
      showCover: false,
      imgDataUrl: '',
      gradient: 'to top right, #d67d0000, #382102',
      configureEnrollbtn: false,
      
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      userFData() {
         return this.$store.getters.AccountFdetails
      },
      firstname() {
         let getFn = this.$store.getters.accountLoginData.user.displayName
         let firstname = getFn.split(" ");
         return firstname[0];
      },
   },
   methods: {
      uploadCoverpicture(event) {
         // e.files.length > 2 SOMETHING IS WRONG IF MORE THAN 2 COVER PICTURE
         let vm = this;
         vm.uploading = false
         vm.uploadingPvalue = 100
         vm.uploading = true
         console.log(event)
         var storageRef = firebase.storage().ref();
         var uploadTask = storageRef.child(`coverPic/${vm.userData['ckcm-network_token_id']}`).put(event.target.files[0]);
         uploadTask.on('state_changed', function(snapshot){
            console.log(snapshot)
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            vm.uploadingPvalue = progress
         }, function(error) {
            console.log(error)
         }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
               // console.log('File available at', downloadURL);
               vm.changeCover(downloadURL)
            });
         });

      },
      btnCoverChange() {
         this.$refs.coverChange.click();
      },
      toggleShow() {
         this.show = !this.show;
      },
      changePicture(data) {
         let vm = this
         db.ref(`users/${vm.userData['ckcm-network_token_id']}` ).update({
            photoUrl: data
         }, function(error) {
            if(error) {
               vm.uploadingMess= " Something went wrong  "
            } else {
               vm.uploadingMess = " Your profile photo was published successfully. "
            }

         })
      },
      changeCover(data) {
         let vm = this
         db.ref(`users/${vm.userData['ckcm-network_token_id']}` ).update({
            coverUrl: data
         }, function(error) {
            if(error) {
               vm.uploadingMess= " Something went wrong  "
            } else {
               vm.uploadingMess = " Your cover photo was published successfully. "
            }

         })
      },
         /**
       * crop success
       *
       * [param] imgDataUrl
       * [param] field
       */
      cropSuccess(imgDataUrl, field){
         // + idCode+file[key].name
         // bytesTransferred
         // totalBytes:
         let vm = this;
         vm.uploading = false
         vm.uploadingPvalue = 100
         // let storageRef = firebase.storage().ref(`profilePic/${vm.userData['ckcm-network_token_id']}`);
         var storageRef = firebase.storage().ref();
         var uploadTask = storageRef.child(`profilePic/${vm.userData['ckcm-network_token_id']}`).putString(imgDataUrl, 'data_url');
         vm.uploading = true
         uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            vm.uploadingPvalue = progress
         }, function(error) {
         }, function () {
            vm.imgDataUrl = ''
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
               // console.log('File available at', downloadURL);
               vm.changePicture(downloadURL)
            });
         })
      },
      /**
       * upload success
       *
       * [param] jsonData  server api return data, already json encode
       * [param] field
       */
      cropUploadSuccess(jsonData, field){
         // console.log('-------- upload success --------');
         // console.log(jsonData);
         // console.log('field: ' + field);


      },
      /**
       * upload fail
       *
       * [param] status    server api return error status, like 500
       * [param] field
       */
      cropUploadFail(status, field){
         console.log('-------- upload fail --------');
         console.log(status);
         console.log('field: ' + field);
      },

      test() {
         alert('ete')
      }
   },
   mounted () {
      document.title = "(3)   Welcome";
      this.$store.commit("leftnavDrawerOff");
   },
}
</script>

