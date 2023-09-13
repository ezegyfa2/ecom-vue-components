<template lang="pug">
include Template.pug
</template>

<script>
export default {
	props: {
		title: {
			type: String
		},
		name: {
			type: String
		},
		select_section: {
			type: Object
		},
		choosed_items: {
			type: Array
		},
	},
	data() {
		return {
			selectedOption: null,
			relatedOptions: [],
		}
	},

	methods: {
		deleteElement(id) {
			const index = this.choosed_items.findIndex(item => item.id === id)
			if (index !== -1) {
				this.choosed_items.splice(index, 1)
			} 
			else {
				throw new Error('Invalid id: ' + id)
			}
		},
		changeOptions(newOptions) {
			this.relatedOptions = newOptions
		},
		addElement(newElement) {
			let selectedItem = this.relatedOptions.filter((element) => element.value == newElement)
			let selectedItemNewObject = {title: selectedItem[0].text, name: selectedItem[0].text, id: selectedItem[0].value}
			this.choosed_items.push(selectedItemNewObject)
			this.selectedOption = -1
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>