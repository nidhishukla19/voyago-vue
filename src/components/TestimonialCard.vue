<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="testimonial-card">
    <p class="testimonial-quote">“{{ testimonial.quote }}”</p>
    <div class="testimonial-person">
      <div class="avatar-badge">{{ testimonial.avatarLetter }}</div>
      <div>
        <p class="person-name">{{ testimonial.name }}</p>
        <p class="person-trip">{{ testimonial.trip }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
