<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Hello there'
            },
            sub_title: {
                type: String,
                default: 'got a thought to discuss?'
            },
            image_url: {
                type: String,
            },
            image_alt: {
                type: String,
            },
            form_section: {
                type: Object,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
