<template lang="pug">
    include Template.pug
</template>

<script>
	export default {
		props: {
			navbar_section: {
				type: Object
			},
			content_sections: {
				type: Array
			},
			newsletter_section: {
				type: Object
			},
			footer_section: {
				type: Object
			},
		}
	}
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
