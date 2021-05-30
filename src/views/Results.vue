<template>
	<div>
		<app-results-search-form />
		<app-results-topbar :viewMode.sync="viewMode" />
	</div>
</template>

<script>
import AppResultsSearchForm from '@/components/AppResultsSearchForm'
import AppResultsTopbar from '@/components/AppResultsTopbar'

export default {
	name: 'Search',

	components: {
		AppResultsSearchForm,
		AppResultsTopbar,
	},

	data:() => ({
		viewMode: 'list',
	}),
}
</script>