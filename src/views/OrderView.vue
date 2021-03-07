<template>
<div>
  <OrderList orders/>
</div>
</template>

<script>
import OrderList from '../components/OrderList.vue'
import orderAPI from '../logic/Order'

export default {
  name: "OrderView",
  components: {
    OrderList
  },
  props: {},
  data() {
    return {
      loading: {
        data: true,
      },
      orders: []
    };
  },
  created() {
    // this.read();
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    },
    async read() {
      orderAPI
        .get()
        .then((response) => {
          this.orders = response.data;

          this.loadingState("data", false);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    searchOrder(value) {
      if (value != null && !this.checkForm(value)) {
        return false;
      }

      orderAPI
      .getById(value)
      .then((response) => {
        this.orders = response.data;

        this.loadingState("data", false);
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    checkForm(value) {
      let regex = /^\d+$/gm;

      return regex.test(value);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
