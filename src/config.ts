export const whatsNumber = '5543984772535'

export type LeadState = {
  bill: number | null
  billLabel: string | null
  category: string | null
  city: string
  uf: string
  propertyStatus: string | null
  roof: string | null
}

export const initialLead: LeadState = {
  bill: null,
  billLabel: null,
  category: null,
  city: '',
  uf: '',
  propertyStatus: null,
  roof: null,
}

export const tickerItems = [
  { text: 'ECONOMIA MEDIA ESTIMADA', strong: 'R$ 780/MES' },
  { text: 'SISTEMAS HOMOLOGADOS', strong: '300+' },
  { text: 'REDUCAO MEDIA DE ATE', strong: '92%' },
  { text: 'DE ENGENHARIA ELETRICA', strong: '15 ANOS' },
  { text: 'ATENDIMENTO EM LONDRINA E REGIAO' },
]

export const heroStats = [
  { value: '300+', label: 'Projetos homologados' },
  { value: '15 anos', label: 'Experiencia eletrica' },
  { value: '92%', label: 'Reducao media estimada' },
]

export const billOptions = [
  { value: 250, label: 'Ate R$ 300' },
  { value: 450, label: 'R$ 300 a R$ 600' },
  { value: 800, label: 'R$ 600 a R$ 1.000' },
  { value: 1500, label: 'R$ 1.000 a R$ 2.000' },
  { value: 2500, label: 'Mais de R$ 2.000' },
]

export const categoryOptions = ['Residencial', 'Comercial', 'Rural', 'Industrial']
export const statusOptions = ['Proprio', 'Alugado', 'Financiado']
export const roofOptions = ['Telhado ceramico', 'Telhado metalico', 'Laje', 'Solo', 'Ainda nao sei']

export const projectCases = [
  { id: 'RES-014', cat: 'residencial', title: 'Residencia em Londrina - PR', before: 'R$ 920', kwp: '8,8 kWp', economy: 'R$ 9.600/ano', struct: 'Telhado ceramico', modules: 'Modulos 550W · Inversor 8kW', homolog: 'Homologado - COPEL', quote: '"A conta caiu praticamente para a taxa minima. Melhor decisao financeira que tomei em anos." - Cliente residencial' },
  { id: 'COM-007', cat: 'comercial', title: 'Comercio no Centro de Londrina - PR', before: 'R$ 4.100', kwp: '32 kWp', economy: 'R$ 38.500/ano', struct: 'Laje', modules: 'Modulos 550W · Inversor 30kW', homolog: 'Homologado - COPEL', quote: '"O retorno ja apareceu no fluxo de caixa do primeiro trimestre." - Proprietario do estabelecimento' },
  { id: 'RUR-021', cat: 'rural', title: 'Propriedade rural em Cambe - PR', before: 'R$ 2.300', kwp: '18,5 kWp', economy: 'R$ 21.200/ano', struct: 'Solo', modules: 'Modulos 550W · Inversor 15kW', homolog: 'Homologado - COPEL', quote: '"Os motores de irrigacao passaram a rodar sem pesar na conta." - Produtor rural' },
  { id: 'RES-033', cat: 'residencial', title: 'Sobrado em Cambe - PR', before: 'R$ 610', kwp: '5,4 kWp', economy: 'R$ 6.100/ano', struct: 'Telhado metalico', modules: 'Modulos 550W · Inversor 5kW', homolog: 'Homologado - COPEL', quote: '"Processo simples, equipe explicou cada etapa antes de instalar." - Cliente residencial' },
  { id: 'COM-012', cat: 'comercial', title: 'Galpao logistico - Londrina/PR', before: 'R$ 6.800', kwp: '54 kWp', economy: 'R$ 61.000/ano', struct: 'Telhado metalico', modules: 'Modulos 555W · Inversor 50kW', homolog: 'Homologado - COPEL', quote: '"Consumo diurno alto tornou o retorno ainda mais rapido." - Gestor de operacoes' },
  { id: 'RUR-009', cat: 'rural', title: 'Granja em Rolandia - PR', before: 'R$ 3.450', kwp: '27 kWp', economy: 'R$ 31.800/ano', struct: 'Telhado metalico', modules: 'Modulos 550W · Inversor 25kW', homolog: 'Homologado - COPEL', quote: '"A refrigeracao deixou de ser o maior custo da granja." - Produtor rural' },
]

