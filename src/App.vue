<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h4>{{ title }}</h4>
      </div>

      <v-spacer></v-spacer>

      <v-icon class="material-icons account">
        mdi-account-circle-outline
      </v-icon>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},
  data: () => ({
    title: 'Inventory Management'
  }),
};
</script>
