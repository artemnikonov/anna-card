import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { useTranslation } from '@/hooks/useTranslation';
import { MapPin, Mail, Camera, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

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
              {t.contact.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Telegram - Primary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full border-2 border-primary">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading !font-bold text-gray-800 mb-1.5">
                    Telegram
                  </h3>
                  <p className="text-xs font-paragraph text-gray-500 mb-2">
                    {t.contact.telegramDesc}
                  </p>
                  <a
                    href="https://t.me/AnnaZakernichnaia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={t.contact.messageOnTelegram}
                  >
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      {t.contact.messageOnTelegram}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* WhatsApp - Alternative Primary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading !font-bold text-gray-800 mb-1.5">
                    WhatsApp
                  </h3>
                  <p className="text-xs font-paragraph text-gray-500 mb-2">
                    {t.contact.whatsappDesc}
                  </p>
                  <a
                    href="https://wa.me/79267291313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={t.contact.messageOnWhatsapp}
                  >
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      {t.contact.messageOnWhatsapp}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading !font-bold text-gray-800 mb-1.5">
                    Instagram
                  </h3>
                  <p className="text-xs font-paragraph text-gray-500 mb-2">
                    {t.contact.instagramDesc}
                  </p>
                  <a
                    href="https://www.instagram.com/massage.anna_z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={t.contact.followOnInstagram}
                  >
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      {t.contact.followOnInstagram}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email - Last Resort */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading !font-bold text-gray-800 mb-1.5">
                    Email
                  </h3>
                  <p className="text-xs font-paragraph text-gray-500 mb-2">
                    {t.contact.emailDesc}
                  </p>
                  <a
                    href="mailto:ann.massage@icloud.com"
                    className="inline-block"
                    aria-label={t.contact.sendEmail}
                  >
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      {t.contact.sendEmail}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-gray-800">
                    {t.contact.contactInformation}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-1">{t.contact.location}</h4>
                      <p className="font-paragraph text-blue-gray">
                        {t.contact.locationValue}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-1">WhatsApp</h4>
                      <p className="font-paragraph text-blue-gray">{t.contact.phoneValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Send className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-1">Telegram</h4>
                      <p className="font-paragraph text-blue-gray">@AnnaZakernichnaia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-1">{t.contact.emailLabel}</h4>
                      <p className="font-paragraph text-blue-gray">{t.contact.emailValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-gray-800 mb-1">{t.contact.responseTime}</h4>
                      <p className="font-paragraph text-blue-gray">
                        {t.contact.responseTimeValue}<br />
                        <span className="text-sm">{t.contact.emergencyConsultations}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recovery Studio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-0">
                  <Image
                    src="/images/contact/recovery-studio.jpg"
                    alt="Anna Z. Recovery Studio in Limassol, Cyprus"
                    width={600}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                      {t.contact.recoveryStudio}
                    </h4>
                    <p className="font-paragraph text-blue-gray">
                      {t.contact.recoveryStudioDesc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              {t.contact.faqTitle}
            </h2>
            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
              {t.contact.faqSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                question: t.contact.faq1Q,
                answer: t.contact.faq1A
              },
              {
                question: t.contact.faq2Q,
                answer: t.contact.faq2A
              },
              {
                question: t.contact.faq3Q,
                answer: t.contact.faq3A
              },
              {
                question: t.contact.faq4Q,
                answer: t.contact.faq4A
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-gray-800 mb-3">
                      {faq.question}
                    </h4>
                    <p className="font-paragraph text-blue-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}