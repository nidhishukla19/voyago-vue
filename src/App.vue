<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main class="app-main" :class="{ 'no-navbar-offset': route.name === 'home' }">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  /* Navbar is fixed, so in-flow content needs an offset except on the
     home page, where the hero sits full-bleed behind the navbar. */
  padding-top: 76px;
}

.app-main.no-navbar-offset {
  padding-top: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.22s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
