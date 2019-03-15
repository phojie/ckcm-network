<template>
<!-- :value="leftnavDrawer"  -->
<!-- <v-navigation-drawer  :value="!leftnavDrawer" stateless permanent flat width="80" clipped app></v-navigation-drawer> -->
   <v-app>
      <v-app v-if="!stateLoading"   style="background:#e6ecf0;overflow:hidden !important" >
            <!-- stateless permanent -->
               
            <v-navigation-drawer :value="rightnavDrawer"  stateless right class="transparent "   width="220" style="overflow: hidden !important;" clipped app>
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
                     open-delay="1000"
                     bottom
                     app
                     v-for="friendList in users" 
                     :key="friendList.id" 
                  >
                     <!-- v-if="friendList['.key'] != userData['ckcm-network_token_id']" -->

             
                  <!-- @click="profileMenuFriend(friendList.displayName)"  -->
                  <v-btn  @click="addToChat(friendList['.key'], friendList.displayName)" slot="activator" style="margin-top:-6px"    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <span v-if="friendList.status == 'online'" :key="friendList['.key']" slot="badge" style="font-size:16px; border-radius: 50%; border: 4px solid #7CB342 ;"></span>
                        <span  v-if="friendList.status != 'online'" :key="friendList['.key']" slot="badge" style="font-size:16px; border-radius: 50%; border: 4px solid #E57373 ;"></span>
                        <v-avatar   class="mr-2"  color="grey lighten-3" size="28">
                           <img :src="friendList.photoUrl" alt="">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                        {{friendList.displayName}}
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
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


                  <v-toolbar-title style="margin-left:12px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-3 "> 
                     Subjects Conversation    
                  </v-toolbar-title>

                  <v-btn style=""    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <v-avatar    class="mr-2"  color="" size="20">
                           <img src="https://png.icons8.com/ios/50/795548/physics.png">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                        Physics II
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
                     <div style="font-size:11px" class="textfm2 textDefault">24</div>
                  </v-btn>
                  <v-btn style=""    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <v-avatar  tile  class="mr-2"  color="" size="20">
                           <img src="https://png.icons8.com/ios/50/9C27B0/mind-map.png">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                     Artificial Intelligence
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
                     <div style="font-size:11px" class="textfm2 textDefault">6</div>
                  </v-btn>
                  <v-btn style=""    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <v-avatar  tile  class="mr-2"  color="" size="20">
                           <img src="https://png.icons8.com/ios/50/FFCC80/geography.png">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                     Web Base 
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
                     <div style="font-size:11px" class="textfm2 textDefault">14</div>
                  </v-btn>
                  <v-btn style=""    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <v-avatar  tile class="mr-2"  color="" size="20">
                           <img src="https://png.icons8.com/ios/50/009688/trigonometry.png">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                        Trigonometry
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
                     <div style="font-size:11px" class="textfm2 textDefault">50</div>
                  </v-btn>

                  <v-btn style=""    color="grey" class=" jieleftNav" block flat>
                     <v-badge color="white"  overlap class="jieBadgeFriend">
                        <v-avatar  tile  class="mr-2"  color="" size="20">
                           <img src="https://png.icons8.com/ios/50/4CAF50/test-tube.png">
                        </v-avatar>
                     </v-badge>
                     <!-- <img :src="userData.photoUrl" alt=""> -->
                     <v-toolbar-title style="margin-left:-2px !important;font-size:13px !important; letter-spacing:.5px;" class="textDefault textfm1 grey--text text--darken-1 "> 
                     Science
                     </v-toolbar-title>
                     <v-spacer></v-spacer>
                     <div style="font-size:11px" class="textfm2 textDefault">20</div>
                  </v-btn>

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

            <v-navigation-drawer :value="leftnavDrawer" stateless  class=" transparent lighten-3 " floating  width="300" style="overflow: hidden !important;" clipped app>
               <v-card flat color="transparent"  class=" leftNavscroll scrollbar-primary mt-2 ml-5">
                  <v-card flat class="pb-2">
                        <!-- jieCkcmbg -->
                        <!-- src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/29571261_1589949324387758_1953653254138362805_n.jpg?_nc_cat=0&oh=fbd784445c209ed004d49b0ea51cba32&oe=5BCADF30" -->
                     <v-img
                        :class="userFData.themeColor" class=" jieSvgBg1"
                        height="80px"
                        :src="userFData.coverUrl"
                     >
                     </v-img>
                     <div class="ml-4" style="position:absolute !important; margin-top:-30px !important" >
                        <v-avatar size="60" class="white">
                           <img
                              class="white"
                              style="border:1px solid white;border-radius:50%;height:60px !important;width:60px !important;padding:2px !important"
                              :src="userFData.photoUrl+'?height=10000'"
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
                     <div style="font-size:10px  !important;margin-top:40px" :class="`${userFData.themeColor}--text`" class="ml-3 font-weight-black  text--darken-1">
                        ROLES 
                        <!-- | ROLE -->
                     </div>
                     <v-layout class="mt-1 mx-2" row wrap>
                        <v-flex>
                           <v-chip small :class="userFData.themeColor" color=" caption lighten-5" text-color="green">
                              Registrar
                           </v-chip>
                           <v-chip small :class="userFData.themeColor"  color=" caption lighten-5" text-color="indigo">
                              Vice-President
                           </v-chip>
                           <v-chip small :class="userFData.themeColor"  color=" caption lighten-5" text-color="orange">
                              Instructor
                           </v-chip>
                           <v-chip small :class="userFData.themeColor"  color=" caption lighten-5" text-color="teal">
                              Student
                           </v-chip>
                           <v-chip small :class="userFData.themeColor" color=" caption lighten-5" text-color="purple">
                              Club Moderator
                           </v-chip>
                        </v-flex>
                     </v-layout>
                  </v-card>
                  <!-- <v-card v-if="userFData.type == 1" flat  color="" class="pa-1 mt-1">
                     <v-btn to="enrollnow" style="padding-left:9px;"  class='white--text jieleftNav' :color="`${userFData.themeColor} lighten-1`" flat depressed block >
                        <v-avatar tile class="mr-2" color="transparent" size="20px">
                           <img src="https://img.icons8.com/ios/50/000000/curriculum.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 textDefault "> Get enrolled today! </div> 
                        <v-spacer></v-spacer>
                        <v-avatar tile class="mr-2" color="transparent" size="20px">
                           <img src="https://img.icons8.com/color/50/000000/high-priority.png">
                        </v-avatar>
                     </v-btn>
                  </v-card> -->
                     <!-- style="border-left:2px solid #4CAF50 !important" -->
                  <v-card flat  color="" class="pa-1 mt-1">
                     <v-btn  to="/" style="padding-left:9px;"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="transparent" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/rss.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> News Feed </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" >24</div>
                     </v-btn>
                     <v-btn  to="/messages" style="padding-left:9px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"   class=" jieleftNav" flat depressed block >
                           <v-avatar tile class="mr-2" color="transparent" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/speech-bubble-with-dots.png">
                        </v-avatar>
                        <div style="font-size:12px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Messaging </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" >2</div>
                     </v-btn>

                     <v-btn to="/announcement" style="padding-left:9px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                           <v-avatar tile class="mr-2" color="transparent" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/billboard.png">
                        </v-avatar>
                        <div style="font-size:12px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Announcement </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" >2</div>
                     </v-btn>

                     <v-btn :to="`/welcome?sk=${code}`" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="/favicon.ico">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Welcome </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>

                     <v-divider></v-divider>
                     <div class="ml-2 mt-1 caption font-weight-black grey--text" ><span :class="`${userFData.themeColor}--text`">My</span>Apps</div>
                     <v-btn to="" style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/check-in-desk.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Registrar-Office </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                     <v-btn to="vpaaoffice" style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://img.icons8.com/ios/50/000000/saving-book.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Academic Affairs-Office </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                     <v-btn to="vpoffice" style="padding-left:10px"  :ripple="{ class: 'white--text' }"  :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/interior-accesories.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> VP-Office </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                     <v-btn :to="code" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`"  class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/home-automation.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Club-Office </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                     <v-btn :to="code" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/book-shelf.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Subjects </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                     <v-btn :to="code" style="padding-left:10px;margin-top:-6px"  :ripple="{ class: 'white--text' }" :color="`${userFData.themeColor} lighten-1`" class=" jieleftNav" flat depressed block >
                        <v-avatar tile class="mr-2" color="grey--after" size="20px">
                           <img src="https://png.icons8.com/ios/50/000000/report-card.png">
                        </v-avatar>
                        <div style="font-size:12px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault "> Results Card </div> 
                        <v-spacer></v-spacer>
                        <div class="textfm1 caption" ></div>
                     </v-btn>
                  </v-card>
                  <!-- <v-card flat class="transparent">
                     <v-list class="mx-2">
                        <div class="font-weight-bold brown--text textupper" style="font-size:10px" > TERMS & POLICIES</div>
                           <v-list-tile-content style="font-size:11px">
                              <v-list-tile-title > 
                                 <v-dialog
                                    v-model="term1"
                                    width="500"
                                 >
                                    <router-link slot="activator" to="" class="aJie grey--text"> Terms of Service </router-link>
                                    <v-card>
                                    <v-card-title
                                       class="headline grey lighten-2"
                                       primary-title
                                    >
                                       Terms of Service
                                    </v-card-title>

                                    <v-card-text>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                       <v-spacer></v-spacer>
                                       <v-btn
                                          color="primary"
                                          flat
                                          @click="term1 = false"
                                       >
                                          I accept
                                       </v-btn>
                                    </v-card-actions>
                                    </v-card>
                                 </v-dialog>
                              </v-list-tile-title>
                              <v-list-tile-title > 
                                 <v-dialog
                                    v-model="term2"
                                    width="500"
                                 >
                                    <router-link slot="activator" to="" class="aJie grey--text"> Privacy Statement </router-link>
                                    <v-card>
                                    <v-card-title
                                       class="headline grey lighten-2"
                                       primary-title
                                    >
                                       Privacy Statement
                                    </v-card-title>

                                    <v-card-text>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                       <v-spacer></v-spacer>
                                       <v-btn
                                          color="primary"
                                          flat
                                          @click="term2 = false"
                                       >
                                          I accept
                                       </v-btn>
                                    </v-card-actions>
                                    </v-card>
                                 </v-dialog>
                              </v-list-tile-title>
                              <v-list-tile-title > 
                                 <v-dialog
                                    v-model="term3"
                                    width="500"
                                 >
                                    <router-link slot="activator" to="" class="aJie grey--text"> Ckcm Cloud Security</router-link>
                                    <v-card>
                                    <v-card-title
                                       class="headline grey lighten-2"
                                       primary-title
                                    >
                                       Privacy Statement
                                    </v-card-title>

                                    <v-card-text>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                       <v-spacer></v-spacer>
                                       <v-btn
                                          color="primary"
                                          flat
                                          @click="term3 = false"
                                       >
                                          I accept
                                       </v-btn>
                                    </v-card-actions>
                                    </v-card>
                                 </v-dialog>
                              </v-list-tile-title>
                           </v-list-tile-content>
                        <div class="mt-2 font-weight-bold green--text " style="font-size:10px" > &copy; {{ new Date().getFullYear() }} Ckcm-Network</div>
                     </v-list>
                  </v-card> -->
               </v-card>
            </v-navigation-drawer>
            <!-- jieLandingBg -->
            <!-- jieWhatBg -->
            <!-- mycolor3 -->
            <!-- <v-toolbar   height="43px" clipped-left dark  :class="userFData.themeColor" class=" jieLandingBg mr-5 transparent darken-3 jieWhatBg "  app dense > -->
            <v-toolbar   height="45px" clipped-left dark :class="`${userFData.themeColor}` " class=" portalSvg  elevation-1 mr-5 white "  app dense >
               <!-- <v-toolbar-side-icon class="" @click="(mycolor1) => (showNav = !showNav)"></v-toolbar-side-icon> -->
            
               <!-- <v-toolbar-title  class="primaryColortext--text subheading ">
                  <span style="margin-left:100px"  class="subheading white--text">Christ the King Network</span>
               </v-toolbar-title> -->
               <v-toolbar-title @click="home"  style="cursor:pointer;margin-top:-5px;margin-left:38px" class=" align-left">
                  <v-avatar tile size="30" >
                     <img src="jieIcons/apple-touch-icon.png">
                  </v-avatar>
                  <span style="font-size:14px;margin-top:-18px;" class="jieSvgBg1 textfm6">Christ The King Network</span> 
                  <div style="margin-top:-9px;margin-left:60px;font-size:10px;position:absolute" class="textfm6">Developed for Ckcmians</div>
                  <!-- <span style="font-size:11px;margin-top:-12px;" class="jieSvgBg1 textfm6">Christ the king Network</span>  -->
                  <!-- <div style="margin-top:-9px;margin-left:60px;font-size:8px;position:absolute" class="textfm6">Developed for Ckcmians</div> -->
               </v-toolbar-title>
               <v-spacer></v-spacer>
               <!-- <v-menu  slot="activator"  offset-y nudge-left="44px"> -->
                  <v-flex style="margin-right:-10px" :class="md2" :style="extendSearch" align-start>
                     <v-text-field  
                        @focus="() => (md2 = 'md5', extendSearch = 'transition: .5s')"
                        @blur="() => (md2 = 'md3')"
                        @input="searchInput"
                        single-line
                        solo
                        light
                        flat
                        height="30"
                        :loading="false"
                        placeholder="Search . . ."
                        append-icon="search"
                        style="font-size:13px"
                        class="font-weight-thin-light jie  textfm1  "
                     ></v-text-field>
                     
                  </v-flex>
               <!-- </v-menu> -->
               <!-- <v-divider vertical inset ></v-divider> -->
                  <v-btn @click="homeReload" v-scroll-to="'#scrollTopjie'" flat   class="font-weight-medium textDefault textfm1 " style="font-size:13px;margin-right:1px;margin-left:10px !important;" >
                        <v-avatar tile size="19"
                        color="transparent red--after"
                        >
                        <img src="https://png.icons8.com/ios/50/ffffff/birdhouse-filled.png">
                        </v-avatar>
                        Home 
                  </v-btn>

                  <v-tooltip color="tooltipColor" bottom >
                     <span class="textfm1" style="font-size:11.5px !important">Applications</span>
                     <v-menu flat slot="activator" offset-y nudge-left="44px">
                           <v-btn   style="margin-right:-5px !important;" slot="activator" red  icon>
                           
                              <!-- <v-badge color="primary" overlap class="jieBadge">
                                 <span  slot="badge" class="textfm1" style="font-size:11px">3</span>
                                 <v-avatar size="20px"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/new-post.png">
                                 </v-avatar>
                              </v-badge> -->
                                 <v-avatar tile size="17"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/delicious-filled.png">
                                 </v-avatar>
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
                        <v-card light>
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
                  

                  <v-tooltip color="tooltipColor" bottom >
                     <span class="textfm1" style="font-size:11.5px !important">Messages</span>
                     <v-menu flat slot="activator" offset-y nudge-left="44px">
                           <v-btn   style="margin-right:-5px !important;" slot="activator" red  icon>
                           
                              <v-badge color="primary" overlap class="jieBadge">
                                 <span  slot="badge" class="textfm1" style="font-size:11px">3</span>
                                 <v-avatar tile size="17"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/speech-bubble-with-dots-filled.png">
                                 </v-avatar>
                              </v-badge>
                                 <!-- <v-avatar tile size="17"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/speech-bubble-with-dots-filled.png">
                                 </v-avatar> -->
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
                        <v-card light>
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
                  
                  
                  <v-tooltip color="tooltipColor" bottom >
                  
                     <span class="textfm1" style="font-size:11.5px !important">Notifications</span>
                     <v-menu flat slot="activator" offset-y nudge-left="44px">
                           <v-btn  @click="clearChat" slot="activator" red  icon>
                              <!-- <v-badge color="primary" overlap class="jieBadge">
                                 <span  slot="badge" class="textfm1" style="font-size:11px">3</span>
                                 <v-avatar size="20px"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/appointment-reminders-filled.png">
                                 </v-avatar>
                              </v-badge> -->
                              <v-avatar size="17"
                                 color="transparent red--after"
                                 >
                                 <img src="https://png.icons8.com/ios/50/ffffff/appointment-reminders-filled.png">
                              </v-avatar>
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
                        <v-card light>
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

                  <v-divider style="margin-right:-3px !important" vertical inset ></v-divider>
                  
               <v-menu offset-y nudge-top="5">
                     <!-- color="white" flat  -->
                  <v-btn  slot="activator" style="min-width:140px" flat ripple>
                     <!-- Dropdown -->
                     <v-avatar class="mr-1 " color="red--after" size="25px">
                        <img :src="userFData.photoUrl" alt="">
                     </v-avatar>
                     <div style="font-size:13px;" class="font-weight-medium mr-2  text--darken-2   textDefault textfm1"> Hello, {{firstname}}</div> 
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
                  <v-card light>
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
                  <v-layout class="mr-2 ml-2" style="height:100%" justify-end align-end>
                     <v-card  v-for="(listofChat, index) in listofid" :key="listofChat['.key']" height="auto"   class=" white mr-2 mssngerRadius ">
                        <!-- { minbtn: !listofid[index].toogle} , { maxbtn: listofid[index].toogle} , -->
                        <!-- <v-btn  class="minbtn px-2  mssngerRadius  jieMessnger" @click="changeChatToogle(listofChat, index)"  flat small block  >
                           <v-toolbar-title  class="white--text text--darken-3 caption textDefault " >
                              <span style="letter-spacing:.5px" > {{listofChat.name}} </span>
                           </v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-icon  color="light-green  darken-4" size="8">
                              mdi-circle
                           </v-icon>
                        </v-btn> -->

                        <v-btn v-if="chattActiveID == index" :class="[ `${userFData.themeColor} lighten-2`] " style="border-bottom:.5px solid #E0E0E0;background-color:#f5f6f7"     class=" px-2  mssngerRadius  jieMessnger "  @click="changeChatToogle(listofChat, index)"  flat small block  >
                           <v-toolbar-title  v-if="listofChat.toogle == false" style="max-width:130px !important"  class="white--text text--darken-3 caption textDefault " >
                              <v-icon  style="vertical-align: middle;" color="light-green  darken-4" size="8">
                                 mdi-circle
                              </v-icon>
                              <span style="letter-spacing:.5px" > {{listofChat.name}} </span>
                           </v-toolbar-title>
                           <v-toolbar-title v-else style="max-width:1230px !important"  class="white--text text--darken-3 caption textDefault " >
                              <v-icon  style="vertical-align: middle;" color="light-green  darken-4" size="8">
                                 mdi-circle
                              </v-icon>
                              <span style="letter-spacing:.5px" > {{listofChat.name}} </span>
                           </v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-tooltip top>
                              <v-icon slot="activator"  style="margin-bottom:2px !important" class="mr-1"  color="white" size="12">
                              mdi-settings
                              </v-icon>
                              <span>Options</span>
                           </v-tooltip>
                           <v-tooltip top>
                              <v-icon @click="deleteChatt(index)" slot="activator" color="white" size="16">
                                 mdi-close
                              </v-icon>
                              <span>Close tab</span>
                           </v-tooltip>

                        </v-btn>
                        <v-btn  v-else style=" border-bottom:.5px solid #E0E0E0;background-color:#f5f6f7"     class="minbtn px-2  mssngerRadius  jieMessnger "  @click="changeChatToogle(listofChat, index)"  flat small block  >
                           <v-toolbar-title  v-if="listofChat.toogle == false" style="max-width:130px !important"  class="black--text text--darken-3 caption textDefault " >
                              <v-icon  style="vertical-align: middle;" color="light-green  darken-4" size="8">
                                 mdi-circle
                              </v-icon>
                              <span style="lette
                              r-spacing:.5px" > {{listofChat.name}} </span>
                           </v-toolbar-title>
                           <v-toolbar-title  v-else style="max-width:230px !important"  class="black--text text--darken-3 caption textDefault " >
                              <v-icon  style="vertical-align: middle;" color="light-green  darken-4" size="8">
                                 mdi-circle
                              </v-icon>
                              <span style="letter-spacing:.5px" > {{listofChat.name}} </span>
                           </v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-tooltip top>
                              <v-icon slot="activator"  style="margin-bottom:2px !important" class="mr-1"  color="grey darken-1" size="12">
                              mdi-settings
                              </v-icon>
                              <span>Options</span>
                           </v-tooltip>
                           <v-tooltip top>
                              <v-icon @click="deleteChatt(index)" slot="activator" color="grey darken-1" size="16">
                                 mdi-close
                              </v-icon>
                              <span>Close tab</span>
                           </v-tooltip>
                           

                        </v-btn>
                        <v-card  v-if="listofChat.toogle" flat class=" maxChat"  >
                           <v-card v-chat-scroll="{always: false, smooth: true}" height="80%" style="position:relative !important;overflow-y:auto" class="scrollbar-primary px-2" flat>
                          
                              <!-- <v-layout  class="mb-1" fill-height align-end justify-start >
                                 <v-avatar size="28" class="mr-1">
                                    <img src="https://lh6.googleusercontent.com/-032Q-BfAjw4/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaNBu7CiSH3g_6CAZckrWUAaKLLSVw/mo/photo.jpg">
                                 </v-avatar>
                                 <p style="margin-bottom:-0px !important; word-wrap:break-word !important;max-width:68%;width: auto !important;background-color:#EEEEEE !important" class="caption jie1Messge">
                                    Anim nostrud amet ostrud
                                 </p>
                              </v-layout>
                              <v-layout  class="mb-1" align-end justify-start >
                                 <v-avatar size="28" class="mr-1">
                                    <img src="https://lh6.googleusercontent.com/-032Q-BfAjw4/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaNBu7CiSH3g_6CAZckrWUAaKLLSVw/mo/photo.jpg">
                                 </v-avatar>
                                 <p style="margin-bottom:-0px !important; word-wrap:break-word !important;max-width:68%;width: auto !important;background-color:#EEEEEE !important" class="caption jie2Messge">
                                    Anim nostrud amet ostrud ametostrud ametds sdqwe 23Esse ad ut et consequat duis laboris irure aliquip ullamco. Deserunt sit qui sunt aute. Voluptate cillum incididunt officia nostrud. Culpa aute laborum adipisicing ex aliqua qui aute ut nostrud minim sunt consectetur. Deserunt ullamco ipsum duis duis aliquip voluptate do minim. Enim ex tempor tempor aliqua cupidatat consequat dolore qui sint aliquip ipsum enim et.
                                 </p>
                              </v-layout> -->
                              <infinite-loading class="red" style="height:0px;margin-left:-46px" spinner="waveDots" @infinite="infiniteHandler" v-if="availableNews"></infinite-loading>
                              <!-- <v-layout  v-for="messg in listofChat" :key="messg['.key']" class="" justify-end >
                                 <p style="word-wrap:break-word !important;max-width:68%;width: auto !important;" class="blue lighten-2 white--text caption jie3Messge">
                                    {{messg.convor}}
                                 </p>
                              </v-layout> -->
                           </v-card>
                           <v-form @submit.prevent="sendMessnger(listofChat)">
                              <v-textarea 
                                 style=" border-top:1px solid #EEEEEE;"
                                 v-model="listofChat.message"
                                 :color="`${userFData.themeColor}`"   class="scrollbar-primary caption jietxtmssg"  
                                 auto-grow placeholder="Type a message..." solo rows="1" flat hide-details
                                 autofocus  @focus="activeChatt(index)" @blur="inactiveChatt(index)" 
                                 @keydown.enter.exact.prevent
                                 @keyup.enter.exact="sendMessnger(listofChat)"
                                 @keydown.enter.shift.exact="newline(listofChat)"
                              >
                              </v-textarea>
                           </v-form>
                           <v-flex xs12 style="width:100%;position:absolute; bottom:0">
                              <v-flex class=" mb-2 mx-1">
                                 <v-avatar class="mr-2" tile size="17">
                                    <img src="https://png.icons8.com/ios/50/757575/stack-of-photos.png">
                                 </v-avatar>

                                 <v-avatar class="mr-2" tile size="17">
                                    <img src="https://img.icons8.com/ios/50/424242/happy.png">
                                 </v-avatar>

                                 <v-avatar class="mr-2" tile size="17">
                                    <img src="https://img.icons8.com/ios/50/757575/attach-filled.png">
                                 </v-avatar>

                                 <v-avatar class="mr-2" tile size="17">
                                    <img src="https://img.icons8.com/ios/50/424242/screenshot.png">
                                 </v-avatar>
                                 <v-tooltip top>
                                    <v-avatar style="cursor:pointer" slot="activator" @click="sendMessnger(listofChat)" class="mr-1 right " tile size="16">
                                       <img src="https://img.icons8.com/ios/50/2196F3/paper-plane-filled.png">
                                    </v-avatar>
                                    <span>Press enter to send</span>
                                 </v-tooltip>
                              </v-flex>
                           </v-flex>
                        </v-card>
                     </v-card>

                     <!-- <v-card :class="toogleChat" class="white mr-2 mssngerRadius minChat" >
                        <v-btn @click="toogleChat == maxChat" flat small block class=" white px-2 mssngerRadius jieMessnger" >
                           <v-toolbar-title  class="grey--text text--darken-2 caption textDefault " >
                              <span style="letter-spacing:.5px" > Evelynn Lozada </span>
                           </v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-icon  color="light-green  darken-2" size="8">
                              mdi-circle
                           </v-icon>
                        </v-btn>
                     </v-card> -->
                     
                  </v-layout>
               <!-- </v-container> -->
            </v-content>
      </v-app>

      <v-app v-else>
         <v-card class="grey lighten-5 jieWhatBg2" style="height:100%">
            <v-layout align-center fill-height justify-center>
               <v-flex xs3>
                 <span style="display:none"> {{userData}} </span>
                 <v-progress-linear color="primary darken-1" style="margin-top:200px !important" height="6" :indeterminate="true"></v-progress-linear>
               </v-flex>
            </v-layout>
         </v-card>
      </v-app>
   </v-app>
