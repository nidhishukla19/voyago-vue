<script setup>
import ExperienceCard from './ExperienceCard.vue'

defineProps({
  experiences: {
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
          <span class="eyebrow">Travel Experiences</span>
          <h2 class="section-title">Choose the kind of journey you’re after</h2>
        </div>
      </div>

      <div class="experience-grid" v-reveal>
        <ExperienceCard v-for="e in experiences" :key="e.title" :experience="e" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-alt {
  background: var(--bg-alt);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

@media (max-width: 900px) {
  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .experience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
