<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import HeroView from './heroView.vue';
    import ContentView from './contentView.vue';
    import Footer from '@/components/footer.vue';
</script>

<template>
    <Navbar/>
    <HeroView/>

    <div class="main_container">
        <ContentView/>
    </div>

    <Footer/>
</template>
