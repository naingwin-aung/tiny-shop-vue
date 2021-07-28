<template>
    <Master>
        <div class="mx-5 mt-5">
            <div class="container-fluid">
                <div class="text-center">
                    <h2 class="text-primary mb-3">Hello, Guys</h2>
                    <p>Let's get everythings</p>
                </div>
            </div>
        </div>
    </Master>
</template>
<script>
import Master from "../Layout/Master"
export default {
    name : "Home",
    components : {
        Master
    }
}
</script>
<style scoped>
h2 {
    position: relative;
}

h2:hover:before {
    opacity: 1;
}

h2::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 170px;
    background: black;
    bottom: -10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
</style>