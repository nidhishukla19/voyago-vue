<script setup>
import DestinationCard from './DestinationCard.vue'

defineProps({
  destinations: {
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
          <span class="eyebrow">Featured Destinations</span>
          <h2 class="section-title">Where travellers are headed this season</h2>
        </div>
        <RouterLink to="/destinations" class="btn btn-outline">View All Destinations</RouterLink>
      </div>

      <div class="dest-grid" v-reveal>
        <DestinationCard v-for="d in destinations" :key="d.id" :destination="d" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.dest-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .dest-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .dest-grid {
    grid-template-columns: 1fr;
  }
}
</style>
