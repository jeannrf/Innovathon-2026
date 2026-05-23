export interface Challenge {
  icon: string;
  ods: string;
  title: string;
  description: string;
}

export const desafios: Challenge[] = [
  {
    icon: "pickaxe",
    ods: "ODS 9, 12, 15",
    title: "Minería: operaciones sostenibles y competitivas",
    description: "Transformar la minería hacia operaciones más sostenibles y competitivas mediante innovación tecnológica. El reto es gestionar los riesgos ambientales y sociales promoviendo prácticas responsables que reduzcan el impacto negativo en el entorno."
  },
  {
    icon: "shopping-cart",
    ods: "ODS 9, 12",
    title: "Ecommerce: logística inteligente y circular",
    description: "Desarrollar una logística inteligente y resiliente que impulse una economía circular. Se busca minimizar residuos y garantizar cadenas de suministro responsables que contribuyan a preservar los ecosistemas."
  },
  {
    icon: "truck",
    ods: "ODS 9",
    title: "Logística y transporte inteligente",
    description: "Mejora la eficiencia del transporte y reduce su impacto ambiental. Desarrolla soluciones de IA que optimicen rutas y gestionen flotas para disminuir consumo de combustible, emisiones de carbono y tráfico en las ciudades."
  },
  {
    icon: "book-open",
    ods: "ODS 4, 9",
    title: "Educación: IA para calidad y acceso",
    description: "Mejorar la calidad y el acceso a la educación utilizando inteligencia artificial para personalizar el aprendizaje, reducir brechas y garantizar una educación inclusiva y equitativa."
  }
];
