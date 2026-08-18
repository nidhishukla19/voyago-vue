<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink to="/destinations" class="experience-card">
    <img :src="experience.image" :alt="experience.title" class="experience-image" loading="lazy" />
    <div class="experience-overlay"></div>
    <span class="experience-title">{{ experience.title }}</span>
  </RouterLink>
</template>

<style scoped>
.experience-card {
  position: relative;
  display: block;
  aspect-ratio: 5 / 4;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.experience-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.experience-card:hover .experience-image {
  transform: scale(1.07);
}

.experience-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0) 40%, rgba(16, 24, 32, 0.78) 100%);
}

.experience-title {
  position: absolute;
  left: var(--space-4);
  bottom: var(--space-4);
  color: var(--white);
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
}
</style>
