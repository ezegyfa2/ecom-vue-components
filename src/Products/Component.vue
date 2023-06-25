<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
			breadcrumb_section: {
				type: Object
			},
			grid_section: {
				type: Object
			},
		}
	}
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
