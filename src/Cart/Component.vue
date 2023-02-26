<template lang="pug">
  include Template.pug
</template>

<script>export default {
	name: 'Cart',
	data() {
		return {
			cClass: 'cart',
			modalClass: 'modal off'
		}
	},
	computed: {
		cartContent() {
			return this.$store.state.cartItems
		},
		cartPrice() {
			return this.$store.getters.totalPrice
		}
	},
	methods: {
		cartON() {
			if (this.cClass === 'cart on') {
				this.cClass = 'cart'
				this.modalClass = 'modal off'
			} else {
				this.cClass = 'cart on'
				this.modalClass = 'modal'
			}
		},
		removeThing(id) {
			this.$store.commit('outCart', id)
		}
	}
}
</script>

<style lang="scss" scoped>
  @import "Style.scss";
</style>
