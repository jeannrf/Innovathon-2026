# Contexto del Proyecto: Innovathon "Launch with AI" (Edición 2026)

Este documento contiene todo el contexto integral del proyecto, su estado de avance, arquitectura técnica, detalles de la competencia, módulos desarrollados y datos operativos. Está diseñado para servir como insumo directo de contexto para modelos de Inteligencia Artificial y planificación estratégica.

---

## 1. Visión General del Proyecto

- **Nombre del Evento / Plataforma:** Innovathon "Launch with AI" 2026
- **Entidad Organizadora:** **TinkuyLabs** (Comunidad y laboratorio de innovación tecnológica nacido en la **Universidad Nacional de Ingeniería - UNI**, en alianza con organizaciones como CCAT, UNICODE, CEIIS, DSC, etc.).
- **Propósito del Evento:** Concurso y hackathon universitario de innovación y emprendimiento tecnológico enfocado en la creación y validación de **Productos Mínimos Viables (MVPs)** potenciados con **Inteligencia Artificial (IA)** y metodologías ágiles, orientados a resolver problemáticas alineadas a los **Objetivos de Desarrollo Sostenible (ODS)**.
- **Modalidad:** Híbrida (Desarrollo y mentorías virtuales + Gran Final presencial en el campus de la UNI, Lima - Perú).
- **Objetivo del Sitio Web:** Plataforma web oficial moderna, inmersiva, con diseño premium (dark mode, glassmorphism, orbes ambientales reactivos con ciclos de color dinámicos) y optimizada para SEO y mobile-first. Permite la difusión del evento, consulta de bases, revisión de retos/cronograma, interacción con un asistente virtual IA y registro de postulantes.

---

## 2. Stack Tecnológico y Arquitectura

