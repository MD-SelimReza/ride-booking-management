import {
  ShieldCheck,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Lock,
  Settings,
  Car,
  Users,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  heading?: string;
  reasons?: Reason[];
}

const Feature43 = ({
  heading = 'Service Highlights',
  reasons = [
    // Rider Benefits
    {
      title: 'Affordable Rides',
      description: 'Transparent pricing ensures every trip is budget-friendly.',
      icon: <DollarSign className="size-6" />,
    },
    {
      title: 'Fast & Reliable',
      description:
        'Quick pickups with real-time tracking for seamless journeys.',
      icon: <Clock className="size-6" />,
    },
    {
      title: 'Safe Journeys',
      description: 'Verified drivers and safety features for peace of mind.',
      icon: <ShieldCheck className="size-6" />,
    },

    // Driver Benefits
    {
      title: 'Earn More',
      description: 'Maximize earnings with fair commission and bonuses.',
      icon: <TrendingUp className="size-6" />,
    },
    {
      title: 'Flexible Schedule',
      description: 'Drive when you want, wherever you want.',
      icon: <Car className="size-6" />,
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent fare system with no hidden fees.',
      icon: <Users className="size-6" />,
    },

    // Admin Benefits
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights for better decision-making.',
      icon: <BarChart3 className="size-6" />,
    },
    {
      title: 'Secure Platform',
      description: 'End-to-end security to protect users and data.',
      icon: <Lock className="size-6" />,
    },
    {
      title: 'Scalable Controls',
      description: 'Manage users, rides, and payments with ease.',
      icon: <Settings className="size-6" />,
    },
  ],
}: Feature43Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 md:mb-15">
          <h2 className="mb-4 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Designed for Riders, Drivers, and Admins — benefits that make every
            journey smarter.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="flex flex-col px-6">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
