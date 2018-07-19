<template>
   <v-layout  class="mt-2">
      <v-flex  class="mr-2 ml-3 xs7">
                
         <v-card flat style="border:.5px #EEEEEE solid" class="jieSvgBg1 my-2" >
           
            <!-- <v-container fluid> -->
            <v-layout wrap white class="px-3 pt-2 " >
               <v-flex xs12 class="mb-1" >
                  <v-chip class=""  small color="grey lighten-4 " text-color="black">
                     <v-avatar>
                        <v-icon dark color="blue" style="font-size:13px">mdi-pencil</v-icon>
                     </v-avatar>
                     <div style="margin-left:-10px" class="font-weigth-bold caption textfm1"> Make Post</div>
                  </v-chip>
                  <v-chip class=""  small color="grey lighten-4 " text-color="black">
                     <v-avatar>
                        <v-icon dark color="brown" style="font-size:13px">mdi-image-album</v-icon>
                     </v-avatar>
                     <div style="margin-left:-10px" class="font-weigth-bold caption textfm1">Photo/Album</div>
                  </v-chip>
                  <v-chip class=""  small color="grey lighten-4 " text-color="black">
                     <v-avatar>
                        <v-icon dark color="green" style="font-size:13px">mdi-poll</v-icon>
                     </v-avatar>
                     <div style="margin-left:-10px" class="font-weigth-bold caption textfm1">Poll Voting</div>
                  </v-chip>
                  <!-- <v-chip class=""  small color="grey lighten-4 " text-color="black">
                     <v-avatar>
                        <v-icon dark color="red" style="font-size:13px">mdi-video</v-icon>
                     </v-avatar>
                     <div style="margin-left:-10px" class="font-weigth-bold caption textfm1">Live</div>
                  </v-chip> -->
                  <v-chip class=""  small color="grey lighten-4 " text-color="black">
                     <v-avatar>
                        <v-icon dark color="primary" style="font-size:17px">mdi-dots-horizontal</v-icon>
                     </v-avatar>
                     <div style="margin-left:-10px" class="font-weigth-bold caption textfm1">More</div>
                  </v-chip>
               </v-flex>
               <v-flex xs4 style="margin-top:1px">
                  <!-- <p class="text-xs-center"> -->
                  <span style="font-size:27px">{{timeDisplay}}</span>
                  <br>
                  <span class="" style="font-size:13px"> {{greet}}</span>
                  <!-- </p> -->
               </v-flex>
               
               <v-flex  xs1 class="mt-3">
                  <v-avatar class="right" color="red--after" size="30px">
                     <img :src="userData.photoUrl" alt="">
                  </v-avatar>
               </v-flex>
               <v-flex xs7 style="margin-top:-6px;">
                  <v-textarea 
                     rows="2"
                     class="left textfm1"  
                     style="font-size:14px !important"
                     placeholder="What is your main focus for today?"
                     flat solo
                     auto-grow
                  ></v-textarea>
               </v-flex>
            </v-layout>
               <v-divider class="grey lighten-5"></v-divider>
               <!-- asdasd -->
               <v-flex class="ma-2">
                  <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn>
                   <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36475819_1766742130062368_2660206145032945664_n.jpg?_nc_cat=0&oh=aa21af20b1f8617026868f31d44b7b72&oe=5BCD5FED" alt="">
                     </v-avatar>
                  </v-btn> <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn> <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn>
                    <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn>
                   <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36475819_1766742130062368_2660206145032945664_n.jpg?_nc_cat=0&oh=aa21af20b1f8617026868f31d44b7b72&oe=5BCD5FED" alt="">
                     </v-avatar>
                  </v-btn> <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn> <v-btn icon small class="ma-0">
                     <v-avatar color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/36912211_1969395993084242_2606416313920258048_n.jpg?_nc_cat=0&oh=c4962115a6dddb90e896c9d59f1812df&oe=5BDDBA2B" alt="">
                     </v-avatar>
                  </v-btn>
                  <v-btn icon small  class="ma-0">
                     <v-avatar class="" color="red--after" size="24px">
                        <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                     </v-avatar>
                  </v-btn>


               </v-flex>
               
            <!-- </v-container> -->
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

      <v-flex class=" mr-3 xs4" >
         <v-card flat class="grey lighten-4 my-2" height="50px">
         </v-card>
         <v-card flat  class="grey lighten-4 mb-2" height="150px">
         </v-card>
      </v-flex>

      <!-- <v-flex class=" mr-4 xs5">
         <v-card class="green " style="position:fixed" height="400px">
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
      greet: '',
      worldTime: [],
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      }
   },
   methods: {
      
   },
   mounted: function() {

      this.$store.commit("leftnavDrawerOn");

      var date = new Date();
      let vm = this;
      // setTimeout(function() {
         setInterval(()=>{
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
               .then((response) =>{
                  vm.worldTime=response.data
                  vm.timeDisplay = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h:mma');
                  let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
                  let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
                     if ( a == 'pm' && hour > 1 && hour <= 5 || a == 'pm' && hour == 12) {
                        vm.greet = "Good afternoon , " + vm.userData.displayName;
                     } else if ( a == 'pm' && hour >= 6) {
                        vm.greet = "Good evening , " + vm.userData.displayName;
                     } else if (a == 'am' && hour >= 1 && hour <= 6) {
                        vm.greet = "Sayuha nimu , " + vm.userData.displayName;
                     } else {
                        vm.greet = "Good morning , " + vm.userData.displayName;
                     }
                     })
               .catch((err) => { 
                  console.log(err)
               })
               // MMMM Do YYYY ss,
         },60000)
      // }, (60 - date.getSeconds()) * 1000);
   },
   created() {
      document.title = "Christ the King Network";

      let vm = this;
      axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
         .then((response) =>{
            vm.worldTime=response.data
            vm.timeDisplay = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h:mma');
            let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
            let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
               if ( a == 'pm' && hour > 1 && hour <= 5 || a == 'pm' && hour == 12) {
                  vm.greet = "Good afternoon , " + vm.userData.displayName;
               } else if ( a == 'pm' && hour >= 6) {
                  vm.greet = "Good evening , " + vm.userData.displayName;
               } else if (a == 'am' && hour >= 1 && hour <= 6) {
                  vm.greet = "Sayuha nimu , " + vm.userData.displayName;
               } else {
                  vm.greet = "Good morning , " + vm.userData.displayName;
               }
         })
         .catch((err) => { 
            console.log(err)
         })
   
   },
   
}
</script>
