<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevetion-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                  prepend-icon="mdi-account"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Пароль"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="confirm-password"
                  label="Повторить пароль"
                  type="password"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="secondary"
                @click="onSubmit"
                :disabled="!valid"
            >
              Создать аккаунт
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || 'Требуется электронная почта',
        v => /.+@.+\..+/.test(v) || 'Электронная почта должна быть действительной'
      ],
      passwordRules: [
        v => !!v || 'Требуется пароль',
        v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
      ],
      confirmPasswordRules: [
        v => !!v || 'Требуется пароль',
        v => v === this.password || 'Пароль должен совпадать'
      ]
    }
  },
  methods: {
    onSubmit(){
      if (this.$refs.form.validate()){
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>
