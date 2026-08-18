<template>
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
</template>

<style scoped>
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

.eyebrow-light {
  color: var(--amber-500);
}
</style>
