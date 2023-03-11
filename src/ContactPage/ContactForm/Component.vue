<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        name: 'ContactForm',
        props: {
            title: {
                type: String,
                default: 'Hello there'
            },
            sub_title: {
                type: String,
                default: 'got a thought to discuss?'
            },
            name: {
                type: String,
                default: 'Name'
            },
            email: {
                type: String,
                default: 'E-mail'
            },
            message: {
                type: String,
                default: 'Message'
            },
            submit: {
                type: String,
                default: 'submit'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
