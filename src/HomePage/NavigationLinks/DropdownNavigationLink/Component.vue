<template lang="pug">
	include Template.pug
</template>

<script>
    import NavigationLink from '../../../../../helper-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue'

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
