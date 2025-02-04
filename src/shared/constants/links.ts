import { ShoppingBagIcon, Users } from 'lucide-react';
import { ROUTES } from './routes';

export const sidebarLinks = [
  {
    label: 'Users',
    href: ROUTES.Users,
    icon: Users,
  },
  {
    label: 'Products',
    href: ROUTES.Products,
    icon: ShoppingBagIcon,
  },
];
