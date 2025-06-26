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
  Settings, LogOut, LayoutDashboard, UserCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdminLogin from '@/components/AdminLogin';
import EditDriverDialog from '@/components/EditDriverDialog';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
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
        name: 'John Smith',
        phone: '873-6555275',
        email: 'john.smith@email.com',
        carBrand: 'Toyota',
        carModel: 'Prius',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        profit: 2450,
        rating: 4.8,
        trips: 127
      },
      {
        id: '2',
        name: 'Maria Johnson',
        phone: '873-6555276',
        email: 'maria.johnson@email.com',
        carBrand: 'Renault',
        carModel: 'Scenic',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b5?w=150&h=150&fit=crop&crop=face',
        profit: 3120,
        rating: 4.9,
        trips: 143
      },
      {
        id: '3',
        name: 'Peter Brown',
        phone: '873-6555277',
        email: 'peter.brown@email.com',
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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleEditDriver = (driver: Driver) => {
    setEditingDriver(driver);
    setIsEditDialogOpen(true);
  };

  const handleSaveDriver = (updatedDriver: Driver) => {
    setDrivers(drivers.map(driver => 
      driver.id === updatedDriver.id ? updatedDriver : driver
    ));
    setEditingDriver(null);
  };

  const handleAddDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDriver.name || !newDriver.phone || !newDriver.email || !newDriver.carBrand || !newDriver.carModel) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
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
      title: "Driver added!",
      description: "New driver has been successfully added.",
    });
  };

  const handleDeleteDriver = (id: string) => {
    setDrivers(drivers.filter(driver => driver.id !== id));
    toast({
      title: "Driver deleted",
      description: "Driver has been removed from the list.",
    });
  };

  const totalProfit = drivers.reduce((sum, driver) => sum + driver.profit, 0);
  const averageRating = drivers.length > 0 ? drivers.reduce((sum, driver) => sum + driver.rating, 0) / drivers.length : 0;
  const totalTrips = drivers.reduce((sum, driver) => sum + driver.trips, 0);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl">
          <div className="p-6">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-taxi-yellow mr-2" />
              <span className="font-bold text-xl font-poppins text-taxi-black">Taxi_Tchix</span>
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
                <LayoutDashboard className="mr-3 h-5 w-5" />
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
                Drivers
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
                Settings
              </button>
            </div>
            
            <div className="px-6 mt-8 pt-8 border-t border-gray-200">
              <Link to="/" className="w-full flex items-center px-4 py-3 text-left text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <LogOut className="mr-3 h-5 w-5" />
                Back to website
              </Link>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-taxi-black font-poppins">Administrator Dashboard</h1>
                <p className="text-gray-600 mt-2">Overview of your taxi fleet</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="taxi-shadow border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Drivers</p>
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
                        <p className="text-sm font-medium text-gray-600">Total Profit</p>
                        <p className="text-3xl font-bold text-taxi-black">${totalProfit.toLocaleString()}</p>
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
                        <p className="text-sm font-medium text-gray-600">Average Rating</p>
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
                        <p className="text-sm font-medium text-gray-600">Total Trips</p>
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
                  <CardTitle className="font-poppins">Top Drivers</CardTitle>
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
                              <p className="text-sm text-gray-600">{driver.trips} trips</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">${driver.profit.toLocaleString()}</p>
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
                  <h1 className="text-3xl font-bold text-taxi-black font-poppins">Driver Management</h1>
                  <p className="text-gray-600 mt-2">Manage your professional driver team</p>
                </div>
                
                <Dialog open={isAddDriverOpen} onOpenChange={setIsAddDriverOpen}>
                  <DialogTrigger asChild>
                    <Button className="taxi-gradient hover:scale-105 transition-all duration-300 text-taxi-black font-semibold">
                      <Plus className="mr-2 h-5 w-5" />
                      Add driver
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-poppins">New Driver</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddDriver} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full name *</Label>
                          <Input
                            id="name"
                            value={newDriver.name}
                            onChange={(e) => setNewDriver({...newDriver, name: e.target.value})}
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            value={newDriver.phone}
                            onChange={(e) => setNewDriver({...newDriver, phone: e.target.value})}
                            placeholder="873-6555275"
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
                          placeholder="driver@email.com"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="carBrand">Brand *</Label>
                          <Input
                            id="carBrand"
                            value={newDriver.carBrand}
                            onChange={(e) => setNewDriver({...newDriver, carBrand: e.target.value})}
                            placeholder="Toyota"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="carModel">Model *</Label>
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
                        <Label htmlFor="photo">Photo URL (optional)</Label>
                        <Input
                          id="photo"
                          value={newDriver.photo}
                          onChange={(e) => setNewDriver({...newDriver, photo: e.target.value})}
                          placeholder="https://..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full taxi-gradient text-taxi-black font-semibold">
                        Add driver
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
                          <p className="text-2xl font-bold text-taxi-black">${driver.profit.toLocaleString()}</p>
                          <p className="text-xs text-gray-600">Profit</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Star className="h-4 w-4 text-taxi-yellow fill-current" />
                            <span className="text-xl font-bold text-taxi-black ml-1">{driver.rating}</span>
                          </div>
                          <p className="text-xs text-gray-600">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-taxi-black">{driver.trips}</p>
                          <p className="text-xs text-gray-600">Trips</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-6">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-taxi-black"
                          onClick={() => handleEditDriver(driver)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
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
                <h1 className="text-3xl font-bold text-taxi-black font-poppins">Settings</h1>
                <p className="text-gray-600 mt-2">Application configuration</p>
              </div>

              <Card className="taxi-shadow border-0 max-w-2xl">
                <CardHeader>
                  <CardTitle className="font-poppins">Company Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Taxi_Tchix" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyPhone">Phone</Label>
                    <Input id="companyPhone" defaultValue="873-6555275" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyEmail">Email</Label>
                    <Input id="companyEmail" defaultValue="contact@taxitchix.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyAddress">Address</Label>
                    <Input id="companyAddress" defaultValue="123 Main Street, City, State 12345" className="mt-1" />
                  </div>
                  
                  <Button className="taxi-gradient text-taxi-black font-semibold">
                    Save changes
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <EditDriverDialog
        driver={editingDriver}
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setEditingDriver(null);
        }}
        onSave={handleSaveDriver}
      />
    </div>
  );
};

export default Admin;
