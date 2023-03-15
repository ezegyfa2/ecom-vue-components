<template lang="pug">
  include Template.pug
</template>

<script>
  export default {
    props: {
      contentDirection: 'left',
      title: {
        type: String
      },
      content: {
        type: String
      },
      image_url: {
        type: String
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "Style.scss";
</style>