<template lang="pug">
	include Template.pug
</template>

<script>
	export default {
		props: {
			newsletter_text: {
				type: Object
			},
			newsletter_form: {
				type: Object
			}
		},
		methods: {
			haSubmit() {
				return alert('Thank you for subscribing')
			}
		}
	}
</script>

<style lang="scss"scoped>
  	@import "Style.scss";
</style>
