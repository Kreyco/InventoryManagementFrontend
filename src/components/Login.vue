<template>
  <div>
    <div class="login-wrapper">
      <div class="login-fields">
        <h3>{{ $t("login.title.title") }}</h3>
        <div>
          <v-form
              class="readmin-form"
              :action="loginAction"
              method="POST"
              v-model="valid"
              ref="form"
              @submit="validate"
              lazy-validation
          >
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('login.label.email')"
                    :placeholder="$t('login.help.email_holder')"
                    name="email"
                    type="email"
                    :required="true"
                    autocomplete="email"
                    outlined
                    dense
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    :label="$t('login.label.password')"
                    :placeholder="$t('login.help.password_holder')"
                    name="password"
                    type="password"
                    :required="true"
                    autocomplete="current-password"
                    outlined
                    dense
                />
              </v-col>
            </v-row>

            <div class="pt20">
              <v-btn
                  block
                  color="primary"
                  type="submit"
                  :disabled="!valid"
              >
                {{ $t("login.title.button") }}
              </v-btn
              >
            </div>

            <div class="pt20">
              <router-link to="./signin">
                {{ $t("login.title.register_url") }}
              </router-link>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: [],
  data() {
    return {
      loginAction: '',
      valid: true,
      email: "",
      password: "",
      emailRules: [
        v => !!v || this.$t("signin.help.email_required"),
        v => /.+@.+/.test(v) || this.$t("signin.help.email_valid")
      ],
      passwordRules: [
        v => !!v || this.$t("signin.help.password_required"),
        v => v.length >= 1 || this.$t("login.help.password_length")
      ]
    };
  },
  methods: {
    validate(e) {
      if (this.$refs.form.validate()) {
        return;
      }

      e.preventDefault();
    }
  }
};
</script>
