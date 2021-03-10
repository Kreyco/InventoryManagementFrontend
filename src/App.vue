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
      <div class="header purple">
        <v-toolbar-title>
          <v-icon class="white--text">mdi-square</v-icon>

          <v-icon class="white--text">mdi-circle</v-icon>

          <v-icon class="white--text">mdi-triangle</v-icon>
        </v-toolbar-title>
      </div>
      <div class="sidebar-nav">
        <ul>
          <li
              v-for="item in items"
              :value="item.active"
              v-bind:key="item.title"
              @click="item.active != item.active"
              :class="!item.items ? 'no-child' : ''"
          >
            <router-link :to="{ name: item.linkTo }" v-ripple exact>
              <v-icon
                  size="24px"
                  :color="item.color"
                  class="material-icons"
              >
                {{ item.action }}
              </v-icon>

              <span>
                {{ item.title }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
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
  computed: {
    items() {
      return [
        //Now the linkTo use name of the routes [routes file]
        {
          color: "purple",
          action: "mdi-card-search",
          title: this.$t("sidebar.title.search"),
          linkTo: "search",
          active: false,
        },
        {
          color: "blue",
          action: "mdi-currency-usd",
          title: this.$t("sidebar.title.orders"),
          linkTo: "orders",
          active: false,
        },
        {
          color: "light-blue",
          action: "mdi-view-list",
          title: this.$t("sidebar.title.products"),
          linkTo: "products",
          active: false,
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-nav {
  position: relative;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;

  ul {
    padding-left: 0;
    list-style: none;
    margin: 0;

    li:first-child {
      padding-top: 50px;
    }

    li {
      position: relative;

      a {
        padding: 5px 15px 10px;
        display: block;
        text-decoration: none;
      }

      a:hover {
        background-color: #2196F3;
        color: #ffffff;
      }
    }
  }
}

.v-navigation-drawer {
  .router-link-active {
    background: linear-gradient(to bottom right, rgba(33, 150, 243, .5019607843137255), rgba(3, 169, 244, .5019607843137255)) !important;
    color: #fff !important;
  }

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 256px;
    height: 65px;
    padding: 20px;
  }
}
</style>