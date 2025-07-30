import React from 'react';
import { 
  Building2, 
  Store, 
  Users, 
  DollarSign, 
  Network, 
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Wifi,
  Shield,
  Star,
  Award,
  Target,
  Zap,
  Globe,
  Home,
  Briefcase,
  Heart,
  Settings
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Building2,
  Store,
  Users,
  DollarSign,
  Network,
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Wifi,
  Shield,
  Star,
  Award,
  Target,
  Zap,
  Globe,
  Home,
  Briefcase,
  Heart,
  Settings
};

export const getIconComponent = (icon: React.ReactNode | string): React.ReactNode => {
  if (typeof icon === 'string') {
    const IconComponent = iconMap[icon];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6" />;
    }
    // Fallback to a default icon if the string doesn't match
    return <Star className="w-6 h-6" />;
  }
  return icon;
}; 