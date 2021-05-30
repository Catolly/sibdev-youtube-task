<template>
	<v-container fliud class="mx-0 pa-0">
		<v-row justify="space-between">
			<v-col class="d-flex align-center">
				<span>Видео по запросу <b>«Котики»</b></span>
				<span class="text--disabled ml-4">7230</span>
			</v-col>

			<v-col class="d-flex justify-end" md="2">
				<v-btn-toggle 
					@change="$emit('update:viewMode', $event)" 
					:value="viewMode"
					dense
					borderless
					group
				>
					<v-btn icon value="list">
						<v-icon>mdi-format-list-bulleted</v-icon>
					</v-btn>

					<v-btn icon value="grid">
						<v-icon>mdi-view-grid-outline</v-icon>
					</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AppResultsTopbar',

	props: {
		viewMode: {
			type: String,
			default: 'list',
		},
	},
}
</script>

<style lang="scss" scoped>

</style>