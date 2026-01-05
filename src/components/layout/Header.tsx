import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, X } from 'lucide-react';
import { getLocalizedPath } from '@/lib/i18n';
import { baseNavigation } from '@/lib/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [mounted, setMounted] = useState(false);
  const { t, language } = useTranslation();

  useEffect(() => {
    setMounted(true);
    setCurrentPath(window.location.pathname);
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentPath(window.location.pathname);
      setIsScrolled(false);
    };

    document.addEventListener('astro:page-load', handleLocationChange);
    return () => document.removeEventListener('astro:page-load', handleLocationChange);
  }, []);

  useEffect(() => {
    // Prevent page scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navigation = baseNavigation.map((item) => ({
    name: t.nav[item.key as keyof typeof t.nav],
    href: getLocalizedPath(item.path, language),
  }));

  const isActive = (path: string) => {
    if (!mounted) return false;
    const normalizedPath = currentPath.replace(/^\/ru/, '') || '/';
    const normalizedHref = path.replace(/^\/ru/, '') || '/';

    if (normalizedHref === '/') {
      return normalizedPath === '/';
    }
    return normalizedPath.startsWith(normalizedHref);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-[100rem]">
          <div className="flex items-center justify-between h-20">
            <a
              href={getLocalizedPath('/', language)}
              className="flex items-center space-x-2 sm:space-x-3 min-w-0"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-sm sm:text-lg">AZ</span>
              </div>
              <div className="min-w-0">
                <div className="font-heading font-bold text-gray-800 text-sm sm:text-lg whitespace-nowrap">
                  Anna Zakernichnaia
                </div>
                <div className="font-paragraph text-[10px] sm:text-xs text-blue-gray -mt-1 whitespace-nowrap" suppressHydrationWarning>
                  {t.common.tagline}
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center space-x-8" suppressHydrationWarning>
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`font-paragraph transition-colors duration-200 relative group ${
                      active
                        ? 'text-primary font-medium'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <a href={getLocalizedPath('/contact', language)}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" suppressHydrationWarning>
                  {t.homepage.bookSession}
                </Button>
              </a>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          />
          <div
            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 bg-white z-[70] lg:hidden shadow-xl overflow-y-auto"
            style={{ animation: 'slideInRight 0.3s ease-out' }}
          >
            <div className="flex flex-col min-h-full p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2 py-6 flex-1" suppressHydrationWarning>
                {navigation.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-paragraph text-lg transition-all duration-200 px-4 py-3 rounded-lg ${
                        active
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              <div className="border-t pt-6">
                <a href={getLocalizedPath('/contact', language)} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" suppressHydrationWarning>
                    {t.homepage.bookSession}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

