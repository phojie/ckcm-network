<template>
   <v-app >
      <!-- <v-content>
         <v-container fluid fill-height >
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-24">
                     <v-toolbar height="45px" flat dark color="blue lighten-2">
                        <v-toolbar-title to="/signup" class="jieQueriesTitleFonts">
                           Sign Up Here
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                              <v-btn>
                                 <v-icon medium>person</v-icon>
                              </v-btn>
                              <span>Dark / Light</span>
                        </v-tooltip>
                     </v-toolbar>

                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content> -->
		<router-view></router-view>
   </v-app>
</template>

