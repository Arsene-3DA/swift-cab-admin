
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '@@12') {
      onLogin();
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'administration.",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Mot de passe incorrect.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md taxi-shadow border-0">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-taxi-black" />
          </div>
          <CardTitle className="text-2xl font-poppins">Administration</CardTitle>
          <p className="text-gray-600">Veuillez entrer le mot de passe</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe"
                required
              />
            </div>
            <Button type="submit" className="w-full taxi-gradient text-taxi-black font-semibold">
              Se connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
