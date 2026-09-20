import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { ContatoComponent } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [Hero, Skills, ExperienciaComponent, ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Signal para controlar o tema atual (Dark = true, Light = false)
  readonly isDark = signal(true);

  toggleTheme(): void {
    this.isDark.update((dark) => !dark);
    const theme = this.isDark() ? 'dark' : 'light';
    // Aplica o atributo data-theme na tag <html> para as variáveis CSS reagirem
    document.documentElement.setAttribute('data-theme', theme);
  }
}
