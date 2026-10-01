export interface Jurado {
  id: string;
  name: string;
  avatar: string;
  colorClass: {
    bg: string;
    text: string;
    border: string;
    chipBg: string;
    chipText: string;
  };
  key: string;
}

export interface CriterioRubrica {
  id: string;
  nombre: string;
  descripcion: string;
  peso: number;
  maxPuntaje: number;
  color?: {
    bar: string;
    text: string;
    badgeBg: string;
    badgeBorder: string;
  };
}

export interface EtapaEvaluacion {
  id: string;
  nombre: string;
  descripcion: string;
  activa: boolean;
  rubrica: CriterioRubrica[];
}

export interface Integrante {
  nombre: string;
  carrera: string;
  rol: string;
}

export interface CalificacionJurado {
  juradoId: string;
  puntajes: Record<string, number>;
  comentarios: Record<string, string>;
  esBorrador: boolean;
  completado: boolean;
  conflictoInteres?: boolean;
  fechaEnvio?: string;
}

export interface EquipoEvaluacion {
  id: string;
  codigo: string;
  nombre: string;
  desafioId: string;
  desafioNombre: string;
  ods: string[];
  resumenIdea: string;
  integrantes?: Integrante[];
  links: {
    github?: string;
    demo?: string;
    pitch?: string;
    documento?: string;
  };
  calificaciones: Record<string, CalificacionJurado>;
}

export const JURADOS_DEFAULT: Jurado[] = [
  {
    id: "pablo",
    name: "Pablo",
    avatar: "PA",
    colorClass: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      chipBg: "bg-cyan-950/80",
      chipText: "text-cyan-300",
    },
    key: "pablo2026",
  },
  {
    id: "tyrone",
    name: "Tyrone",
    avatar: "TY",
    colorClass: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/30",
      chipBg: "bg-orange-950/80",
      chipText: "text-orange-300",
    },
    key: "tyrone2026",
  },
  {
    id: "uniqua",
    name: "Uniqua",
    avatar: "UQ",
    colorClass: {
      bg: "bg-pink-500/10",
      text: "text-pink-400",
      border: "border-pink-500/30",
      chipBg: "bg-pink-950/80",
      chipText: "text-pink-300",
    },
    key: "uniqua2026",
  },
  {
    id: "tasha",
    name: "Tasha",
    avatar: "TS",
    colorClass: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      border: "border-yellow-500/30",
      chipBg: "bg-yellow-950/80",
      chipText: "text-yellow-300",
    },
    key: "tasha2026",
  },
  {
    id: "austin",
    name: "Austin",
    avatar: "AU",
    colorClass: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/30",
      chipBg: "bg-purple-950/80",
      chipText: "text-purple-300",
    },
    key: "austin2026",
  },
];

