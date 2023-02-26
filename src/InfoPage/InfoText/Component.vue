<template lang="pug">
  include Template.pug
</template>

<script>
export default {
	name: 'InfoText',
	data() {
		return {
			moreInfo: ['DESCRIPTION', 'WARRANTY', 'REVIEWS'],
			active: 0,
		}
	},
	methods: {
		moreInfoSelect(index) { //More Info area tab selector
			return this.active = index
		},
	}
}
</script>

<style lang="scss" scoped>
  @import "Style.scss";
</style>
