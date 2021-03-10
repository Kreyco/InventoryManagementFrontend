<template>
<div>
  <ProductList :products="products"/>
</div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import productAPI from '../logic/Product'

export default {
  name: "ProductView",
  components: {
    ProductList
  },
  props: {},
  data() {
    return {
      loading: {
        data: true,
      },
      products: []
    };
  },
  created() {
    this.read();
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    },
    async read() {
      productAPI
        .get()
        .then((response) => {
          this.products = response.data;

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
