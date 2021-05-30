<template>
	<v-container fluid class="pa-0">
		<v-card 
			v-for="n in 12" 
			:key="n" 
			elevation="0"
			class="mt-2"
		>
			<v-row>
				<v-col md="2" sm="4">
					<v-img src="@/assets/video-loading-thumbnail.svg" />
				</v-col>

				<v-col xl="5" md="6" sm="8">
					<v-card-title class="video-title subtitle-2 mb-2 pa-0">
						<b>Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона</b>
					</v-card-title>
					<v-card-text class="video-channel text--disabled text-truncate pa-0">
						Ветеринария и Кормление собак и кошек
						<br>
						786 тыс. просмотров
					</v-card-text>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'AppResultsList',
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