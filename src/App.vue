<script setup lang="ts">
import { computed, ref } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { initialLead, whatsNumber, type LeadState } from './config'
import { buildWhatsAppLink } from './solar'

const lead = ref<LeadState>({ ...initialLead })
const genericWhatsLink = computed(() => buildWhatsAppLink(whatsNumber, lead.value, 'generic'))
const simulatorWhatsLink = computed(() => buildWhatsAppLink(whatsNumber, lead.value, 'simulator'))
const billWhatsLink = computed(() => buildWhatsAppLink(whatsNumber, lead.value, 'bill'))

function updateLead(next: LeadState) {
  lead.value = next
}

function scrollToSim() {
  const simulator = document.getElementById('simulador')
  simulator?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  simulator?.querySelector<HTMLElement>('button, input')?.focus({ preventScroll: true })
}

function openWhatsApp() {
  window.open(simulatorWhatsLink.value, '_blank', 'noopener')
}
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component
      v-if="route.meta.standalone"
      :is="Component"
      :whats-link="genericWhatsLink"
      @update:lead="updateLead"
      @simulate="scrollToSim"
      @submit="openWhatsApp"
    />
    <DefaultLayout v-else :whats-link="billWhatsLink" :generic-whats-link="genericWhatsLink" @simulate="scrollToSim">
      <component
        :is="Component"
        :whats-link="billWhatsLink"
        @update:lead="updateLead"
        @simulate="scrollToSim"
        @submit="openWhatsApp"
      />
    </DefaultLayout>
  </RouterView>
</template>
