// src/app/models/skill.interface.ts

export type CategoriaSkill = 'Frontend' | 'Backend' | 'Ferramentas' | 'Soft Skills';

export type NivelSkill = 'Praticando' | 'Em Uso' | 'Domino';

export interface Skill {
  nome: string;
  categoria: CategoriaSkill;
  nivel: NivelSkill;
  iconeUrl?: string; // URL da logo oficial SVG (Devicon)
  icone?: string;    // Fallback ou emoji para Soft Skills
}
