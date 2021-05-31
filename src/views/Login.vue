<template>
	<v-container fluid class="fill-height pa-0">
		<v-row justify="center">
			<v-col lg="6" md="8" sm="12">
				<app-login-form />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AppLoginForm from '@/components/AppLoginForm'

export default {
	name: 'Login',

	components: {
		AppLoginForm,
	},
}
</script>