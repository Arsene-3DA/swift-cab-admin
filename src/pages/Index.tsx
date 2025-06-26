
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
      title: "Fast Service",
      description: "Average arrival time under 5 minutes"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Service available at any hour"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Certified professional drivers"
    },
    {
      icon: MapPin,
      title: "GPS Integrated",
      description: "Optimal route guaranteed"
    }
  ];

  const testimonials = [
    {
      name: "Marie Johnson",
      text: "Exceptional service! Always on time and very professional drivers.",
      rating: 5
    },
    {
      name: "John Martin",
      text: "I highly recommend it. Very convenient and competitive rates.",
      rating: 5
    },
    {
      name: "Sophie Smith",
      text: "Easy to use application, quality service. My favorite taxi!",
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
              <span className="font-bold text-xl font-poppins text-taxi-black">Taxi_Tchix</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
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
              <a href="#home" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#services" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Services</a>
              <Link to="/contact" className="block hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link to="/admin" className="block bg-taxi-yellow hover:bg-taxi-orange transition-colors px-3 py-2 rounded-md text-base font-medium text-taxi-black">Admin</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-black/80 to-taxi-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${carImages[currentImageIndex]})` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-poppins">
              Your <span className="text-taxi-yellow">Taxi</span> in one click
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Professional, fast and secure taxi service. 
              Book now and travel with peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-taxi-yellow text-taxi-yellow bg-transparent hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Learn More
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of customers trust us every day
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
              <div className="text-taxi-black/80 text-lg">Satisfied Customers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-taxi-black mb-2 font-poppins">24/7</div>
              <div className="text-taxi-black/80 text-lg">Service Available</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-taxi-black mb-2 font-poppins">50+</div>
              <div className="text-taxi-black/80 text-lg">Expert Drivers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-taxi-black mb-4 font-poppins">
              What our customers say
            </h2>
            <p className="text-xl text-gray-600">
              Authentic testimonials from our users
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
            Ready to travel with us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers. Book your ride now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              873-6555275
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-taxi-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-taxi-yellow" />
                <span className="text-2xl font-bold font-poppins">Taxi_Tchix</span>
              </div>
              <p className="text-gray-400">Your reliable taxi service for safe and comfortable rides across the city.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-taxi-yellow transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-taxi-yellow transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-taxi-yellow transition-colors">About</a></li>
                <li><Link to="/contact" className="hover:text-taxi-yellow transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>City Rides</li>
                <li>Airport Transfer</li>
                <li>Corporate Travel</li>
                <li>24/7 Service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-poppins">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 873-6555275</p>
                <p>✉️ taxitchix@gmail.com</p>
                <p>📍 195 rue de l'atmosphère</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Taxi_Tchix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
