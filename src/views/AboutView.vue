<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import App_config from '@/constants/appConstants';
    import Footer from '@/components/footer.vue';
</script>


<template>
  <Navbar :isLightMode="true" />
  <div class="main_container about-page">
    <!-- Hero About Section -->
    <section class="about-hero">
      <div class="about-content">
        <span class="badge">📱 Offline First</span>
        <h1>About <span class="highlight">SmartApp</span></h1>
        <p class="description">
          SmartApp is your all-in-one offline productivity tool designed to keep you organized 
          wherever you are. No internet connection? No problem. All your data stays locally 
          on your device — private, secure, and always accessible.
        </p>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Offline</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5</span>
            <span class="stat-label">Core Features</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">⚡</span>
            <span class="stat-label">Instant Sync</span>
          </div>
        </div>
        <div class="feature-list">
          <span class="feature-pill"><i class="fas fa-pencil-alt"></i> Notes</span>
          <span class="feature-pill"><i class="fas fa-file-invoice"></i> Bills</span>
          <span class="feature-pill"><i class="fas fa-tasks"></i> Tasks</span>
          <span class="feature-pill"><i class="fas fa-home"></i> Home</span>
          <span class="feature-pill"><i class="fas fa-cog"></i> Setting</span>
        </div>
      </div>
    </section>

    <!-- Why Choose SmartApp -->
    <section class="why-choose">
        <h2>Why <span class="highlight">Choose SmartApp?</span></h2>
        <div class="benefits-grid">
            <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>Your data never leaves your device. No cloud, no tracking, complete control.</p>
            </div>
            <div class="benefit-card">
            <div class="benefit-icon">📶</div>
            <h3>Works Offline</h3>
            <p>Access your notes, bills, and tasks anywhere — even without internet connection.</p>
            </div>
            <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instant loading and real-time updates with zero latency.</p>
            </div>
            <div class="benefit-card">
            <div class="benefit-icon">💰</div>
            <h3>100% Free</h3>
            <p>No subscriptions, no hidden costs. All features available at no charge.</p>
            </div>
        </div>
        </section>

        <!-- Analytics Dashboard -->
        <section class="analytics-dashboard">
        <h2>Your <span class="highlight">Financial Overview</span></h2>
        <p class="analytics-subtitle">Track your spending, tasks, and bills at a glance</p>
        
        <div class="analytics-grid">
            <div class="analytics-card budget">
            <div class="analytics-header">
                <i class="fas fa-wallet"></i>
                <h3>Monthly Budget</h3>
            </div>
            <div class="analytics-value">{{ App_config.currency}} 3,250</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 68%"></div>
            </div>
            <div class="analytics-detail">
                <span>Spent: {{ App_config.currency}} 2,210</span>
                <span>Remaining:  {{ App_config.currency}} 1,040</span>
            </div>
            </div>

            <div class="analytics-card spending">
            <div class="analytics-header">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Overspending Alert</h3>
            </div>
            <div class="overspending-item">
                <span>Dining Out</span>
                <span class="overspending-amount">+{{ App_config.currency}} 120</span>
            </div>
            <div class="overspending-item">
                <span>Entertainment</span>
                <span class="overspending-amount">+{{ App_config.currency}} 85</span>
            </div>
            <div class="overspending-item">
                <span>Shopping</span>
                <span class="overspending-amount">+{{ App_config.currency}} 45</span>
            </div>
            <div class="analytics-total">
                <span>Total Overspend</span>
                <span class="total-amount">{{ App_config.currency}} 250</span>
            </div>
            </div>

            <div class="analytics-card tasks-summary">
            <div class="analytics-header">
                <i class="fas fa-tasks"></i>
                <h3>Task Summary</h3>
            </div>
            <div class="task-stat">
                <span class="task-label">Completed</span>
                <span class="task-count completed-count">12</span>
            </div>
            <div class="task-stat">
                <span class="task-label">In Progress</span>
                <span class="task-count progress-count">5</span>
            </div>
            <div class="task-stat">
                <span class="task-label">Pending</span>
                <span class="task-count pending-count">8</span>
            </div>
            <div class="task-stat total">
                <span class="task-label">Total Tasks</span>
                <span class="task-count">25</span>
            </div>
            </div>

            <div class="analytics-card bills-summary">
            <div class="analytics-header">
                <i class="fas fa-file-invoice"></i>
                <h3>Bill Summary</h3>
            </div>
            <div class="bill-stat">
                <span class="bill-label">Total Bills</span>
                <span class="bill-count">8</span>
            </div>
            <div class="bill-stat paid">
                <span class="bill-label">Paid</span>
                <span class="bill-count">5</span>
            </div>
            <div class="bill-stat pending">
                <span class="bill-label">Pending</span>
                <span class="bill-count">3</span>
            </div>
            <div class="bill-total">
                <span>Total Amount</span>
                <span>{{ App_config.currency}} 1,245.00</span>
            </div>
            </div>
        </div>
        </section>

        <!-- Screenshot Showcase with Actual Images -->
        <section class="screenshot-showcase">
        <h2>App <span class="highlight">Screenshots</span></h2>
        <p class="showcase-subtitle">See SmartApp in action with real screenshots</p>
        
        <div class="screenshot-grid">
            <div class="screenshot-card">
            <div class="screenshot-image">
                <img src="/public/assets/images/screenshot1.png" alt="Notes Feature Screenshot" />
                <div class="screenshot-overlay">
                <i class="fas fa-search-plus"></i>
                <span>View</span>
                </div>
            </div>
            <p class="screenshot-label"><i class="fas fa-pencil-alt"></i> Notes</p>
            </div>

            <div class="screenshot-card">
            <div class="screenshot-image">
                <img src="/public/assets/images/screenshot2.png" alt="Bills Feature Screenshot" />
                <div class="screenshot-overlay">
                <i class="fas fa-search-plus"></i>
                <span>View</span>
                </div>
            </div>
            <p class="screenshot-label"><i class="fas fa-file-invoice"></i> Bills</p>
            </div>

            <div class="screenshot-card">
            <div class="screenshot-image">
                <img src="/public/assets/images/screenshot4.png" alt="Tasks Feature Screenshot" />
                <div class="screenshot-overlay">
                <i class="fas fa-search-plus"></i>
                <span>View</span>
                </div>
            </div>
            <p class="screenshot-label"><i class="fas fa-tasks"></i> Tasks</p>
            </div>

            <div class="screenshot-card">
            <div class="screenshot-image">
                <img src="/public/assets/images/screenshot1.png" alt="Home Feature Screenshot" />
                <div class="screenshot-overlay">
                <i class="fas fa-search-plus"></i>
                <span>View</span>
                </div>
            </div>
            <p class="screenshot-label"><i class="fas fa-home"></i> Home</p>
            </div>
        </div>
        </section>
    </div>

    <Footer/>
</template>
