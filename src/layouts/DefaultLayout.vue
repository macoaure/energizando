<script setup lang="ts">
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PageFooter from '../components/PageFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'

defineProps<{ whatsLink: string }>()
defineEmits<{ simulate: [] }>()
</script>

<template>
  <SiteHeader :whats-link="whatsLink" @simulate="$emit('simulate')" />
  <div class="mobile-bar">
    <button class="btn btn-solar" @click="$emit('simulate')">Comparar minha conta</button>
  </div>
  <a class="whatsapp-float" :href="whatsLink" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
    <span aria-hidden="true">
      <FontAwesomeIcon :icon="faWhatsapp" />
    </span>
    <b>Chamar no WhatsApp</b>
  </a>
  <slot />
  <PageFooter />
</template>
