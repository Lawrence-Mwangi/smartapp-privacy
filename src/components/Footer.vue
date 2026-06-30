<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Brand Section -->
      <div class="footer-brand">
        <div class="brand-logo">
            <img src="/public/assets/images/ic_notification.png" alt="">
          <span>SmartApp</span>
          <span class="offline-badge">
            Offline
          </span>
        </div>
        <p class="brand-description">
          Your all-in-one offline productivity tool. All data stays on your device — 
          private, secure, and always accessible. No internet required.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <h4>Features</h4>
        <ul>
          <li><RouterLink to="/about"> Notes</RouterLink></li>
          <li><RouterLink to="/about">Bills</RouterLink></li>
          <li><RouterLink to="/about"> Tasks</RouterLink></li>
          <li><RouterLink to="/about">Home</RouterLink></li>
          <li><RouterLink to="/about">Settings</RouterLink></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Legal</h4>
        <ul>
          <li><RouterLink to="/privacy"> Privacy Policy</RouterLink></li>
        </ul>
      </div>

        <!-- Offline Resources & App Stores -->
        <div class="footer-offline-resources">
            <h4>Offline Resources</h4>
            <p>Everything you need works without internet.</p>

            <!-- App Store Badges -->
            <!-- cd e/_ -->
      </div>
    </div>

    <hr>

    <!-- Bottom Bar -->
    <div class="footer_bottom">
        <p>&copy; 2026 SmartApp. All rights reserved.</p> 
    </div>
  </footer>
</template>

<script setup lang="ts">
//
</script>