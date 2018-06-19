<template>
	<jieLanding v-if="!login"></jieLanding>
	<jiePagesLayout v-else></jiePagesLayout>
</template>

<script>
import jieLanding from './jieLandingFolder/jieLanding.vue';
import jiePagesLayout from './jieLayoutsFolder/jiePagesLayout.vue';

export default {
	data() {
		return {
			login: false,
		}
	},
	components:{
		jieLanding,
		jiePagesLayout,
	},
	methods: {

	},
	created () {

	},
	mounted () {
			console.log('ie install ang vuetifyjs -> https://github.com/vuetifyjs/vuetifyjs.com')
	}
}
</script>
