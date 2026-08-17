<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DestinationCard from '../components/DestinationCard.vue'
import TripCard from '../components/TripCard.vue'
import { destinations } from '../data/destinations.js'
import { journeys as allJourneys } from '../data/journeys.js'

const searchTerm = ref('')
const travelDate = ref('')
const travellers = ref(2)

const popularDestinations = computed(() => destinations.filter((d) => d.popular).slice(0, 6))

// Featured, editorial trip packages for the marketing homepage — the full
// catalogue lives on /trips, the curated-journeys marketplace.
const journeys = computed(() => [...allJourneys].sort((a, b) => b.rating - a.rating).slice(0, 3))

const experiences = [
  { title: 'Mountain Escapes', image: '/image/manali.jpg', category: 'Mountains' },
  { title: 'Beach Holidays', image: '/image/andaman.jpg', category: 'Beach' },
  { title: 'Heritage Journeys', image: '/image/jaipur.jpg', category: 'Heritage' },
  { title: 'Adventure Trips', image: '/image/shimla.jpg', category: 'Mountains' },
  { title: 'Romantic Getaways', image: '/image/udaipur.jpg', category: 'Heritage' },
  { title: 'Cultural Journeys', image: '/image/kerala.jpg', category: 'Backwaters' }
]

const stays = [
  {
    title: 'Lakeside Palace Suites',
    place: 'Udaipur',
    image: '/image/udaipur.jpg',
    text: 'Private terraces looking out over Lake Pichola, with turndown service and rooftop dining at golden hour.'
  },
  {
    title: 'Heritage Haveli Rooms',
    place: 'Jaipur',
    image: '/image/jaipur.jpg',
    text: 'Restored sandstone havelis in the old city, blending courtyard architecture with quiet, modern comfort.'
  },
  {
    title: 'Backwater Villas',
    place: 'Kerala',
    image: '/image/kerala.jpg',
    text: 'Waterside villas along the Alleppey canals, each with a private deck for slow mornings on the backwaters.'
  }
]

const trustPoints = [
  { title: 'Secure Booking', text: 'Encrypted payments, verified partners' },
  { title: '24/7 Support', text: 'Real people, any hour of the day' },
  { title: 'Easy Cancellation', text: 'Flexible, no-hassle refund policy' },
  { title: 'Trusted Experience', text: '4.8★ average across 120K+ travellers' }
]

const features = [
  {
    title: 'Carefully Curated Journeys',
    text: 'A short, considered list of destinations and trips, each one vetted before it earns a place on VOYAGO.'
  },
  {
    title: 'Trusted Travel Experiences',
    text: 'Transparent pricing and verified partners — every payment is encrypted end-to-end.'
  },
  {
    title: 'Simple, Unhurried Booking',
    text: 'A refined checkout flow that gets out of your way in under two minutes.'
  },
  {
    title: 'Personalized Support',
    text: 'Real people on chat and phone, any hour, wherever your trip takes you.'
  }
]

const testimonials = [
  {
    name: 'Ananya Rao',
    trip: 'Kerala Backwaters',
    quote:
      'The houseboat booking was seamless and the recommendations matched exactly what we wanted. Best trip planning experience I’ve had.',
    avatarLetter: 'A'
  },
  {
    name: 'Rohan Mehta',
    trip: 'Manali Getaway',
    quote:
      'VOYAGO’s support team helped us rebook after a landslide closed our route, no extra charge and zero stress involved.',
    avatarLetter: 'R'
  },
  {
    name: 'Simran Kaur',
    trip: 'Jaipur Heritage Tour',
    quote:
      'Loved how transparent the pricing was. No hidden fees at checkout, and the itinerary suggestions were spot on.',
    avatarLetter: 'S'
  }
]

const router = useRouter()

