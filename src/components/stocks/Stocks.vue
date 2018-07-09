<template>
   <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
   </div>
</template>

<script>
    import Stock from './Stock.vue';
  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BTC', price: 6.797},
          {id: 2, name: 'ETH', price: 485.11},
          {id: 3, name: 'TRX', price: 0.036734},
          {id: 4, name: 'XLM', price: 0.212128}
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>