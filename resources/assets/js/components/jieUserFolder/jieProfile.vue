<template>
   <div class="textDefault">
      {{username}}
   </div>
</template>

<script>
export default {
   computed: {
      username() {
         const paramsUser = this.$route.params.username;
         const user = paramsUser.toLocaleLowerCase().replace(/[ .]/g, " ");
         const userSplit = user.split(' ');
         for (var i = 0; i < userSplit.length; i++) {
         userSplit[i] = userSplit[i].charAt(0).toUpperCase() + userSplit[i].slice(1); 
         }
         return userSplit.join(' ');;

      }
   }
}
</script>
