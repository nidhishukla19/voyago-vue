<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

function handleLogin() {
  // Placeholder auth handler — connect to a real API/auth service later.
  console.log('Logging in with', { email: email.value, rememberMe: rememberMe.value })
  router.push('/profile')
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-visual">
      <img src="/image/kerala.jpg" alt="Kerala backwaters" />
      <div class="auth-visual-overlay">
        <!-- <img src="/image/logo.png" alt="VOYAGO logo" class="visual-logo" /> -->
        <h2 class="visual-title">Welcome back, traveller</h2>
        <p class="visual-text">Pick up right where you left off and keep planning your next escape.</p>
      </div>
    </div>

    <div class="auth-form-wrap">
      <div class="auth-form-inner">
        <RouterLink to="/" class="brand">
          <img src="/image/logo.png" alt="VOYAGO logo" class="brand-logo" />
          <span class="brand-name">VOYAGO</span>
        </RouterLink>

        <h1 class="auth-title">Log in to your account</h1>
        <p class="auth-sub">Enter your details to continue planning your trip.</p>

        <form @submit.prevent="handleLogin">
          <div class="field">
            <label for="email">Email Address</label>
            <input id="email" v-model="email" type="email" placeholder="you@example.com" required />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <div class="password-field">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                required
              />
              <button type="button" class="password-toggle" @click="showPassword = !showPassword">
                {{ showPassword ? 'HIDE' : 'SHOW' }}
              </button>
            </div>
          </div>

          <div class="field row-between">
            <label class="checkbox-row">
              <input v-model="rememberMe" type="checkbox" />
              Remember me
            </label>
            <RouterLink to="/support#help-center" class="link-muted">Forgot password?</RouterLink>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>

        <div class="divider-row"><span>or continue with</span></div>

        <div class="social-row">
          <button type="button" class="btn btn-outline btn-block">Google</button>
          <button type="button" class="btn btn-outline btn-block">Apple</button>
        </div>

        <p class="switch-auth">
          Don’t have an account?
          <RouterLink to="/register">Register</RouterLink>
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
  max-width: 400px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-7);
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

.row-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link-muted {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--navy-800);
}

.divider-row {
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--ink-muted);
  font-size: 13px;
  margin: var(--space-5) 0;
}

.divider-row::before,
.divider-row::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--line);
}

.divider-row span {
  padding: 0 var(--space-3);
}

.social-row {
  display: flex;
  gap: var(--space-3);
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
    min-height: 240px;
  }
}
</style>
