<script setup>
defineProps({
  stay: {
    type: Object,
    required: true
  },
  large: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="stay-card" :class="{ 'stay-card-lg': large }">
    <div class="stay-image-wrap">
      <img :src="stay.image" :alt="`${stay.title}, ${stay.place}`" class="stay-image" loading="lazy" />
      <div class="stay-scrim"></div>
    </div>
    <div class="stay-copy">
      <span class="stay-place">{{ stay.place }}</span>
      <h3 class="stay-title">{{ stay.title }}</h3>
      <p class="stay-text">{{ stay.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.stay-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  min-height: 420px;
  display: flex;
}

.stay-card-lg {
  grid-column: span 2;
}

.stay-image-wrap {
  position: absolute;
  inset: 0;
}

.stay-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.stay-card:hover .stay-image {
  transform: scale(1.06);
}

.stay-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(16, 24, 32, 0.86) 0%, rgba(16, 24, 32, 0.15) 55%, rgba(16, 24, 32, 0) 100%);
}

.stay-copy {
  position: relative;
  margin-top: auto;
  padding: var(--space-6);
  color: var(--white);
}

.stay-place {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber-500);
}

.stay-title {
  color: var(--white);
  font-size: 22px;
  margin: 6px 0 8px;
}

.stay-text {
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  max-width: 40ch;
  margin: 0;
}

@media (max-width: 900px) {
  .stay-card-lg {
    grid-column: span 1;
  }

  .stay-card {
    min-height: 320px;
  }
}
</style>
