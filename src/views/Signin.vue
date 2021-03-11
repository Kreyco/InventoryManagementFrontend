<template>
  <div>
    <v-card class="mx-auto mb-10" max-width="900px">
      <v-card-title>
        {{ $t("login.title.title") }}
      </v-card-title>
      <v-card-text>
        <v-form
            class="form"
            v-model="valid"
            :action="registerAction"
            lazy-validation
            method="POST"
            ref="form"
            @submit.prevent="handleRegister"
        >
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="name"
                  name="username"
                  :counter="2"
                  :rules="usernameRules"
                  :label="$t('signin.label.name')"
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
                  :label="$t('signin.label.email')"
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
                  :label="$t('signin.label.password')"
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
                  :label="$t('signin.label.confirm_password')"
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
            {{ $t("signin.title.button") }}
          </v-btn>

          <div class="pt20 mt-5">
            <router-link to="./login">{{
                $t("signin.title.login_url")
              }}
            </router-link>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: "Signin",
  props: [],
  data() {
    return {
      registerAction: '',
      valid: true,
      show1: false,
      show2: false,
      name: "",
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
      ],
      message: '',
      user: new User('', '', ''),
      submitted: false,
      successful: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/search');
    }
  },
  methods: {
    validate(e) {
      if (this.$refs.form.validate()) {
        return;
      }

      e.preventDefault();
    },
    handleRegister() {
      this.message = '';
      this.submitted = true;

        if (this.isValid) {
          this.$store.dispatch('auth/register', this.user).then(
              data => {
                this.message = data.message;
                this.successful = true;
                this.$router.push('/');
              },
              error => {
                this.message =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                this.successful = false;
              }
          );
        }
    }
  }
};
</script>

<style scoped></style>
