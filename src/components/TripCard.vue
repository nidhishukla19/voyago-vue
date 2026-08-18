<script setup>
import { ref } from 'vue'

const props = defineProps({
  trip: {
    type: Object,
    required: true
  }
})

const saved = ref(false)

function toggleSave(event) {
  event.preventDefault()
  event.stopPropagation()
  saved.value = !saved.value
}
</script>

<template>
  <RouterLink :to="`/trips/${trip.id}`" class="trip-card">
    <div class="trip-image-wrap">
      <img :src="trip.image" :alt="trip.name" class="trip-image" loading="lazy" />
      <div class="trip-image-scrim"></div>

      <button
        type="button"
        class="wishlist-btn"
        :class="{ active: saved }"
        :aria-label="saved ? 'Remove from saved journeys' : 'Save journey'"
        @click="toggleSave"
      >
        <svg viewBox="0 0 24 24" :fill="saved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.8">
          <path d="M12 21s-7.5-4.7-10-9.3C.4 8.2 2.3 4.5 6 4c2.1-.3 4 .8 6 3.2C14 4.8 15.9 3.7 18 4c3.7.5 5.6 4.2 4 7.7C19.5 16.3 12 21 12 21z" />
        </svg>
      </button>

      <span class="trip-label">Curated Journey</span>
    </div>

    <div class="trip-body">
      <div class="trip-top-row">
        <span class="trip-destination">{{ trip.destination }}</span>
        <span class="trip-rating">★ {{ trip.rating }} <em v-if="trip.reviews">({{ trip.reviews }})</em></span>
      </div>

      <h3 class="trip-name">{{ trip.name }}</h3>
      <p class="trip-desc">{{ trip.description }}</p>

      <div class="trip-meta-row">
        <span class="trip-duration">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
          {{ trip.duration }}
        </span>
      </div>

      <ul v-if="trip.hotel || trip.meals || trip.sightseeing" class="trip-inclusions">
        <li v-if="trip.hotel">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" /></svg>
          <span>{{ trip.hotel }}</span>
        </li>
        <li v-if="trip.meals">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M9 12v9M17 3c-1.7 0-3 1.8-3 4s1.3 4 3 4 3-1.8 3-4-1.3-4-3-4zM17 11v10" /></svg>
          <span>{{ trip.meals }}</span>
        </li>
        <li v-if="trip.sightseeing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l6-10 4 6 3-4 5 8H3z" /><circle cx="8" cy="7" r="2" /></svg>
          <span>{{ trip.sightseeing }}</span>
        </li>
      </ul>
    </div>

    <div class="trip-footer">
      <div class="trip-price">
        <span class="price-label">Starting from</span>
        <span class="price-value">₹{{ trip.price.toLocaleString('en-IN') }}</span>
      </div>
      <span class="trip-cta">
        View Journey
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.trip-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  overflow: hidden;
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
}

.trip-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
  border-color: rgba(183, 138, 63, 0.4);
}

.trip-image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.trip-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.trip-card:hover .trip-image {
  transform: scale(1.08);
}

.trip-image-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.05) 0%, rgba(16, 24, 32, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.trip-card:hover .trip-image-scrim {
  opacity: 1;
}

.trip-label {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(16, 24, 32, 0.82);
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
}

.wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.92);
  color: var(--navy-900);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s ease, color 0.18s ease;
}

.wishlist-btn svg {
  width: 17px;
  height: 17px;
}

.wishlist-btn:hover {
  transform: scale(1.08);
}

.wishlist-btn.active {
  color: var(--coral-500);
}

.trip-body {
  padding: var(--space-5) var(--space-5) 0;
  flex: 1;
}

.trip-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.trip-destination {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber-600);
}

.trip-rating {
  font-size: 13px;
  font-weight: 700;
  color: var(--navy-900);
}

.trip-rating em {
  font-style: normal;
  font-weight: 500;
  color: var(--ink-muted);
}

.trip-name {
  font-size: 21px;
  margin: 0 0 8px;
  transition: transform 0.3s ease;
}

.trip-card:hover .trip-name {
  transform: translateX(4px);
}

.trip-desc {
  font-size: 14.5px;
  margin: 0 0 var(--space-4);
}

.trip-meta-row {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.trip-duration {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-muted);
}

.trip-duration svg {
  width: 15px;
  height: 15px;
}

.trip-inclusions {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0 0 var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px dashed var(--line);
}

.trip-inclusions li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-muted);
  line-height: 1.4;
}

.trip-inclusions li svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--amber-600);
}

.trip-inclusions li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trip-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5) var(--space-5);
  border-top: 1px dashed var(--line);
  margin-top: var(--space-2);
}

.trip-price {
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

.trip-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--navy-900);
}

.trip-cta svg {
  width: 15px;
  height: 15px;
  transition: transform 0.25s ease;
}

.trip-card:hover .trip-cta svg {
  transform: translateX(4px);
}
</style>
