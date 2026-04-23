import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(50_20%_82%)] border-b-2 border-black bevel-out">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-black no-underline rainbow-text">
            ~ DT.HOME ~
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="retro-btn !py-1 !px-3 text-sm"
              >
                {item.label}
              </a>
            ))}

            {/* Language Toggle */}
            <div className="ml-3 flex items-center gap-1 bevel-in bg-white p-1">
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-0.5 text-sm font-bold ${
                  language === 'de' ? 'bg-[hsl(var(--primary))] text-white' : 'text-black'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-sm font-bold ${
                  language === 'en' ? 'bg-[hsl(var(--primary))] text-white' : 'text-black'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            className="md:hidden p-2 retro-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="retro-btn"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLanguage('de')}
                  className={`retro-btn ${language === 'de' ? '!bg-[hsl(var(--primary))] !text-white' : ''}`}
                >
                  Deutsch
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`retro-btn ${language === 'en' ? '!bg-[hsl(var(--primary))] !text-white' : ''}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
