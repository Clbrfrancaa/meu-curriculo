import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  // Lista com os marcos reais da sua trajetória
  readonly experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026 — Presente (1º de 5 Semestres)',
      titulo: 'Análise e Desenvolvimento de Sistemas (ADS)',
      instituicao: 'Faculdade Uniateneu',
      descricao:
        'Graduação tecnológica focada em fundamentos da computação, algoritmos, modelagem de banco de dados, arquitetura e engenharia de software.',
      tipo: 'formacao',
      tags: ['Ensino Superior', 'ADS', 'Engenharia de Software', 'Banco de Dados'],
    },
    {
      id: 2,
      periodo: '2026 — Em andamento',
      titulo: 'Formação Fullstack — Programa Geração Tech',
      instituicao: 'Digital College',
      descricao:
        'Capacitação prática intensiva voltada para as demandas reais do mercado de trabalho, desenvolvendo soluções completas com tecnologias modernas de Frontend e Backend.',
      tipo: 'curso',
      tags: ['Geração Tech', 'Fullstack', 'Frontend', 'Backend', 'Projetos Reais'],
    },
    {
      id: 3,
      periodo: '2026 — Meta Contínua',
      titulo: 'Construção de Portfólio & Primeira Oportunidade Tech',
      instituicao: 'Foco Profissional',
      descricao:
        'Dedicação à criação de projetos autorais bem estruturados, consolidação de boas práticas (código limpo e versionamento com Git) e busca da primeira vaga como Desenvolvedor.',
      tipo: 'objetivo',
      tags: ['Portfólio Prático', 'Angular 22', 'TypeScript', 'Clean Code'],
    },
  ]);
}
