<script setup>
import FeatureCard from './FeatureCard.vue'

defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <div>
          <span class="eyebrow">Why Choose VOYAGO</span>
          <h2 class="section-title">Planning a trip shouldn’t feel like work</h2>
        </div>
      </div>

      <div class="feature-grid" v-reveal>
        <FeatureCard v-for="f in features" :key="f.title" :feature="f" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

@media (max-width: 980px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
