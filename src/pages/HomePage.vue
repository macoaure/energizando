<script setup lang="ts">
import FaqSection from '../components/FaqSection.vue'
import FinalCta from '../components/FinalCta.vue'
import FinancingOptions from '../components/FinancingOptions.vue'
import HeroSection from '../components/HeroSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import ProjectCases from '../components/ProjectCases.vue'
import TechAuthority from '../components/TechAuthority.vue'
import { processSteps, type LeadState } from '../config'

defineProps<{ whatsLink: string }>()
defineEmits<{ simulate: []; 'update:lead': [LeadState]; submit: [] }>()
</script>

<template>
  <HeroSection :whats-link="whatsLink" @update:lead="$emit('update:lead', $event)" @simulate="$emit('simulate')" @submit="$emit('submit')" />
  <ProcessSection :steps="processSteps" />
  <ProjectCases />
  <FinancingOptions @simulate="$emit('simulate')" />
  <TechAuthority />
  <FaqSection @simulate="$emit('simulate')" />
  <FinalCta :whats-link="whatsLink" />
</template>
