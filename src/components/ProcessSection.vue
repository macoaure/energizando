<script setup lang="ts">
import { processSteps } from '../config'

defineProps<{ steps?: typeof processSteps }>()
</script>

<template>
  <section>
    <div class="container">
      <div class="section-head fade-in visible">
        <span class="eyebrow">como funciona</span>
        <h2>Do envio da conta ate o monitoramento da geracao.</h2>
        <p>Um processo tecnico, conduzido pela equipe da Energizando - Energia solar do inicio ao fim.</p>
      </div>
      <div class="process-track fade-in visible">
        <div v-for="(item, index) in (steps || processSteps)" :key="item.title" class="process-step">
          <span class="step-no">{{ String(index + 1).padStart(2, '0') }}/{{ String((steps || processSteps).length).padStart(2, '0') }}</span>
          <div class="cellrow">
            <div v-for="cell in (steps || processSteps).length" :key="cell" class="cell small" :class="{ lit: cell <= index + 1 }"></div>
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
          <div class="who">{{ item.owner }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
