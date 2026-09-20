import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // Lista com as logos oficiais do Devicon
  readonly todasSkills = signal<Skill[]>([
    // Frontend
    {
      nome: 'Angular',
      categoria: 'Frontend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      nome: 'TypeScript',
      categoria: 'Frontend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      nome: 'HTML5',
      categoria: 'Frontend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      nome: 'CSS3 & SCSS',
      categoria: 'Frontend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    },
    {
      nome: 'JavaScript',
      categoria: 'Frontend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },

    // Backend
    {
      nome: 'Node.js',
      categoria: 'Backend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      nome: 'C#',
      categoria: 'Backend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    },
    {
      nome: 'Java',
      categoria: 'Backend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    },
    {
      nome: 'Python',
      categoria: 'Backend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
      nome: 'SQL & PostgreSQL',
      categoria: 'Backend',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    },

    // Ferramentas
    {
      nome: 'Git',
      categoria: 'Ferramentas',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      nome: 'GitHub',
      categoria: 'Ferramentas',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      nome: 'Docker',
      categoria: 'Ferramentas',
      nivel: 'Praticando',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    },
    {
      nome: 'VS Code',
      categoria: 'Ferramentas',
      nivel: 'Em Uso',
      iconeUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },

    // Soft Skills (com representações visuais)
    {
      nome: 'Resolução de Problemas',
      categoria: 'Soft Skills',
      nivel: 'Em Uso',
      icone: '🧩',
    },
    {
      nome: 'Trabalho em Equipe',
      categoria: 'Soft Skills',
      nivel: 'Em Uso',
      icone: '🤝',
    },
    {
      nome: 'Comunicação Clara',
      categoria: 'Soft Skills',
      nivel: 'Em Uso',
      icone: '💬',
    },
  ]);

  readonly filtroAtivo = signal<string>('Todos');

  readonly categorias = computed(() => {
    const cats = Array.from(new Set(this.todasSkills().map((s) => s.categoria)));
    return ['Todos', ...cats];
  });

  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.todasSkills();
    }
    return this.todasSkills().filter((skill) => skill.categoria === filtro);
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
