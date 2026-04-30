import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { whatsappUrl } from '../../shared/brand';

interface Service {
  id: string;
  icon: 'web' | 'inventory' | 'sales' | 'dian';
  title: string;
  tag?: string;
  short: string;
  features: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  readonly whatsappHref = whatsappUrl(
    'Hola Sistemia, me interesa cotizar uno de sus servicios.'
  );

  readonly services: Service[] = [
    {
      id: 'dian',
      icon: 'dian',
      title: 'Facturación electrónica DIAN',
      tag: 'Nuestro diferencial',
      short:
        'Cumple con la regulación colombiana sin enredos. Integramos tu negocio con la DIAN para que emitas facturas electrónicas válidas, en minutos.',
      features: [
        'Integración oficial con la DIAN',
        'Emisión rápida de facturas válidas',
        'Asesoría para empezar a facturar electrónicamente',
        'Soporte en lenguaje claro, sin tecnicismos',
      ],
      highlight: true,
    },
    {
      id: 'web',
      icon: 'web',
      title: 'Páginas web profesionales',
      short:
        'Una página web moderna, rápida y responsive que muestra tu negocio como es: serio, profesional y listo para vender.',
      features: [
        'Diseño 100% adaptado a celular',
        'Optimización para Google (SEO básico)',
        'Botón de WhatsApp y formularios de contacto',
        'Hosting y dominio orientados',
      ],
    },
    {
      id: 'inventory',
      icon: 'inventory',
      title: 'Plataformas de inventario',
      short:
        'Deja el cuaderno y el Excel. Controla tu stock en tiempo real, evita faltantes y entérate de qué se mueve más.',
      features: [
        'Productos, categorías y stock al día',
        'Alertas de mínimos y vencimientos',
        'Reportes claros en pantalla',
        'Acceso desde cualquier dispositivo',
      ],
    },
    {
      id: 'sales',
      icon: 'sales',
      title: 'Registro de ventas',
      short:
        'Una caja registradora moderna. Vende, registra y entiende tu negocio con números reales en tiempo real.',
      features: [
        'Punto de venta simple y rápido',
        'Histórico de ventas y clientes',
        'Reportes diarios, semanales y mensuales',
        'Conectado con inventario y facturación',
      ],
    },
  ];
}
