<script setup lang="ts">
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
  <slot />
  <PageFooter />
</template>
