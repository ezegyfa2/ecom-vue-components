<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		image_url: {
				type: String
		},
		image_alt: {
				type: String,
				default() {
						return ''
				}
		},
		title: {
			type: String,
		},
		price: {
			type: String,
		},
		id: {
			type: String,
		},
	},
	computed: {
		removeThing(id) {
			this.$store.commit('outCart',id)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>
