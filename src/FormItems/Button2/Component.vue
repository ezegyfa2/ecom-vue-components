<template lang="pug">
	include Template.pug
</template>

<script>
export default {
	props: {
		submit_item: {
			type: String
		},
        submit_label: {
            type: String
        }
	}
}
</script>

<style lang="scss" scoped>
	@import "Style.scss";
</style>