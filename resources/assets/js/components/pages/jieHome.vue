<template>
   <div>
      {{mydata}}
      <router-link to="/werew">Get Lost</router-link>
      <v-btn small color="error" @click="logout">logout</v-btn>
      
   </div>
</template>

<script>
export default {
   data: () => ({

   }),
   computed: {
      mydata() {
         return this.$store.getters.accountLoginData;
      }
   },
   methods: {
      logout(){
         this.$store.commit('logout');
         this.$router.push('/login');
      }
   }
}
</script>
