<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getDestinationById } from '../data/destinations.js'
import { journeys } from '../data/journeys.js'
import TripCard from '../components/TripCard.vue'

const route = useRoute()
const destination = computed(() => getDestinationById(route.params.id))
const relatedJourneys = computed(() =>
  destination.value ? journeys.filter((j) => j.destinationId === destination.value.id) : []
)

watchEffect(() => {
  if (destination.value) document.title = `${destination.value.name} | VOYAGO`
})
</script>

<template>
  <div v-if="destination" class="page">
    <section class="detail-hero">
      <div class="detail-hero-media">
        <img :src="destination.image" :alt="destination.name" />
        <div class="detail-hero-overlay"></div>
      </div>
      <div class="container detail-hero-content">
        <RouterLink to="/destinations" class="back-link">← All destinations</RouterLink>
        <span class="eyebrow eyebrow-light">{{ destination.region }} · {{ destination.category }}</span>
        <h1 class="detail-title">{{ destination.name }}</h1>
        <p class="detail-tagline">"{{ destination.tagline }}"</p>
        <div class="detail-meta-row">
          <span class="rating-pill">★ {{ destination.rating }} <em>({{ destination.reviews }} reviews)</em></span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-layout">
        <div class="detail-main">
          <h2 class="block-title">Overview</h2>
          <p class="overview-text">{{ destination.overview }}</p>

          <h2 class="block-title">Best Experiences</h2>
          <ul class="experience-list">
            <li v-for="(exp, i) in destination.bestExperiences" :key="i">
              <span class="experience-marker">{{ String(i + 1).padStart(2, '0') }}</span>
              {{ exp }}
            </li>
          </ul>

          <template v-if="relatedJourneys.length">
            <h2 class="block-title">Popular Trips to {{ destination.name }}</h2>
            <div class="related-grid">
              <TripCard v-for="j in relatedJourneys" :key="j.id" :trip="j" />
            </div>
          </template>
        </div>

        <aside class="detail-sidebar card">
          <span class="price-label">Starting from</span>
          <span class="sidebar-price">₹{{ destination.price.toLocaleString('en-IN') }}</span>
          <span class="sidebar-hint">per person, taxes included</span>

          <RouterLink
            v-if="relatedJourneys.length"
            :to="`/trips/${relatedJourneys[0].id}`"
            class="btn btn-primary btn-block"
          >
            Explore {{ destination.name }} →
          </RouterLink>
          <RouterLink v-else to="/trips" class="btn btn-primary btn-block">
            Explore {{ destination.name }} →
          </RouterLink>

          <div class="sidebar-divider"></div>

          <ul class="sidebar-facts">
            <li><span>Region</span><strong>{{ destination.region }}</strong></li>
            <li><span>Category</span><strong>{{ destination.category }}</strong></li>
            <li><span>Rating</span><strong>★ {{ destination.rating }}</strong></li>
          </ul>
        </aside>
      </div>
    </section>
  </div>

  <div v-else class="page">
    <section class="section">
      <div class="container empty-state">
        <div class="empty-icon">🧭</div>
        <h3>Destination not found</h3>
        <p>This destination may have moved or no longer exists.</p>
        <RouterLink to="/destinations" class="btn btn-primary">Back to Destinations</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-hero {
  position: relative;
  min-height: 460px;
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
  font-size: clamp(38px, 6vw, 68px);
  margin-bottom: var(--space-2);
}

.detail-tagline {
  font-family: var(--font-display);
  font-style: italic;
  color: rgba(255, 255, 255, 0.88);
  font-size: 18px;
  margin: 0 0 var(--space-4);
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

.experience-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.experience-list li {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  font-weight: 600;
  color: var(--navy-900);
}

.experience-marker {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--amber-500);
  font-size: 18px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
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
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.sidebar-facts li span {
  color: var(--ink-muted);
}

.sidebar-facts li strong {
  color: var(--navy-900);
}

@media (max-width: 980px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
  .detail-sidebar {
    position: static;
  }
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
