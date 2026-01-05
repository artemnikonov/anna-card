import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { DataService } from '@/services/data';
import type { Programs } from '@/entities';
import { useTranslation } from '@/hooks/useTranslation';
import { CheckCircle } from 'lucide-react';
import { getLocalizedPath } from '@/lib/i18n';

export default function ServicesPage() {
  const [programs, setPrograms] = useState<Programs[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t, language } = useTranslation();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { items } = await DataService.getPrograms(language);
        setPrograms(items);
        setHasError(false);
      } catch (error) {
        console.error('Error fetching programs:', error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [language]);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setShowSpinner(true), 1000);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        {showSpinner && <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>}
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">
            {t.services.errorLoadingPrograms}
          </h2>
          <p className="font-paragraph text-blue-gray mb-6">
            {t.services.errorLoadingProgramsDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/AnnaZakernichnaia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white">
                {t.contact.messageOnTelegram}
              </Button>
            </a>
            <a
              href="https://wa.me/79267291313"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                {t.contact.messageOnWhatsapp}
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              {t.services.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <div className="relative">
                    <Image
                      src={program.programImage}
                      alt={program.programName || 'Program'}
                      width={600}
                      className="w-full h-80 sm:h-96 object-cover rounded-t-lg"
                    />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold text-gray-800">
                      {program.programName}
                    </CardTitle>
                    <p className="font-paragraph text-blue-gray">
                      {program.shortDescription}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="font-paragraph text-gray-700 leading-relaxed">
                      {program.fullDescription}
                    </p>
                    
                    {program.keyBenefits && (
                      <div>
                        <h4 className="font-heading font-semibold text-gray-800 mb-3">{t.services.keyBenefits}</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.keyBenefits.split(',').map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="font-paragraph text-sm text-gray-700">
                                {benefit.trim()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Approach CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6 leading-tight">
              {t.services.personalizedApproach}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-8 leading-relaxed">
              {t.services.personalizedApproachDesc}
            </p>
            <a href={getLocalizedPath('/methodology', language)} aria-label={t.services.ariaLearnMoreMethodology}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-heading"
              >
                {t.services.learnMoreMethodology}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6 leading-tight">
              {t.services.getStarted}
            </h2>
            <p className="text-lg sm:text-xl font-paragraph text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.services.getStartedSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getLocalizedPath('/contact', language)} className="w-full sm:w-auto" aria-label={t.services.ariaScheduleConsultation}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base sm:text-lg font-medium w-full"
                >
                  {t.services.scheduleConsultation}
                </Button>
              </a>
              <a href={getLocalizedPath('/methodology', language)} className="w-full sm:w-auto" aria-label={t.services.ariaViewMethodology}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base sm:text-lg font-medium w-full"
                >
                  {t.nav.methodology}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}