import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Car, Smartphone, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: '1. Book a Ride',
    desc: 'Open the app, set your destination, and request a ride instantly.',
  },
  {
    icon: Car,
    title: '2. Get Matched',
    desc: 'We connect you with the nearest driver for the fastest pickup.',
  },
  {
    icon: UserCheck,
    title: '3. Enjoy the Journey',
    desc: 'Track your ride in real-time and arrive safely at your destination.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl"
        >
          How It Works 🚀
        </motion.h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Booking a ride has never been easier. Follow these simple steps and
          you’re on your way!
        </p>

        {/* Steps */}
        <div className="mt-15 grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-md hover:shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
