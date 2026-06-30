<script setup lang="ts">
    import App_config from '@/constants/appConstants';
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="content_container">
        <div class="paragraph">
            <p>What makes us different</p>
        </div>

        <div class="content_items">
            <div class="content_details">
                <div class="icon">
                    <Icon icon="mdi:wifi-off" />
                </div>
                <div class="header">
                    <h4>Works offline, always</h4>
                    <p>
                        Using {{ App_config.name }} is a fully Offline app, It does not Required
                        any internet connectivity so all you Task, Bills, Notes, Budget and 
                        Overspending budget record are store securing on you Device. This Ensure 
                        that you Data is available All the time you need it.
                    </p>
                </div>
            </div>

            <div class="content_details">
                <div class="icon">
                    <Icon icon="mdi:account-off" />
                </div>
                <div class="header">
                    <h4>No account, no sign-up</h4>
                    <p>
                        Get started instantly—no account creation, registration, or sign-in 
                        required. Simply install the app and start using it. We don't ask for
                        unnecessary personal information, making it quick, simple, and private.
                    </p>
                </div>
            </div>

            <div class="content_details">
                <div class="icon">
                    <Icon icon="mdi:lock-outline" />
                </div>
                <div class="header">
                    <h4>Your data stays yours</h4>
                    <p>
                        Your privacy comes first. Your data is stored securely on your device,
                        and we do not collect, sell, or share your personal information.You
                        remain in complete control of your data.
                    </p>
                </div>
            </div>
        </div>

       <section class="download_container">
            <div class="download-header">
                <span class="badge">🚀 Get Started</span>
                <h1>Download in 4 Easy Steps</h1>
                <p class="subtitle">Get started in seconds. No sign-ups, no accounts—just download and go.</p>
            </div>

            <!-- Vertical Steps -->
            <div class="steps-list">

                <!-- Step 1 -->
                <div class="step-row">
                    <div class="step-left">
                        <div class="step-number">1</div>
                        <div class="step-line"></div>
                    </div>
                    <div class="step-card">
                        <div class="step-icon">
                            <Icon icon="mdi:cellphone" />
                        </div>
                        <div class="step-content">
                            <h4>Open your App Store</h4>
                            <p>
                                On your phone, open the <strong>Google Play Store</strong> (Android) or
                                <strong>App Store</strong> (iPhone). You can also tap a button below to go directly.
                            </p>
                            <div class="step-tags">
                                <span class="tag">
                                    <Icon icon="mdi:android" />
                                    Google Play
                                </span>
                                <span class="tag">
                                    <Icon icon="mdi:apple" />
                                    App Store
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="step-row">
                    <div class="step-left">
                        <div class="step-number">2</div>
                        <div class="step-line"></div>
                    </div>
                    <div class="step-card">
                        <div class="step-icon">
                            <Icon icon="mdi:magnify" />
                        </div>
                        <div class="step-content">
                            <h4>Search for Smart App</h4>
                            <p>
                                Type <strong>"Smart App"</strong> in the search bar and look for our icon.
                                Tap on it to open the app page.
                            </p>
                            <div class="step-tags">
                                <span class="tag">
                                    <Icon icon="mdi:magnify" />
                                    Smart App
                                </span>
                                <span class="tag green">
                                    <Icon icon="mdi:check-circle" />
                                    Free to download
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="step-row">
                    <div class="step-left">
                        <div class="step-number">3</div>
                        <div class="step-line"></div>
                    </div>
                    <div class="step-card">
                        <div class="step-icon">
                            <Icon icon="mdi:download-outline" />
                        </div>
                        <div class="step-content">
                            <h4>Tap Install</h4>
                            <p>
                                Hit the <strong>Install</strong> or <strong>Get</strong> button. The app is
                                lightweight and downloads in seconds — even on a slow connection.
                            </p>
                            <div class="step-tags">
                                <span class="tag">
                                    <Icon icon="mdi:database" />
                                    Under 70 MB
                                </span>
                                <span class="tag green">
                                    <Icon icon="mdi:wifi-off" />
                                    Works offline after install
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="step-row last">
                    <div class="step-left">
                        <div class="step-number">4</div>
                        <!-- no line after last step -->
                    </div>
                    <div class="step-card">
                        <div class="step-icon">
                            <Icon icon="mdi:rocket-launch" />
                        </div>
                        <div class="step-content">
                            <h4>Open and start right away</h4>
                            <p>
                                No sign-up, no account needed. Open Smart App and you're ready — start adding
                                tasks, bills, and budgets immediately.
                            </p>
                            <div class="step-tags">
                                <span class="tag green">
                                    <Icon icon="mdi:account-off" />
                                    No account required
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Download Buttons -->
            <div class="download-buttons">
                <a
                    href="https://play.google.com/store/apps/details?id=your.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-play"
                >
                    <Icon icon="logos:google-play-icon" />
                    <span>
                        <small>Get it on</small>
                        Google Play
                    </span>
                </a>

                <a
                    href="https://apps.apple.com/app/your-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-apple"
                >
                    <Icon icon="simple-icons:appstore" />
                    <span>
                        <small>Download on the</small>
                        App Store
                    </span>
                </a>
            </div>
        </section>
    </div>
</template>