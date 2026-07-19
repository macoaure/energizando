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
  <a class="whatsapp-float" :href="whatsLink" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
    <span aria-hidden="true">
      <svg viewBox="0 0 32 32" focusable="false">
        <path d="M16.02 3.2A12.67 12.67 0 0 0 5.08 22.28L3.4 28.8l6.67-1.6A12.67 12.67 0 1 0 16.02 3.2Zm0 2.53a10.13 10.13 0 0 1 8.58 15.52 10.05 10.05 0 0 1-11.78 3.78l-.46-.18-3.96.95 1-3.84-.24-.5A10.13 10.13 0 0 1 16.02 5.73Zm-4.2 5.55c-.24 0-.62.09-.94.44-.32.35-1.23 1.2-1.23 2.93s1.26 3.4 1.43 3.64c.18.23 2.43 3.89 6 5.3 2.96 1.17 3.57.94 4.2.88.65-.06 2.08-.85 2.38-1.67.3-.82.3-1.52.2-1.67-.08-.15-.32-.23-.67-.41-.35-.18-2.08-1.03-2.4-1.14-.32-.12-.56-.18-.79.17-.23.35-.9 1.14-1.1 1.38-.2.23-.4.26-.76.08-.35-.17-1.49-.55-2.84-1.75-1.05-.94-1.76-2.1-1.97-2.45-.2-.35-.02-.54.16-.72.16-.16.35-.41.53-.62.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.62-.09-.17-.79-1.9-1.08-2.6-.28-.67-.57-.58-.79-.59h-.67Z" />
      </svg>
    </span>
    <b>Chamar no WhatsApp</b>
  </a>
  <slot />
  <PageFooter />
</template>
