<template>
  <div class="login-wrapper">
    <div class="login-fields">
      <h3>{{ $t("register.title.title") }}</h3>
      <div>
        <v-form
            class="form"
            v-model="valid"
            :action="registerAction"
            lazy-validation
            method="POST"
            ref="form"
            @submit.prevent="register"
        >
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="username"
                  name="username"
                  :counter="2"
                  :rules="usernameRules"
                  :label="$t('register.label.username')"
                  autocomplete="username"
                  :required="true"
                  outlined
                  dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="email"
                  name="email"
                  :rules="emailRules"
                  :label="$t('register.label.email')"
                  autocomplete="email"
                  :required="true"
                  outlined
                  dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="password"
                  name="password"
                  :counter="8"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  color="primary"
                  :label="$t('register.label.password')"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  autocomplete="new-password"
                  :required="true"
                  outlined
                  dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="passwordConfirm"
                  name="password_confirmation"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordConfirmRules"
                  color="primary"
                  :label="$t('register.label.confirm_password')"
                  :type="show2 ? 'text' : 'password'"
                  @click:append="show2 = !show2"
                  autocomplete="confirm-password"
                  :required="true"
                  outlined
                  dense
              />
            </v-col>
          </v-row>

          <v-btn block :disabled="!valid" type="submit" color="primary">
            {{ $t("register.title.button") }}
          </v-btn>

          <div class="pt20">
            <router-link to="./login">{{
                $t("register.title.login_url")
              }}
            </router-link>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/logic/auth'

export default {
  name: "Signin",
  props: [],
  data() {
    return {
      registerAction: '',
      valid: true,
      show1: false,
      show2: false,
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      userTypeId: 1,
      usernameRules: [
        value => !!value || this.$t("signin.help.name_required"),
        value => (value && value.length >= 2) || this.$t("signin.help.name_length")
      ],
      emailRules: [
        value => !!value || this.$t("signin.help.email_required"),
        value => /.+@.+/.test(value) || this.$t("signin.help.email_valid")
      ],
      passwordRules: [
        value => !!value || this.$t("signin.help.password_required"),
        // value => value.length >= 8 || this.$t("signin.help.password_length")
      ],
      passwordConfirmRules: [
        value => !!value || this.$t("signin.help.password_confirmation_required"),
        // value => value.length >= 8 || this.$t("signin.help.password_length"),
        () =>
            this.password === this.passwordConfirm ||
            this.$t("signin.help.password_equal")
      ]
    };
  },
  methods: {
    validate(e) {
      if (this.$refs.form.validate()) {
        return;
      }

      e.preventDefault();
    },
    async register() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordConfirm);

      // const response = await auth.register(this.email, this.password);
      // console.log(response);

      await auth.register(this.email, this.password)
      .then(response => {
        console.log(response.data);
        this.$router.push("/");
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>

<style scoped></style>
