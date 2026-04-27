# 🌴 Cartagena Tours

Sitio web de **experiencias turísticas** en Cartagena y el Caribe colombiano: islas, beach clubs, buceo, alojamiento y ese “sí, quiero ir ya” que provoca una buena foto de atardecer.  
Construido con **Next.js 16** (App Router), **React 19**, **MUI** y suficiente **DM Sans** para que la tipografía no pelee con el diseño.

> *Disclaimer emocional:* si después de ver el hero te compras un vuelo, no nos hacemos responsables. Solo facilitamos el click en WhatsApp. 📲

---

## ✨ Qué hace este proyecto

- **Landing principal** (`/`) con secciones ancla: hero, promo, sobre nosotros, estadísticas, experiencias, beach clubs, buceo, galería, alojamiento, servicios privados, armador de viaje, testimonios, FAQ, newsletter y teaser de contacto.
- **Página de contacto** (`/contacto`) con contenido dedicado.
- **i18n** ES · EN · FR vía `LanguageProvider` (copys centralizados).
- **CTAs a WhatsApp** con mensajes prellenados según idioma y tour.
- **Tema claro/oscuro** y UI coherente con MUI + tokens en `theme/theme.ts`.
- **Firebase (opcional)** para acciones de backend cuando las variables están definidas.

---

## 🧱 Estructura del repo (el mapa del tesoro)

```text
cartagena-tours/
├── public/images/          # Fotos por categoría (hero, experiences, gallery, etc.)
├── src/
│   ├── app/                # App Router de Next.js
│   │   ├── layout.tsx      # Fuentes (DM Sans + Playfair), metadata SEO, ThemeRegistry
│   │   ├── page.tsx        # Orquesta todas las secciones de la home + scroll por hash
│   │   ├── globals.css     # Estilos globales / utilidades
│   │   └── contacto/
│   │       └── page.tsx    # Ruta /contacto
│   ├── components/
│   │   ├── layout/         # Navbar, Footer (navegación y pie)
│   │   ├── sections/       # Una carpeta = una sección de la landing (Hero, FAQ, …)
│   │   ├── pages/          # Contenidos de página completa (ej. contacto)
│   │   └── ui/             # Piezas reutilizables (cards, headers, scroll-to-top)
│   ├── contexts/
│   │   └── LanguageContext.tsx   # Traducciones y estado de idioma
│   ├── data/
│   │   └── experiences.ts        # Catálogo de tours / metadatos para cards y modales
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Animaciones al entrar en viewport
│   ├── lib/
│   │   ├── siteConfig.ts         # WhatsApp: E.164, URL wa.me, teléfono visible
│   │   ├── firebase.ts           # Init Firestore (si hay env)
│   │   └── firebaseActions.ts    # Escrituras / lecturas opcionales
│   └── theme/
│       ├── theme.ts              # Paleta, componentes MUI, modo oscuro
│       └── ThemeRegistry.tsx     # Emotion cache + CssBaseline + LanguageProvider
├── netlify.toml            # Build Netlify + plugin Next + headers de caché
├── next.config.ts
├── package.json
└── .env.example            # Plantilla de variables públicas
```

**Regla mental:** si es “una franja vertical en la home”, vive en `components/sections/`. Si se usa en más de un sitio, sube a `components/ui/` o `lib/`.

---

## 🚀 Cómo levantarlo (sin drama)

Requisitos: **Node.js 20+** (Next 16 no es fan del abuelo Node 18).

```bash
npm install
cp .env.example .env.local   # y edita tus valores reales
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si algo explota, primero culpa a `node -v`; después ya vemos el código. 😅

| Comando        | Efecto                          |
|----------------|---------------------------------|
| `npm run dev`  | Servidor de desarrollo          |
| `npm run build`| Build de producción             |
| `npm run start`| Sirve el build (post `build`)   |
| `npm run lint` | ESLint                          |

---

## 🔐 Variables de entorno

Copia `.env.example` → `.env.local`.

| Variable | Para qué |
|----------|----------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número en formato internacional **sin** `+` (ej. `573001234567`) |
| `NEXT_PUBLIC_DISPLAY_PHONE` | *(Opcional)* Cómo se muestra el teléfono en la UI |

**Firebase (opcional):** si usas newsletter u otras piezas que tocan Firestore, añade las `NEXT_PUBLIC_FIREBASE_*` que espera `src/lib/firebase.ts`. Sin `projectId`, la app sigue viva; Firestore simplemente no se inicializa.

---

## 🚢 Deploy (Netlify)

El repo incluye `netlify.toml` con:

- **Node 20** en el entorno de build  
- Plugin **@netlify/plugin-nextjs**  
- Headers de caché para `/images/*` y `/_next/static/*`

Conecta el repo en Netlify, deja el comando `npm run build` y configura las mismas variables de entorno en el panel. Listo: tu sitio en producción y tú tomando tinto celebrando. ☕

---

## 🎨 Stack principal

- **Next.js 16** (App Router, Turbopack en dev según versión)
- **React 19**
- **TypeScript**
- **MUI v9** + Emotion
- **Framer Motion**, **Swiper**, **react-intersection-observer**, **yet-another-react-lightbox**
- **Tailwind 4** (PostCSS) donde aplica junto a estilos globales

---

## 🤝 Contribuir

1. Rama desde `main` (o la default del repo).  
2. Cambios pequeños y con sentido (nadie quiere un PR que reformatea medio mundo).  
3. `npm run lint` y `npm run build` antes de pedir merge.  

---

## 📜 Licencia

Proyecto **privado** (`"private": true` en `package.json`). Si no eres del equipo y llegaste hasta aquí leyendo el README completo: tienes mérito. 🏅

---

*Hecho con sol caribeño, commits razonables y cero neones gratuitos en los botones (o eso intentamos).* 🌅
