<template>
   <v-layout class="mt-2 white">
      <v-flex style="border:1px #EEEEEE solid" class="mr-2 mt-2 ml-3 xs12 md8 lg8">
         <v-card flat  class=" jieSvgBg1 pa-1 " >
            <!-- <v-container fluid> -->
            <v-layout wrap color="transparent" class="" >
               <v-flex xs12  class="mb-1" >
                  <v-layout>
                     <v-btn
                        color="grey lighten-4"
                        round
                        depressed
                        small
                        style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                     >
                        <v-icon dark class="mr-1" color="blue" style="font-size:15px">mdi-pencil</v-icon>
                        Make Post
                     </v-btn>
                     <v-btn
                        color="grey lighten-4"
                        round
                        depressed
                        small
                        style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                     >
                        <v-icon dark class="mr-1" color="brown" style="font-size:15px">mdi-image-album</v-icon>
                        Photo/Album
                     </v-btn>
                     <v-btn
                        color="grey lighten-4"
                        round
                        depressed
                        small
                        style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                     >
                        <v-icon dark class="mr-1" color="green" style="font-size:15px">mdi-poll</v-icon>
                        Poll Voting
                     </v-btn>
                     <v-spacer></v-spacer>
                     <v-btn
                        icon
                        color="grey lighten-4"
                        round
                        depressed
                        small
                        style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                     >
                        <v-icon dark  color="grey darken-4" style="font-size:17px">mdi-dots-horizontal</v-icon>
                     </v-btn>
                  </v-layout>
               </v-flex>

               <v-flex  xs1 class="mt-3">
                  <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                     <v-badge color="white"  overlap class="jieBadgeNews">
                        <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span>
                        <v-avatar class="mr-2 " color="grey lighten-3" size="33">
                           <img :src="userData.photoUrl" alt="">
                        </v-avatar>
                     </v-badge>
                  </v-btn> 
               </v-flex>
               <v-flex  xs7>
                  <v-textarea 
                     class="jiew textfm1"  
                     rows="2"
                     style="font-size:15px !important"
                     placeholder="What is your main focus for today?"
                     flat solo
                     auto-grow
                  ></v-textarea>
               </v-flex>
               <v-flex xs4 style="margin-top:1px">
                  <!-- <p class="text-xs-center"> -->
                  <span style="font-size:27px" class="textfm2">{{timeDisplay}}</span>
                  <br>
                  <span class="textfm2" style="font-size:13px"> {{greet}}</span>
                  <!-- </p> -->
               </v-flex>
            </v-layout>
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
         <v-card flat class="jieSvgBg1" >
            <v-progress-linear active height="2" style="margin:0px !important" color="grey lighten-2" :indeterminate="false"></v-progress-linear>
            <v-layout wrap white class="px-1 py-1" >
               <v-flex xs12>
                  <v-layout>
                  <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important" class=" jieleftNav"  flat>
                     <v-badge color="white"  overlap class="jieBadgeNews">
                        <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span>
                        <v-avatar class="mr-2 " color="grey--after" size="33">
                           <img src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-1/p50x50/37126995_1891538264473995_1733260840011825152_n.jpg?_nc_cat=0&oh=02bacd368ecefd1adef15d5d0b293a7b&oe=5BE80669" alt="">
                        </v-avatar>
                     </v-badge>
                  </v-btn> 
                  <div class="mt-2 ">
                  <p style="font-size:14px" class="mb-0 deep-purple--text font-weight-bold textfm1">Phojie Rengel</p>
                  <p style="margin-top:-5px" class="grey--text text-lighten-2 caption textfm1">2m ago</p>
                  </div>

                  <v-spacer></v-spacer>
                     <v-btn
                        icon
                        color="grey lighten-4"
                        round
                        depressed
                        small
                        style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                     >
                        <v-icon dark  color="grey darken-4" style="font-size:17px">mdi-dots-horizontal</v-icon>
                     </v-btn>
                  </v-layout>

               </v-flex>

               <v-flex xs12 style="height:300px">
               </v-flex>
            <v-progress-linear active height="2" style="margin:0px !important" color="red lighten-2" :indeterminate="false"></v-progress-linear>
               <v-flex class="jieSvgBg1" xs12>
                  footer
               </v-flex>
            </v-layout>

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

      <v-flex class=" mr-4  xs0 md4 lg4" >
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
      bottomNav: 'recent'
   }),
   computed: {
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      firstname() {
         var getFn = this.$store.getters.accountLoginData.user.displayName
         var firstname = getFn.split(" ");
         return firstname[0];
      }
   },
   methods: {
      profileMenu () {
         const displayName= this.$store.getters.accountLoginData.user.displayName;
         const user = displayName.toLocaleLowerCase().replace(/[ ]/g, ".");
         this.$router.push({
            path: `/profile/${user}`,
            });
      }
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
                        vm.greet = "Good afternoon , " +vm.firstname;
                     } else if ( a == 'pm' && hour >= 6) {
                        vm.greet = "Good evening , " + vm.firstname;
                     } else if (a == 'am' && hour >= 1 && hour <= 6) {
                        vm.greet = "Sayuha nimu , " + vm.firstname;
                     } else {
                        vm.greet = "Good morning , " + vm.firstname;
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
                  vm.greet = "Good afternoon , " + vm.firstname;
               } else if ( a == 'pm' && hour >= 6) {
                  vm.greet = "Good evening , " + vm.firstname;
               } else if (a == 'am' && hour >= 1 && hour <= 6) {
                  vm.greet = "Sayuha nimu , " + vm.firstname;
               } else {
                  vm.greet = "Good morning , " + vm.firstname;
               }
         })
         .catch((err) => { 
            console.log(err)
         })
   
   },
   
}
</script>
