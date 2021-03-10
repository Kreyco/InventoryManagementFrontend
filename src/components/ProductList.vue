<template>
  <div>
    <v-skeleton-loader
        :loading="loading.table"
        transition="scale-transition"
        class="mx-auto"
        elevation="10"
        ref="skeleton"
        :types="{
        'table-heading': 'heading, button',
        'table-thead': 'heading@7',
        'table-tbody': 'table-row-divider@7',
        'table-row': 'table-cell@7'
      }"
        type="table"
        :tile="true"
    >
      <v-data-table
          dense
          :headers="headers"
          :items="products"
          :loading="loading.data"
          :loading-text="$t('loading_message')"
          class="elevation-10 pa-6"
          :footer-props="{itemsPerPageOptions: [10, 50, 100, -1]}"
      >
        <template v-slot:progress>
          <v-progress-linear
              color="purple"
              :height="4"
              :active="loading.data"
              indeterminate
          ></v-progress-linear>
        </template>

        <template v-slot:no-results>
          {{ $t("userlist.title.no_results") }}
        </template>

        <template v-slot:no-data>
          {{ $t("userlist.title.no_data_available") }}
        </template>
      </v-data-table>
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  components: {},
  props: {
    products: {
      type: [Object, Array],
      default: () => []
    }
  },
  data() {
    return {
      loading: {
        table: true,
        data: true
      },
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
        }
      ],
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    }
  },
  created() {
    this.loadingState('table', false);
    this.loadingState('data', false);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
