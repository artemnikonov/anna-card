import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { CheckCircle, Users, TrendingUp, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import NumberCounter from '@/components/ui/NumberCounter';
import GlowButton from '@/components/ui/GlowButton';
import { getLocalizedPath } from '@/lib/i18n';

export default function HomePage() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-gray/5 to-olive-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-7xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <Image
                src="/images/home/anna-avatar.jpg"
                width={250}
                className="w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full mx-auto mb-8 object-cover object-[20%_30%] shadow-sm border-4 border-white/20"
                alt="Anna Z. - Professional Portrait" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mb-6 leading-[0.9]"
            >
              {t.homepage.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto mb-8"
            >
              {t.homepage.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0"
            >
              <GlowButton
                href={getLocalizedPath('/contact', language)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                {t.homepage.bookSession}
              </GlowButton>
              <a href={getLocalizedPath('/about', language)} className="w-full sm:w-auto" aria-label={t.homepage.ariaLearnMoreAboutAnna}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full"
                >
                  {t.homepage.learnMore}
                </Button>
              </a>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => {
                const nextSection = document.querySelector('#homepage-main-content');
                if (nextSection) {
                  const headerOffset = 80;
                  const elementPosition = nextSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="mt-8 sm:mt-12 mx-auto flex flex-col items-center gap-2 text-blue-gray/70 hover:text-blue-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              aria-label={t.homepage.heroScrollHint}
            >
              <span className="text-[10px] sm:text-xs tracking-[0.18em] text-blue-gray/60 text-center">
                {t.homepage.heroScrollHint}
              </span>
              <span className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-transparent via-blue-gray/50 to-blue-gray/80" />
            </motion.button>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section id="homepage-main-content" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">
                <NumberCounter end={1000} suffix="+" duration={1.5} />
              </h3>
              <p className="font-paragraph text-blue-gray">{t.homepage.clientsHelped}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">
                <NumberCounter end={8} suffix="+" duration={1} />
              </h3>
              <p className="font-paragraph text-blue-gray">{t.homepage.yearsExperience}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">
                <NumberCounter end={100} suffix="%" duration={1.2} />
              </h3>
              <p className="font-paragraph text-blue-gray">{t.homepage.personalized}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Clock className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">{t.homepage.averageRecoveryNumber}</h3>
              <p className="font-paragraph text-blue-gray">{t.homepage.averageRecovery}</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Preview */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-6 leading-snug">
                {t.homepage.meetAnna}
              </h2>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                {t.homepage.aboutAnnaText1}
              </p>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-8 leading-relaxed">
                {t.homepage.aboutAnnaText2}
              </p>
              <a href={getLocalizedPath('/about', language)} aria-label={t.homepage.ariaLearnMoreAboutAnna}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  {t.homepage.learnMoreAboutAnna}
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/portrait.jpg"
                  alt="Anna Z. - Professional Portrait"
                  width={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-6 leading-tight">
              {t.homepage.specializedPrograms}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto leading-relaxed">
              {t.homepage.specializedProgramsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: t.homepage.postureCorrection,
                description: t.homepage.postureCorrectionDesc,
                icon: "🏃‍♀️"
              },
              {
                title: t.homepage.deskWorkerRecovery,
                description: t.homepage.deskWorkerRecoveryDesc,
                icon: "💻"
              },
              {
                title: t.homepage.mobilityRehab,
                description: t.homepage.mobilityRehabDesc,
                icon: "🤸‍♀️"
              },
              {
                title: t.homepage.painReliefCoaching,
                description: t.homepage.painReliefCoachingDesc,
                icon: "🎯"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group border border-gray-200 hover:border-primary/30 bg-white">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-heading !font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-sm sm:text-base text-blue-gray leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href={getLocalizedPath('/services', language)} aria-label={t.homepage.ariaViewAllPrograms}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                {t.homepage.viewAllPrograms}
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
              {t.homepage.readyToStart}
            </h2>
            <p className="text-lg sm:text-xl font-paragraph text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.homepage.readyToStartSubtitle}
            </p>
            <a href={getLocalizedPath('/contact', language)} className="inline-block" aria-label={t.homepage.ariaBookYourSession}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base sm:text-lg font-medium"
              >
                {t.homepage.bookYourSession}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}