<template lang="pug">
    include Template.pug
</template>

<script>
    import IconWithRightText from '../../../../helper-vue-components/src/IconLinks/IconWithRightText/Component.vue'

    export default {
        mixins: [
            IconWithRightText
        ],
        props: {
            img_url: {
                type: String
            },
            img_alt: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
  	@import "Style.scss";
</style>
