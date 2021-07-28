<template>
    <Master>
        <div class="mx-5 my-5" v-if="cart.length">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>qty</th>
                                    <th>+ -</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in cart" :key="index">
                                    <td>{{product.id}}</td>
                                    <td>{{product.title}}</td>
                                    <td>{{product.price}}</td>
                                    <td>
                                        <img :src="product.image" :alt="product.title" width="114" height="114">
                                    </td>
                                    <td>{{product.qty}}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-3" @click="productIncrease(product)">+</button>
                                        <button class="btn btn-sm btn-outline-dark" @click="productDecrease(product)">-</button>
                                    </td>
                                    <td>{{total(product, index)}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center mt-5 card container p-3">
            <span class="fs-5 text-primary fw-bold">Nothing products in your cart</span>
        </div>
    </Master>
</template>
<script>
import Master from '../Layout/Master'

export default {
    name : 'Cart',
    data() {
        return {
            cart : []
        }
    },
    components : {
        Master
    },
    methods : {
        total(product, index) {
            let total = product.price * product.qty
            if(total) {
                return total.toFixed(2)
            }
            return this.cart.splice(index, 1)
        },
        productIncrease(product) {
            return product.qty++
        },
        productDecrease(product) {
            return product.qty--
        },
    },
    created() {
        this.cart = this.$root.cart
    }
}
</script>