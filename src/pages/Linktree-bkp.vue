<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ whatsLink: string }>()

const logoSrc = `${import.meta.env.BASE_URL}energizando.svg`
const phone = '+5543984772535'
const mapsUrl = 'https://www.google.com/maps/place/Energizando+Energia+Solar/@-23.3337044,-51.1503105,17z'
const instagramUrl = 'https://www.instagram.com/energizando_energia_solar/'

const links = [
  { label: 'Comparar minha conta', to: { name: 'home', hash: '#residencial' } },
  { label: 'Projetos instalados', to: { name: 'home', hash: '#projetos' } },
  { label: 'Financiamento solar', to: { name: 'home', hash: '#rural' } },
  { label: 'Duvidas frequentes', to: { name: 'home', hash: '#duvidas' } },
]
</script>

<template>
  <main class="linktree-page">
    <section class="linktree-card">
      <img class="linktree-logo" :src="logoSrc" alt="" />
      <h1>Energizando - Energia solar</h1>
      <p>Solucoes em energia solar fotovoltaica para residencias, empresas e propriedades rurais em Londrina e regiao.</p>

      <div class="linktree-meta">
        <span>Londrina / PR</span>
        <span>Av. Duque de Caxias, 770 - sala 02</span>
        <span>5.0 no Google · 37 avaliacoes</span>
      </div>

      <a class="linktree-main" :href="whatsLink" target="_blank" rel="noopener">
        Orcar pela minha conta de luz
      </a>

      <div class="linktree-quick">
        <a :href="`tel:${phone}`">Ligar</a>
        <a :href="instagramUrl" target="_blank" rel="noopener">Instagram</a>
        <a :href="mapsUrl" target="_blank" rel="noopener">Como chegar</a>
      </div>

      <div class="linktree-links">
        <RouterLink v-for="link in links" :key="link.label" class="linktree-link" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="linktree-tags">
        <span>Orcamento sem compromisso</span>
        <span>Estudo de viabilidade</span>
        <span>Materiais de qualidade</span>
        <span>Equipe experiente</span>
      </div>

      <div class="linktree-note">A fatura ajuda a calcular consumo, historico, localizacao e tamanho do sistema.</div>
    </section>
  </main>
</template>
