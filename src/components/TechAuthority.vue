<script setup lang="ts">
import { curveVals, techItems } from '../config'
</script>

<template>
  <section class="section-navy">
    <div class="container tech-grid">
      <div class="fade-in visible">
        <span class="eyebrow">autoridade tecnica</span>
        <h2 class="tech-title">Seu projeto nao comeca no telhado. Comeca no dimensionamento.</h2>
        <p class="tech-copy">Cada detalhe e calculado antes de qualquer instalacao - para garantir seguranca, desempenho e aprovacao junto a distribuidora.</p>
        <div class="tech-list">
          <div v-for="item in techItems" :key="item" class="tech-item"><span class="ico"></span>{{ item }}</div>
        </div>
      </div>
      <div class="tech-visual fade-in visible">
        <div class="tech-readout"><span>SISTEMA - LONDRINA/PR</span><span><b>8,4 kWp</b> · RESIDENCIAL</span></div>
        <div class="curve">
          <div v-for="(value, index) in curveVals" :key="index" class="bar" :style="{ height: `${value}%` }"></div>
        </div>
        <div class="cap">CURVA DE GERACAO ESTIMADA - MEDIA MENSAL (kWh)</div>
      </div>
    </div>
  </section>
</template>
