import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';
import thesisImage from '@/assets/master-thesis.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image & Thesis */}
          <div className="flex flex-col items-center gap-6 animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow animate-float">
                <img
                  src={profileImage}
                  alt="Donald Tagne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
            </div>
            
            {/* Master Thesis Image */}
            <div className="relative w-48 lg:w-56 rounded-xl overflow-hidden border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <img
                src={thesisImage}
                alt="Master of Science Thesis"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-mono text-sm mb-4 animate-slide-up opacity-0 stagger-1">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-slide-up opacity-0 stagger-2">
              Donald <span className="text-gradient">Tagne</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mb-6 animate-slide-up opacity-0 stagger-3">
              {t.hero.role}
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8 animate-slide-up opacity-0 stagger-4">
              <MapPin size={16} className="text-primary" />
              <span>{t.hero.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up opacity-0 stagger-5">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
                asChild
              >
                <a href="#contact">{t.hero.cta}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a href="mailto:donaldtagne516@gmail.com">
                  <Mail size={18} className="mr-2" />
                  {t.hero.resume}
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up opacity-0 stagger-5">
              <a
                href="https://github.com/donaldtagne"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/chris516/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:01788195598"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
              >
                <Phone size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
