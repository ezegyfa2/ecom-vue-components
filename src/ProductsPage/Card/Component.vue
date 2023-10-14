<template lang="pug">
    include Template.pug
</template>

<script>
	export default {
		props: {
			id: {
				type: Number
			},
			image: {
				type: Object,
				default() {
					return {
						url: './images/ecomDefaultImage.jpg',
						alt: 'Product image'
					}
				}
			},
			title: {
				type: String
			},
			price: {
				type: Number
			},
			color: {
				type: String
			},
			type: {
				type: String
			}
		},
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
