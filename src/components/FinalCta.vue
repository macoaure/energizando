<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ whatsLink: string }>()
const fileName = ref('')
const inputId = 'final-energy-bill'

function updateFile(event: Event) {
  const input = event.target as HTMLInputElement
  fileName.value = input.files?.[0]?.name || ''
}
</script>

<template>
  <section class="section-navy" id="analise">
    <div class="container final-cta">
      <span class="eyebrow">ultima etapa</span>
      <h2 class="final-title">Pronto para transformar sua conta em um orcamento?</h2>
      <p class="final-copy">A fatura mostra consumo, historico e localizacao do imovel. Com isso, a equipe monta uma proposta inicial com capacidade indicada, economia estimada e opcoes de pagamento.</p>
      <label class="upload-box" :for="inputId">
        <span class="up-label">{{ fileName ? 'CONTA ANEXADA' : 'USAR CONTA NO ORCAMENTO' }}</span>
        <span class="up-file">{{ fileName || 'PDF ou foto da fatura mais recente' }}</span>
        <span class="up-action">{{ fileName ? 'Trocar arquivo' : 'Escolher arquivo' }}</span>
        <input :id="inputId" type="file" accept="image/*,application/pdf" class="final-file" @change="updateFile" />
      </label>
      <div class="final-actions">
        <a class="btn btn-solar" :href="whatsLink" target="_blank" rel="noopener">Receber orcamento pela conta</a>
        <a class="btn btn-whats" :href="whatsLink" target="_blank" rel="noopener">Mandar fatura pelo WhatsApp</a>
      </div>
    </div>
  </section>
</template>
