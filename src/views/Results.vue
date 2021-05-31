<template>
	<div>
		<app-results-search-form @submit="submit" />
		<template v-if="!loading">	
			<template v-if="results.items">
				<app-results-topbar 
					:viewMode.sync="viewMode" 
					:query="this.$route.query.search_query" 
					:totalResults="totalResults" 
				/>
				<app-results-list 
					v-show="viewMode === VIEW_MODE_LIST"
					:videos="results.items"
					class="mt-5" 
				/>
				<app-results-grid 
					v-show="viewMode === VIEW_MODE_GRID"
					:videos="results.items"
					class="mt-5" 
				/>
			</template>
			<h2 v-else>Результатов не найдено</h2>
		</template>
	</div>
</template>

<script>
import { VideoService } from '@/services/ApiService'

import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '@/components/constants'

import { RESULTS_ROUTE_NAME } from '@/router/constants'

import AppResultsSearchForm from '@/components/AppResultsSearchForm'
import AppResultsTopbar from '@/components/AppResultsTopbar'
import AppResultsList from '@/components/AppResultsList'
import AppResultsGrid from '@/components/AppResultsGrid'

export default {
	name: 'Results',

	components: {
		AppResultsSearchForm,
		AppResultsTopbar,
		AppResultsList,
		AppResultsGrid,
	},

	data:() => ({
		query: '',
		totalResults: 0,
		results: null,
		viewMode: VIEW_MODE_LIST,
		loading: false,
	}),

	computed: {
		VIEW_MODE_LIST() {
			return VIEW_MODE_LIST
		},
		VIEW_MODE_GRID() {
			return VIEW_MODE_GRID
		},
	},

	methods: {
		submit(query) {
			if (!query) return

			this.$router.push({ 
				name: RESULTS_ROUTE_NAME,
				query: { search_query: query } 
			})
			this.$router.go()
		},
	},

	async created() {
		try {
			this.loading = true

			const params = { 
				q: this.$route.query.search_query,
				order: this.$route.query.order,
				maxResults: this.$route.query.maxResults,
			}
			let { data } = await VideoService.get(params)
			this.totalResults = data.pageInfo.totalResults;

			({ data } = await VideoService.getDetailed({ 
				id: data.items.map(item => item.id.videoId).join(',')
			}))
			this.results = data
		} catch (error) {
			console.error(error)
		} finally {
			this.loading = false
		}
	},
}
</script>