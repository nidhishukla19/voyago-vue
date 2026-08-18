<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchTerm = ref('')
const travelDate = ref('')
const travellers = ref(2)

const router = useRouter()

function onExplore() {
  router.push({ path: '/destinations', query: searchTerm.value ? { q: searchTerm.value } : {} })
}
</script>

<template>
  <form class="search-card" @submit.prevent="onExplore">
    <div class="search-field">
      <label for="destination">Destination</label>
      <input
        id="destination"
        v-model="searchTerm"
        type="text"
        placeholder="Where do you want to go?"
      />
    </div>

    <div class="search-divider"></div>

    <div class="search-field">
      <label for="date">Travel Date</label>
      <input id="date" v-model="travelDate" type="date" />
    </div>

    <div class="search-divider"></div>

    <div class="search-field search-field-narrow">
      <label for="travellers">Travellers</label>
      <select id="travellers" v-model="travellers">
        <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Traveller' : 'Travellers' }}</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary search-btn">Search</button>
  </form>
</template>

<style scoped>
.search-card {
  display: flex;
  align-items: stretch;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-4) var(--space-5);
  gap: var(--space-4);
  max-width: 900px;
  width: 100%;
  flex-wrap: wrap;
  transform: translateY(50%);
  border-top: 3px solid var(--amber-500);
}

.search-field {
  flex: 1.4;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.search-field-narrow {
  flex: 1;
  min-width: 140px;
}

.search-field label {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}

.search-field input,
.search-field select {
  border: none;
  padding: 4px 0;
  color: var(--navy-900);
  font-weight: 600;
  background: transparent;
}

.search-field input:focus,
.search-field select:focus {
  outline: none;
}

.search-divider {
  width: 1px;
  background: var(--line);
  margin: 4px 0;
}

.search-btn {
  align-self: center;
  white-space: nowrap;
}

@media (max-width: 720px) {
  .search-card {
    flex-direction: column;
    transform: translateY(30%);
  }

  .search-divider {
    width: 100%;
    height: 1px;
  }

  .search-btn {
    width: 100%;
  }
}
</style>
