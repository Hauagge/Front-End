const checkboxes = [
  {
    value: 1,
    label: "01 - Todas as do Artigo 6º;",
    key: 1,
 
    
  },
  {
    value: 1,
    label:
      "02 - Ofertar produtos ou serviços sem assegurar informações corretas, claras, precisas, ostensivas e em língua portuguesa sobre suas características como: quantidade, preço, condições de pagamento, juros, encargos, garantia, entre outros dados relevantes (art. 31);",
    key: 2
    
  },
  {
    value: 1,
    label:
      "03 - Realizar as práticas abusivas previstas no Art. 39, nos incisos: - II (Recusar atendimento às demandas dos consumidores...) - IX (Recusar a venda de bens ou a prestação de serviços...) - X (Elevar sem justa causa...) - XI (Aplicar fórmula ou índice de reajuste diverso...) - XII (Deixar de estipular prazo para o...)",
    key: 3
    
  },
  {
    value: 1,
    label:
      "04 - deixar de fornecer prévia e adequadamente ao consumidor, nas vendas a prazo, informações obrigatórias sobre as condições do crédito ou financiamento(art. 52);",
    key: 4
    
  },
  {
    value: 1,
    label:
      "05 - omitir, nas ofertas ou vendas eletrônicas, por telefone ou reembolso postal,  o nome e endereço do fabricante ou do importador na embalagem, publicidade e em todos os impressos utilizados na transação comercial (art. 33); (rótulo)",
    key: 5
    
  },
  {
    value: 1,
    label:
      "06 - promover publicidade de produto ou serviço de forma que o consumidor não a identifique como tal de forma fácil e imediata (art. 36);",
    key: 6
   
  },
  {
    value: 1,
    label:
      "07 - deixar de sanar os vícios do produto ou serviço, de qualidade ou quantidade, que os tornem impróprios ou inadequados ao consumo a que se destinam ou lhes diminuem o valor, assim como por aqueles decorrentes da disparidade, com as indicações constantes do recipiente, da embalagem, rotulagem ou mensagem publicitária (arts. 18, 19 e 20); (somente vício)",
    key: 7
    
  },
  {
    value: 1,
    label:
      "08 - deixar de cumprir a oferta, publicitária ou não, suficientemente precisa, ou obrigação estipulada em contrato (art. 30 e 48);",
    key: 8
    
  },

  {
    value :1,
    label : '09 – redigir instrumento de contrato que regulam relações de consumo de modo a dificultar a compreensão do seu sentido e alcance (art. 46).(não entrega do comprovante da relação de consumo – contrato, orçamento, nota fiscal, etc); ',
    key : 9
  },

  {
    value : 1,
    label : '10 – impedir, dificultar ou negar a desistência contratual e devolução dos valores recebidos, no prazo legal de arrependimento, quando a contratação ocorrer fora do estabelecimento comercial(art. 49); ',
     key:10
  },

  {
    value : 1,
    label : '11 – deixar de entregar, quando concedida garantia contratual, termo de garantia ou equivalente em forma padronizada, esclarecendo, de maneira adequada, em que consiste a mesma garantia, bem como a forma, o prazo e o lugar em que pode ser exercitada e os ônus a cargo do consumidor(art. 50, parágrafo único);',
     key:11
  },

  {
    value : 1,
    label : '12 – deixar de fornecer manual de instrução, de instalação e uso de produto em linguagem didática e com ilustrações (art. 50, parágrafo único). Salvo se se tratar de produto potencialmente nocivo(que enquadrar - se - a como grave).; ', 
    key:12
  },
  {
    value : 1,
    label : '13 – deixar de redigir contrato de adesão em termos claros e com caracteres ostensivos e legíveis, de modo a facilitar a sua compreensão pelo consumidor(art. 54, § 3º); ',
    key:13
  },
  {
    value : 1,
    label : '14 – deixar de redigir com destaque cláusulas contratuais que impliquem na limitação de direito do consumidor, impedindo sua imediata e fácil compreensão(art. 54, § 4º); ', 
    key:14
  },
  {
    value : 1,
    label : '15 – colocar no mercado de consumo produtos ou serviços inadequados ao fim que se destinam ou lhe diminuam o valor (arts. 18, § 6º, III, e 20); (vício de inadequação).;', 
    key : 15
  },
  {
    value : 1,
    label : '16 – deixar de empregar componentes de reposição originais e adequados ou que mantenham as especificações técnicas do fabricante, salvo se existir autorização em contrário do consumidor(art. 21);', 
    key:16
  }, 
  {
    value : 1,
    label : '17 – deixar de assegurar a oferta de componentes e peças de reposição enquanto não cessar a fabricação ou importação do produto (art. 32);', 
    key : 17
  },
  {
    value : 1,
    label : '18 – deixar de entregar orçamento prévio discriminando o valor da mão-de-obra, dos materiais e equipamentos a serem empregados, as condições de pagamento, bem como as datas de início e término dos serviços(art. 40); ', key:18
  },
  {
    value : 1,
    label : '19 – deixar de restituir quantia recebida em excesso nos casos de produtos ou serviços sujeitos a regime de controle ou tabelamento de preços (art. 40, § 3º);', key : 19
  },
  {
    value : 1,
    label : '20 – inserir no instrumento de contrato cláusula abusiva (art. 51);', key : 20
  },
  {
    value : 1,
    label : '21 – exigir multa de mora superior ao limite legal (art. 52, § 1º);', key : 21
  },
  {
    value : 1,
    label : '22 – deixar de assegurar ao consumidor a liqüidação antecipada do débito, total ou parcialmente, mediante redução proporcional dos juros (art. 52, § 2º);', 
    key : 22
  },
  {
    value : 1,
    label : '23 – prática infrativa não enquadrada em outro grupo.;',
    key : 23
  },
  {
    value : 2,
    label : '01 – ofertar produtos ou serviços sem assegurar informações corretas, claras, precisas, ostensivas e em língua portuguesa sobre suas características quanto à qualidade; prazo de validade; origem e sobre os riscos que apresentam à saúde e segurança dos consumidores(art. 31); ', 
    key:24
  },
  {
    value : 2,
    label : '02 – deixar de fornecer manual de instrução, de instalação e uso de produto em linguagem didática e com ilustrações quando se tratar de produto potencialmente nocivo(art. 50, parágrafo único); ', 
    key:25
  },

  {
    value : 2,
    label : ' 03 – colocar no mercado de consumo produtos ou serviços em desacordo com as indicações constantes do recipiente, da embalagem, da rotulagem ou mensagem publicitária, respeitadas as variações decorrentes de sua natureza(art. 19); ', 
    key:26
  },
  {
    value : 2,
    label : ' 04 – deixar as concessionárias ou permissionárias de fornecer serviços públicos adequados, ficientes, seguros e, quanto aos essenciais, contínuos (art. 22);', 
    key : 27
  },
  {
    value : 2,
    label : '05 – colocar no mercado de consumo produtos ou serviços em desacordo com as normas regulamentares de fabricação, distribuição ou apresentação ou, se normas específicas não existirem, pela Associação Brasileira de Normas Técnicas ou outra entidade credenciada pelo Conselho Nacional de Metrologia, Normalização e Qualidade Industrial – CONMETRO(arts. 18, § 6º, II, e 39, VIII); ', 
    key:28
  },
  {
    value : 2,
    label : ' 06 – impedir ou dificultar o acesso gratuito do consumidor às informações existentes em cadastros, fichas, registros e dados pessoais e de consumo arquivados sobre ele, bem como sobre as suas respectivas fontes(art. 43); ', 
    key:29
  },
  {
    value : 2,
    label : '07 – deixar de restituir ao consumidor quantia indevidamente cobrada pelo valor igual ao dobro do excesso (art. 42, parágrafo único);', 
    key : 30
  },
  {
    value : 2,
    label : ' 08 – deixar o fornecedor, na publicidade de seus produtos ou serviços de manter em seu poder para informação dos legítimos interessados, os dados fáticos, técnicos e científicos que dão sustentação à mensagem(art. 36, parágrafo único); ou deixar de prestar essas informações ao órgão de defesa do consumidor quando notificado para tanto(art. 55, § 4º); ', 
    key:31
  },

  {
    value : 2,
    label : ' 09 – submeter, na cobrança de débitos, o consumidor inadimplente a ridículo ou qualquer tipo de constrangimento ou ameaça (art. 42);', 
    key : 32
  },
  {
    value : 2,
    label : ' 10 – deixar de prestar informações sobre questões de interesse do consumidor descumprindo notificação do órgão de defesa do consumidor (art. 55. § 4º).;', 
    key : 33
  },
  {
    value : 2,
    label : '11 – Realizar as práticas abusivas previstas no Art.39, Incisos: - I (condicionar o fornecimento de produto ou serviço ao fornecimento de outro produto ou serviço...): - III(Enviar ou entregar ao consumidor...) - V(Exigir do consumidor...) -         VI(Executar serviços sem a prévia elaboração de...) - VII(Repassar informação depreciativa...) - VIII(Colocar, no mercado de consumo, qualquer produto ou serviço...); ',
    key:34
  },
  {
    value : 2,
    label : ' 12 – inserir no instrumento de contrato cláusula que estabeleça a perda total das prestações pagas em benefício do credor que, em razão do inadimplemento, pleitear a resolução do contrato e a retomada do produto alienado(art. 53); ', 
    key:35
  },
  {
    value:3,
    label:' 01 – ofertar produtos ou serviços sem assegurar informação correta, clara, precisa, ostensiva e em língua portuguesa sobre a composição, seus respectivos prazos de validade e sobre os riscos que apresentam à saúde e segurança dos consumidores(art. 31); ', 
    key:36
  },
  {
    value:3,
    label:' 02 – expor à venda produtos com validade vencida(art. 18, § 6º, I); ', 
    key:37
  },
  {
    value:3,
    label:' 03 – deixar de comunicar à autoridade competente a nocividade ou periculosidade do produto ou serviço, quando do lançamento dos mesmos no mercado de consumo, ou quando da verificação posterior da existência de risco à saúde e segurança do consumidor(art. 10, § 1º). (Artigo 64); ', 
    key:38
  },
  {
    value:3,
    label:' 04 – deixar de comunicar aos consumidores, por meio de anúncios publicitários veiculados na imprensa, rádio e televisão,a nocividade ou periculosidade do produto ou serviço, quando do lançamento dos mesmos no mercado de consumo, ou quando da verificação posterior da existência de risco à saúde e segurança do consumidor.(art. 10, § 1º e 2º); ', 
    key:39
  },
  {
    value:3,
    label:' 05 – deixar de reparar os danos causados aos consumidores por defeitos decorrentes de projeto, fabricação, construção, montagem, fórmulas, manipulação, apresentação ou acondicionamento de seus produtos ou serviços, bem como por informações insuficientes ou inadequadas sobre sua utilização e riscos(art. 12 e 14); ', 
    key:40
  },
  {
    value:3,
    label:' 06 – colocar no mercado de consumo produtos ou serviços inadequados ao fim que se destinam ou lhe diminuam o valor (quando se tratar de produtos potencialmente nocivos)(arts. 18, § 6º, III, e 20);', 
    key:41
  },
  {
    value : 3,
    label : ' 07 – deixar as concessionárias ou permissionárias de fornecer serviços públicos adequados, ficientes, seguros e, quanto aos essenciais, contínuos(art. 22). (quando a inadequação, ineficiência, a insegurança e a descontinuidade envolver risco à saúde e segurança do consumidor); ', 
    key:42
  },
  {
    value : 3,
    label : ' 08 – expor à venda produtos deteriorados, alterados, adulterados, avariados, falsificados, corrompidos, fraudados, nocivos à vida ou à saúde, ou perigosos (art. 18, § 6º, II);', 
    key : 43
  },
  {
    value : 3,
    label : ' 09 – colocar ou ser responsável pela colocação no mercado de consumo produto ou serviço que sabe ou deveria saber apresentar alto grau de nocividade ou periculosidade à saúde ou segurança(art. 10); ', 
    key:44
  },
  {
    value : 3,
    label : ' 10 – deixar de informar, de maneira ostensiva e adequada, a respeito da nocividade ou periculosidade de produtos e serviços potencialmente nocivos ou perigosos à saúde ou segurança, ou deixar de adotar outras medidas cabíveis em cada caso concreto(art. 9º); (Artigo 63, Parágrafo 1º); ', 
    key:45
  },
  {
    value : 3,
    label : ' 11 – Fazer ou promover publicidade que sabe ou deveria saber ser enganosa ou abusiva (art. 37). (Artigo 66 e 67 );',
    key : 46
  },
  {
    value : 3,
    label : ' 12 – Fazer ou promover publicidade que sabe ou deveria saber ser capaz de induzir o consumidor a se comportar de forma prejudicial ou perigosa à sua saúde ou segurança. (Art. 68);', 
    key : 47
  },
  {
    value : 3,
    label : ' 13 – Empregar, na reparação de produtos, peças ou componentes de reposição usados, sem autorização do consumidor; nos casos em que o produto ou serviço envolver a saúde e segurança do consumidor as peças devem ser novas.(Art 70 das Infrações Penais); ', 
    key:48
  },
  {
    value : 3,
    label : ' 14 – Deixar de retirar do mercado, imediatamente quando determinado pela autoridade competente, os produtos nocivos ou perigosos; (Art 64, parágrafo único das Infrações Penais);', 
    key : 49
  },
  {
    value : 3,
    label : ' 15 – manter cadastro de consumidores sem serem objetivos, claros, verdadeiros e em linguagem de fácil compreensão, ou contendo informações negativas referentes a período superior a cinco anos(art. 43, § 1º); ', 
    key:50
  },
  {
    value : 3,
    label : ' 16 – inserir ou manter registros, em desacordo com a legislação, nos cadastros ou banco de dados de consumidores (art. 43 e ss e 39, caput);', 
    key : 51
  },
  {
    value : 3,
    label : ' 17 – inserir ou causar a inserção de informações negativas não verdadeiras ou imprecisas em cadastro de consumidores (art. 43, § 1º);', 
    key : 52
  },
  {
    value : 3,
    label : ' 18 – deixar de comunicar por escrito ao consumidor a abertura de cadastro, ficham registro e dados pessoais de consumo, quando não solicitada por ele (art. 43, § 2º);', 
    key : 53
  },
  {
    value : 3,
    label : ' 19 – deixar de retificar, quando exigidos pelo consumidor, os dados e cadastros nos casos de inexatidão ou comunicar a alteração aos eventuais destinatários no prazo legal(art. 43, § 3º); ', 
    key:54
  },
  {
    value : 3,
    label : ' 20 – fornecer quaisquer informações que possam impedir ou dificultar acesso ao crédito junto aos fornecedores após consumada a prescrição relativa à cobrança dos débitos do consumidor(art. 43, § 5º);', 
    key:55
  },
  {
    value : 3,
    label : ' 21 – prevalecer-se da fraqueza ou ignorância do consumidor, tendo em vista sua idade, saúde, conhecimento ou condição social, para impingir - lhe seus produtos ou serviços(art. 39, Inciso IV).; ', 
    key:56
  },
];

export default checkboxes;
