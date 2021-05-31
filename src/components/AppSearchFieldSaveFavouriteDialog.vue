<template>
	<div>
		<v-dialog
			v-model="dialog"
			max-width="510px"
		>
			<template v-slot:activator="{ on }">
				<v-icon
					color="primary"
					v-on="on"
					id="search-field-save-favourite-dialog-icon"
				>
					mdi-heart-outline
				</v-icon>
			</template>

			<app-save-favourite-form
				newRequest
				:request="{query}"
				@close="closeDialog" 
				@submit="showMenu" 
			/>
		</v-dialog>

		<v-menu 
			v-model="menu"
			content-class="menu" 
			attach="#search-field-save-favourite-dialog-icon"
			nudge-width="220"
			nudge-left="99"
			nudge-bottom="32"
		>
			<v-card @click.native.stop>
				<v-card-text class="black--text">
					Поиск сохранён в разделе «Избранное»
				</v-card-text>
				<v-card-text class="pt-0">
					<router-link to="favourites">Перейти в избранное</router-link>
				</v-card-text>
			</v-card>
		</v-menu>
	</div>
</template>

<script>
import AppSaveFavouriteForm from '@/components/AppSaveFavouriteForm'

export default {
	name: 'AppSearchFieldSaveFavouriteDialog',

	components: {
		AppSaveFavouriteForm,
	},

	data:() => ({
		dialog: false,
		menu: false,
	}),

	props: {
		query: {
			type: String,
			required: true,
		},
	},

	methods: {
		closeDialog() {
			this.dialog = false
		},
		showMenu() {
			this.menu = true
		},
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