import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Sparkles, Zap } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Brain, label: 'LLM Expert' },
    { icon: Sparkles, label: 'GenAI' },
    { icon: Zap, label: 'RAG Systems' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            {t.about.title}
          </h2>

          <div className="glass rounded-2xl p-8 lg:p-12 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t.about.focus}
            </p>

            {/* Highlight Tags */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
                >
                  <Icon size={16} className="text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
