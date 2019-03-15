<template>
	 <!-- <v-layout v-resize="onResize" > -->
	 <div >
			<vue-progress-bar></vue-progress-bar>
			<router-view ></router-view>
	 </div>

	 <!-- </v-layout> -->
</template>
<script>
// import './firebase';
export default {
	 data: () => ({
			windowSize: {
				x: 0,
				y: 0
			}
	 }),
	 methods: {
			onResize () {
				 this.windowSize = { x: window.innerWidth, y: window.innerHeight }
				 // console.log(this.windowSize);
			}
	 },
	 created() {
       this.$store.commit('getSubjects')
       this.$store.commit('getPrograms')
       this.$store.commit('getFaculties')
       this.$store.commit('getUsers')
       this.$store.commit('getRooms')
       this.$store.commit('getStudents')
	 }
}
</script>
