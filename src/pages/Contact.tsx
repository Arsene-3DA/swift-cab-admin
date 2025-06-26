
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Car, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs requis.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-taxi-yellow mr-2" />
              <span className="font-bold text-xl font-poppins text-taxi-black">TaxiPro</span>
            </Link>
            
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="hover:text-taxi-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
              <Link to="/admin" className="bg-taxi-yellow hover:bg-taxi-orange transition-colors px-4 py-2 rounded-md text-sm font-medium text-taxi-black">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-taxi-black mb-6 font-poppins">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question ? Un besoin particulier ? Notre équipe est là pour vous aider.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-taxi-black font-poppins">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-taxi-black font-medium">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 border-gray-300 focus:border-taxi-yellow focus:ring-taxi-yellow"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-taxi-black font-medium">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 border-gray-300 focus:border-taxi-yellow focus:ring-taxi-yellow"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-taxi-black font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 focus:border-taxi-yellow focus:ring-taxi-yellow"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-taxi-black font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-1 border-gray-300 focus:border-taxi-yellow focus:ring-taxi-yellow"
                      placeholder="Décrivez votre demande..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Company Info */}
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-taxi-black mb-6 font-poppins">
                    Informations de contact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-taxi-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-taxi-black">Téléphone</h4>
                        <p className="text-gray-600">01 23 45 67 89</p>
                        <p className="text-sm text-gray-500">Disponible 24h/24</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-taxi-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-taxi-black">Email</h4>
                        <p className="text-gray-600">contact@taxipro.fr</p>
                        <p className="text-sm text-gray-500">Réponse sous 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-taxi-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-taxi-black">Adresse</h4>
                        <p className="text-gray-600">123 Rue de la Paix</p>
                        <p className="text-gray-600">75001 Paris, France</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-taxi-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-taxi-black">Horaires</h4>
                        <p className="text-gray-600">Lundi - Dimanche</p>
                        <p className="text-taxi-yellow font-semibold">24h/24 - 7j/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-taxi-black mb-6 font-poppins">
                    Suivez-nous
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="lg" className="border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300">
                      <Facebook className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300">
                      <Twitter className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300">
                      <Instagram className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-taxi-black mb-6 font-poppins">
                    Notre localisation
                  </h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-taxi-yellow mx-auto mb-2" />
                      <p className="text-gray-600">Carte interactive</p>
                      <p className="text-sm text-gray-500">123 Rue de la Paix, 75001 Paris</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

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

export default Contact;
