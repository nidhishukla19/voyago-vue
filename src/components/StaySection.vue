<script setup>
import StayCard from './StayCard.vue'

defineProps({
  stays: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="section stay-section">
    <div class="container">
      <div class="section-head" v-reveal>
        <div>
          <span class="eyebrow">Stay &amp; Experience</span>
          <h2 class="section-title">Places to stay, chosen as carefully as the itinerary</h2>
        </div>
      </div>

      <div class="stay-grid" v-reveal>
        <StayCard
          v-for="(s, i) in stays"
          :key="s.title"
          :stay="s"
          :large="i === 0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.stay-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: var(--space-6);
}

@media (max-width: 900px) {
  .stay-grid {
    grid-template-columns: 1fr;
  }
}
</style>
