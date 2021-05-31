<template>
	<v-app-bar 
		app
		color="white"
		:height="topbarHeight"
		class="py-0"
		flat
	>
		<v-container class="pa-0 fill-height">
			<v-row class="fill-height no-gutters">
				<v-col class="d-flex" md="1">
					<v-img 
						max-height="48"
						max-width="48"
						class="align-self-center"
						src="@/assets/sibdev-logo.svg"
					/>
				</v-col>

				<v-col>
					<v-tabs :height="topbarHeight">
						<v-tab :to="{ name: SEARCH_ROUTE_NAME }">
							Поиск
						</v-tab>
						<v-tab :to="{ name: FAVOURITES_ROUTE_NAME }">
							Избранное
						</v-tab>
					</v-tabs>
				</v-col>

				<v-spacer />

				<v-col md="2">
					<v-tabs :height="topbarHeight" hide-slider>
						<v-tab @click="logout" class="ml-auto">
							Выйти
						</v-tab>
					</v-tabs>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
import { 
	SEARCH_ROUTE_NAME, 
	FAVOURITES_ROUTE_NAME, 
	LOGIN_ROUTE_NAME 
} from '@/router/constants'

import { LOGOUT } from '@/store/actions.type'

export default {
	name: 'AppTopbar',

	data:() => ({
		topbarHeight: 80,
	}),

	computed: {
		SEARCH_ROUTE_NAME() {
			return SEARCH_ROUTE_NAME
		},
		FAVOURITES_ROUTE_NAME() {
			return FAVOURITES_ROUTE_NAME
		},
	},

	methods: {
		logout() {
			this.$store.dispatch(LOGOUT)
			this.$router.push({ name: LOGIN_ROUTE_NAME })
		},
	},
}
</script>

<style lang="scss" scope>
.v-app-bar { 
	&:after {
		position: absolute;
		content: '';
		display: block;

		height: 1px;
		width: 100%;
		background: #F1F1F1;
	}

	.v-toolbar__content {
		padding: 0 200px;
	}
}
</style>