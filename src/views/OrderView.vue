<template>
<div>
  <OrderList :orders="orders"/>
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
      orders: []
    };
  },
  created() {
    this.read();
  },
  methods: {
    async read() {
      orderAPI
        .get()
        .then((response) => {
          this.orders = response.data;

          this.$root.$emit('orders-loaded');
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
