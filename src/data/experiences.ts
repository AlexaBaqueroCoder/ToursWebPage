export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'island-tour' | 'beach-club' | 'diving' | 'nightlife' | 'beach';
  departure: string;
  returnTime: string;
  priceFrom?: number;
  currency: string;
  highlights: string[];
  includes: string[];
  notIncludes?: string[];
  /** Si no se define en la tarjeta, se muestra la política por defecto del sitio (traducida). */
  cancellationPolicy?: string;
  tag?: string;
  locales?: {
    en?: Partial<Pick<Experience, 'title' | 'subtitle' | 'description' | 'highlights' | 'tag'>>;
    fr?: Partial<Pick<Experience, 'title' | 'subtitle' | 'description' | 'highlights' | 'tag'>>;
  };
}

export const experiences: Experience[] = [
  {
    id: 'experiencia-4-islas',
    title: 'Experiencia 4 Islas',
    subtitle: 'Vive una aventura inolvidable',
    description:
    'Vive la experiencia más completa del Caribe en un solo día: recorre las mágicas Islas del Rosario, nada en aguas cristalinas, siente la energía vibrante de la fiesta en Cholón en medio del mar turquesa y relájate en playas paradisíacas como Agua Azul y Playa Tranquila.\n\nUn día diseñado para combinar aventura, cultura caribeña, descanso y momentos únicos como el plancton bioluminiscente que ilumina el mar bajo las estrellas.\n\nMás que un tour, es una experiencia inolvidable que conecta lujo, diversión y naturaleza en su máxima expresión.',
    image: '/images/caribetours/tour-rosario-4.jpg',
    category: 'island-tour',
    departure: '7:30 AM - 8:00 AM',
    returnTime: '3:00 PM - 8:00 PM',
  
    priceFrom: 200000, // base sin plancton
    currency: 'COP',
    tag: 'Mas Popular',
  
    highlights: [
      '🛥️ Tour panorámico Islas del Rosario',
      '🤿 Snorkel o Oceanario (elige 1)',
      '🎉 Fiesta en Cholón en el mar',
      '✨ Plancton bioluminiscente (opcional)',
    ],
  
    includes: [
      'Recogida en hotel o puntos acordados',
      'Transporte climatizado hasta Playa Blanca',
      'Lancha rápida',
      'Tour panorámico Islas del Rosario',
      'Snorkel o visita al Oceanario (1 actividad)',
      'Fiesta en Cholón con música caribeña',
      'Visita a Agua Azul',
      'Playa Tranquila y uso de instalaciones',
      'Cóctel de camarón',
      'Almuerzo típico',
      'Snack (incluido solo con plancton)',
    ],
  
    notIncludes: [
      'Seguro médico obligatorio ($8.800 COP por persona)',
      'Entrada a Oceanario (si se selecciona esa actividad)',
      'Plancton bioluminiscente (valor adicional $30.000 COP)',
      'Bebidas alcohólicas no especificadas',
      'Gastos personales y propinas',
    ],
  
    locales: {
      en: {
        title: '4 Islands Experience',
        subtitle: 'An unforgettable adventure',
        description:
          '🚌 Transportation – Heading to Paradise: hotel pickup or designated meeting points, air-conditioned transport to Playa Blanca, and speedboat transfer.\n\n🏖️ Tours – Welcome to the heart of the sea: panoramic tour of the Rosario Islands, snorkeling or Oceanarium activity (1 option only, admission not included), unique party in Cholón with Caribbean music in turquoise waters, visit to Agua Azul, Playa Tranquila with facilities access, and optional bioluminescent plankton experience.\n\n🥘 Food: shrimp cocktail, traditional lunch and snack included (only with plankton option).\n\n💰 Price: $200,000 COP (without plankton) / $230,000 COP (with plankton).',
        highlights: [
          'Rosario Islands panoramic tour',
          'Snorkeling or Oceanarium (choose 1)',
          'Cholón party in the sea',
          'Optional bioluminescent plankton',
        ],
        tag: 'Most Popular',
      },
  
      fr: {
        title: 'Expérience 4 Îles',
        subtitle: 'Une aventure inoubliable',
        description:
          '🚌 Transport vers le paradis : prise en charge à l’hôtel ou aux points de rendez-vous, transport climatisé jusqu’à Playa Blanca et transfert en hors-bord.\n\n🏖️ Excursions – Bienvenue au cœur de la mer : tour panoramique des îles du Rosaire, snorkeling ou visite de l’Océanarium (1 seule option, entrée non incluse), fête unique à Cholón avec musique caribéenne dans une mer turquoise, visite d’Agua Azul, Playa Tranquila avec accès aux installations et expérience de plancton bioluminescent (optionnelle).\n\n🥘 Restauration : cocktail de crevettes, déjeuner typique et snack inclus (uniquement avec l’option plancton).\n\n💰 Prix : 200 000 COP (sans plancton) / 230 000 COP (avec plancton).',
        highlights: [
          'Tour panoramique des îles du Rosaire',
          'Snorkeling ou Océanarium (1 choix)',
          'Fête à Cholón en mer',
          'Plancton bioluminescent optionnel',
        ],
        tag: 'Plus Populaire',
      },
    },
  },
  {
    id: 'experiencia-5-islas',
    title: 'Experiencia 5 Islas',
    subtitle: 'Para quienes quieren vivirlo todo sin prisa',
    description:
      'La experiencia definitiva: Fuerte de Bocachica, Islas del Rosario, snorkel en Majayura, fiesta en Cholon, avioneta de Pablo Escobar, Agua Azul, sunset en Playa Tranquila y plancton bioluminiscente.',
    image: '/images/caribetours/tour-rosario-5.jpg',
    category: 'island-tour',
    departure: '7:30 AM - 8:00 AM',
    returnTime: '3:30 PM - 8:00 PM',
    priceFrom: 250000,
    currency: 'COP',
    tag: 'Premium',
    highlights: [
      'Fuerte de Bocachica',
      'Snorkel en Majayura',
      'Avioneta sumergida',
      'Sunset + Plancton',
    ],
    includes: [
      'Recogida en hotel',
      'Botes deportivos',
      'Parada Fuerte de Bocachica',
      'Recorrido Islas del Rosario',
      'Snorkel en Majayura',
      'Fiesta en Cholon',
      'Avioneta de Escobar',
      'Agua Azul',
      'Sunset Playa Tranquila',
      'Coctel de mariscos',
      'Almuerzo isla privada',
      'Impuesto portuario',
    ],
    notIncludes: [
      'Bebidas alcoholicas no mencionadas',
      'Actividades opcionales en islas no descritas',
      'Gastos personales y propinas (opcionales)',
      'Seguro de viaje',
    ],
    locales: {
      en: {
        title: '5 Islands Experience',
        subtitle: 'For those who want it all, unhurried',
        description:
          'The ultimate experience: Bocachica Fort, Rosario Islands, snorkeling in Majayura, Cholon party, Pablo Escobar\'s sunken plane, Agua Azul, sunset at Playa Tranquila and bioluminescent plankton.',
        highlights: [
          'Bocachica Fort',
          'Majayura snorkeling',
          'Sunken plane',
          'Sunset + Plankton',
        ],
        tag: 'Premium',
      },
      fr: {
        title: 'Exp\u00e9rience 5 \u00celes',
        subtitle: 'Pour ceux qui veulent tout vivre sans se presser',
        description:
          'L\'exp\u00e9rience ultime : Fort de Bocachica, \u00eeles du Rosaire, snorkeling \u00e0 Majayura, f\u00eate \u00e0 Cholon, avionnette de Pablo Escobar, Agua Azul, coucher de soleil \u00e0 Playa Tranquila et plancton bioluminescent.',
        highlights: [
          'Fort de Bocachica',
          'Snorkeling \u00e0 Majayura',
          'Avionnette immerg\u00e9e',
          'Coucher de soleil + Plancton',
        ],
        tag: 'Premium',
      },
    },
  },
  {
    id: 'playa-tranquila',
    title: 'Playa Tranquila',
    subtitle: 'Relax total frente al mar',
    description:
      'El lugar perfecto para disfrutar del sol y la playa en calma. Transporte, almuerzo tipico y uso de instalaciones incluidos.',
    image: '/images/caribetours/tour-playa-tranquila.jpg',
    category: 'beach',
    departure: '7:30 AM - 8:00 AM',
    returnTime: '2:30 PM - 3:00 PM',
    priceFrom: 120000,
    currency: 'COP',
    highlights: ['Playa virgen', 'Almuerzo tipico', 'Coctel de bienvenida', 'Ambiente relajado'],
    includes: [
      'Recogida en hotel',
      'Transporte climatizado',
      'Lancha',
      'Coctel de bienvenida',
      'Almuerzo tipico',
      'Uso de instalaciones',
    ],
    notIncludes: [
      'Alquiler de carpas o sillas premium en playa (si aplica)',
      'Bebidas fuera de lo incluido en el plan',
      'Propinas y gastos personales',
    ],
    locales: {
      en: {
        title: 'Playa Tranquila',
        subtitle: 'Total relaxation by the sea',
        description:
          'The perfect place to enjoy the sun and the beach in peace. Transport, traditional lunch and use of facilities included.',
        highlights: [
          'Virgin beach',
          'Traditional lunch',
          'Welcome cocktail',
          'Relaxed atmosphere',
        ],
      },
      fr: {
        title: 'Playa Tranquila',
        subtitle: 'D\u00e9tente totale face \u00e0 la mer',
        description:
          'L\'endroit parfait pour profiter du soleil et de la plage en toute tranquillit\u00e9. Transport, d\u00e9jeuner typique et acc\u00e8s aux installations inclus.',
        highlights: [
          'Plage vierge',
          'D\u00e9jeuner typique',
          'Cocktail de bienvenue',
          'Ambiance d\u00e9tendue',
        ],
      },
    },
  },
  {
    id: 'playa-blanca',
    title: 'Playa Blanca',
    subtitle: 'Arena blanca y mar turquesa',
    description:
      'Una de las playas mas hermosas de Colombia. Disfruta de arena blanca, aguas cristalinas y gastronomia local.',
    image: '/images/caribetours/tour-playa-blanca.jpg',
    category: 'beach',
    departure: '7:30 AM - 8:00 AM',
    returnTime: '2:30 PM - 3:00 PM',
    priceFrom: 100000,
    currency: 'COP',
    highlights: ['Arena blanca', 'Aguas cristalinas', 'Guia turistico', 'Almuerzo tipico'],
    includes: [
      'Recogida en hotel',
      'Transporte climatizado',
      'Almuerzo tipico',
      'Guia turistico',
    ],
    notIncludes: [
      'Entrada a areas con costo adicional no anunciado',
      'Bebidas alcoholicas fuera del acuerdo del operador',
      'Propinas y gastos personales',
    ],
    locales: {
      en: {
        title: 'Playa Blanca',
        subtitle: 'White sand and turquoise sea',
        description:
          'One of Colombia\'s most beautiful beaches. Enjoy white sand, crystal-clear waters and local cuisine.',
        highlights: [
          'White sand',
          'Crystal-clear waters',
          'Tourist guide',
          'Traditional lunch',
        ],
      },
      fr: {
        title: 'Playa Blanca',
        subtitle: 'Sable blanc et mer turquoise',
        description:
          'L\'une des plus belles plages de Colombie. Profitez du sable blanc, des eaux cristallines et de la gastronomie locale.',
        highlights: [
          'Sable blanc',
          'Eaux cristallines',
          'Guide touristique',
          'D\u00e9jeuner typique',
        ],
      },
    },
  },
  {
    id: 'tour-bahia',
    title: 'Tour Bahia',
    subtitle: 'Noche de fiesta en el mar',
    description:
      'Disfruta de una inolvidable noche llena de alegria con animador a bordo, bar abierto y musica crossover. Tres horarios disponibles.',
    image: '/images/experiences/bay-tour.jpeg',
    category: 'nightlife',
    departure: '5:00 PM / 7:00 PM / 9:00 PM',
    returnTime: 'Variable',
    priceFrom: 90000,
    currency: 'COP',
    tag: 'Nocturno',
    highlights: ['Bar abierto', 'Animador a bordo', 'Musica en vivo', 'Discoteca incluida'],
    includes: [
      'Bote deportivo',
      'Animador a bordo',
      'Bar abierto (Coca-Cola, jugo, ron)',
      'Musica',
      'Cover discoteca',
    ],
    notIncludes: [
      'Bebidas alcoholicas fuera del bar abierto indicado',
      'Transporte hacia el muelle si no esta contratado',
      'Gastos en discoteca despues del cover incluido',
      'Propinas y gastos personales no descritos',
    ],
    locales: {
      en: {
        title: 'Bay Tour',
        subtitle: 'A night of partying at sea',
        description:
          'Enjoy an unforgettable night full of joy with an on-board host, open bar and crossover music. Three time slots available.',
        highlights: [
          'Open bar',
          'On-board host',
          'Live music',
          'Nightclub included',
        ],
        tag: 'Nightlife',
      },
      fr: {
        title: 'Tour de la Baie',
        subtitle: 'Nuit de f\u00eate en mer',
        description:
          'Profitez d\'une nuit inoubliable pleine de joie avec un animateur \u00e0 bord, bar ouvert et musique crossover. Trois horaires disponibles.',
        highlights: [
          'Bar ouvert',
          'Animateur \u00e0 bord',
          'Musique live',
          'Discoth\u00e8que incluse',
        ],
        tag: 'Nocturne',
      },
    },
  },
];

