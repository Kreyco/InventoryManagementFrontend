<template>
  <div>
    <SearchForm @search="search"/>
    <OrderShow v-if="order" :order="order"/>
    <ProductDetail class="mt-10" v-if="order" v-show="order.products" :products="order.products"/>
    <OrderList class="mt-10" v-if="orders" :orders="orders"/>
  </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
import SearchAPI from "../services/Search";
import ProductDetail from "../components/ProductDetail";
import OrderShow from "../components/OrderShow";
import OrderList from "../components/OrderList";

export default {
  name: "SearchView",
  components: {OrderList, OrderShow, ProductDetail, SearchForm},
  data() {
    return {
      order: null,
      orders: null
    }
  },
  methods: {
    search(values) {
      let regex = /^\d+$/gm;

      if (values['id'] !== null && regex.test(values['id'])) {
        this.searchById(values['id']);
      } else if (values['date'] !== null) {
        this.searchByDeliveryDate(values['date']);
      }
    },
    async searchById(id){
      await SearchAPI.getById(id)
          .then((response) => {
            this.orders = null;
            this.order = response.data;

            this.$root.$emit('product-loaded');
          })
          .catch(error => console.log(error));
    },
    async searchByDeliveryDate(date){
      await SearchAPI.getByDeliveryDate(date)
          .then((response) => {
            this.order = null;
            this.orders = response.data;
            this.$store.commit("loadingState", {
              orders: false
            });
          })
          .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>

</style>