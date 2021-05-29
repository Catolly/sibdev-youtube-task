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
						<v-tab>
							<router-link class="text-decoration-none" to="search">Поиск</router-link>
						</v-tab>
						<v-tab>
							<router-link class="text-decoration-none" to="favorites">Избранное</router-link>
						</v-tab>
					</v-tabs>
				</v-col>

				<v-spacer />

				<v-col md="2">
					<v-tabs :height="topbarHeight" hide-slider>
						<v-tab class="ml-auto">
							Выйти
						</v-tab>
					</v-tabs>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
export default {
	name: 'AppTopbar',

	data:() => ({
		topbarHeight: 80,
	}),
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