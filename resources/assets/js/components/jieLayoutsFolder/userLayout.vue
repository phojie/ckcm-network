<template>
<!-- :value="leftnavDrawer"  -->
<!-- <v-navigation-drawer  :value="!leftnavDrawer" stateless permanent flat width="80" clipped app></v-navigation-drawer> -->
   <v-app class="grey lighten-3"  style="overflow:hidden !important" >
    
      <!-- stateless permanent -->
      <v-navigation-drawer right class="transparent "   width="220" style="overflow: hidden !important;" clipped app>
         <v-card flat color=""   style="padding-top:7px !important" class=" friendscroll scrollbar-primary ">
            <v-menu
               :close-on-content-click="false"
               full-width
               open-on-hover
               allow-overflow
               nudge-left="240"
               min-width="240"
               max-width="240"
               close-delay="50"
               v-for="friendList in users" :key="friendList.id" v-if="friendList['.key'] != userData['ckcm-network_token_id']"
               bottom
               app
            >
            <!-- @click="profileMenuFriend(friendList.displayName)"  -->
            <v-btn slot="activator" style="margin-top:-6px"    color="grey" class=" jieleftNav" block flat>
               <v-badge color="white"  overlap class="jieBadgeFriend">
                  <span v-if="friendList.status == 'online'" :key="friendList['.key']" slot="badge" style="font-size:16px; border-radius: 50%; border: 4px solid #7CB342 ;"></span>
                  <span  v-if="friendList.status != 'online'" :key="friendList['.key']" slot="badge" style="font-size:16px; border-radius: 50%; border: 4px solid #E57373 ;"></span>
                  <v-avatar   class="mr-2"  color="grey lighten-3" size="28">
                     <img :src="friendList.photoUrl" alt="">
                  </v-avatar>
               </v-badge>
               <!-- <img :src="userData.photoUrl" alt=""> -->
               <v-toolbar-title style="margin-left:-2px !important;font-size:14px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-3 "> 
                  {{friendList.displayName}}
               </v-toolbar-title>
               <v-spacer></v-spacer>
               <div style="font-size:11px" class="textfm2 textDefault">2m</div>
            </v-btn>
               <v-card >

                 
                  <v-layout  row wrap justify-center align-center align-content-center>
                     <v-flex xs12 class="grey lighten-5 pa-3 ">
                        <v-layout  row wrap justify-center align-center align-content-center>
                           <v-badge color="white"  overlap class="jieBadgeFriendMessage">
                              <span v-if="friendList.status == 'online'" :key="friendList['.key']" slot="badge" style="border-radius: 50%; border: 6px solid #7CB342 ;"></span>
                              <span v-if="friendList.status != 'online'" :key="friendList['.key']" slot="badge" style="border-radius: 50%; border: 6px solid #E57373 ;"></span>
                              <v-avatar   color="grey lighten-3" size="70">
                                 <img :src="friendList.photoUrl+'?height=500'" alt="">
                              </v-avatar>
                           </v-badge>
                        </v-layout>
                        <div class="text-xs-center mt-1">
                           <div class="subheading font-weight-bold textDefault textfm1"> {{friendList.displayName}}</div>
                           <div class="body-1 textDefault textfm1"> Caption </div>
                        </div>
                     </v-flex>
                     <!-- 170e3f54 -->

                     <v-flex xs12 class="pa-2">
                        <div class="caption font-weight-bold textDefault textfm1 grey--text"> ROLES </div>
                        <div class="caption font-weight-bold textDefault textfm1 grey--text"> NOTE </div>
                        <!-- <v-chip outline class="caption" small color="aqua" text-color="white">
                           <v-icon size="15px">mdi-circle</v-icon>
                           Primary</v-chip> -->
                     </v-flex>
                     <!-- <v-flex xs12 class="mx-1" >
                        <div class="text-xs-left">
                           <v-card height="200" >
                              <v-layout row wrap>
                              <v-flex>
                                 <div class="text-xs-right">
                                    <v-chip small size="30" >
                                       Trevor Hansen Proident dolor fugiat ipsum commodo est reprehenderit eiusmod voluptate excepteur id veniam.
                                    </v-chip>
                                    <v-avatar small right>
                                       <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                                    </v-avatar>
                                 </div>
                              </v-flex>
                             
                              </v-layout>
                           </v-card>
                        </div>
                           <v-spacer></v-spacer>
                     </v-flex> -->
                     <v-flex xs12 >
                        <v-divider class="mt-4"></v-divider>
                     </v-flex>
                     <!-- <v-flex xs2>
                        <v-avatar class="ml-2"  color="grey lighten-3" size="32">
                           <img :src="userData.photoUrl" alt="">
                        </v-avatar>
                     </v-flex>
                     <v-flex xs10 class="" style="margin-left:-15px">
                           <v-textarea
                              height="100"
                              background-color="transparent"
                              box
                              outline
                              hide-details
                              color="primary"
                              :label="`Message @ ${friendList.displayName}`"
                              class="textfm1  textDefault"
                              style="font-size:16px"
                              flat
                           ></v-textarea>
                     </v-flex> -->
                  </v-layout>
               </v-card>
               <!-- <v-card flat class="transparent" >
                  <v-layout>
                  <v-flex xs11 >
                  <v-list>
                     <v-list-tile avatar>
                        <v-list-tile-avatar>
                        <img :src="friendList.photoUrl">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                        <v-list-tile-title class="textDefault textfm1">{{friendList.displayName}}</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-justify textDefault textfm1">BSCS</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                        <v-btn
                           :class="fav ? 'red--text' : ''"
                           icon
                           @click="fav = !fav"
                        >
                           <v-icon>favorite</v-icon>
                        </v-btn>
                        </v-list-tile-action>
                     </v-list-tile>
                  </v-list>
                  <v-divider></v-divider>

                  <v-list>
                     <v-list-tile>
                        <v-list-tile-action>
                        <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-title>Enable messages</v-list-tile-title>
                     </v-list-tile>

                     <v-list-tile>
                        <v-list-tile-action>
                        <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-title>Enable hints</v-list-tile-title>
                     </v-list-tile>
                  </v-list>

                  <v-card-actions>
                     <v-spacer></v-spacer>

                     <v-btn flat @click="menu = false">Cancel</v-btn>
                     <v-btn color="primary" flat @click="menu = false">Save</v-btn>
                  </v-card-actions>
                  </v-flex>
                  <v-flex class="transparent">
                     <div class="mt-2" style="
                     width: 0;
                     height: 0;
                     border-top: 10px solid transparent;
                     border-left: 20px solid green;
                     border-bottom: 10px solid transparent;"
                     ></div>
                  </v-flex>
                  </v-layout>
               </v-card> -->
            </v-menu>


         </v-card>
         <v-card flat color="white" class="friendscroll scrollbar-primary ">
            <v-text-field
               prepend-inner-icon="search"
               append-icon="mdi-settings"
               color="primary"
               @click:append="test"
               clearable
               style="position:fixed;bottom:0;margin-bottom:-30px;font-size:14px;width:100%"
               class="textfm1 searchfriend"
               placeholder="Search"
               solo
            ></v-text-field>
         </v-card>

      </v-navigation-drawer>

      <v-navigation-drawer :value="leftnavDrawer" class=" transparent lighten-3 scrollbar-secondary " floating  width="300" style="overflow: auto !important;" clipped app>
         <v-card flat color="transparent" class="mt-2 ml-5">
            <v-card flat class="pb-2">
                  <!-- src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/29571261_1589949324387758_1953653254138362805_n.jpg?_nc_cat=0&oh=fbd784445c209ed004d49b0ea51cba32&oe=5BCADF30" -->
               <v-card-media
                  class="blue lighten-2 jieSvgBg1"
                  height="110px"
               >
               </v-card-media>
               <div class="ml-4" style="position:absolute !important; margin-top:-30px !important" >
                  <v-avatar size="60" class="white">
                     <img
                        class="white"
                        style="border:1px solid white;border-radius:50%;height:60px !important;width:60px !important;padding:2px !important"
                        :src="userData.photoUrl+'?height=10000'"
                        :alt="firstname"
                     >
                  </v-avatar>
                  <div style="font-size:14px;margin-top:-32px !important;margin-left:60px" class="font-weight-bold textDefault" >
                     {{userData.displayName}}
                  </div>
                  <div style="margin-top:-5px !important;margin-left:60px" class="caption font-weight-regular grey--text textlower" >
                   @{{firstname}}
                  </div>
               </div>
               <div style="font-size:10px  !important;margin-top:40px" class="ml-3 font-weight-black  blue--text text--darken-1">
                  ROLES | ROLE
               </div>
               <v-layout class="mt-1 mx-2" row wrap>
                  <v-flex>
                     <v-chip small color="blue caption lighten-5" text-color="indigo">
                        Vice-President
                     </v-chip>
                     <v-chip small color="blue caption lighten-5" text-color="teal">
                        Student
                     </v-chip>
                     <v-chip small color="blue caption lighten-5" text-color="purple">
                        Club Moderator
                     </v-chip>
                  </v-flex>
               </v-layout>
            </v-card>

            <v-card flat style="border-left:2px solid #64B5F6 !important" color="" class="pa-1 mt-1">
               <v-btn to="/" style="padding-left:9px;"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"  class=" jieleftNav" flat depressed block >
                  <v-avatar tile class="mr-2" color="transparent" size="20px">
                     <img src="https://png.icons8.com/ios/50/000000/rss.png">
                  </v-avatar>
                  <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> News Feed </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" >24</div>
               </v-btn>
               <v-btn to="/messages" style="padding-left:9px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"   class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="transparent" size="20px">
                     <img src="https://png.icons8.com/ios/50/000000/speech-bubble-with-dots.png">
                  </v-avatar>
                  <div style="font-size:12px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Messaging </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" >2</div>
               </v-btn>

               <v-btn to="/announcement" style="padding-left:9px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"   class=" jieleftNav" flat depressed block >
                     <v-avatar tile class="mr-2" color="transparent" size="20px">
                     <img src="https://png.icons8.com/ios/50/000000/billboard.png">
                  </v-avatar>
                  <div style="font-size:12px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Announcement </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" >2</div>
               </v-btn>

               <v-btn :to="`/welcome?sk=${code}`" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"  class=" jieleftNav" flat depressed block >
                  <v-avatar tile class="mr-2" color="grey--after" size="20px">
                     <img src="/favicon.ico">
                  </v-avatar>
                  <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Welcome </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" ></div>
               </v-btn>

               <v-divider></v-divider>
               <div class="ml-2 mt-1 caption font-weight-black grey--text" ><span class="blue--text">My</span>Apps</div>
               <v-btn :to="code" style="padding-left:10px"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"  class=" jieleftNav" flat depressed block >
                  <v-avatar tile class="mr-2" color="grey--after" size="20px">
                     <img src="https://png.icons8.com/ios/50/000000/interior-accesories.png">
                  </v-avatar>
                  <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> VP-Office </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" ></div>
               </v-btn>
               <v-btn :to="code" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  color="blue lighten-1"  class=" jieleftNav" flat depressed block >
                  <v-avatar tile class="mr-2" color="grey--after" size="20px">
                     <img src="https://png.icons8.com/ios/50/000000/home-automation.png">
                  </v-avatar>
                  <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Club-Office </div> 
                  <v-spacer></v-spacer>
                  <div class="textfm1 caption" ></div>
               </v-btn>
               
            </v-card>
            <v-divider></v-divider>
            <v-card flat class="grey lighten-3 mt-1  ">
               <v-list class="mx-2">
                  <div class="font-weight-bold caption brown--text textupper">TERMS & POLICIES</div>
                      <v-list-tile-content style="font-size:12px" class="ml-3 ">
                       <v-list-tile-title > <router-link class="aJie grey--text" to="#"> Terms of Service </router-link></v-list-tile-title>
                       <v-list-tile-title > <router-link class="aJie grey--text" to="#"> Privacy Statement </router-link></v-list-tile-title>
                       <v-list-tile-title > <router-link class="aJie grey--text" to="#"> Ckcm Cloud Security </router-link></v-list-tile-title>
                     </v-list-tile-content>
                  <div class="mt-2 font-weight-bold caption green--text ">&copy; {{ new Date().getFullYear() }} Ckcm-Network</div>
                      <!-- <v-list-tile-content style="font-size:12px" class="ml-3 ">
                       <v-list-tile-title > <a class="aJie grey--text" href="http://ckcmnetwork.me"> www.ckcmnetwork.me </a></v-list-tile-title>
                       <v-list-tile-title > <a class="aJie grey--text" to="terms" href="https://ckcm-network.com"> www.ckcm-network.com </a></v-list-tile-title>
                     </v-list-tile-content> -->
                </v-list>
            </v-card>
         </v-card>
      </v-navigation-drawer>
      <!-- jieLandingBg -->
      <!-- mycolor3 -->
      <v-toolbar   height="43px" clipped-left dark class="mr-5 blue darken-2 jieLandingBg2" flat app dense >
         <!-- <v-toolbar-side-icon class="" @click="(mycolor1) => (showNav = !showNav)"></v-toolbar-side-icon> -->
         <v-toolbar-title class="primaryColortext--text subheading ">
            <!-- <span class="subheading white--text">Christ the King Network</span> -->
         </v-toolbar-title>
            <!-- solo-inverted -->
         <v-spacer></v-spacer>
         <!-- <v-menu  slot="activator"  offset-y nudge-left="44px"> -->
         
            <v-flex :class="md2" :style="extendSearch" align-start>
               <v-text-field  
                  @focus="() => (md2 = 'md4', extendSearch = 'transition: .5s')"
                  @blur="() => (md2 = 'md3')"
                  @input="searchInput"
                  single-line
                  solo
                  light
                  flat
                  height="28"
                  full-width
                  :loading="false"
                  placeholder="Search something.."
                  append-icon="search"
                  style="font-size:13px"
                  class="font-weight-thin-light jie textfm1  "
               ></v-text-field>
             <!-- <div class="" style="
                     margin-left:56.5px;
                     width: 0;
                     height: 0;
                     border-left: 6px solid transparent;
                     border-right: 6px solid transparent;
                     border-bottom: 6px solid white;">
                  </div>
               <v-card>
                  <v-list dense>
                     <v-list-tile @click=""
                     >
                        <v-list-tile-title class="textfm1" >
                           <v-icon small >mdi-person</v-icon>
                              Loading...
                        </v-list-tile-title>
                     </v-list-tile>
                  </v-list>
               </v-card> -->
            </v-flex>
         <!-- </v-menu> -->

         <v-divider vertical inset ></v-divider>
         
            <v-btn small @click="test" to="/" flat style="margin-right:-5px  !important;" >
               <v-icon  style="font-size:19px !important">mdi-home</v-icon>
               <div class=" ml-1 white--text caption textDefault textfm1"> Home </div> 
            </v-btn>
            <v-btn style="margin-right:-5px !important;" icon>
               <v-icon style="font-size:18px !important">mdi-apps</v-icon>
            </v-btn>
            <v-btn style="margin-right:-5px !important;" icon>
               <v-icon style="font-size:18px !important">mdi-account-switch</v-icon>
            </v-btn>
            <v-btn style="margin-right:-5px !important;" icon>
               <v-icon style="font-size:18px !important">mdi-forum</v-icon>
            </v-btn>
            
            
            <v-tooltip color="tooltipColor" bottom >
            
               <span class="textfm1" style="font-size:11.5px !important">Notifications</span>
               <v-menu flat slot="activator"  offset-y nudge-left="44px">
                     <v-btn slot="activator" red  icon>
                        <!-- <v-badge color="red" >
                           <span slot="badge" class="textfm1" style="font-size:10px">2</span>
                           <v-icon style="font-size:17px !important">mdi-bell</v-icon>
                        </v-badge> -->
                        <v-badge color="red" overlap class="jieBadge">
                           <span  slot="badge" class="textfm1" style="font-size:11px">3</span>
                           <v-avatar size="27px"
                           color="transparent red--after"
                           >
                           <v-icon style="font-size:18px !important">mdi-earth</v-icon>
                           </v-avatar>
                        </v-badge>
                     </v-btn>
                  
                     <v-flex reverse>
                        <div class="" style="
                        margin-left:56.5px;
                        width: 0;
                        height: 0;
                        border-left: 6px solid transparent;
                        border-right: 6px solid transparent;
                        border-bottom: 6px solid white;"
                        ></div>
                     </v-flex> 
                  <v-card>
                     <v-list dense>
                        <!-- v-for="(item, index) in items" -->
                        <v-list-tile 
                        >
                           <v-list-tile-title class="textfm1" >
                              <v-icon small >mdi-person</v-icon>
                                 wla pa
                           </v-list-tile-title>
                        </v-list-tile>
                     </v-list>
                  </v-card>
               </v-menu>
            </v-tooltip>

         <v-menu offset-y >
               <!-- color="white" flat  -->
            <v-btn  slot="activator" style="min-width:140px" flat ripple>
               <!-- Dropdown -->
               <v-avatar class="mr-1 " color="red--after" size="25px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div class="font-weight-thin mr-2 white--text caption  textDefault textfm1"> Hello, {{firstname}}</div> 
               <v-spacer></v-spacer>
                  <v-icon style="font-size:15px !important" color="primary">mdi-menu</v-icon>
            </v-btn>

               <v-layout style="margin-right:17px !important" justify-end >
                  <div class="" style="
                  width: 0;
                  height: 0;
                  border-left: 6px solid transparent;
                  border-right: 6px solid transparent;
                  border-bottom: 6px solid white;"
                  ></div>
               </v-layout> 
            <v-card >
               <v-list dense>
                  <!-- v-for="(item, index) in items" -->
                  <v-list-tile @click="profileMenu"
                  >
                     <v-list-tile-title class="textfm1" >
                        <v-icon small >mdi-account</v-icon>
                        Profile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                     </v-list-tile-title>
                  </v-list-tile>

                  <v-list-tile
                  >
                     <v-list-tile-title class="textfm1" >
                        <v-icon small >mdi-settings</v-icon>
                        Settings   
                     </v-list-tile-title>
                  </v-list-tile>

                  <v-list-tile @click="logout"
                  >
                     <v-list-tile-title class="textfm1" >
                        <v-icon small >mdi-logout</v-icon>
                        Logout   
                     </v-list-tile-title>
                  </v-list-tile>
               </v-list>
            </v-card>
         </v-menu>
      </v-toolbar>
      
      <v-content class="" >
         <!-- <v-container class="" app fluid> -->
            <router-view></router-view>
         <!-- </v-container> -->
      </v-content>

      <!-- <v-content class="purple"  style="padding-top:0px !important;height:340px;width:100%;position:absolute;right:0;bottom:0 !important;" >
         <v-layout wrap justify-end class="pr-3">
               <v-card width="275px" class="blue mr-3" height="540px">
                  tester
               </v-card>
              <v-card width="275px" class="green mr-3" height="540px">
                  tester
               </v-card>
               <v-card width="275px" class="red mr-3" height="540px">
                  tester
               </v-card>
         </v-layout>
      </v-content> -->

      <!-- <v-content class="purple"  style="padding-top:0px !important;height:340px;width:30%;position:absolute;right:0;bottom:0 !important;" >
         <v-layout wrap justify-end class="pr-3">
               <v-card width="275px" class="blue mr-3" height="540px">
                  tester
               </v-card>
         </v-layout>
      </v-content> -->

      <!-- <v-footer app></v-footer> -->
   </v-app>
