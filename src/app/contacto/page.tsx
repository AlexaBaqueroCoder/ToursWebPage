import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contacto | Cartagena Luxury Tours',
  description:
    'Conoce a tu anfitrión y contáctanos por WhatsApp para organizar tours, islas y experiencias en Cartagena.',
};

export default function ContactoPage() {
  return <ContactPageContent />;
}
