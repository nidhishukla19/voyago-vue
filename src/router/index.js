import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Destinations from '../views/Destinations.vue'
import DestinationDetail from '../views/DestinationDetail.vue'
import Trips from '../views/Trips.vue'
import TripDetail from '../views/TripDetail.vue'
import Booking from '../views/Booking.vue'
import Bookings from '../views/Bookings.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Support from '../views/Support.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'VOYAGO — Explore the World, Your Way' } },
  { path: '/destinations', name: 'destinations', component: Destinations, meta: { title: 'Destinations | VOYAGO' } },
  { path: '/destinations/:id', name: 'destination-detail', component: DestinationDetail, meta: { title: 'Destination | VOYAGO' } },
  { path: '/trips', name: 'trips', component: Trips, meta: { title: 'Curated Journeys | VOYAGO' } },
  { path: '/trips/:id', name: 'trip-detail', component: TripDetail, meta: { title: 'Journey | VOYAGO' } },
  { path: '/booking/:tripId', name: 'booking', component: Booking, meta: { title: 'Book Your Trip | VOYAGO' } },
  { path: '/bookings', name: 'bookings', component: Bookings, meta: { title: 'My Bookings | VOYAGO' } },
  { path: '/profile', name: 'profile', component: Profile, meta: { title: 'My Account | VOYAGO' } },
  { path: '/login', name: 'login', component: Login, meta: { title: 'Login | VOYAGO' } },
  { path: '/register', name: 'register', component: Register, meta: { title: 'Create Account | VOYAGO' } },
  { path: '/about', name: 'about', component: About, meta: { title: 'About Us | VOYAGO' } },
  { path: '/support', name: 'support', component: Support, meta: { title: 'Support | VOYAGO' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Dynamic, per-page document titles — better SEO and a more "real product"
// browser-tab experience than a single static title across every route.
router.afterEach((to) => {
  document.title = to.meta?.title || 'VOYAGO — Explore the World, Your Way'
})

export default router
