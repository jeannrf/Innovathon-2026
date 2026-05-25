export interface CollaboratorMetadata {
  name?: string;
  order?: number;
  imageClassName?: string;
}

export const collaboratorsMetadata: Record<string, CollaboratorMetadata> = {
  // Define metadata personalizada para las imágenes de los colaboradores.
  // La clave es el nombre de archivo (por ejemplo, "Logo_DSCUTP.png").
  // Ejemplo:
  // "Logo_DSCUTP.png": { name: "DSC UTP", order: 1 }
};
