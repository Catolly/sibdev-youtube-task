<template>
	<div class="container fill-height">
		<app-topbar />

		<v-main>
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