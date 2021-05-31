<template>
	<v-container fluid class="pa-0">
		<v-row>
			<v-col 
				v-for="(video, index) in videos" 
				:key="index" 
				md="3" 
				sm="6" 
				xs="12"
			>
				<v-card class="transparent" elevation="0">
					<v-img
						v-if="video.snippet.thumbnails.medium.url"
						:lazy-src="video.snippet.thumbnails.default.url" 
						:src="video.snippet.thumbnails.medium.url"
					/>
					<v-img v-else src="@/assets/video-loading-thumbnail.svg" />

					<v-card-title class="video-title subtitle-2 my-2 pa-0">
						<b>{{video.snippet.title}}</b>
					</v-card-title>
					<v-card-text class="video-channel text--disabled text-truncate pa-0">
						{{video.snippet.channelTitle}}
						<br>
						{{formatViewCount(video.statistics.viewCount)}} просмотров
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AppResultsGrid',

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