export const beachClubs: Experience[] = [
  {
    id: 'pasadia-paue',
    title: "Pasadia Pa'ue Beach Lounge",
    subtitle: 'Islas del Rosario',
    description:
      'Aguas cristalinas, arena blanca y el mejor paisaje del parque nacional. Champan de bienvenida, tour panoramico, paddle board, kayak y almuerzo gourmet con 7 opciones.',
    image: '/images/caribetours/tour-paue.jpg',
    category: 'beach-club',
    departure: '7:45 AM - 8:00 AM',
    returnTime: '2:30 PM - 3:00 PM',
    priceFrom: 280000,
    currency: 'COP',
    tag: 'Exclusivo',
    highlights: [
      'Champan de bienvenida',
      'Tour panoramico 45 min',
      'Open Bar Happy Hour 2x1',
      '7 opciones de almuerzo',
    ],
    includes: [
      'Lancha deportiva ida y vuelta',
      'Hidratacion en trayecto',
      'Copa de champan',
      'Tour panoramico 45 min',
      'Asoleadoras y cama de playa',
      'Areas comunes',
      'Almuerzo + bebida',
      'Paddle board',
      'Kayak',
    ],
    notIncludes: [
      'Traslado hotel-muelle si no esta incluido en tu reserva',
      'Bebidas fuera de horarios de happy hour / promociones',
      'Propinas y gastos personales',
    ],
    locales: {
      en: {
        title: "Pa'ue Beach Lounge Day Pass",
        subtitle: 'Rosario Islands',
        description:
          'Crystal-clear waters, white sand and the best landscape in the national park. Welcome champagne, panoramic tour, paddle board, kayak and gourmet lunch with 7 options.',
        highlights: [
          'Welcome champagne',
          '45-min panoramic tour',
          'Happy Hour Open Bar 2x1',
          '7 lunch options',
        ],
        tag: 'Exclusive',
      },
      fr: {
        title: "Pasadia Pa'ue Beach Lounge",
        subtitle: '\u00celes du Rosaire',
        description:
          'Eaux cristallines, sable blanc et les plus beaux paysages du parc national. Champagne de bienvenue, tour panoramique, paddle board, kayak et d\u00e9jeuner gastronomique avec 7 options.',
        highlights: [
          'Champagne de bienvenue',
          'Tour panoramique 45 min',
          'Happy Hour Open Bar 2x1',
          '7 options de d\u00e9jeuner',
        ],
        tag: 'Exclusif',
      },
    },
  },
  {
    id: 'pasadia-ibbiza',
    title: 'Pasadia Ibbiza',
    subtitle: 'Islas del Rosario',
    description:
      'DJ en vivo, piscina de agua salada, playa privada y la mejor fiesta en las islas. Pet friendly. 4 opciones de almuerzo.',
    image: '/images/caribetours/tour-ibbiza.jpg',
    category: 'beach-club',
    departure: '8:20 AM - 8:30 AM',
    returnTime: '3:15 PM - 3:30 PM',
    priceFrom: 220000,
    currency: 'COP',
    tag: 'Fiesta',
    highlights: [
      'DJ en vivo',
      'Piscina agua salada',
      'Playa privada',
      'Pet Friendly',
    ],
    includes: [
      'Lancha deportiva ida y vuelta',
      'Coctel de bienvenida',
      'Almuerzo (4 opciones)',
      'Bebida',
      'Zonas sociales',
      'Piscina agua salada',
      'DJ en vivo',
      'Cama de playa',
      'Sillas asoleadoras',
      'Playa privada',
    ],
    notIncludes: [
      'Costo adicional por mascota segun politica del club',
      'Traslado hotel-muelle si no esta incluido',
      'Bebidas fuera de lo descrito en el plan',
      'Propinas y gastos personales',
    ],
    locales: {
      en: {
        title: 'Ibbiza Day Pass',
        subtitle: 'Rosario Islands',
        description:
          'Live DJ, saltwater pool, private beach and the best party on the islands. Pet friendly. 4 lunch options.',
        highlights: [
          'Live DJ',
          'Saltwater pool',
          'Private beach',
          'Pet Friendly',
        ],
        tag: 'Party',
      },
      fr: {
        title: 'Pasadia Ibbiza',
        subtitle: '\u00celes du Rosaire',
        description:
          'DJ live, piscine d\'eau sal\u00e9e, plage priv\u00e9e et la meilleure f\u00eate des \u00eeles. Pet friendly. 4 options de d\u00e9jeuner.',
        highlights: [
          'DJ live',
          'Piscine eau sal\u00e9e',
          'Plage priv\u00e9e',
          'Pet Friendly',
        ],
        tag: 'F\u00eate',
      },
    },
  },
  {
    id: 'pasadia-capri',
    title: 'Pasadia Capri',
    subtitle: 'Islas del Rosario',
    description:
      'OPEN BAR de 11AM a 1PM, host bilingue, tour panoramico, paddle board, snorkel, servicio de toallas y DJ en vivo los fines de semana. La experiencia premium definitiva.',
    image: '/images/caribetours/tour-capri.jpg',
    category: 'beach-club',
    departure: '8:15 AM',
    returnTime: '3:30 PM',
    priceFrom: 350000,
    currency: 'COP',
    tag: 'All-Inclusive',
    highlights: [
      'OPEN BAR 11AM-1PM',
      'Host bilingue',
      'DJ + Saxofon fines de semana',
      'Paddle board + Snorkel',
    ],
    includes: [
      'Bote deportivo ida y vuelta',
      'Host bilingue',
      'Coctel de bienvenida',
      'Tour panoramico 45 min',
      'Areas comunes',
      'Asoleadoras',
      'Servicio de toallas + agua dulce',
      'Almuerzo + bebida (5 opciones)',
      'Paddle board',
      'Mascara de snorkel',
      'OPEN BAR 11AM-1PM',
      '2x1 en bebidas 1PM-3:30PM',
    ],
    notIncludes: [
      'Traslado hotel-muelle si no esta incluido en tu reserva',
      'Bebidas despues del horario de open bar indicado',
      'Servicios spa o extras del hotel isla',
      'Propinas y gastos personales',
    ],
    locales: {
      en: {
        title: 'Capri Day Pass',
        subtitle: 'Rosario Islands',
        description:
          'OPEN BAR from 11AM to 1PM, bilingual host, panoramic tour, paddle board, snorkel, towel service and live DJ on weekends. The ultimate premium experience.',
        highlights: [
          'OPEN BAR 11AM-1PM',
          'Bilingual host',
          'DJ + Saxophone on weekends',
          'Paddle board + Snorkel',
        ],
        tag: 'All-Inclusive',
      },
      fr: {
        title: 'Pasadia Capri',
        subtitle: '\u00celes du Rosaire',
        description:
          'OPEN BAR de 11h \u00e0 13h, h\u00f4te bilingue, tour panoramique, paddle board, snorkel, service de serviettes et DJ live le week-end. L\'exp\u00e9rience premium ultime.',
        highlights: [
          'OPEN BAR 11h-13h',
          'H\u00f4te bilingue',
          'DJ + Saxophone le week-end',
          'Paddle board + Snorkel',
        ],
        tag: 'Tout Inclus',
      },
    },
  },
];

