<script setup>
const stats = [
  { value: '120K+', label: 'Travellers served' },
  { value: '10', label: 'Curated destinations' },
  { value: '4.8', label: 'Average rating' },
  { value: '24/7', label: 'Concierge support' }
]

const values = [
  {
    title: 'Carefully Curated',
    text: 'Every destination and journey is personally vetted before it earns a place on VOYAGO.'
  },
  {
    title: 'Trusted Experience',
    text: 'Transparent pricing, verified partners and a team that stands behind every booking.'
  },
  {
    title: 'Simple Booking',
    text: 'A refined, unhurried booking flow — because planning a trip should feel like part of the trip.'
  },
  {
    title: 'Personal Attention',
    text: 'Recommendations shaped around how you like to travel, not a generic itinerary.'
  }
]
</script>

<template>
  <div class="page">
    <section class="about-header">
      <div class="about-header-media">
        <img src="/image/udaipur.jpg" alt="Udaipur palace on the water" />
        <div class="about-header-overlay"></div>
      </div>
      <div class="container about-header-content">
        <span class="eyebrow eyebrow-light">Our Story</span>
        <h1 class="about-title">Travel, considered.</h1>
        <p class="about-sub">
          VOYAGO was founded on a simple idea — that a trip is only as good as the care put into
          planning it. We built a travel platform for people who want fewer, better choices.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container story-grid">
        <div class="story-copy">
          <span class="eyebrow">Who We Are</span>
          <h2 class="section-title">A studio for thoughtfully planned journeys</h2>
          <p>
            What began as a small collection of hand-picked stays across India has grown into a
            platform trusted by travellers who value substance over spectacle. We work directly
            with a small circle of properties and guides, so every trip we list is one our own
            team has experienced first-hand.
          </p>
          <p>
            No filler destinations, no inflated listings — just a considered selection, priced
            honestly, and supported by a team that answers the phone.
          </p>
        </div>
        <div class="story-image">
          <img src="/image/kashmir.jpg" alt="Kashmir valley landscape" />
        </div>
      </div>
    </section>

    <section class="section section-alt stats-section">
      <div class="container stats-grid">
        <div v-for="s in stats" :key="s.label" class="stat-block">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">What We Stand For</span>
            <h2 class="section-title">The principles behind every itinerary</h2>
          </div>
        </div>

        <div class="values-grid">
          <div v-for="v in values" :key="v.title" class="value-card">
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-text">{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="container about-cta-inner">
        <div>
          <h2 class="cta-title">Ready to plan your next journey?</h2>
          <p class="cta-sub">Browse our curated destinations and find where you belong next.</p>
        </div>
        <RouterLink to="/destinations" class="btn btn-primary">Explore Destinations</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-header {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.about-header-media {
  position: absolute;
  inset: 0;
}

.about-header-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.78) 0%, rgba(16, 24, 32, 0.62) 50%, rgba(16, 24, 32, 0.92) 100%);
}

.about-header-content {
  position: relative;
  padding: 160px 0 88px;
  color: var(--white);
}

.eyebrow-light {
  color: var(--amber-500);
}

.about-title {
  color: var(--white);
  font-size: clamp(34px, 5vw, 54px);
  max-width: 640px;
}

.about-sub {
  color: rgba(255, 255, 255, 0.82);
  max-width: 540px;
  margin: 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.story-copy p {
  max-width: 480px;
}

.story-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.story-image img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

@media (max-width: 900px) {
  .story-grid {
    grid-template-columns: 1fr;
  }

  .story-image {
    order: -1;
  }
}

.stats-section {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  text-align: center;
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 600;
  color: var(--amber-600);
}

.stat-label {
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

@media (max-width: 720px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.value-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-top: 2px solid var(--amber-500);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-title {
  font-size: 17px;
  margin-bottom: var(--space-2);
}

.value-text {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 980px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}

.about-cta {
  background: var(--navy-900);
  margin-top: var(--space-8);
}

.about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  padding: var(--space-8) 0;
  flex-wrap: wrap;
}

.cta-title {
  color: var(--white);
  font-size: clamp(24px, 3vw, 32px);
  margin-bottom: var(--space-2);
}

.cta-sub {
  color: rgba(255, 255, 255, 0.68);
  margin: 0;
}
</style>
