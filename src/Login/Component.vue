<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		formitem_sections: {
			type: Array
		},
		title: {
			type: String
		},
		linkTitle: {
			type: String
		},
		url: {
			type: String
		},
		text: {
			type: String
		},
		method: {
			type: String,
			default: 'POST'
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>