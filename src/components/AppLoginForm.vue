<template>
	<v-form @submit.prevent="submit">
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

							<v-card-subtitle 
								v-show="loginError"
								class="error--text"
							>
								Неверный логин или пароль
							</v-card-subtitle>
						</div>

						<label>
							<span class="text--disabled text-truncate">Логин</span>
							<v-text-field
								v-model="form.login"
								outlined
								required
								type="text"
								@keyup.enter="submit"
							/>						
						</label>	

						<label>
							<span class="text--disabled text-truncate">Пароль</span>
							<v-text-field 
								v-model="form.password"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								:type="showPassword ? 'text' : 'password'"
								outlined
								required
								@click:append="toggleShowPassword"
								@keyup.enter="submit"
							/>						
						</label>

						<div class="d-flex flex-column align-center">
							<v-btn
								color="primary"
								x-large
								@click="submit"
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
import { LOGIN } from '@/store/actions.type'

import { SEARCH_ROUTE_NAME } from '@/router/constants'

export default {
	name: 'AppLoginForm',

	data:() => ({
		showPassword: false,
		loginError: false,

		form: {
			login: '',
			password: '',
		},
	}),

	methods: {
		toggleShowPassword() {
			this.showPassword = !this.showPassword
		},

		submit() {
			try {
				this.loginError = false
				this.$store.dispatch(LOGIN, this.form)
				this.$router.push({ name: SEARCH_ROUTE_NAME })
			} catch (error) {
				console.error(error)
				this.loginError = true
			}
		},
	},
}
</script>