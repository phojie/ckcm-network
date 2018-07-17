<template>
   <v-layout wrap  align-center align-content-center justify-center >
      <v-flex class="mx-2 xs10">
         <v-card class="mb-2" height="auto">
            <v-card-media
               height="300px"
               src="/imgs/background-main-light.svg"
            >
               <v-container fill-height fluid>
                  <v-layout fill-height>
                  <v-flex>
                     <span class="headline">{{timeDisplay}}</span>
                     <br>
                     <span class="subheadline"> {{greet}}</span>
                  </v-flex>
                  </v-layout>
               </v-container>
            </v-card-media>
         </v-card>
      </v-flex>

      <v-flex class="mx-2 xs10">
         <v-card flat class="mb-2" height="auto">
            <v-card-media
               height="300px"
               src="/imgs/background-main-light.svg"
            >
               <v-container fill-height fluid>
                  <v-layout fill-height>
                  <v-flex>
                     <span class="headline">{{timeDisplay}}</span>
                     <br>
                     <span class="subheadline"> {{greet}}</span>
                  </v-flex>
                  </v-layout>
               </v-container>
            </v-card-media>
         </v-card>
      </v-flex>
      <!-- <v-flex class="mx-2 xs9">
         <v-layout row>
            <v-flex class="xs6">
               <v-card class="mb-2" height="auto">
                  <v-card-media
                     height="300px"
                     src="/imgs/background-main-light.svg"
                  >
                     <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex>
                           <span class="headline">{{timeDisplay}}</span>
                           <br>
                           <span class="subheadline"> {{greet}}</span>
                        </v-flex>
                        </v-layout>
                     </v-container>
                  </v-card-media>
               </v-card>
            </v-flex>

            <v-flex class="xs6">
               <v-card class="mb-2" height="auto">
                  <v-card-media
                     height="300px"
                     src="/imgs/background-main-light.svg"
                  >
                     <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex>
                           <span class="headline">{{timeDisplay}}</span>
                           <br>
                           <span class="subheadline"> {{greet}}</span>
                        </v-flex>
                        </v-layout>
                     </v-container>
                  </v-card-media>
               </v-card>
            </v-flex>
         </v-layout>
        
         
      </v-flex> -->
   </v-layout>
</template>
<script>
export default {
   computed: {
      username() {
         const paramsUser = this.$route.params.username;
         const user = paramsUser.toLocaleLowerCase().replace(/[ .]/g, " ");
         const userSplit = user.split(' ');
         for (let i = 0; i < userSplit.length; i++) {
         userSplit[i] = userSplit[i].charAt(0).toUpperCase() + userSplit[i].slice(1); 
         }
         return userSplit.join(' ');;
      },
   },
   created () {
   },
   mounted () {
      document.title = this.username + " | Profile";
      this.$store.commit("leftnavDrawerOff");
   }
}
</script>
