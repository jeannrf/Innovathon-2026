export interface Challenge {
  id: string;
  category: string;
  title: string;
  description: string;
  ods: string[];
}

export const desafios: Challenge[] = [
  {
    id: "mineria",
    category: "Minería",
    title: "Operaciones sostenibles y competitivas",
    description: "Transformar la minería hacia operaciones más sostenibles reduciendo impactos ambientales y sociales.",
    ods: ["ODS 9", "ODS 12"]
  },
  {
    id: "ecommerce",
    category: "Ecommerce",
    title: "Logística inteligente y circular",
    description: "Desarrollar una logística resiliente que impulse una economía circular minimizando residuos.",
    ods: ["ODS 12"]
  },
  {
    id: "transporte",
    category: "Transporte",
    title: "Movilidad inteligente en ciudades",
    description: "Optimizar rutas y flotas mediante IA para disminuir emisiones y tráfico urbano.",
    ods: ["ODS 9", "ODS 11"]
  },
  {
    id: "educacion",
    category: "Educación",
    title: "IA para calidad y acceso",
    description: "Personalizar el aprendizaje y reducir brechas para garantizar educación inclusiva.",
    ods: ["ODS 4"]
  }
];
