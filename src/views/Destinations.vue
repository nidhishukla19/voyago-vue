<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import DestinationCard from '../components/DestinationCard.vue'
import { destinations } from '../data/destinations.js'

const route = useRoute()

// The homepage search box sends travellers here as /destinations?q=...
// — pick that up on load and whenever the query changes (e.g. clicking
// the search box again while already on this page).
const searchTerm = ref(typeof route.query.q === 'string' ? route.query.q : '')
const regionFilter = ref('All')
const activeCategory = ref('All')
const sortBy = ref('popular')

watch(
  () => route.query.q,
  (q) => {
    searchTerm.value = typeof q === 'string' ? q : ''
  }
)

const categories = ['All', ...new Set(destinations.map((d) => d.category))]
const regions = ['All', ...new Set(destinations.map((d) => d.region))]

const filteredDestinations = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()

  let list = destinations.filter((d) => {
    const matchesSearch =
      !term ||
      d.name.toLowerCase().includes(term) ||
      d.region.toLowerCase().includes(term) ||
      d.category.toLowerCase().includes(term)
    const matchesRegion = regionFilter.value === 'All' || d.region === regionFilter.value
    const matchesCategory = activeCategory.value === 'All' || d.category === activeCategory.value
    return matchesSearch && matchesRegion && matchesCategory
  })

  list = [...list].sort((a, b) => {
    if (sortBy.value === 'price-asc') return a.price - b.price
    if (sortBy.value === 'price-desc') return b.price - a.price
    if (sortBy.value === 'rating') return b.rating - a.rating
    // popular: popular flag first, then rating
    return Number(b.popular) - Number(a.popular) || b.rating - a.rating
  })

  return list
})

const featuredDestination = computed(() => filteredDestinations.value[0])
const restDestinations = computed(() => filteredDestinations.value.slice(1))

function resetFilters() {
  searchTerm.value = ''
  regionFilter.value = 'All'
  activeCategory.value = 'All'
  sortBy.value = 'popular'
}
</script>

<template>
  <div class="page">
    <!-- HERO -->
    <section class="dest-hero">
      <div class="dest-hero-media">
        <img src="/image/kashmir.jpg" alt="Alpine valley destination" />
        <div class="dest-hero-overlay"></div>
      </div>
      <div class="container dest-hero-content">
        <span class="eyebrow eyebrow-light">Explore the World</span>
        <h1 class="dest-hero-title">Find Your Next Escape</h1>
        <p class="dest-hero-sub">Discover remarkable places, thoughtfully curated for unforgettable journeys.</p>
      </div>
    </section>

    <!-- SEARCH PANEL -->
    <section class="search-section">
      <div class="container">
        <form class="search-panel" @submit.prevent>
          <div class="search-field">
            <label for="dsearch">Destination</label>
            <input id="dsearch" v-model="searchTerm" type="text" placeholder="Try 'Kashmir' or 'Goa'" />
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label for="dregion">Region</label>
            <select id="dregion" v-model="regionFilter">
              <option v-for="r in regions" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>
          <div class="search-divider"></div>
          <div class="search-field">
            <label for="dexperience">Experience</label>
            <select id="dexperience" v-model="activeCategory">
              <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
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
        <!-- FILTER CHIPS + SORT -->
        <div class="filter-bar">
          <div class="category-list">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="category-chip"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <div class="sort-row">
            <label for="sort">Sort by</label>
            <select id="sort" v-model="sortBy" class="sort-select">
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div class="results-head">
          <p class="results-count">{{ filteredDestinations.length }} destination{{ filteredDestinations.length === 1 ? '' : 's' }} found</p>
          <button v-if="searchTerm || regionFilter !== 'All' || activeCategory !== 'All' || sortBy !== 'popular'" type="button" class="link-reset" @click="resetFilters">
            Clear filters
          </button>
        </div>

        <!-- EDITORIAL GRID -->
        <div v-if="filteredDestinations.length" class="dest-editorial-grid">
          <DestinationCard :destination="featuredDestination" featured class="grid-featured" />
          <DestinationCard v-for="d in restDestinations" :key="d.id" :destination="d" class="grid-item" />
        </div>

        <div v-else class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No destinations match your search</h3>
          <p>Try a different region, experience, or clear your filters.</p>
          <button type="button" class="btn btn-primary" @click="resetFilters">Reset Filters</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dest-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
}

.dest-hero-media {
  position: absolute;
  inset: 0;
}

.dest-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dest-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.55) 0%, rgba(16, 24, 32, 0.72) 100%);
}

.dest-hero-content {
  position: relative;
  z-index: 1;
  padding: var(--space-9) 0 var(--space-7);
}

.eyebrow-light {
  color: var(--amber-500);
}

.dest-hero-title {
  color: var(--white);
  font-size: clamp(38px, 5.5vw, 62px);
  max-width: 700px;
}

.dest-hero-sub {
  color: rgba(255, 255, 255, 0.82);
  font-size: 17px;
  max-width: 480px;
  margin: 0;
}

/* Search panel */
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

.search-btn {
  flex-shrink: 0;
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
  .search-field {
    flex: 1 1 100%;
  }
  .search-btn {
    width: 100%;
  }
}

/* Filter bar */
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

/* Editorial masonry-inspired grid: one large featured card, then a
   regular grid of smaller cards beneath it. */
.dest-editorial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.grid-featured {
  grid-column: span 3;
}

.grid-featured :deep(.dest-body) {
  padding: var(--space-6);
}

@media (min-width: 860px) {
  .grid-featured {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    align-items: stretch;
  }

  .grid-featured :deep(.dest-image-wrap) {
    aspect-ratio: auto;
    height: 100%;
  }
}

@media (max-width: 980px) {
  .dest-editorial-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-featured {
    grid-column: span 2;
  }
}

@media (max-width: 620px) {
  .dest-editorial-grid {
    grid-template-columns: 1fr;
  }
  .grid-featured {
    grid-column: span 1;
  }
}
</style>
