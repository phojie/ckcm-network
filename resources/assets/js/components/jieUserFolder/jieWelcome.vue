<template>
   <v-card  app height="100%" width="100%" style="position:absolute; bottom:0" flat class="newsfeedScroll transparent scrollbar-primary "> 
      <v-layout justify-center class="mt-3 py-0">
         <v-flex xs12 sm8> 
            <v-stepper v-model="e6" vertical>
               <div class="px-4 py-3">
                  <span style="font-size:16px" class="font-weight-bold"> You've just arrive to <span  style="font-size:18px" class="red--text">Ckcm Network</span>, Phojie </span>
                  <v-divider class="grey lighten-2 mt-3"></v-divider>
               </div>
               <v-stepper-step color="blue" :complete="e6 > 1" step="1">
                  Edit profile
                  <!-- <small>Summarize if needed</small> -->
               </v-stepper-step>

               <v-stepper-content color="blue"  step="1">
                  <v-card color="" class="mb-5" height="">
                  <v-card-media
                  class="blue lighten-2 jieSvgBg1"
                  height="200px"
                  >
                   </v-card-media>
                  <div class="ml-5" style="position:absolute !important; margin-top:-60px !important" >
                  <v-hover>
                     <v-avatar slot-scope="{ hover }" size="80" class="white">
                        <img
                           class="white"
                           style="border:1px solid white;border-radius:50%;height:95px !important;width:95px !important;padding:2px !important"
                           :src="userData.photoUrl+'?height=10000'"
                           :alt="firstname"
                        >
                        <v-expand-transition>
                           <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out blue darken-1 v-card--reveal white--text"
                              style="border-radius:50%;height: 100%;"
                           >
                           <v-btn flat color="transparent" icon>
                              <v-avatar tile size="40">
                                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="50" height="50"
                                 viewBox="0 0 252 252"
                                 style="fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,252v-252h252v252z" fill="none"></path><g id="original-icon" fill="#000000" opacity="0" visibility="hidden"><g id="surface1"><path d="M0,20.16v211.68h252v-211.68zM10.08,30.24h231.84v191.52h-231.84zM20.16,40.32v114.8175c-0.13781,0.66938 -0.13781,1.37813 0,2.0475v54.495h211.68v-24.4125c0.13781,-0.66937 0.13781,-1.37812 0,-2.0475v-144.9zM30.24,50.4h191.52v123.795l-46.7775,-46.7775c-1.12219,-1.1025 -2.69719,-1.63406 -4.2525,-1.4175c-1.12219,0.11813 -2.18531,0.63 -2.9925,1.4175l-21.42,21.42l-51.8175,-56.5425c-1.16156,-1.26 -2.87437,-1.87031 -4.5675,-1.575c-1.00406,0.13781 -1.92937,0.59063 -2.6775,1.26l-57.015,52.605zM176.4,75.6c-8.3475,0 -15.12,6.7725 -15.12,15.12c0,8.3475 6.7725,15.12 15.12,15.12c8.3475,0 15.12,-6.7725 15.12,-15.12c0,-8.3475 -6.7725,-15.12 -15.12,-15.12zM90.405,103.005l48.6675,53.0775l-11.655,11.655c-2.00812,2.00813 -2.00812,5.23688 0,7.245c2.00813,2.00813 5.23688,2.00813 7.245,0l14.3325,-14.49c0.70875,-0.43312 1.29938,-1.02375 1.7325,-1.7325l20.6325,-20.475l50.4,50.4v12.915h-191.52v-42.9975z"></path></g></g><g id="subtracted-icon" fill="#000000"><g id="surface1 1"><path d="M252,20.16l0,148.11125c-2.85814,-4.29881 -6.25039,-8.21565 -10.08,-11.65378v-126.37747h-231.84v191.52h134.51546c1.25409,3.51926 2.8263,6.89094 4.68158,10.08h-149.27704v-211.68zM231.84,40.32l0,108.95704c-3.18906,-1.85527 -6.56074,-3.42749 -10.08,-4.68158v-94.19546h-191.52v94.185l57.015,-52.605c0.74813,-0.66937 1.67344,-1.12219 2.6775,-1.26c1.69313,-0.29531 3.40594,0.315 4.5675,1.575l51.8175,56.5425l21.42,-21.42c0.80719,-0.7875 1.87031,-1.29937 2.9925,-1.4175c1.55531,-0.21656 3.13031,0.315 4.2525,1.4175l14.85798,14.85798c-3.84953,0.76642 -7.57047,1.90126 -11.12415,3.36585l-7.35634,-7.35634l-20.6325,20.475c-0.43312,0.70875 -1.02375,1.29938 -1.7325,1.7325l-14.3325,14.49c-2.00812,2.00813 -5.23687,2.00813 -7.245,0c-2.00812,-2.00812 -2.00812,-5.23687 0,-7.245l11.655,-11.655l-48.6675,-53.0775l-60.165,55.5975v42.9975h110.88c0,3.43214 0.28974,6.79989 0.84596,10.08h-121.80596v-54.495c-0.13781,-0.66937 -0.13781,-1.37812 0,-2.0475v-114.8175zM191.52,90.72c0,8.3475 -6.7725,15.12 -15.12,15.12c-8.3475,0 -15.12,-6.7725 -15.12,-15.12c0,-8.3475 6.7725,-15.12 15.12,-15.12c8.3475,0 15.12,6.7725 15.12,15.12z"></path></g></g><g fill="#000000"><g><g id="Слой_2" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="Android_x5F_4" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="Android_x5F_5" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="Windows_x5F_8" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="Windows_x5F_10" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="Color" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="IOS" font-family="-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif" font-weight="300" font-size="16" text-anchor="start" visibility="hidden"></g><g id="IOS_copy"><path d="M231.336,201.6c0,3.024 -2.016,5.04 -5.04,5.04h-19.656v19.656c0,3.024 -2.016,5.04 -5.04,5.04c-3.024,0 -5.04,-2.016 -5.04,-5.04v-19.656h-19.656c-3.024,0 -5.04,-2.016 -5.04,-5.04c0,-3.024 2.016,-5.04 5.04,-5.04h19.656v-19.656c0,-3.024 2.016,-5.04 5.04,-5.04c3.024,0 5.04,2.016 5.04,5.04v19.656h19.656c3.024,0 5.04,2.016 5.04,5.04zM252,201.6c0,27.72 -22.68,50.4 -50.4,50.4c-27.72,0 -50.4,-22.68 -50.4,-50.4c0,-27.72 22.68,-50.4 50.4,-50.4c27.72,0 50.4,22.68 50.4,50.4zM241.92,201.6c0,-22.176 -18.144,-40.32 -40.32,-40.32c-22.176,0 -40.32,18.144 -40.32,40.32c0,22.176 18.144,40.32 40.32,40.32c22.176,0 40.32,-18.144 40.32,-40.32z"></path></g></g></g></g></svg>
                              </v-avatar>
                           </v-btn>
                           </div>
                        </v-expand-transition>
                     </v-avatar>
                   </v-hover>
                        <div style="font-size:17px;margin-top:-62px !important;margin-left:95px" class="white--text font-weight-bold textDefault" >
                           {{userData.displayName}}
                        </div>
                        <div style="margin-top:-5px !important;margin-left:95px" class="caption font-weight-regular white--text textlower" >
                        @{{firstname}}
                        </div>
                  </div>
                  </v-card>
                  <v-btn color="blue lighten-2" class="white--text"  small @click="e6 = 2">Continue</v-btn>
               </v-stepper-content>

               <v-stepper-step color="blue"  :complete="e6 > 2" step="2">Configure your account</v-stepper-step>

               <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="blue lighten-2"  class="white--text"  small @click="e6 = 3">Continue</v-btn>
                  <v-btn flat small>return</v-btn>
               </v-stepper-content>

               <v-stepper-step color="blue" :complete="e6 > 3" step="3">Select theme color</v-stepper-step>

               <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn color="blue lighten-3"  class="white--text"  small @click="e6 = 4">Continue</v-btn>
                  <v-btn flat small>return</v-btn>
               </v-stepper-content>
            </v-stepper>
         </v-flex>  
      </v-layout>
   </v-card>
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();

export default {  
   data: () => ({
      e6: 1,
      items: ['Student', 'Instructor', 'Club Moderator', 'DSA', 'Finance', 'Dean(BSCS)', 'Dean(BSBA)', 'Dean(CRIM)', 'Dean(BSED)'],
      value: [],
      contact: '',
      password: ''
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      firstname() {
         let getFn = this.$store.getters.accountLoginData.user.displayName
         let firstname = getFn.split(" ");
         return firstname[0];
      }
   },
   methods: {
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

