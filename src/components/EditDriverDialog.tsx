
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Upload } from 'lucide-react';

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

interface EditDriverDialogProps {
  driver: Driver | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedDriver: Driver) => void;
}

const EditDriverDialog = ({ driver, isOpen, onClose, onSave }: EditDriverDialogProps) => {
  const { toast } = useToast();
  const [editedDriver, setEditedDriver] = useState<Driver | null>(null);

  useEffect(() => {
    if (driver) {
      setEditedDriver({ ...driver });
    }
  }, [driver]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editedDriver) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setEditedDriver({
            ...editedDriver,
            photo: event.target.result as string
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedDriver) return;

    if (!editedDriver.name || !editedDriver.phone || !editedDriver.email || !editedDriver.carBrand || !editedDriver.carModel) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    onSave(editedDriver);
    onClose();
    
    toast({
      title: "Driver updated!",
      description: "Information has been successfully updated.",
    });
  };

  if (!driver || !editedDriver) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-poppins">Edit Driver</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={editedDriver.photo} 
                alt={editedDriver.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-taxi-yellow"
              />
              <label className="absolute bottom-0 right-0 bg-taxi-yellow rounded-full p-2 cursor-pointer hover:bg-yellow-400 transition-colors">
                <Upload className="h-4 w-4 text-taxi-black" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-name">Full Name *</Label>
              <Input
                id="edit-name"
                value={editedDriver.name}
                onChange={(e) => setEditedDriver({...editedDriver, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-phone">Phone *</Label>
              <Input
                id="edit-phone"
                value={editedDriver.phone}
                onChange={(e) => setEditedDriver({...editedDriver, phone: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="edit-email">Email *</Label>
            <Input
              id="edit-email"
              type="email"
              value={editedDriver.email}
              onChange={(e) => setEditedDriver({...editedDriver, email: e.target.value})}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-carBrand">Brand *</Label>
              <Input
                id="edit-carBrand"
                value={editedDriver.carBrand}
                onChange={(e) => setEditedDriver({...editedDriver, carBrand: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-carModel">Model *</Label>
              <Input
                id="edit-carModel"
                value={editedDriver.carModel}
                onChange={(e) => setEditedDriver({...editedDriver, carModel: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 taxi-gradient text-taxi-black font-semibold">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDriverDialog;
