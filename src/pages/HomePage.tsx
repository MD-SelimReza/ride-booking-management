import { Cta4 } from '@/components/cta4';
import { Feature43 } from '@/components/feature43';
import HeroBanner from '@/components/modules/public/Home/Hero/HeroBanner';
import HowItWorks from '@/components/modules/public/Home/HowItWorks/HowItWorks';
import { Testimonial4 } from '@/components/testimonial4';

export default function HomePage() {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-5 py-10">
      <HeroBanner />
      <HowItWorks />
      <Feature43 />
      <Testimonial4 />
      <Cta4 />
    </div>
  );
}
