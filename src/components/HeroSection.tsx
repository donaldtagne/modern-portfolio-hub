import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Github, Linkedin, ArrowDown, Download, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 -right-32 w-[24rem] h-[24rem] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass animate-slide-up opacity-0 stagger-1">
              <span className="status-dot" />
              <span className="text-xs font-mono text-foreground/90">{t.hero.status}</span>
            </div>

            <p className="text-primary font-mono text-sm mb-3 animate-slide-up opacity-0 stagger-2">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-slide-up opacity-0 stagger-2 leading-[1.05]">
              Donald
              <br />
              <span className="text-gradient">Tagne</span>
            </h1>

            <div className="flex items-center gap-3 mb-6 animate-slide-up opacity-0 stagger-3">
              <Sparkles size={18} className="text-primary" />
              <h2 className="text-xl lg:text-2xl text-foreground/90 font-medium">
                {t.hero.role}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-slide-up opacity-0 stagger-4">
              {t.hero.tagline}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-slide-up opacity-0 stagger-4">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">{t.hero.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up opacity-0 stagger-5">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-glow"
                asChild
              >
                <a href="#contact">
                  <Mail size={18} className="mr-2" />
                  {t.hero.cta}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a href="/Lebenslauf.pdf" download>
                  <Download size={18} className="mr-2" />
                  {t.hero.resume}
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-slide-up opacity-0 stagger-5">
              <a
                href="https://github.com/donaldtagne"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/40 transition-all group"
              >
                <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/chris516/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/40 transition-all group"
              >
                <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:01788195598"
                aria-label="Phone"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/40 transition-all group"
              >
                <Phone size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-slide-up">
              {/* Decorative gradient ring */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl opacity-60" />

              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-3xl overflow-hidden border border-primary/20 shadow-glow">
                <img
                  src={profileImage}
                  alt="Donald Tagne — AI Solutions Specialist"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">AI</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">Specialist</p>
                    <p className="text-sm font-semibold">GenAI · LLM · RAG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};