export const divingExperiences: Experience[] = [
  {
    id: 'inmersiones-recreativas',
    title: 'Inmersiones Recreativas',
    subtitle: 'Islas del Rosario - PADI Certified',
    description:
      'Dos inmersiones en diferentes sitios: paredes de coral, arrecifes o naufragios dentro del Parque Nacional Natural Corales del Rosario y San Bernardo.',
    image: '/images/caribetours/tour-buceo.jpg',
    category: 'diving',
    departure: '8:00 AM',
    returnTime: '3:00 PM - 4:15 PM',
    priceFrom: 450000,
    currency: 'COP',
    tag: 'Certificados',
    highlights: [
      '2 inmersiones PADI',
      'Parque Nacional Natural',
      'Equipo completo',
      'Programa DIVE TO HEAL',
    ],
    includes: [
      'Entrada Parque Nacional',
      'Seguro de buceo',
      'Barco ida y vuelta',
      'Sesion informativa',
      '2 inmersiones guiadas PADI',
      'Equipo de buceo completo',
      'Almuerzo en hotel islas',
    ],
    notIncludes: [
      'Certificacion PADI Open Water completa (esta experiencia son 2 inmersiones recreativas)',
      'Fotos o video subacuatico profesional',
      'Gastos no descritos y propinas',
    ],
    locales: {
      en: {
        title: 'Recreational Dives',
        subtitle: 'Rosario Islands - PADI Certified',
        description:
          'Two dives at different sites: coral walls, reefs or shipwrecks in the Corales del Rosario and San Bernardo National Park.',
        highlights: [
          '2 PADI dives',
          'National Natural Park',
          'Full equipment',
          'DIVE TO HEAL Program',
        ],
        tag: 'Certified',
      },
      fr: {
        title: 'Plong\u00e9es R\u00e9cr\u00e9atives',
        subtitle: '\u00celes du Rosaire - Certifi\u00e9 PADI',
        description:
          'Deux plong\u00e9es sur diff\u00e9rents sites : parois de corail, r\u00e9cifs ou \u00e9paves dans le Parc Naturel National Corales del Rosario et San Bernardo.',
        highlights: [
          '2 plong\u00e9es PADI',
          'Parc Naturel National',
          '\u00c9quipement complet',
          'Programme DIVE TO HEAL',
        ],
        tag: 'Certifi\u00e9s',
      },
    },
  },
  {
    id: 'minicurso-padi',
    title: 'Mini Curso PADI',
    subtitle: 'Discover Scuba Diving',
    description:
      'Perfecto para principiantes: entrenamiento en piscina y una inmersion en aguas abiertas en un vibrante arrecife de coral con guia experta.',
    image: '/images/caribetours/tour-minicurso.jpg',
    category: 'diving',
    departure: '8:00 AM',
    returnTime: '3:00 PM - 4:15 PM',
    priceFrom: 500000,
    currency: 'COP',
    tag: 'Principiantes',
    highlights: [
      'Sin experiencia previa',
      'Entrenamiento en piscina',
      'Arrecife de coral',
      'Certificado PADI',
    ],
    includes: [
      'Entrada Parque Nacional',
      'Seguro de buceo',
      'Barco ida y vuelta',
      'Sesion informativa',
      'Entrenamiento en piscina',
      'Inmersion en aguas abiertas',
      'Equipo de buceo completo',
      'Almuerzo en hotel islas',
    ],
    notIncludes: [
      'Certificacion PADI Open Water completa (esta experiencia es introduccion / Discover Scuba)',
      'Fotos o video profesional bajo el agua',
      'Gastos personales y propinas',
    ],
    locales: {
      en: {
        title: 'PADI Mini Course',
        subtitle: 'Discover Scuba Diving',
        description:
          'Perfect for beginners: pool training and an open-water dive in a vibrant coral reef with an expert guide.',
        highlights: [
          'No experience needed',
          'Pool training',
          'Coral reef',
          'PADI Certificate',
        ],
        tag: 'Beginners',
      },
      fr: {
        title: 'Mini Cours PADI',
        subtitle: 'Discover Scuba Diving',
        description:
          'Parfait pour les d\u00e9butants : entra\u00eenement en piscine et une plong\u00e9e en eaux libres dans un r\u00e9cif de corail vibrant avec un guide expert.',
        highlights: [
          'Aucune exp\u00e9rience requise',
          'Entra\u00eenement en piscine',
          'R\u00e9cif de corail',
          'Certificat PADI',
        ],
        tag: 'D\u00e9butants',
      },
    },
  },
];

