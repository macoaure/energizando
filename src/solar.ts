import type { LeadState } from './config'

export type Estimate = {
  kwp: number
  monthlyGenKWh: number
  monthlySavings: number
  annualSavings: number
  area: number
  systemCost: number
  installment: number
}

export function money(value: number) {
  return `R$ ${Math.round(value).toLocaleString('pt-BR')}`
}

export function calcEstimate(lead: LeadState): Estimate {
  const bill = lead.bill || 800
  const monthlyConsumptionKWh = bill / 0.95
  const kwp = Math.max(1.6, monthlyConsumptionKWh / 120)
  const monthlySavings = bill * 0.9
  const annualSavings = monthlySavings * 12
  const systemCost = kwp * 4200

  return {
    kwp,
    monthlyGenKWh: kwp * 120,
    monthlySavings,
    annualSavings,
    area: kwp * 6.5,
    systemCost,
    installment: (systemCost / 60) * 1.15,
  }
}

export function buildWhatsAppLink(number: string, lead: LeadState, route = 'geral') {
  const estimate = calcEstimate(lead)
  const category = (lead.category || 'Residencial').toLowerCase()
  const city = lead.city || 'Londrina'
  const bill = lead.billLabel || 'nao informada'
  const savings = Math.round(estimate.monthlySavings)

  let msg = `Ola, fiz a simulacao no site da Energizando - Energia solar. Minha conta media e de ${bill}, o imovel e ${category} e fica em ${city}. A estimativa indicou potencial de economia de ate R$ ${savings} por mes. Gostaria de receber um orcamento dimensionado com a minha conta de energia.`

  if (route === 'financing') msg = `Ola, fiz a simulacao no site da Energizando - Energia solar e gostaria de um orcamento com opcoes de financiamento. Conta media: ${bill}, imovel em ${city}.`
  if (route === 'comercial') msg = `Ola, sou cliente comercial e fiz a simulacao no site da Energizando - Energia solar. Conta media de ${bill}, gostaria de um orcamento para avaliar retorno e previsibilidade de custo.`
  if (route === 'rural') msg = `Ola, tenho uma propriedade rural e fiz a simulacao no site da Energizando - Energia solar. Conta media de ${bill}, gostaria de um orcamento para avaliar viabilidade.`

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
}
