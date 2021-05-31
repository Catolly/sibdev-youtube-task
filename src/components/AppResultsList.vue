<template>
	<v-container fluid class="pa-0">
		<v-card 
			v-for="(video, index) in videos" 
			:key="index" 
			elevation="0"
			class="transparent mt-2"
		>
			<v-row>
				<v-col md="2" sm="4">
					<v-img
						v-if="video.snippet.thumbnails.medium.url"
						:lazy-src="video.snippet.thumbnails.default.url" 
						:src="video.snippet.thumbnails.medium.url"
					/>
					<v-img v-else src="@/assets/video-loading-thumbnail.svg" />
				</v-col>

				<v-col xl="5" md="6" sm="8">
					<v-card-title class="video-title subtitle-2 mb-2 pa-0">
						<b>{{video.snippet.title}}</b>
					</v-card-title>
					<v-card-text class="video-channel text--disabled text-truncate pa-0">
						{{video.snippet.channelTitle}}
						<br>
						{{formatViewCount(video.statistics.viewCount)}} просмотров
					</v-card-text>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'AppResultsList',

	props: {
		videos: {
			type: Array,
			required: true,
		},
	},

	methods: {
		formatViewCount(viewCount) {
			const names = ['тыс.', 'млн.', 'млрд.']
			let viewCountFormatted = viewCount

			for (let [index, name] of names.entries()) {
				viewCountFormatted = Math.floor(viewCount / 10**(3*(index+1)))
				if (viewCountFormatted && viewCountFormatted <= 1000)
					return `${viewCountFormatted} ${name}`
			}

			return viewCountFormatted
		},
	},
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