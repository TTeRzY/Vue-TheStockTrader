<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.quotes.USD.price }})</small>
                    <small>(Market Cap: {{ stock.quotes.USD.market_cap }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))"
                    >{{ insufficientFunds ? 'Not enough' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>

    export default {
        props: ['stock'],
        data() {
            return {
              quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
          insufficientFunds() {
                return this.quantity * this.stock.quotes.USD.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.quotes.USD.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>