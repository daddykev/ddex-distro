<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  organizationName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

const errorMessage = ref('')
const isLoading = ref(false)

const handleSignup = async () => {
  errorMessage.value = ''
  
  // Validate passwords match
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = 'Passwords do not match'
    return
  }
  
  // Validate terms accepted
  if (!formData.value.acceptTerms) {
    errorMessage.value = 'Please accept the terms and conditions'
    return
  }
  
  isLoading.value = true
  
  try {
    // TODO: Implement Firebase Auth signup
    console.log('Signup attempt:', formData.value)
    
    // Simulate signup success
    setTimeout(() => {
      router.push('/dashboard')
    }, 1000)
  } catch (error) {
    errorMessage.value = 'Failed to create account. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleGoogleSignup = async () => {
  // TODO: Implement Google OAuth
  console.log('Google signup')
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
            <h1 class="auth-title">Get Started</h1>
            <p class="auth-subtitle">Create your DDEX Distro account</p>
          </div>

          <form @submit.prevent="handleSignup" class="auth-form">
            <div class="form-group">
              <label class="form-label">Organization Name</label>
              <input 
                v-model="formData.organizationName"
                type="text" 
                class="form-input"
                placeholder="My Record Label"
                required
                :disabled="isLoading"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input 
                v-model="formData.email"
                type="email" 
                class="form-input"
                placeholder="you@example.com"
                required
                :disabled="isLoading"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Password</label>
              <input 
                v-model="formData.password"
                type="password" 
                class="form-input"
                placeholder="Create a strong password"
                required
                minlength="8"
                :disabled="isLoading"
              />
              <div class="form-hint">Minimum 8 characters</div>
            </div>

            <div class="form-group">
              <label class="form-label">Confirm Password</label>
              <input 
                v-model="formData.confirmPassword"
                type="password" 
                class="form-input"
                placeholder="Confirm your password"
                required
                :disabled="isLoading"
              />
            </div>

            <div class="form-group">
              <label class="form-checkbox">
                <input 
                  v-model="formData.acceptTerms"
                  type="checkbox"
                  :disabled="isLoading"
                />
                <span>
                  I agree to the 
                  <a href="/terms" target="_blank" class="auth-link">Terms of Service</a>
                  and 
                  <a href="/privacy" target="_blank" class="auth-link">Privacy Policy</a>
                </span>
              </label>
            </div>

            <div v-if="errorMessage" class="form-error">
              {{ errorMessage }}
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-block"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Creating account...' : 'Create Account' }}
            </button>

            <div class="auth-divider">
              <span>or</span>
            </div>

            <button 
              type="button"
              @click="handleGoogleSignup"
              class="btn btn-secondary btn-block"
              :disabled="isLoading"
            >
              <font-awesome-icon :icon="['fab', 'google']" />
              Continue with Google
            </button>
          </form>

          <div class="auth-footer">
            <p>
              Already have an account? 
              <router-link to="/login" class="auth-link">
                Sign in
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

.form-hint {
  margin-top: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  cursor: pointer;
}

.form-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-top: 2px;
  flex-shrink: 0;
}

.form-checkbox span {
  color: var(--color-text);
  user-select: none;
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
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