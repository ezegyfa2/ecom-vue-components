<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		label: {
			type: String
		},
		itemId: {
			type: String
		},
		itemType: {
			type: String
		},
		itemName: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>