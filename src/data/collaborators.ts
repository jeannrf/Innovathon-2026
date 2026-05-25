export interface Collaborator {
  src: string;
  name: string;
  category: "organizadores" | "auspiciadores" | "patrocinadores";
  order: number;
  imageClassName?: string;
}

export const collaborators: Collaborator[] = [
  {
    "src": "/images/colaboradores/organizadores/Logo_DSCUTP.png",
    "name": "Logo DSCUTP",
    "category": "organizadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/organizadores/Logo_EQUIPU.png",
    "name": "Logo EQUIPU",
    "category": "organizadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/organizadores/Logo_FIIS.png",
    "name": "Logo FIIS",
    "category": "organizadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/organizadores/Logo_logoFutura.png",
    "name": "Logo logoFutura",
    "category": "organizadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/organizadores/Logo_logoUnicode.png",
    "name": "Logo logoUnicode",
    "category": "organizadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/auspiciadores/Logo_logoFutura.png",
    "name": "Logo logoFutura",
    "category": "auspiciadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/patrocinadores/Logo_ASEP.png",
    "name": "Logo ASEP",
    "category": "patrocinadores",
    "order": 999
  },
  {
    "src": "/images/colaboradores/patrocinadores/Logo_OTI.png",
    "name": "Logo OTI",
    "category": "patrocinadores",
    "order": 999
  }
];
