<template lang="pug">
    include Template.pug
</template>

<script>
    import Content from '../Content/Component.vue'

    export default {
        components: {
			Content
		},
        props: {
            content_sections: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
