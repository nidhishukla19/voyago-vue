import { reactive } from 'vue'
import { bookings as initialBookings } from '../data/bookings.js'

// A minimal shared store so a booking made on the /booking flow shows up
// immediately on the /bookings page, without needing a real backend.
const state = reactive({
  bookings: [...initialBookings]
})

function nextBookingId() {
  const n = 58291 + state.bookings.length + Math.floor(Math.random() * 90)
  return `BK-${n}`
}

export function useBookingsStore() {
  return state
}

export function addBooking({ destination, image, date, travellers, amount }) {
  const booking = {
    id: nextBookingId(),
    destination,
    image,
    date,
    travellers,
    amount,
    status: 'confirmed'
  }
  state.bookings.unshift(booking)
  return booking
}

export function cancelBooking(id) {
  const booking = state.bookings.find((b) => b.id === id)
  if (booking) booking.status = 'cancelled'
}
