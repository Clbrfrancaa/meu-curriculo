import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  // Signals com os seus dados de apresentação
  readonly nome = signal('Cleber França');
  readonly papel = signal('Dev Fullstack');
  readonly bio = signal(
    'Transformando problemas complexos em soluções elegantes através de código limpo, arquitetura sólida e alta performance.'
  );

  // Avatar tech com referência a Lobo/Cyberpunk via API do Dicebear
  readonly avatarUrl = signal(
    // 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=CrimsonWolf&backgroundColor=161118'
    '/eu.jpg'
  );
}
