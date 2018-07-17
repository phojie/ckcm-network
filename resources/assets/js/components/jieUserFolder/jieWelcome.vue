<template>
   <v-layout  class="mt-3 py-0">
      <v-flex  class="mr-3 ml-3 xs12 md8"   style="padding-top:3px !important" >
         <v-stepper non-linear="true" v-model="e13" vertical>
            <div class="px-4 py-3">
            <span style="font-size:16px" class="font-weight-bold"> You've just arrive to <span  style="font-size:18px" class="red--text">Ckcm Network</span>, Phojie </span>
            <v-divider class="grey lighten-2 mt-3"></v-divider>
         </div>

         <v-stepper-step class="pt-1" step="1" >
            Set your Profile
         </v-stepper-step>
         <v-stepper-content step="1">
            <v-card color="grey lighten-3" class="mb-5" height="500px"></v-card>
         </v-stepper-content>

         <v-stepper-step step="2" > Add people you know</v-stepper-step>

         <v-stepper-content step="2">
            <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
         </v-stepper-content>

         <!-- <v-stepper-step :rules="[() => false]" step="3">
            Ad templates
            <small>Alert message</small>
         </v-stepper-step> -->

         <!-- <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
         </v-stepper-content>

         <v-stepper-step step="4">View setup instructions</v-stepper-step>

         <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
         </v-stepper-content> -->
      </v-stepper>
      </v-flex>
   </v-layout>
   
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();

export default {  
   data: () => ({
      e13: 1
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      
   },
   mounted () {
      document.title = "(2) Welcome";
      this.$store.commit("leftnavDrawerOn");
   }
}
</script>
