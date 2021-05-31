<template>
	<v-form>
		<v-card>
			<v-container fluid class="py-10 px-0">
				<v-row justify="center">
					<v-col cols="8">
						<div class="d-flex flex-column align-center">
							<v-img 
								src="@/assets/sibdev-logo.svg" 
								height="88"
								width="88"
							/>
							
							<v-card-title>Вход</v-card-title>
						</div>

						<label>
							<span class="text--disabled text-truncate">Логин</span>
							<v-text-field 
								outlined
								required
								type="text"
							/>						
						</label>	

						<label>
							<span class="text--disabled text-truncate">Пароль</span>
							<v-text-field 
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								:type="showPassword ? 'text' : 'password'"
								outlined
								required
								@click:append="toggleShowPassword"
							/>						
						</label>

						<div class="d-flex flex-column align-center">
							<v-btn
								color="primary"
								x-large
							>
								Войти
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-form>
</template>

<script>
export default {
	name: 'AppLoginForm',

	data:() => ({
		showPassword: false,
	}),

	methods: {
		toggleShowPassword() {
			this.showPassword = !this.showPassword
		},
	},
}
</script>