import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigate } from 'astro:transitions/client';
import { getLocaleFromPathname, getLocalizedPath } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';

    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const currentLocale = getLocaleFromPathname(currentPath);

      const basePath = currentLocale === 'ru'
        ? currentPath.replace(/^\/ru/, '') || '/'
        : currentPath || '/';

      const newPath = getLocalizedPath(basePath, newLanguage);

      setLanguage(newLanguage);
      navigate(newPath, { history: 'replace' });
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {isClient ? (language === 'en' ? 'RU' : 'EN') : 'RU'}
      </span>
    </Button>
  );
}