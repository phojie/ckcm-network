<template>
   <div>
      <vue-progress-bar></vue-progress-bar>
      <!-- <authPage></authPage> -->
      <router-view ></router-view>
   </div>
</template>
<script>
import authPage from './pages/authPage.vue';
export default {
   components: {
      authPage
   },
	data() {
		return {
         login: false,
         authUser: null,
		}
	},
	mounted () {
      this.$Progress.finish()
   },
   computed: {
      firebaseData() {
         return this.$store.getters.fdetails
      },
      logindata() {
         if(this.$store.state.accountLoginData) {
            return this.$store.getters.accountLoginData
         }
      }
   },
   created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
         //  does the page we want to go to have a meta.progress object
         if (to.meta.progress !== undefined) {
         let meta = to.meta.progress
         // parse meta tags
         this.$Progress.parseMeta(meta)
         }
         //  start the progress bar
         this.$Progress.start()
         //  continue to next page
         next()
      })
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
         //  finish the progress bar
         this.$Progress.finish()
      })
   }
}
</script>
