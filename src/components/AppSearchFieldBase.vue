<template>
	<v-text-field 
		:value="value"
		@input="$emit('input', $event)"
		outlined
		placeholder="Что хотите посмотреть?"
		type="text"
	>
		<template #append-outer>
			<v-btn 
				depressed
				color="primary"
				@click="$emit('search')"
			>
				Найти
			</v-btn>
		</template>

		<template #append>
			<slot /> 
		</template>
	</v-text-field>
</template>

<script>
export default {
	name: 'AppSearchFieldBase',

	props: {
		value: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
.v-text-field {
	border-radius: 5px 0 0 5px;

	::v-deep .v-input__append-outer {
		margin: 0 !important;
	}

	.v-btn {
		width: 150px;
		border-radius: 0 5px 5px 0;
		padding-top: 2px;
	}

	::v-deep .v-input__slot,
	.v-btn {
		min-height: 52px !important;
	}
}
</style>