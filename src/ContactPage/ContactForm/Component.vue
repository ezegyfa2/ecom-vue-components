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
            form_item_sections: {
                type: Object,
            },
            button_section: {
                type: Object,
            },
            url: {
                type: String
            },
            method: {
                type: String,
                default: 'post'
            },
        },
        methods: {
            submitForm (e) {
                this.submitted = true
                return true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
