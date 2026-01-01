import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Mail, MapPin, Camera, MessageCircle, Send } from 'lucide-react';
import { getLocalizedPath } from '@/lib/i18n';
import { baseNavigation } from '@/lib/navigation';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const { t, language } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigation = baseNavigation.map((item) => ({
    name: isClient ? t.nav[item.key] : item.fallbackLabel,
    href: isClient ? getLocalizedPath(item.path, language) : item.path,
  }));

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-[100rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-lg sm:text-xl">AZ</span>
              </div>
              <div className="min-w-0">
                <div className="font-heading font-bold text-white text-base sm:text-xl">
                  Anna Zakernichnaia - Posture & Pain Recovery
                </div>
                <div className="font-paragraph text-gray-300 text-xs sm:text-sm">
                  {isClient ? t.homepage.heroTitle : 'Movement Specialist'}
                </div>
              </div>
            </div>
            <p className="font-paragraph text-gray-300 leading-relaxed max-w-md">
              {isClient ? t.about.subtitle : 'Dedicated to helping you achieve functional recovery through movement, posture re-education, and mobility work.'}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{isClient ? t.footer.quickLinks : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-paragraph text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{isClient ? t.contact.contactInfo : 'Contact'}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-paragraph text-gray-300">{isClient ? t.contact.locationValue : 'Moscow, Russia'}</p>
                </div>
              </div>
              <a
                href="https://t.me/AnnaZakernichnaia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5 text-primary" />
                <span className="font-paragraph">@AnnaZakernichnaia</span>
              </a>
              <a
                href="https://wa.me/79267291313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-paragraph">{isClient ? t.contact.phoneValue : '+7 (926) 729-13-13'}</span>
              </a>
              <a
                href="mailto:ann.massage@icloud.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-paragraph">{isClient ? t.contact.emailValue : 'ann.massage@icloud.com'}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-paragraph text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Anna Zakernichnaia - Posture & Pain Recovery
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/AnnaZakernichnaia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/79267291313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/massage.anna_z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="mailto:ann.massage@icloud.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

