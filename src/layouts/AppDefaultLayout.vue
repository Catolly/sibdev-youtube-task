<template>
	<div class="container">
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