'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  startTransition,
} from 'react';

export type Locale = 'es' | 'en' | 'fr';

type Messages = Record<string, string>;

const DICT: Record<Locale, Messages> = {
  es: {
    'nav.home': 'Inicio',
    'nav.all': 'Todos',
    'nav.toursRosario': 'Islas del Rosario',
    'nav.traditional': 'Tradicionales',
    'nav.luxury': 'Luxury',
    'nav.exclusive': 'Privados',
    'nav.experiences': 'Experiencias',
    'nav.beachClubs': 'Beach Clubs',
    'nav.diving': 'Buceo',
    'nav.accommodation': 'Alojamiento',
    'nav.privateServices': 'Otros servicios privados y exclusivos',
    'nav.privateServicesShort': 'Servicios exclusivos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.cartagena': 'Cartagena',
    'nav.bogota': 'Bogotá',
    'nav.medellin': 'Medellin',
    'nav.book': 'Reservar ahora',
    'nav.bookWhatsapp': 'Reservar por WhatsApp',
    'fab.whatsapp': 'Escríbenos por WhatsApp',
    'promo.badge': 'Ofertas',
    'promo.title': 'Descuentos en todos los tours',
    'promo.groups':
      'Grupos de 4 personas en adelante: precios especiales en todas nuestras experiencias.',
    'promo.clubs':
      'Al reservar tours: cortesías en las discotecas más famosas de Cartagena, con bebida de cortesía según disponibilidad.',
    'promo.restaurants': 'También cortesías y beneficios en restaurantes aliados.',
    'promo.discountGlass1':
      'Grupos de 4 personas en adelante reciben descuentos en todos nuestros tours',
    'promo.discountGlass2':
      'Al reservar tours certificados en las direcciones más famosas de Cartagena, obtén beneficios',
    'promo.discountGlass3': 'También recibirás beneficios en restaurantes aliados',
    'promo.cta': 'Consultar por WhatsApp',
    'card.viewDetails': 'Ver detalles',
    'card.bookWhatsapp': 'Reservar',
    'card.bookWhatsappDetail': 'Reservar este tour',
    'modal.close': 'Cerrar',
    'modal.includes': 'Incluye',
    'modal.notIncludes': 'No incluye',
    'modal.cancellation': 'Política de cancelación',
    'modal.highlights': 'Destacados',
    'modal.description': 'Descripción',
    'modal.scheduleHeading': 'Horario',
    'modal.departureShort': 'Salida',
    'modal.returnShort': 'Regreso',
    'card.reserveThisTour': 'Reservar este tour',
    'private.chip': 'Privados & exclusivos',
    'private.title': 'Otros servicios privados y exclusivos',
    'private.subtitle':
      'Traslados, yates, celebraciones y experiencias a medida. Disponibilidad y tarifas según temporada.',
    'private.cta': 'Solicitar información',
    'contactTeaser.title': '¿Hablamos de tu viaje?',
    'contactTeaser.body':
      'Conoce al equipo, revisa la información de contacto y escríbenos por WhatsApp desde la página de contacto.',
    'contactTeaser.button': 'Ir a contacto',
    'contactPage.title': 'Contacto',
    'contactPage.photoAlt': 'Foto de perfil',
    'contactPage.chip': 'TU ANFITRIÓN',
    'contactPage.whatsappCta': 'Escribir por WhatsApp',
    'contactPage.location': 'Bogotá, Medellín, Cartagena, Colombia',
    'contactPage.bio.p1':
      'Soy tu punto de contacto en Cartagena para organizar tours por las Islas del Rosario, beach clubs, buceo y planes a medida. Trabajo con operadores locales de confianza para que solo te preocupes por disfrutar.',
    'contactPage.bio.p2':
      'Cuéntame fechas, número de personas y qué experiencias te interesan: te ayudo a armar el itinerario y resolver dudas antes de reservar.',
    'cancellation.default':
      'Puedes cancelar o reprogramar con al menos 24 horas de anticipación según disponibilidad. Cancelaciones con menos aviso o inasistencia pueden no aplicar para reembolso. El porcentaje de reembolso puede variar según el tour y la temporada; el detalle te lo confirmamos al reservar.',

    // Hero Section (alineado con caribetours.lovable.app)
    'hero.location': 'Cartagena de Indias, Colombia',
    'hero.headline.start': 'El Caribe',
    'hero.headline.mid': 'en su máximo',
    'hero.headline.end': 'esplendor',
    'hero.subtitle':
      'Experiencias únicas en las Islas del Rosario, beach clubs de lujo, buceo certificado y destinos exclusivos. Vive el Caribe como mereces.',
    'hero.cta': 'Explorar tours',
    'hero.ctaAdvisor': 'Hablar con un asesor',
    'hero.scroll': 'SCROLL',

    // About Section
    'about.chip': 'BOLIVAR, COLOMBIA',
    'about.imageChip': 'Patrimonio UNESCO · Centro Histórico',
    'about.title': 'Donde queda Cartagena?',
    'about.text1':
      'Cartagena de Indias esta ubicada en la costa norte de Colombia, a orillas del mar Caribe. Es una de las ciudades mas emblematicas del pais, reconocida mundialmente por su riqueza historica, sus murallas coloniales y sus playas de aguas turquesa.',
    'about.text2':
      'Gracias a su ubicacion estrategica, Cartagena es un destino ideal para quienes buscan combinar cultura, historia y experiencias inolvidables en el Caribe colombiano.',
    'about.f1.title': 'Costa Caribe',
    'about.f1.desc': 'Costa norte de Colombia, a orillas del mar Caribe',
    'about.f2.title': 'Clima Tropical',
    'about.f2.desc': 'Temperatura promedio de 28°C todo el ano',
    'about.f3.title': 'Playas Pristinas',
    'about.f3.desc': 'Aguas turquesa y arenas blancas unicas',
    'about.f4.title': 'Islas Paradisiacas',
    'about.f4.desc': 'Archipiélago de las Islas del Rosario',

    // Stats Section
    'stats.travelers': 'VIAJEROS FELICES',
    'stats.tours': 'TOURS REALIZADOS',
    'stats.satisfaction': 'SATISFACCION',
    'stats.experience': 'ANOS DE EXPERIENCIA',

    // Experiences Section
    'experiences.chip': 'EXPERIENCIAS',
    'experiences.title': 'Vive el Caribe Colombiano',
    'experiences.subtitle':
      'Desde tours por islas paradisiacas hasta fiestas nocturnas en la bahia. Cada experiencia esta disenada para ser inolvidable.',
    'experiences.tab.all': 'Todos',
    'experiences.tab.islands': 'Tours de Islas',
    'experiences.tab.beaches': 'Playas',
    'experiences.tab.nightlife': 'Vida Nocturna',

    // Beach Clubs Section
    'beachClubs.title': 'Beach Clubs en Islas del Rosario',
    'beachClubs.subtitle':
      'Los mejores beach clubs del Caribe colombiano. Open bar, DJ en vivo, gastronomia gourmet y las playas mas exclusivas de las islas.',

    // Diving Section
    'diving.chip': 'BUCEO PADI',
    'diving.title': 'Buceo en Islas del Rosario',
    'diving.subtitle':
      'Explora el Parque Nacional Natural Corales del Rosario y San Bernardo. Inmersiones guiadas por profesionales certificados PADI entre arrecifes, naufragios y una biodiversidad marina espectacular.',
    'diving.eco.title': 'Programa DIVE TO HEAL',
    'diving.eco.text':
      'Una parte de tu pago apoya nuestro programa para la restauracion de corales y el buceo adaptado para personas con discapacidad.',

    // Gallery Section
    'gallery.chip': 'GALERIA',
    'gallery.title': 'Momentos Inolvidables',

    // Accommodation Section
    'accommodation.chip': 'ALOJAMIENTO',
    'accommodation.title': 'Alojamiento Unico en los Mejores Destinos',
    'accommodation.subtitle':
      'Descubre la magia de Colombia a traves de experiencias autenticas y alojamientos con encanto. Desde el lujo caribeno hasta la energia urbana.',
    'accommodation.tagline':
      'Cada destino, una experiencia. Alojamientos seleccionados por su confort, ubicacion, seguridad y encanto local.',

    // Testimonials Section
    'testimonials.chip': 'TESTIMONIOS',
    'testimonials.title': 'Lo Que Dicen Nuestros Viajeros',
    'testimonials.subtitle':
      'Cientos de clientes satisfechos confían en nosotros para vivir el Caribe en su máximo esplendor.',

    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Resolvemos tus dudas para que solo te preocupes por disfrutar.',
    'faq.q1': 'Que debo llevar a los tours de islas?',
    'faq.a1':
      'Recomendamos llevar protector solar biodegradable, traje de bano, toalla, ropa comoda para el regreso, efectivo para gastos adicionales y camara acuatica si tienes.',
    'faq.q2': 'Los tours se realizan en caso de lluvia?',
    'faq.a2':
      'Los tours estan sujetos a condiciones climaticas. En caso de mal tiempo, te ofrecemos reprogramar sin costo adicional o el reembolso segun nuestras politicas de cancelacion.',
    'faq.q3': 'Puedo llevar mi mascota?',
    'faq.a3':
      'Solo Pasadia Ibbiza es Pet Friendly. Se permite el ingreso de mascotas pequenas con bozal y vacunas al dia, con un costo adicional de $110.000 COP por mascota.',
    'faq.q4': 'Cual es la politica de cancelacion?',
    'faq.a4':
      'Puedes cancelar hasta 24 horas antes del tour para reagendar o recibir un reembolso del 70-80% segun la experiencia. Cancelaciones tardias o no-shows no aplican para reembolso.',
    'faq.q5': 'Se necesita experiencia previa para bucear?',
    'faq.a5':
      'No. Nuestro Mini Curso PADI esta disenado para principiantes absolutos. Incluye entrenamiento en piscina y una inmersion guiada en aguas abiertas. Importante: despues de bucear debes esperar 18 horas para tomar un avion.',
    'faq.q6': 'Desde donde salen los tours?',
    'faq.a6':
      'La mayoria de tours incluyen recogida en hoteles de Bocagrande, Laguito, Centro y Zona Norte (Marbella, Crespo, La Boquilla). Los beach clubs salen desde muelles especificos como La Bodeguita o Marina Todomar.',
    'faq.q7': 'Hay descuentos para grupos?',
    'faq.a7':
      'Si. Ofrecemos descuentos en todos los tours para grupos desde 4 personas. Para cotizar fechas y disponibilidad, escribenos por WhatsApp.',
    'faq.q8': 'Que metodos de pago aceptan?',
    'faq.a8':
      'Aceptamos transferencias bancarias, Nequi, Daviplata, tarjetas de credito y debito. Para reservas internacionales tambien aceptamos PayPal y Wise.',

    // Newsletter Section
    'newsletter.title': 'No te Pierdas Nada',
    'newsletter.subtitle':
      'Recibe ofertas exclusivas, descuentos especiales y las ultimas novedades de nuestras experiencias directamente en tu correo.',
    'newsletter.placeholder': 'Tu correo electronico',
    'newsletter.button': 'Suscribirme',
    'newsletter.loading': 'Enviando...',
    'newsletter.disclaimer': 'Sin spam. Puedes darte de baja en cualquier momento.',
    'newsletter.success': 'Te has suscrito exitosamente. Bienvenido al paraiso!',

    // Trip Builder Section
    'tripBuilder.chip': 'ARMA TU VIAJE',
    'tripBuilder.title': 'Crea tu Paquete Personalizado',
    'tripBuilder.subtitle':
      'Selecciona las experiencias que mas te gustan y recibe una cotizacion personalizada con descuento por paquete.',
    'tripBuilder.package': 'Tu Paquete',
    'tripBuilder.empty': 'Selecciona experiencias para armar tu paquete personalizado.',
    'tripBuilder.discount': 'Descuento paquete (10%)',
    'tripBuilder.total': 'Total Estimado',
    'tripBuilder.discountChip': '10% descuento por paquete de 3+',
    'tripBuilder.cta': 'Cotizar por WhatsApp',
    'tripBuilder.cat.island': 'Tour de Islas',
    'tripBuilder.cat.beach': 'Playa',
    'tripBuilder.cat.nightlife': 'Nocturno',
    'tripBuilder.cat.beachClub': 'Beach Club',
    'tripBuilder.cat.diving': 'Buceo',

    // Footer
    'footer.description':
      'Nos especializamos en crear experiencias autenticas, seguras y memorables para viajeros que desean descubrir Colombia de una forma diferente.',
    'footer.tours': 'Tours',
    'footer.experiences': 'Experiencias',
    'footer.services': 'Servicios',
    'footer.cities': 'Ciudades',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.terms': 'Terminos',
    'footer.privacy': 'Privacidad',
    'footer.cookies': 'Cookies',

    // Price label
    'price.from': 'DESDE',

    // Scroll to top
    'scrollTop': 'Volver arriba',
  },
  en: {
    'nav.home': 'Home',
    'nav.all': 'All',
    'nav.toursRosario': 'Rosario Islands',
    'nav.traditional': 'Traditional',
    'nav.luxury': 'Luxury',
    'nav.exclusive': 'Private',
    'nav.experiences': 'Experiences',
    'nav.beachClubs': 'Beach clubs',
    'nav.diving': 'Diving',
    'nav.accommodation': 'Accommodation',
    'nav.privateServices': 'Other private & exclusive services',
    'nav.privateServicesShort': 'Exclusive services',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cartagena': 'Cartagena',
    'nav.bogota': 'Bogotá',
    'nav.medellin': 'Medellin',
    'nav.book': 'Book now',
    'nav.bookWhatsapp': 'Book on WhatsApp',
    'fab.whatsapp': 'Message us on WhatsApp',
    'promo.badge': 'Offers',
    'promo.title': 'Discounts on every tour',
    'promo.groups': 'Groups of 4 or more: special rates on all our experiences.',
    'promo.clubs':
      'When you book tours: complimentary perks at Cartagena\u2019s top nightclubs, with a complimentary drink subject to availability.',
    'promo.restaurants': 'Complimentary perks and benefits at partner restaurants too.',
    'promo.discountGlass1': 'Groups of 4 or more receive discounts on all our tours',
    'promo.discountGlass2':
      'Book certified tours at Cartagena\'s most iconic spots and unlock exclusive perks',
    'promo.discountGlass3': 'Partner restaurants offer extra benefits for our travelers too',
    'promo.cta': 'Ask on WhatsApp',
    'card.viewDetails': 'View details',
    'card.bookWhatsapp': 'WhatsApp',
    'modal.close': 'Close',
    'modal.includes': "What's included",
    'modal.notIncludes': "What's not included",
    'modal.cancellation': 'Cancellation policy',
    'modal.highlights': 'Highlights',
    'modal.description': 'Description',
    'modal.scheduleHeading': 'Schedule',
    'modal.departureShort': 'Departure',
    'modal.returnShort': 'Return',
    'card.reserveThisTour': 'Book this tour',
    'private.chip': 'Private & exclusive',
    'private.title': 'Other private & exclusive services',
    'private.subtitle':
      'Transfers, yachts, celebrations and tailor-made experiences. Availability and rates vary by season.',
    'private.cta': 'Request information',
    'contactTeaser.title': 'Planning your trip?',
    'contactTeaser.body':
      'Meet the team, see contact options and message us on WhatsApp from the contact page.',
    'contactTeaser.button': 'Go to contact',
    'contactPage.title': 'Contact',
    'contactPage.photoAlt': 'Profile photo',
    'contactPage.chip': 'YOUR HOST',
    'contactPage.whatsappCta': 'Message on WhatsApp',
    'contactPage.location': 'Cartagena, Bolivar, Colombia',
    'contactPage.bio.p1':
      'I am your local contact in Cartagena for Rosario Islands tours, beach clubs, diving and custom plans. I work with trusted local operators so you can focus on enjoying.',
    'contactPage.bio.p2':
      'Tell me your dates, group size and the experiences you want \u2014 I will help plan your itinerary and answer questions before you book.',
    'cancellation.default':
      'You may cancel or reschedule with at least 24 hours\u2019 notice subject to availability. Late cancellations or no-shows may not be eligible for a refund. Refund percentage may vary by tour and season; we confirm details when you book.',

    // Hero Section
    'hero.location': 'Cartagena de Indias, Colombia',
    'hero.headline.start': 'The Caribbean',
    'hero.headline.mid': 'at its fullest',
    'hero.headline.end': 'splendor',
    'hero.subtitle':
      'Unique experiences in the Rosario Islands, luxury beach clubs, certified diving and exclusive destinations. Experience the Caribbean as you deserve.',
    'hero.cta': 'Explore tours',
    'hero.ctaAdvisor': 'Talk to an advisor',
    'hero.scroll': 'SCROLL',

    // About Section
    'about.chip': 'BOLIVAR, COLOMBIA',
    'about.imageChip': 'UNESCO Heritage \u00b7 Historic Center',
    'about.title': 'Where is Cartagena?',
    'about.text1':
      'Cartagena de Indias is located on the northern coast of Colombia, on the shores of the Caribbean Sea. It is one of the most iconic cities in the country, recognised worldwide for its historical heritage, colonial walls and turquoise-water beaches.',
    'about.text2':
      'Thanks to its strategic location, Cartagena is the ideal destination for those seeking to combine culture, history and unforgettable experiences in the Colombian Caribbean.',
    'about.f1.title': 'Caribbean Coast',
    'about.f1.desc': 'Northern coast of Colombia, on the Caribbean Sea',
    'about.f2.title': 'Tropical Climate',
    'about.f2.desc': 'Average temperature of 28\u00b0C year-round',
    'about.f3.title': 'Pristine Beaches',
    'about.f3.desc': 'Unique turquoise waters and white sands',
    'about.f4.title': 'Paradise Islands',
    'about.f4.desc': 'Rosario Islands Archipelago',

    // Stats Section
    'stats.travelers': 'HAPPY TRAVELERS',
    'stats.tours': 'TOURS COMPLETED',
    'stats.satisfaction': 'SATISFACTION',
    'stats.experience': 'YEARS OF EXPERIENCE',

    // Experiences Section
    'experiences.chip': 'EXPERIENCES',
    'experiences.title': 'Experience the Colombian Caribbean',
    'experiences.subtitle':
      'From tours through paradise islands to nightlife parties on the bay. Every experience is designed to be unforgettable.',
    'experiences.tab.all': 'All',
    'experiences.tab.islands': 'Island Tours',
    'experiences.tab.beaches': 'Beaches',
    'experiences.tab.nightlife': 'Nightlife',

    // Beach Clubs Section
    'beachClubs.title': 'Beach Clubs in the Rosario Islands',
    'beachClubs.subtitle':
      'The best beach clubs in the Colombian Caribbean. Open bar, live DJ, gourmet cuisine and the most exclusive beaches on the islands.',

    // Diving Section
    'diving.chip': 'PADI DIVING',
    'diving.title': 'Diving in the Rosario Islands',
    'diving.subtitle':
      'Explore the Corales del Rosario and San Bernardo National Park. PADI-certified guided dives among reefs, shipwrecks and spectacular marine biodiversity.',
    'diving.eco.title': 'DIVE TO HEAL Program',
    'diving.eco.text':
      'A portion of your payment supports our coral restoration program and adaptive diving for people with disabilities.',

    // Gallery Section
    'gallery.chip': 'GALLERY',
    'gallery.title': 'Unforgettable Moments',

    // Accommodation Section
    'accommodation.chip': 'ACCOMMODATION',
    'accommodation.title': 'Unique Stays in the Best Destinations',
    'accommodation.subtitle':
      'Discover the magic of Colombia through authentic experiences and charming accommodation. From Caribbean luxury to urban energy.',
    'accommodation.tagline':
      'Every destination, an experience. Accommodation selected for comfort, location, safety and local charm.',

    // Testimonials Section
    'testimonials.chip': 'TESTIMONIALS',
    'testimonials.title': 'What Our Travelers Say',
    'testimonials.subtitle':
      'Hundreds of satisfied clients trust us to experience the Caribbean at its finest.',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'We answer your questions so you can focus on enjoying.',
    'faq.q1': 'What should I bring on island tours?',
    'faq.a1':
      'We recommend biodegradable sunscreen, swimsuit, towel, comfortable clothes for the return trip, cash for extras and an underwater camera if you have one.',
    'faq.q2': 'Do tours run in rainy weather?',
    'faq.a2':
      'Tours depend on weather conditions. In case of bad weather, we offer free rescheduling or a refund according to our cancellation policy.',
    'faq.q3': 'Can I bring my pet?',
    'faq.a3':
      'Only Pasadia Ibbiza is Pet Friendly. Small pets are allowed with a muzzle and up-to-date vaccines, with an additional fee of $110,000 COP per pet.',
    'faq.q4': 'What is the cancellation policy?',
    'faq.a4':
      'You can cancel up to 24 hours before the tour to reschedule or receive a 70-80% refund depending on the experience. Late cancellations or no-shows are not eligible for refund.',
    'faq.q5': 'Do I need previous diving experience?',
    'faq.a5':
      'No. Our PADI Mini Course is designed for complete beginners. It includes pool training and a guided open-water dive. Important: after diving you must wait 18 hours before flying.',
    'faq.q6': 'Where do tours depart from?',
    'faq.a6':
      'Most tours include hotel pick-up in Bocagrande, Laguito, Centro and the North Zone (Marbella, Crespo, La Boquilla). Beach clubs depart from specific docks like La Bodeguita or Marina Todomar.',
    'faq.q7': 'Are there group discounts?',
    'faq.a7':
      'Yes. We offer discounts on all tours for groups of 4 or more. Contact us on WhatsApp for rates and availability.',
    'faq.q8': 'What payment methods do you accept?',
    'faq.a8':
      'We accept bank transfers, Nequi, Daviplata, credit and debit cards. For international bookings we also accept PayPal and Wise.',

    // Newsletter Section
    'newsletter.title': "Don't Miss a Thing",
    'newsletter.subtitle':
      'Receive exclusive offers, special discounts and the latest news about our experiences directly in your inbox.',
    'newsletter.placeholder': 'Your email address',
    'newsletter.button': 'Subscribe',
    'newsletter.loading': 'Sending...',
    'newsletter.disclaimer': 'No spam. You can unsubscribe at any time.',
    'newsletter.success': 'You have subscribed successfully. Welcome to paradise!',

    // Trip Builder Section
    'tripBuilder.chip': 'BUILD YOUR TRIP',
    'tripBuilder.title': 'Create Your Custom Package',
    'tripBuilder.subtitle':
      'Select the experiences you like the most and get a custom quote with a package discount.',
    'tripBuilder.package': 'Your Package',
    'tripBuilder.empty': 'Select experiences to build your custom package.',
    'tripBuilder.discount': 'Package discount (10%)',
    'tripBuilder.total': 'Estimated Total',
    'tripBuilder.discountChip': '10% discount for 3+ package',
    'tripBuilder.cta': 'Get a quote on WhatsApp',
    'tripBuilder.cat.island': 'Island Tour',
    'tripBuilder.cat.beach': 'Beach',
    'tripBuilder.cat.nightlife': 'Nightlife',
    'tripBuilder.cat.beachClub': 'Beach Club',
    'tripBuilder.cat.diving': 'Diving',

    // Footer
    'footer.description':
      'We specialize in creating authentic, safe and memorable experiences for travelers who want to discover Colombia in a different way.',
    'footer.tours': 'Tours',
    'footer.experiences': 'Experiences',
    'footer.services': 'Services',
    'footer.cities': 'Cities',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',

    // Price label
    'price.from': 'FROM',

    // Scroll to top
    'scrollTop': 'Back to top',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.all': 'Tous',
    'nav.toursRosario': '\u00celes du Rosaire',
    'nav.traditional': 'Traditionnels',
    'nav.luxury': 'Luxury',
    'nav.exclusive': 'Prives',
    'nav.experiences': 'Exp\u00e9riences',
    'nav.beachClubs': 'Beach clubs',
    'nav.diving': 'Plong\u00e9e',
    'nav.accommodation': 'H\u00e9bergement',
    'nav.privateServices': 'Autres services priv\u00e9s et exclusifs',
    'nav.privateServicesShort': 'Services exclusifs',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cartagena': 'Cartagene',
    'nav.bogota': 'Bogota',
    'nav.medellin': 'Medellin',
    'nav.book': 'R\u00e9server maintenant',
    'nav.bookWhatsapp': 'R\u00e9server sur WhatsApp',
    'fab.whatsapp': '\u00c9crivez-nous sur WhatsApp',
    'promo.badge': 'Offres',
    'promo.title': 'R\u00e9ductions sur toutes les excursions',
    'promo.groups':
      'Groupes \u00e0 partir de 4 personnes : tarifs pr\u00e9f\u00e9rentiels sur toutes nos exp\u00e9riences.',
    'promo.clubs':
      'Lors de la r\u00e9servation d\u2019excursions : courtoisies dans les discoth\u00e8ques les plus connues de Carthag\u00e8ne, avec boisson offerte selon disponibilit\u00e9.',
    'promo.restaurants': 'Courtoisies \u00e9galement dans des restaurants partenaires.',
    'promo.discountGlass1':
      'Les groupes \u00e0 partir de 4 personnes b\u00e9n\u00e9ficient de r\u00e9ductions sur toutes nos excursions',
    'promo.discountGlass2':
      'En r\u00e9servant des excursions certifi\u00e9es dans les lieux incontournables de Carthag\u00e8ne, profitez d\u2019avantages',
    'promo.discountGlass3': 'Des avantages \u00e9galement chez les restaurants partenaires',
    'promo.cta': 'Demander sur WhatsApp',
    'card.viewDetails': 'Voir les d\u00e9tails',
    'card.bookWhatsapp': 'WhatsApp',
    'modal.close': 'Fermer',
    'modal.includes': 'Inclus',
    'modal.notIncludes': 'Non inclus',
    'modal.cancellation': "Politique d'annulation",
    'modal.highlights': 'Points forts',
    'modal.description': 'Description',
    'modal.scheduleHeading': 'Horaires',
    'modal.departureShort': 'D\u00e9part',
    'modal.returnShort': 'Retour',
    'card.reserveThisTour': 'R\u00e9server cette excursion',
    'private.chip': 'Priv\u00e9s & exclusifs',
    'private.title': 'Autres services priv\u00e9s et exclusifs',
    'private.subtitle':
      'Transferts, yachts, c\u00e9l\u00e9brations et exp\u00e9riences sur mesure. Disponibilit\u00e9 et tarifs selon la saison.',
    'private.cta': 'Demander des informations',
    'contactTeaser.title': 'On parle de votre voyage ?',
    'contactTeaser.body':
      "D\u00e9couvrez l'\u00e9quipe, les coordonn\u00e9es et \u00e9crivez-nous sur WhatsApp depuis la page contact.",
    'contactTeaser.button': 'Page contact',
    'contactPage.title': 'Contact',
    'contactPage.photoAlt': 'Photo de profil',
    'contactPage.chip': 'VOTRE H\u00d4TE',
    'contactPage.whatsappCta': '\u00c9crire sur WhatsApp',
    'contactPage.location': 'Carthag\u00e8ne, Bolivar, Colombie',
    'contactPage.bio.p1':
      'Je suis votre interlocuteur \u00e0 Carthag\u00e8ne pour les excursions aux \u00eeles du Rosaire, beach clubs, plong\u00e9e et s\u00e9jours sur mesure. Je travaille avec des partenaires locaux de confiance.',
    'contactPage.bio.p2':
      "Indiquez vos dates, le nombre de personnes et les exp\u00e9riences souhait\u00e9es : je vous aide \u00e0 construire l'itin\u00e9raire et \u00e0 r\u00e9pondre \u00e0 vos questions avant r\u00e9servation.",
    'cancellation.default':
      "Annulation ou report possible avec au moins 24 heures de pr\u00e9avis selon disponibilit\u00e9. Annulations tardives ou absences peuvent ne pas donner lieu \u00e0 remboursement. Le pourcentage rembours\u00e9 peut varier selon l'excursion et la saison ; nous le pr\u00e9cisons \u00e0 la r\u00e9servation.",

    // Hero Section
    'hero.location': 'Carthag\u00e8ne des Indes, Colombie',
    'hero.headline.start': 'Les Cara\u00efbes',
    'hero.headline.mid': '\u00e0 leur plus',
    'hero.headline.end': 'beau sommet',
    'hero.subtitle':
      "Des exp\u00e9riences uniques aux \u00eeles du Rosaire, beach clubs de luxe, plong\u00e9e certifi\u00e9e et destinations exclusives. Vivez les Cara\u00efbes comme vous le m\u00e9ritez.",
    'hero.cta': 'Explorer les tours',
    'hero.ctaAdvisor': 'Parler \u00e0 un conseiller',
    'hero.scroll': 'SCROLL',

    // About Section
    'about.chip': 'BOLIVAR, COLOMBIE',
    'about.imageChip': 'Patrimoine UNESCO \u00b7 Centre Historique',
    'about.title': 'O\u00f9 se trouve Carthag\u00e8ne ?',
    'about.text1':
      "Carthag\u00e8ne des Indes est situ\u00e9e sur la c\u00f4te nord de la Colombie, au bord de la mer des Cara\u00efbes. C'est l'une des villes les plus embl\u00e9matiques du pays, reconnue mondialement pour sa richesse historique, ses murailles coloniales et ses plages aux eaux turquoise.",
    'about.text2':
      "Gr\u00e2ce \u00e0 sa situation strat\u00e9gique, Carthag\u00e8ne est une destination id\u00e9ale pour ceux qui souhaitent allier culture, histoire et exp\u00e9riences inoubliables dans les Cara\u00efbes colombiennes.",
    'about.f1.title': 'C\u00f4te Cara\u00efbe',
    'about.f1.desc': 'C\u00f4te nord de la Colombie, au bord de la mer des Cara\u00efbes',
    'about.f2.title': 'Climat Tropical',
    'about.f2.desc': "Temp\u00e9rature moyenne de 28\u00b0C toute l'ann\u00e9e",
    'about.f3.title': 'Plages Vierges',
    'about.f3.desc': 'Eaux turquoise et sables blancs uniques',
    'about.f4.title': '\u00celes Paradisiaques',
    'about.f4.desc': 'Archipel des \u00eeles du Rosaire',

    // Stats Section
    'stats.travelers': 'VOYAGEURS HEUREUX',
    'stats.tours': 'EXCURSIONS R\u00c9ALIS\u00c9ES',
    'stats.satisfaction': 'SATISFACTION',
    'stats.experience': "ANN\u00c9ES D'EXP\u00c9RIENCE",

    // Experiences Section
    'experiences.chip': 'EXP\u00c9RIENCES',
    'experiences.title': 'Vivez les Cara\u00efbes Colombiennes',
    'experiences.subtitle':
      "Des excursions sur des \u00eeles paradisiaques aux f\u00eates nocturnes dans la baie. Chaque exp\u00e9rience est con\u00e7ue pour \u00eatre inoubliable.",
    'experiences.tab.all': 'Tous',
    'experiences.tab.islands': "Tours d'\u00celes",
    'experiences.tab.beaches': 'Plages',
    'experiences.tab.nightlife': 'Vie Nocturne',

    // Beach Clubs Section
    'beachClubs.title': 'Beach Clubs aux \u00celes du Rosaire',
    'beachClubs.subtitle':
      'Les meilleurs beach clubs des Cara\u00efbes colombiennes. Open bar, DJ live, gastronomie raffin\u00e9e et les plages les plus exclusives des \u00eeles.',

    // Diving Section
    'diving.chip': 'PLONG\u00c9E PADI',
    'diving.title': 'Plong\u00e9e aux \u00celes du Rosaire',
    'diving.subtitle':
      'Explorez le Parc Naturel National Corales del Rosario et San Bernardo. Plong\u00e9es guid\u00e9es par des professionnels certifi\u00e9s PADI parmi les r\u00e9cifs, \u00e9paves et une biodiversit\u00e9 marine spectaculaire.',
    'diving.eco.title': 'Programme DIVE TO HEAL',
    'diving.eco.text':
      'Une partie de votre paiement soutient notre programme de restauration des coraux et la plong\u00e9e adapt\u00e9e pour les personnes en situation de handicap.',

    // Gallery Section
    'gallery.chip': 'GALERIE',
    'gallery.title': 'Moments Inoubliables',

    // Accommodation Section
    'accommodation.chip': 'H\u00c9BERGEMENT',
    'accommodation.title': 'H\u00e9bergements Uniques dans les Meilleures Destinations',
    'accommodation.subtitle':
      "D\u00e9couvrez la magie de la Colombie \u00e0 travers des exp\u00e9riences authentiques et des h\u00e9bergements de charme. Du luxe carib\u00e9en \u00e0 l'\u00e9nergie urbaine.",
    'accommodation.tagline':
      "Chaque destination, une exp\u00e9rience. H\u00e9bergements s\u00e9lectionn\u00e9s pour leur confort, emplacement, s\u00e9curit\u00e9 et charme local.",

    // Testimonials Section
    'testimonials.chip': 'T\u00c9MOIGNAGES',
    'testimonials.title': 'Ce Que Disent Nos Voyageurs',
    'testimonials.subtitle':
      "Des centaines de clients satisfaits nous font confiance pour vivre les Cara\u00efbes \u00e0 leur meilleur niveau.",

    // FAQ Section
    'faq.title': 'Questions Fr\u00e9quentes',
    'faq.subtitle': 'Nous r\u00e9pondons \u00e0 vos questions pour que vous puissiez profiter sans souci.',
    'faq.q1': "Que dois-je apporter pour les tours d'\u00eeles ?",
    'faq.a1':
      "Nous recommandons une cr\u00e8me solaire biod\u00e9gradable, un maillot de bain, une serviette, des v\u00eatements confortables pour le retour, de l'argent liquide pour les extras et un appareil photo aquatique si vous en avez un.",
    'faq.q2': "Les tours ont-ils lieu en cas de pluie ?",
    'faq.a2':
      "Les tours d\u00e9pendent des conditions m\u00e9t\u00e9orologiques. En cas de mauvais temps, nous proposons un report gratuit ou un remboursement selon notre politique d'annulation.",
    'faq.q3': 'Puis-je emmener mon animal de compagnie ?',
    'faq.a3':
      'Seul le Pasadia Ibbiza est Pet Friendly. Les petits animaux sont admis avec museli\u00e8re et vaccins \u00e0 jour, moyennant un suppl\u00e9ment de 110 000 COP par animal.',
    'faq.q4': "Quelle est la politique d'annulation ?",
    'faq.a4':
      "Vous pouvez annuler jusqu'\u00e0 24 heures avant l'excursion pour reporter ou obtenir un remboursement de 70-80 % selon l'exp\u00e9rience. Les annulations tardives ou absences ne sont pas remboursables.",
    'faq.q5': "Faut-il une exp\u00e9rience pr\u00e9alable en plong\u00e9e ?",
    'faq.a5':
      "Non. Notre mini-cours PADI est con\u00e7u pour les d\u00e9butants complets. Il comprend un entra\u00eenement en piscine et une plong\u00e9e guid\u00e9e en eaux libres. Important : apr\u00e8s la plong\u00e9e, vous devez attendre 18 heures avant de prendre l'avion.",
    'faq.q6': "D'o\u00f9 partent les excursions ?",
    'faq.a6':
      "La plupart incluent la prise en charge \u00e0 l'h\u00f4tel \u00e0 Bocagrande, Laguito, Centro et la Zone Nord (Marbella, Crespo, La Boquilla). Les beach clubs partent de quais sp\u00e9cifiques comme La Bodeguita ou Marina Todomar.",
    'faq.q7': 'Y a-t-il des r\u00e9ductions pour les groupes ?',
    'faq.a7':
      'Oui. Nous offrons des r\u00e9ductions sur toutes les excursions pour les groupes \u00e0 partir de 4 personnes. Contactez-nous sur WhatsApp pour les tarifs et disponibilit\u00e9s.',
    'faq.q8': 'Quels modes de paiement acceptez-vous ?',
    'faq.a8':
      'Nous acceptons les virements bancaires, Nequi, Daviplata, cartes de cr\u00e9dit et de d\u00e9bit. Pour les r\u00e9servations internationales, nous acceptons aussi PayPal et Wise.',

    // Newsletter Section
    'newsletter.title': 'Ne Manquez Rien',
    'newsletter.subtitle':
      'Recevez des offres exclusives, des r\u00e9ductions sp\u00e9ciales et les derni\u00e8res nouvelles de nos exp\u00e9riences directement dans votre bo\u00eete mail.',
    'newsletter.placeholder': 'Votre adresse e-mail',
    'newsletter.button': "S'abonner",
    'newsletter.loading': 'Envoi en cours...',
    'newsletter.disclaimer': 'Pas de spam. Vous pouvez vous d\u00e9sinscrire \u00e0 tout moment.',
    'newsletter.success': 'Vous \u00eates inscrit avec succ\u00e8s. Bienvenue au paradis !',

    // Trip Builder Section
    'tripBuilder.chip': 'CR\u00c9EZ VOTRE VOYAGE',
    'tripBuilder.title': 'Cr\u00e9ez Votre Forfait Personnalis\u00e9',
    'tripBuilder.subtitle':
      'S\u00e9lectionnez les exp\u00e9riences qui vous plaisent le plus et recevez un devis personnalis\u00e9 avec r\u00e9duction forfait.',
    'tripBuilder.package': 'Votre Forfait',
    'tripBuilder.empty': 'S\u00e9lectionnez des exp\u00e9riences pour cr\u00e9er votre forfait personnalis\u00e9.',
    'tripBuilder.discount': 'R\u00e9duction forfait (10%)',
    'tripBuilder.total': 'Total Estim\u00e9',
    'tripBuilder.discountChip': '10% de r\u00e9duction pour forfait 3+',
    'tripBuilder.cta': 'Demander un devis sur WhatsApp',
    'tripBuilder.cat.island': "Tour d'\u00celes",
    'tripBuilder.cat.beach': 'Plage',
    'tripBuilder.cat.nightlife': 'Nocturne',
    'tripBuilder.cat.beachClub': 'Beach Club',
    'tripBuilder.cat.diving': 'Plong\u00e9e',

    // Footer
    'footer.description':
      'Nous cr\u00e9ons des exp\u00e9riences authentiques, s\u00fbres et m\u00e9morables pour les voyageurs qui souhaitent d\u00e9couvrir la Colombie autrement.',
    'footer.tours': 'Tours',
    'footer.experiences': 'Exp\u00e9riences',
    'footer.services': 'Services',
    'footer.cities': 'Villes',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits r\u00e9serv\u00e9s.',
    'footer.terms': 'Conditions',
    'footer.privacy': 'Confidentialit\u00e9',
    'footer.cookies': 'Cookies',

    // Price label
    'price.from': '\u00c0 PARTIR DE',

    // Scroll to top
    'scrollTop': 'Retour en haut',
  },
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved === 'en' || saved === 'fr' || saved === 'es') setLocaleState(saved);
      setReady(true);
    });
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'es' ? 'es' : l === 'fr' ? 'fr' : 'en';
    }
  }, []);

  const t = useCallback(
    (key: string) => DICT[locale][key] ?? DICT.es[key] ?? key,
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  if (!ready) {
    return (
      <LanguageContext.Provider value={{ locale: 'es', setLocale, t: (k) => DICT.es[k] ?? k }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function tourWhatsAppMessage(
  locale: Locale,
  tourName: string,
  opts?: { priceFormatted?: string }
): string {
  const price = opts?.priceFormatted?.trim() || '—';

  if (locale === 'en') {
    return `Hello! 👋
I'd like to know more about this experience in Cartagena 🌴

📍 Experience: ${tourName}
💰 Price: ${price}

Is it available on this date? 🙌

We'd love to help you plan your experience ✨
To give you the best service, could you share:
📅 *Tour date:*
👥 *Number of people:*

(Feel free to mention any special preferences 😊)`;
  }

  if (locale === 'fr') {
    return `Bonjour ! 👋
Je souhaite en savoir plus sur cette expérience à Carthagène 🌴

📍 Expérience : ${tourName}
💰 Prix : ${price}

Est-ce disponible à cette date ? 🙌

Ce sera un plaisir de vous aider à organiser votre expérience ✨
Pour une meilleure prise en charge, pourriez-vous nous indiquer :
📅 *Date de l'excursion :*
👥 *Nombre de personnes :*

(Si vous avez une préférence particulière, indiquez-la 😊)`;
  }

  return `¡Hola! 👋
Me interesa conocer más sobre esta experiencia en Cartagena 🌴

📍 Experiencia: ${tourName}
💰 Precio: ${price}

¿Está disponible para esta fecha? 🙌

Será un placer ayudarte a organizar tu experiencia ✨
 Para brindarte la mejor atención, ¿podrías compartirnos lo siguiente?
📅 *Fecha del tour:*
👥 *Número de personas:*

(Si tienes alguna preferencia especial puedes comentarla 😊)`;
}
