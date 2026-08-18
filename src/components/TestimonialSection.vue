<script setup>
import TestimonialCard from './TestimonialCard.vue'

defineProps({
  testimonials: {
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
          <span class="eyebrow">Traveller Stories</span>
          <h2 class="section-title">What our customers say</h2>
        </div>
      </div>

      <div class="testimonial-grid" v-reveal>
        <TestimonialCard v-for="t in testimonials" :key="t.name" :testimonial="t" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

@media (max-width: 900px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
</style>
