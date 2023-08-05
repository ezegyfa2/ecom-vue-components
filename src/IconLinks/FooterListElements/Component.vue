<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
            title: {
                type: String
            },
            navigate_sections: {
                type: Array
            }
		}
	}
</script>

<style lang="scss" scoped >
    @import "Style.scss";
</style>