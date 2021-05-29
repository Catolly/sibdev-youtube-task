<template>
	<div class="layout-container">
		<app-topbar />

		<v-main class="fill-height">
			<slot />
		</v-main>
	</div>
</template>

<script>
import AppTopbar from '@/components/AppTopbar'

export default {
	name: 'AppDefaultLayout',

	components: {
		AppTopbar
	},
}
</script>

<style scoped>
.layout-container  {
	padding-left: 200px !important;
	padding-right: 200px !important;
}
</style>