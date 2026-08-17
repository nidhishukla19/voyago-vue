<script setup>
const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['cancel'])

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<template>
  <article class="ticket-card booking-card">
    <img :src="booking.image" :alt="booking.destination" class="booking-image" loading="lazy" />

    <div class="booking-body">
      <div class="booking-top">
        <h3 class="booking-name">{{ booking.destination }}</h3>
        <span class="badge" :class="`badge-${booking.status}`">{{ booking.status }}</span>
      </div>
      <p class="booking-id">Booking ID: {{ booking.id }}</p>

      <div class="booking-meta">
        <div class="meta-item">
          <span class="meta-label">Travel Date</span>
          <span class="meta-value">{{ formatDate(booking.date) }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Travellers</span>
          <span class="meta-value">{{ booking.travellers }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Total Amount</span>
          <span class="meta-value">₹{{ booking.amount.toLocaleString('en-IN') }}</span>
        </div>
      </div>
    </div>

    <div class="ticket-divider"></div>

    <div class="booking-footer">
      <button class="btn btn-outline btn-sm">View Booking</button>
      <button
        class="btn btn-danger-outline btn-sm"
        :disabled="booking.status === 'cancelled'"
        @click="emit('cancel', booking.id)"
      >
        Cancel Booking
      </button>
    </div>
  </article>
</template>

<style scoped>
.booking-card {
  display: flex;
  flex-direction: column;
}

.booking-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.booking-body {
  padding: var(--space-5) var(--space-5) var(--space-4);
}

.booking-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.booking-name {
  font-size: 19px;
  margin: 0;
}

.booking-id {
  font-size: 13px;
  color: var(--ink-muted);
  margin: 0 0 var(--space-4);
}

.booking-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.meta-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.meta-value {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--navy-900);
}

.booking-footer {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5) var(--space-5);
}

.booking-footer .btn {
  flex: 1;
}

.booking-footer .btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
