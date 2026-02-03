import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CodingProfiles from '@/components/CodingProfiles';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePortfolio } from '@/context/PortfolioContext';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { data, isLoading, error } = usePortfolio();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background text-red-500">
        Failed to load portfolio data. Please try again later.
      </div>
    );
  }

  const { meta } = data;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <meta
          name="keywords"
          content={meta.keywords}
        />
        <meta property="og:title" content={meta.og_title} />
        <meta
          property="og:description"
          content={meta.og_description}
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={meta.canonical_url} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <CodingProfiles />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
