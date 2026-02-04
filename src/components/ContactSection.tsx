import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'donaldtagne516@gmail.com',
      href: 'mailto:donaldtagne516@gmail.com',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+49 178 8195598',
      href: 'tel:+4917881955988',
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: 'Worms, 67549, Germany',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t.contact.subtitle}
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-2">{label}</h3>
                {href ? (
                  <a
                    href={href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
            asChild
          >
            <a href="mailto:donaldtagne516@gmail.com">
              <Send size={18} className="mr-2" />
              {t.hero.cta}
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/donaldtagne"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris516/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
