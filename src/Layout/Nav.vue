<template>
    <nav class="navbar navbar-expand-lg navbar-primary bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Tiny Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/product">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/cart"> 
                            <i class="bi bi-cart-check-fill"></i>
                            <small class="badge bg-dark" style="font-size: 9px">{{cart.length}}</small>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name : 'Nav',
    data() {
        return {
            cart : []
        }
    },
    created() {
        this.cart = this.$root.cart
    }
}
</script>