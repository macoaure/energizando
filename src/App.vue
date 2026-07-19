<script setup lang="ts">
import { computed, ref } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { initialLead, whatsNumber, type LeadState } from './config'
import { buildWhatsAppLink } from './solar'

const lead = ref<LeadState>({ ...initialLead })
const whatsLink = computed(() => buildWhatsAppLink(whatsNumber, lead.value))

function updateLead(next: LeadState) {
  lead.value = next
}

function scrollToSim() {
  const simulator = document.getElementById('simulador')
  simulator?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  simulator?.querySelector<HTMLElement>('button, input')?.focus({ preventScroll: true })
}

function openWhatsApp() {
  window.open(whatsLink.value, '_blank', 'noopener')
}
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component
      v-if="route.meta.standalone"
      :is="Component"
      :whats-link="whatsLink"
      @update:lead="updateLead"
      @simulate="scrollToSim"
      @submit="openWhatsApp"
    />
    <DefaultLayout v-else :whats-link="whatsLink" @simulate="scrollToSim">
      <component
        :is="Component"
        :whats-link="whatsLink"
        @update:lead="updateLead"
        @simulate="scrollToSim"
        @submit="openWhatsApp"
      />
    </DefaultLayout>
  </RouterView>
</template>
