<template lang="pug">
  	include Template.pug
</template>

<script>
	export default {
		props: ['CardArray'],
		name: 'Card',
		methods: {
			addtoCart(it) {
				this.$store.commit('inCart', it)
			},
			sendInfo(it) {
				this.$store.commit('addtoInfo', it)
			}
		}
	}
</script>

<style lang="scss" scoped>
  	@import "Style.scss";
</style>
