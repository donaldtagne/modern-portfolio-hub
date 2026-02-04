import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Flag, Heart, Car, Dumbbell } from 'lucide-react';

export const PersonalInfoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Persönliche Angaben */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wider">
                {t.personal.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.personal.birthdate}</p>
                    <p className="font-medium">03. Jan. 1999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Flag className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.personal.nationality}</p>
                    <p className="font-medium">{t.personal.nationalityValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.personal.maritalStatus}</p>
                    <p className="font-medium">{t.personal.maritalStatusValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Führerschein */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wider">
                {t.personal.driverLicense}
              </h3>
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.personal.licenseClass}</p>
                  <p className="font-medium">{t.personal.licenseClassValue}</p>
                </div>
              </div>
            </div>

            {/* Hobbys */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wider">
                {t.personal.hobbies}
              </h3>
              <div className="flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex flex-wrap gap-2">
                  {t.personal.hobbiesList.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
