<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		label: {
			type: String
		},
		id: {
			type: String
		},
		type: {
			type: String
		},
		name: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>