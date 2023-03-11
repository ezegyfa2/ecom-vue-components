<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	name: 'Cart',
	props: {
		empty_message: {
			type: String,
			default: 'Your cart is empty, try to Add stuff.'
		},
		title: {
			type: String,
			default: 'Cart'
		},
		remove_text: {
			type: String,
			default: 'remove'
		},
		total_text: {
			type: String,
			default: 'Total'
		},
	},
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
