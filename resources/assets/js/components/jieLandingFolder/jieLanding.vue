<template>
   <v-app light >
      <div  class="elevation-5" id="jiefrontdiv"></div>
      <v-navigation-drawer
         class="hidden-lg-and-up"
         clipped
         v-model="drawer"
         fixed left app 
         hide-overlay
         width="200"
      >
      <v-list>
         <v-btn
            center
         >Login</v-btn>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar flat :clipped-left="$vuetify.breakpoint.lgAndUp" color="white"  dense fixed app>
         <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <v-toolbar-title class="hidden-xs-only primaryColortext--text" width="500"  >Ckcdsdsdsdsm-Network</v-toolbar-title>
            <v-flex xs5 mx-5>
               <v-tabs grow slider-color="primary" left>
                  <v-tab :ripple="false"  v-for="n in 5" :key="n">
                     Item {{ n }}
                  </v-tab>
               </v-tabs>
            </v-flex>
            <v-spacer></v-spacer>
               
         <!-- <v-btn icon>
            <v-icon>search</v-icon>
         </v-btn>
         <v-btn icon>
            <v-icon>apps</v-icon>
         </v-btn>
         <v-btn icon>
            <v-icon>refresh</v-icon>
         </v-btn>
         <v-btn icon>
            <v-icon>more_vert</v-icon>
         </v-btn> -->
      </v-toolbar>
      <v-content>
      <v-container color="red" fluid fill-height>
         <v-layout justify-center align-center>
            <v-flex text-xs-center>
            </v-flex>
         </v-layout>
      </v-container>
      </v-content>
      <!-- <v-footer color="primary" app>
         <v-spacer></v-spacer>
         <span class="white--text">&copy; 2017</span>
      </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>
#jiefrontdiv{
   position: absolute;
   width: 100%;
   height: 1449px;
   left: 0px;
   top: 0px;
   background: #f7f9fa;
}
</style>

