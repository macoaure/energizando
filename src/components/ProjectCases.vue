<script setup lang="ts">
import { computed, ref } from 'vue'
import { projectCases } from '../config'

const filters = [
  { value: 'todos', label: 'Todos' },
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'rural', label: 'Rural' },
]
const active = ref('todos')
const cases = computed(() => active.value === 'todos' ? projectCases : projectCases.filter((item) => item.cat === active.value))
</script>

<template>
  <section id="projetos">
    <div class="container">
      <div class="section-head fade-in visible">
        <span class="eyebrow">casos reais</span>
        <h2>Sistemas instalados em propriedades como a sua.</h2>
        <p>Projetos residenciais, comerciais e rurais executados pela Energizando - Energia solar em Londrina e regiao - do dimensionamento ate a homologacao.</p>
      </div>
      <div class="filter-row fade-in visible">
        <button v-for="filter in filters" :key="filter.value" class="filter-btn" :class="{ active: active === filter.value }" @click="active = filter.value">
          {{ filter.label }}
        </button>
      </div>
      <div class="cases-grid">
        <div v-for="item in cases" :key="item.id" class="case-card">
          <div class="case-photo"><span class="idlabel">CASO {{ item.id }}</span><span class="case-tag">{{ item.cat }}</span></div>
          <div class="case-thumb"></div>
          <div class="case-body">
            <h4>{{ item.title }}</h4>
            <div class="case-row"><span class="k">Conta media anterior</span><span class="v">{{ item.before }}</span></div>
            <div class="case-row"><span class="k">Sistema instalado</span><span class="v">{{ item.kwp }}</span></div>
            <div class="case-row"><span class="k">Estrutura</span><span class="v">{{ item.struct }}</span></div>
            <div class="case-row"><span class="k">Equipamentos</span><span class="v">{{ item.modules }}</span></div>
            <div class="case-row"><span class="k">Homologacao</span><span class="v">{{ item.homolog }}</span></div>
            <div class="case-result"><div class="v">{{ item.economy }}</div><div class="l">ECONOMIA ANUAL ESTIMADA</div></div>
            <div class="case-quote">{{ item.quote }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
