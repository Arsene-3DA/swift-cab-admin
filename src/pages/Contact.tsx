
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Car, Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

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
    
    if (!formData.name || !formData.email || !formData.message) {
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

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-taxi-yellow mr-2" />
              <span className="font-bold text-2xl font-poppins text-taxi-black">TaxiPro</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-taxi-yellow transition-colors font-semibold">
                Accueil
              </Link>
              <Link to="/contact" className="text-taxi-yellow font-semibold">
                Contact
              </Link>
              <Link to="/admin" className="text-gray-700 hover:text-taxi-yellow transition-colors font-semibold">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-taxi-black font-poppins mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un besoin particulier ? Notre équipe est à votre disposition pour vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="taxi-shadow border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-taxi-black">
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Votre nom"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="873-6555275"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="votre@email.com"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre demande..."
                    className="mt-1 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full taxi-gradient text-taxi-black font-semibold text-lg py-3 hover:scale-105 transition-all duration-300">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <Card className="taxi-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-taxi-black">
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-taxi-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-taxi-black mb-1">Téléphone</h3>
                    <p className="text-gray-600">873-6555275</p>
                    <Badge variant="secondary" className="mt-1">Disponible 24h/24</Badge>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-taxi-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-taxi-black mb-1">Email</h3>
                    <p className="text-gray-600">contact@taxipro.fr</p>
                    <p className="text-sm text-gray-600">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-taxi-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-taxi-black mb-1">Adresse</h3>
                    <p className="text-gray-600">123 Rue de la Paix</p>
                    <p className="text-gray-600">75001 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-taxi-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-taxi-black mb-1">Horaires</h3>
                    <p className="text-gray-600">Service 24h/24 - 7j/7</p>
                    <p className="text-sm text-gray-600">Réservations acceptées en ligne</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="taxi-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-taxi-black">
                  Suivez-nous
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-taxi-yellow hover:text-taxi-black transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-taxi-yellow hover:text-taxi-black transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-taxi-yellow hover:text-taxi-black transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="taxi-shadow border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Carte interactive</p>
                    <p className="text-sm text-gray-500">123 Rue de la Paix, Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
