<template>

  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <th scope="row">{{ order.id }}</th>
        <th>{{ order.code }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "OrderList",
  components: {},
  // props: {
  //   orders: {
  //     type: [Object, Array],
  //     default: () => []
  //   }
  // },
  data() {
    return {
      loading: {
        table: true,
        data: true
      },
      headers: [
        this.$t("orderlist.title.id"),
        this.$t("orderlist.title.code")
      ],
      orders: [
        { id: 1, code: 'OL-001'},
        { id: 2, code: 'OL-002'},
        { id: 3, code: 'OL-003'},
      ]
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    }
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
