import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  id: string;
  clientName: string;
  testimonialText: string;
  readMoreText: string;
  showLessText: string;
}

const MAX_LENGTH = 420;

export function ExpandableCard({
  id,
  clientName,
  testimonialText,
  readMoreText,
  showLessText
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = testimonialText.length > MAX_LENGTH;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      setTimeout(() => {
        const el = document.getElementById(`testimonial-header-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  };

  const paragraphs = testimonialText.split(/\n+/);

  return (
    <motion.div layout>
      <Card
        id={`testimonial-${id}`}
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
                id={`testimonial-header-${id}`}
                className="font-heading font-semibold text-lg sm:text-xl text-gray-900 mb-1"
                style={{ scrollMarginTop: '140px' }}
              >
                {clientName}
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
              {paragraphs.map((paragraph, i) => (
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
                onClick={toggleExpanded}
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
              >
                {isExpanded ? (
                  <>
                    <span>{showLessText}</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>{readMoreText}</span>
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
}
