<template>
   <div>
      <!-- <v-dialog :fullscreen="$vuetify.breakpoint.md"> -->
         <v-alert :value="true" type="success">Not yet Live</v-alert>
         <router-link to="/">Bring me back</router-link>
      <!-- </v-dialog> -->
      
  	</div>
</template>

<script>
export default {
   mounted () {
      console.clear()
      console.log(this.$vuetify.breakpoint)
  },
}
</script>
