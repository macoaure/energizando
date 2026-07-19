<script setup lang="ts">
import { financingOptions } from '../config'

defineEmits<{ simulate: [] }>()
</script>

<template>
  <section id="rural" class="section-alt">
    <div class="container">
      <div class="section-head fade-in visible">
        <span class="eyebrow">viabilidade de pagamento</span>
        <h2>E possivel instalar sem pagar todo o projeto a vista?</h2>
        <p>Sim. Veja as formas de pagamento disponiveis e compare a parcela estimada com o valor que voce ja paga hoje na conta de energia.</p>
      </div>
      <div class="fin-cards fade-in visible">
        <div v-for="option in financingOptions" :key="option.title" class="financing-card">
          <h4>{{ option.title }}</h4>
          <div v-for="[key, value] in option.rows" :key="key" class="row"><span class="k">{{ key }}</span><span class="v">{{ value }}</span></div>
          <div class="compare-line" v-html="option.compare"></div>
        </div>
      </div>
      <p class="fin-note financing-note">*Valores ilustrativos. Condicoes reais de financiamento sao apresentadas na simulacao personalizada, conforme instituicao parceira e perfil do projeto.</p>
      <div class="financing-action">
        <button class="btn btn-solar" @click="$emit('simulate')">Pedir orcamento com financiamento</button>
      </div>
    </div>
  </section>
</template>
