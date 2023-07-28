<template lang="pug">
    include Template.pug
</template>

<script>
	export default {
		props: {
            media_url: {
                type: String
            },
            media_title: {
                type: String
            }
		}
	}
</script>

<style lang="scss" scoped >
    @import "Style.scss";
</style>