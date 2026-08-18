<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getJourneyById } from '../data/journeys.js'
import { addBooking } from '../store/bookings.js'

const route = useRoute()
const router = useRouter()
const trip = computed(() => getJourneyById(route.params.tripId))

const fullName = ref('')
const email = ref('')
const phone = ref('')
const travelDate = ref('')
const travellers = ref(2)
const confirmed = ref(false)
const errors = ref({})

const taxesAndFees = computed(() => Math.round(trip.value ? trip.value.price * 0.05 : 0))
const total = computed(() => trip.value ? trip.value.price * travellers.value + taxesAndFees.value * travellers.value : 0)

function validate() {
  const e = {}
  if (!fullName.value.trim()) e.fullName = 'Enter the lead traveller\'s name'
  if (!email.value.trim() || !email.value.includes('@')) e.email = 'Enter a valid email address'
  if (!phone.value.trim()) e.phone = 'Enter a contact number'
  if (!travelDate.value) e.travelDate = 'Choose a travel date'
  errors.value = e
  return Object.keys(e).length === 0
}

function confirmBooking() {
  if (!validate() || !trip.value) return

  addBooking({
    destination: trip.value.destination,
    image: trip.value.image,
    date: travelDate.value,
    travellers: travellers.value,
    amount: total.value
  })

  confirmed.value = true
}

function goToBookings() {
  router.push('/bookings')
}
</script>

<template>
  <div v-if="trip" class="page">
    <section class="booking-header">
      <div class="container">
        <RouterLink :to="`/trips/${trip.id}`" class="back-link">← Back to journey</RouterLink>
        <span class="eyebrow">Booking</span>
        <h1 class="page-title">Complete your booking</h1>
      </div>
    </section>

    <section class="section">
      <div class="container booking-layout">
        <!-- SUCCESS STATE -->
        <div v-if="confirmed" class="success-panel card">
          <div class="success-icon">✓</div>
          <h2>Booking confirmed</h2>
          <p>
            Your journey to {{ trip.destination }} for {{ travellers }} traveller{{ travellers > 1 ? 's' : '' }} on
            {{ travelDate }} has been confirmed. A confirmation has been sent to {{ email }}.
          </p>
          <div class="success-actions">
            <button type="button" class="btn btn-primary" @click="goToBookings">View My Bookings</button>
            <RouterLink to="/trips" class="btn btn-outline">Explore More Journeys</RouterLink>
          </div>
        </div>

        <template v-else>
          <div class="booking-form-col">
            <div class="trip-summary-card">
              <img :src="trip.image" :alt="trip.name" />
              <div>
                <span class="trip-summary-label">Curated Journey</span>
                <h3>{{ trip.name }}</h3>
                <p>{{ trip.destination }} · {{ trip.duration }}</p>
              </div>
            </div>

            <form class="card booking-form" @submit.prevent="confirmBooking">
              <h2 class="form-heading">Traveller Information</h2>

              <div class="field">
                <label for="fullName">Lead Traveller Name</label>
                <input id="fullName" v-model="fullName" type="text" placeholder="Full name" />
                <p v-if="errors.fullName" class="field-error">{{ errors.fullName }}</p>
              </div>

              <div class="field-row">
                <div class="field">
                  <label for="email">Email Address</label>
                  <input id="email" v-model="email" type="email" placeholder="you@example.com" />
                  <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
                </div>
                <div class="field">
                  <label for="phone">Phone Number</label>
                  <input id="phone" v-model="phone" type="tel" placeholder="+91 98765 43210" />
                  <p v-if="errors.phone" class="field-error">{{ errors.phone }}</p>
                </div>
              </div>

              <h2 class="form-heading">Trip Details</h2>

              <div class="field-row">
                <div class="field">
                  <label for="date">Travel Date</label>
                  <input id="date" v-model="travelDate" type="date" />
                  <p v-if="errors.travelDate" class="field-error">{{ errors.travelDate }}</p>
                </div>
                <div class="field">
                  <label for="travellers">Travellers</label>
                  <select id="travellers" v-model.number="travellers">
                    <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Traveller' : 'Travellers' }}</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block confirm-btn">Confirm Booking</button>
            </form>
          </div>

          <!-- STICKY PRICE SUMMARY -->
          <aside class="price-summary card">
            <h3 class="summary-title">Price Summary</h3>
            <div class="summary-row">
              <span>₹{{ trip.price.toLocaleString('en-IN') }} × {{ travellers }} traveller{{ travellers > 1 ? 's' : '' }}</span>
              <span>₹{{ (trip.price * travellers).toLocaleString('en-IN') }}</span>
            </div>
            <div class="summary-row">
              <span>Taxes &amp; fees</span>
              <span>₹{{ (taxesAndFees * travellers).toLocaleString('en-IN') }}</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row summary-total">
              <span>Total</span>
              <span>₹{{ total.toLocaleString('en-IN') }}</span>
            </div>
            <p class="summary-note">Free cancellation up to 7 days before departure.</p>
          </aside>
        </template>
      </div>
    </section>
  </div>

  <div v-else class="page">
    <section class="section">
      <div class="container empty-state">
        <div class="empty-icon">🧳</div>
        <h3>Journey not found</h3>
        <p>We couldn't find the journey you're trying to book.</p>
        <RouterLink to="/trips" class="btn btn-primary">Browse Journeys</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.booking-header {
  background: var(--bg-alt);
  padding: var(--space-6) 0 var(--space-5);
  border-bottom: 1px solid var(--line);
  border-top: 3px solid var(--amber-500);
}

.back-link {
  display: inline-block;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-muted);
  margin-bottom: var(--space-3);
}

.page-title {
  font-size: clamp(26px, 3.4vw, 34px);
  margin: 4px 0 0;
}

.booking-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: var(--space-6);
  align-items: start;
}

.booking-form-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.trip-summary-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
}

.trip-summary-card img {
  width: 96px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.trip-summary-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber-600);
}

.trip-summary-card h3 {
  margin: 4px 0 2px;
  font-size: 18px;
}

.trip-summary-card p {
  margin: 0;
  font-size: 13.5px;
}

.booking-form {
  padding: var(--space-6);
}

.form-heading {
  font-size: 17px;
  margin-top: var(--space-5);
}

.form-heading:first-child {
  margin-top: 0;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.field-error {
  color: var(--danger);
  font-size: 12.5px;
  margin: 4px 0 0;
}

.confirm-btn {
  margin-top: var(--space-3);
  padding: 15px 26px;
  font-size: 15.5px;
}

.price-summary {
  padding: var(--space-6) var(--space-5);
  position: sticky;
  top: 96px;
}

.summary-title {
  font-size: 17px;
  margin-bottom: var(--space-4);
}

.summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: var(--ink-muted);
  margin-bottom: var(--space-3);
}

.summary-divider {
  height: 1px;
  background: var(--line);
  margin: var(--space-3) 0;
}

.summary-total {
  font-weight: 700;
  color: var(--navy-900);
  font-size: 18px;
}

.summary-note {
  font-size: 12.5px;
  margin: var(--space-4) 0 0;
}

.success-panel {
  grid-column: 1 / -1;
  text-align: center;
  padding: var(--space-9) var(--space-6);
  max-width: 560px;
  margin: 0 auto;
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--success);
  color: var(--white);
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.success-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  margin-top: var(--space-5);
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .booking-layout {
    grid-template-columns: 1fr;
  }
  .price-summary {
    position: static;
  }
}

@media (max-width: 620px) {
  .field-row {
    grid-template-columns: 1fr;
  }
}
</style>
