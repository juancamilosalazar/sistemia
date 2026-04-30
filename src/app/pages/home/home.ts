import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND, whatsappUrl } from '../../shared/brand';

interface Pillar {
  icon: 'rocket' | 'wallet' | 'handshake' | 'shield';
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly brand = BRAND;
  readonly whatsappHref = whatsappUrl(
    'Hola Sistemia, vi su página y me gustaría conocer más sobre sus servicios.'
  );

  readonly pillars: Pillar[] = [
    {
      icon: 'rocket',
      title: 'Crece sin frenos',
      desc: 'Sistematizamos tu negocio para que dejes de perder tiempo en tareas manuales y te enfoques en vender más.',
    },
    {
      icon: 'wallet',
      title: 'Inversión accesible',
      desc: 'Cobros de administración bajos y planes de ejecución ajustados a tu realidad. Pagas por lo que necesitas, sin sorpresas.',
    },
    {
      icon: 'handshake',
      title: 'Acompañamiento real',
      desc: 'No te dejamos solo. Te guiamos paso a paso desde la idea hasta que tu plataforma esté funcionando todos los días.',
    },
    {
      icon: 'shield',
      title: 'Cumple con la DIAN',
      desc: 'Integramos facturación electrónica para que tu negocio cumpla con la regulación colombiana sin estrés ni dolores de cabeza.',
    },
  ];

  readonly steps: Step[] = [
    { num: '01', title: 'Conversamos', desc: 'Entendemos tu negocio, tus retos y a dónde quieres llegar.' },
    { num: '02', title: 'Diseñamos a la medida', desc: 'Te proponemos una solución concreta, simple y dentro de tu presupuesto.' },
    { num: '03', title: 'Implementamos', desc: 'Construimos, probamos y ponemos en marcha tu plataforma.' },
    { num: '04', title: 'Te acompañamos', desc: 'Capacitación y soporte continuo para que todo siga funcionando.' },
  ];
}
