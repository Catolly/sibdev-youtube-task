<template>
	<v-form>
		<v-card>
			<v-container fluid class="py-9 px-10">
				<v-row no-gutters justify="center">
					<v-card-title class="black--text">
						Сохранить запрос
					</v-card-title>
				</v-row>

				<label>
					Запрос
					<v-text-field 
						value="чем кормить кота"
						outlined
						filled
						height="48"
						dense
						disabled
						readonly
					/>
				</label> 
				<label>
					<span class="red--text">*</span> Название
					<v-text-field 
						placeholder="Укажите название"
						height="48"
						dense
						outlined
						required
					/>
				</label> 
				<label>
					Сортировать по
					<v-select
						placeholder="Без сортировки"
						outlined
						height="48"
						dense
						return-object
					/>
				</label>

				<v-row class="mt-2">
					<v-col>
						<v-btn
							depressed
							block
							outlined
							x-large
							color="primary"
							@click="$emit('close')"
						>
							Не сохранять
						</v-btn>
					</v-col>
					<v-col>
						<v-btn
							depressed
							block
							x-large
							color="primary"
							@click="submit(); $emit('close');"
						>
							Сохранить
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-form>
</template>

<script>
export default {
	name: 'AppSaveFavouriteForm',

	methods: {
		submit() {
			this.$emit('submit')
		},
	},
}
</script>