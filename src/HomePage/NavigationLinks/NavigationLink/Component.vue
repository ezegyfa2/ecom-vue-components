<template lang="pug">
	include Template.pug
</template>

<script>
    import NavigationLink from '../../../../../helper-vue-components/src/NavigationBar/NavigationLinks/NavigationLink/Component.vue'

    export default {
        mixins: [
            NavigationLink,
        ],
        props: {
            click_function: {
                type: String
            },
        }
    }
</script>

<style lang="scss"scoped>
  	@import "Style.scss";
</style>
