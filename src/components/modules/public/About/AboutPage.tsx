import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Users, Scale } from 'lucide-react';
import aboutHero from '../../../../assets/images/about.webp';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Passionate about building safe and innovative ride solutions with fairness at heart.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sophia Lee',
    role: 'CTO',
    bio: 'Tech enthusiast ensuring smooth operations and a scalable, secure platform.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    bio: 'Optimizing operations so riders and drivers alike thrive.',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Lead',
    bio: 'Storyteller committed to connecting communities through our mission.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const values = [
  {
    title: 'Trust',
    description:
      'Trust is the foundation of every ride—built through transparency and reliability.',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: 'Safety',
    description:
      'Safety is our top priority, reinforced with tech-driven solutions.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Fairness',
    description:
      'We champion fairness for riders, drivers, and all partners alike.',
    icon: <Scale className="h-6 w-6" />,
  },
];

const AboutPage = () => {
  return (
    <section className="py-20 container w-full mx-auto px-5">
      {/* Hero Section with RideSphere-themed Background */}
      <div
        className="relative h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl font-bold">About RideSphere</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Elevating ride-booking with safety, fairness, and seamless community
            connections.
          </p>
        </div>
      </div>

      <div className="py-20 space-y-20">
        {/* Company Story */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground text-lg md:max-w-3xl">
            Born from the vision of creating safer, fairer & more connected ride
            experiences for both riders and drivers. RideSphere exists to
            empower communities with reliable mobility.
          </p>
        </div>

        <Separator />

        {/* Mission & Vision */}
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              Delivering affordable, efficient, and secure rides while
              empowering drivers with flexible earnings.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted ride-sharing ecosystem—creating
              opportunities and connections across every ride.
            </p>
          </Card>
        </div>

        <Separator />

        {/* Core Values */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((val, i) => (
              <Card
                key={i}
                className="p-6 flex flex-col items-center text-center"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  {val.icon}
                </span>
                <h3 className="text-xl font-semibold">{val.title}</h3>
                <p className="mt-2 text-muted-foreground">{val.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Team Profiles */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 space-y-2 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
