<script setup>
import { ref, computed } from 'vue'
import TripCard from '../components/TripCard.vue'
import { journeys } from '../data/journeys.js'

const searchTerm = ref('')
const experienceFilter = ref('All')
const durationFilter = ref('All')
const sortBy = ref('recommended')

const experiences = ['All', ...new Set(journeys.map((j) => j.experience))]

const durationBuckets = [
  { key: 'All', label: 'Any length' },
  { key: 'short', label: 'Up to 4 days' },
  { key: 'medium', label: '5–6 days' },
  { key: 'long', label: '7+ days' }
]

function inDurationBucket(days, bucket) {
  if (bucket === 'short') return days <= 4
  if (bucket === 'medium') return days >= 5 && days <= 6
  if (bucket === 'long') return days >= 7
  return true
}

const filteredJourneys = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()

  let list = journeys.filter((j) => {
    const matchesSearch =
      !term ||
      j.name.toLowerCase().includes(term) ||
      j.destination.toLowerCase().includes(term) ||
      j.experience.toLowerCase().includes(term)
    const matchesExperience = experienceFilter.value === 'All' || j.experience === experienceFilter.value
    const matchesDuration = inDurationBucket(j.days, durationFilter.value)
    return matchesSearch && matchesExperience && matchesDuration
  })

  list = [...list].sort((a, b) => {
    if (sortBy.value === 'price-asc') return a.price - b.price
    if (sortBy.value === 'price-desc') return b.price - a.price
    if (sortBy.value === 'rating') return b.rating - a.rating
    return b.rating * b.reviews - a.rating * a.reviews
  })

  return list
})

function resetFilters() {
  searchTerm.value = ''
  experienceFilter.value = 'All'
  durationFilter.value = 'All'
  sortBy.value = 'recommended'
}
</script>

<template>
  <div class="page">
    <!-- HERO -->
    <section class="trips-hero">
      <div class="trips-hero-media">
        <img src="/image/udaipur.jpg" alt="Curated journey destination" />
        <div class="trips-hero-overlay"></div>
      </div>
      <div class="container trips-hero-content">
        <span class="eyebrow eyebrow-light">Trips, Planned to the Last Detail</span>
        <h1 class="trips-hero-title">Curated Journeys</h1>
        <p class="trips-hero-sub">
          Thoughtfully designed trips for travellers who want more than a destination.
        </p>
      </div>
    </section>

    <!-- SEARCH + FILTERS -->
    <section class="search-section">
      <div class="container">
        <form class="search-panel" @submit.prevent>
          <div class="search-field search-field-wide">
            <label for="tsearch">Search journeys</label>
            <input id="tsearch" v-model="searchTerm" type="text" placeholder="Try 'Kashmir' or 'Beach'" />
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label for="texperience">Experience</label>
            <select id="texperience" v-model="experienceFilter">
              <option v-for="e in experiences" :key="e" :value="e">{{ e }}</option>
            </select>
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label for="tduration">Duration</label>
            <select id="tduration" v-model="durationFilter">
              <option v-for="d in durationBuckets" :key="d.key" :value="d.key">{{ d.label }}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary search-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            Search
          </button>
        </form>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <div class="category-list">
            <button
              v-for="e in experiences"
              :key="e"
              type="button"
              class="category-chip"
              :class="{ active: experienceFilter === e }"
              @click="experienceFilter = e"
            >
              {{ e }}
            </button>
          </div>

          <div class="sort-row">
            <label for="sort">Sort by</label>
            <select id="sort" v-model="sortBy" class="sort-select">
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div class="results-head">
          <p class="results-count">{{ filteredJourneys.length }} journey{{ filteredJourneys.length === 1 ? '' : 's' }} found</p>
          <button v-if="searchTerm || experienceFilter !== 'All' || durationFilter !== 'All' || sortBy !== 'recommended'" type="button" class="link-reset" @click="resetFilters">
            Clear filters
          </button>
        </div>

        <div v-if="filteredJourneys.length" class="trip-grid">
          <TripCard v-for="j in filteredJourneys" :key="j.id" :trip="j" />
        </div>

        <div v-else class="empty-state">
          <div class="empty-icon">🧳</div>
          <h3>No journeys match your search</h3>
          <p>Try a different experience type, duration, or clear your filters.</p>
          <button type="button" class="btn btn-primary" @click="resetFilters">Reset Filters</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.trips-hero {
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: center;
}

.trips-hero-media {
  position: absolute;
  inset: 0;
}

.trips-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trips-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.5) 0%, rgba(16, 24, 32, 0.78) 100%);
}

.trips-hero-content {
  position: relative;
  z-index: 1;
  padding: var(--space-9) 0 var(--space-7);
}

.eyebrow-light {
  color: var(--amber-500);
}

.trips-hero-title {
  color: var(--white);
  font-size: clamp(38px, 5.5vw, 60px);
}

.trips-hero-sub {
  color: rgba(255, 255, 255, 0.82);
  font-size: 17px;
  max-width: 500px;
  margin: 0;
}

.search-section {
  margin-top: -44px;
  position: relative;
  z-index: 2;
}

.search-panel {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  padding: var(--space-4) var(--space-5);
  gap: var(--space-4);
}

.search-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.search-field-wide {
  flex: 1.6;
}

.search-field label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.search-field input,
.search-field select {
  border: none;
  padding: 4px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--navy-900);
  background: transparent;
}

.search-field input:focus,
.search-field select:focus {
  outline: none;
}

.search-divider {
  width: 1px;
  align-self: stretch;
  background: var(--line);
}

.search-btn svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 860px) {
  .search-panel {
    flex-wrap: wrap;
  }
  .search-divider {
    display: none;
  }
  .search-field,
  .search-field-wide {
    flex: 1 1 100%;
  }
  .search-btn {
    width: 100%;
  }
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-chip {
  border: 1.5px solid var(--line);
  background: var(--white);
  color: var(--ink-muted);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  transition: all 0.18s ease;
}

.category-chip:hover {
  border-color: var(--navy-800);
}

.category-chip.active {
  background: var(--navy-900);
  border-color: var(--navy-900);
  color: var(--white);
}

.sort-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-muted);
}

.sort-select {
  border: 1.5px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--navy-900);
  background: var(--white);
}

.results-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

.results-count {
  margin: 0;
  color: var(--ink-muted);
  font-size: 14px;
}

.link-reset {
  background: none;
  border: none;
  color: var(--amber-600);
  font-weight: 700;
  font-size: 13px;
}

.trip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .trip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .trip-grid {
    grid-template-columns: 1fr;
  }
}
</style>
