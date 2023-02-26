<template lang="pug">
  include Template.pug
</template>

<script>
export default {
	props: ['information'],
	name: 'InfoBox',
	data() {
		return {
			quan: 1,
		}
	},
	methods: {
		inc() { // Info box Incrememnt button
			if (this.quan <= 8)
				return this.quan++
		},
		dec() { // Info box Decrememnt button
			if (this.quan >= 2)
				return this.quan--
		},
		addtoCart(it, id) { // Info box Add to cart button
			for (var i = 0; i < this.quan; i++) {
				this.$store.commit('inCart', it, id)
			}
		},
	}
}
</script>

<style lang="scss" scoped>
  @import "Style.scss";
</style>