</template>

<script>
import { usersRef, db } from '../../firebase.js'
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
      friendLists: [],   
      items: [
         { title: 'Home', icon: 'dashboard' },
         { title: 'About', icon: 'question_answer' }
      ],
      right: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      accountFData: [],
      term1: false,
      term2: false,
      term3: false,
      listofid: {
         id: '' ,
         name: '',
         toogle: '',
         message: '',
         convor: [],
      },
      dummy: [],
      chattActiveID: '-26' ,
      navBar : true
   }),
   methods: {
      home() {
         this.$router.push({
            path: `/`,
         }); 
      },
      infiniteHandler(){

      },
      newline(listofChat) {
         listofChat.message = `${listofChat.message}\n`;
         
      },
      sendMessnger(listofChat) {
         let vm = this;
         let convo = db.ref("ConversationList");
         if(listofChat == '') {
            // dont send -_
         } else {
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=90a83c7326cc475f8048cf81362e1df0')
               .then((response) =>{
               // var now= moment(response.data.time_zone.current_time).tz(response.data.time_zone.name).format('MMMM D YYYY, kk:mm:ss');
               var now= response.data.time_zone.current_time
               if(listofChat.convor.first == listofChat.id){
                  // ang ga una nga id kay imuha bobo
                  convo.child(listofChat.id + vm.userData['ckcm-network_token_id']).set ({
                     from: listofChat.id,
                     message: listofChat.message,
                     time: now
                  }) 
               } else {
                  convo.child(vm.userData['ckcm-network_token_id']+listofChat.id).push ({
                     from: listofChat.id,
                     message: listofChat.message,
                     time: now
                  }) 
               }
            })
         }
         listofChat.message = ''
         // console.log(`${listofChat.id} : ${listofChat.message}` )
      },
      deleteChatt(index){
         window.localStorage.removeItem('ListOfChats');
         this.listofid.splice(index,1);
         localStorage.setItem("ListOfChats",JSON.stringify(this.listofid));
      },
      activeChatt(index) {
         this.chattActiveID = index
      },
      inactiveChatt(index) {
         this.chattActiveID = '-26'
      },
      changeChatToogle(myChat, index) {
         window.localStorage.removeItem('ListOfChats');
         myChat.toogle =! myChat.toogle;
         localStorage.setItem("ListOfChats",JSON.stringify(this.listofid));
      },
      clearChat() {
         window.localStorage.removeItem('ListOfChats');
         console.log(localStorage.getItem('ListOfChats'));
         this.listofid = [];
      },
      addToChat(id,displayName) {
         let vm = this;
         let idListed = _.filter(this.listofid, ['id', id]);
         let idIndex = _.findIndex(this.listofid, ['id', id])
        
         if(idListed.length != 0) {
            window.localStorage.removeItem('ListOfChats');
            this.listofid[idIndex].toogle == true
            localStorage.setItem("ListOfChats",JSON.stringify(this.listofid));
            // changeChatToogle(idListed, idIndex)
         } else {
            // firebase module
            // 1. id between yours and your friend _find
            let convo = db.ref("ConversationList");
            convo.on("value", function(getConvo) {
               if(getConvo.val()[vm.userData['ckcm-network_token_id']+id] != null) {
                  db.ref(`ConversationList/${vm.userData['ckcm-network_token_id']}${id}`).on("value", function(getConver) {
                     vm.listofid.push({
                        id: id,
                        name: displayName,
                        toogle: true,
                        convor: getConver.val()
                     });
                  })
               } else if(getConvo.val()[id+vm.userData['ckcm-network_token_id']] != null){
                  db.ref(`ConversationList/${id}${vm.userData['ckcm-network_token_id']}`).on("value", function(getConver) {
                     vm.listofid.push({
                        id: id,
                        name: displayName,
                        toogle: true,
                        convor: getConver.val()
                     });
                  })
               } else {
                  convo.child(vm.userData['ckcm-network_token_id']+id).set({
                     first : vm.userData['ckcm-network_token_id']
                  })
                  db.ref(`ConversationList/${vm.userData['ckcm-network_token_id']}${id}`).on("value", function(getConver) {
                     vm.listofid.push({
                        id: id,
                        name: displayName,
                        toogle: true,
                        convor: getConver.val()
                     });
                  })
               }
            })
            // exit
            console.log(vm.listofid)
            localStorage.setItem("ListOfChats",JSON.stringify(vm.listofid));
         }

      },
      homeReload() {
         // console.log(this.$router.currentRoute.path)
         if(this.$router.currentRoute.path == '/'){
            eventBus.$emit('jie');
            // this.$router.go(this.$router.currentRoute)
            // this.stateLoading = false
         } else {
            this.$router.push({
               path: '/'
            })
         }
      },
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
      userFData() {
         return this.$store.getters.AccountFdetails
      },
      leftnavDrawer () {
         return this.$store.getters.leftnavDrawer
      },
      rightnavDrawer () {
         return this.$store.getters.rightnavDrawer
      },
      code () {
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         return ckcmcode;
     },
      firstname() {
         let getFn = this.$store.getters.accountLoginData.user.displayName
         let firstname = getFn.split(" ");
         return firstname[0];
      },
      stateLoading() {
         return this.$store.getters.isLoading
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
      
      this.$store.dispatch("refreshPage")
      // 
      this.listofid = JSON.parse(localStorage.getItem('ListOfChats'));
      if(this.listofid==null){
         this.listofid = []
      }
      
   },
   created() {
      console.log(this.$store.getters.accountLoginData.user)

      this.$store.commit("homeReloadFalse")
      if(!this.stateLoading) {
         this.$Progress.finish()
      } else {
         this.$Progress.start()
      }
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
