<template>
    <div class="container mx-auto px-4">
        <p>Projects Page</p>
        <i data-feather="home"></i>
    </div>
</template>

<script>
import feather from 'feather-icons'

export default {
    name: 'Projects',
    props: {
        msg: String
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    }
}
</script>

<style scoped>

</style>
