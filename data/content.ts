import { 
  Plane, 
  Ship, 
  Hotel, 
  Palmtree, 
  FileText, 
  CreditCard, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';

export const services = [
  { id: 1, name: 'Airlines', icon: Plane, description: 'Domestic & International flight bookings' },
  { id: 2, name: 'Ferry', icon: Ship, description: 'Inter-island ferry and fast craft tickets' },
  { id: 3, name: 'Hotels', icon: Hotel, description: 'Worldwide hotel and resort reservations' },
  { id: 4, name: 'Holiday Packages', icon: Palmtree, description: 'Curated vacation deals for families and groups' },
  { id: 5, name: 'Visa Assistance', icon: FileText, description: 'Professional help with visa requirements' },
  { id: 6, name: 'Bills Payment', icon: CreditCard, description: 'Convenient bill settlement services' },
  { id: 7, name: 'Travel Insurance', icon: ShieldCheck, description: 'Comprehensive coverage for your peace of mind' },
  { id: 8, name: 'PSA/Passport Assistance', icon: UserCheck, description: 'Support for vital documents and passport renewal' },
];

export const cruiseItinerary = [
  { day: 1, title: 'Departure from Manila', activity: 'Board the Costa Serena and enjoy the welcome dinner.' },
  { day: 2, title: 'At Sea', activity: 'Explore the ship’s amenities, pools, and live entertainment.' },
  { day: 3, title: 'Arrive in Naha, Okinawa (Japan)', activity: 'Shore excursion to Shuri Castle and Kokusai-dori street.' },
  { day: 4, title: 'Arrive in Miyakojima (Japan)', activity: 'Visit the white sand beaches and crystal clear waters.' },
  { day: 5, title: 'Arrive in Ishigaki (Japan)', activity: 'Nature tours and local Ishigaki beef tasting.' },
  { day: 6, title: 'Arrive in Keelung, Taipei (Taiwan)', activity: 'Visit Jiufen Old Street or the Shilin Night Market.' },
  { day: 7, title: 'At Sea', activity: 'Relaxation and farewell party onboard.' },
  { day: 8, title: 'Return to Manila', activity: 'Disembarkation and end of the voyage.' },
];

export const cruiseDeals = [
  {
    id: 'japan-taiwan-cruise',
    title: '8-Day Japan & Taiwan Cruise',
    ship: 'Costa Serena',
    description: 'Experience the magic of East Asia with our premium cruise package.',
    highlights: ['Visa-Free travel', '20% Downpayment', 'Full-board meals'],
    price: 'Starting from $899',
    image: '/cruise-hero.jpg', // Placeholder for Costa Serena background
  }
];
