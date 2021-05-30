<template>
	<v-container fluid class="pa-0">
		<v-row>
			<v-col 
				v-for="n in 12" 
				:key="n" 
				md="3" 
				sm="6" 
				xs="12"
			>
				<v-card elevation="0">
					<v-img src="@/assets/video-loading-thumbnail.svg" />
					<v-card-title class="video-title subtitle-2 my-2 pa-0">
						<b>Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона</b>
					</v-card-title>
					<v-card-text class="video-channel text--disabled text-truncate pa-0">
						Ветеринария и Кормление собак и кошек
						<br>
						786 тыс. просмотров
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AppResultsGrid',
}
</script>

<style lang="scss" scoped>
.video {
	&-title {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;  
	}

	&-title,
	&-channel,
	&-views {
		text-owerflow: ellipsis;
		overflow: hidden;
		line-height: 130%;
		word-break: normal;
	}
}
</style>