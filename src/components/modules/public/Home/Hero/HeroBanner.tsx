import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-background text-foreground">
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="relative container mx-auto flex flex-col items-center justify-between gap-10 py-20 md:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 z-10"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ride Smarter. Drive Better. 🚖
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md">
            Your trusted ride-sharing platform that connects Riders and Drivers
            seamlessly. Safe, fast, and affordable every time.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="px-8">
              <Link to="/signup">Sign Up as Rider</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Link to="/signup">Become a Driver</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Side Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Card className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80"
              alt="Ride sharing"
              className="h-[320px] w-full object-cover md:h-[400px]"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
