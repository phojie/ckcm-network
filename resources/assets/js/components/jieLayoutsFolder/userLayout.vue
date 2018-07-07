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
            <v-icon style="font-size:17px !important">apps</v-icon>
         </v-btn>
         <v-btn small style="margin-right:12px !important;" icon>
            <v-badge color="red" >
               <span slot="badge" class="textfm1" style="font-size:10px">2</span>
               <v-icon style="font-size:17px !important">notifications</v-icon>
            </v-badge>
         </v-btn>
         <v-menu offset-y>
               <!-- color="white" flat  -->
            <v-btn  slot="activator" color="white" flat ripple>
               <!-- Dropdown -->
               <v-avatar class="mr-1" size="25px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div class="mr-2 white--text caption textDefault textfm1"> Hello, {{userData.displayName}}</div> 
                  <v-icon style="font-size:15px !important" color="primary">menu</v-icon>
            </v-btn>
               <div class="" style="
                           margin-left:149.5px;
                           width: 0;
                           height: 0;
                           border-left: 6px solid transparent;
                           border-right: 6px solid transparent;
                           border-bottom: 6px solid white;">
               </div>
            <v-list dense>
               <!-- v-for="(item, index) in items" -->
               <v-list-tile @click=""
               >
                  <v-list-tile-title class="textfm1" @click="logout">
                     <i class="mdi mdi-icon "> 
                     <v-icon small >logout-variant</v-icon>
                     </i>
                     Logout   
                  </v-list-tile-title>
               </v-list-tile>

            </v-list>
         </v-menu>
      </v-toolbar>

      <v-content >
         <v-container class="" app fluid>
            <v-layout>
               <v-flex class="md2 ">
                  <v-card class="" height="500px">
                     <v-list dense class="textfm1">
                        <v-list-tile>
                        <v-list-tile-action>
                           <v-icon>home</v-icon>
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

                           <v-list-tile
                              v-for="(admin, i) in admins"
                              :key="i"
                              @click="null"
                           >
                              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                              <v-list-tile-action>
                              <v-icon v-text="admin[1]"></v-icon>
                              </v-list-tile-action>
                           </v-list-tile>
                        </v-list-group>

                        <v-list-group
                           sub-group
                           no-action
                        >
                           <v-list-tile slot="activator">
                              <v-list-tile-title>Actions</v-list-tile-title>
                           </v-list-tile>

                           <v-list-tile
                              v-for="(crud, i) in cruds"
                              :key="i"
                              @click="null"
                           >
                              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                              <v-list-tile-action>
                              <v-icon v-text="crud[1]"></v-icon>
                              </v-list-tile-action>
                           </v-list-tile>
                        </v-list-group>
                        </v-list-group>
                     </v-list>
                  </v-card>
                  <!-- <router-view></router-view> -->
               </v-flex>
               <v-flex class="md6">
                  <v-card class="" height="700px">
                  </v-card>
               </v-flex>
               <v-flex class="4">
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
