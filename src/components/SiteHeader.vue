<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { tickerItems } from '../config'

defineProps<{ whatsLink: string }>()
defineEmits<{ simulate: [] }>()

const logoSrc = `${import.meta.env.BASE_URL}energizando.svg`
</script>

<template>
  <header class="site-header">
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <template v-for="copy in 2" :key="copy">
          <span v-for="item in tickerItems" :key="`${copy}-${item.text}`">
            <b v-if="item.strong">{{ item.strong }}</b>
            {{ item.text }}
          </span>
        </template>
      </div>
    </div>
    <div class="container header-inner">
      <div class="logo"><img class="logo-mark" :src="logoSrc" alt="" />Energizando - Energia solar</div>
      <nav class="primary-nav">
        <RouterLink :to="{ name: 'home', hash: '#residencial' }">Residencial</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#empresas' }">Empresas</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#rural' }">Rural</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#projetos' }">Projetos</RouterLink>
      </nav>
      <div class="header-actions">
        <a class="btn btn-whats btn-sm hide-mobile" :href="whatsLink" target="_blank" rel="noopener">Orcar pela conta</a>
        <button class="btn btn-solar btn-sm" @click="$emit('simulate')">Comparar conta</button>
      </div>
    </div>
  </header>
</template>
