import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, Target, TrendingUp, CheckCircle, Clock, Users } from 'lucide-react';
import GlowButton from '@/components/ui/GlowButton';
import { getLocalizedPath } from '@/lib/i18n';

export default function MethodologyPage() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-800 mb-6">
              {t.methodology.title}
            </h1>
            <p className="text-lg sm:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto">
              {t.methodology.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                {t.methodology.evidenceBased}
              </h2>
              <p className="text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                {t.methodology.evidenceBasedDesc}
              </p>
              <p className="text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                {t.methodology.evidenceBasedDesc2}
              </p>
              <p className="text-lg font-paragraph text-blue-gray mb-8 leading-relaxed">
                {t.methodology.evidenceBasedDesc3}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/methodology/overview.jpg"
                alt="Anna Z. demonstrating assessment techniques"
                width={600}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-6">
              {t.methodology.ourApproach}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto">
              {t.methodology.ourApproachSubtitle}
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Step 1: Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-heading font-bold text-white">01</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                  {t.methodology.assessment}
                </h3>
                <p className="text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                  {t.methodology.assessmentDesc}
                </p>
                <div className="space-y-3">
                  {[
                    t.methodology.assessmentItem1,
                    t.methodology.assessmentItem2,
                    t.methodology.assessmentItem3,
                    t.methodology.assessmentItem4,
                    t.methodology.assessmentItem5
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-paragraph text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src="/images/methodology/assessment.jpg"
                  alt="Comprehensive assessment process"
                  width={600}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Step 2: Movement Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/methodology/planning.jpg"
                  alt="Personalized movement plan development"
                  width={600}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-heading font-bold text-white">02</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                  {t.methodology.planning}
                </h3>
                <p className="text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                  {t.methodology.planningDesc}
                </p>
                <div className="space-y-3">
                  {[
                    t.methodology.planningItem1,
                    t.methodology.planningItem2,
                    t.methodology.planningItem3,
                    t.methodology.planningItem4,
                    t.methodology.planningItem5
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-paragraph text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 3: Progress Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-heading font-bold text-white">03</span>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                  {t.methodology.monitoring}
                </h3>
                <p className="text-lg font-paragraph text-blue-gray mb-6 leading-relaxed">
                  {t.methodology.monitoringDesc}
                </p>
                <div className="space-y-3">
                  {[
                    t.methodology.monitoringItem1,
                    t.methodology.monitoringItem2,
                    t.methodology.monitoringItem3,
                    t.methodology.monitoringItem4,
                    t.methodology.monitoringItem5
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-paragraph text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src="/images/methodology/monitoring.jpg"
                  alt="Progress tracking and monitoring"
                  width={600}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 mb-6 leading-tight">
              {t.methodology.whyItWorks}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto leading-relaxed">
              {t.methodology.whyItWorksSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: t.methodology.individualized,
                description: t.methodology.individualizedDesc
              },
              {
                icon: Target,
                title: t.methodology.comprehensive,
                description: t.methodology.comprehensiveDesc
              },
              {
                icon: Clock,
                title: t.methodology.progressive,
                description: t.methodology.progressiveDesc
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-blue-gray leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6 leading-tight">
              {t.methodology.startToday}
            </h2>
            <p className="text-lg sm:text-xl font-paragraph text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.methodology.startTodaySubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton
                href={getLocalizedPath('/contact', language)}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium"
              >
                {t.homepage.bookSession}
              </GlowButton>
              <a href={getLocalizedPath('/services', language)}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium"
                >
                  {t.nav.services}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}