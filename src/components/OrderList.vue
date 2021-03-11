<template>
  <v-data-table
      dense
      :headers="headers"
      :items="orders"
      :loading="loading"
      :loading-text="$t('loading_message')"
      class="elevation-10 pa-6"
      :footer-props="{itemsPerPageOptions: [10, 50, 100, -1]}"
  >
    <template v-slot:progress>
      <v-progress-linear
          color="purple"
          :height="4"
          :active="loading"
          indeterminate
      ></v-progress-linear>
    </template>

    <template v-slot:no-results>
      {{ $t("orderlist.title.no_results") }}
    </template>

    <template v-slot:no-data>
      {{ $t("orderlist.title.no_data_available") }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "OrderList",
  components: {},
  props: {
    orders: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading.orders;
    }
  },
  data() {
    return {
      headers: [
        {
          text: this.$t("orderlist.title.id"),
          align: "left",
          sortable: true,
          value: "id"
        },
        {
          text: this.$t("orderlist.title.name"),
          value: "name",
          align: "left",
          sortable: false
        },
        {
          text: this.$t("orderlist.title.code"),
          align: "left",
          sortable: false,
          value: "code"
        },
        {
          text: this.$t("orderlist.title.priority"),
          value: "priority",
          align: "left",
          sortable: false
        },
        {
          text: this.$t("orderlist.title.delivery_date"),
          value: "delivery_date",
          align: "left",
          sortable: false
        },
      ]
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
