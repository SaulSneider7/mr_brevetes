
import type { Service, Branch, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'medico',
    title: 'Examen Médico',
    description: 'Válido para todas las categorías de brevetes. Entrega rápida y legal.',
    price: 150,
    icon: 'fa-user-doctor',
    category: 'Salud',
    popular: true
  },
  {
    id: 'recupera',
    title: 'Recupera tu Licencia',
    description: 'Curso "Cambiemos tu actitud" para rehabilitar tu brevete suspendido.',
    price: 150,
    icon: 'fa-rotate-left',
    category: 'Trámites'
  },
  {
    id: 'mototaxi',
    title: 'Licencia Mototaxi (BII-C)',
    description: 'Incluye examen médico + curso obligatorio. Todo en un solo lugar.',
    price: 280,
    icon: 'fa-motorcycle',
    category: 'Nueva Licencia'
  },
  {
    id: 'especial-a4',
    title: 'Licencia Especial A4',
    description: 'Para transporte de materiales peligrosos. Incluye médico + curso.',
    price: 280,
    icon: 'fa-regular fa-address-card',
    category: 'Especial'
  },
  {
    id: 'a2b',
    title: 'Recategorización A2B',
    description: 'Sube de nivel. Incluye examen médico + curso de profesionalización.',
    price: 350,
    icon: 'fa-bus',
    category: 'Recategorización'
  },
  {
    id: 'a3c',
    title: 'Recategorización A3C',
    description: 'La categoría máxima. Incluye examen médico + curso profesional.',
    price: 450,
    icon: 'fa-truck-moving',
    category: 'Recategorización',
    popular: true
  },
  {
    id: 'normativa',
    title: 'Curso de Normativa',
    description: 'Evita sanciones graves con nuestro curso actualizado sobre el RNT.',
    price: 100,
    icon: 'fa-solid fa-book',
    category: 'Educación'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 1,
    name: 'Sede Principal Lince',
    district: 'Lince',
    address: 'Av. Arequipa 2450',
    reference: 'A 2 cuadras del C.C. Risso',
    mapUrl: 'https://maps.app.goo.gl/uX3L5Gk5UoU5LpL87',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sede Norte Los Olivos',
    district: 'Los Olivos',
    address: 'Av. Antúnez de Mayolo 890',
    reference: 'Frente a la Municipalidad',
    mapUrl: 'https://maps.app.goo.gl/uX3L5Gk5UoU5LpL87',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sede Este SJL',
    district: 'San Juan de Lurigancho',
    address: 'Av. Próceres de la Independencia 1240',
    reference: 'Cerca a la Estación Los Jardines',
    mapUrl: 'https://maps.app.goo.gl/uX3L5Gk5UoU5LpL87',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    text: 'Increíble servicio. Obtuve mi recategorización A3C en tiempo récord y sin complicaciones legales. Muy recomendados.',
    rating: 5,
    category: 'A3C'
  },
  {
    id: '2',
    name: 'María Alejandra',
    text: 'El examen médico fue súper rápido. Me ayudaron con todas mis dudas por WhatsApp antes de ir a la oficina.',
    rating: 5,
    category: 'Examen Médico'
  },
  {
    id: '3',
    name: 'Jorge Luis Soto',
    text: 'Logré recuperar mi licencia gracias al curso de actitud. Los asesores son muy profesionales y directos.',
    rating: 4,
    category: 'Curso Recuperación'
  }
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/51917794918',
  facebook: 'https://facebook.com/mrbrevetes',
  instagram: 'https://instagram.com/mrbrevetes',
  tiktok: 'https://tiktok.com/@mrbrevetes'
};
