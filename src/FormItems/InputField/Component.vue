<template lang="pug">
    include Template.pug
</template>

<script>
    import TextInput from '../../../../helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Text/Component.vue'
    import NumberInput from '../../../../helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/Number/Component.vue'
    import FormItemWithLabel from '../../../../helper-vue-components/src/Form/FormItems/FormItemWithLabel/Component.vue'

    export default {
        mixins: [
            TextInput,
            NumberInput,
            FormItemWithLabel,
        ],
        props: {
            inputType: {
                type: String
            },
            numberOfRows: {
                type: Number
            }
        },
    }
</script>

<style lang="scss" scoped>
	@import "./Style.scss";
</style>