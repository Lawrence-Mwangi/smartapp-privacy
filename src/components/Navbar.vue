<script setup lang="ts">
    import App_config from '@/constants/appConstants';
    import { RouterLink } from 'vue-router';
    import { ref, onMounted, onUnmounted } from 'vue';

    // Props
    const props = defineProps<{
        isLightMode?: boolean;
    }>();

    const isScrolled = ref(false);
    const isAtHero = ref(true);
    const isMenuOpen = ref(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        const heroThreshold = viewportHeight * 0.85; 
        
        isAtHero.value = scrollY < heroThreshold;
        isScrolled.value = scrollY > 50;
    };

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
        isMenuOpen.value = false;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); 
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<template>
    <div 
        class="navbar_container" 
        :class="{
            'scrolled': isScrolled,
            'light-mode': !isAtHero || props.isLightMode,
            'menu-open': isMenuOpen
        }"
    >
        <div class="logo">
            <div class="img">
                <img 
                    src="/assets/images/ic_notification.png" 
                    :alt="`${App_config.name} Logo`"
                >
            </div>
            <RouterLink to="/" class="logo-text">{{ App_config.name }}</RouterLink>
        </div>

        <!-- Checkbox for menu (hidden) -->
        <input 
            type="checkbox" 
            id="menu-toggle" 
            class="menu-toggle"
            :checked="isMenuOpen"
            @change="toggleMenu"
        >

        <div class="navbar_links" :class="{ 'open': isMenuOpen }">
            <RouterLink to="/about" @click="closeMenu">About Us</RouterLink>
            <RouterLink to="/privacy" @click="closeMenu">Privacy Policy</RouterLink>

            <div class="button">
                <a 
                    href="https://play.google.com/store/apps/details?id=your.app.package.name" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    @click="closeMenu"
                >
                    Download App
                </a>
            </div>
        </div>

        <!-- Burger div triggers menu -->
        <div class="burger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>