</template>

<script>
import { usersRef } from '../../firebase.js'
export default {
   firebase: {
      users : usersRef,
   },
   data: () => ({
      mini:true,
      showNav:true,
      progressDone: false,
      md2: "md3",
      extendSearch: "",
      friendLists: []
,      items: [
         { title: 'Home', icon: 'dashboard' },
         { title: 'About', icon: 'question_answer' }
      ],
      right: null,

      fav: true,
      menu: false,
      message: false,
      hints: true
   }),
   methods: {
      searchInput() {

      },
      test() {
         alert("success tes")
      },
      logout () {
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         this.$store.commit('logout');
         this.$router.push(`/?stype=lo&jlou=jie_ckcm-code=${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
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
   computed: {
      userData () {
         return this.$store.getters.accountLoginData.user
      },
      leftnavDrawer () {
         return this.$store.getters.leftnavDrawer
      },
      code () {
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         return ckcmcode;
     },
      firstname() {
         let getFn = this.$store.getters.accountLoginData.user.displayName
         let firstname = getFn.split(" ");
         return firstname[0];
      }
      // userFire () {
      //    var starCountRef = firebase.database().ref('users/' + "7J9naFQsS8M3QZvEdlmyX4Umr402" + '/status');
      //    starCountRef.on('value', function(snapshot) {
      //    updateStarCount(postElement, snapshot.val());
      //    });
      //    return starCountRef
      // }
      // friendLists() {
        
      //    return this.$store.getters.friendList
      // }
   },
   mounted() {
      this.$store.dispatch("friendList")
   },
   created() {
      // this.$Progress.start()
   }
}
</script>

<style >
/* html {
   overflow: hidden !important; 
} */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
