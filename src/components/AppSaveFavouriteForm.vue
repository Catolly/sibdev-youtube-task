<template>
	<v-form @submit.prevent="submit">
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
						v-model="form.query"
						outlined
						filled
						height="48"
						dense
						:disabled="newRequest"
						:readonly="newRequest"
					/>
				</label> 
				<label>
					<span class="red--text">*</span> Название
					<v-text-field 
						v-model="form.name"
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
						v-model="form.order"
						:items="ORDERS_NAMES"
						placeholder="Без сортировки"
						outlined
						height="48"
						dense
						return-object
					/>
				</label> 
				<label>
					Максимальное количество
					<v-row>
						<v-col>
							<v-slider
								v-model="form.maxResults"
								min="1"
								:max="MAX_RESULTS"
								hide-details
								height="48"
							/>
						</v-col>
						<v-col cols="3">
							<v-text-field
								:value="form.maxResults"
								outlined
								readonly
								dense
								height="48"
							/>
						</v-col>
					</v-row>				
				</label>

				<v-row class="mt-2">
					<v-col>
						<v-btn
							depressed
							block
							outlined
							x-large
							color="primary"
							@click="closeForm"
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
							@click="submit"
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
import { 
	MAX_RESULTS, 
	MAX_RESULTS_DEFAULT, 
	ORDERS 
} from '@/components/constants'

export default {
	name: 'AppSaveFavouriteForm',

	data:() => ({
		form: {
			query: '',
			name: '',
			order: '',
			maxResults: 0,
		},
	}),

	props: {
		newRequest: {
			type: Boolean,
			default: false,
		},
		request: {
			type: Object,
			required: true,

			query: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				default: '',
			},
			order: {
				type: String,
				default: '',
			},
			maxResults: {
				type: Number,
				default: MAX_RESULTS_DEFAULT,
			},
		},
	},

	computed: {
		MAX_RESULTS() {
			return MAX_RESULTS
		},
		ORDERS_NAMES() {
			return ORDERS.map(order => order.name)
		},
	},

	methods: {
		submit() {
			this.$emit('submit')
		},

		closeForm() {
			this.$emit('close')
			this.setDefault()
		},

		submit() {
			this.$emit('submit')
			this.closeForm()
		},

		setDefault() {
			Object.entries(this.request).forEach(([key, value]) => {
				this.form[key] = value
			})
			if (!this.form.maxResults) 
				this.form.maxResults = MAX_RESULTS_DEFAULT
		}
	},

	created() {
		this.setDefault()
	},
}
</script>