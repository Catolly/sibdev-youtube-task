<template>
	<v-list class="py-0 white">
		<v-hover
			v-for="(favourite, index) in favourites"
			:key="favourites.length - index"
			v-slot="{ hover }"
		>
			<div class="d-flex flex-column justify-space-between">
				<v-list-item :class="{ 'on-hover grey lighten-2': hover }">
					<v-list-item-title>
						<b>{{favourite.name}}</b>
					</v-list-item-title>
					
					<div class="d-flex">
						<v-btn 
							color="primary"
							text
							@click="$emit('edit', favourite)"
						>
							Изменить
						</v-btn>
						<v-btn 
							color="error"
							text
							@click="$emit('delete', favourite)"
						>
							Удалить
						</v-btn>
					</div>
				</v-list-item>
				<v-divider class="grey lighten-4" />
			</div>
		</v-hover>
	</v-list>
</template>

<script>
export default {
	name: 'AppFavouritesList',

	props: {
		favourites: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.on-hover {
	cursor: pointer;
}
</style>