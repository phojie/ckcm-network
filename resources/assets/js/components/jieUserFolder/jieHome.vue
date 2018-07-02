<template>
   <div>
      <!-- <img height="40" circle :src="logindata.fdetailsload.photoURL" alt=""> -->
      <!-- {{ logindata.fdetailsload.photoURL}} -->
      <br>
      <router-link to="/werew">Get Lost</router-link>
      <v-btn small color="error" @click="logout">logout</v-btn>
      {{logindata}}
      <!-- <router-view></router-view> -->
   </div>
</template>

<script>
export default {  
   data: () => ({

   }),
   computed: {
      logindata() {
         return this.$store.getters.fdetails
      }
   },
   methods: {
      logout(){
         const ckcmcode = Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15)  + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         this.$store.commit('logout');
         this.$router.push(`/?stype=lo&jlou=jie_ckcm-code=${ckcmcode}-AfcXyKTxpz7sQ68VmX5mkDW-v78XPvqoICwwqRFwSZgox8TG0GBDSY0Cd9F9pxUwnqr_c2aOJL4xk0WPhFml466P75gCuUkm2Lkm7ZaR2obLnw&smuh=2724&lh=Ac-yQn60G1vPxGhw`);
      }
   },
   mouted() {
      this.$Progress.finish();
   },
   created() {
      // this.$Progress.finish();

   },
   
}
</script>
