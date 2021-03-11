<template>
  <v-data-table
      dense
      :headers="headers"
      :items="products"
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
      {{ $t("productlist.title.no_results") }}
    </template>

    <template v-slot:no-data>
      {{ $t("productlist.title.no_data_available") }}
    </template>

    <template v-slot:item.missing_quantity="{ item }">
      {{ item.missing_quantity > 0 ? $t("productlist.label.need_resupply") + '- [' + item.missing_quantity + item.unit + ']' : $t("productlist.label.no_need_resupply") }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "ProductDetail",
  components: {},
  props: {
    products: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading.products;
    }
  },
  data() {
    return {
      headers: [
        {
          text: this.$t("productlist.title.id"),
          align: "left",
          sortable: true,
          value: "id"
        },
        {
          text: this.$t("productlist.title.name"),
          value: "name",
          align: "left",
          sortable: false
        },
        {
          text: this.$t("productlist.title.code"),
          align: "left",
          sortable: false,
          value: "code"
        },
        {
          text: this.$t("productlist.title.sell_price"),
          align: "left",
          sortable: false,
          value: "sell_price"
        },
        {
          text: this.$t("productlist.title.buy_price"),
          align: "left",
          sortable: false,
          value: "buy_price"
        },
        {
          text: this.$t("productlist.title.quantity"),
          align: "left",
          sortable: false,
          value: "quantity"
        },
        {
          text: this.$t("productlist.title.missing_quantity"),
          align: "left",
          sortable: false,
          value: "missing_quantity"
        },
      ],
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
