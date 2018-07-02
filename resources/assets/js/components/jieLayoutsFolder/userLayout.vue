<template>
   <v-app>
  
      <v-toolbar class="mr-5 white elevation-1" app dense >
         <v-toolbar-side-icon class="" @click="() => (showNav = !showNav)"></v-toolbar-side-icon>
         <v-spacer></v-spacer>
         <v-btn small style="margin-right:-5px !important;" icon>
            <v-icon style="font-size:17px !important">apps</v-icon>
         </v-btn>
         <v-btn small style="margin-right:-20px !important;" icon>
            <v-icon style="font-size:17px !important">notifications</v-icon>
         </v-btn>
        
         <!-- <v-avatar class="mr-1" size="30px">
               <img :src="userData.fdetailsload.photoURL" alt="">
         </v-avatar> -->
         <!-- <div class="font-weight-black grey--text caption textDefault textfm1">{{userData.fdetailsload.displayName}}</div> 
               <v-icon color="primary">arrow_drop_down</v-icon> -->
         <v-btn   color="white" flat  ripple>
            <v-avatar class="mr-1" size="30px">
               <img :src="userData.photoURL" alt="">
            </v-avatar>
            <div class="font-weight-black grey--text caption textDefault textfm1">{{userData.displayName}}</div> 
               <v-icon color="primary">arrow_drop_down</v-icon>
         </v-btn>
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
      showNav:true,
      progressDone: false
    
   }),
   computed: {
      userData () {
         return this.$store.getters.accountLoginData
      }
   },
   mounted() {
      this.$Progress.finish();
   },
   created() {
      this.$Progress.start()
   }
}
</script>
