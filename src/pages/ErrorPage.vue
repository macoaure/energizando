<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{ whatsLink: string }>()

const route = useRoute()
const is404 = route.name === 'not-found'
</script>

<template>
  <section class="error-page section-navy">
    <div class="container error-shell">
      <span class="eyebrow">{{ is404 ? 'pagina nao encontrada' : 'erro' }}</span>
      <h1>{{ is404 ? 'Este caminho nao existe.' : 'Nao conseguimos carregar esta pagina.' }}</h1>
      <p>
        {{ is404
          ? 'O link pode ter mudado ou sido digitado incorretamente. Voce pode voltar para o comparativo ou chamar a equipe pelo WhatsApp.'
          : 'Tente voltar para a pagina inicial. Se o problema continuar, fale com a Energizando pelo WhatsApp.' }}
      </p>
      <div class="error-actions">
        <RouterLink class="btn btn-solar" to="/">Voltar para o inicio</RouterLink>
        <a class="btn btn-outline-light" :href="whatsLink" target="_blank" rel="noopener">Chamar no WhatsApp</a>
      </div>
    </div>
  </section>
</template>
