import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Github, Linkedin, Phone, Download, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.png';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-24 pb-16">
      {/* Top marquee */}
      <div className="absolute top-16 left-0 right-0 bg-black text-yellow-300 overflow-hidden border-y-2 border-black py-1 font-mono text-lg">
        <div className="marquee">
          ★ WELCOME TO DONALD TAGNE'S HOMEPAGE ★ AI &amp; LLM ENGINEER ★ EST. 2025 ★ BEST VIEWED IN NETSCAPE NAVIGATOR ★ THANKS FOR VISITING! ★
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-10">
        <div className="retro-window max-w-5xl mx-auto">
          <div className="retro-titlebar">
            <span>🖥️ index.html — Donald Tagne — Personal Webpage</span>
            <span className="flex gap-1">
              <span className="bevel-out bg-[hsl(50_20%_82%)] w-5 h-5 inline-flex items-center justify-center text-black text-xs">_</span>
              <span className="bevel-out bg-[hsl(50_20%_82%)] w-5 h-5 inline-flex items-center justify-center text-black text-xs">□</span>
              <span className="bevel-out bg-[hsl(50_20%_82%)] w-5 h-5 inline-flex items-center justify-center text-black text-xs">×</span>
            </span>
          </div>

          <div className="p-6 md:p-10">
            <div className="text-center mb-6">
              <p className="font-mono text-2xl text-[hsl(var(--secondary))] blink">
                {'>>'} {t.hero.greeting} {'<<'}
              </p>
              <h1 className="text-4xl md:text-6xl mt-2 rainbow-text">
                Donald Tagne
              </h1>
              <h2 className="text-xl md:text-2xl italic text-[hsl(var(--primary))] underline mt-2">
                {t.hero.role}
              </h2>
            </div>

            {/* Classic table-style layout */}
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="align-top p-4 w-1/3">
                    <div className="bevel-in p-2 bg-white inline-block">
                      <img
                        src={profileImage}
                        alt="Donald Tagne"
                        className="w-full max-w-[220px] block"
                      />
                    </div>
                    <p className="mt-2 text-center font-mono text-sm">📷 ~ photo.jpg ~</p>
                  </td>
                  <td className="align-top p-4">
                    <h3 className="text-xl font-bold underline mb-2">★ About this page ★</h3>
                    <p className="text-base leading-relaxed">
                      Hello and welcome to my little corner of the World Wide Web! My name is
                      <b> Donald Tagne</b> and I build intelligent systems with Large Language
                      Models, RAG and AI Agents.
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                      <MapPin size={16} className="text-[hsl(var(--accent))]" />
                      <span className="font-bold">{t.hero.location}</span>
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">
                      <a href="#contact" className="retro-btn">
                        ✉️ {t.hero.cta}
                      </a>
                      <a href="/Lebenslauf.pdf" download className="retro-btn">
                        <Download size={14} /> {t.hero.resume}
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 items-center font-mono text-sm">
                      <span className="font-bold">Visit me:</span>
                      <a href="https://github.com/donaldtagne" target="_blank" rel="noopener noreferrer" className="retro-btn !py-1 !px-2">
                        <Github size={14}/> GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/chris516/" target="_blank" rel="noopener noreferrer" className="retro-btn !py-1 !px-2">
                        <Linkedin size={14}/> LinkedIn
                      </a>
                      <a href="tel:01788195598" className="retro-btn !py-1 !px-2">
                        <Phone size={14}/> Call
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 bevel-in bg-white p-3 font-mono text-sm">
              👁️ Visitors: <b>00013372</b> &nbsp; | &nbsp; Last updated: 04/2026 &nbsp; | &nbsp;
              <span className="text-[hsl(var(--accent))]">NEW!</span> Resume available for download
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#about" className="inline-flex flex-col items-center text-[hsl(var(--primary))] no-underline">
            <span className="font-mono">scroll down</span>
            <ArrowDown className="animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};
