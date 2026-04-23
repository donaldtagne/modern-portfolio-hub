import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Donald Tagne. {t.footer.rights}
          </p>
          <div className="glow-line w-32 hidden md:block" />
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">&lt;</span>
            Built with passion
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
