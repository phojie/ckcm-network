<template>
<!-- :value="leftnavDrawer"  -->
<!-- <v-navigation-drawer  :value="!leftnavDrawer" stateless permanent flat width="80" clipped app></v-navigation-drawer> -->
   <v-app>
      <v-navigation-drawer  stateless permanent flat right width="210" clipped app></v-navigation-drawer>
      <v-navigation-drawer permanent class="transparent" floating stateless width="210" style="overflow: hidden !important;" clipped app>
         <v-card flat color="transparent" class="mt-3 ml-5">
            <v-btn @click="profileMenu" color="grey"  small class=" jieleftNav" block flat>
               <!-- Dropdown -->
               <v-avatar class="mr-1 " color="red--after" size="23px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1">{{userData.displayName}}</div> 
               <v-spacer></v-spacer>
               <v-icon style="font-size:15px !important" color="grey">mdi-lastpass</v-icon>
            </v-btn>
         </v-card>

         <v-card flat color="transparent" class="mt-3 ml-5">
            <v-btn to="/" style="padding-left:9px" small :ripple="{ class: 'white--text' }"  color="grey"  class=" jieleftNav" flat depressed block >
               <!-- Dropdown -->
               <v-avatar class="mr-1" color="red--after" size="20px">
                  <img src="https://png.icons8.com/color/40/B0A18E/globe.png">
                  <!-- <img src="https://png.icons8.com/color/100/B0A18E/newsleecher.png" alt=""> -->
               </v-avatar>
               <div style="font-size:13px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> News Feed </div> 
               <v-spacer></v-spacer>
               <div class="textfm1 caption" >24</div>
            </v-btn>
            <v-btn to="/messages" small :ripple="{ class: 'white--text' }" style="margin-top:-6px" color="grey" class=" jieleftNav" flat depressed block >
               <!-- Dropdown -->
               <v-avatar class="mr-1 " color="red--after" size="23px">
                  <img src="/imgs/svg/jieChat.svg">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> Chat app </div> 
               <v-spacer></v-spacer>
               <div class="textfm1 caption" >2</div>
            </v-btn>
            <v-btn to="/announcement" small :ripple="{ class: 'white--text' }" style="margin-top:-6px"  color="grey"   class=" jieleftNav" flat depressed block >
               <!-- Dropdown -->
               <v-avatar class="mr-1 " color="red--after" size="23px">
                  <img src="https://png.icons8.com/color/40/B0A18E/pin3.png">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> Announcement </div> 
               <v-spacer></v-spacer>
               <div class="textfm1 caption" >2</div>
            </v-btn>

            <v-btn :to="`/welcome?sk=${code}`" style="padding-left:10px;margin-top:-6px" small :ripple="{ class: 'white--text' }"  color="grey"  class=" jieleftNav" flat depressed block >
               <v-avatar class="mr-1" color="red--after" size="19px">
                  <img src="/favicon.ico">
                  <!-- <img src="https://png.icons8.com/color/100/B0A18E/newsleecher.png" alt=""> -->
               </v-avatar>
               <div style="font-size:13px;margin-left:1px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> Welcome </div> 
               <v-spacer></v-spacer>
               <div class="textfm1 caption" >24</div>
            </v-btn>
            
         </v-card>

         <v-card flat color="transparent" class="mt-2 ml-5">
            <div class="caption textfm1 grey--text font-weight-bold "> Explore </div>
            <!-- <v-btn to="/1" small color="transparent"  class=" jieleftNav" depressed block >
               <v-avatar class="mr-1 " color="red--after" size="18px">
                  <img src="" alt="">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> Enrollment </div> 
               <v-spacer></v-spacer>
            </v-btn>
            <v-btn small to="/2" color="transparent" style="margin-top:-6px;"  class=" jieleftNav" depressed block>
               <v-avatar class="mr-1 " color="red--after" size="18px">
                  <img src="" alt="">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1"> Club  </div> 
               <v-spacer></v-spacer>
            </v-btn>
            <v-btn small to="/3" style="margin-top:-6px;" color="transparent" class=" jieleftNav" depressed block>
               <v-avatar class="mr-1 " color="red--after" size="18px">
                  <img src="" alt="">
               </v-avatar>
               <div style="font-size:13px; letter-spacing:.5px" class="font-weight-thin mr-2 black--text textDefault textfm1">  Payroll   </div> 
               <v-spacer></v-spacer>
            </v-btn> -->
         </v-card>

       
      </v-navigation-drawer>
      <v-toolbar   clipped-left dark class="mycolor1 jieLandingBg  mr-5  " flat app dense >
         <!-- <v-toolbar-side-icon class="" @click="() => (showNav = !showNav)"></v-toolbar-side-icon> -->
         <v-toolbar-title class="primaryColortext--text subheading ">
            <!-- <span class="subheading white--text">Christ the King Network</span> -->
         </v-toolbar-title>
            <!-- solo-inverted -->
         <v-spacer></v-spacer>
         <!-- <v-menu  slot="activator"  offset-y nudge-left="44px"> -->
         
            <v-flex :class="md2" :style="extendSearch" align-start>
               <v-text-field  
                  @focus="() => (md2 = 'md7', extendSearch = 'transition: .5s')"
                  @blur="() => (md2 = 'md4')"
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
         
            <v-btn small to="/" flat style="margin-right:-5px  !important;" >
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
               <!-- <div class="" style="
                  background-color:green;
                  margin-top:-50px;
                  margin-left:149.5px;
                  width: 0;
                  height: 0;
                  border-left: 6px solid transparent;
                  border-right: 6px solid transparent;
                  border-bottom: 6px solid red;">
               </div> -->
               <span class="textfm1" style="font-size:11.5px !important">Notifications</span>
               <v-menu flat slot="activator"  offset-y nudge-left="44px">
                     <v-btn slot="activator"  style="margin-right:12px !important;" icon>
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
                  
                     <div class="" style="
                        margin-left:56.5px;
                        width: 0;
                        height: 0;
                        border-left: 6px solid transparent;
                        border-right: 6px solid transparent;
                        border-bottom: 6px solid white;">
                     </div>
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
            <v-btn  slot="activator" flat ripple>
               <!-- Dropdown -->
               <v-avatar class="mr-1 " color="red--after" size="25px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div class="font-weight-thin mr-2 white--text caption  textDefault textfm1"> Hello, {{userData.displayName}}</div> 
                  <v-icon style="font-size:15px !important" color="primary">mdi-menu</v-icon>
            </v-btn>
               <div class="" style="
                  margin-left:149.5px;
                  width: 0;
                  height: 0;
                  border-left: 6px solid transparent;
                  border-right: 6px solid transparent;
                  border-bottom: 6px solid white;">
               </div>
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
      
      <v-content >
         <!-- <v-container class="" app fluid> -->
            <router-view></router-view>
         <!-- </v-container> -->
      </v-content>

      <!-- <v-footer app></v-footer> -->
   </v-app>
</template>

<script>
export default {
   data: () => ({
      mini:true,
      showNav:true,
      progressDone: false,
      md2: "md4",
      extendSearch: "",

      items: [
         { title: 'Home', icon: 'dashboard' },
         { title: 'About', icon: 'question_answer' }
      ],
      right: null
   }),
   methods: {
      logout () {
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         this.$store.commit('logout');
         this.$router.push(`/?stype=lo&jlou=jie_ckcm-code=${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
      },
      searchInput () {
         
      },
      profileMenu () {
         const displayName= this.$store.getters.accountLoginData.user.displayName;
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
     }
   },
   mounted() {
      // this.$Progress.finish();
      
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
.jieBadge .v-badge__badge {
   margin-right:3px !important;
   margin-top:4px !important;
   height:18px !important;
   width:18px !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
