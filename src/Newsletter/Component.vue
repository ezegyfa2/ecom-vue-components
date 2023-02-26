<template lang="pug">
  	include Template.pug
</template>

<script>
	export default {
		name: 'Newsletter',
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
