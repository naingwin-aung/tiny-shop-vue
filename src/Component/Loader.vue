<template>
    <div class="container d-flex justify-content-center align-items-center loader">
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    name : "Loader"
}
</script>

<style scoped>
.loader {
    height: 100vh;
}
</style>