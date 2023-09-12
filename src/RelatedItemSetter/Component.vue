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
		add_button_section: {
			type: Object
		},
		dropdown_button_section: {
			type: Object
		},
		sortButton: {
			type: String,
			default: 'Choose an element'
		},
		select_sections: {
			type: Array
		},
		related_items: {
			type: Array
		},
		choosed_related_items: {
			type: Array
		}
	},
	methods: {
		deleteElement(id) {
			const index = this.related_items.findIndex(item => item.id === id)
			if (index !== -1) {
				this.related_items.splice(index, 1)
			} 
			else {
				throw new Error('Invalid id: ' + id)
			}
		},
		addElement() {
			console.log('Hello')
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>