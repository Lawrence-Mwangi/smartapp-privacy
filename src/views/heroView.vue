<script setup lang="ts">
    import App_config from '@/constants/appConstants';
    import { Icon } from '@iconify/vue';
</script>

<template>
    <section class="hero">
        <!-- Ambient background -->
        <div class="hero__bg" aria-hidden="true">
            <div class="hero__bg-orb hero__bg-orb--1"></div>
            <div class="hero__bg-orb hero__bg-orb--2"></div>
            <div class="hero__bg-grid"></div>
        </div>

        <!-- Left: Content -->
        <div class="hero__content">
            <span class="hero__eyebrow">
                <span class="hero__eyebrow-dot"></span>
                Now available on Android & IOS
            </span>

            <h1 class="hero__headline">
                <span class="hero__headline-top">The smarter way</span>
                <span class="hero__headline-bottom">to {{ App_config.name }}</span>
            </h1>

            <p class="hero__body">{{ App_config.tagline }}</p>

            <div class="hero__actions">
                <a
                    href="https://play.google.com/store/apps/details?id=your.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero__btn hero__btn--primary"
                >
                    <Icon icon="logos:google-play-icon" class="hero__btn-icon" />
                    <span>
                        <small>Get it on</small>
                        Google Play
                    </span>
                </a>

                <a
                   href="https://apps.apple.com/app/your-app-name/id1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero__btn hero__btn--primary"
                >

                    <Icon icon="simple-icons:appstore" class="hero__btn-icon" />     
                    <span>
                        <small>Download On The</small>
                        App Store
                    </span>
                </a>
            </div>
        </div>

        <!-- Right: Phone mockups -->
        <div class="hero__phones" aria-hidden="true">
            <!-- Left phone -->
            <div class="hero__phone hero__phone--left">
                <div class="hero__phone-frame">
                    <img src="/assets/images/screenshot5.png" alt="" />
                </div>
            </div>

            <!-- Center phone (featured) -->
            <div class="hero__phone hero__phone--center">
                <div class="hero__phone-glow" aria-hidden="true"></div>
                <div class="hero__phone-frame">
                    <img src="/assets/images/screenshot2.png" alt="" />
                    <div class="hero__phone-shimmer"></div>
                </div>
                <span class="hero__phone-badge">✦ Featured</span>
            </div>

            <!-- Right phone -->
            <div class="hero__phone hero__phone--right">
                <div class="hero__phone-frame">
                    <img src="/assets/images/screenshot3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>