<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ whatsLink: string }>()

const logoSrc = `${import.meta.env.BASE_URL}energizando.svg`
const instagramUrl = 'https://www.instagram.com/energizando_energia_solar/'
const mapsUrl = 'https://www.google.com/maps/place/Energizando+Energia+Solar/@-23.3337044,-51.1503105,17z'
const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.5064270726693!2d-51.150336599999996!3d-23.333660299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43122eb40001%3A0x9ae892cb118ba70e!2sAv.%20Duque%20de%20Caxias%2C%20770%20-%20Sl%2002%20-%20Igap%C3%B3%2C%20Londrina%20-%20PR%2C%2086042-340!5e0!3m2!1spt-BR!2sbr!4v1784403469943!5m2!1spt-BR!2sbr'

const links = [
  { label: 'Comparar minha conta', description: 'Veja economia, parcela e sistema aproximado', to: { name: 'home', hash: '#residencial' } },
  { label: 'Projetos instalados', description: 'Residencial, comercial e rural', to: { name: 'home', hash: '#projetos' } },
  { label: 'Financiamento solar', description: 'Compare parcela com a conta atual', to: { name: 'home', hash: '#rural' } },
  { label: 'Duvidas frequentes', description: 'Garantia, prazo, telhado e geracao', to: { name: 'home', hash: '#duvidas' } },
]

const services = ['Orcamento sem compromisso', 'Estudo de viabilidade', 'Energia solar fotovoltaica', 'Londrina e regiao']
</script>

<template>
  <main class="linktree-page min-h-svh bg-[#FBF6EC] px-3 py-4 text-[#F7F1E4] sm:px-4 sm:py-6">
    <section class="mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-[460px] items-center sm:min-h-[calc(100svh-3rem)]">
      <div class="linktree-motion-card w-full rounded-[14px] border border-[#0C1B2E24] bg-[#0C1B2E] p-4 sm:p-5">
        <header class="linktree-motion-item flex items-center gap-4 max-[380px]:flex-col max-[380px]:items-start" style="--i: 0">
          <div class="grid h-20 w-20 shrink-0 place-items-center rounded-[10px] p-1 sm:h-24 sm:w-24 sm:p-2">
            <img
              class="h-full w-full object-contain"
              :src="logoSrc"
              alt="Energizando - Energia solar"
            />
          </div>

          <div class="min-w-0">
            <h1 class="text-[1.65rem] font-black leading-tight !text-white sm:text-2xl">Energizando</h1>
            <p class="mt-1 text-sm font-bold text-[#FFB94D]">Energia solar</p>
          </div>
        </header>

        <p class="linktree-motion-item mt-5 text-sm leading-6 text-[#B7C0CC]" style="--i: 1">
          Solucoes em energia solar para residencias, empresas e propriedades rurais em Londrina e regiao.
        </p>

        <a
          :href="whatsLink"
          class="linktree-motion-item linktree-motion-cta mt-4 flex min-h-16 items-center justify-between gap-3 rounded-[6px] bg-gradient-to-br from-[#FFB94D] to-[#E8871E] p-4 font-black text-[#221200]"
          style="--i: 2"
          target="_blank"
          rel="noopener"
        >
          <span>
            <span class="block text-lg">Orcar pela minha conta de luz</span>
            <span class="mt-1 block text-xs font-bold">Consumo, historico e localizacao deixam o orcamento mais preciso.</span>
          </span>
          <span class="shrink-0 text-2xl" aria-hidden="true">→</span>
        </a>

        <div class="linktree-motion-item mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3" style="--i: 3">
          <a class="min-h-11 rounded-[6px] border border-[#FFF7E824] px-3 py-2 text-center text-xs font-black" :href="whatsLink" target="_blank" rel="noopener">Chamar no WhatsApp</a>
          <a class="min-h-11 rounded-[6px] border border-[#FFF7E824] px-3 py-2 text-center text-xs font-black" :href="instagramUrl" target="_blank" rel="noopener">Ver projetos</a>
          <a class="min-h-11 rounded-[6px] border border-[#FFF7E824] px-3 py-2 text-center text-xs font-black" :href="mapsUrl" target="_blank" rel="noopener">Como chegar</a>
        </div>

        <nav class="mt-3 grid gap-2" aria-label="Links principais">
          <RouterLink
            v-for="link in links"
            :key="link.label"
            class="linktree-motion-item rounded-[6px] border border-[#FFF7E814] bg-[#1D3550] p-3 transition hover:-translate-y-0.5 hover:border-[#FFB94D]"
            :style="{ '--i': links.indexOf(link) + 4 }"
            :to="link.to"
          >
            <span class="block text-sm font-black">{{ link.label }}</span>
            <span class="mt-1 block text-xs text-[#B7C0CC]">{{ link.description }}</span>
          </RouterLink>
        </nav>

        <div class="linktree-motion-item mt-4 flex flex-wrap gap-2" style="--i: 8">
          <span
            v-for="service in services"
            :key="service"
            class="rounded-full border border-[#FFF7E814] px-3 py-1.5 text-xs font-bold text-[#D9CFBE]"
          >
            {{ service }}
          </span>
        </div>

        <iframe
          class="linktree-motion-item mt-4 h-36 w-full rounded-[10px] border-0 sm:h-44"
          style="--i: 9"
          :src="mapEmbedUrl"
          allowfullscreen
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          title="Mapa da Energizando - Energia solar"
        ></iframe>
      </div>
    </section>
  </main>
</template>
