<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Aditi Sharma',
  email: 'aditi.sharma@example.com',
  phone: '+91 98765 43210',
  location: 'Lucknow, Uttar Pradesh',
  avatar: '/image/avatar.jpg',
  memberSince: 'March 2023'
})

const stats = [
  { label: 'Trips Taken', value: 8 },
  { label: 'Active Bookings', value: 2 },
  { label: 'Saved Destinations', value: 5 }
]

const menuItems = [
  { icon: '🧳', label: 'Browse Journeys', to: '/trips' },
  { icon: '🎫', label: 'My Bookings', to: '/bookings' },
  { icon: '❤️', label: 'Saved Destinations', to: '/destinations' },
  { icon: '💳', label: 'Payment Methods', to: '/profile' },
  { icon: '⚙️', label: 'Settings', to: '/profile' },
  { icon: '↩️', label: 'Logout', to: '/login' }
]
</script>

<template>
  <div class="page">
    <section class="profile-hero">
      <div class="container profile-hero-inner">
        <img :src="user.avatar" :alt="user.name" class="avatar" />
        <div class="profile-hero-info">
          <h1 class="profile-name">{{ user.name }}</h1>
          <p class="profile-meta">Member since {{ user.memberSince }} · {{ user.location }}</p>
        </div>
        <button type="button" class="btn btn-primary">Edit Profile</button>
      </div>
    </section>

    <section class="section">
      <div class="container layout">
        <div class="main-col">
          <div class="stats-row">
            <div v-for="s in stats" :key="s.label" class="stat-card">
              <span class="stat-value">{{ s.value }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
          </div>

          <div class="card info-card">
            <h2 class="card-title">Personal Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Full Name</span>
                <span class="info-value">{{ user.name }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email Address</span>
                <span class="info-value">{{ user.email }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Phone Number</span>
                <span class="info-value">{{ user.phone }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location</span>
                <span class="info-value">{{ user.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <aside class="menu-col card">
          <RouterLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.to"
            class="menu-item"
            :class="{ danger: item.label === 'Logout' }"
          >
            <span class="menu-icon">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <span class="menu-arrow">›</span>
          </RouterLink>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-hero {
  background: linear-gradient(120deg, var(--navy-900), var(--navy-800));
  padding: var(--space-8) 0;
  border-top: 3px solid var(--amber-500);
}

.profile-hero-inner {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  flex-wrap: wrap;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.profile-hero-info {
  flex: 1;
  min-width: 200px;
}

.profile-name {
  color: var(--white);
  margin-bottom: 4px;
  font-size: clamp(24px, 3vw, 30px);
}

.profile-meta {
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
  font-size: 14.5px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-6);
  align-items: start;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.stat-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--navy-900);
}

.stat-label {
  font-size: 13px;
  color: var(--ink-muted);
}

.info-card {
  padding: var(--space-6);
}

.card-title {
  font-size: 19px;
  margin-bottom: var(--space-5);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.info-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--navy-900);
}

.menu-col {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 14px 12px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 14.5px;
  color: var(--ink);
  transition: background 0.18s ease;
}

.menu-item:hover {
  background: var(--bg-alt);
}

.menu-item.danger {
  color: var(--danger);
}

.menu-icon {
  font-size: 17px;
}

.menu-arrow {
  margin-left: auto;
  color: var(--ink-muted);
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>
