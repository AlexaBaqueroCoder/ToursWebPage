import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  date: string;
  guests: number;
  message?: string;
}

export interface NewsletterData {
  email: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const submitBooking = async (data: BookingData) => {
  if (!db) {
    console.warn('Firebase not configured. Booking data:', data);
    return { success: true, id: 'demo-mode' };
  }
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...data,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting booking:', error);
    return { success: false, error: 'Error al enviar la reserva' };
  }
};

export const subscribeNewsletter = async (data: NewsletterData) => {
  if (!db) {
    console.warn('Firebase not configured. Newsletter data:', data);
    return { success: true, id: 'demo-mode' };
  }
  try {
    const docRef = await addDoc(collection(db, 'newsletter'), {
      ...data,
      subscribedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error subscribing:', error);
    return { success: false, error: 'Error al suscribirse' };
  }
};

export const submitContact = async (data: ContactData) => {
  if (!db) {
    console.warn('Firebase not configured. Contact data:', data);
    return { success: true, id: 'demo-mode' };
  }
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact:', error);
    return { success: false, error: 'Error al enviar el mensaje' };
  }
};
