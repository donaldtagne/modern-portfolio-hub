import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t-2 border-black bg-[hsl(50_20%_82%)]">
      <div className="glow-line" />
      <div className="container mx-auto px-4 py-6 text-center font-mono">
        <p className="text-sm">
          © {currentYear} Donald Tagne. {t.footer.rights}
        </p>
        <p className="text-xs mt-2">
          <span className="blink text-[hsl(var(--accent))]">★</span>{' '}
          Best viewed at 1024×768 in Netscape Navigator 4.0{' '}
          <span className="blink text-[hsl(var(--accent))]">★</span>
        </p>
        <p className="text-xs mt-1">
          &lt;/&gt; Hand-crafted with HTML, coffee &amp; ❤️
        </p>
      </div>
    </footer>
  );
};
