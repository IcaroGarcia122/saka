export interface MenuItem {
  id: string;
  name: string;
  category: 'destaques' | 'rodizio' | 'entradas' | 'temakis' | 'hotrolls' | 'sashimis' | 'bebidas';
  price: number;
  description: string;
  pieces?: string;
  image: string;
  tag?: string;
  isChefSpecial?: boolean;
}

export interface SakaUnit {
  id: string;
  name: string;
  city: string;
  state: string;
  whatsapp: string;
  phoneFormatted: string;
  address: string;
  mapsUrl: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  slogan: string;
  instagram: string;
  instagramHandle: string;
  tiktok?: string;
  instagramFollowers: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  phoneCall: string;
  googleReviewUrl: string;
  googleMapsUrl: string;
  address: string;
  neighborhood: string;
  cityState: string;
  zipCode: string;
  pixKey: string;
  deliveryFee: number;
  openingHours: {
    days: string;
    hours: string;
    detail?: string;
  }[];
  units: SakaUnit[];
}

export const RESTAURANT_DATA: RestaurantInfo = {
  name: "Saka Sushi",
  tagline: "Onde você quer viver o Saka hoje?",
  slogan: "A verdadeira arte da alta culinária oriental em cada corte 🥢",
  instagram: "https://instagram.com/sakasushiguarapuava",
  instagramHandle: "@sakasushiguarapuava",
  tiktok: "https://www.tiktok.com/@sakasushiguarapuava",
  instagramFollowers: "Siga no Instagram",
  whatsappNumber: "5545999887766",
  whatsappFormatted: "(42) 99988-7766",
  phoneCall: "(42) 3038-2020",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJsakaSushiBarTokyoDesignExcellence",
  googleMapsUrl: "https://maps.google.com/?q=Saka+Sushi+Bar",
  address: "Rua Mato Grosso, 2140",
  neighborhood: "Centro Gastronômico",
  cityState: "Cascavel - PR",
  zipCode: "85812-020",
  pixKey: "financeiro@sakasushibar.com.br",
  deliveryFee: 12.00,
  openingHours: [
    {
      days: "Terça a Quinta-feira",
      hours: "18:30 às 23:30",
      detail: "Jantar & Rodízio Noturno"
    },
    {
      days: "Sexta-feira e Sábado",
      hours: "12:00 às 15:00 · 18:30 às 00:00",
      detail: "Almoço Executivo & Rodízio Especial"
    },
    {
      days: "Domingo",
      hours: "12:30 às 22:30",
      detail: "Funcionamento contínuo"
    },
    {
      days: "Segunda-feira",
      hours: "Fechado",
      detail: "Descanso semanal"
    }
  ],
  units: [
    {
      id: 'cascavel',
      name: 'Saka Cascavel',
      city: 'Cascavel',
      state: 'PR',
      whatsapp: '5545999887766',
      phoneFormatted: '(45) 99988-7766',
      address: 'Rua Mato Grosso, 2140 - Centro',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Cascavel'
    },
    {
      id: 'chapeco',
      name: 'Saka Chapecó',
      city: 'Chapecó',
      state: 'SC',
      whatsapp: '5549999887766',
      phoneFormatted: '(49) 99988-7766',
      address: 'Av. Getúlio Dorneles Vargas, 1420 - Centro',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Chapeco'
    },
    {
      id: 'guarapuava',
      name: 'Saka Guarapuava',
      city: 'Guarapuava',
      state: 'PR',
      whatsapp: '5542999887766',
      phoneFormatted: '(42) 99988-7766',
      address: 'Rua Brigadeiro Rocha, 1850 - Trianon',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Guarapuava'
    },
    {
      id: 'maringa',
      name: 'Saka Maringá',
      city: 'Maringá',
      state: 'PR',
      whatsapp: '5544999887766',
      phoneFormatted: '(44) 99988-7766',
      address: 'Av. Tiradentes, 980 - Zona 01',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Maringa'
    },
    {
      id: 'videira',
      name: 'Saka Videira',
      city: 'Videira',
      state: 'SC',
      whatsapp: '5549999887755',
      phoneFormatted: '(49) 99988-7755',
      address: 'Rua Brasil, 620 - Centro',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Videira'
    },
    {
      id: 'toledo',
      name: 'Saka Toledo',
      city: 'Toledo',
      state: 'PR',
      whatsapp: '5545999887744',
      phoneFormatted: '(45) 99988-7744',
      address: 'Rua Santos Dumont, 1980 - Centro',
      mapsUrl: 'https://maps.google.com/?q=Saka+Sushi+Toledo'
    }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'todos', name: 'Todos os Pratos' },
  { id: 'destaques', name: '⭐ Destaques Saka' },
  { id: 'rodizio', name: '🍱 Rodízio Premium' },
  { id: 'temakis', name: '🍙 Temakis' },
  { id: 'hotrolls', name: '🔥 Hot Rolls' },
  { id: 'sashimis', name: '🍣 Sashimis & Niguiris' },
  { id: 'entradas', name: '🥟 Entradas & Quentes' },
  { id: 'bebidas', name: '🍶 Drinks & Bebidas' }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'combo-saka-imperial',
    name: 'Combo Saka Imperial (40 Peças)',
    category: 'destaques',
    price: 189.90,
    pieces: '40 peças',
    description: 'Seleção magna do sushiman: 10 sashimis de salmão maçaricado com azeite trufado, 6 niguiris especiais com flor de sal e ouro comestível, 8 uramakis ebitem com crispy de alho-poró, 8 jyo de salmão com amora e 8 hot rolls crocantes.',
    image: '/images/sushi_combo_premium.jpg',
    tag: 'Mais Pedido',
    isChefSpecial: true
  },
  {
    id: 'rodizio-saka-individual',
    name: 'Rodízio Saka Premium (Individual)',
    category: 'rodizio',
    price: 139.90,
    pieces: 'À vontade',
    description: 'Experiência gastronômica completa: entradas quentes ilimitadas (shimeji, guioza, harumaki, sunomono), carpaccios trufados, sashimis nobres ilimitados, niguiris maçaricados, temakis e sobremesa artesanal.',
    image: '/images/sushi_combo_premium.jpg',
    tag: 'Experiência Completa',
    isChefSpecial: true
  },
  {
    id: 'rodizio-saka-casal',
    name: 'Rodízio Saka Especial (Para Casal)',
    category: 'rodizio',
    price: 259.90,
    pieces: 'Para 2 pessoas à vontade',
    description: 'O melhor rodízio para 2 pessoas. Inclui toda a carta de entradas, bateras especiais, lâminas de polvo e atum selado, além de 2 taças de espumante ou sobremesas especiais da casa.',
    image: '/images/sushi_combo_premium.jpg',
    tag: 'Casal VIP'
  },
  {
    id: 'hot-roll-salmao-crocante',
    name: 'Hot Roll Saka Crocante Especial',
    category: 'hotrolls',
    price: 44.90,
    pieces: '10 unidades',
    description: 'Roll empanado na farinha panko ultra crocante recheado com salmão fresco e cream cheese philadelphia, finalizado com fio de tarê artesanal, crispy de alho-poró dourado e gergelim tostado.',
    image: '/images/sushi_hot_rolls.jpg',
    tag: 'Sucesso de Vendas',
    isChefSpecial: true
  },
  {
    id: 'hot-roll-camarao-supreme',
    name: 'Hot Roll de Camarão Supreme',
    category: 'hotrolls',
    price: 49.90,
    pieces: '10 unidades',
    description: 'Empanado panko recheado com camarão rosa grelhado, lâmina de salmão envolto, cream cheese e toque sutil de pimenta togarashi e geleia de pimenta defumada.',
    image: '/images/sushi_hot_rolls.jpg',
    tag: 'Especial'
  },
  {
    id: 'temaki-salmao-especial',
    name: 'Temaki Saka Salmão Especial',
    category: 'temakis',
    price: 36.90,
    pieces: '1 cone generoso',
    description: 'Cone de alga nori crocante recheado até o fundo com cubos nobres de salmão fresco, cream cheese Philadelphia, cebolinha fresca e ovas de massago ou gergelim moído na hora.',
    image: '/images/sushi_temaki_salmon.jpg',
    tag: 'Favorito',
    isChefSpecial: true
  },
  {
    id: 'temaki-shimeji-salmao',
    name: 'Temaki Salmão Grelhado com Shimeji',
    category: 'temakis',
    price: 38.90,
    pieces: '1 cone generoso',
    description: 'Salmão levemente grelhado com cogumelos shimeji salteados na manteiga da terra, cream cheese cremoso e cebolinha.',
    image: '/images/sushi_temaki_salmon.jpg'
  },
  {
    id: 'sashimi-salmao-trufado',
    name: 'Carpaccio de Salmão Trufado (15 Lâminas)',
    category: 'sashimis',
    price: 68.90,
    pieces: '15 lâminas finas',
    description: 'Lâminas ultrafinas de salmão fresco premium banhadas em azeite trufado branco, flor de sal do Himalaia, raspas de limão siciliano e molho ponzu especial da casa.',
    image: '/images/sushi_combo_premium.jpg',
    tag: 'Gourmet'
  },
  {
    id: 'niguiri-duo-flambado',
    name: 'Duo Niguiri Salmão Brûlée com Ouro',
    category: 'sashimis',
    price: 32.90,
    pieces: '4 unidades',
    description: 'Niguiris de salmão maçaricados na brasa com crosta brûlée de açúcar mascavo e flor de sal, finalizados com folha de ouro 24k comestível.',
    image: '/images/sushi_combo_premium.jpg'
  },
  {
    id: 'entrada-shimeji-manteiga',
    name: 'Shimeji Negro na Manteiga & Saquê',
    category: 'entradas',
    price: 39.90,
    pieces: 'Porção para compartilhar',
    description: 'Cogumelos shimeji frescos salteados no fogo alto com manteiga de primeira linha, saquê mirin, shoyu suave e cebolinha fresca picada na hora.',
    image: '/images/sushi_combo_premium.jpg',
    tag: 'Quente'
  },
  {
    id: 'guioza-artesanal',
    name: 'Guiozas Artesanais de Lombo (6 Unid.)',
    category: 'entradas',
    price: 34.90,
    pieces: '6 unidades',
    description: 'Pastéis japoneses feitos à mão com recheio suculento de lombo temperado e legumes frescos, dourados na chapa e servidos com molho ponzu de gengibre.',
    image: '/images/sushi_hot_rolls.jpg'
  },
  {
    id: 'drink-saketini-lichia',
    name: 'Drink Autoral: Saketini de Lichia',
    category: 'bebidas',
    price: 32.90,
    pieces: 'Taça 300ml',
    description: 'Saquê japonês importado, licor de lichia premium, xarope de gengibre caseiro e néctar de limão siciliano.',
    image: '/images/saka_facade_night.jpg',
    tag: 'Coquetel da Casa'
  },
  {
    id: 'cerveja-asahi-super-dry',
    name: 'Cerveja Japonesa Asahi Super Dry (Long Neck)',
    category: 'bebidas',
    price: 24.90,
    pieces: '330ml geladíssima',
    description: 'A autêntica cerveja japonesa de perfil seco e refrescante, harmonização perfeita com sushis e pratos maçaricados.',
    image: '/images/saka_facade_night.jpg'
  }
];

export const SHOWCASE_STORIES = [
  {
    id: '1',
    title: 'Combo Saka Imperial',
    subtitle: 'Nossa maior assinatura gastronômica',
    description: '40 peças minuciosamente talhadas com pescados frescos selecionados todos os dias nas primeiras horas da manhã.',
    price: 'R$ 189,90',
    image: '/images/sushi_combo_premium.jpg',
    badge: 'Obra Prima'
  },
  {
    id: '2',
    title: 'Hot Rolls com Crispy de Alho-Poró',
    subtitle: 'Crocância e cremosidade em equilíbrio',
    description: 'Recheado com salmão e cream cheese e finalizado com nossa calda artesanal de tarê envelhecido.',
    price: 'R$ 44,90',
    image: '/images/sushi_hot_rolls.jpg',
    badge: 'Crosta Panko'
  }
];

