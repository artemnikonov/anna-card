import type { Programs, Testimonials } from '@/entities';
import programsData from '@/data/programs.json';
import testimonialsData from '@/data/testimonials.json';
import type { Locale } from '@/lib/i18n';

export interface DataResult<T> {
  items: T[];
  totalCount: number;
}

export class DataService {
  static async getPrograms(locale: Locale = 'en'): Promise<DataResult<Programs>> {
    const data = programsData as unknown as Record<Locale, Programs[]>;
    const items = data[locale] || data.en;
    return {
      items,
      totalCount: items.length
    };
  }

  static async getTestimonials(locale: Locale = 'en'): Promise<DataResult<Testimonials>> {
    const data = testimonialsData as unknown as Record<Locale, Testimonials[]>;
    const items = data[locale] || data.en;
    return {
      items,
      totalCount: items.length
    };
  }

  static getTestimonialsDisclaimer(locale: Locale = 'en'): string {
    const data = testimonialsData as unknown as { disclaimer: Record<Locale, string> };
    return data.disclaimer?.[locale] || data.disclaimer?.en || '';
  }

}