export const ETAPAS_DEFAULT: EtapaEvaluacion[] = [
  {
    id: "gran_final",
    nombre: "Gran Final & Pitch Day",
    descripcion: "Ponderación y directrices aprobadas para la calificación de los proyectos.",
    activa: true,
    rubrica: [
      {
        id: "solucion_innovacion",
        nombre: "Solución, Innovación & Funcionalidades",
        descripcion: "Relevancia del problema, originalidad y valor real aportado.",
        peso: 35,
        maxPuntaje: 20,
        color: {
          bar: "bg-cyan-400",
          text: "text-cyan-400",
          badgeBg: "bg-cyan-500/10",
          badgeBorder: "border-cyan-500/20",
        },
      },
      {
        id: "calidad_tecnica",
        nombre: "Ingeniería de Software & Calidad Técnica",
        descripcion: "Estructura de código, Mermaid, ADRs, pruebas e integración.",
        peso: 35,
        maxPuntaje: 20,
        color: {
          bar: "bg-lime-400",
          text: "text-lime-400",
          badgeBg: "bg-lime-500/10",
          badgeBorder: "border-lime-500/20",
        },
      },
      {
        id: "modelo_negocio",
        nombre: "Modelo de Negocio, Impacto & ROI",
        descripcion: "Viabilidad comercial, propuesta de valor y escalabilidad.",
        peso: 20,
        maxPuntaje: 20,
        color: {
          bar: "bg-yellow-400",
          text: "text-yellow-400",
          badgeBg: "bg-yellow-500/10",
          badgeBorder: "border-yellow-500/20",
        },
      },
      {
        id: "pitch_defensa",
        nombre: "Pitch & Defensa del Proyecto",
        descripcion: "Claridad expositiva, síntesis y solvencia en preguntas.",
        peso: 10,
        maxPuntaje: 20,
        color: {
          bar: "bg-purple-400",
          text: "text-purple-400",
          badgeBg: "bg-purple-500/10",
          badgeBorder: "border-purple-500/20",
        },
      },
    ],
  },
  {
    id: "fase_clasificatoria",
    nombre: "Fase Clasificatoria / MVP Previo",
    descripcion: "Evaluación preliminar de viabilidad técnica, arquitectura y prototipo inicial.",
    activa: false,
    rubrica: [
      {
        id: "solucion_innovacion",
        nombre: "Solución, Innovación & Funcionalidades",
        descripcion: "Relevancia del problema, originalidad y valor real aportado.",
        peso: 40,
        maxPuntaje: 20,
        color: {
          bar: "bg-cyan-400",
          text: "text-cyan-400",
          badgeBg: "bg-cyan-500/10",
          badgeBorder: "border-cyan-500/20",
        },
      },
      {
        id: "calidad_tecnica",
        nombre: "Ingeniería de Software & Calidad Técnica",
        descripcion: "Estructura de código, Mermaid, ADRs, pruebas e integración.",
        peso: 40,
        maxPuntaje: 20,
        color: {
          bar: "bg-lime-400",
          text: "text-lime-400",
          badgeBg: "bg-lime-500/10",
          badgeBorder: "border-lime-500/20",
        },
      },
      {
        id: "modelo_negocio",
        nombre: "Modelo de Negocio, Impacto & ROI",
        descripcion: "Viabilidad comercial, propuesta de valor y escalabilidad.",
        peso: 20,
        maxPuntaje: 20,
        color: {
          bar: "bg-yellow-400",
          text: "text-yellow-400",
          badgeBg: "bg-yellow-500/10",
          badgeBorder: "border-yellow-500/20",
        },
      },
    ],
  },
];

export const RUBRICA_OFICIAL: CriterioRubrica[] = ETAPAS_DEFAULT[0].rubrica;