function onExplore() {
  router.push({ path: '/destinations', query: searchTerm.value ? { q: searchTerm.value } : {} })
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-media">
        <img src="/image/hero.jpg" alt="Scenic travel destination" />
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-content">
        <span class="eyebrow eyebrow-light">Discover the World</span>
        <h1 class="hero-title">Explore the World</h1>
        <p class="hero-sub">Travel beyond the ordinary.</p>
        <p class="hero-sub hero-sub-secondary">
          Handpicked destinations, transparent pricing, and a booking flow built for people
          who’d rather be packing than filling out forms.
        </p>

        <div class="hero-actions">
          <RouterLink to="/trips" class="btn btn-primary">Explore Journeys</RouterLink>
          <RouterLink to="/destinations" class="btn btn-ghost">Discover Destinations</RouterLink>
        </div>
      </div>

      <div class="container search-wrap">
        <form class="search-card" @submit.prevent="onExplore">
          <div class="search-field">
            <label for="destination">Destination</label>
            <input
              id="destination"
              v-model="searchTerm"
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>

          <div class="search-divider"></div>

          <div class="search-field">
            <label for="date">Travel Date</label>
            <input id="date" v-model="travelDate" type="date" />
          </div>

          <div class="search-divider"></div>

          <div class="search-field search-field-narrow">
            <label for="travellers">Travellers</label>
            <select id="travellers" v-model="travellers">
              <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Traveller' : 'Travellers' }}</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary search-btn">Search</button>
        </form>
      </div>
    </section>

    <!-- TRUST BAR -->
    <section class="trust-bar">
      <div class="container trust-bar-inner" v-reveal>
        <div v-for="t in trustPoints" :key="t.title" class="trust-item">
          <div class="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="t.title === 'Secure Booking'">
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </template>
              <template v-else-if="t.title === '24/7 Support'">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </template>
              <template v-else-if="t.title === 'Easy Cancellation'">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M9 15l2 2 4-4" />
              </template>
              <template v-else>
                <path d="M12 17.3l-5.4 3 1.4-6L3 9.8l6.1-.5L12 3.5l2.9 5.8 6.1.5-5 4.5 1.4 6z" />
              </template>
            </svg>
          </div>
          <div>
            <p class="trust-title">{{ t.title }}</p>
            <p class="trust-text">{{ t.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED DESTINATIONS -->
    <section class="section">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Featured Destinations</span>
            <h2 class="section-title">Where travellers are headed this season</h2>
          </div>
          <RouterLink to="/destinations" class="btn btn-outline">View All Destinations</RouterLink>
        </div>

        <div class="dest-grid" v-reveal>
          <DestinationCard v-for="d in popularDestinations" :key="d.id" :destination="d" />
        </div>
      </div>
    </section>

    <!-- EXPLORE INDIA -->
    <section class="section explore-india">
      <div class="container explore-inner" v-reveal>
        <div class="explore-media">
          <img src="/image/rajasthan.jpg" alt="Desert dunes and forts of Rajasthan, India" loading="lazy" />
        </div>
        <div class="explore-copy">
          <span class="eyebrow">Explore India</span>
          <h2 class="section-title">One country, a hundred different journeys</h2>
          <p class="explore-text">
            From Himalayan passes to desert forts, backwater villages to island coastlines —
            India rarely repeats itself. VOYAGO's routes are built around that range, so a
            single trip can move between very different landscapes without ever feeling rushed.
          </p>
          <RouterLink to="/destinations" class="btn btn-dark">Explore All Destinations</RouterLink>
        </div>
      </div>
    </section>

    <!-- CURATED JOURNEYS -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Curated Journeys</span>
            <h2 class="section-title">Multi-day trips, planned to the last detail</h2>
          </div>
          <RouterLink to="/trips" class="btn btn-outline">View All Journeys</RouterLink>
        </div>

        <div class="journey-grid" v-reveal>
          <TripCard v-for="j in journeys" :key="j.id" :trip="j" />
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE VOYAGO -->
    <section class="section">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Why Choose VOYAGO</span>
            <h2 class="section-title">Planning a trip shouldn’t feel like work</h2>
          </div>
        </div>

        <div class="feature-grid" v-reveal>
          <div v-for="f in features" :key="f.title" class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <template v-if="f.title.includes('Curated')">
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </template>
                <template v-else-if="f.title.includes('Trusted')">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                </template>
                <template v-else-if="f.title.includes('Simple')">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 12.5l2.2 2.2L15.5 9.5" />
                </template>
                <template v-else>
                  <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1.1-4.2A8.4 8.4 0 1 1 21 11.5z" />
                </template>
              </svg>
            </div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-text">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAVEL EXPERIENCES -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Travel Experiences</span>
            <h2 class="section-title">Choose the kind of journey you’re after</h2>
          </div>
        </div>

        <div class="experience-grid" v-reveal>
          <RouterLink
            v-for="e in experiences"
            :key="e.title"
            to="/destinations"
            class="experience-card"
          >
            <img :src="e.image" :alt="e.title" class="experience-image" loading="lazy" />
            <div class="experience-overlay"></div>
            <span class="experience-title">{{ e.title }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- STAY & EXPERIENCE -->
    <section class="section stay-section">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Stay &amp; Experience</span>
            <h2 class="section-title">Places to stay, chosen as carefully as the itinerary</h2>
          </div>
        </div>

        <div class="stay-grid" v-reveal>
          <div v-for="(s, i) in stays" :key="s.title" class="stay-card" :class="{ 'stay-card-lg': i === 0 }">
            <div class="stay-image-wrap">
              <img :src="s.image" :alt="`${s.title}, ${s.place}`" class="stay-image" loading="lazy" />
              <div class="stay-scrim"></div>
            </div>
            <div class="stay-copy">
              <span class="stay-place">{{ s.place }}</span>
              <h3 class="stay-title">{{ s.title }}</h3>
              <p class="stay-text">{{ s.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section">
      <div class="container">
        <div class="section-head" v-reveal>
          <div>
            <span class="eyebrow">Traveller Stories</span>
            <h2 class="section-title">What our customers say</h2>
          </div>
        </div>

        <div class="testimonial-grid" v-reveal>
          <div v-for="t in testimonials" :key="t.name" class="testimonial-card">
            <p class="testimonial-quote">“{{ t.quote }}”</p>
            <div class="testimonial-person">
              <div class="avatar-badge">{{ t.avatarLetter }}</div>
              <div>
                <p class="person-name">{{ t.name }}</p>
                <p class="person-trip">{{ t.trip }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-media">
        <img src="/image/andaman.jpg" alt="Turquoise coastline" loading="lazy" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container cta-inner" v-reveal>
        <div>
          <span class="eyebrow eyebrow-light">Begin Your Journey</span>
          <h2 class="cta-title">Your next journey begins here.</h2>
          <p class="cta-sub">Discover extraordinary places and create memories worth keeping.</p>
        </div>
        <RouterLink to="/destinations" class="btn btn-primary">Start Exploring</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.62) 0%, rgba(16, 24, 32, 0.42) 45%, rgba(16, 24, 32, 0.88) 100%);
}

.hero-content {
  position: relative;
  padding: 180px 0 64px;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eyebrow-light {
  color: var(--amber-500);
}

.hero-content .eyebrow {
  justify-content: center;
}

.hero-title {
  font-size: clamp(44px, 7vw, 84px);
  font-weight: 500;
  color: var(--white);
  max-width: 900px;
  margin-bottom: var(--space-3);
}

.hero-sub {
  color: rgba(255, 255, 255, 0.92);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 20px;
  max-width: 520px;
  margin-bottom: var(--space-2);
}

.hero-sub-secondary {
  font-family: var(--font-body);
  font-style: normal;
  color: rgba(255, 255, 255, 0.72);
  font-size: 16px;
  max-width: 520px;
  margin-bottom: var(--space-6);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
  justify-content: center;
}

/* ---------- Search card (overlaps the bottom edge of the hero) ---------- */
.search-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.search-card {
  display: flex;
  align-items: stretch;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-4) var(--space-5);
  gap: var(--space-4);
  max-width: 900px;
  width: 100%;
  flex-wrap: wrap;
  transform: translateY(50%);
  border-top: 3px solid var(--amber-500);
}

.search-field {
  flex: 1.4;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.search-field-narrow {
  flex: 1;
  min-width: 140px;
}

.search-field label {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}

.search-field input,
.search-field select {
  border: none;
  padding: 4px 0;
  color: var(--navy-900);
  font-weight: 600;
  background: transparent;
}

.search-field input:focus,
.search-field select:focus {
  outline: none;
}

.search-divider {
  width: 1px;
  background: var(--line);
  margin: 4px 0;
}

.search-btn {
  align-self: center;
  white-space: nowrap;
}

@media (max-width: 720px) {
  .search-card {
    flex-direction: column;
    transform: translateY(30%);
  }

  .search-divider {
    width: 100%;
    height: 1px;
  }

  .search-btn {
    width: 100%;
  }

  .hero {
    min-height: auto;
    padding-bottom: 40px;
  }
}

/* ---------- Trust bar ---------- */
.trust-bar {
  padding: var(--space-8) 0 var(--space-6);
}

.trust-bar-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.trust-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.trust-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-alt);
  color: var(--amber-600);
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-icon svg {
  width: 20px;
  height: 20px;
}

.trust-title {
  margin: 0 0 2px;
  font-weight: 700;
  font-size: 14.5px;
  color: var(--navy-900);
}

.trust-text {
  margin: 0;
  font-size: 13px;
  color: var(--ink-muted);
}

@media (max-width: 900px) {
  .trust-bar-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .trust-bar-inner {
    grid-template-columns: 1fr;
  }
  .trust-bar {
    padding: var(--space-7) 0 var(--space-5);
  }
}

/* ---------- Destinations grid ---------- */
.dest-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .dest-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .dest-grid {
    grid-template-columns: 1fr;
  }
}

/* ---------- Explore India ---------- */
.explore-india {
  padding-top: 0;
}

.explore-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: var(--space-8);
}

.explore-media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.explore-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.explore-india:hover .explore-media img {
  transform: scale(1.04);
}

.explore-text {
  max-width: 46ch;
}

@media (max-width: 900px) {
  .explore-inner {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .explore-media {
    order: -1;
    aspect-ratio: 16 / 10;
  }
}

/* ---------- Stay & Experience ---------- */
.stay-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: var(--space-6);
}

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
  .stay-grid {
    grid-template-columns: 1fr;
  }

  .stay-card-lg {
    grid-column: span 1;
  }

  .stay-card {
    min-height: 320px;
  }
}

/* ---------- Curated journeys ---------- */
.section-alt {
  background: var(--bg-alt);
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .journey-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .journey-grid {
    grid-template-columns: 1fr;
  }
}

/* ---------- Why choose ---------- */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.feature-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--amber-500);
  color: var(--amber-600);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.feature-icon svg {
  width: 22px;
  height: 22px;
}

