<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/trips', label: 'Journeys' },
  { to: '/bookings', label: 'Bookings' },
  { to: '/about', label: 'About' }
]

const destinationLinks = ['Goa', 'Manali', 'Jaipur', 'Kashmir', 'Shimla', 'Udaipur']

const socials = [
  { label: 'Instagram', icon: '◎' },
  { label: 'Facebook', icon: 'f' },
  { label: 'X', icon: '✕' },
  { label: 'LinkedIn', icon: 'in' }
]

const newsletterEmail = ref('')
const subscribed = ref(false)

function handleSubscribe() {
  if (!newsletterEmail.value) return
  // Placeholder — connect to a real newsletter service later.
  subscribed.value = true
  newsletterEmail.value = ''
}
</script>

<template>
  <footer class="footer">
    <div class="newsletter-band">
      <div class="container newsletter-inner">
        <div>
          <h3 class="newsletter-title">Get travel inspiration in your inbox</h3>
          <p class="newsletter-sub">Fresh destinations, seasonal offers and trip ideas — no spam, unsubscribe any time.</p>
        </div>
        <form v-if="!subscribed" class="newsletter-form" @submit.prevent="handleSubscribe">
          <input
            v-model="newsletterEmail"
            type="email"
            required
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <p v-else class="newsletter-success">✓ You're subscribed — welcome to VOYAGO.</p>
      </div>
    </div>

    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <RouterLink to="/" class="brand">
          <img src="/image/logo.png" alt="VOYAGO logo" class="brand-logo" />
          <span class="brand-name">VOYAGO</span>
        </RouterLink>
        <p class="footer-tagline">Travel beyond the ordinary.</p>
        <p class="footer-about">
          VOYAGO helps you plan and book unforgettable trips across India, from misty
          mountain towns to sun-drenched coastlines — with transparent pricing and
          support that's there when you need it.
        </p>
        <div class="social-row">
          <a v-for="s in socials" :key="s.label" href="#" class="social-icon" :aria-label="s.label">
            {{ s.icon }}
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul>
          <li v-for="link in quickLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Destinations</h4>
        <ul>
          <li v-for="d in destinationLinks" :key="d">
            <RouterLink to="/destinations">{{ d }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Support</h4>
        <ul>
          <li><RouterLink to="/support#help-center">Help Center</RouterLink></li>
          <li><RouterLink to="/support#cancellation-policy">Cancellation Policy</RouterLink></li>
          <li><RouterLink to="/support#terms-conditions">Terms &amp; Conditions</RouterLink></li>
          <li><RouterLink to="/support#privacy-policy">Privacy Policy</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Contact</h4>
        <ul class="contact-list">
          <li>support@voyago.com</li>
          <li>+91 98765 43210</li>
          <li>Lucknow, Uttar Pradesh, India</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ year }} VOYAGO. All rights reserved.</p>
        <p class="made-with">Designed for travellers who want it simple.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.newsletter-band {
  background: linear-gradient(120deg, var(--navy-800), var(--navy-900));
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.newsletter-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  flex-wrap: wrap;
}

.newsletter-title {
  color: var(--white);
  font-size: 21px;
  margin: 0 0 4px;
}

.newsletter-sub {
  color: rgba(255, 255, 255, 0.62);
  font-size: 14px;
  margin: 0;
  max-width: 420px;
}

.newsletter-form {
  display: flex;
  gap: var(--space-3);
  flex-shrink: 0;
}

.newsletter-form input {
  min-width: 260px;
  padding: 12px 16px;
  border-radius: var(--radius-pill);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: var(--white);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form input:focus {
  outline: none;
  border-color: var(--amber-500);
}

.newsletter-success {
  color: var(--amber-500);
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

@media (max-width: 720px) {
  .newsletter-inner {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form input {
    min-width: 0;
  }
}

.footer {
  background: var(--navy-900);
  color: rgba(255, 255, 255, 0.72);
  margin-top: var(--space-9);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
  gap: var(--space-6);
  padding: var(--space-8) 0 var(--space-6);
}

.footer-brand .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-4);
}

.brand-logo {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.04em;
  color: var(--white);
}

.footer-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 15px;
  color: var(--amber-500);
  margin: 0 0 var(--space-3);
}

.footer-about {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.7;
  max-width: 320px;
  margin-bottom: var(--space-5);
}

.social-row {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--white);
  transition: background 0.18s ease, border-color 0.18s ease;
}

.social-icon:hover {
  background: var(--amber-500);
  border-color: var(--amber-500);
  color: var(--navy-900);
}

.footer-heading {
  color: var(--white);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.footer-col ul li {
  margin-bottom: 12px;
  font-size: 14.5px;
}

.footer-col ul li a {
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.18s ease;
}

.footer-col ul li a:hover {
  color: var(--amber-500);
}

.contact-list li {
  color: rgba(255, 255, 255, 0.65);
  font-size: 14.5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-5) 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom-inner p {
  margin: 0;
  color: inherit;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
