import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { BRAND, whatsappUrl } from '../brand';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButton {
  readonly href = whatsappUrl();
  readonly displayNumber = BRAND.whatsapp.display;
  readonly tooltipOpen = signal(false);

  showTooltip() {
    this.tooltipOpen.set(true);
  }

  hideTooltip() {
    this.tooltipOpen.set(false);
  }
}
