<template>
   <v-layout class="mt-2">
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

      }
   },
   created () {
      document.title = this.username + " | Profile";
   }
}
</script>
