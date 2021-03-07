<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon class="deep-purple--text">mdi-square</v-icon>

        <v-icon class="blue--text">mdi-circle</v-icon>

        <v-icon class="light-blue--text">mdi-triangle</v-icon>

        {{  title }}
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
    >

        <router-link to="./login">
          <v-icon class="deep-purple--text">
            mdi-square
          {{ $t("login.title.register_url") }}
          </v-icon>
        </router-link>

    </v-navigation-drawer>

    <v-main class="ligth lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    title: 'Inventory Management'
  }),
};
</script>
