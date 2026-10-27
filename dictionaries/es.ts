import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Santlar Labs — Software a la medida para negocios en crecimiento",
    description:
      "Santlar Labs desarrolla aplicaciones web, tiendas en línea y herramientas de automatización para pequeñas y medianas empresas, con más de 12 años de ingeniería empresarial detrás de cada línea de código.",
  },
  nav: {
    services: "Servicios",
    work: "Proyectos",
    process: "Proceso",
    about: "Acerca de",
    faq: "Preguntas",
    cta: "Agenda una llamada",
    menu: "Menú",
    language: "English",
  },
  hero: {
    eyebrow: "Estudio de software · English & Español",
    titleStart: "Software a la medida que",
    titleAccent: "impulsa tu negocio",
    titleEnd: "— con estándares de nivel empresarial.",
    subtitle:
      "Diseño y desarrollo aplicaciones web, tiendas en línea y herramientas de automatización para pequeñas y medianas empresas. La misma ingeniería que he entregado a equipos Fortune 500, a la medida de tu presupuesto.",
    primary: "Inicia un proyecto",
    secondary: "Ver proyectos",
    stats: [
      { value: "12+", label: "años creando software en producción" },
      { value: "80–90%", label: "menos tiempo de respuesta logrado" },
      { value: "99%", label: "de disponibilidad en apps desplegadas" },
      { value: "EN · ES", label: "bilingüe, EE. UU. y Latinoamérica" },
    ],
    mock: {
      app: "Workshop OS",
      title: "Órdenes de trabajo",
      today: "Hoy",
      kpis: [
        { label: "Órdenes abiertas", value: "18" },
        { label: "Listas para entrega", value: "6" },
        { label: "Tiempo promedio", value: "1.8d" },
      ],
      rows: [
        { id: "OT-1042", vehicle: "Toyota Hilux 2019", status: "En diagnóstico", tone: "amber" },
        { id: "OT-1041", vehicle: "Nissan Versa 2021", status: "Esperando piezas", tone: "violet" },
        { id: "OT-1039", vehicle: "Ford Ranger 2018", status: "Lista", tone: "teal" },
      ],
      toastTitle: "Tiempo de respuesta",
      toastValue: "−87%",
      deploy: "Desplegado a producción",
    },
  },
  trust: {
    label: "Experiencia de ingeniería con equipos de",
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que construyo para ti",
    subtitle:
      "Un solo ingeniero desde el primer boceto hasta producción — sin intermediarios ni contexto perdido.",
    items: [
      {
        icon: "app",
        title: "Aplicaciones web y SaaS",
        body: "Dashboards, portales para clientes y productos SaaS completos que reemplazan hojas de cálculo y pasos manuales con un sistema confiable.",
      },
      {
        icon: "shop",
        title: "Tiendas en línea",
        body: "Tiendas rápidas y atractivas, fáciles de administrar — productos, pagos, inventario y pedidos en un solo lugar.",
      },
      {
        icon: "automation",
        title: "Automatización y herramientas internas",
        body: "Herramientas que te quitan el trabajo repetitivo: agendas, redes sociales, reportes, notificaciones e integraciones entre tus apps.",
      },
      {
        icon: "modernize",
        title: "Modernización y rendimiento",
        body: "¿Tu sistema es lento o ya es antiguo? Migro código heredado a tecnologías modernas, acelero APIs y llevo apps a la nube sin romper lo que funciona.",
      },
    ],
  },
  work: {
    eyebrow: "Proyectos destacados",
    title: "Proyectos recientes",
    subtitle:
      "Clientes freelance actuales y lo más destacado de proyectos empresariales.",
    status: {
      live: "En línea",
      building: "En desarrollo",
      enterprise: "Empresarial",
    },
    visit: "Visitar sitio",
    screenshotSoon: "Capturas próximamente",
    items: [
      {
        client: "PauReinaPolilla",
        kind: "Creadora de contenido",
        title: "Tienda en línea de coleccionables de videojuegos",
        body: "Diseñé y desarrollé Polillita Shop, una tienda bilingüe de coleccionables exclusivos de videojuegos con envío a todo México, con catálogo, preventas, carrito y cuentas de cliente.",
        tags: ["E-commerce", "Bilingüe ES/EN", "Preventas", "Cuentas de cliente"],
        status: "live",
        image: "/work/polillita-shop.webp",
        url: "https://polillita-shop.com.mx/",
        metric: "", metricLabel: "",
      },
      {
        client: "PauReinaPolilla",
        kind: "Creadora de contenido",
        title: "App para gestionar redes sociales",
        body: "Una app a la medida para planear, organizar y gestionar contenido en todas sus redes sociales desde un solo lugar, ahorrando horas cada semana.",
        tags: ["App web", "Automatización", "APIs"],
        status: "building",
        image: "",
        url: "",
        metric: "", metricLabel: "",
      },
      {
        client: "Taller mecánico",
        kind: "Servicios automotrices",
        title: "SaaS para procesos de reparación vehicular",
        body: "Una plataforma que automatiza todo el proceso de reparación — recepción, diagnóstico, refacciones, avisos de estatus y entrega — para que el taller funcione con un solo sistema en lugar de papel y llamadas.",
        tags: ["SaaS", "Automatización", "Full-stack"],
        status: "building",
        image: "",
        url: "",
        metric: "", metricLabel: "",
      },
      {
        client: "Servicios financieros Fortune 500",
        kind: "Empresarial",
        title: "Modernización de servicios heredados",
        body: "Migré servicios SOAP y procedimientos almacenados de DB2 a microservicios REST y gRPC modernos, y reduje los tiempos de respuesta entre 80 y 90% con concurrencia y optimización de consultas.",
        tags: ["Java 21", "Spring Boot", "gRPC", "Kafka"],
        status: "enterprise",
        image: "",
        url: "",
        metric: "−80–90%", metricLabel: "tiempo de respuesta",
      },
      {
        client: "Ferrocarril Clase I de EE. UU.",
        kind: "Empresarial",
        title: "Herramientas de análisis de operaciones ferroviarias",
        body: "Desarrollé la interfaz para simulaciones de capacidad de patios y herramientas de reportes con mapas y gráficas interactivas, desplegadas en Kubernetes con 99% de disponibilidad.",
        tags: ["React", "TypeScript", "OpenShift", "Mapas"],
        status: "enterprise",
        image: "",
        url: "",
        metric: "99%", metricLabel: "disponibilidad",
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Cómo funciona un proyecto",
    subtitle: "Pasos claros, entregas fijas y un demo funcional cada semana.",
    steps: [
      {
        title: "Llamada inicial",
        body: "Una llamada gratuita de 30 minutos para entender tu negocio, el problema y cómo se ve el éxito.",
      },
      {
        title: "Propuesta y plan",
        body: "Un alcance por escrito con entregas, tiempos y un precio fijo por entrega. Sin sorpresas.",
      },
      {
        title: "Desarrollo transparente",
        body: "Demos semanales que puedes probar, para que veas el avance y puedas ajustar el rumbo a tiempo.",
      },
      {
        title: "Lanzamiento y soporte",
        body: "Despliegue, capacitación para tu equipo y un plan mensual opcional de hosting, correcciones y nuevas funciones.",
      },
    ],
  },
  engagement: {
    eyebrow: "Formas de trabajar juntos",
    items: [
      {
        title: "Proyecto a precio fijo",
        body: "Ideal para un producto definido: una tienda, una app, un MVP de SaaS. Se paga por entrega.",
      },
      {
        title: "Plan de mantenimiento mensual",
        body: "Hosting, monitoreo, actualizaciones y un bloque de horas para mejoras cada mes.",
      },
      {
        title: "Consultoría y rescate",
        body: "Revisión de código, mejoras de rendimiento o retomar un proyecto que se quedó atorado.",
      },
    ],
  },
  about: {
    eyebrow: "Acerca de",
    title: "Hola, soy Daniel Santiago",
    paragraphs: [
      "Soy ingeniero de software full-stack con más de 12 años de experiencia. La mayor parte de ese tiempo he trabajado dentro de grandes empresas — bancos, aseguradoras, telecomunicaciones y uno de los principales ferrocarriles de EE. UU. — creando sistemas que no pueden fallar.",
      "Fundé Santlar Labs para llevar ese mismo nivel de ingeniería a pequeñas y medianas empresas: software confiable, rápido y construido alrededor de cómo trabajas realmente. Trabajo en español e inglés con clientes en Estados Unidos y Latinoamérica.",
      "Fuera del trabajo con clientes, tengo una maestría en diseño y desarrollo de videojuegos y estoy creando un roguelite en Unity para Steam.",
    ],
    stackTitle: "Herramientas que uso",
    stack: [
      "Java", "Spring Boot", "TypeScript", "React", "Next.js", "Angular", "Node.js",
      "PostgreSQL", "MongoDB", "Kafka", "gRPC", "Docker", "Kubernetes", "GitHub Actions", "Unity",
    ],
    timelineTitle: "Experiencia",
    timeline: [
      { period: "2025 — hoy", role: "Desarrollador Full-Stack", org: "Empresa de servicios financieros Fortune 500" },
      { period: "2020 — 2025", role: "Desarrollador Full-Stack", org: "Norfolk Southern (vía Aptonet)" },
      { period: "2018 — 2020", role: "Desarrollador Java", org: "HSBC · Telcel · BBVA" },
      { period: "2013 — 2018", role: "Desarrollador Java y Líder", org: "Premium Restaurant Brands (Pizza Hut, KFC)" },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Trabajas con pequeñas empresas?",
        a: "Sí, es mi enfoque principal. La mayoría de los proyectos empiezan pequeños, con un MVP que resuelve tu problema más urgente, y crecen a partir de ahí.",
      },
      {
        q: "¿Podemos trabajar en español?",
        a: "Por supuesto. Las llamadas, los documentos y el software pueden estar en español, inglés o ambos.",
      },
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Depende del alcance. Después de la llamada inicial recibes una propuesta por escrito con un precio fijo por entrega, para que siempre sepas qué estás pagando.",
      },
      {
        q: "¿Qué pasa después del lanzamiento?",
        a: "Puedes quedarte con el proyecto para tu equipo interno, o contratar un plan mensual de hosting, monitoreo, correcciones y nuevas funciones.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo que funcione para ti",
    subtitle:
      "Cuéntame sobre tu negocio y lo que necesitas. Respondo en menos de un día hábil.",
    emailLabel: "O escríbeme directamente",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa (opcional)",
      projectType: "¿Qué necesitas?",
      projectTypes: ["App web / SaaS", "Tienda en línea", "Automatización / herramienta interna", "Modernización / rendimiento", "Otra cosa"],
      budget: "Presupuesto estimado",
      budgets: ["Aún no lo sé", "Menos de $5k USD", "$5k – $15k USD", "$15k – $40k USD", "$40k+ USD"],
      message: "Cuéntame sobre el proyecto",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Gracias! Tu mensaje va en camino. Te responderé en menos de un día hábil.",
      error: "Algo salió mal. Por favor escríbeme directamente por correo.",
      mailtoNote: "Se abrirá tu app de correo con el mensaje listo para enviar.",
    },
  },
  footer: {
    tagline: "Software a la medida para negocios en crecimiento.",
    rights: "Todos los derechos reservados.",
  },
};

export default es;
