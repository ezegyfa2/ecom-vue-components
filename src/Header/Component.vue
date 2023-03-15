<template lang="pug">
    include Template.pug
</template>

<script>
import Cart from '@/Components/Cart.vue'

export default {
	components: {
		Cart
	},
	props: {
		router_link_sections: {
			type: Array
		},
		modal_section: {
			type: Object
		},
		right_item_section: {
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
