<template>
    <div class="not-found">
        <div class="content">
            <h1>404 - Page Not Found</h1>
            <p>Looks like you've followed a broken link or entered a URL that doesn't exist.</p>
            <router-link to="/" class="btn">Go Back Home</router-link>
        </div>
    </div>
</template>

<style scoped>
    .not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding: 2rem;
    }
    
    .content {
        max-width: 600px;
        width: 100%;
    }
    
    .btn {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        margin-top: 1rem;
        transition: background 0.3s;
    }
    
    .btn:hover {
        background: #45a049;
    }
</style>