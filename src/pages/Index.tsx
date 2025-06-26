
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Phone, Clock, Star, Users, Shield, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Car,
      title: "Service Rapide",
      description: "Arrivée en moins de 5 minutes en moyenne"
    },
    {
      icon: Clock,
      title: "24h/24 - 7j/7",
      description: "Service disponible à toute heure"
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Chauffeurs professionnels certifiés"
    },
    {
      icon: MapPin,
      title: "GPS Intégré",
      description: "Trajet optimal garanti"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Service exceptionnel ! Toujours à l'heure et chauffeurs très professionnels.",
      rating: 5
    },
    {
      name: "Jean Martin",
      text: "Je recommande vivement. Très pratique et tarifs compétitifs.",
      rating: 5
    },
    {
      name: "Sophie Leroux",
      text: "Application facile à utiliser, service de qualité. Mon taxi préféré !",
      rating: 5
    }
  ];

  const carImages = [
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-taxi-yellow mr-2" />
              <span className="font-bold text-xl font-poppins text-taxi-black">TaxiPro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#accueil" className="hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                <a href="#services" className="hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <Link to="/contact" className="hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link to="/admin" className="bg-taxi-yellow hover:bg-taxi-orange transition-colors px-4 py-2 rounded-md text-sm font-medium text-taxi-black">Admin</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-taxi-yellow transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#accueil" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Accueil</a>
              <a href="#services" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Services</a>
              <Link to="/contact" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link to="/admin" className="block bg-taxi-yellow hover:bg-taxi-orange transition-colors px-3 py-2 rounded-md text-base font-medium text-taxi-black">Admin</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-black/80 to-taxi-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${carImages[currentImageIndex]})` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-poppins">
              Votre <span className="text-taxi-yellow">Taxi</span> en un clic
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Service de taxi professionnel, rapide et sécurisé. 
              Réservez maintenant et voyagez en toute sérénité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Réserver Maintenant
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-taxi-black transition-all duration-300 px-8 py-4 text-lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-taxi-yellow/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-slow">
          <div className="w-16 h-16 bg-taxi-orange/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-taxi-black mb-4 font-poppins">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez pourquoi des milliers de clients nous font confiance chaque jour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift taxi-shadow border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="taxi-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-taxi-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-taxi-black mb-2 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 taxi-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-taxi-black mb-2 font-poppins">500+</div>
              <div className="text-taxi-black/80 text-lg">Clients Satisfaits</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-taxi-black mb-2 font-poppins">24/7</div>
              <div className="text-taxi-black/80 text-lg">Service Disponible</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-taxi-black mb-2 font-poppins">50+</div>
              <div className="text-taxi-black/80 text-lg">Chauffeurs Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-taxi-black mb-4 font-poppins">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Témoignages authentiques de nos utilisateurs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-taxi-yellow fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="taxi-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-taxi-black" />
                </div>
                <cite className="text-lg font-semibold text-taxi-black font-poppins">
                  {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-taxi-yellow' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-taxi-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Prêt à voyager avec nous ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de clients satisfaits. Réservez votre course dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              01 23 45 67 89
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300 px-8 py-4 text-lg">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-taxi-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-taxi-yellow mr-2" />
                <span className="font-bold text-xl font-poppins">TaxiPro</span>
              </div>
              <p className="text-gray-400">
                Votre service de taxi professionnel et fiable, disponible 24h/24 et 7j/7.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 01 23 45 67 89</p>
                <p>✉️ contact@taxipro.fr</p>
                <p>📍 123 Rue de la Paix, 75001 Paris</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins">Horaires</h3>
              <div className="space-y-2 text-gray-400">
                <p>Lundi - Dimanche</p>
                <p className="text-taxi-yellow font-semibold">24h/24 - 7j/7</p>
                <p>Service continu</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaxiPro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
