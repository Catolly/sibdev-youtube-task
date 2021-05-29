<template>
	<app-search-field-base>
		<v-menu 
			content-class="menu"
			:close-on-content-click="false"
			offset-y 
			max-width="220"
			nudge-left="99"
			nudge-bottom="8"
		>
			<template v-slot:activator="{ on }">
				<v-icon
					color="primary"
					v-on="on"
				>
					mdi-heart-outline
				</v-icon>
			</template>
			<v-card>
				<v-card-text class="black--text">
					Поиск сохранён в разделе «Избранное»
				</v-card-text>
				<v-card-text class="pt-0">
					<router-link to="favourites">Перейти в избранное</router-link>
				</v-card-text>
			</v-card>
		</v-menu>
	</app-search-field-base>
</template>

<script>
import AppSearchFieldBase from '@/components/AppSearchFieldBase'

export default {
	name: 'AppSearchFieldSaveFavourite',

	components: {
		AppSearchFieldBase,
	},
}
</script>

<style lang="scss" scoped>
.menu {
	contain: initial;
	overflow: visible;

	&:before {
		position: absolute;
		content: '';
		display: block;

		height: 14px;
		width: 14px;
		bottom: 100%;
		left: calc(50% - 7px);
		z-index: 10;

		border: 7px solid transparent;
		border-bottom-color: #FFF;
	}
}
</style>