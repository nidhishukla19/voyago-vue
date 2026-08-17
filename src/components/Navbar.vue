<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/trips', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/support#contact', label: 'Contact' }
]

// The navbar floats transparent over the home hero image, then adopts a
// solid ivory surface once the page scrolls past it (or on any other page).
const isHome = computed(() => route.name === 'home')
const isTransparent = computed(() => isHome.value && !scrolled.value && !isOpen.value)

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function closeMenu() {
  isOpen.value = false
}

function isLinkActive(to) {
  const linkPath = to.split('#')[0]
  if (linkPath === '/') return route.path === '/'
  return route.path === linkPath || route.path.startsWith(linkPath + '/')
}
</script>

<template>
  <header class="navbar" :class="{ transparent: isTransparent }">
    <div class="container navbar-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <img src="/image/logo.png" alt="VOYAGO logo" class="brand-logo" />
        <span class="brand-name">VOYAGO</span>
      </RouterLink>

      <nav class="nav-links" :class="{ open: isOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: isLinkActive(link.to) }"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink
          to="/profile"
          class="nav-link"
          :class="{ active: route.path === '/profile' || route.path === '/bookings' }"
          @click="closeMenu"
        >
          My Account
        </RouterLink>

        <div class="nav-auth">
          <RouterLink to="/login" class="btn btn-outline btn-sm" @click="closeMenu">Login</RouterLink>
          <RouterLink to="/trips" class="btn btn-primary btn-sm" @click="closeMenu">Book Now</RouterLink>
        </div>
      </nav>

      <button
        class="hamburger"
        :class="{ open: isOpen }"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 246, 238, 0.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
  transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.navbar.transparent {
  background: transparent;
  border-bottom-color: transparent;
  box-shadow: none;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(183, 138, 63, 0.4);
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.06em;
  color: var(--navy-900);
  transition: color 0.35s ease;
}

.transparent .brand-name {
  color: var(--white);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.nav-link {
  position: relative;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding: 8px 2px;
  transition: color 0.25s ease;
}

.transparent .nav-link {
  color: rgba(255, 255, 255, 0.82);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: var(--amber-500);
  transition: width 0.2s ease;
}

.nav-link:hover {
  color: var(--navy-900);
}

.transparent .nav-link:hover,
.transparent .nav-link.active {
  color: var(--white);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--navy-900);
}

.nav-auth {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: var(--space-4);
}

.transparent .nav-auth .btn-outline {
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.5);
}

.transparent .nav-auth .btn-outline:hover {
  background: rgba(255, 255, 255, 0.12);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
}

.transparent .hamburger {
  border-color: rgba(255, 255, 255, 0.5);
}

.hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  background: var(--navy-900);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease, background 0.25s ease;
}

.transparent .hamburger span {
  background: var(--white);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 1040px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--white);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 520px;
  }

  .nav-link,
  .transparent .nav-link {
    padding: 16px var(--space-5);
    border-bottom: 1px solid var(--line);
    color: var(--ink-muted);
  }

  .nav-link::after {
    display: none;
  }

  .nav-auth {
    margin: var(--space-4) var(--space-5) var(--space-5);
    flex-direction: column;
  }

  .transparent .nav-auth .btn-outline {
    color: var(--navy-900);
    border-color: var(--line);
  }

  .nav-auth .btn {
    width: 100%;
  }
}
</style>
