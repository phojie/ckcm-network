<template>
   <div>
      <br>
      <router-link to="/werew">Get Lost</router-link>
      <v-btn small color="error" @click="logout">logout</v-btn>
      
   </div>
</template>

<script>
export default {  
   data: () => ({

   }),
   computed: {
   },
   methods: {
      logout(){
         this.$store.commit('logout');
         this.$router.push('/login');
      }
   },
   created() {
      
   }
   
}
</script>
