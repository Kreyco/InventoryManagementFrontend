<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>{{ title }}</h1>
      </div>

      <v-spacer></v-spacer>

      <v-icon class="material-icons account">
        mdi-account-circle-outline
      </v-icon>
    </v-app-bar>

    <v-main>
<!--      <HelloWorld/>-->
      <router-view
          :csrf="csrf"
          :register-action="registerAction"
          :login-action="loginAction"
          :login-facebook="loginFacebook"
          :login-google="loginGoogle"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import OrderView from './components/OrderView';

export default {
  name: 'App',

  components: {
    OrderView,
    // HelloWorld,
  },
  data: () => ({
    title: 'Inventory Management'
  }),
};
</script>
