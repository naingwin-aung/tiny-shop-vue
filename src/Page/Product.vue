<template>
    <div class="product">
        <Loader v-if="isload"/>
        <Master v-show="!isload">
            <div class="mx-5 my-5">
                <div class="container-fluid">
                    <div class="row">
                        <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-2">
                            <div class="card my-3 border-0">
                                <div class="card-body">
                                    <div class="text-center">
                                        <img :src="product.image" :alt="product.title">
                                    </div>
                                    <p>{{ product.title.length > 50 ? `${product.title.substr(1, 50)}...` : `${product.title}`}}</p>
                                    <span><b>$ {{product.price}}</b></span>
                                    <a class="btn btn-sm btn-dark float-end" @click="addToCart(product)">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    </div>
</template>
<script>
import Master from '../Layout/Master'
import Loader from '../Component/Loader'

import axios from 'axios'

export default {
    name : 'Product',
    components : {
        Master,
        Loader
    },
    data()  {
        return {    
            products : [],
            isload : true
        }
    },
    methods : {
        addToCart(product) {
            let cart = this.$root.cart
            let isInCart = cart.find(v => {
                return v.id == product.id
            });

            if(!isInCart) {
                return cart.push({...product, qty:1})
            }

            return isInCart.qty++
        }
    },
    created() {
        axios.get('https://fakestoreapi.com/products/')
        .then(res => {
            this.products = res.data
            this.isload = false
        })
        .catch(() => console.log("Error"))
    },
}
</script>

<style scoped>
    .card {
        height: 310px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    p {
        margin-top: 1em;
        height: 60px;
    }
    .card-body img {
        width: 154px;
        height: 154px;
    }
</style>