export interface Requirement {
  icon: 'graduation-cap' | 'users' | 'terminal' | 'layers' | 'lightbulb';
  title: string;
  description: string;
}

export const requisitos: Requirement[] = [
  {
    icon: 'graduation-cap',
    title: 'Estudiantes de Pregrado',
    description: 'Estudiantes de pregrado matriculados en el periodo académico vigente (universidad, instituto o educación superior del Perú, pública o privada).'
  },
  {
    icon: 'users',
    title: 'Equipos de exactamente 4 integrantes',
    description: 'El grupo debe estar constituido por exactamente 4 participantes para las dinámicas y entregables grupales.'
  },
  {
    icon: 'terminal',
    title: 'Perfil TI Obligatorio',
    description: 'Al menos un integrante del equipo debe pertenecer a una carrera relacionada a Tecnologías de la Información, Ciencias de la Computación o afines.'
  },
  {
    icon: 'layers',
    title: 'Diversidad Multidisciplinaria',
    description: 'El equipo debe incluir participantes de al menos dos carreras distintas para asegurar diferentes perspectivas en la solución.'
  },
  {
    icon: 'lightbulb',
    title: 'Idea Preliminar e IA',
    description: 'Durante la inscripción, el equipo deberá presentar una idea preliminar del proyecto indicando qué herramientas y tecnologías de Inteligencia Artificial planean utilizar.'
  }
];
