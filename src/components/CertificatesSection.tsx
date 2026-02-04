import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    name: 'Master Generative AI',
    issuer: 'Great Learning',
    date: 'December 2025',
    verifyUrl: 'https://www.mygreatlearning.com/certificate/XVAXSYKB',
  },
  {
    name: 'AWS Generative AI Lab Series',
    issuer: 'Amazon Web Services (Coursera)',
    date: 'December 2025',
    verifyUrl: 'https://coursera.org/verify/A4MKBIZPO0D0',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Databricks Academy',
    date: 'December 2025',
    verifyUrl: null,
  },
  {
    name: 'Langchain Basics for Beginners',
    issuer: 'Great Learning',
    date: 'December 2025',
    verifyUrl: 'https://www.mygreatlearning.com/certificate/DEHEAHAC',
  },
  {
    name: 'AI Agents Using RAG and LangChain',
    issuer: 'IBM (Coursera)',
    date: 'December 2025',
    verifyUrl: 'https://coursera.org/verify/LQHPORZ43IVQ',
  },
  {
    name: 'Machine Learning with Python',
    issuer: 'IBM (Coursera)',
    date: 'July 2025',
    verifyUrl: 'https://coursera.org/verify/J1ZPEAYAIX6B',
  },
  {
    name: 'ChatGPT API for Developers',
    issuer: 'Coursera',
    date: 'December 2025',
    verifyUrl: 'https://coursera.org/verify/ZW6VGX17KQT4',
  },
];

export const CertificatesSection = () => {
  const { language } = useLanguage();

  const title = language === 'de' ? 'Zertifikate' : 'Certificates';
  const verifyText = language === 'de' ? 'Verifizieren' : 'Verify';
  const downloadText = language === 'de' ? 'Alle Zertifikate herunterladen' : 'Download all certificates';

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-primary">{title}</span>
            </h2>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href="/Zertifikate.pdf" download>
                <Download className="w-4 h-4" />
                {downloadText}
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground leading-tight mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mb-3">
                      {cert.date}
                    </p>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        {verifyText}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
