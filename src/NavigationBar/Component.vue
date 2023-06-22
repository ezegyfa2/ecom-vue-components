<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
			title_section: {
				type: Object
			},
			left_item_sections: {
				type: Array
			},
			modal_section: {
				type: Object
			},
			right_item_section: {
				type: Object
			},
			shop_cart_item_section: {
				type: Object
			},
			cart_section: {
				type: Object
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
