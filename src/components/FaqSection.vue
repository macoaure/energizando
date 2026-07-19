<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '../config'

defineEmits<{ simulate: [] }>()
const open = ref<number | null>(null)
</script>

<template>
  <section id="duvidas">
    <div class="container">
      <div class="section-head fade-in visible">
        <span class="eyebrow">antes de decidir</span>
        <h2>As perguntas que todo cliente faz.</h2>
        <p>Respostas diretas, sem prometer o que nao pode ser garantido.</p>
      </div>
      <div class="acc fade-in visible">
        <div v-for="(item, index) in faqs" :key="item.q" class="acc-item" :class="{ open: open === index }">
          <button class="acc-q" @click="open = open === index ? null : index">{{ item.q }}<span class="plus">+</span></button>
          <div class="acc-a" :style="{ maxHeight: open === index ? '260px' : undefined }">
            <div class="acc-a-inner">
              {{ item.a }}<br />
              <button class="btn btn-outline-navy btn-sm" @click="$emit('simulate')">Solicitar orcamento</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
