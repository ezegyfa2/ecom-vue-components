<template lang="pug">
    include Template.pug
</template>

<script>
    import Description from '../../../../description-vue-components/src/Description.vue';

    export default {
        mixins: [
            Description
        ],
        computed: {
            textOrientationClass() {
                //Reversed becouse the left_orientation indicate the image position
                return this.left_orientation ?  "text-lg-end" : "";
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>