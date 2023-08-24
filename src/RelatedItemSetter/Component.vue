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
		button_section: {
			type: Object
		},
		delete_button_section: {
			type: Object
		},
		related_items: {
			type: Array
		},
		choosed_related_items: {
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>