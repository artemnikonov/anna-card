import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DataService } from '@/services/data';
import type { Testimonials } from '@/entities';
import { useTranslation } from '@/hooks/useTranslation';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';
import NumberCounter from '@/components/ui/NumberCounter';
import { getLocalizedPath } from '@/lib/i18n';

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
    const [loading, setLoading] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
    const { t, language } = useTranslation();
    const disclaimer = DataService.getTestimonialsDisclaimer(language);

    const toggleExpanded = (id: string) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });

        setTimeout(() => {
            const el = document.getElementById(`testimonial-header-${id}`);
            if (!el) return;
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
    };

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const { items } = await DataService.getTestimonials(language);
                setTestimonials(items);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [language]);

    useEffect(() => {
        if (!loading) return;
        const timer = setTimeout(() => setShowSpinner(true), 1000);
        return () => clearTimeout(timer);
    }, [loading]);

    const MAX_LENGTH = 420;
    const shouldTruncate = (text: string) => text.length > MAX_LENGTH;

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                {showSpinner && <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>}
            </div>
        );
    }

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: testimonials.map((t, index) => ({
            '@type': 'Review',
            position: index + 1,
            author: t.clientName,
            reviewBody: t.testimonialText,
            datePublished: t.dateSubmitted,
        })),
    };

    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="min-h-screen bg-white overflow-x-hidden">
                {/* Header */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                                {t.testimonials.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
                                {t.testimonials.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 sm:py-16 bg-primary">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                            {[
                                { number: 1000, suffix: '+', label: t.testimonials.happyClients },
                                { number: 8, suffix: '+', label: t.testimonials.yearsExperience },
                                { number: null, text: t.testimonials.averageRecoveryNumber, label: t.testimonials.averageRecovery },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.04 }}
                                    className="cursor-default py-4"
                                >
                                    <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                                        {stat.number !== null ? (
                                            <NumberCounter end={stat.number} suffix={stat.suffix} duration={1.3} />
                                        ) : (
                                            stat.text
                                        )}
                                    </div>
                                    <div className="font-paragraph text-sm sm:text-base text-white">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                        {/* Disclaimer */}
                        {disclaimer && (
                            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                <p className="text-sm text-gray-600 text-center italic">
                                    {disclaimer}
                                </p>
                            </div>
                        )}
                        <div className="space-y-8 sm:space-y-10">
                            {testimonials.map((testimonial) => {
                                const isExpanded = expandedIds.has(testimonial._id);
                                const needsTruncation = shouldTruncate(testimonial.testimonialText || '');

                                return (
                                    <motion.div key={testimonial._id} layout>
                                        <Card
                                            id={`testimonial-${testimonial._id}`}
                                            className="relative overflow-visible group rounded-2xl border border-gray-100 bg-white/90 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/60 opacity-80" />
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <CardContent className="relative p-6 sm:p-8">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                        <Quote className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div
                                                            id={`testimonial-header-${testimonial._id}`}
                                                            className="font-heading font-semibold text-lg sm:text-xl text-gray-900 mb-1"
                                                            style={{ scrollMarginTop: '140px' }}
                                                        >
                                                            {testimonial.clientName}
                                                        </div>
                                                        <div className="h-0.5 w-14 bg-primary/50 rounded-full" />
                                                    </div>
                                                </div>

                                                <motion.div
                                                    className="relative overflow-hidden"
                                                    initial={false}
                                                    animate={{
                                                        height: needsTruncation && !isExpanded ? 160 : 'auto',
                                                    }}
                                                    transition={{
                                                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                                                    }}
                                                >
                                                    <div className="font-paragraph text-gray-700/95 leading-relaxed text-[15px] sm:text-[16px]">
                                                        {(testimonial.testimonialText || '').split(/\n+/).map((paragraph, i) => (
                                                            <p key={i} className="mb-3 last:mb-0">
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>

                                                    <motion.div
                                                        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
                                                        initial={false}
                                                        animate={{ opacity: needsTruncation && !isExpanded ? 1 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </motion.div>

                                                {needsTruncation && (
                                                    <div className="mt-4 pt-3 border-t border-gray-100">
                                                        <motion.button
                                                            onClick={() => toggleExpanded(testimonial._id)}
                                                            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                                                            whileTap={{ scale: 0.96 }}
                                                            whileHover={{ scale: 1.03 }}
                                                        >
                                                            {isExpanded ? (
                                                                <>
                                                                    <span>{t.testimonials.showLess}</span>
                                                                    <ChevronUp className="w-4 h-4" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span>{t.testimonials.readMore}</span>
                                                                    <ChevronDown className="w-4 h-4" />
                                                                </>
                                                            )}
                                                        </motion.button>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Programs */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4 sm:mb-6 px-4 leading-tight">
                                {t.testimonials.programsTitle}
                            </h2>
                            <p className="text-base sm:text-lg font-paragraph text-blue-gray max-w-3xl mx-auto px-4 leading-relaxed">
                                {t.testimonials.programsSubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {[
                                {
                                    name: t.testimonials.specialization1Name,
                                    description: t.testimonials.specialization1Desc,
                                    clientCount: t.testimonials.specialization1Count,
                                },
                                {
                                    name: t.testimonials.specialization2Name,
                                    description: t.testimonials.specialization2Desc,
                                    clientCount: t.testimonials.specialization2Count,
                                },
                                {
                                    name: t.testimonials.specialization3Name,
                                    description: t.testimonials.specialization3Desc,
                                    clientCount: t.testimonials.specialization3Count,
                                },
                                {
                                    name: t.testimonials.specialization4Name,
                                    description: t.testimonials.specialization4Desc,
                                    clientCount: t.testimonials.specialization4Count,
                                },
                            ].map((program) => (
                                <Card
                                    key={program.name}
                                    className="h-full text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 bg-white"
                                >
                                    <CardContent className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-heading !font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
                                            {program.name}
                                        </h3>
                                        <p className="font-paragraph text-sm sm:text-base text-blue-gray mb-3 sm:mb-4 leading-relaxed">
                                            {program.description}
                                        </p>
                                        <Badge variant="outline" className="text-xs sm:text-sm text-primary border-primary">
                                            {program.clientCount}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 sm:py-20 md:py-24 bg-primary">
                    <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 sm:mb-6 px-4">
                            {t.testimonials.readyToJoin}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-paragraph text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                            {t.testimonials.readyToJoinSubtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                            <a href={getLocalizedPath('/contact', language)} className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
                                >
                                    {t.testimonials.startYourStory}
                                </Button>
                            </a>
                            <a href={getLocalizedPath('/services', language)} className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
                                >
                                    {t.nav.services}
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}