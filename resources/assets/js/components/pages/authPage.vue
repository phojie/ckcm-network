<template>
   <div>   
      <jieLanding v-if="!logindata"></jieLanding>
      <jieHome v-else></jieHome>
   </div>
</template>

<script>
import jieLanding from '../jieLandingFolder/jieLanding.vue';
import jieHome from './jieHome.vue';   
export default {
	components:{
		jieLanding,
		jieHome,
	},
	mounted () {
      this.$Progress.finish()
   },
   computed: {
      logindata() {
         return this.$store.getters.isIn
      }
   },
}
</script>
