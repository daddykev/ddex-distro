<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true
  
  try {
    // TODO: Implement Firebase Auth login
    console.log('Login attempt:', { email: email.value, password: password.value })
    
    // Simulate login success
    setTimeout(() => {
      router.push('/dashboard')
    }, 1000)
  } catch (error) {
    errorMessage.value = 'Invalid email or password'
  } finally {
    isLoading.value = false
  }
}

const handleGoogleLogin = async () => {
  // TODO: Implement Google OAuth
  console.log('Google login')
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-card card">
        <div class="card-body">
          <div class="auth-header">
            <div class="auth-logo">
              <font-awesome-icon icon="truck" />
            </div>
            <h1 class="auth-title">Welcome Back</h1>
            <p class="auth-subtitle">Sign in to your DDEX Distro account</p>
          </div>

          <form @submit.prevent="handleLogin" class="auth-form">
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input 
                v-model="email"
                type="email" 
                class="form-input"
                placeholder="you@example.com"
                required
                :disabled="isLoading"
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                Password
                <router-link to="/forgot-password" class="form-label-link">
                  Forgot password?
                </router-link>
              </label>
              <input 
                v-model="password"
                type="password" 
                class="form-input"
                placeholder="Enter your password"
                required
                :disabled="isLoading"
              />
            </div>

            <div v-if="errorMessage" class="form-error">
              {{ errorMessage }}
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-block"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Signing in...' : 'Sign In' }}
            </button>

            <div class="auth-divider">
              <span>or</span>
            </div>

            <button 
              type="button"
              @click="handleGoogleLogin"
              class="btn btn-secondary btn-block"
              :disabled="isLoading"
            >
              <font-awesome-icon :icon="['fab', 'google']" />
              Continue with Google
            </button>
          </form>

          <div class="auth-footer">
            <p>
              Don't have an account? 
              <router-link to="/signup" class="auth-link">
                Sign up for free
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}

.auth-container {
  width: 100%;
  max-width: 400px;
}

.auth-header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.auth-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background-color: var(--color-primary);
  color: white;
  font-size: 2rem;
  margin-bottom: var(--space-lg);
}

.auth-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-heading);
  margin-bottom: var(--space-xs);
}

.auth-subtitle {
  color: var(--color-text-secondary);
}

.auth-form {
  margin-bottom: var(--space-lg);
}

.form-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-label-link {
  font-size: var(--text-sm);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-normal);
}

.form-label-link:hover {
  text-decoration: underline;
}

.btn-block {
  width: 100%;
  justify-content: center;
}

.auth-divider {
  text-align: center;
  margin: var(--space-lg) 0;
  position: relative;
}

.auth-divider span {
  background-color: var(--color-surface);
  padding: 0 var(--space-md);
  color: var(--color-text-tertiary);
  font-size: var(--text-sm);
  position: relative;
  z-index: 1;
}

.auth-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--color-border);
}

.auth-footer {
  text-align: center;
  color: var(--color-text-secondary);
}

.auth-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-medium);
}

.auth-link:hover {
  text-decoration: underline;
}
</style>