<template lang="pug">
    include Template.pug
</template>

<script>
import Cart from '@/Components/Cart.vue'

export default {
	name: 'Header',
	components: {
		Cart
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

<style lang="scss" >
    @import "Style.scss";
</style>