export interface Accommodation {
  id: string;
  city: string;
  emoji: string;
  description: string;
  image: string;
  locales?: {
    en?: { city?: string; description?: string };
    fr?: { city?: string; description?: string };
  };
}

export const accommodations: Accommodation[] = [
  {
    id: 'islas-rosario',
    city: 'Islas del Rosario',
    emoji: '\ud83c\udf34',
    description:
      'Despierta frente al mar turquesa y siente la brisa del Caribe en alojamientos rodeados de naturaleza y tranquilidad. Vive dias de sol, snorkel, y noches estrelladas sobre el mar.',
    image: '/images/caribetours/tour-rosario-5.jpg',
    locales: {
      en: {
        description:
          'Wake up facing the turquoise sea and feel the Caribbean breeze in nature-surrounded lodgings. Enjoy sunny days, snorkeling and starlit nights over the sea.',
      },
      fr: {
        description:
          'R\u00e9veillez-vous face \u00e0 la mer turquoise et sentez la brise des Cara\u00efbes dans des h\u00e9bergements entour\u00e9s de nature. Vivez des journ\u00e9es ensoleill\u00e9es, du snorkeling et des nuits \u00e9toil\u00e9es sur la mer.',
      },
    },
  },
  {
    id: 'santa-marta',
    city: 'Santa Marta',
    emoji: '\ud83c\udf0a',
    description:
      'Conectate con la naturaleza entre montanas y playas cristalinas. Desde hospedajes boutique hasta villas privadas cerca del Tayrona.',
    image: '/images/accommodation/santamarta.png',
    locales: {
      en: {
        description:
          'Connect with nature between mountains and crystal-clear beaches. From boutique lodgings to private villas near Tayrona.',
      },
      fr: {
        description:
          'Connectez-vous avec la nature entre montagnes et plages cristallines. Des h\u00e9bergements boutique aux villas priv\u00e9es pr\u00e8s du Tayrona.',
      },
    },
  },
  {
    id: 'medellin',
    city: 'Medellin',
    emoji: '\ud83c\udfd9\ufe0f',
    description:
      'Disfruta de la ciudad de la eterna primavera con hospedajes modernos, vistas panoramicas y acceso a la mejor vida nocturna y gastronomia paisa.',
    image: '/images/accommodation/medellin.png',
    locales: {
      en: {
        city: 'Medellin',
        description:
          'Enjoy the city of eternal spring with modern lodgings, panoramic views and access to the best nightlife and local cuisine.',
      },
      fr: {
        city: 'Medell\u00edn',
        description:
          'Profitez de la ville de l\'\u00e9ternel printemps avec des h\u00e9bergements modernes, des vues panoramiques et acc\u00e8s \u00e0 la meilleure vie nocturne et gastronomie locale.',
      },
    },
  },
  {
    id: 'rincon-del-mar',
    city: 'Rincon del Mar',
    emoji: '\ud83c\udf05',
    description:
      'Descubre un paraiso escondido en la costa Caribe. Playas virgenes, atardeceres dorados y hospedajes que invitan a desconectarte.',
    image: '/images/caribetours/tour-rincon.jpg',
    locales: {
      en: {
        description:
          'Discover a hidden paradise on the Caribbean coast. Virgin beaches, golden sunsets and lodgings that invite you to disconnect.',
      },
      fr: {
        description:
          'D\u00e9couvrez un paradis cach\u00e9 sur la c\u00f4te Cara\u00efbe. Plages vierges, couchers de soleil dor\u00e9s et h\u00e9bergements qui invitent \u00e0 la d\u00e9connexion.',
      },
    },
  },
  {
    id: 'bogota',
    city: 'Bogota',
    emoji: '\ud83c\udfdb\ufe0f',
    description:
      'Vive la capital con estilo. Alojamientos con confort, ubicacion estrategica y diseno contemporaneo para viajes de negocios o escapadas urbanas.',
    image: '/images/caribetours/tour-bogota.jpg',
    locales: {
      en: {
        city: 'Bogota',
        description:
          'Experience the capital in style. Accommodation with comfort, strategic location and contemporary design for business or urban escapes.',
      },
      fr: {
        city: 'Bogota',
        description:
          'Vivez la capitale avec style. H\u00e9bergements confortables, emplacement strat\u00e9gique et design contemporain pour voyages d\'affaires ou escapades urbaines.',
      },
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Maria Fernandez',
    location: 'Ciudad de Mexico',
    rating: 5,
    text: 'La experiencia de 5 islas fue increible. El equipo fue super atento y cada detalle estuvo perfecto. El plancton bioluminiscente es algo que nunca olvidare.',
    avatar: 'MF',
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'New York, USA',
    rating: 5,
    text: 'Best tour experience in the Caribbean. The Capri beach club was absolutely stunning with the open bar and live DJ. Highly recommend!',
    avatar: 'JW',
  },
  {
    id: 3,
    name: 'Carlos Gutierrez',
    location: 'Buenos Aires, Argentina',
    rating: 5,
    text: 'El pasadia en Pa\'ue fue espectacular. Las instalaciones de primera, la comida deliciosa y el paisaje de pelicula. Volveremos seguro.',
    avatar: 'CG',
  },
  {
    id: 4,
    name: 'Sophie Laurent',
    location: 'Paris, France',
    rating: 5,
    text: 'Le mini cours de plongee etait fantastique! Les instructeurs PADI etaient tres professionnels et les recifs coralliens magnifiques.',
    avatar: 'SL',
  },
  {
    id: 5,
    name: 'Ana Rodriguez',
    location: 'Madrid, Espana',
    rating: 5,
    text: 'Cartagena Luxury Tours nos organizo todo el viaje de principio a fin. Los alojamientos en las Islas del Rosario fueron un sueno hecho realidad.',
    avatar: 'AR',
  },
  {
    id: 6,
    name: 'David Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'The diving experience was world-class. Two amazing dives at Rosario Islands with incredible coral formations. The Dive to Heal program is inspiring.',
    avatar: 'DC',
  },
];

export interface Stat {
  value: number;
  label: string;
  suffix: string;
  locales?: {
    en?: { label?: string; suffix?: string };
    fr?: { label?: string; suffix?: string };
  };
}

export const stats: Stat[] = [
  {
    value: 500,
    label: 'Clientes felices',
    suffix: '+',
    locales: {
      en: { label: 'Happy clients' },
      fr: { label: 'Clients heureux' },
    },
  },
  {
    value: 12,
    label: 'Destinos unicos',
    suffix: '',
    locales: {
      en: { label: 'Unique destinations' },
      fr: { label: 'Destinations uniques' },
    },
  },
  {
    value: 5,
    label: 'Calificacion promedio',
    suffix: '★',
    locales: {
      en: { label: 'Average rating', suffix: '★' },
      fr: { label: 'Note moyenne', suffix: '★' },
    },
  },
];

export const faqs = [
  {
    question: 'Que debo llevar a los tours de islas?',
    answer:
      'Recomendamos llevar protector solar biodegradable, traje de bano, toalla, ropa comoda para el regreso, efectivo para gastos adicionales y camara acuatica si tienes.',
  },
  {
    question: 'Los tours se realizan en caso de lluvia?',
    answer:
      'Los tours estan sujetos a condiciones climaticas. En caso de mal tiempo, te ofrecemos reprogramar sin costo adicional o el reembolso segun nuestras politicas de cancelacion.',
  },
  {
    question: 'Puedo llevar mi mascota?',
    answer:
      'Solo Pasadia Ibbiza es Pet Friendly. Se permite el ingreso de mascotas pequenas con bozal y vacunas al dia, con un costo adicional de $110.000 COP por mascota.',
  },
  {
    question: 'Cual es la politica de cancelacion?',
    answer:
      'Puedes cancelar hasta 24 horas antes del tour para reagendar o recibir un reembolso del 70-80% segun la experiencia. Cancelaciones tardias o no-shows no aplican para reembolso.',
  },
  {
    question: 'Se necesita experiencia previa para bucear?',
    answer:
      'No. Nuestro Mini Curso PADI esta disenado para principiantes absolutos. Incluye entrenamiento en piscina y una inmersion guiada en aguas abiertas. Importante: despues de bucear debes esperar 18 horas para tomar un avion.',
  },
  {
    question: 'Desde donde salen los tours?',
    answer:
      'La mayoria de tours incluyen recogida en hoteles de Bocagrande, Laguito, Centro y Zona Norte (Marbella, Crespo, La Boquilla). Los beach clubs salen desde muelles especificos como La Bodeguita o Marina Todomar.',
  },
  {
    question: 'Hay descuentos para grupos?',
    answer:
      'Si. Ofrecemos descuentos en todos los tours para grupos desde 4 personas. Para cotizar fechas y disponibilidad, escribenos por WhatsApp.',
  },
  {
    question: 'Que metodos de pago aceptan?',
    answer:
      'Aceptamos transferencias bancarias, Nequi, Daviplata, tarjetas de credito y debito. Para reservas internacionales tambien aceptamos PayPal y Wise.',
  },
];

export const faqsEn = [
  {
    question: 'What should I bring on island tours?',
    answer:
      'We recommend biodegradable sunscreen, swimsuit, towel, comfortable clothes for the return trip, cash for extras and an underwater camera if you have one.',
  },
  {
    question: 'Do tours run in rainy weather?',
    answer:
      'Tours depend on weather conditions. In case of bad weather, we offer free rescheduling or a refund according to our cancellation policy.',
  },
  {
    question: 'Can I bring my pet?',
    answer:
      'Only Pasadia Ibbiza is Pet Friendly. Small pets are allowed with a muzzle and up-to-date vaccines, with an additional fee of $110,000 COP per pet.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'You can cancel up to 24 hours before the tour to reschedule or receive a 70-80% refund depending on the experience. Late cancellations or no-shows are not eligible for refund.',
  },
  {
    question: 'Do I need previous diving experience?',
    answer:
      'No. Our PADI Mini Course is designed for complete beginners. It includes pool training and a guided open-water dive. Important: after diving you must wait 18 hours before flying.',
  },
  {
    question: 'Where do tours depart from?',
    answer:
      'Most tours include hotel pick-up in Bocagrande, Laguito, Centro and the North Zone (Marbella, Crespo, La Boquilla). Beach clubs depart from specific docks like La Bodeguita or Marina Todomar.',
  },
  {
    question: 'Are there group discounts?',
    answer:
      'Yes. We offer discounts on all tours for groups of 4 or more. Contact us on WhatsApp for rates and availability.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, Nequi, Daviplata, credit and debit cards. For international bookings we also accept PayPal and Wise.',
  },
];

export const faqsFr = [
  {
    question: 'Que dois-je apporter pour les tours d\'\u00eeles ?',
    answer:
      'Nous recommandons une cr\u00e8me solaire biod\u00e9gradable, un maillot de bain, une serviette, des v\u00eatements confortables pour le retour, de l\'argent liquide pour les extras et un appareil photo aquatique si vous en avez un.',
  },
  {
    question: 'Les tours ont-ils lieu en cas de pluie ?',
    answer:
      'Les tours d\u00e9pendent des conditions m\u00e9t\u00e9orologiques. En cas de mauvais temps, nous proposons un report gratuit ou un remboursement selon notre politique d\'annulation.',
  },
  {
    question: 'Puis-je emmener mon animal de compagnie ?',
    answer:
      'Seul le Pasadia Ibbiza est Pet Friendly. Les petits animaux sont admis avec museli\u00e8re et vaccins \u00e0 jour, moyennant un suppl\u00e9ment de 110 000 COP par animal.',
  },
  {
    question: 'Quelle est la politique d\'annulation ?',
    answer:
      'Vous pouvez annuler jusqu\'\u00e0 24 heures avant l\'excursion pour reporter ou obtenir un remboursement de 70-80 % selon l\'exp\u00e9rience. Les annulations tardives ou absences ne sont pas remboursables.',
  },
  {
    question: 'Faut-il une exp\u00e9rience pr\u00e9alable en plong\u00e9e ?',
    answer:
      'Non. Notre mini-cours PADI est con\u00e7u pour les d\u00e9butants complets. Il comprend un entra\u00eenement en piscine et une plong\u00e9e guid\u00e9e en eaux libres. Important : apr\u00e8s la plong\u00e9e, vous devez attendre 18 heures avant de prendre l\'avion.',
  },
  {
    question: 'D\'o\u00f9 partent les excursions ?',
    answer:
      'La plupart incluent la prise en charge \u00e0 l\'h\u00f4tel \u00e0 Bocagrande, Laguito, Centro et la Zone Nord (Marbella, Crespo, La Boquilla). Les beach clubs partent de quais sp\u00e9cifiques comme La Bodeguita ou Marina Todomar.',
  },
  {
    question: 'Y a-t-il des r\u00e9ductions pour les groupes ?',
    answer:
      'Oui. Nous offrons des r\u00e9ductions sur toutes les excursions pour les groupes \u00e0 partir de 4 personnes. Contactez-nous sur WhatsApp pour les tarifs et disponibilit\u00e9s.',
  },
  {
    question: 'Quels modes de paiement acceptez-vous ?',
    answer:
      'Nous acceptons les virements bancaires, Nequi, Daviplata, cartes de cr\u00e9dit et de d\u00e9bit. Pour les r\u00e9servations internationales, nous acceptons aussi PayPal et Wise.',
  },
];

export function localizeExperience(exp: Experience, locale: string): Experience {
  if (locale === 'es' || !exp.locales?.[locale as keyof typeof exp.locales]) return exp;
  return { ...exp, ...exp.locales[locale as keyof typeof exp.locales] };
}

export function localizeAccommodation(acc: Accommodation, locale: string): Accommodation {
  if (locale === 'es' || !acc.locales?.[locale as keyof typeof acc.locales]) return acc;
  return { ...acc, ...acc.locales[locale as keyof typeof acc.locales] };
}

export function localizeStat(stat: Stat, locale: string): Stat {
  if (locale === 'es' || !stat.locales?.[locale as keyof typeof stat.locales]) return stat;
  return { ...stat, ...stat.locales[locale as keyof typeof stat.locales] };
}

export function getLocalizedFaqs(locale: string) {
  if (locale === 'en') return faqsEn;
  if (locale === 'fr') return faqsFr;
  return faqs;
}
