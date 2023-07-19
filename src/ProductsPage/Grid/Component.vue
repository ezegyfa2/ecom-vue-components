<template lang="pug">
    include Template.pug
</template>

<script>
	import ServerData from '../../../../helper-vue-components/src/ServerData.vue'

	export default {
		mixins: [
			ServerData,
		],
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
			cards: {
				type: Array,
				default() {
					return []
				}
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
				cardSectionType: 'ecom-card'
			}
		},
		mounted() {
            if (!this.card_sections || this.card_sections.length == 0) {
                this.refreshDataWithAjax()
            }
		},
		computed: {
            refreshEnabled() {
                return this.refreshDataEnabled
            },
			slicedCards() {
				return this.cards.slice(0, this.showCards)
			},
            refreshInputData() {
                return {
                    '_token': getCsrfToken()
                }
            },
			cardSections() {
				return this.cards.map(card => {
					return {
						type: this.cardSectionType,
						data: card
					}
				})
			}
		},
		methods: {
            processResponse(data) {
                this.cards = data
                /*this.column_names = data.column_names
                this.total_row_count = data.total_row_count
                data.filter_sections.forEach(filterSection => {
                    let filterSectionValue = this.getFilterSectionValue(filterSection.data.name)
                    if (filterSectionValue) {
                        filterSection.data.value = filterSectionValue
                    }
                })
                this.filter_sections = data.filter_sections
                /*this.$emit('update:rows', data.rows)
                this.$emit('update:filter_sections', data.filter_sections)*/
            },
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
