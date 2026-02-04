import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Calendar, Languages } from 'lucide-react';

export const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          {t.education.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t.education.degrees.map((degree, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <GraduationCap size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{degree.degree}</h3>
                    <p className="text-primary font-medium">{degree.institution}</p>
                    <p className="text-muted-foreground mt-2">{degree.field}</p>
                    <p className="text-sm text-muted-foreground">{degree.focus}</p>
                    <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      {degree.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="glass rounded-xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <Languages size={24} className="text-primary" />
              <h3 className="text-xl font-bold">{t.languages.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.languages.list.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 rounded-full text-foreground font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
