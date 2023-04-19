<template lang="pug">
    include Template.pug
</template>

<script>
    import Form from '../../../../helper-vue-components/src/Form/Form/Component.vue'

    export default {
        mixins: [
            Form,
        ],
        props: {
            title: {
                type: String,
                default: 'Hello there'
            },
            sub_title: {
                type: String,
                default: 'got a thought to discuss?'
            },
            img_url: {
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
