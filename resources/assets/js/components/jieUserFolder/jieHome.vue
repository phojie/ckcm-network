<template>
<v-card  id="scroll-target" app height="100%" width="100%" style="position:absolute; bottom:0" flat class="newsfeedScroll transparent scrollbar-primary "> 
      <v-layout v-scroll:#scroll-target="onScroll" class="mt-1 mx-1 justify-center">
         <v-flex class=" xs12 sm12 md8 lg8  mr-2 mt-1">
            <v-card flat style="margin-bottom:1px" class="jieSvgBg1  " >
               <!-- style="border:1px #E0E0E0 solid;border-radius:2px"   -->
               <v-layout wrap color="white" :class="whatisClass" class="pt-2 px-2" >
                  <!-- <v-flex xs12  class="mb-1" >
                     <v-layout>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="blue" style="font-size:15px">mdi-pencil</v-icon>
                           Make Post
                        </v-btn>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="brown" style="font-size:15px">mdi-image-album</v-icon>
                           Photo/Album
                        </v-btn>
                        <v-btn
                           color="grey lighten-3"
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
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark  color="grey darken-4" style="font-size:17px">mdi-dots-horizontal</v-icon>
                        </v-btn>
                     </v-layout>

                  </v-flex> -->
                 
                  <v-flex  xs1 class="mt-3">
                     <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                        <v-badge color="white"  overlap class="jieBadgeNews">
                           <!-- <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span> -->
                           <v-avatar class="mr-2 " color="grey lighten-3" size="38">
                              <img :src="`${userData.photoUrl}?height=10000`" alt="">
                           </v-avatar>
                        </v-badge>
                     </v-btn> 
                  </v-flex>
                  <v-flex style="margin-top:-2px" :class="whatisFlex">
                     <v-textarea 
                        hide-details v-model="postedData.message" color="blue"
                        class="jiew " @keyup.enter="addDiv" row-height="10"
                        style="font-size:15px !important" placeholder="What is your main focus for today?"
                        @click="whatisFunctionMethod" @blur="whatisFunctionMethodFalse" flat solo
                        auto-grow
                     ></v-textarea>
                  </v-flex>
                  <v-flex v-if="!whatisFunction" style="margin-top:1px">
                     <!-- <p class="text-xs-center"> -->
                     <span style="font-size:28px" class="textfm2">{{timeDisplay}}</span>
                     <br>
                     <span class="textfm2 black--text" style="font-size:15px"> {{greet}}</span>
                     <!-- </p> -->
                  </v-flex>
                  
                  <v-flex xs9 class="mb-1" >
                     <v-layout>
                        <!-- <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="blue" style="font-size:15px">mdi-pencil</v-icon>
                           Make Post
                        </v-btn> -->
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="brown" style="font-size:15px">mdi-image-album</v-icon>
                           Photo/Album
                        </v-btn>
                        <v-btn
                           color="grey lighten-3"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark class="mr-1" color="green" style="font-size:15px">mdi-poll</v-icon>
                           Poll Voting
                        </v-btn>
                     </v-layout>

                  </v-flex>

                  <v-flex xs3 class="text-xs-right" v-if="whatisFunction" >
                     <v-spacer></v-spacer>
                     <v-btn small round  :disabled="postedDataNews"  depressed color="blue" @click="makePost(userData)" class="white--text font-weight-black caption textDefault"> Post </v-btn>
                  </v-flex>
               </v-layout>
               <!-- <v-layout>
                  <v-flex  xs1 v-for="newsfeed in newsfeeds" :key="newsfeed.keyIndex" v-if="newsfeed.userId != userData['ckcm-network_token_id']"  class="pa-2">
                           <v-btn color="indigo" icon @click="test" class="">
                              <v-avatar class="" color="grey" size="34px">
                                 <img :src="newsfeed.photoUrl" alt="">
                              </v-avatar>
                           </v-btn>
                  </v-flex>
               </v-layout> -->
            </v-card>
             <!-- :class="mb-1" border:1px #E0E0E0 solid;border-radius:2px;-->
            <v-card flat v-for="newsfeed in newsfeeds " style="margin-bottom:2px;" :key="newsfeed.keyIndex"  class=" jieSvgBg1" >
               <!-- <v-progress-linear active height="2" style="margin:0px !important" color="grey lighten-2" :indeterminate="false"></v-progress-linear> -->
               <v-layout wrap white class=" py-2" >
                  <v-flex xs12 class="mx-2">
                     <v-layout>
                     <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important" class=" jieleftNav"  flat>
                        <v-badge color="white"  overlap class="jieBadgeNews">
                           <!-- <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span> -->
                           <v-avatar class="mr-2 " color="grey lighten-3" size="38">
                              <img :src="`${newsfeed.photoUrl}?height=10000`" :alt="404">
                           </v-avatar>
                        </v-badge>
                     </v-btn> 
                     <div class="mt-2 ">
                     <p @click="profileMenuFriend(newsfeed.displayName)" style="letter-spacing:1px; font-size:13px" class="aJie mb-0 font-weight-bold ">{{newsfeed.displayName}} </p>
                     <p style="margin-top:-5px;font-size:13px" class="grey--text textfm2">
                        <!-- {{newsfeed.timestamp | moment("dddd, MMMM Do YYYY: h:mm:a") }}| -->
                        <Timeago :auto-update="60" :datetime="newsfeed.timestamp" :since="timeAgoFormat"></Timeago>
                     </p>
                     </div>
                     <v-spacer></v-spacer>
                     <v-menu style="margin-top:-27px;" offset-y nudge-left="80"> 
                          <v-btn
                           slot="activator"
                           icon
                           color="grey lighten-4"
                           round
                           depressed
                           small
                           style="font-size:12px" class="font-weigth-bold textfm1 textDefault"
                        >
                           <v-icon dark  color="grey darken-4" style="font-size:17px">mdi-dots-horizontal</v-icon>
                        </v-btn>
                        <v-list>
                        <v-list-tile
                           v-for="(item, index) in items"
                           :key="index"
                           @click="test"
                        >
                           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                        </v-list>
                     </v-menu>
                      
                     </v-layout>

                  </v-flex>

                  <v-flex class="ml-1" style="margin-top:-20px;" xs12  >
                        <v-textarea
                           v-if="newsfeed.data.message.length < 150" 
                           flat readonly background-color="transparent"
                           hide-details rows="1" solo auto-grow
                           class="newslineHeight"
                           style="font-size:25px !important"
                           v-model="newsfeed.data.message"
                        ></v-textarea>
                        <v-textarea
                           v-else-if="newsfeed.data.message.length > 150" 
                           flat readonly background-color="transparent"
                           hide-details rows="1" solo auto-grow
                           v-model="newsfeed.data.message"
                        ></v-textarea>
                     <!-- <v-divider class="grey lighten-3"> </v-divider> -->
                     <v-layout>
                        <v-flex xs3  >
                           <v-btn depressed color="transparent" class=" textDefault grey--text text--darken-1 textfm1" block>
                              <v-icon size="19" class="mr-1 --text text--darken-3" >mdi-thumb-up-outline</v-icon>
                              Like
                           </v-btn>
                        </v-flex>

                        <v-flex xs3  >
                           <v-btn depressed color="transparent" class=" textDefault grey--text text--darken-1 textfm1" block>
                              <v-icon size="19" class="--text text--darken-3 mr-1" >mdi-thumb-down-outline</v-icon>
                              Dislike
                           </v-btn>
                        </v-flex>

                        <!-- <v-flex xs3  >
                           <v-btn depressed color="transparent" class=" textDefault grey--text text--darken-1 textfm1" block>
                              <v-icon size="19" class="--text text--darken-3 mr-1" >mdi-thumb-down-outline</v-icon>
                              React
                           </v-btn>
                        </v-flex> -->

                        <v-flex xs3 >
                         <v-btn depressed color="transparent" class=" textDefault grey--text text--darken-1 textfm1" block>
                              <v-icon size="19" class="--text text--darken-3  mr-1" >mdi-comment-outline</v-icon>
                              Comment
                           </v-btn>
                        </v-flex>

                        <v-flex xs3 >
                           <v-btn depressed @click="reloadNews" color="transparent" class=" textDefault grey--text text--darken-1 textfm1" block>
                              <v-icon size="20" class="--text text--darken-3 mr-1" >mdi-share-outline</v-icon>
                              Share
                           </v-btn>
                        </v-flex>

                     </v-layout>
                  </v-flex>
                  <v-flex xs12>
                     <v-divider class="grey lighten-3"></v-divider>
                  </v-flex>

                  <v-flex xs12 class="mx-2 ">
                     <!-- <li>{{newsfeed}}</li> -->
                     <v-flex xs12 v-for="commented in newsfeed.commented  " :key="commented['.key']">
                        <v-layout>
                           <div  class=" mt-3">
                              <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                                 <v-badge color="white"  overlap class="jieBadgeNews">
                                    <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                                       <img :src="commented.photoUrl" alt="">
                                    </v-avatar>
                                 </v-badge>
                              </v-btn> 
                           </div>
                        
                           <v-flex xs11  style="margin-top:12px;margin-left:-4px" >
                              <p style="width: auto !important" class=" jie3Commented">
                                 <router-link class="blue--text text--darken-2 aJie" to="/profile/jiecel.marianne">{{commented.displayName}}</router-link>
                                 {{commented.data}}
                              </p>
                              <div class="caption ml-2" style="margin-top:-13px; ">
                                 <span>
                                 <a style="font-size:13px;" class="aJie grey--text mt-2  textfm1" @click="test"> Like </a> 
                                    <v-icon size="3px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                 </span>
                                 <span class="ml-3">
                                 <a style="font-size:13px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Dislike </a> 
                                    <v-icon size="3px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                 </span>
                                 <span class="ml-3">
                                 <a style="font-size:13px;" class=" aJie grey--text mt-2  textfm1" @click="test"> Reply </a> 
                                    <v-icon size="3px" class="ml-1" style="margin-top:9px;position:absolute">mdi-asterisk</v-icon>
                                 </span>
                                 <span class="ml-3">
                                 <span style="font-size:13px;" class=" grey--text mt-2  textfm1" > 1h </span> 
                                 </span>

                              </div>
                           </v-flex>

                        </v-layout>
                     </v-flex>
                  </v-flex>
                  <v-flex v-if="newsfeed.someoneComment.someone == true" xs12 class="mx-5 px-2 mt-2">
                     <div xs12>
                        <v-progress-circular
                           :width="1"
                           :size="13"
                           color="indigo lighten-1"
                           indeterminate
                        ></v-progress-circular>
                        <span  class="caption font-weight-thin grey--text textfm1">Someone is typing...</span>
                     </div>
                  </v-flex>
                  <v-flex xs12 class="mx-2">
                     <v-layout>
                        <v-card flat xs1 class=" mt-3">
                           <v-btn @click="profileMenu" color="" icon style="height:34px !important; width:34px !important;margin-top:-5px" class=" jieleftNav"  flat>
                              <v-badge color="white"  overlap class="jieBadgeNews">
                                 <!-- <span  slot="badge" class="" style="font-size:16px; border-radius: 50%; border: 4.5px solid #7CB342 ;"></span> -->
                                 <v-avatar class="mr-2 " color="grey lighten-3" size="32">
                                    <img :src="userData.photoUrl" alt="">
                                 </v-avatar>
                              </v-badge>
                           </v-btn> 
                        </v-card>

                        <!-- comment area -->
                       
                        <v-flex  xs11 style="margin-top:-7px;margin-left:-5px">
                           <v-form @submit.prevent="commentPost(newsfeed.keyIndex, userData, newsfeed.commentText)">
                              <v-text-field  
                                 background-color="grey lighten-5"
                                 single-line
                                 solo
                                 hint="Press Enter to comment"
                                 flat
                                 height="32"
                                 full-width
                                 v-model="newsfeed.commentText"
                                 :loading="false"
                                 placeholder="Write something here.."
                                 @blur="blurPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                 @input="inputPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                 @click:append="commentPost(newsfeed.keyIndex, userData, newsfeed.commentText)"
                                 append-icon="mdi-send"
                                 style="font-size:13px"
                                 class="font-weight-thin-light jie3 textfm1  "
                              ></v-text-field>
                           </v-form>
                        </v-flex>
                      
                     </v-layout>
                  </v-flex>
               </v-layout>
            </v-card>
            <infinite-loading @infinite="infiniteHandler" v-if="availableNews"></infinite-loading>
            <!-- <v-card class="my-2" >
               <v-card-media
                  height=""
               >
                  <v-container fill-height fluid>
                     <v-layout fill-height>
                     <v-flex>
                        <v-btn small block @click="scrollLoadNews">Load More</v-btn>
                     </v-flex>
                     </v-layout>
                  </v-container>
               </v-card-media>
            </v-card> -->
         </v-flex>

