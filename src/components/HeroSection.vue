<script setup lang="ts">
import { heroStats } from '../config'
import SolarSimulator from './SolarSimulator.vue'
import type { LeadState } from '../config'

defineProps<{ whatsLink: string }>()
defineEmits<{ simulate: []; 'update:lead': [LeadState]; submit: [] }>()
</script>

<template>
  <section class="hero grid-bg" id="residencial">
    <div class="sun-arc" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-left">
        <span class="eyebrow">comparativo pratico · Londrina e regiao</span>
        <h1>Compare sua conta de luz com o custo de um sistema solar.</h1>
        <p class="lead">Arraste para o valor da sua conta e veja, na hora, a economia estimada, o tamanho do sistema e uma parcela indicativa. A fatura entra depois para calcular um orcamento com consumo, historico e localizacao reais.</p>
        <div class="hero-cta-row">
          <button class="btn btn-solar" @click="$emit('simulate')">Comparar minha conta</button>
          <a class="btn btn-outline-light" :href="whatsLink" target="_blank" rel="noopener">Orcar com minha fatura</a>
        </div>
        <div class="hero-flow" aria-label="Fluxo do orcamento">
          <span>Conta real</span>
          <b aria-hidden="true">-></b>
          <span>Estimativa inicial</span>
          <b aria-hidden="true">-></b>
          <span>Orcamento tecnico</span>
        </div>
        <div class="data-tiles">
          <div v-for="stat in heroStats" :key="stat.label" class="data-tile">
            <div class="v num">{{ stat.value }}</div>
            <div class="l">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <SolarSimulator @update:lead="$emit('update:lead', $event)" @submit="$emit('submit')" />
    </div>
  </section>
</template>
