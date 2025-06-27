
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: 'fr' | 'en') => setLanguage(value)}>
      <SelectTrigger className="w-20 bg-black/50 border-yellow-600/20 text-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-gray-900 border-yellow-600/20">
        <SelectItem value="fr" className="text-white hover:bg-yellow-500/20">
          🇫🇷 FR
        </SelectItem>
        <SelectItem value="en" className="text-white hover:bg-yellow-500/20">
          🇬🇧 EN
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
