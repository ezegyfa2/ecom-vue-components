<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		label: {
			type: String
		},
		item_id: {
			type: String
		},
		item_type: {
			type: String
		},
		placeholder: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>