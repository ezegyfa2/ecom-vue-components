<template lang="pug">
    include Template.pug
</template>

<script>
    import TextContent from '../../../../text-contents-vue-components/src/SmallTextContent/Component.vue'

    export default {
        mixins: [
            TextContent
        ],
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>