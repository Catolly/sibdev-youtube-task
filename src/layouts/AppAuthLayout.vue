<template>
	<div class="layout-container fill-height grey lighten-5">
		<v-main class="fill-height">
			<slot />
		</v-main>
	</div>
</template>

<script>
export default {
	name: 'AppAuthLayout',
}
</script>

<style scoped>
.layout-container  {
	padding-left: 200px !important;
	padding-right: 200px !important;
}
</style>