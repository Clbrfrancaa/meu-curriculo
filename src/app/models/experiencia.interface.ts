// src/app/models/experiencia.interface.ts

export type TipoExperiencia = 'formacao' | 'curso' | 'objetivo';

export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tipo: TipoExperiencia;
  tags: string[];
}
