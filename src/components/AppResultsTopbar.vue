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
					<v-btn icon :value="VIEW_MODE_LIST">
						<v-icon>mdi-format-list-bulleted</v-icon>
					</v-btn>

					<v-btn icon :value="VIEW_MODE_GRID">
						<v-icon>mdi-view-grid-outline</v-icon>
					</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '@/components/constants'

export default {
	name: 'AppResultsTopbar',

	props: {
		viewMode: {
			type: String,
			default: VIEW_MODE_LIST,
		},
	},

	computed: {
		VIEW_MODE_LIST() {
			return VIEW_MODE_LIST
		},
		VIEW_MODE_GRID() {
			return VIEW_MODE_GRID
		},
	}
}
</script>

<style lang="scss" scoped>

</style>