| Componente | Tecnología / Herramienta | Descripción y Uso |
| :--- | :--- | :--- |
| **Framework Web** | [Astro v6](https://astro.build/) (`astro: ^6.1.8`) | Generación estática y arquitectura de islas para máxima velocidad de carga y SEO óptimo. |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (`^6.0.3`) | Tipado estático estricto en datos (`src/data/`), componentes y scripts. |
| **Estilos & UI** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite ^4.2.3`) + Vanilla CSS | Sistema de diseño utility-first combinado con variables CSS `@property` para transiciones de color de temas globales dinámicos (`--theme-color-primary`, `--theme-color-secondary`, `--theme-color-glow`). |
| **Tipografía** | Google Fonts (`Poppins`, `Outfit`, `Inter`) | Jerarquía visual moderna y limpia. |
| **Scripts de Automatización** | Node.js + `tsx` (`scripts/generate-collaborators.ts`) | Script pre-dev y pre-build que indexa automáticamente los logos de organizadores, auspiciadores y patrocinadores desde `public/images/colaboradores/` hacia `src/data/collaborators.ts`. |
| **Efectos Visuales** | CSS GPU-accelerated mesh gradients, orbes de luz, backdrop-filters (glassmorphism) y animaciones reveal por scroll. |

---

## 3. Estructura de Directorios del Código

```text
Innovathon-2026/
├── public/
│   ├── documents/               # Documentos oficiales descargables (bases.pdf, etc.)
│   ├── images/
│   │   ├── colaboradores/       # Logos categorizados (organizadores, auspiciadores, patrocinadores)
│   │   ├── logos/               # Logos de la marca (innovathon, tinkuylabs, Innovabot)
│   │   └── photos_innovathon_2025/ # Galería histórica de ediciones previas
├── scripts/
│   └── generate-collaborators.ts # Generador automático de datos de colaboradores
├── src/
│   ├── components/
│   │   ├── home/                # Componentes exclusivos de la página de inicio (CardHomeMain, CardHomePrize, CardHomeStat, CollaboratorsCard)
│   │   ├── icons/               # SVGs encapsulados para beneficios, premios y redes sociales
│   │   ├── layout/              # Navbar.astro, Footer.astro, RAGChatWidget.astro (Innovabot)
│   │   ├── CardBeneficio.astro  # Tarjeta de beneficios con soporte invertido
│   │   ├── CardPremio.astro     # Tarjeta de premios por podio
│   │   ├── ChallengeCard.astro  # Tarjeta interactiva de desafíos
│   │   ├── OrgCard.astro        # Tarjeta de entidades organizadoras
│   │   ├── RequirementItem.astro# Ítems de la lista de requisitos
│   │   ├── SectionHeader.astro  # Encabezados consistentes de sección
│   │   └── SocialLinks.astro    # Enlaces a redes sociales y comunidades
│   ├── data/
│   │   ├── cronograma.ts        # Fases, fechas y estados del roadmap
│   │   ├── desafios.ts          # Lista de retos y ODS asociados
│   │   ├── requisitos.ts        # Reglas y condiciones de participación
│   │   ├── collaborators.ts     # Metadata generada de colaboradores y marcas
│   │   └── collaborators-metadata.ts # Configuración de orden y nombres de marcas
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (meta tags, navbar, footer, script de animaciones reveal, widget RAG)
│   ├── pages/
│   │   ├── index.astro          # Landing principal (Hero, Highlights, Qué es, Stats, Premios, Aliados)
│   │   ├── bases.astro          # Visor embebido de PDF del reglamento y botón de descarga
│   │   ├── nosotros.astro       # Manifiesto de TinkuyLabs, áreas internas, coordinadores y fotos 2025
│   │   ├── como-participar.astro# Requisitos detallados y simulador de videotutorial de registro
│   │   ├── desafios.astro       # Catálogo de desafíos ODS con modal interactivo `<dialog>`
│   │   ├── beneficios.astro     # Ventajas de participar y desglose de premios (1º, 2º y 3º puesto)
│   │   ├── cronograma.astro     # Línea de tiempo interactiva del evento
│   │   ├── organizadores.astro  # Directorio institucional (Organizadores, Coorganizadores, Aliados, Auspiciadores, Patrocinadores)
│   │   ├── inscripcion.astro    # Formulario dinámico multipaso (Individual vs. Equipos, 2 a 5 miembros, stack tecnológico)
│   │   └── 404.astro            # Página de error personalizada
│   └── styles/
│       └── global.css           # Configuración de Tailwind 4, `@property`, orbes, animaciones y tema oscuro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 4. Módulos y Páginas Avanzadas en el Frontend

### 1. Landing Page (`src/pages/index.astro`)
- **Hero:** Título *"Innovathon - Launch with AI"*, lema motivacional, botones directos a comunidades (Canal de WhatsApp y Discord) con animaciones RGB y hover 3D.
- **Highlights:** Tarjetas rápidas de información: Modalidad (*Híbrido - UNI*), Estado de Inscripciones y Fondo de Premios.
- **Sobre el Evento:** Explicación del enfoque en IA, MVPs y ODS.
- **Estadísticas de Impacto:** Cifras clave de ediciones anteriores (participantes, proyectos generados, etc.).
- **Premios Destacados:** Vista previa de los incentivos económicos e incubación.
- **Grid de Aliados:** Renderizado dinámico de organizadores, auspiciadores y patrocinadores mediante script automatizado.

### 2. Reglamento y Bases (`src/pages/bases.astro`)
- Visor de PDF embebido (`<iframe src="/documents/bases.pdf">`) con altura adaptativa y estilo glassmorphism.
- Fallback elegante en caso de incompatibilidad del navegador y botón directo de descarga del documento oficial.

### 3. Nosotros - TinkuyLabs (`src/pages/nosotros.astro`)
- **Significado:** Explicación del concepto quechua *"Tinkuy"* (encuentro/convergencia entre academia e industria).
- **Galería Comunitaria 2025:** Tarjetas superpuestas tipo Polaroid con fotos reales de la edición 2025 y enlaces a publicaciones de LinkedIn, Facebook e Instagram.
- **Áreas y Coordinadores de TinkuyLabs:**
  - *Tecnología e Inteligencia Artificial (TI & AI)*
  - *Cloud Computing & DevOps*
  - *Diseño de Experiencia de Usuario (UI/UX)*
  - *Gestión de Proyectos & Metodologías Ágiles*

### 4. Cómo Participar (`src/pages/como-participar.astro`)
- Lista estructurada de requisitos obligatorios con íconos personalizados.
- Enlace directo a la lectura de bases.
- Sección de **Guía de Registro**: Contenedor para videotutorial / demo guiado del proceso de inscripción paso a paso.

### 5. Desafíos ODS (`src/pages/desafios.astro`)
- Tarjetas de cada reto con insignias ODS y descripciones concisas.
- **Modal interactivo global (`<dialog>`):** Permite hacer clic en *"Ver más"* en cualquier desafío para abrir un modal con fondo desenfocado (*backdrop-blur*), detalles ampliados de los requerimientos técnicos y descarga de la ficha técnica del reto.

### 6. Premios y Beneficios (`src/pages/beneficios.astro`)
- Sección *"¿Por qué unirte?"*: Explicación de los 4 beneficios clave (Desarrollo de MVPs, Certificación oficial UNI, Mentorías de expertos/Networking, Premios y visibilidad).
- Tarjetas de podio con colores metálicos (Oro, Plata, Bronce) detallando premios en efectivo y hardware.

### 7. Cronograma Oficial (`src/pages/cronograma.astro`)
- Roadmap vertical interactivo con marcadores visuales de hitos activos y pasados.

### 8. Organizadores y Aliados (`src/pages/organizadores.astro`)
- Directorio de entidades vinculadas:
  - **Organizadores:** CEIIS, CCAT, UNICODE.
  - **Coorganizadores:** Proyecta UNI, IEEE WIE UNI, AIESEC UNI, DSC UTP.
  - **Aliados Institucionales:** Startup UNI, OTI UNI, IEEE UNI, UNI.NET, Equipu.
  - **Auspiciadores:** Datux, CCL, ASEP, Scale, Kunan, Fundación WE.
  - **Patrocinadores:** Tai Loy, Minsun, Deltron, Coolbox, ProUNI, Lenovo.

### 9. Formulario de Inscripción (`src/pages/inscripcion.astro`)
- **Modos de Inscripción:**
  - *Individual:* Para postulantes que desean ser asignados a un equipo multidisciplinario.
  - *Con Equipo:* Para equipos formados (selector de 2 a 5 miembros).
- **Campos del Proyecto:** Nombre del equipo, selección de categoría/desafío, resumen de la idea y selector múltiple con badges interactivos de herramientas de IA / tecnologías planificadas (React, Python, TensorFlow, Cloud, Figma, etc.).
- **Datos de Miembros:** Nombre completo, DNI, correo institucional/personal, teléfono/WhatsApp, universidad/instituto de procedencia, carrera y rol en el equipo (con validación de líder).

### 10. Asistente Virtual RAG - "Innovabot" (`src/components/layout/RAGChatWidget.astro`)
- Widget flotante en la esquina inferior derecha.
- Interfaz de chat integrada en el layout global para responder dudas sobre fechas, bases, requisitos y dinámicas del concurso.

---

## 5. Detalles Específicos de la Competencia

### A. Requisitos de Participación
1. **Condición Académica:** Estudiantes de pregrado matriculados en universidades o institutos de educación superior del Perú (públicas o privadas).
2. **Conformación de Equipos:** Equipos de exactamente 4 integrantes para las fases oficiales y entregables (el formulario soporta registro individual y de 2 a 5 miembros con fines de consolidación).
3. **Perfil TI Obligatorio:** Al menos un (1) integrante del equipo debe pertenecer a una carrera de Tecnologías de la Información, Ciencias de la Computación, Ingeniería de Sistemas, Software o afines.
4. **Diversidad Multidisciplinaria:** El equipo debe contar con miembros de al menos dos (2) carreras distintas para asegurar perspectivas complementarias (ingeniería, negocios, diseño, etc.).
5. **Propuesta de IA:** Los equipos deben plantear una solución tecnológica preliminar donde se especifique el uso justificado de herramientas y modelos de Inteligencia Artificial.

### B. Desafíos Oficiales (Alineados a ODS)

| Reto / Categoría | ODS Asociados | Descripción Central |
| :--- | :--- | :--- |
| **1. Minería: operaciones sostenibles y competitivas** | ODS 9, 12, 15 | Transformar operaciones mineras hacia prácticas más sostenibles y seguras mediante IA (gestión de riesgos ambientales, reducción de huella ecológica, monitoreo predictivo). |
| **2. Ecommerce: logística inteligente y circular** | ODS 9, 12 | Logística resiliente, optimización de inventarios, reducción de mermas y residuos, promoviendo economía circular en el comercio electrónico. |
| **3. Logística y transporte inteligente** | ODS 9 | Optimización de rutas, gestión inteligente de flotas y reducción de emisiones de carbono y congestión vehicular en ciudades mediante IA. |
| **4. Educación: IA para calidad y acceso** | ODS 4, 9 | Personalización del aprendizaje, reducción de brechas de acceso educativo y herramientas de apoyo equitativo e inclusivo para estudiantes. |

### C. Estructura de Premiación Oficial

- **1.er Puesto (Campeón):**
  - **S/ 2,000** en efectivo.
  - Pase directo a programa de **Incubación de Proyecto** (acompañamiento para convertirlo en startup).
  - 4 Coolers para laptops.
- **2.do Puesto:**
  - **S/ 1,000** en efectivo.
  - 4 Monitores profesionales.
- **3.er Puesto:**
  - **S/ 500** en efectivo.
  - 4 Mochilas ergonómicas + 4 Audífonos.
- **Beneficios Generales:**
  - Certificación oficial con respaldo institucional de la UNI.
  - Mentorías técnicas y de negocios con especialistas de la industria.
  - Acceso a la red de contactos (*Networking*) de TinkuyLabs y organizaciones aliadas.

### D. Cronograma de Fases del Evento

1. **Fase 1 - Lanzamiento y Convocatoria:** Difusión oficial, charlas informativas en universidades y apertura del portal de inscripciones.
2. **Fase 2 - Entrega de Retos:** Los equipos reciben la formulación detallada de los desafíos y acceden a masterclasses iniciales.
3. **Fase 3 - Evaluación de Propuestas:** Primer filtro técnico por un panel de expertos para seleccionar a los equipos clasificados a la etapa de prototipado.
4. **Fase 4 - Mentoría y Prototipado Intensivo:** Desarrollo ágil del MVP con asesoría técnica de mentores especializados y talleres de pitch.
5. **Fase 5 - Validación y Feedback:** Pruebas con usuarios y ajustes finales del producto.
6. **Fase 6 - Gran Final (Presencial en la UNI):** Presentación de pitches ante jurado calificador y ceremonia oficial de premiación.

---

## 6. Estado Actual del Desarrollo y Siguientes Frentes de Trabajo

### Lo que ya está completado (Frontend & UI/UX):
- [x] Toda la estructura visual y páginas informativas implementadas con Astro y Tailwind CSS v4.
- [x] Sistema de diseño cohesivo con tema oscuro, orbes animados y paleta de colores dinámica sincronizada.
- [x] Formulario de inscripción completo a nivel de maquetación, estados e interactividad en el cliente (selector de modo, badges de tecnologías, validaciones visuales).
- [x] Modales interactivos para visualización de fichas técnicas de desafíos.
- [x] Visor embebido de bases en PDF y descarga de documentos.
- [x] Widget de chat asistente (*Innovabot*) maquetado e integrado en el layout.
- [x] Script de generación automatizada de logos de colaboradores y aliados institucionales.

### Aspectos pendientes y frentes técnicos futuros:
1. **Backend e Integración del Formulario de Inscripción:** Conectar el formulario de `inscripcion.astro` con un backend o servicio cloud (API REST, Serverless Function, Supabase, Firebase o Google Sheets API) para la persistencia de los registros y validación de correos/DNI en tiempo real.
2. **Conexión del Asistente RAG (*Innovabot*):** Conectar el widget del chat a un backend con LLM (ej. Gemini API / OpenAI) alimentado con la base de conocimiento del reglamento, preguntas frecuentes y cronograma.
3. **Sistema de Notificaciones / Confirmación:** Envío automático de correos de confirmación de inscripción al líder y miembros del equipo.
4. **Subida de Archivos / Entregables:** Módulo o enlace seguro para la recepción de propuestas técnicas y presentaciones de los equipos.
5. **Despliegue y CI/CD:** Configuración final de despliegue en producción (Vercel / Cloudflare Pages / GitHub Pages).
