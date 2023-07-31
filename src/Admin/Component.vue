<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		admin_title: {
			type: String
		},
		button_section: {
			type: Object
		},
		delete_title: {
			type: String
		},
		images: {
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>