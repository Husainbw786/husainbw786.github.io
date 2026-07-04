import { Helmet } from 'react-helmet-async';
import Effects from '@/components/Effects';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import CodingProfiles from '@/components/CodingProfiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePortfolio } from '@/context/PortfolioContext';

const Index = () => {
  const { data, isLoading } = usePortfolio();

  if (isLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <span className="mono" style={{ color: 'var(--acc)', fontSize: 14 }}>
          $ loading portfolio<span style={{ animation: 'blink 1.1s step-end infinite' }}>_</span>
        </span>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: '#f87171' }}>
        Failed to load portfolio data. Please try again later.
      </div>
    );
  }

  const { meta } = data;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.og_title} />
        <meta property="og:description" content={meta.og_description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={meta.canonical_url} />
      </Helmet>

      <Effects />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Skills />
          <Projects />
          <Experience />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
