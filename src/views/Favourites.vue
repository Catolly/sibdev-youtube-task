<template>
	<div class="mt-10">
		<h1>Избранное</h1>

		<v-list class="mt-10 py-0 white">
			<v-hover
				:key="n"
				v-for="n in 6"
				v-slot="{ hover }"
			>
				<div class="d-flex flex-column justify-space-between">
					<v-list-item :class="{ 'on-hover grey lighten-2': hover }">
						<v-list-item-title>
							<b>Видео</b>
						</v-list-item-title>
						
						<div class="d-flex">
							<v-btn 
								color="primary"
								text
							>
								Изменить
							</v-btn>
							<v-btn 
								color="error"
								text
							>
								Удалить
							</v-btn>
						</div>
					</v-list-item>
					<v-divider class="grey lighten-4" />
				</div>
			</v-hover>
		</v-list>
	</div>
</template>

<script>
export default {
	name: 'Favourites',
}
</script>

<style lang="scss" scoped>
.on-hover {
	cursor: pointer;
}
</style>