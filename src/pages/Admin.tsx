
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Car, Phone, Mail, User, Plus, Edit, Trash2, 
  DollarSign, TrendingUp, Users, Star, 
  Settings, LogOut, Dashboard, UserCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Driver {
  id: string;
  name: string;
  phone: string;
  email: string;
  carBrand: string;
  carModel: string;
  photo: string;
  profit: number;
  rating: number;
  trips: number;
}

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [newDriver, setNewDriver] = useState({
    name: '',
    phone: '',
    email: '',
    carBrand: '',
    carModel: '',
    photo: ''
  });

  // Initialize with sample data
  useEffect(() => {
    const sampleDrivers: Driver[] = [
      {
        id: '1',
        name: 'Jean Dupont',
        phone: '06 12 34 56 78',
        email: 'jean.dupont@email.com',
        carBrand: 'Toyota',
        carModel: 'Prius',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        profit: 2450,
        rating: 4.8,
        trips: 127
      },
      {
        id: '2',
        name: 'Marie Martin',
        phone: '06 98 76 54 32',
        email: 'marie.martin@email.com',
        carBrand: 'Renault',
        carModel: 'Scenic',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b5?w=150&h=150&fit=crop&crop=face',
        profit: 3120,
        rating: 4.9,
        trips: 143
      },
      {
        id: '3',
        name: 'Pierre Leroy',
        phone: '06 11 22 33 44',
        email: 'pierre.leroy@email.com',
        carBrand: 'Volkswagen',
        carModel: 'Passat',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        profit: 1980,
        rating: 4.7,
        trips: 98
      }
    ];
    setDrivers(sampleDrivers);
  }, []);

  const handleAddDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDriver.name || !newDriver.phone || !newDriver.email || !newDriver.carBrand || !newDriver.carModel) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs requis.",
        variant: "destructive"
      });
      return;
    }

    const driver: Driver = {
      id: Date.now().toString(),
      ...newDriver,
      photo: newDriver.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      profit: 0,
      rating: 5.0,
      trips: 0
    };

    setDrivers([...drivers, driver]);
    setNewDriver({ name: '', phone: '', email: '', carBrand: '', carModel: '', photo: '' });
    setIsAddDriverOpen(false);
    
    toast({
      title: "Chauffeur ajouté !",
      description: "Le nouveau chauffeur a été ajouté avec succès.",
    });
  };

  const handleDeleteDriver = (id: string) => {
    setDrivers(drivers.filter(driver => driver.id !== id));
    toast({
      title: "Chauffeur supprimé",
      description: "Le chauffeur a été supprimé de la liste.",
    });
  };

  const totalProfit = drivers.reduce((sum, driver) => sum + driver.profit, 0);
  const averageRating = drivers.length > 0 ? drivers.reduce((sum, driver) => sum + driver.rating, 0) / drivers.length : 0;
  const totalTrips = drivers.reduce((sum, driver) => sum + driver.trips, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl">
          <div className="p-6">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-taxi-yellow mr-2" />
              <span className="font-bold text-xl font-poppins text-taxi-black">TaxiPro</span>
            </Link>
          </div>
          
          <nav className="mt-8">
            <div className="px-6 space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-taxi-yellow text-taxi-black' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Dashboard className="mr-3 h-5 w-5" />
                Dashboard
              </button>
              
              <button
                onClick={() => setActiveTab('drivers')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === 'drivers' 
                    ? 'bg-taxi-yellow text-taxi-black' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="mr-3 h-5 w-5" />
                Chauffeurs
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-taxi-yellow text-taxi-black' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Paramètres
              </button>
            </div>
            
            <div className="px-6 mt-8 pt-8 border-t border-gray-200">
              <Link to="/" className="w-full flex items-center px-4 py-3 text-left text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <LogOut className="mr-3 h-5 w-5" />
                Retour au site
              </Link>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-taxi-black font-poppins">Dashboard Administrateur</h1>
                <p className="text-gray-600 mt-2">Vue d'ensemble de votre flotte de taxis</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="taxi-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Chauffeurs Actifs</p>
                        <p className="text-3xl font-bold text-taxi-black">{drivers.length}</p>
                      </div>
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-taxi-black" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="taxi-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Profit Total</p>
                        <p className="text-3xl font-bold text-taxi-black">{totalProfit.toLocaleString()}€</p>
                      </div>
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-taxi-black" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="taxi-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Note Moyenne</p>
                        <p className="text-3xl font-bold text-taxi-black">{averageRating.toFixed(1)}/5</p>
                      </div>
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <Star className="h-6 w-6 text-taxi-black" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="taxi-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Courses Total</p>
                        <p className="text-3xl font-bold text-taxi-black">{totalTrips}</p>
                      </div>
                      <div className="taxi-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-taxi-black" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Performers */}
              <Card className="taxi-shadow border-0">
                <CardHeader>
                  <CardTitle className="font-poppins">Meilleurs Chauffeurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {drivers
                      .sort((a, b) => b.profit - a.profit)
                      .slice(0, 3)
                      .map((driver, index) => (
                        <div key={driver.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary" className={`${
                              index === 0 ? 'bg-taxi-yellow text-taxi-black' : 
                              index === 1 ? 'bg-gray-400 text-white' : 
                              'bg-orange-400 text-white'
                            }`}>
                              #{index + 1}
                            </Badge>
                            <Avatar>
                              <AvatarImage src={driver.photo} />
                              <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{driver.name}</h4>
                              <p className="text-sm text-gray-600">{driver.trips} courses</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{driver.profit.toLocaleString()}€</p>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-taxi-yellow fill-current" />
                              <span className="text-sm ml-1">{driver.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'drivers' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-taxi-black font-poppins">Gestion des Chauffeurs</h1>
                  <p className="text-gray-600 mt-2">Gérer votre équipe de chauffeurs professionnels</p>
                </div>
                
                <Dialog open={isAddDriverOpen} onOpenChange={setIsAddDriverOpen}>
                  <DialogTrigger asChild>
                    <Button className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold">
                      <Plus className="mr-2 h-5 w-5" />
                      Ajouter un chauffeur
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-poppins">Nouveau Chauffeur</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddDriver} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nom complet *</Label>
                          <Input
                            id="name"
                            value={newDriver.name}
                            onChange={(e) => setNewDriver({...newDriver, name: e.target.value})}
                            placeholder="Jean Dupont"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input
                            id="phone"
                            value={newDriver.phone}
                            onChange={(e) => setNewDriver({...newDriver, phone: e.target.value})}
                            placeholder="06 12 34 56 78"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newDriver.email}
                          onChange={(e) => setNewDriver({...newDriver, email: e.target.value})}
                          placeholder="chauffeur@email.com"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="carBrand">Marque *</Label>
                          <Input
                            id="carBrand"
                            value={newDriver.carBrand}
                            onChange={(e) => setNewDriver({...newDriver, carBrand: e.target.value})}
                            placeholder="Toyota"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="carModel">Modèle *</Label>
                          <Input
                            id="carModel"
                            value={newDriver.carModel}
                            onChange={(e) => setNewDriver({...newDriver, carModel: e.target.value})}
                            placeholder="Prius"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="photo">URL Photo (optionnel)</Label>
                        <Input
                          id="photo"
                          value={newDriver.photo}
                          onChange={(e) => setNewDriver({...newDriver, photo: e.target.value})}
                          placeholder="https://..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full taxi-gradient text-taxi-black font-semibold">
                        Ajouter le chauffeur
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Drivers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drivers.map((driver) => (
                  <Card key={driver.id} className="hover-lift taxi-shadow border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={driver.photo} />
                          <AvatarFallback className="bg-taxi-yellow text-taxi-black font-bold">
                            {driver.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-taxi-black font-poppins">{driver.name}</h3>
                          <p className="text-gray-600 text-sm">{driver.carBrand} {driver.carModel}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 text-taxi-yellow mr-2" />
                          <span>{driver.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 text-taxi-yellow mr-2" />
                          <span className="truncate">{driver.email}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-taxi-black">{driver.profit.toLocaleString()}€</p>
                          <p className="text-xs text-gray-600">Profit</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Star className="h-4 w-4 text-taxi-yellow fill-current" />
                            <span className="text-xl font-bold text-taxi-black ml-1">{driver.rating}</span>
                          </div>
                          <p className="text-xs text-gray-600">Note</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-taxi-black">{driver.trips}</p>
                          <p className="text-xs text-gray-600">Courses</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-6">
                        <Button variant="outline" size="sm" className="flex-1 border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black">
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-red-300 text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteDriver(driver.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-taxi-black font-poppins">Paramètres</h1>
                <p className="text-gray-600 mt-2">Configuration de l'application</p>
              </div>

              <Card className="taxi-shadow border-0 max-w-2xl">
                <CardHeader>
                  <CardTitle className="font-poppins">Paramètres de l'entreprise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="companyName">Nom de l'entreprise</Label>
                    <Input id="companyName" defaultValue="TaxiPro" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyPhone">Téléphone</Label>
                    <Input id="companyPhone" defaultValue="01 23 45 67 89" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyEmail">Email</Label>
                    <Input id="companyEmail" defaultValue="contact@taxipro.fr" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyAddress">Adresse</Label>
                    <Input id="companyAddress" defaultValue="123 Rue de la Paix, 75001 Paris" className="mt-1" />
                  </div>
                  
                  <Button className="taxi-gradient text-taxi-black font-semibold">
                    Sauvegarder les modifications
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
