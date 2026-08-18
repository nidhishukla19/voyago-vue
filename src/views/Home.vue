<script setup>
import { computed } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import TrustBar from '../components/TrustBar.vue'
import DestinationSection from '../components/DestinationSection.vue'
import ExploreIndia from '../components/ExploreIndia.vue'
import JourneySection from '../components/JourneySection.vue'
import FeatureSection from '../components/FeatureSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import StaySection from '../components/StaySection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import CTASection from '../components/CTASection.vue'
import { destinations } from '../data/destinations.js'
import { journeys as allJourneys } from '../data/journeys.js'

const popularDestinations = computed(() => destinations.filter((d) => d.popular).slice(0, 6))

// Featured, editorial trip packages for the marketing homepage — the full
// catalogue lives on /trips, the curated-journeys marketplace.
const journeys = computed(() => [...allJourneys].sort((a, b) => b.rating - a.rating).slice(0, 3))

const experiences = [
  { title: 'Mountain Escapes', image: '/image/manali.jpg', category: 'Mountains' },
  { title: 'Beach Holidays', image: '/image/andaman.jpg', category: 'Beach' },
  { title: 'Heritage Journeys', image: '/image/jaipur.jpg', category: 'Heritage' },
  { title: 'Adventure Trips', image: '/image/shimla.jpg', category: 'Mountains' },
  { title: 'Romantic Getaways', image: '/image/udaipur.jpg', category: 'Heritage' },
  { title: 'Cultural Journeys', image: '/image/kerala.jpg', category: 'Backwaters' }
]

const stays = [
  {
    title: 'Lakeside Palace Suites',
    place: 'Udaipur',
    image: '/image/udaipur.jpg',
    text: 'Private terraces looking out over Lake Pichola, with turndown service and rooftop dining at golden hour.'
  },
  {
    title: 'Heritage Haveli Rooms',
    place: 'Jaipur',
    image: '/image/jaipur.jpg',
    text: 'Restored sandstone havelis in the old city, blending courtyard architecture with quiet, modern comfort.'
  },
  {
    title: 'Backwater Villas',
    place: 'Kerala',
    image: '/image/kerala.jpg',
    text: 'Waterside villas along the Alleppey canals, each with a private deck for slow mornings on the backwaters.'
  }
]

const features = [
  {
    title: 'Carefully Curated Journeys',
    text: 'A short, considered list of destinations and trips, each one vetted before it earns a place on VOYAGO.'
  },
  {
    title: 'Trusted Travel Experiences',
    text: 'Transparent pricing and verified partners — every payment is encrypted end-to-end.'
  },
  {
    title: 'Simple, Unhurried Booking',
    text: 'A refined checkout flow that gets out of your way in under two minutes.'
  },
  {
    title: 'Personalized Support',
    text: 'Real people on chat and phone, any hour, wherever your trip takes you.'
  }
]

const testimonials = [
  {
    name: 'Ananya Rao',
    trip: 'Kerala Backwaters',
    quote:
      'The houseboat booking was seamless and the recommendations matched exactly what we wanted. Best trip planning experience I’ve had.',
    avatarLetter: 'A'
  },
  {
    name: 'Rohan Mehta',
    trip: 'Manali Getaway',
    quote:
      'VOYAGO’s support team helped us rebook after a landslide closed our route, no extra charge and zero stress involved.',
    avatarLetter: 'R'
  },
  {
    name: 'Simran Kaur',
    trip: 'Jaipur Heritage Tour',
    quote:
      'Loved how transparent the pricing was. No hidden fees at checkout, and the itinerary suggestions were spot on.',
    avatarLetter: 'S'
  }
]
</script>

<template>
  <div>
    <HeroSection />
    <TrustBar />
    <DestinationSection :destinations="popularDestinations" />
    <ExploreIndia />
    <JourneySection :journeys="journeys" />
    <FeatureSection :features="features" />
    <ExperienceSection :experiences="experiences" />
    <StaySection :stays="stays" />
    <TestimonialSection :testimonials="testimonials" />
    <CTASection />
  </div>
</template>
