<script setup lang="ts">
import { computed, ref } from 'vue'
import { money } from '../solar'

const bill = ref(850)
const years = ref(10)
const yearOptions = [5, 10, 20]

const results = computed(() => {
  let atual = 0
  let current = bill.value
  for (let i = 0; i < years.value * 12; i++) {
    atual += current
    current *= 1.008
  }

  const residual = atual * 0.1
  const paybackMonths = Math.max(18, Math.round((bill.value * 4200 / 120 * 0.95) / 550))
  return {
    atual,
    residual,
    economia: atual - residual,
    retorno: `~${Math.round(paybackMonths / 12)} anos`,
  }
})
</script>

<template>
  <section class="section-terminal" id="empresas">
    <div class="container">
      <div class="section-head fade-in visible">
        <span class="eyebrow">comparativo financeiro</span>
        <h2>O custo da conta continua existindo. A decisao e para onde ele vai.</h2>
        <p>Ajuste os valores abaixo e compare, em anos, o que acontece se voce continuar pagando a distribuidora ou passar a financiar a sua propria geracao.</p>
      </div>
      <div class="fin-panel grid-bg fade-in visible">
        <div class="fin-controls">
          <div class="fin-control">
            <label for="finBill">Conta media mensal atual</label>
            <input id="finBill" v-model.number="bill" type="range" min="150" max="3000" step="10" />
            <div class="fin-value num"><span>{{ money(bill) }}</span> / mes</div>
          </div>
          <div class="fin-control">
            <label>Horizonte de analise</label>
            <div class="years-toggle">
              <button v-for="option in yearOptions" :key="option" :class="{ active: years === option }" @click="years = option">{{ option }} anos</button>
            </div>
          </div>
        </div>
        <div class="fin-results">
          <div class="fin-stat"><div class="l">Despesa atual acumulada</div><div class="v num">{{ money(results.atual) }}</div></div>
          <div class="fin-stat"><div class="l">Custo residual estimado</div><div class="v num">{{ money(results.residual) }}</div></div>
          <div class="fin-stat highlight"><div class="l">Economia acumulada estimada</div><div class="v num">{{ money(results.economia) }}</div></div>
          <div class="fin-stat"><div class="l">Retorno estimado do investimento</div><div class="v num">{{ results.retorno }}</div></div>
        </div>
        <p class="fin-note">Valores ilustrativos, calculados a partir da conta informada, reajuste medio anual de tarifa e custo indicativo de sistema fotovoltaico. O resultado final depende de consumo, tarifa vigente, localizacao, caracteristicas do projeto e condicoes de pagamento - validado por um tecnico da Energizando - Energia solar.</p>
      </div>
    </div>
  </section>
</template>
