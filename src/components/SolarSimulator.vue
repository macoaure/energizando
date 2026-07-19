<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import { categoryOptions, initialLead, roofOptions, statusOptions, type LeadState } from '../config'
import { calcEstimate, money } from '../solar'

const emit = defineEmits<{ 'update:lead': [LeadState]; submit: [] }>()

const card = useTemplateRef<HTMLElement>('card')
const step = ref(1)
const bill = ref(850)
const lead = ref<LeadState>({ ...initialLead })
const totalSteps = 7
const estimate = computed(() => calcEstimate({ ...lead.value, bill: bill.value, billLabel: money(bill.value) }))

function patch(next: Partial<LeadState>) {
  lead.value = { ...lead.value, ...next }
  emit('update:lead', lead.value)
}

function go(next: number) {
  step.value = Math.min(Math.max(next, 1), totalSteps)
}

function keepBill() {
  patch({ bill: bill.value, billLabel: money(bill.value) })
}

function pickLocation() {
  patch({ city: lead.value.city.trim() || 'Londrina', uf: lead.value.uf.trim() || 'PR' })
  go(4)
}

function attachNow() {
  document.getElementById('billFile')?.click()
}

function scrollIntoView() {
  card.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

defineExpose({ scrollIntoView })
</script>

<template>
  <div id="simulador" ref="card" class="sim-card" tabindex="-1">
    <div class="sim-head">
      <span class="sim-badge">SIMULADOR</span>
      <span class="sim-progress-label">{{ step === 1 ? 'COMPARATIVO' : `ETAPA ${Math.min(step, totalSteps)}/${totalSteps}` }}</span>
    </div>

    <div v-if="step > 1" class="sim-progress">
      <div class="cellrow">
        <div v-for="i in totalSteps" :key="i" class="cell" :class="{ lit: i <= step }"></div>
      </div>
    </div>

    <template v-if="step === 1">
      <div class="sim-step-title">Arraste para o valor da sua conta.</div>
      <div class="sim-step-sub">O resultado muda na hora, sem preencher formulario.</div>
      <div class="bill-slider">
        <div class="bill-slider-top">
          <span>Conta atual</span>
          <strong class="num">{{ money(bill) }}/mes</strong>
        </div>
        <input v-model.number="bill" type="range" min="150" max="3000" step="10" @input="keepBill" />
      </div>
      <div class="slider-compare">
        <div class="slider-result highlight">
          <span class="l">Economia estimada</span>
          <strong class="v num">Ate {{ money(estimate.monthlySavings) }}/mes</strong>
        </div>
        <div class="slider-result">
          <span class="l">Parcela indicativa</span>
          <strong class="v num">{{ money(estimate.installment) }}/mes</strong>
        </div>
        <div class="slider-result">
          <span class="l">Sistema aproximado</span>
          <strong class="v num">{{ estimate.kwp.toFixed(1) }} kWp</strong>
        </div>
      </div>
      <button class="btn btn-solar btn-block sim-result-button" @click="keepBill(); go(7)">Usar minha conta no orcamento</button>
      <button class="btn btn-outline-navy btn-block sim-capture-button" @click="keepBill(); go(2)">Refinar detalhes do imovel</button>
      <p class="sim-disclaimer">A fatura ajuda a validar consumo, historico e localizacao do imovel.</p>
    </template>

    <template v-else-if="step === 2">
      <div class="sim-step-title">Qual e o tipo do imovel?</div>
      <div class="sim-step-sub">Isso ajusta as proximas perguntas e o resultado da sua simulacao.</div>
      <div class="opt-grid two-col">
        <button v-for="category in categoryOptions" :key="category" class="opt-btn" :class="{ selected: lead.category === category }" @click="patch({ category }); go(3)">
          {{ category }}
        </button>
      </div>
      <div class="sim-nav"><button class="sim-back" @click="go(step - 1)">&larr; VOLTAR</button></div>
    </template>

    <template v-else-if="step === 3">
      <div class="sim-step-title">Onde fica o imovel?</div>
      <div class="sim-step-sub">Usamos a localizacao para qualificar a area de atendimento e refinar a estimativa.</div>
      <div class="field-row">
        <input v-model="lead.city" class="field" placeholder="Cidade" />
        <input v-model="lead.uf" class="field" placeholder="UF" maxlength="2" />
      </div>
      <div class="sim-nav">
        <button class="sim-back" @click="go(step - 1)">&larr; VOLTAR</button>
        <button class="btn btn-solar btn-sm" @click="pickLocation">Continuar</button>
      </div>
    </template>

    <template v-else-if="step === 4">
      <div class="sim-step-title">O imovel e proprio, alugado ou financiado?</div>
      <div class="sim-step-sub">Isso qualifica a viabilidade da instalacao.</div>
      <div class="opt-grid two-col">
        <button v-for="status in statusOptions" :key="status" class="opt-btn" :class="{ selected: lead.propertyStatus === status }" @click="patch({ propertyStatus: status }); go(5)">
          {{ status }}
        </button>
      </div>
      <div class="sim-nav"><button class="sim-back" @click="go(step - 1)">&larr; VOLTAR</button></div>
    </template>

    <template v-else-if="step === 5">
      <div class="sim-step-title">Qual a estrutura de instalacao disponivel?</div>
      <div class="sim-step-sub">Se nao souber, sem problema - a equipe tecnica confirma na vistoria.</div>
      <div class="opt-grid">
        <button v-for="roof in roofOptions" :key="roof" class="opt-btn" :class="{ selected: lead.roof === roof }" @click="patch({ roof }); go(6)">
          {{ roof }}
        </button>
      </div>
      <div class="sim-nav"><button class="sim-back" @click="go(step - 1)">&larr; VOLTAR</button></div>
    </template>

    <template v-else-if="step === 6">
      <div class="sim-step-title">Seu potencial inicial de economia</div>
      <div class="result-hero-value">Ate {{ money(estimate.monthlySavings) }}</div>
      <div class="result-hero-label">POR MES</div>
      <div class="result-mini-grid">
        <div class="mini-stat"><div class="v">{{ estimate.kwp.toFixed(1) }} kWp</div><div class="l">Capacidade estimada</div></div>
        <div class="mini-stat"><div class="v">{{ Math.round(estimate.monthlyGenKWh).toLocaleString('pt-BR') }} kWh</div><div class="l">Geracao mensal estimada</div></div>
        <div class="mini-stat"><div class="v">{{ money(estimate.annualSavings) }}</div><div class="l">Economia anual estimada</div></div>
        <div class="mini-stat"><div class="v">{{ Math.round(estimate.area) }} m2</div><div class="l">Area indicativa de instalacao</div></div>
      </div>
      <div class="mini-stat sim-installment">
        <div class="v">{{ money(estimate.installment) }}/mes</div>
        <div class="l">Parcela ilustrativa em financiamento (ate 60x)</div>
      </div>
      <p class="sim-disclaimer text-left">Este e um resultado preliminar. Envie sua conta para receber um orcamento dimensionado.</p>
      <button class="btn btn-solar btn-block sim-result-button" @click="go(7)">Receber orcamento com minha conta</button>
      <div class="sim-nav"><button class="sim-back" @click="go(step - 1)">&larr; VOLTAR</button></div>
    </template>

    <template v-else>
      <div class="sim-step-title">Envie sua conta para receber um orcamento dimensionado.</div>
      <div class="sim-step-sub">Preencha seus dados de contato - a equipe tecnica valida sua estimativa e retorna com o projeto indicado.</div>
      <div class="capture-fields">
        <input class="field" placeholder="Nome" />
        <input class="field" placeholder="WhatsApp (com DDD)" />
        <input class="field" placeholder="E-mail (opcional)" />
        <input id="billFile" class="field" type="file" accept="image/*,application/pdf" />
      </div>
      <button class="btn btn-solar btn-block sim-result-button" @click="$emit('submit')">Solicitar orcamento pelo WhatsApp</button>
      <button class="btn btn-outline-navy btn-block sim-capture-button" @click="attachNow">Anexar conta agora</button>
      <div class="sim-nav"><button class="sim-back" @click="go(6)">&larr; VOLTAR AO RESULTADO</button></div>
    </template>
  </div>
</template>
