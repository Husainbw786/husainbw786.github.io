import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
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
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question,
            want to discuss AI/ML projects, or just want to say hi — I'll do my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:husainbw123@gmail.com"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  husainbw123@gmail.com
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
                  href="tel:+919131318108"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  +91 9131318108
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Indore, India</p>
              </div>
            </div>
          </div>

          <a
            href="mailto:husainbw123@gmail.com"
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
