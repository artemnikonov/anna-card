import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Heart, Target, Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/i18n';

export default function AboutPage() {
  const { t, language } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) return;
    const timer = setTimeout(() => setShowSpinner(true), 1000);
    return () => clearTimeout(timer);
  }, [isReady]);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        {showSpinner && <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>}
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
              {t.about.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about/about_job.webp"
                alt="Anna Z. - Professional movement coaching session"
                width={600}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-6 leading-tight">
                {t.about.partnerInRecovery}
              </h2>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                {t.about.aboutText1}
              </p>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                {t.about.aboutText2}
              </p>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-8 leading-relaxed">
                {t.about.aboutText3}
              </p>
              <a href={getLocalizedPath('/contact', language)} aria-label="Start your journey">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  {t.about.startYourJourney}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              {t.about.myPhilosophy}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.about.philosophySubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading !font-bold text-gray-800 mb-3 sm:mb-4">
                    {t.about.functionalMovement}
                  </h3>
                  <p className="text-sm sm:text-base font-paragraph text-blue-gray leading-relaxed">
                    {t.about.functionalMovementDesc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading !font-bold text-gray-800 mb-3 sm:mb-4">
                    {t.about.postureReeducation}
                  </h3>
                  <p className="text-sm sm:text-base font-paragraph text-blue-gray leading-relaxed">
                    {t.about.postureReeducationDesc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading !font-bold text-gray-800 mb-3 sm:mb-4">
                    {t.about.mobilityWork}
                  </h3>
                  <p className="text-sm sm:text-base font-paragraph text-blue-gray leading-relaxed">
                    {t.about.mobilityWorkDesc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              {t.about.qualifications}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.about.qualificationsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: t.about.experienceYears,
                description: t.about.experienceYearsDesc
              },
              {
                icon: Target,
                title: t.about.continuingEducation,
                description: t.about.continuingEducationDesc
              },
              {
                icon: Heart,
                title: t.about.holisticApproach,
                description: t.about.holisticApproachDesc
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-heading !font-bold text-gray-800 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-paragraph text-blue-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                {t.about.beyondClinic}
              </h2>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-4 sm:mb-6 leading-relaxed">
                {t.about.beyondClinicText1}
              </p>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-4 sm:mb-6 leading-relaxed">
                {t.about.beyondClinicText2}
              </p>
              <p className="text-base sm:text-lg font-paragraph text-blue-gray mb-6 sm:mb-8 leading-relaxed">
                {t.about.beyondClinicText3}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/about/about_hobby.webp"
                alt="Anna Z. - Personal portrait in natural setting"
                width={600}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>
          </div>
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
              {t.about.readyToTransform}
            </h2>
            <p className="text-lg sm:text-xl font-paragraph text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.about.readyToTransformSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getLocalizedPath('/contact', language)} className="w-full sm:w-auto" aria-label="Book a session">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base sm:text-lg font-medium w-full"
                >
                  {t.about.bookSession}
                </Button>
              </a>
              <a href={getLocalizedPath('/services', language)} className="w-full sm:w-auto" aria-label="View programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-base sm:text-lg font-medium w-full"
                >
                  {t.about.viewPrograms}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}