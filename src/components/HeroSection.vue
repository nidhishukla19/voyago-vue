<script setup>
import SearchBox from './SearchBox.vue'
</script>

<template>
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
      <SearchBox />
    </div>
  </section>
</template>

<style scoped>
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

/* ---------- Search wrap (overlaps the bottom edge of the hero) ---------- */
.search-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

@media (max-width: 720px) {
  .hero {
    min-height: auto;
    padding-bottom: 40px;
  }

  .hero-content {
    padding: 110px 0 32px;
  }

  .hero-title {
    margin-bottom: var(--space-2);
  }

  .hero-actions {
    margin-bottom: var(--space-6);
  }
}
</style>
