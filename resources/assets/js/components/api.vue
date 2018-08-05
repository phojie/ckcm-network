<!-- <template>
<div>
   <ul> 
      <li v-for="newsfeed in newsfeedRefs" :key="newsfeed['.key']" >
         {{newsfeed}}
      </li>
   </ul>
</div>
</template>


<script>
   import {newsfeedRef} from '../firebase.js';
export default {
   firebase: {
      newsfeedRefs: newsfeedRef
   },
   data: () => ({
      newsFeedApi:[]
   }),
   mounted() {
      this.newsFeedApi = this.$firebaseRefs.newsfeedRefs
      console.log(this.newsFeedApi)
   }
}
</script> -->