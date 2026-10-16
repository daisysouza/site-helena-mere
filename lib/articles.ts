export type Article = {
  slug: string
  title: string
  category: string
  minutes: number
  description: string
  keyword: string
  image: string
  imageAlt: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const articles: Article[] = [
  {
    slug: 'bairro-cabral-contagem-qualidade-de-vida',
    title: 'Cabral, em Contagem: um bairro que combina áreas verdes, conveniência e qualidade de vida',
    category: 'Bairros e qualidade de vida', minutes: 4,
    description: 'Conheça o bairro Cabral, em Contagem: Shopping Contagem, Parque Sarandi, comércio, acessos e opções de imóveis para morar.',
    keyword: 'bairro Cabral Contagem',
    image: '/images/cabral/cabral-contagem.jpg',
    imageAlt: 'Vista aérea do Shopping Contagem e da região do bairro Cabral',
    sections: [
      { heading: 'Onde fica o bairro Cabral, em Contagem?', paragraphs: ['Localizado na região da Ressaca, o Cabral tem como um de seus principais eixos de acesso a Avenida Severino Ballesteros Rodrigues. A região também se conecta a vias importantes para os deslocamentos entre Contagem e Belo Horizonte.'] },
      { heading: 'Shopping Contagem e comércio por perto', paragraphs: ['O Shopping Contagem fica na Avenida Severino Ballesteros Rodrigues e reúne lojas, alimentação, serviços e entretenimento. Ter um centro comercial próximo pode facilitar compras, refeições e passeios.', 'A CeasaMinas, na região do Kennedy, é outro polo comercial e logístico relevante para Contagem e municípios vizinhos. A conveniência de cada ponto depende do endereço exato do imóvel.'] },
      { heading: 'Parque Sarandi: lazer e contato com a natureza', paragraphs: ['Em frente ao Shopping Contagem está o Parque Linear Sarandi, com cerca de 113 mil m². A Prefeitura informou a entrega da revitalização em março de 2026, com pistas de caminhada e ciclovia, quadras, campo de areia, playground e pista de skate.', 'A programação e a disponibilidade dos equipamentos podem mudar. Consulte os canais municipais antes da visita.'] },
      { heading: 'O que considerar ao escolher um imóvel no Cabral?', paragraphs: ['Observe a localização exata, luz natural, ventilação, planta, vagas de garagem, condições do condomínio e distância dos serviços que você usa. Compare imóveis com características semelhantes e visite a região em diferentes horários.', 'Seja para sair do aluguel, conquistar o primeiro apartamento ou encontrar mais espaço, conheça as opções à venda no Cabral e avalie qual combina com seus planos.'] },
    ],
  },
  {
    slug: 'parque-sarandi-bairro-cabral-contagem',
    title: 'Parque Sarandi e áreas verdes: como aproveitar o lazer perto do bairro Cabral',
    category: 'Lazer e natureza', minutes: 4,
    description: 'Saiba mais sobre o Parque Sarandi, a Praça do Sol e as opções de lazer ao ar livre próximas ao bairro Cabral, em Contagem.',
    keyword: 'Parque Sarandi Cabral Contagem',
    image: '/images/cabral/parque-sarandi.jpg',
    imageAlt: 'Parque Linear Sarandi, em Contagem',
    sections: [
      { heading: 'Um espaço de lazer em Contagem', paragraphs: ['Situado na Avenida Severino Ballesteros Rodrigues, em frente ao Shopping Contagem, o Parque Linear Sarandi ocupa aproximadamente 113 mil metros quadrados.', 'A Prefeitura entregou o parque revitalizado em março de 2026, com melhorias nas pistas de caminhada e ciclovia, quadras, campo de areia, playground, áreas de convivência e pista de skate. Consulte os canais municipais para conferir programação e eventuais avisos antes da visita.'] },
      { heading: 'Caminhadas, exercícios e momentos ao ar livre', paragraphs: ['A proximidade de espaços públicos de lazer pode ajudar quem deseja incluir mais movimento na rotina. Uma caminhada pela manhã ou um passeio no fim de semana são formas simples de aproveitar a cidade, conforme as condições de acesso e a disponibilidade dos equipamentos.', 'A região também oferece academias e estabelecimentos para atividades físicas em ambientes estruturados.'] },
      { heading: 'O verde também influencia a escolha de um imóvel', paragraphs: ['Árvores, praças e espaços abertos no entorno podem contribuir para a experiência de morar. Cada rua e condomínio, porém, tem características próprias.', 'Durante a visita, observe a arborização, a vista das janelas, a incidência solar e as áreas de convivência próximas. Para unidades com varanda ou área privativa, avalie como esses espaços se encaixam no estilo de vida desejado.'] },
      { heading: 'Lazer e conveniência na mesma região', paragraphs: ['A proximidade do Shopping Contagem complementa as opções de compras, alimentação e entretenimento. Essa combinação pode interessar a quem busca equilibrar atividades cotidianas e momentos de descanso.', 'Conheça os imóveis no Cabral e compare localização, planta e características de cada unidade.'] },
    ],
  },
  {
    slug: 'valorizacao-imoveis-cabral-contagem',
    title: 'O bairro Cabral está valorizado? O que observar antes de comprar um imóvel em Contagem',
    category: 'Mercado imobiliário', minutes: 5,
    description: 'Entenda os fatores que influenciam os preços dos imóveis no Cabral, em Contagem, e saiba o que avaliar antes de comprar.',
    keyword: 'valorização imobiliária Cabral Contagem',
    image: '/images/cabral/vista-cabral.jpg',
    imageAlt: 'Vista aérea do bairro Cabral',
    sections: [
      { heading: 'Por que o Cabral desperta interesse imobiliário?', paragraphs: ['O bairro Cabral, em Contagem, reúne características que despertam o interesse de quem busca um imóvel para morar ou investir. Sua localização estratégica, aliada ao desenvolvimento da região, contribui para sua atratividade no mercado imobiliário.', 'A proximidade com o Shopping Contagem e o acesso facilitado à BR-040 e à Via Expressa tornam os deslocamentos mais práticos, conectando o bairro a diferentes regiões de Contagem e de Belo Horizonte, incluindo a Pampulha. Uma combinação de conveniência, mobilidade e infraestrutura que valoriza o dia a dia dos moradores e reforça o potencial imobiliário da região.'] },
    ],
  },
  {
    slug: 'cabral-castelo-pampulha-onde-morar',
    title: 'Cabral, Castelo ou Pampulha: qual região combina mais com seu estilo de vida?',
    category: 'Guia de regiões', minutes: 5,
    description: 'Compare Cabral, em Contagem, Castelo e Pampulha, em BH. Conheça comércio, áreas verdes, lazer e fatores para escolher um imóvel.',
    keyword: 'Cabral ou Castelo Contagem e BH',
    image: '/images/cabral/Contagem-vista-aerea.jpg',
    imageAlt: 'Vista aérea de Contagem, em Minas Gerais',
    sections: [
      { heading: 'Cabral, em Contagem: conveniência e acesso regional', paragraphs: ['O Cabral reúne referências como o Shopping Contagem, a Avenida Severino Ballesteros Rodrigues e o Parque Sarandi. Pode ser uma alternativa para quem busca morar em Contagem com serviços e lazer no entorno.'] },
      { heading: 'Castelo: comércio e vida residencial em Belo Horizonte', paragraphs: ['O Castelo, na região da Pampulha, oferece uma combinação de comércio de bairro, serviços e áreas residenciais. A proximidade dos lugares que você frequenta pode pesar mais do que a distância em linha reta.'] },
      { heading: 'Pampulha: lazer, paisagem e referências culturais', paragraphs: ['A região da Pampulha é conhecida por seus espaços de lazer, paisagens e referências culturais. Os bairros que a compõem têm características e preços diferentes, por isso é importante comparar endereços específicos.'] },
      { heading: 'Como comparar as três regiões?', paragraphs: ['Liste seus destinos frequentes, orçamento total, tamanho desejado, acesso a transporte e serviços prioritários. Compare condomínio, manutenção, segurança do trajeto e infraestrutura da rua. A decisão deve considerar sua rotina, orçamento e preferências, além das características de cada unidade.', 'A melhor região é aquela que funciona para você. Visite os imóveis e converse com a Helena Mêre para conhecer as opções disponíveis.'] },
    ],
  },
  {
    slug: 'morar-perto-shopping-contagem-bairro-cabral',
    title: 'Morar perto do Shopping Contagem: as vantagens de viver no bairro Cabral',
    category: 'Vida prática', minutes: 4,
    description: 'Descubra as vantagens de morar no Cabral, perto do Shopping Contagem, do comércio, dos serviços e do Parque Sarandi.',
    keyword: 'morar perto do Shopping Contagem',
    image: '/images/cabral/praça-cabral.jpg',
    imageAlt: 'Shopping Contagem, referência comercial do bairro Cabral',
    sections: [
      { heading: 'Mais praticidade no dia a dia', paragraphs: ['O Shopping Contagem concentra lojas, alimentação, serviços e entretenimento. Para quem mora nas proximidades, pode ser uma opção conveniente para resolver tarefas e encontrar atividades de lazer.', 'A distância e a facilidade de acesso dependem do endereço escolhido. Faça o trajeto a pé ou de carro antes de decidir.'] },
      { heading: 'A conveniência vai além do shopping', paragraphs: ['O Cabral tem acesso pela Avenida Severino Ballesteros Rodrigues e está conectado a outras áreas comerciais de Contagem. A CeasaMinas, na região do Kennedy, também tem importância econômica e logística para a cidade.', 'Para as necessidades cotidianas, pesquise supermercados, farmácias, escolas e serviços de saúde próximos ao imóvel específico.'] },
      { heading: 'Comércio e lazer em uma mesma região', paragraphs: ['Em frente ao Shopping Contagem está o Parque Ecológico do bairro Sarandi, uma referência de lazer ao ar livre que recebeu projetos de revitalização divulgados pelo município.', 'Consulte os canais oficiais para confirmar quais equipamentos estão disponíveis no momento da visita.'] },
      { heading: 'O que observar antes de comprar?', paragraphs: ['Faça o percurso entre o imóvel e os pontos de interesse. Avalie trânsito, iluminação, ruído, fluxo de veículos e facilidade de acesso a pé ou de carro.', 'Conheça os imóveis à venda no Cabral e compare planta, conservação, condomínio, localização e preço.'] },
    ],
  },
  {
    slug: 'apartamento-area-privativa-cabral-contagem',
    title: 'Apartamento com área privativa no Cabral: mais espaço para aproveitar a casa',
    category: 'Imóveis e estilo de morar', minutes: 4,
    description: 'Procura apartamento com área privativa no Cabral? Saiba o que observar e conheça as vantagens de morar nessa região de Contagem.',
    keyword: 'apartamento com área privativa Cabral Contagem',
    image: '/images/cabral/vista-ap-cabral-v2.jpg',
    imageAlt: 'Vista panorâmica do bairro Cabral e fachada de edifício residencial',
    sections: [
      { heading: 'O que é um apartamento com área privativa?', paragraphs: ['Em muitos edifícios, a área privativa fica no pavimento térreo ou em unidades com configuração diferenciada. O espaço externo pode acomodar plantas, uma mesa ou um ambiente de descanso, conforme as características do imóvel.', 'Verifique a metragem interna e externa, o que integra legalmente a unidade e as regras do condomínio para uso e alterações.'] },
      { heading: 'Por que procurar esse tipo de imóvel no Cabral?', paragraphs: ['O bairro oferece acesso ao comércio da região, ao Shopping Contagem e a referências de lazer como o Parque Sarandi. Para quem busca uma área residencial com conveniências próximas, esses fatores podem ser relevantes.', 'Uma área privativa também pode atrair quem gosta de jardinagem ou deseja flexibilidade, desde que suas condições atendam à rotina.'] },
      { heading: 'O que avaliar na visita?', paragraphs: ['Observe incidência de sol, ventilação, privacidade, drenagem e sinais de umidade. Verifique impermeabilização e regras para cobertura, fechamento ou outras modificações.', 'A área externa pode exigir manutenção específica e nem toda alteração é permitida pelo condomínio. Tire dúvidas antes de fazer planos para o espaço.'] },
      { heading: 'Mais espaço precisa fazer sentido para a sua rotina', paragraphs: ['Compare planta, quartos, vagas, conservação, condomínio, localização e preço. Uma área adicional é um diferencial quando atende ao uso que você pretende fazer dela.', 'Conheça as opções selecionadas pela Helena Mêre e encontre um imóvel que combine espaço e praticidade.'] },
    ],
  },
]
