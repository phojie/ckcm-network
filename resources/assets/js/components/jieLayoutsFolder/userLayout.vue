<template>
   <v-app>
      <v-toolbar fixed clipped-right dark class="mycolor1 jieLandingBg  mr-5  " flat app dense >
         <!-- <v-toolbar-side-icon class="" @click="() => (showNav = !showNav)"></v-toolbar-side-icon> -->
         <v-toolbar-title class="primaryColortext--text subheading mx-5 ">
            <!-- <span class="subheading white--text">Christ the King Network</span> -->
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <!-- <v-text-field style="height:10px !important" solo>
         </v-text-field> -->
         <v-divider vertical inset ></v-divider>
         <v-btn small style="margin-right:-5px !important;" icon>
            <v-icon style="font-size:20px !important">mdi-apps</v-icon>
         </v-btn>
         <v-menu offset-y nudge-bottom="4px">
            <v-btn slot="activator" small style="margin-right:12px !important;" icon>
               <!-- <v-badge color="red" >
                  <span slot="badge" class="textfm1" style="font-size:10px">2</span>
                  <v-icon style="font-size:17px !important">mdi-bell</v-icon>
               </v-badge> -->
               <v-badge color="red" overlap class="jieBadge">
                  <span  slot="badge" class="textfm1" style="font-size:11px">3</span>
                  <v-avatar size="27px"
                  color="transparent red--after"
                  >
                  <v-icon style="font-size:20px !important">notifications</v-icon>
                  </v-avatar>
               </v-badge>
            </v-btn>
              <div class="" style="
                           margin-left:8.5px;
                           width: 0;
                           height: 0;
                           border-left: 6px solid transparent;
                           border-right: 6px solid transparent;
                           border-bottom: 6px solid white;">
               </div>
            <v-card>
               <v-list dense>
                  <!-- v-for="(item, index) in items" -->
                  <v-list-tile @click=""
                  >
                     <v-list-tile-title class="textfm1" @click="logout">
                        <v-icon small >mdi-logout</v-icon>
                        Logout   
                     </v-list-tile-title>
                  </v-list-tile>
               </v-list>
            </v-card>
         </v-menu>
         <v-menu offset-y >
               <!-- color="white" flat  -->
            <v-btn  slot="activator" color="white" flat ripple>
               <!-- Dropdown -->
               <v-avatar class="mr-1" size="25px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div class="mr-2 white--text caption textDefault textfm1"> Hello, {{userData.displayName}}</div> 
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
                  <v-list-tile @click=""
                  >
                     <v-list-tile-title class="textfm1" @click="logout">
                        <v-icon small >mdi-logout</v-icon>
                        Logout   
                     </v-list-tile-title>
                  </v-list-tile>
               </v-list>
            </v-card>
         </v-menu>
      </v-toolbar>

      <v-content >
         <v-container class="" app fluid>
            <v-layout>
               <v-flex class="blue md2 ">
                  <v-card class="" height="500px">
                     <v-list dense class="textfm1">
                        <v-list-tile>
                        <v-list-tile-action>
                           <v-icon>mdi-home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile>

                        <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                        >
                           <v-list-tile slot="activator">
                              <v-list-tile-title>Users</v-list-tile-title>
                           </v-list-tile>

                           <v-list-group
                              no-action
                              sub-group
                              value="true"
                           >
                              <v-list-tile slot="activator">
                                 <v-list-tile-title>Admin</v-list-tile-title>
                              </v-list-tile>

                           </v-list-group>
                        </v-list-group>
                     </v-list>
                  </v-card>
                  <!-- <router-view></router-view> -->
               </v-flex>
               <v-flex class=" md6">
                  <v-card class="green" height="700px">
                  </v-card>
               </v-flex>
               <v-flex class=" md4">
                  <v-card class="" height="500px">
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
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
   }),
   methods: {
      logout(){
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         this.$store.commit('logout');
         this.$router.push(`/?stype=lo&jlou=jie_ckcm-code=${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
      }
   },
   computed: {
      userData () {
         return this.$store.getters.accountLoginData.user
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
.jieBadge .v-badge__badge {
   height:19px !important;
   width:19px !important;
}
</style>
