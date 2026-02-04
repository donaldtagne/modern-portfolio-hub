import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          {t.experience.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-glow z-10" />

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} pl-8 lg:pl-0`}>
                  <div className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gradient">{job.company}</h3>
                        <p className="text-foreground font-medium mt-1">{job.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        {job.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
