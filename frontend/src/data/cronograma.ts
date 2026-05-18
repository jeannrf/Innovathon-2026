export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export const cronograma: TimelineEvent[] = [
  {
    date: "23 de agosto al 11 de octubre",
    title: "Lanzamiento y Convocatoria",
    description: "Difusión oficial en redes sociales y universidades. Charlas informativas y apertura de inscripciones."
  },
  {
    date: "19 de septiembre al 11 de octubre",
    title: "Entrega de Retos",
    description: "Los equipos reciben los retos a trabajar y asisten a las primeras charlas clave."
  },
  {
    date: "12 de octubre al 18 de octubre",
    title: "Evaluación de Propuestas",
    description: "Filtro inicial por expertos para seleccionar a los equipos que pasarán a la fase de prototipado."
  },
  {
    date: "19 al 27 de octubre",
    title: "Mentoría y Prototipado",
    description: "Fase intensa de desarrollo técnico, talleres y selección de finalistas."
  },
  {
    date: "28 de octubre al 14 de noviembre",
    title: "Validación y Feedback",
    description: "Pruebas con usuarios reales y ajustes finales bajo la guía de mentores."
  },
  {
    date: "15 de noviembre",
    title: "Gran Final (UNI)",
    description: "Presentación ante jurado y ceremonia de premiación en la Universidad Nacional de Ingeniería."
  }
];
