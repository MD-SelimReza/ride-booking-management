import {
  Car,
  MapPin,
  CreditCard,
  DollarSign,
  Calendar,
  Users,
  BarChart,
  Shield,
} from 'lucide-react';

const riderFeatures = [
  {
    title: 'Book Rides',
    description: 'Easily book rides anytime, anywhere with just a few taps.',
    icon: <Car className="size-6" />,
  },
  {
    title: 'Real-Time Tracking',
    description: 'Track your ride live on the map for peace of mind.',
    icon: <MapPin className="size-6" />,
  },
  {
    title: 'Multiple Payment Options',
    description:
      'Pay with cards, wallets, or cash — your choice, your convenience.',
    icon: <CreditCard className="size-6" />,
  },
];

const driverFeatures = [
  {
    title: 'Accept Rides',
    description: 'Get ride requests instantly and accept them with ease.',
    icon: <Car className="size-6" />,
  },
  {
    title: 'Earnings Dashboard',
    description: 'Track daily and weekly earnings in one convenient place.',
    icon: <DollarSign className="size-6" />,
  },
  {
    title: 'Flexible Schedule',
    description: 'Work whenever you want — full control over your schedule.',
    icon: <Calendar className="size-6" />,
  },
];

const adminFeatures = [
  {
    title: 'Manage Users',
    description: 'Easily onboard, manage, and support both riders and drivers.',
    icon: <Users className="size-6" />,
  },
  {
    title: 'Monitor Rides',
    description:
      'Keep track of all rides in real-time for operational efficiency.',
    icon: <Shield className="size-6" />,
  },
  {
    title: 'Generate Reports',
    description:
      'Access detailed analytics and reports for better decision making.',
    icon: <BarChart className="size-6" />,
  },
];

const FeaturesPage = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 md:max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">APP FEATURES</p>
          <h2 className="text-3xl font-medium md:text-5xl">
            Everything You Need in One Place
          </h2>
          <p className="text-muted-foreground">
            Whether you are a rider, a driver, or an admin — our platform is
            designed to make your journey simple, secure, and efficient.
          </p>
        </div>

        {/* Rider Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Rider Features
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {riderFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg bg-accent p-6 md:p-8"
              >
                <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                  {feature.icon}
                </span>
                <h4 className="text-lg font-medium md:text-xl">
                  {feature.title}
                </h4>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Driver Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Driver Features
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {driverFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg bg-accent p-6 md:p-8"
              >
                <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                  {feature.icon}
                </span>
                <h4 className="text-lg font-medium md:text-xl">
                  {feature.title}
                </h4>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Features */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Admin Features
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {adminFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg bg-accent p-6 md:p-8"
              >
                <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                  {feature.icon}
                </span>
                <h4 className="text-lg font-medium md:text-xl">
                  {feature.title}
                </h4>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesPage };
