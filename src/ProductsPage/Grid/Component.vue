<template lang="pug">
    include Template.pug
</template>

<script>
	export default {
		props: {
			dropdown_item_sections: {
				type: Array
			},
			categories_dropdown_item_sections: {
				type: Array
			},
			categories_item_sections: {
				type: Array
			},
			card_sections: {
				type: Array
			},
			colors: {
				type: Array
			},
			showCards: {
				type: Number
			},
			sortButton: {
				type: String,
				default: 'DEFAULT'
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			this.cards = this.it
		},
		computed: {
			it() {
				return this.cards
			},
			slicedCards() {
				return this.cards.slice(0, this.showCards)
			}
		},
		methods: {
			incCardNumber() {
				return this.showCards += 6
			},
			valueSlider(value) {
				var x = value[0];
				var y = value[1];
				this.cards = this.it.filter((e) => x < e.price && e.price < y)
			},
			sortDate() {
				this.cards.sort((a, b) => (a.title.length * 2) - (b.title.length * 4))
				return this.sortButton = 'DATE'
			},
			sortPrice() {
				this.cards.sort((a, b) => a.price - b.price)
				return this.sortButton = 'PRICE'
			},
			sortTrend() {
				this.cards.sort((a, b) => a.type.length - b.type.length)
				return this.sortButton = 'TRENDING'
			},
			sortI(name) {
				this.cards = this.it.filter((e) => e.type.match(name) || e.color.match(name))
			},
			reSet() {
				return this.cards = this.it
			}
		}
	}
</script>

<style lang="scss" scoped>
  	@import "Style.scss";
</style>