.feature-title {
  font-size: 18px;
  margin-bottom: var(--space-2);
}

.feature-text {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 980px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

/* ---------- Travel experiences ---------- */
.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

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

/* ---------- Testimonials ---------- */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.testimonial-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}

.testimonial-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 17px;
  color: var(--ink);
  line-height: 1.6;
  margin-bottom: var(--space-5);
}

.testimonial-person {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--navy-900);
  color: var(--amber-500);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: var(--font-display);
}

.person-name {
  margin: 0;
  font-weight: 700;
  color: var(--navy-900);
  font-size: 14.5px;
}

.person-trip {
  margin: 0;
  font-size: 13px;
  color: var(--ink-muted);
}

@media (max-width: 900px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}

/* ---------- CTA ---------- */
.cta-section {
  position: relative;
  margin-top: var(--space-8);
  overflow: hidden;
}

.cta-media {
  position: absolute;
  inset: 0;
}

.cta-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(16, 24, 32, 0.92), rgba(16, 24, 32, 0.6));
}

.cta-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  padding: var(--space-9) 0;
  flex-wrap: wrap;
}

.cta-title {
  color: var(--white);
  font-size: clamp(26px, 3.4vw, 36px);
  margin-bottom: var(--space-2);
}

.cta-sub {
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
}
</style>
