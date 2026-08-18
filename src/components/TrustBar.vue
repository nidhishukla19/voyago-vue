<script setup>
const trustPoints = [
  { title: 'Secure Booking', text: 'Encrypted payments, verified partners' },
  { title: '24/7 Support', text: 'Real people, any hour of the day' },
  { title: 'Easy Cancellation', text: 'Flexible, no-hassle refund policy' },
  { title: 'Trusted Experience', text: '4.8★ average across 120K+ travellers' }
]
</script>

<template>
  <section class="trust-bar">
    <div class="container trust-bar-inner" v-reveal>
      <div v-for="t in trustPoints" :key="t.title" class="trust-item">
        <div class="trust-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <template v-if="t.title === 'Secure Booking'">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </template>
            <template v-else-if="t.title === '24/7 Support'">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </template>
            <template v-else-if="t.title === 'Easy Cancellation'">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M9 15l2 2 4-4" />
            </template>
            <template v-else>
              <path d="M12 17.3l-5.4 3 1.4-6L3 9.8l6.1-.5L12 3.5l2.9 5.8 6.1.5-5 4.5 1.4 6z" />
            </template>
          </svg>
        </div>
        <div>
          <p class="trust-title">{{ t.title }}</p>
          <p class="trust-text">{{ t.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-bar {
  padding: var(--space-8) 0 var(--space-6);
}

.trust-bar-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.trust-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.trust-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-alt);
  color: var(--amber-600);
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-icon svg {
  width: 20px;
  height: 20px;
}

.trust-title {
  margin: 0 0 2px;
  font-weight: 700;
  font-size: 14.5px;
  color: var(--navy-900);
}

.trust-text {
  margin: 0;
  font-size: 13px;
  color: var(--ink-muted);
}

@media (max-width: 900px) {
  .trust-bar-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .trust-bar-inner {
    grid-template-columns: 1fr;
  }
  .trust-bar {
    padding: var(--space-7) 0 var(--space-5);
  }
}
</style>