export const EQUIPOS_DEFAULT: EquipoEvaluacion[] = [
  {
    id: "eq-1",
    codigo: "INN26-T101",
    nombre: "Proyecto 1",
    desafioId: "mineria",
    desafioNombre: "Minería: operaciones sostenibles y competitivas",
    ods: ["ODS 9", "ODS 12", "ODS 15"],
    resumenIdea:
      "Sistema de visión por computadora para detección temprana de fisuras y relaves en faenas mineras en altura.",
    links: {
      github: "https://github.com/innovathon/proyecto-1",
      demo: "https://proyecto-1-demo.app",
      pitch: "https://slides.com/proyecto-1",
      documento: "/documents/bases.pdf",
    },
    calificaciones: {
      pablo: {
        juradoId: "pablo",
        puntajes: { solucion_innovacion: 15, calidad_tecnica: 14, modelo_negocio: 14, pitch_defensa: 14 },
        comentarios: { solucion_innovacion: "Buena propuesta técnica y arquitectura viable." },
        esBorrador: false,
        completado: true,
      },
      tyrone: {
        juradoId: "tyrone",
        puntajes: { solucion_innovacion: 14, calidad_tecnica: 14, modelo_negocio: 13, pitch_defensa: 15 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      uniqua: {
        juradoId: "uniqua",
        puntajes: { solucion_innovacion: 14, calidad_tecnica: 13, modelo_negocio: 15, pitch_defensa: 14 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      tasha: {
        juradoId: "tasha",
        puntajes: { solucion_innovacion: 14, calidad_tecnica: 14, modelo_negocio: 14, pitch_defensa: 14 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      austin: {
        juradoId: "austin",
        puntajes: { solucion_innovacion: 14, calidad_tecnica: 15, modelo_negocio: 14, pitch_defensa: 14 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
    },
  },
  {
    id: "eq-2",
    codigo: "INN26-T102",
    nombre: "Proyecto 2",
    desafioId: "logistica",
    desafioNombre: "Logística y transporte inteligente",
    ods: ["ODS 9", "ODS 11"],
    resumenIdea:
      "Enrutamiento predictivo multivariable con algoritmos genéticos y redes neuronales para reducir emisiones en transporte pesado.",
    links: {
      github: "https://github.com/innovathon/proyecto-2",
      demo: "https://proyecto-2-demo.app",
    },
    calificaciones: {
      pablo: {
        juradoId: "pablo",
        puntajes: { solucion_innovacion: 16, calidad_tecnica: 16, modelo_negocio: 16, pitch_defensa: 15 },
        comentarios: { solucion_innovacion: "Solución sólida y buen benchmark comparativo." },
        esBorrador: false,
        completado: true,
      },
      tyrone: {
        juradoId: "tyrone",
        puntajes: { solucion_innovacion: 16, calidad_tecnica: 15, modelo_negocio: 16, pitch_defensa: 16 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      uniqua: {
        juradoId: "uniqua",
        puntajes: { solucion_innovacion: 15, calidad_tecnica: 15, modelo_negocio: 16, pitch_defensa: 15 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      tasha: {
        juradoId: "tasha",
        puntajes: { solucion_innovacion: 16, calidad_tecnica: 16, modelo_negocio: 15, pitch_defensa: 16 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
      austin: {
        juradoId: "austin",
        puntajes: { solucion_innovacion: 16, calidad_tecnica: 16, modelo_negocio: 16, pitch_defensa: 15 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
    },
  },
  {
    id: "eq-3",
    codigo: "INN26-T103",
    nombre: "Proyecto 3",
    desafioId: "ecommerce",
    desafioNombre: "Ecommerce: logística inteligente y circular",
    ods: ["ODS 9", "ODS 12"],
    resumenIdea:
      "Plataforma inteligente que predice devoluciones textiles usando análisis de calce con IA y optimiza packaging biodegradable.",
    links: {
      github: "https://github.com/innovathon/proyecto-3",
      demo: "https://proyecto-3-demo.app",
    },
    calificaciones: {
      austin: {
        juradoId: "austin",
        puntajes: { solucion_innovacion: 15, calidad_tecnica: 15, modelo_negocio: 16, pitch_defensa: 14 },
        comentarios: {},
        esBorrador: false,
        completado: true,
      },
    },
  },
];

export function calcularPuntajeJurado(
  calificacion: CalificacionJurado,
  rubrica: CriterioRubrica[] = RUBRICA_OFICIAL
): number {
  if (!calificacion || !calificacion.puntajes) return 0;
  let suma = 0;
  let sumaPesos = 0;

  for (const crit of rubrica) {
    const nota = calificacion.puntajes[crit.id] || 0;
    suma += nota * (crit.peso / 100);
    sumaPesos += crit.peso;
  }

  return sumaPesos > 0 ? Number(suma.toFixed(1)) : 0;
}

export function calcularPuntajeEquipo(
  equipo: EquipoEvaluacion,
  rubrica: CriterioRubrica[] = RUBRICA_OFICIAL
): { promedio: number; totalJuradosCalificados: number } {
  const calificaciones = Object.values(equipo.calificaciones || {}).filter(
    (c) => c && c.completado && !c.conflictoInteres
  );

  if (calificaciones.length === 0) {
    return { promedio: 0, totalJuradosCalificados: 0 };
  }

  const suma = calificaciones.reduce(
    (acc, cal) => acc + calcularPuntajeJurado(cal, rubrica),
    0
  );

  const promedio = Number((suma / calificaciones.length).toFixed(1));
  return { promedio, totalJuradosCalificados: calificaciones.length };
}
