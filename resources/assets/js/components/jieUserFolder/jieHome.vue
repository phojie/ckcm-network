<template>
   <v-layout  class="mt-2">
      <v-flex  class="mx-2 xs8">
         <v-card class="my-2" height="auto">
            <v-card-media
               height="100px"
               src="/imgs/background-main-light.svg"
            >
               <v-container fill-height fluid>
                  <v-layout fill-height>
                  <v-flex>
                     <span class="headline">{{timeDisplay}}</span>
                     <br>
                     <span class="subheadline"> Good afternoon, {{userData.displayName}}!</span>
                  </v-flex>
                  </v-layout>
               </v-container>
            </v-card-media>
         </v-card>
         
         <v-card class="my-2" height="400">
            <v-card-media
               height="100px"
            >
               <!-- src="imgs/background-main-light.svg" -->
               <v-container fill-height fluid>
                  <v-layout fill-height>
                  <v-flex>
                    
                  </v-flex>
                  </v-layout>
               </v-container>
            </v-card-media>
         </v-card>

         <v-card class="my-2" height="400">
            <v-card-media
               height="100px"
            >
               <!-- src="imgs/background-main-light.svg" -->
               <v-container fill-height fluid>
                  <v-layout fill-height>
                  <v-flex>
                    
                  </v-flex>
                  </v-layout>
               </v-container>
            </v-card-media>
         </v-card>
         
      </v-flex>
      <v-flex class=" mr-2 xs4" >
         <v-card flat  class=" grey lighten-4 my-2" app height="200px">
            <v-card flat class="grey lighten-4 my-2" height="50px">
            sdf
            </v-card>
            <v-card flat  class="grey lighten-4 my-2" height="150px">
            </v-card>
         </v-card>
        
      </v-flex>

      <!-- <v-flex  class="ml-3 md2">
         <v-card class="green" height="400px">
         </v-card>
      </v-flex> -->
   </v-layout>
   
</template>

<script>
// var moment = require('moment-timezone');

// import moment from 'moment';
// moment().tz("America/Los_Angeles").format();

export default {  
   data: () => ({
      timeDisplay: '',
      worldTime:[]
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      
   },
   mounted: function() {
      var date = new Date();
      let vm = this;
      setTimeout(function() {
         setInterval(()=>{
            axios.get('http://www.worldclockapi.com/api/json/utc/now')
               .then((response) =>{
                  vm.worldTime=response.data
                  console.log(vm.worldTime)
                  vm.timeDisplay = moment(vm.worldTime.currentDateTime).tz("Asia/Manila").format('h:mma');

               })
               .catch((err) => { 
                  console.log(err)
               })
               // MMMM Do YYYY ss,
         },60000)
      }, (60 - date.getSeconds()) * 1000);
   },
   created() {
      document.title = "Christ the king Network";
      var date = new Date();
      let vm = this;
      axios.get('http://www.worldclockapi.com/api/json/utc/now')
         .then((response) =>{
            vm.worldTime=response.data
            this.timeDisplay = moment(vm.worldTime.currentDateTime).tz("Asia/Manila").format('h:mma');
         })
         .catch((err) => { 
            console.log(err)
         })
   
   },
   
}
</script>
