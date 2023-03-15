<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            carousel_indicators: {
                type: Array
            },
            carousel_inners: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
