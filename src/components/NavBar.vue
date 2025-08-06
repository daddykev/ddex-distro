<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  currentTheme: {
    type: String,
    default: 'light'
  }
})

const emit = defineEmits(['toggle-theme'])

const router = useRouter()
const route = useRoute()

// Mobile menu state
const mobileMenuOpen = ref(false)

// Mock auth state (will be replaced with Firebase Auth)
const isAuthenticated = ref(false)
const user = ref(null)

const navigationItems = computed(() => {
  if (!isAuthenticated.value) {
    return [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Documentation', path: '/docs' },
      { name: 'API', path: '/api' }
    ]
  }
  
  return [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'New Release', path: '/releases/new' },
    { name: 'Deliveries', path: '/deliveries' },
    { name: 'Settings', path: '/settings' }
  ]
})

const handleLogin = () => {
  // TODO: Implement Firebase Auth login
  router.push('/login')
}

const handleSignup = () => {
  router.push('/signup')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand">
          <svg class="logo" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="var(--color-primary)"/>
            <path d="M8 12h16M8 16h16M8 20h10" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="brand-text">DDEX Distro</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="navbar-nav hidden-sm">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Desktop Actions -->
        <div class="navbar-actions hidden-sm">
          <button @click="$emit('toggle-theme')" class="btn-icon" aria-label="Toggle theme">
            <svg v-if="currentTheme === 'light'" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
            </svg>
          </button>

          <template v-if="!isAuthenticated">
            <button @click="handleLogin" class="btn btn-secondary btn-sm">
              Sign In
            </button>
            <button @click="handleSignup" class="btn btn-primary btn-sm">
              Get Started
            </button>
          </template>
          <template v-else>
            <div class="user-menu">
              <button class="user-avatar">
                <span>{{ user?.initials || 'U' }}</span>
              </button>
            </div>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="mobile-menu-btn block-sm hidden-md" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path v-if="!mobileMenuOpen" d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round"/>
            <path v-else d="M6 18L18 6M6 6l12 12" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="mobile-menu block-sm hidden-md">
        <div class="container">
          <div class="mobile-nav">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>
          <div class="mobile-actions">
            <button @click="$emit('toggle-theme')" class="btn btn-secondary btn-sm">
              {{ currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode' }}
            </button>
            <template v-if="!isAuthenticated">
              <button @click="handleLogin" class="btn btn-secondary">
                Sign In
              </button>
              <button @click="handleSignup" class="btn btn-primary">
                Get Started
              </button>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-dropdown);
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}

[data-theme="dark"] .navbar {
  background-color: rgba(45, 45, 45, 0.95);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--color-heading);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
}

.logo {
  flex-shrink: 0;
}

.brand-text {
  white-space: nowrap;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.nav-link {
  padding: var(--space-xs) var(--space-md);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  font-weight: var(--font-medium);
}

.nav-link:hover {
  color: var(--color-text);
  background-color: var(--color-bg-secondary);
}

.nav-link.active {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: none;
  background-color: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-icon:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: var(--font-semibold);
  transition: all var(--transition-base);
}

.user-avatar:hover {
  transform: scale(1.05);
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.mobile-menu-btn:hover {
  background-color: var(--color-bg-secondary);
}

.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
}

.mobile-nav {
  padding: var(--space-md) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.mobile-nav-link {
  padding: var(--space-sm) var(--space-md);
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.mobile-nav-link:hover {
  background-color: var(--color-bg-secondary);
}

.mobile-actions {
  padding: var(--space-md) 0;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* Transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>