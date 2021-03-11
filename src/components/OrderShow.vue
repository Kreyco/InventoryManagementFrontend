<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-card-title class="mx-auto">
      {{ $t("order.title.show") }} - {{ order.name }}
    </v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-title>
              {{ order.code }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              {{ priority[order.priority] }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              {{ order.delivery_date }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "OrderShow",
  props: {
    order: {
      type: Object,
      default: () => { '' }
    }
  },
  data() {
    return {
      products: [],
      priority: {1: 'low', 2: 's', 3: 'medium', 4: 'important', 5: 'high'}
    }
  }
}
</script>

<style scoped>

</style>