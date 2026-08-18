<script setup>
defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="feature-card">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <template v-if="feature.title.includes('Curated')">
          <path d="M4 6h16M4 12h16M4 18h10" />
        </template>
        <template v-else-if="feature.title.includes('Trusted')">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        </template>
        <template v-else-if="feature.title.includes('Simple')">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 12.5l2.2 2.2L15.5 9.5" />
        </template>
        <template v-else>
          <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1.1-4.2A8.4 8.4 0 1 1 21 11.5z" />
        </template>
      </svg>
    </div>
    <h3 class="feature-title">{{ feature.title }}</h3>
    <p class="feature-text">{{ feature.text }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--amber-500);
  color: var(--amber-600);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.feature-icon svg {
  width: 22px;
  height: 22px;
}

.feature-title {
  font-size: 18px;
  margin-bottom: var(--space-2);
}

.feature-text {
  font-size: 14px;
  margin: 0;
}
</style>
