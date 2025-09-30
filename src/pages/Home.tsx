import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Hero from '../components/Hero';
import BlogCarousel from '../components/BlogCarousel';
// import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import BeforeAfter from '../components/BeforeAfter';
import Certifications from '../components/Certifications';

interface HomeProps {
  translations: any;
}

const Home: React.FC<HomeProps> = ({ translations }) => {
  return (
    <main className="pt-28">
      <Hero translations={translations} />
      <ScrollReveal delay={100}>
        <BlogCarousel translations={translations} />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <BeforeAfter translations={translations} />
      </ScrollReveal>
      {/* <ScrollReveal delay={300}>
        <Reviews translations={translations} />
      </ScrollReveal> */}
      <ScrollReveal delay={400}>
        <Certifications translations={translations} />
      </ScrollReveal>
      <ScrollReveal delay={500}>
        <FAQ translations={translations} />
      </ScrollReveal>
    </main>
  );
};

export default Home;