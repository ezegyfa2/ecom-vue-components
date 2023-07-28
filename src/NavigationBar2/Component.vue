<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
			left_item_sections: {
				type: Array
			},
			searchbar_section: {
				type: Object  
			},
			title: {
				type: String
			},
			url: {
				type: String
			},
			button_title: {
				type: String
			}
		},
		computed: {
			bagItemscount() {
				return this.$store.getters.itemsNumber
			}
		},
		methods: {
			openCart() {
				this.$refs.cartMove.cartON()
			}
		}
	}
</script>

<style lang="scss" scoped >
    @import "Style.scss";
</style>