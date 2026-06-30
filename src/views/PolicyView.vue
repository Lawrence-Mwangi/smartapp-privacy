<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import App_config from '@/constants/appConstants';
    import { Icon } from '@iconify/vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar :isLightMode="true" />

    <div class="privacy_container">
        <h1>{{ App_config.name }} Privacy Policy</h1>

        <div class="privacy_content">
            <div class="update_time">
                <p>
                    Updated
                    <span>
                        {{ App_config.policies.privacy.lastUpdated }}
                    </span>
                </p>
            </div>

            <div class="privacy_data">
                <h3>Introduction</h3>
                <div class="data_content">
                    <p>
                        This Privacy Policy describes how <strong>{{ App_config.company }}</strong> ("we", "us", or "our") collects,
                        uses, stores, and protects information when you use <strong>{{ App_config.name }}</strong> ("the App"),
                        our website, and related services.
                    </p>

                    <p>
                        <strong>{{ App_config.name }}</strong> is designed with privacy in mind. It is an offline-first application that works without
                        an internet connection and does not require you to create an account or sign in. Your data is primarily
                        stored locally on your device, giving you full control over your information.
                    </p>

                    <p>
                        This Privacy Policy explains what information we collect (if any), how we use it, when it may be shared, and
                        the choices you have regarding your data. If you have any questions about this Privacy Policy or our privacy
                        practices, please contact us at <a :href="'mailto:' + App_config.email">{{ App_config.email }}</a>.
                    </p>

                    <ul>
                        <li>
                            <a href="#information-we-collect">
                                <Icon icon="mdi:database" />
                                What Information Do We Collect?
                            </a>
                        </li>
                        <li>
                            <a href="#how-we-use-information">
                                <Icon icon="mdi:cog" />
                                How Do We Use Your Information?
                            </a>
                        </li>
                        <li>
                            <a href="#How-do-we-share">
                                <Icon icon="mdi:share-variant" />
                                How We Share Your Information?
                            </a>
                        </li>
                        <li>
                            <a href="#how-do-we-keep">
                                <Icon icon="mdi:clock-outline" />
                                How Long Do We Keep Your Information?
                            </a>
                        </li>
                        <li>
                            <a href="#your-rights">
                                <Icon icon="mdi:account-check" />
                                What Are Your Rights?
                            </a>
                        </li>
                        <li>
                            <a href="#secure">
                                <Icon icon="mdi:shield-lock" />
                                How Do We Keep Your Data Secure?
                            </a>
                        </li>
                        <li>
                            <a href="#children">
                                <Icon icon="mdi:account-child" />
                                Children's Policy?
                            </a>
                        </li>
                        <li>
                            <a href="#third-party">
                                <Icon icon="mdi:apps" />
                                What Third Party Services Do We Use?
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <Icon icon="mdi:email-outline" />
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 1. Information We Collect -->
        <div class="privacy_data">
            <section id="information-we-collect" class="privacy_infor">
                <h3>What Information Do We Collect?</h3>
                <div class="data_content">
                    <p>
                        Because <strong>{{ App_config.name }}</strong> is an offline-first application, we collect as little data
                        as possible. Most information never leaves your device.
                    </p>

                    <h4>Information stored locally on your device</h4>
                    <p>
                        All content you create within the App — including notes, tasks, settings, and preferences — is stored
                        exclusively on your device using local storage mechanisms such as IndexedDB or the device file system.
                        We do not have access to this data.
                    </p>

                    <h4>Information collected automatically (if applicable)</h4>
                    <p>
                        If you choose to enable optional cloud sync or visit our website, we may automatically collect limited
                        technical information, including:
                    </p>
                    <ul class="content_list">
                        <li>Device type, operating system, and app version</li>
                        <li>Anonymous crash reports and performance diagnostics</li>
                        <li>General usage metrics (e.g., feature interactions, session length) — collected only in aggregate and never linked to you personally</li>
                        <li>IP address (used solely to determine approximate region for analytics, then discarded)</li>
                    </ul>

                    <h4>Information you voluntarily provide</h4>
                    <p>
                        If you contact us for support or feedback, you may provide your name, email address, and a description
                        of your issue. This information is used only to respond to your request.
                    </p>

                    <p class="highlight_note">
                        <Icon icon="mdi:information-outline" />
                        We do not collect any sensitive personal data such as financial information, health records, government
                        ID numbers, or biometric data.
                    </p>
                </div>
            </section>
        </div>

        <!-- 2. How We Use Your Information -->
        <div class="privacy_data">
            <section id="how-we-use-information" class="privacy_infor">
                <h3>How Do We Use Your Information?</h3>
                <div class="data_content">
                    <p>
                        We use the limited information we collect solely to operate, maintain, and improve
                        <strong>{{ App_config.name }}</strong>. Specifically, we may use it to:
                    </p>
                    <ul class="content_list">
                        <li>Provide and deliver the core features of the App</li>
                        <li>Diagnose crashes and fix technical bugs</li>
                        <li>Understand which features are most used so we can prioritise improvements</li>
                        <li>Respond to support requests you send us</li>
                        <li>Comply with applicable legal obligations</li>
                    </ul>
                    <p>
                        We do not use your information for advertising, profiling, or selling to third parties. We do not build
                        user profiles or use your data to train machine learning models.
                    </p>
                </div>
            </section>
        </div>

        <!-- 3. How We Share Your Information -->
        <div class="privacy_data">
            <section id="How-do-we-share" class="privacy_infor">
                <h3>How We Share Your Information?</h3>
                <div class="data_content">
                    <p>
                        We do not sell, rent, or trade your personal information. We only share data in the following limited
                        circumstances:
                    </p>

                    <h4>Service providers</h4>
                    <p>
                        We may share anonymous diagnostic data with trusted third-party service providers (e.g., crash
                        reporting tools) who assist us in operating the App. These providers are contractually bound to process
                        data only on our behalf and may not use it for their own purposes.
                    </p>

                    <h4>Legal requirements</h4>
                    <p>
                        We may disclose information if required to do so by law, court order, or governmental authority, or
                        when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                    </p>

                    <h4>Business transfers</h4>
                    <p>
                        If <strong>{{ App_config.company }}</strong> is involved in a merger, acquisition, or asset sale, any
                        information held would be transferred as part of that transaction. We will notify you before your
                        information becomes subject to a different privacy policy.
                    </p>

                    <p class="highlight_note">
                        <Icon icon="mdi:information-outline" />
                        Your locally stored app data — notes, tasks, files — is never shared with us or any third party unless
                        you explicitly use a sync or export feature.
                    </p>
                </div>
            </section>
        </div>

        <!-- 4. How Long Do We Keep Your Information -->
        <div class="privacy_data">
            <section id="how-do-we-keep" class="privacy_infor">
                <h3>How Long Do We Keep Your Information?</h3>
                <div class="data_content">
                    <p>
                        We retain data only for as long as necessary to fulfil the purposes outlined in this policy.
                    </p>

                    <h4>Local data</h4>
                    <p>
                        All data stored on your device remains there until you delete it or uninstall the App. We have no
                        control over, or access to, this data.
                    </p>

                    <h4>Diagnostic and analytics data</h4>
                    <p>
                        Anonymised crash reports and usage metrics are retained for up to <strong>12 months</strong>, after
                        which they are automatically purged or further anonymised.
                    </p>

                    <h4>Support correspondence</h4>
                    <p>
                        Emails or messages you send us for support purposes are retained for up to <strong>24 months</strong>
                        so we can track recurring issues and provide consistent assistance, then permanently deleted.
                    </p>
                </div>
            </section>
        </div>

        <!-- 5. Your Rights -->
        <div class="privacy_data">
            <section id="your-rights" class="privacy_infor">
                <h3>What Are Your Rights?</h3>
                <div class="data_content">
                    <p>
                        Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul class="content_list">
                        <li>
                            <strong>Right of access</strong> — Request a copy of the personal data we hold about you.
                        </li>
                        <li>
                            <strong>Right to rectification</strong> — Ask us to correct inaccurate or incomplete information.
                        </li>
                        <li>
                            <strong>Right to erasure</strong> — Request that we delete your personal data where we have no
                            compelling reason to continue processing it.
                        </li>
                        <li>
                            <strong>Right to restrict processing</strong> — Ask us to limit how we use your data in certain
                            circumstances.
                        </li>
                        <li>
                            <strong>Right to data portability</strong> — Receive your data in a structured, machine-readable
                            format.
                        </li>
                        <li>
                            <strong>Right to object</strong> — Object to processing based on legitimate interests or for
                            direct marketing purposes.
                        </li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at
                        <a :href="'mailto:' + App_config.email">{{ App_config.email }}</a>. We will respond within
                        <strong>30 days</strong>. Because most data resides on your device, many of these rights can be
                        exercised directly by you — for example, by deleting your local data or uninstalling the App.
                    </p>
                </div>
            </section>
        </div>

        <!-- 6. Data Security -->
        <div class="privacy_data">
            <section id="secure" class="privacy_infor">
                <h3>How Do We Keep Your Data Secure?</h3>
                <div class="data_content">
                    <p>
                        Protecting your data is a core design principle of <strong>{{ App_config.name }}</strong>, not an
                        afterthought.
                    </p>

                    <h4>On-device security</h4>
                    <p>
                        Your data is stored locally and benefits from the security model of your operating system. The App
                        does not request unnecessary device permissions and does not expose your data to other apps.
                    </p>

                    <h4>In transit</h4>
                    <p>
                        If any data is transmitted (e.g., for optional sync or support), we use industry-standard
                        <strong>TLS encryption</strong> to protect it in transit.
                    </p>

                    <h4>At rest (cloud features)</h4>
                    <p>
                        Any data stored server-side as part of optional features is encrypted at rest using
                        <strong>AES-256</strong> encryption.
                    </p>

                    <p>
                        While we implement strong safeguards, no system is completely immune to risk. We encourage you to keep
                        your device operating system and the App up to date, and to use your device's own lock-screen
                        protection.
                    </p>
                </div>
            </section>
        </div>

        <!-- 7. Children's Policy -->
        <div class="privacy_data">
            <section id="children" class="privacy_infor">
                <h3>Children's Policy</h3>
                <div class="data_content">
                    <p>
                        <strong>{{ App_config.name }}</strong> is not directed at children under the age of <strong>13</strong>
                        (or the applicable age of digital consent in your country). We do not knowingly collect personal
                        information from children.
                    </p>
                    <p>
                        If you are a parent or guardian and believe your child has provided us with personal information,
                        please contact us immediately at
                        <a :href="'mailto:' + App_config.email">{{ App_config.email }}</a>. We will take prompt steps to
                        delete such information from our records.
                    </p>
                    <p>
                        Because the App operates offline and requires no account registration, there is minimal risk of
                        inadvertent data collection from minors. Parental supervision is still encouraged when children use
                        the App.
                    </p>
                </div>
            </section>
        </div>

        <!-- 8. Third-Party Services -->
        <div class="privacy_data">
            <section id="third-party" class="privacy_infor">
                <h3>What Third-Party Services Do We Use?</h3>
                <div class="data_content">
                    <p>
                        We keep third-party integrations to a minimum. Where we do use them, we vet providers carefully and
                        limit the data they receive to what is strictly necessary.
                    </p>

                    <div class="third_party_table">
                        <div class="table_row table_header">
                            <span>Service</span>
                            <span>Purpose</span>
                            <span>Data Shared</span>
                        </div>
                        <div class="table_row">
                            <span>Crash Reporting Tool</span>
                            <span>Diagnosing technical issues</span>
                            <span>Anonymous device info, stack traces</span>
                        </div>
                        <div class="table_row">
                            <span>Analytics (optional)</span>
                            <span>Understanding feature usage</span>
                            <span>Aggregated, non-identifiable usage events</span>
                        </div>
                        <div class="table_row">
                            <span>Cloud Sync (optional)</span>
                            <span>Cross-device data access</span>
                            <span>Encrypted app data, only when enabled by you</span>
                        </div>
                    </div>

                    <p>
                        Third-party services have their own privacy policies. We encourage you to review them. We are not
                        responsible for the privacy practices of external services.
                    </p>

                    <p>
                        You can opt out of optional analytics and cloud sync at any time from the App's
                        <strong>Settings → Privacy</strong> panel.
                    </p>
                </div>
            </section>
        </div>

        <!-- 9. Contact -->
        <div class="privacy_data">
            <section id="contact" class="privacy_infor">
                <h3>Contact Us</h3>
                <div class="data_content">
                    <p>
                        If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your data,
                        please reach out — we take every inquiry seriously and aim to respond within <strong>5 business days</strong>.
                    </p>

                    <div class="contact_block">
                        <div class="contact_item">
                            <Icon icon="mdi:email-outline" />
                            <span>
                                Email:
                                <a :href="'mailto:' + App_config.email">{{ App_config.email }}</a>
                            </span>
                        </div>
                        <div class="contact_item">
                            <Icon icon="mdi:office-building" />
                            <span>Company: <strong>{{ App_config.company }}</strong></span>
                        </div>
                    </div>

                    <p>
                        We may update this Privacy Policy from time to time. When we do, we will revise the "Updated" date at
                        the top of this page and, where appropriate, notify you via the App or by email. Continued use of
                        <strong>{{ App_config.name }}</strong> after changes are posted constitutes your acceptance of the
                        revised policy.
                    </p>
                </div>
            </section>
        </div>
    </div>

    <Footer/>
</template>