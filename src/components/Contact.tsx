import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const Contact = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { contact, personal } = data;

  return (
    <section id="contact" className="py-32">
      <div className="section-container">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-8">
          <span className="font-mono text-primary">05.</span>
          Get In Touch
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            {contact.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{contact.location}</p>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg glow-effect-sm hover:scale-105 transition-transform duration-300"
          >
            <Send size={20} />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
