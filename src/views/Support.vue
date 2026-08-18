<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const sections = [
  {
    id: 'help-center',
    label: 'Help Center',
    title: 'Help Center',
    body: [
      'Most questions about browsing destinations, curated journeys and booking are answered right here. For anything specific to a booking already in progress, our support team is reachable every day of the year.',
    ],
    faqs: [
      { q: 'How do I book a trip?', a: 'Open any destination or journey page, choose "Book Now" and follow the short checkout flow — it takes under two minutes.' },
      { q: 'Can I customise a curated journey?', a: 'Yes. Reach out to support after booking and our travel team will help adjust the itinerary, stay or add-ons.' },
      { q: 'What payment methods are accepted?', a: 'All major cards, UPI and net banking, processed through an encrypted, PCI-compliant gateway.' },
      { q: 'How do I contact a human?', a: 'Email support@voyago.com or call +91 98765 43210 — our team responds 24/7.' }
    ]
  },
  {
    id: 'cancellation-policy',
    label: 'Cancellation Policy',
    title: 'Cancellation Policy',
    body: [
      'We know plans change. Cancellations made 7 or more days before departure receive a full refund, minus any non-refundable third-party fees (such as houseboat or heritage-property deposits).',
      'Cancellations within 3–6 days of departure are refunded at 50%. Cancellations within 48 hours of departure are non-refundable, as properties and guides are held on your behalf. Refunds are processed to the original payment method within 5–7 business days.'
    ]
  },
  {
    id: 'terms-conditions',
    label: 'Terms & Conditions',
    title: 'Terms & Conditions',
    body: [
      'By booking through VOYAGO, you agree to travel dates, traveller counts and pricing as confirmed at checkout. Prices are quoted per person unless stated otherwise and include the inclusions listed on each journey page.',
      'VOYAGO acts as a booking platform working with verified local partners — hotels, guides and transport providers. While every partner is vetted, VOYAGO is not liable for delays or changes caused by weather, local authorities or events outside our control, and will work with you to rebook where possible.'
    ]
  },
  {
    id: 'privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    body: [
      'We collect only the information needed to plan and confirm your trip — name, contact details and payment information — and never sell traveller data to third parties.',
      'Payment details are encrypted end-to-end and handled by our payment processor; VOYAGO does not store raw card numbers. You can request a copy or deletion of your data at any time by emailing support@voyago.com.'
    ]
  },
  {
    id: 'contact',
    label: 'Contact Us',
    title: 'Contact Us',
    body: [
      'Have a question about a destination, a curated journey, or a booking already in progress? Reach us any time — our team responds every day of the year.'
    ],
    contact: [
      { label: 'Email', value: 'support@voyago.com' },
      { label: 'Phone', value: '+91 98765 43210' },
      { label: 'Office', value: 'Lucknow, Uttar Pradesh, India' }
    ]
  }
]

const activeId = ref(sections[0].id)

function setActiveFromHash() {
  const hash = route.hash?.replace('#', '')
  activeId.value = sections.some((s) => s.id === hash) ? hash : sections[0].id
}

onMounted(setActiveFromHash)
watch(() => route.hash, setActiveFromHash)
</script>

<template>
  <div class="page">
    <section class="support-header">
      <div class="container">
        <span class="eyebrow eyebrow-light">Support</span>
        <h1 class="support-title">We're here to help</h1>
        <p class="support-sub">Answers on booking, cancellations and how VOYAGO handles your information.</p>
      </div>
    </section>

    <section class="section">
      <div class="container support-layout">
        <nav class="support-nav">
          <RouterLink
            v-for="s in sections"
            :key="s.id"
            :to="`/support#${s.id}`"
            class="support-nav-link"
            :class="{ active: activeId === s.id }"
            @click="activeId = s.id"
          >
            {{ s.label }}
          </RouterLink>
        </nav>

        <div class="support-content">
          <div v-for="s in sections" v-show="activeId === s.id" :key="s.id" class="support-panel">
            <h2 class="block-title">{{ s.title }}</h2>
            <p v-for="(p, i) in s.body" :key="i" class="support-text">{{ p }}</p>

            <div v-if="s.faqs" class="faq-list">
              <details v-for="f in s.faqs" :key="f.q" class="faq-item">
                <summary>{{ f.q }}</summary>
                <p>{{ f.a }}</p>
              </details>
            </div>

            <ul v-if="s.contact" class="contact-info-list">
              <li v-for="c in s.contact" :key="c.label">
                <span>{{ c.label }}</span>
                <strong>{{ c.value }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.support-header {
  background: var(--navy-900);
  padding: 140px 0 var(--space-7);
}

.eyebrow-light {
  color: var(--amber-500);
}

.support-title {
  color: var(--white);
  font-size: clamp(30px, 4vw, 44px);
  margin-bottom: var(--space-2);
}

.support-sub {
  color: rgba(255, 255, 255, 0.72);
  max-width: 480px;
  margin: 0;
}

.support-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: var(--space-7);
  align-items: start;
}

.support-nav {
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 2px solid var(--line);
}

.support-nav-link {
  padding: 10px var(--space-4);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-muted);
  border-left: 2px solid transparent;
  margin-left: -2px;
  transition: color 0.18s ease, border-color 0.18s ease;
}

.support-nav-link:hover {
  color: var(--navy-900);
}

.support-nav-link.active {
  color: var(--navy-900);
  border-left-color: var(--amber-500);
}

.block-title {
  font-size: 24px;
  margin-bottom: var(--space-4);
}

.support-text {
  max-width: 62ch;
}

.faq-list {
  margin-top: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
}

.faq-item summary {
  cursor: pointer;
  font-weight: 700;
  color: var(--navy-900);
  font-size: 15px;
}

.faq-item p {
  margin: var(--space-3) 0 0;
}

.contact-info-list {
  margin-top: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 420px;
}

.contact-info-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
}

.contact-info-list li span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.contact-info-list li strong {
  color: var(--navy-900);
  font-size: 14.5px;
}

@media (max-width: 780px) {
  .support-layout {
    grid-template-columns: 1fr;
  }

  .support-nav {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    border-bottom: 1px solid var(--line);
    padding-bottom: var(--space-3);
  }

  .support-nav-link {
    border-left: none;
    border-bottom: 2px solid transparent;
    margin-left: 0;
  }

  .support-nav-link.active {
    border-bottom-color: var(--amber-500);
  }
}
</style>
