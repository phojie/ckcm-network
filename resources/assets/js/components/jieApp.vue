<template>
   <div>
      <vue-progress-bar></vue-progress-bar>
      <!-- <authPage></authPage> -->
      <jieUserLayouts v-if="loginTrue"></jieUserLayouts>
      <router-view v-if="!logintrue" ></router-view>
   </div>
</template>
<script>
import jieUserLayouts from './jieLayoutsFolder/userLayout.vue'
export default {
   components: {
      jieUserLayouts
   },
   mounted() {
      this.$Progress.finish()
   },
   computed: {
      loginTrue () {
         return this.$store.getters.accountLoginData;
      }
   },
   created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
      // //  hook the progress bar to start before we move router-view
      // this.$router.beforeEach((to, from, next) => {
      //    //  does the page we want to go to have a meta.progress object
      //    if (to.meta.progress !== undefined) {
      //    let meta = to.meta.progress
      //    // parse meta tags
      //    this.$Progress.parseMeta(meta)
      //    }
      //    //  start the progress bar
      //    this.$Progress.start()
      //    //  continue to next page
      //    next()
      // })
      // //  hook the progress bar to finish after we've finished moving router-view
      // this.$router.afterEach((to, from) => {
      //    //  finish the progress bar
      //    this.$Progress.finish()
      // })
   }
}
</script>
