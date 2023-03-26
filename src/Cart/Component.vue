<template lang="pug">
	include Template.pug
</template>

<script>
export default {
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
	computed: {
		itemSections() {
			return this.$store.items[this._uid]
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>
