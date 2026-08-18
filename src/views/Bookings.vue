<script setup>
import BookingCard from '../components/BookingCard.vue'
import { useBookingsStore, cancelBooking } from '../store/bookings.js'

const store = useBookingsStore()

function handleCancel(id) {
  cancelBooking(id)
}
</script>

<template>
  <div class="page">
    <section class="page-header">
      <div class="container header-row">
        <div>
          <span class="eyebrow">My Bookings</span>
          <h1 class="page-title">Manage your bookings</h1>
        </div>
        <RouterLink to="/trips" class="btn btn-primary">Book a New Trip</RouterLink>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-if="store.bookings.length" class="booking-grid">
          <BookingCard
            v-for="booking in store.bookings"
            :key="booking.id"
            :booking="booking"
            @cancel="handleCancel"
          />
        </div>

        <div v-else class="empty-state">
          <div class="empty-icon">🎫</div>
          <h3>You don’t have any bookings yet</h3>
          <p>Once you book a trip, your confirmation details will appear here.</p>
          <RouterLink to="/destinations" class="btn btn-primary">Explore Destinations</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: var(--bg-alt);
  padding: var(--space-7) 0 var(--space-6);
  border-bottom: 1px solid var(--line);
  border-top: 3px solid var(--amber-500);
}

.header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.page-title {
  font-size: clamp(28px, 3.6vw, 38px);
  margin: 0;
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 980px) {
  .booking-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .booking-grid {
    grid-template-columns: 1fr;
  }
}
</style>
