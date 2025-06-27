
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    
    // Hero Section
    'hero.title': 'Transport Premium',
    'hero.subtitle': 'Services de transport spécialisés : longue distance, familial, aéroport et adapté. Excellence et confort garantis.',
    'hero.book_now': 'Réserver Maintenant',
    'hero.our_services': 'Nos Services',
    
    // Services
    'services.title': 'Nos Services Spécialisés',
    'services.subtitle': 'Des solutions de transport adaptées à tous vos besoins',
    'services.long_distance.title': 'Trajets Longue Distance',
    'services.long_distance.description': 'Transport urbain, inter-villes et inter-provinces avec confort premium',
    'services.long_distance.feature1': 'Transport urbain dans toute la ville',
    'services.long_distance.feature2': 'Déplacements inter-villes',
    'services.long_distance.feature3': 'Voyages inter-provinces',
    'services.family.title': 'Service Familial',
    'services.family.description': 'Accompagnement sécurisé pour vos enfants et votre famille',
    'services.family.feature1': 'Récupération d\'enfants en garderie',
    'services.family.feature2': 'Accompagnement personnalisé mineurs',
    'services.family.feature3': 'Transport familial sécurisé',
    'services.airport.title': 'Transport Aéroport',
    'services.airport.description': 'Service navette aéroport disponible 24h/24',
    'services.airport.feature1': 'Navette aller vers l\'aéroport',
    'services.airport.feature2': 'Service de récupération',
    'services.airport.feature3': 'Disponible 24h/24',
    'services.adapted.title': 'Service Adapté',
    'services.adapted.description': 'Solutions personnalisées pour tous vos besoins de transport',
    'services.adapted.feature1': 'Transport personnes sans permis',
    'services.adapted.feature2': 'Récupération véhicules',
    'services.adapted.feature3': 'Chauffeur avec votre voiture',
    
    // Stats
    'stats.clients': 'Clients Satisfaits',
    'stats.available': 'Service Disponible',
    'stats.drivers': 'Chauffeurs Experts',
    
    // Testimonials
    'testimonials.title': 'Témoignages Clients',
    'testimonials.subtitle': 'L\'avis authentique de nos utilisateurs',
    
    // CTA
    'cta.title': 'Prêt à voyager avec nous ?',
    'cta.subtitle': 'Rejoignez des centaines de clients satisfaits. Réservez votre course maintenant.',
    'cta.contact': 'Nous Contacter',
    
    // Footer
    'footer.description': 'Votre service de taxi premium pour des trajets sûrs et confortables dans toute la région.',
    'footer.quick_links': 'Liens Rapides',
    'footer.our_services': 'Nos Services',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits réservés.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    
    // Hero Section
    'hero.title': 'Premium Transport',
    'hero.subtitle': 'Specialized transport services: long distance, family, airport and adapted. Excellence and comfort guaranteed.',
    'hero.book_now': 'Book Now',
    'hero.our_services': 'Our Services',
    
    // Services
    'services.title': 'Our Specialized Services',
    'services.subtitle': 'Transport solutions adapted to all your needs',
    'services.long_distance.title': 'Long Distance Trips',
    'services.long_distance.description': 'Urban, inter-city and inter-provincial transport with premium comfort',
    'services.long_distance.feature1': 'Urban transport throughout the city',
    'services.long_distance.feature2': 'Inter-city travel',
    'services.long_distance.feature3': 'Inter-provincial journeys',
    'services.family.title': 'Family Service',
    'services.family.description': 'Secure accompaniment for your children and family',
    'services.family.feature1': 'Daycare pickup for children',
    'services.family.feature2': 'Personalized minor accompaniment',
    'services.family.feature3': 'Secure family transport',
    'services.airport.title': 'Airport Transport',
    'services.airport.description': 'Airport shuttle service available 24/7',
    'services.airport.feature1': 'One-way shuttle to airport',
    'services.airport.feature2': 'Pickup service',
    'services.airport.feature3': 'Available 24/7',
    'services.adapted.title': 'Adapted Service',
    'services.adapted.description': 'Personalized solutions for all your transport needs',
    'services.adapted.feature1': 'Transport for people without license',
    'services.adapted.feature2': 'Vehicle pickup',
    'services.adapted.feature3': 'Chauffeur with your car',
    
    // Stats
    'stats.clients': 'Satisfied Clients',
    'stats.available': 'Service Available',
    'stats.drivers': 'Expert Drivers',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'Authentic feedback from our users',
    
    // CTA
    'cta.title': 'Ready to travel with us?',
    'cta.subtitle': 'Join hundreds of satisfied clients. Book your ride now.',
    'cta.contact': 'Contact Us',
    
    // Footer
    'footer.description': 'Your premium taxi service for safe and comfortable trips throughout the region.',
    'footer.quick_links': 'Quick Links',
    'footer.our_services': 'Our Services',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