export const financingOptions = [
  { title: 'Financiamento bancario', rows: [['Prazo indicativo', '36-84 meses'], ['Entrada', 'Nao exigida*'], ['Taxas', 'Conforme instituicao*']], compare: 'Parcela estimada frequentemente <b>proxima ou menor</b> que a conta atual de energia.' },
  { title: 'Cartao / parcelamento direto', rows: [['Prazo indicativo', 'ate 18x'], ['Entrada', 'Opcional'], ['Taxas', 'Conforme operadora*']], compare: 'Indicado para quem busca <b>quitar em menos tempo</b> e reduzir custo total.' },
  { title: 'Pagamento a vista', rows: [['Prazo indicativo', '-'], ['Entrada', '100%'], ['Vantagem', 'Menor custo total']], compare: '<b>Sem parcelas</b> - retorno do investimento inicia imediatamente com a geracao.' },
]

export const processSteps = [
  { title: 'Analise', text: 'Voce envia a conta de energia e informacoes basicas do imovel.', owner: 'VOCE FORNECE: CONTA + ENDERECO' },
  { title: 'Projeto', text: 'A Energizando - Energia solar calcula capacidade, geracao estimada e equipamentos.', owner: 'RESPONSAVEL: ENGENHARIA' },
  { title: 'Vistoria', text: 'Validacao tecnica do telhado, estrutura e instalacao eletrica.', owner: 'RESPONSAVEL: EQUIPE TECNICA' },
  { title: 'Instalacao e homologacao', text: 'Sistema instalado e processo conduzido junto a distribuidora.', owner: 'RESPONSAVEL: ENERGIZANDO' },
  { title: 'Monitoramento', text: 'Voce acompanha a geracao do sistema e recebe suporte continuo.', owner: 'VOCE RECEBE: ACESSO AO MONITORAMENTO' },
]

export const techItems = [
  'Capacidade correta para o consumo',
  'Compatibilidade dos equipamentos',
  'Protecao eletrica dimensionada',
  'Estrutura de instalacao adequada',
  'Projecao de geracao realista',
  'Homologacao junto a distribuidora',
  'Monitoramento continuo pos-instalacao',
]

export const curveVals = [30, 42, 58, 70, 82, 94, 100, 92, 78, 62, 44, 32]
export const dividerVals = [20, 30, 40, 52, 64, 76, 88, 96, 88, 76, 64, 52, 40, 30, 20]

export const faqs = [
  { q: '"Minha conta realmente pode cair tanto?"', a: 'A reducao depende da geracao projetada em relacao ao seu consumo. A distribuidora sempre cobra uma taxa minima de disponibilidade, entao o objetivo e aproximar a conta desse valor minimo - nao necessariamente zera-la. O comportamento de consumo tambem influencia o resultado real.' },
  { q: '"Funciona quando esta nublado?"', a: 'Sim. Em dias nublados a geracao e reduzida, mas nao interrompida - os modulos continuam captando luz difusa. A projecao anual ja considera a variacao de irradiacao ao longo do ano em Londrina e regiao.' },
  { q: '"E quando falta energia?"', a: 'Sistemas convencionais conectados a rede (on-grid) sao desligados automaticamente durante quedas de energia, por seguranca da rede. Sistemas com baterias podem manter o fornecimento em situacoes especificas - avaliamos essa necessidade caso a caso.' },
  { q: '"Meu telhado suporta?"', a: 'A vistoria tecnica avalia estrutura, inclinacao, orientacao e estado de conservacao do telhado antes da instalacao. Quando necessario, propomos reforcos ou estruturas alternativas, como instalacao em solo.' },
  { q: '"Quanto tempo leva?"', a: 'O processo passa por analise, projeto, vistoria, instalacao e homologacao junto a distribuidora. O prazo varia conforme complexidade do projeto e prazos da concessionaria - detalhamos o cronograma estimado durante a analise tecnica.' },
  { q: '"Os equipamentos tem garantia?"', a: 'Sim. Modulos e inversores possuem garantia de fabrica (tipicamente de 10 a 25 anos, conforme fabricante), e a Energizando - Energia solar oferece garantia propria sobre a instalacao e o servico prestado.' },
  { q: '"Posso financiar?"', a: 'Sim - existem opcoes de financiamento bancario, parcelamento direto e pagamento a vista. A parcela e comparada ao valor que voce ja paga hoje na conta de energia.' },
]
