import { Hero } from '@/components/site/hero';
import { Marquee } from '@/components/site/marquee';
import { Trust } from '@/components/site/trust';
import { Products } from '@/components/site/products';
import { Stats } from '@/components/site/stats';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { Services } from '@/components/site/services';
import { Founder } from '@/components/site/founder';
import { Portfolio } from '@/components/site/portfolio';
import { Technologies } from '@/components/site/technologies';
import { Roadmap } from '@/components/site/roadmap';
import { Testimonials } from '@/components/site/testimonials';
import { FAQ } from '@/components/site/faq';
import { CTA } from '@/components/site/cta';
import { Newsletter } from '@/components/site/newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trust />
      <Products />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Founder />
      <Portfolio />
      <Technologies />
      <div id="roadmap">
        <Roadmap />
      </div>
      <Testimonials />
      <FAQ />
      <CTA />
      <Newsletter />
    </>
  );
}
