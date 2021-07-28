<template>
    <div class="master">
        <Nav />
        <slot />
    </div>
</template>
<script>
import Nav from './Nav'

export default {
    name : 'Master',
    components : {
        Nav
    }
}
</script>