<!-- xs12 sm12 md8 lg7 -->
 <!-- xs0 sm0 md4 lg4 -->
         <v-flex  class="md4 hidden-sm-and-down" >
            <v-card flat class="grey lighten-4 my-1" height="50px">
            </v-card>
            <v-card flat  class="grey lighten-4 mb-2" height="150px">
            </v-card>
         </v-flex>
      </v-layout>
   </v-card>

</template>
<script>
import { db, app, order } from '../../firebase.js';

import InfiniteLoading from 'vue-infinite-loading';

export default {  
   components: {
       InfiniteLoading
   },
   firebase: function () {
      return {
         // newsfeeds: newsfeedRef,
      }
   },
   data: () => ({
      offsetTop: 0,
      timeAgoFormat: "",
      availableNews: true,
      newsFeedsValueRef: [],
      newsFeedLimit: 2,
      timeDisplay: '',
      greet: '',
      worldTime: [],
      whatisFunction: false,
      whatisClass: "",
      bottomNav: 'recent',
      whatisFlex: 'xs7',
      userComment: '',
      timestamp: '',
      items: [
        { title: 'Op jie1' },
        { title: 'Op jie2' },
      ],
      postedData: { 
         message:'', 
         image:''
      },
  }),
   computed: {
      reloadNewsComputed() {
         var number1 = true
         if(number1) {
            alert("Reload")
         } {
            alert("Dont")
         }
      },
      newsfeeds() {
         // return this.newsFeedsValueRef;
         return _.orderBy(this.newsFeedsValueRef, 'order');
      },
      userData() {
         return this.$store.getters.accountLoginData.user
      },
      firstname() {
         var getFn = this.$store.getters.accountLoginData.user.displayName
         var firstname = getFn.split(" ");
         return firstname[0];
      },
      postedDataNews() {
         if (this.postedData.message == "") return true
         this.postedData.message != ""
         return false
      },
   },
   methods: {
      addDiv() {
         
      },
      reloadNews() {
         let vm = this
         vm.newsFeedLimit = 1 ;
         var newsFeedsValue  = db.ref('Newsfeed').limitToLast(vm.newsFeedLimit);
         newsFeedsValue.on('value', function(gotData) {
            let keys = Object.keys(gotData.val())
            // console.log(keys)
            // gotData.val().text = "test"
            vm.newsFeedsValueRef = gotData.val()
            keys.forEach( function (key) {
            //  console.log(gotData.val()[key], key)
               vm.newsFeedsValueRef[key].keyIndex = key
            })
         })
      },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
        console.log(this.offsetTop)
      },
      infiniteHandler($state) {
         let vm = this;
         vm.newsFeedLimit += 4;
         // setTimeout(() => {
            var newsFeedsValue  = db.ref('Newsfeed').limitToLast(vm.newsFeedLimit);
            newsFeedsValue.on('value', function(gotData) {
               let keys = Object.keys(gotData.val())
               // console.log(keys)
               // gotData.val().text = "test"
               vm.newsFeedsValueRef = gotData.val()
               keys.forEach( function (key) {
               //  console.log(gotData.val()[key], key)
                  vm.newsFeedsValueRef[key].keyIndex = key
               })

               if(vm.newsfeeds.length == vm.newsFeedLimit){
                  vm.availableNews=true
                  $state.loaded()
               }else{
                  vm.availableNews=false
               }

               });
         // }, 1000);
      },
      test() {
         alert("success")
      },
      blurPost(id,user,commentText) {
         let vm = this
         db.ref(`Newsfeed/${id}/`).child('someoneComment').set({
            someone:false
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            // Data saved successfully!
         }
         });
      },
      inputPost(id,user,commentText) {
         let vm = this
         db.ref(`Newsfeed/${id}/`).child('someoneComment').set({
            someone:true
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            // Data saved successfully!
         }
         });
      },
      commentPost(id,user,commentText) {
         let vm = this
         db.ref(`Newsfeed/${id}/commented`).push().set({
            userId: user['ckcm-network_token_id'],
            displayName: user.displayName,
            data: commentText,
            photoUrl: user.photoUrl,
            timestamp: "",
         }, function(error) {
         if (error) {
            console.log(error)
            // The write failed...r
         } else {
            // Data saved successfully!
         }
         });
      },
      makePost(user) {
         axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
            .then((response) =>{
            // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            var now= response.data.time_zone.current_time
            let vm = this
            // var now = moment().format("MMMM D YYYY, kk:mm:ss");
            // console.log(now)
            db.ref('Newsfeed/' ).push().set({
               userId: user['ckcm-network_token_id'],
               displayName: user.displayName,
               data: vm.postedData,
               photoUrl: user.photoUrl,
               timestamp:  now,
               someoneComment: false,
               commentText: "",
               order: vm.orderValue + 1 
            }, function(error) {
            if (error) {
               console.log(error)
               // The write failed...r
            } else {
               db.ref('N_order/').set ({
                  newsfeedOrder: vm.orderValue-1
               })
               vm.postedData.message = "";
               // Data saved successfully!
            }
            });
         });

      },
      whatisFunctionMethod () {
         this.whatisClass = "mb-1 elevation-18"
         this.whatisFunction = true
         this.whatisFlex = "xs11"
      },
      whatisFunctionMethodFalse () {
         if(this.postedData.message == "") {
            this.whatisFunction = false
            this.whatisClass = ""
            this.whatisFlex = "xs7"
         } else {
            
         }
      },
      profileMenu () {
         const displayName= this.$store.getters.accountLoginData.user.displayName;
         const user = displayName.toLocaleLowerCase().replace(/[ ]/g, ".");
         this.$router.push({
            path: `/profile/${user}`,
         });
      },
      profileMenuFriend (displayName) {
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
                  vm.timestamp =  vm.worldTime.time_zone.current_time
                  let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
                  let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
                     if ( a == 'pm' && hour >= 1 && hour <= 5 || a == 'pm' && hour == 12) {
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

      order.on("value",  function(snapshot) {
         vm.orderValue = snapshot.val();
      }, function (errorObject) {
         console.log("Naa ko sa created 1 :The read failed: " + errorObject.code);
      });


      axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
         .then((response) =>{
            vm.worldTime=response.data
            vm.timeDisplay = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h:mma');
            vm.timestamp =  vm.worldTime.time_zone.current_time
            vm.timeAgoFormat = moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
            let hour = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('h');
            let a = moment(vm.worldTime.time_zone.current_time).tz(vm.worldTime.time_zone.name).format('a');
               if ( a == 'pm' && hour >= 1 && hour <= 5 || a == 'pm' && hour == 12) {
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
