<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreedToTerms = ref(false)
const showPassword = ref(false)

const passwordsMatch = computed(
  () => !confirmPassword.value || password.value === confirmPassword.value
)

function handleRegister() {
  if (!agreedToTerms.value || !passwordsMatch.value) return
  // Placeholder registration handler — connect to a real API later.
  console.log('Registering', { fullName: fullName.value, email: email.value, phone: phone.value })
  router.push('/login')
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-visual">
      <img src="/image/jaipur.jpg" alt="Jaipur heritage architecture" />
      <div class="auth-visual-overlay">
        <!-- <img src="/image/logo.png" alt="VOYAGO logo" class="visual-logo" /> -->
        <h2 class="visual-title">Start your journey with VOYAGO</h2>
        <p class="visual-text">Create an account to save destinations, track bookings and check out faster.</p>
      </div>
    </div>

    <div class="auth-form-wrap">
      <div class="auth-form-inner">
        <RouterLink to="/" class="brand">
          <img src="/image/logo.png" alt="VOYAGO logo" class="brand-logo" />
          <span class="brand-name">VOYAGO</span>
        </RouterLink>

        <h1 class="auth-title">Create your account</h1>
        <p class="auth-sub">It takes less than a minute.</p>

        <form @submit.prevent="handleRegister">
          <div class="field">
            <label for="fullName">Full Name</label>
            <input id="fullName" v-model="fullName" type="text" placeholder="Your full name" required />
          </div>

          <div class="field">
            <label for="email">Email Address</label>
            <input id="email" v-model="email" type="email" placeholder="you@example.com" required />
          </div>

          <div class="field">
            <label for="phone">Phone Number</label>
            <input id="phone" v-model="phone" type="tel" placeholder="+91 98765 43210" required />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <div class="password-field">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Create a password"
                required
              />
              <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                {{ showPassword ? 'HIDE' : 'SHOW' }}
              </button>
            </div>
          </div>

          <div class="field">
            <label for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Re-enter your password"
              required
            />
            <p v-if="!passwordsMatch" class="field-hint error-hint">Passwords don’t match yet.</p>
          </div>

          <div class="field">
            <label class="checkbox-row">
              <input v-model="agreedToTerms" type="checkbox" required />
              I agree to the <RouterLink to="/support#terms-conditions" class="link-muted">Terms &amp; Conditions</RouterLink>
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-block" :disabled="!agreedToTerms">
            Create Account
          </button>
        </form>

        <p class="switch-auth">
          Already have an account?
          <RouterLink to="/login">Login</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.auth-visual {
  position: relative;
  display: flex;
  align-items: flex-end;
}

.auth-visual img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.auth-visual-overlay {
  position: relative;
  z-index: 1;
  padding: var(--space-8);
  background: linear-gradient(0deg, rgba(11, 31, 58, 0.9), rgba(11, 31, 58, 0.15));
  width: 100%;
  color: var(--white);
}

.visual-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: var(--space-5);
}

.visual-title {
  color: var(--white);
  font-size: 28px;
  margin-bottom: var(--space-2);
}

.visual-text {
  color: rgba(255, 255, 255, 0.75);
  max-width: 360px;
  margin: 0;
}

.auth-form-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-7) var(--space-5);
}

.auth-form-inner {
  width: 100%;
  max-width: 420px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-6);
}

.brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  color: var(--navy-900);
}

.auth-title {
  font-size: 26px;
  margin-bottom: 6px;
}

.auth-sub {
  margin-bottom: var(--space-6);
}

.link-muted {
  color: var(--navy-800);
  font-weight: 700;
}

.error-hint {
  color: var(--danger);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch-auth {
  text-align: center;
  margin-top: var(--space-6);
  font-size: 14px;
}

.switch-auth a {
  color: var(--navy-800);
  font-weight: 700;
}

@media (max-width: 900px) {
  .auth-page {
    grid-template-columns: 1fr;
  }

  .auth-visual {
    min-height: 220px;
  }
}
</style>
