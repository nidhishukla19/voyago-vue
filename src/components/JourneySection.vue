<script setup>
import TripCard from './TripCard.vue'

defineProps({
  journeys: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <div>
          <span class="eyebrow">Curated Journeys</span>
          <h2 class="section-title">Multi-day trips, planned to the last detail</h2>
        </div>
        <RouterLink to="/trips" class="btn btn-outline">View All Journeys</RouterLink>
      </div>

      <div class="journey-grid" v-reveal>
        <TripCard v-for="j in journeys" :key="j.id" :trip="j" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-alt {
  background: var(--bg-alt);
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .journey-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .journey-grid {
    grid-template-columns: 1fr;
  }
}
</style>
