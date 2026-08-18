<template>
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
</template>

<style scoped>
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
</style>
