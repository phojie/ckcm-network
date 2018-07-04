<template>
   <v-app>
  
      <v-toolbar class="mr-5 white elevation-1" app dense >
         <v-toolbar-side-icon class="" @click="() => (showNav = !showNav)"></v-toolbar-side-icon>
         <v-spacer></v-spacer>
         <v-btn small style="margin-right:-5px !important;" icon>
            <v-icon style="font-size:17px !important">apps</v-icon>
         </v-btn>
         <v-btn small style="margin-right:-5px !important;" icon>
            <v-icon style="font-size:17px !important">notifications</v-icon>
         </v-btn>
        
         <!-- <v-avatar class="mr-1" size="30px">
               <img :src="userData.fdetailsload.photoURL" alt="">
         </v-avatar> -->
         <!-- <div class="font-weight-black grey--text caption textDefault textfm1">{{userData.fdetailsload.displayName}}</div> 
               <v-icon color="primary">arrow_drop_down</v-icon> -->
         <v-menu offset-y>
             <!-- color="white" flat  -->
            <v-btn  slot="activator" color="white" flat ripple>
               <!-- Dropdown -->
               <v-avatar class="mr-1" size="30px">
                  <img :src="userData.photoUrl" alt="">
               </v-avatar>
               <div class="font-weight-black grey--text caption textDefault textfm1">{{userData.displayName}}</div> 
                  <v-icon color="primary">arrow_drop_down</v-icon>
            </v-btn>

            <v-list dense>
               <!-- v-for="(item, index) in items" -->
               <v-list-tile 
                  :key="index"
                  @click=""
               >
                  <v-list-tile-title class="textfm1" @click="logout">
                     <v-icon small >logout-variant</v-icon>Logout   
                  </v-list-tile-title>
               </v-list-tile>
            </v-list>
         </v-menu>
      </v-toolbar>
      <v-navigation-drawer
         class="jieLandingBg"
         width="230" app  
         v-model="showNav"
      >
      <v-card color="transparent">
         <!-- <v-spacer></v-spacer>
         <v-toolbar-side-icon left dark ></v-toolbar-side-icon> -->
      </v-card>
      </v-navigation-drawer>
      
      <v-content color="secondary">
         <v-container fluid>
            <router-view></router-view>
         </v-container>
      </v-content>
      <!-- <v-footer app></v-footer> -->
   </v-app>
</template>

<script>
export default {
   data: () => ({
      showNav:false,
      progressDone: false,
      items: [
        { title: 'Logout' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
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
