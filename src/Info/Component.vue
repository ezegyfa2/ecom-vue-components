<template lang="pug">
    include Template.pug
</template>

<script>
	// import InfoBreadcrumb from '@/Components/InfoPage/InfoBreadcrumb.vue'
	// import InfoBox from '@/Components/InfoPage/InfoBox.vue'
	// import InfoText from '@/Components/InfoPage/InfoText.vue'
	// import Card from '@/Components/ProductsPage/Card.vue'

	export default {
		data() {
			return {
				information: [],
				relatedItems: []
			}
		},
		created() {
			this.information = this.infO
			this.relatedItems = this.bringItems
		},
		computed: {
			infO() {
				return this.$store.getters.infoLength
			},
			bringItems() {
				return this.$store.state.items
			},
			sliceRelatedItems() {
				return this.relatedItems.slice(0, 3)
			}
		},
		methods: {
			sendInfo(it, id) {
				this.$store.commit('addtoInfo', it, id)
			}
		}
	}
</script>

<style lang="scss" scoped>
  	@import "Style.scss";
</style>
