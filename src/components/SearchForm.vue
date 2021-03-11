<template>
  <v-card class="mx-auto mb-10" max-width="900px">
    <v-card-title>
      {{ $t("search.title.consultation") }}
    </v-card-title>
    <v-card-text>
      <v-form role="form" @submit.prevent="search">
        <v-row>
          <v-col cols="6" sm="6">
            <v-text-field
                v-model.number="orderId"
                type="text"
                :placeholder="$t('search.help.order_placeholder')"
                :label="$t('search.label.order_id')"
                outlined
                dense
            />
          </v-col>
          <v-col cols="6" sm="6">
            <v-menu
                v-model="menu_date"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="delivery_date"
                    prepend-icon="mdi-calendar-month"
                    readonly
                    v-on="on"
                    v-bind="attrs"
                    :label="$t('search.title.delivery_date')"
                    outlined
                    dense
                />
              </template>
              <v-date-picker
                  v-model="delivery_date"
                  @input="menu_date = false"
                  :locale="$i18n.locale"
                  outlined
                  dense
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
                small
                color="primary"
                type="submit"
            >
              {{ $t("search.title.get_orders") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SearchForm",
  props: {},
  data() {
    return {
      delivery_date: null,
      menu_date: false,
      orderId: null,
    }
  },
  methods: {
    search() {
      console.log('jodio');
      console.log(this.orderId);
      console.log(this.delivery_date);

      this.$emit('search', {id: this.orderId, date: this.delivery_date});
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
