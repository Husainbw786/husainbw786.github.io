import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Husain Baghwala | AI Engineer & Full Stack Developer</title>
        <meta
          name="description"
          content="AI Engineer at Walkover Web Solutions specializing in LLM integration, LangChain, RAG pipelines, and full-stack development with Node.js and Python."
        />
        <meta
          name="keywords"
          content="Husain Baghwala, AI Engineer, Full Stack Developer, LangChain, Python, Node.js, LLM, RAG, Machine Learning"
        />
        <meta property="og:title" content="Husain Baghwala | AI Engineer" />
        <meta
          property="og:description"
          content="AI Engineer specializing in LLM integration and full-stack development"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://husainbaghwala.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
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
