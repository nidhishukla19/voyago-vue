<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getJourneyById } from '../data/journeys.js'

const route = useRoute()
const trip = computed(() => getJourneyById(route.params.id))

watchEffect(() => {
  if (trip.value) document.title = `${trip.value.name} | VOYAGO`
})
</script>

<template>
  <div v-if="trip" class="page">
    <section class="detail-hero">
      <div class="detail-hero-media">
        <img :src="trip.image" :alt="trip.name" />
        <div class="detail-hero-overlay"></div>
      </div>
      <div class="container detail-hero-content">
        <RouterLink to="/trips" class="back-link">← All journeys</RouterLink>
        <span class="eyebrow eyebrow-light">Curated Journey · {{ trip.experience }}</span>
        <h1 class="detail-title">{{ trip.name }}</h1>
        <div class="detail-meta-row">
          <span class="meta-chip">{{ trip.destination }}</span>
          <span class="meta-chip">{{ trip.duration }}</span>
          <span class="rating-pill">★ {{ trip.rating }} <em>({{ trip.reviews }} reviews)</em></span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-layout">
        <div class="detail-main">
          <h2 class="block-title">Overview</h2>
          <p class="overview-text">{{ trip.description }}</p>

          <h2 class="block-title">Highlights</h2>
          <ul class="check-list">
            <li v-for="(h, i) in trip.highlights" :key="i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              {{ h }}
            </li>
          </ul>

          <h2 class="block-title">What's Included</h2>
          <ul class="check-list">
            <li v-for="(inc, i) in trip.inclusions" :key="i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              {{ inc }}
            </li>
          </ul>

          <h2 class="block-title">Itinerary</h2>
          <div class="itinerary">
            <div v-for="day in trip.itinerary" :key="day.day" class="itinerary-day">
              <div class="itinerary-day-number">Day {{ day.day }}</div>
              <div class="itinerary-day-body">
                <h4>{{ day.title }}</h4>
                <p>{{ day.text }}</p>
              </div>
            </div>
          </div>

          <h2 class="block-title">Travel Information</h2>
          <p class="overview-text">{{ trip.travelInfo }}</p>
        </div>

        <aside class="detail-sidebar card">
          <span class="price-label">Starting from</span>
          <span class="sidebar-price">₹{{ trip.price.toLocaleString('en-IN') }}</span>
          <span class="sidebar-hint">per person, taxes included</span>

          <RouterLink :to="`/booking/${trip.id}`" class="btn btn-primary btn-block booking-cta">
            Book This Journey
          </RouterLink>

          <div class="sidebar-divider"></div>

          <ul class="sidebar-facts">
            <li><span>Destination</span><strong>{{ trip.destination }}</strong></li>
            <li><span>Duration</span><strong>{{ trip.duration }}</strong></li>
            <li><span>Experience</span><strong>{{ trip.experience }}</strong></li>
            <li v-if="trip.hotel"><span>Hotel</span><strong>{{ trip.hotel }}</strong></li>
            <li v-if="trip.meals"><span>Food</span><strong>{{ trip.meals }}</strong></li>
            <li v-if="trip.sightseeing"><span>Sightseeing</span><strong>{{ trip.sightseeing }}</strong></li>
            <li><span>Rating</span><strong>★ {{ trip.rating }} ({{ trip.reviews }})</strong></li>
          </ul>
        </aside>
      </div>
    </section>
  </div>

  <div v-else class="page">
    <section class="section">
      <div class="container empty-state">
        <div class="empty-icon">🧳</div>
        <h3>Journey not found</h3>
        <p>This journey may have moved or no longer exists.</p>
        <RouterLink to="/trips" class="btn btn-primary">Back to Journeys</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-hero {
  position: relative;
  min-height: 440px;
  display: flex;
  align-items: flex-end;
}

.detail-hero-media {
  position: absolute;
  inset: 0;
}

.detail-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.15) 0%, rgba(16, 24, 32, 0.82) 100%);
}

.detail-hero-content {
  position: relative;
  z-index: 1;
  padding: var(--space-9) 0 var(--space-7);
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.78);
  font-size: 13.5px;
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.eyebrow-light {
  color: var(--amber-500);
}

.detail-title {
  color: var(--white);
  font-size: clamp(32px, 5vw, 52px);
  margin-bottom: var(--space-4);
}

.detail-meta-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.meta-chip {
  background: rgba(255, 255, 255, 0.14);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.24);
}

.detail-meta-row .rating-pill em {
  font-style: normal;
  font-weight: 500;
  opacity: 0.75;
  margin-left: 4px;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-7);
  align-items: start;
}

.block-title {
  font-size: 24px;
  margin-top: var(--space-6);
}

.block-title:first-child {
  margin-top: 0;
}

.overview-text {
  font-size: 16px;
  line-height: 1.75;
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: var(--ink);
  font-weight: 500;
}

.check-list svg {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  color: var(--success);
}

.itinerary {
  display: flex;
  flex-direction: column;
}

.itinerary-day {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-top: 1px dashed var(--line);
}

.itinerary-day:last-child {
  border-bottom: 1px dashed var(--line);
}

.itinerary-day-number {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--amber-600);
  font-size: 15px;
}

.itinerary-day-body h4 {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: var(--navy-900);
  margin: 0 0 4px;
}

.itinerary-day-body p {
  margin: 0;
  font-size: 14.5px;
}

.detail-sidebar {
  padding: var(--space-6) var(--space-5);
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 12px;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sidebar-price {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 32px;
  color: var(--navy-900);
  margin: 4px 0 2px;
}

.sidebar-hint {
  font-size: 13px;
  color: var(--ink-muted);
  margin-bottom: var(--space-5);
}

.booking-cta {
  font-size: 15.5px;
  padding: 15px 26px;
}

.sidebar-divider {
  height: 1px;
  background: var(--line);
  margin: var(--space-5) 0;
}

.sidebar-facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.sidebar-facts li {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: 14px;
}

.sidebar-facts li span {
  color: var(--ink-muted);
  flex-shrink: 0;
}

.sidebar-facts li strong {
  color: var(--navy-900);
  text-align: right;
  font-weight: 700;
}

@media (max-width: 980px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
  .detail-sidebar {
    position: static;
  }
}
</style>
