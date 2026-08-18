<script setup>
defineProps({
  destination: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <RouterLink
    :to="`/destinations/${destination.id}`"
    class="dest-card"
    :class="{ 'dest-card-featured': featured }"
  >
    <div class="dest-image-wrap">
      <img :src="destination.image" :alt="destination.name" class="dest-image" loading="lazy" />
      <div class="dest-image-scrim"></div>

      <span class="dest-category">{{ destination.category }}</span>
      <span class="rating-pill dest-rating">★ {{ destination.rating }}</span>

      <div class="dest-hover-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </div>

    <div class="dest-body">
      <span class="dest-region">{{ destination.region }}</span>
      <h3 class="dest-name">{{ destination.name }}</h3>
      <p v-if="featured" class="dest-desc">{{ destination.description }}</p>

      <div class="dest-footer">
        <div class="dest-price">
          <span class="price-label">Starting from</span>
          <span class="price-value">₹{{ destination.price.toLocaleString('en-IN') }}</span>
        </div>
        <span class="dest-explore">
          Explore
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.dest-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  overflow: hidden;
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
}

.dest-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
  border-color: rgba(183, 138, 63, 0.4);
}

.dest-image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.dest-card-featured .dest-image-wrap {
  aspect-ratio: 16 / 11;
}

.dest-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.dest-card:hover .dest-image {
  transform: scale(1.08);
}

.dest-image-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.02) 0%, rgba(16, 24, 32, 0.28) 100%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.dest-card:hover .dest-image-scrim {
  opacity: 1;
}

.dest-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(250, 246, 238, 0.94);
  color: var(--navy-900);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 13px;
  border-radius: var(--radius-pill);
}

.dest-rating {
  position: absolute;
  top: 16px;
  right: 16px;
}

.dest-hover-arrow {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--amber-500);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dest-hover-arrow svg {
  width: 18px;
  height: 18px;
}

.dest-card:hover .dest-hover-arrow {
  opacity: 1;
  transform: translateY(0);
}

.dest-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.dest-region {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber-600);
}

.dest-name {
  font-size: 21px;
  margin: 6px 0 8px;
  transition: transform 0.3s ease;
}

.dest-card:hover .dest-name {
  transform: translateX(4px);
}

.dest-card-featured .dest-name {
  font-size: clamp(24px, 2.4vw, 30px);
}

.dest-desc {
  font-size: 14.5px;
  margin: 0 0 var(--space-3);
  max-width: 46ch;
}

.dest-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  border-top: 1px dashed var(--line);
}

.dest-price {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 11px;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.price-value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  color: var(--navy-900);
}

.dest-explore {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--navy-900);
}

.dest-explore svg {
  width: 15px;
  height: 15px;
  transition: transform 0.25s ease;
}

.dest-card:hover .dest-explore svg {
  transform: translateX(4px);
}
</style>
