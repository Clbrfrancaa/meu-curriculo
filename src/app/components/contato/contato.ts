import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  // Links de contato reais
  readonly email = signal('cleber.francaa12@gmail.com');
  readonly githubUrl = signal('https://github.com/Clbrfrancaa');
  readonly linkedinUrl = signal('https://www.linkedin.com/in/cleberfranca12/');
  readonly whatsappUrl = signal(
    'https://wa.me/5585987001209?text=Ol%C3%A1%20Cleber,%20vi%20seu%20curr%C3%ADculo%20digital!'
  );

  // Estado do botão de copiar e-mail
  readonly copiado = signal(false);

  // Usa a Clipboard API nativa do navegador para copiar o e-mail
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);

      // Reseta o estado do botão após 2.5 segundos
      setTimeout(() => {
        this.copiado.set(false);
      }, 2500);
    } catch (err) {
      console.error('Falha ao copiar texto:', err);
    }
  }
}
