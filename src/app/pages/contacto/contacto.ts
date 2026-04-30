import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BRAND, whatsappUrl } from '../../shared/brand';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  readonly brand = BRAND;
  readonly whatsappHrefDefault = whatsappUrl();

  readonly nombre = signal('');
  readonly negocio = signal('');
  readonly mensaje = signal('');

  get whatsappHref(): string {
    const partes: string[] = [];
    const n = this.nombre().trim();
    const b = this.negocio().trim();
    const m = this.mensaje().trim();

    if (n) partes.push(`¡Hola Sistemia! Soy ${n}`);
    else partes.push('¡Hola Sistemia! 👋');

    if (b) partes.push(`de ${b}`);

    if (m) {
      partes.push(`. ${m}`);
    } else {
      partes.push('. Me interesa conocer más sobre sus servicios.');
    }

    return whatsappUrl(partes.join(' '));
  }
}
