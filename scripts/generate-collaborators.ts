import fs from "fs";
import path from "path";
import { collaboratorsMetadata } from "../src/data/collaborators-metadata";

//código importado del repo de hackaton ia-playgrounds, junto con los una pequeña modificación y los .json

const PUBLIC_DIR = path.join(process.cwd(), "public");
const COLABORADORES_DIR = path.join(PUBLIC_DIR, "images", "colaboradores");
const OUTPUT_PATH = path.join(process.cwd(), "src", "data", "collaborators.ts");

interface CollaboratorData {
  src: string;
  name: string;
  category: "organizadores" | "auspiciadores" | "patrocinadores";
  order: number;
  imageClassName?: string;
}

function parseFilename(filename: string): { name: string } {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);

  if (base.includes("__")) {
    const [rawName] = base.split("__");
    const name = rawName.replace(/[-_]/g, " ").trim();
    return { name };
  }

  const name = base.replace(/[-_]/g, " ").trim();
  return { name };
}

async function generate() {
  const categories = ["organizadores", "auspiciadores", "patrocinadores"] as const;

  // Ensure directories exist
  for (const category of categories) {
    fs.mkdirSync(path.join(COLABORADORES_DIR, category), { recursive: true });
  }

  const metadata = collaboratorsMetadata;

  const collaborators: CollaboratorData[] = [];

  for (const category of categories) {
    const categoryDir = path.join(COLABORADORES_DIR, category);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"].includes(ext);
    });

    for (const file of files) {
      const { name: defaultName } = parseFilename(file);
      const customMeta = metadata[file] || {};

      collaborators.push({
        src: `/images/colaboradores/${category}/${file}`,
        name: customMeta.name || defaultName,
        category,
        order: customMeta.order !== undefined ? customMeta.order : 999,
        imageClassName: customMeta.imageClassName,
      });
    }
  }

  collaborators.sort((a, b) => {
    const categoryOrder = { organizadores: 0, auspiciadores: 1, patrocinadores: 2 };
    if (a.category !== b.category) {
      return categoryOrder[a.category] - categoryOrder[b.category];
    }
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.name.localeCompare(b.name);
  });

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputContent = `export interface Collaborator {
  src: string;
  name: string;
  category: "organizadores" | "auspiciadores" | "patrocinadores";
  order: number;
  imageClassName?: string;
}

export const collaborators: Collaborator[] = ${JSON.stringify(collaborators, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, outputContent, "utf-8");
}

generate().catch(console.error);
