export const BRAND = {
  name: 'Sistemia',
  slogan: 'Tecnología hecha simple para que tu negocio crezca',
  tagline: 'Soluciones tecnológicas a la medida',
  whatsapp: {
    number: '573235907969',
    display: '+57 323 590 7969',
    defaultMessage: '¡Hola Sistemia! 👋 Me interesa conocer más sobre sus servicios.',
  },
  email: 'sistemia.ventas@gmail.com',
  location: 'Oriente Antioqueño, Colombia',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
} as const;

export const whatsappUrl = (message?: string): string => {
  const text = encodeURIComponent(message ?? BRAND.whatsapp.defaultMessage);
  return `https://wa.me/${BRAND.whatsapp.number}?text=${text}`;
};
