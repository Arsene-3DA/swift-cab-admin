
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Phone, Clock, Star, Users, Shield, MapPin, Menu, X, Plane, Baby, Home, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Car,
      title: "Trajets Longue Distance",
      description: "Transport urbain, inter-villes et inter-provinces avec confort premium",
      features: ["Transport urbain dans toute la ville", "Déplacements inter-villes", "Voyages inter-provinces"]
    },
    {
      icon: Baby,
      title: "Service Familial",
      description: "Accompagnement sécurisé pour vos enfants et votre famille",
      features: ["Récupération d'enfants en garderie", "Accompagnement personnalisé mineurs", "Transport familial sécurisé"]
    },
    {
      icon: Plane,
      title: "Transport Aéroport",
      description: "Service navette aéroport disponible 24h/24",
      features: ["Navette aller vers l'aéroport", "Service de récupération", "Disponible 24h/24"]
    },
    {
      icon: UserCheck,
      title: "Service Adapté",
      description: "Solutions personnalisées pour tous vos besoins de transport",
      features: ["Transport personnes sans permis", "Récupération véhicules", "Chauffeur avec votre voiture"]
    }
  ];

  const testimonials = [
    {
      name: "Marie Johnson",
      text: "Service exceptionnel pour mes trajets longue distance. Toujours ponctuel et très professionnel.",
      rating: 5
    },
    {
      name: "Jean Martin",
      text: "Parfait pour récupérer mes enfants à la garderie. Je recommande vivement ce service familial.",
      rating: 5
    },
    {
      name: "Sophie Dubois",
      text: "Navette aéroport impeccable, même pour un vol très tôt le matin. Service de qualité!",
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="font-bold text-xl font-poppins text-white">Taxi_Tchix</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link to="/admin" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all px-4 py-2 rounded-md text-sm font-medium text-black">Admin</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-yellow-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-yellow-600/20 animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-base font-medium">Accueil</a>
              <a href="#services" className="block text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-base font-medium">Services</a>
              <Link to="/contact" className="block text-gray-300 hover:text-yellow-500 transition-colors px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link to="/admin" className="block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all px-3 py-2 rounded-md text-base font-medium text-black">Admin</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${carImages[currentImageIndex]})` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-poppins">
              Transport <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Premium</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Services de transport spécialisés : longue distance, familial, aéroport et adapté. 
              Excellence et confort garantis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg shadow-2xl shadow-yellow-500/25">
                <Phone className="mr-2 h-5 w-5" />
                Réserver Maintenant
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Nos Services
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-slow">
          <div className="w-16 h-16 bg-yellow-600/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
              Nos Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Spécialisés</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des solutions de transport adaptées à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-600/20 shadow-2xl shadow-black/50">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-poppins">500+</div>
              <div className="text-black/80 text-lg font-medium">Clients Satisfaits</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-poppins">24/7</div>
              <div className="text-black/80 text-lg font-medium">Service Disponible</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-poppins">50+</div>
              <div className="text-black/80 text-lg font-medium">Chauffeurs Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
              Témoignages <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clients</span>
            </h2>
            <p className="text-xl text-gray-300">
              L'avis authentique de nos utilisateurs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-600/20 shadow-2xl shadow-black/50 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-200 mb-6 italic font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <cite className="text-lg font-semibold text-white font-poppins">
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
                    index === currentTestimonial ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden border-t border-yellow-600/20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Prêt à voyager avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">nous ?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de clients satisfaits. Réservez votre course maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-4 text-lg shadow-2xl shadow-yellow-500/25">
              <Phone className="mr-2 h-5 w-5" />
              873-6555275
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 px-8 py-4 text-lg">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-yellow-600/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold font-poppins">Taxi_Tchix</span>
              </div>
              <p className="text-gray-400">Votre service de taxi premium pour des trajets sûrs et confortables dans toute la région.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins text-yellow-500">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-yellow-500 transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
                <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins text-yellow-500">Nos Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Trajets Longue Distance</li>
                <li>Service Familial</li>
                <li>Transport Aéroport</li>
                <li>Service Adapté</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins text-yellow-500">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 873-6555275</p>
                <p>✉️ taxitchix@gmail.com</p>
                <p>📍 195 rue de l'atmosphère</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Taxi_Tchix. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
